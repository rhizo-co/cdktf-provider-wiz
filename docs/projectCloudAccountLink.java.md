# `projectCloudAccountLink` Submodule <a name="`projectCloudAccountLink` Submodule" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCloudAccountLinkA <a name="ProjectCloudAccountLinkA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link wiz_project_cloud_account_link}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkA;

ProjectCloudAccountLinkA.Builder.create(Construct scope, java.lang.String id)
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
    .projectId(java.lang.String)
//  .cloudAccountId(java.lang.String)
//  .environment(java.lang.String)
//  .externalCloudAccountId(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceTags(IResolvable)
//  .resourceTags(java.util.List<ProjectCloudAccountLinkResourceTagsA>)
//  .shared(java.lang.Boolean)
//  .shared(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.String</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.externalCloudAccountId">externalCloudAccountId</a></code> | <code>java.lang.String</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceTags">resourceTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>></code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `cloudAccountId`<sup>Optional</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.cloudAccountId"></a>

- *Type:* java.lang.String

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The environment.

* Allowed values:
  - PRODUCTION
  - STAGING
  - DEVELOPMENT
  - TESTING
  - OTHER

  * Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `externalCloudAccountId`<sup>Optional</sup> <a name="externalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.externalCloudAccountId"></a>

- *Type:* java.lang.String

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceGroups"></a>

- *Type:* java.util.List<java.lang.String>

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.resourceTags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>>

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.shared"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId">resetCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId">resetExternalCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared">resetShared</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags"></a>

```java
public void putResourceTags(IResolvable OR java.util.List<ProjectCloudAccountLinkResourceTagsA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>>

---

##### `resetCloudAccountId` <a name="resetCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId"></a>

```java
public void resetCloudAccountId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetExternalCloudAccountId` <a name="resetExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId"></a>

```java
public void resetExternalCloudAccountId()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared"></a>

```java
public void resetShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkA;

ProjectCloudAccountLinkA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkA;

ProjectCloudAccountLinkA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkA;

ProjectCloudAccountLinkA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkA;

ProjectCloudAccountLinkA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectCloudAccountLinkA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectCloudAccountLinkA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectCloudAccountLinkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCloudAccountLinkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput">externalCloudAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput">resourceTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput">sharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId">externalCloudAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags"></a>

```java
public ProjectCloudAccountLinkResourceTagsAList getResourceTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a>

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput"></a>

```java
public java.lang.String getCloudAccountIdInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `externalCloudAccountIdInput`<sup>Optional</sup> <a name="externalCloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput"></a>

```java
public java.lang.String getExternalCloudAccountIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput"></a>

```java
public java.lang.Object getResourceTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>>

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput"></a>

```java
public java.lang.Object getSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId"></a>

```java
public java.lang.String getCloudAccountId();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `externalCloudAccountId`<sup>Required</sup> <a name="externalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId"></a>

```java
public java.lang.String getExternalCloudAccountId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLinkAConfig <a name="ProjectCloudAccountLinkAConfig" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkAConfig;

ProjectCloudAccountLinkAConfig.builder()
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
    .projectId(java.lang.String)
//  .cloudAccountId(java.lang.String)
//  .environment(java.lang.String)
//  .externalCloudAccountId(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceTags(IResolvable)
//  .resourceTags(java.util.List<ProjectCloudAccountLinkResourceTagsA>)
//  .shared(java.lang.Boolean)
//  .shared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.String</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId">externalCloudAccountId</a></code> | <code>java.lang.String</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags">resourceTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>></code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `cloudAccountId`<sup>Optional</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId"></a>

```java
public java.lang.String getCloudAccountId();
```

- *Type:* java.lang.String

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment.

* Allowed values:
  - PRODUCTION
  - STAGING
  - DEVELOPMENT
  - TESTING
  - OTHER

  * Defaults to `PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#environment ProjectCloudAccountLinkA#environment}

---

##### `externalCloudAccountId`<sup>Optional</sup> <a name="externalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId"></a>

```java
public java.lang.String getExternalCloudAccountId();
```

- *Type:* java.lang.String

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags"></a>

```java
public java.lang.Object getResourceTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>>

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

### ProjectCloudAccountLinkResourceTagsA <a name="ProjectCloudAccountLinkResourceTagsA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkResourceTagsA;

ProjectCloudAccountLinkResourceTagsA.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkResourceTagsAList <a name="ProjectCloudAccountLinkResourceTagsAList" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkResourceTagsAList;

new ProjectCloudAccountLinkResourceTagsAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get"></a>

```java
public ProjectCloudAccountLinkResourceTagsAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>>

---


### ProjectCloudAccountLinkResourceTagsAOutputReference <a name="ProjectCloudAccountLinkResourceTagsAOutputReference" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project_cloud_account_link.ProjectCloudAccountLinkResourceTagsAOutputReference;

new ProjectCloudAccountLinkResourceTagsAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA">ProjectCloudAccountLinkResourceTagsA</a>

---



