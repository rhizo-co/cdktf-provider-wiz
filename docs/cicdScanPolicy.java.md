# `cicdScanPolicy` Submodule <a name="`cicdScanPolicy` Submodule" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CicdScanPolicy <a name="CicdScanPolicy" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicy;

CicdScanPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .diskSecretsParams(CicdScanPolicyDiskSecretsParams)
//  .diskVulnerabilitiesParams(CicdScanPolicyDiskVulnerabilitiesParams)
//  .iacParams(CicdScanPolicyIacParams)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskSecretsParams">diskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskVulnerabilitiesParams">diskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.iacParams">iacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `diskSecretsParams`<sup>Optional</sup> <a name="diskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskSecretsParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `diskVulnerabilitiesParams`<sup>Optional</sup> <a name="diskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.diskVulnerabilitiesParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `iacParams`<sup>Optional</sup> <a name="iacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.iacParams"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams">putDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams">putDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams">putIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams">resetDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams">resetDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams">resetIacParams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiskSecretsParams` <a name="putDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams"></a>

```java
public void putDiskSecretsParams(CicdScanPolicyDiskSecretsParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `putDiskVulnerabilitiesParams` <a name="putDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams"></a>

```java
public void putDiskVulnerabilitiesParams(CicdScanPolicyDiskVulnerabilitiesParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `putIacParams` <a name="putIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams"></a>

```java
public void putIacParams(CicdScanPolicyIacParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskSecretsParams` <a name="resetDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams"></a>

```java
public void resetDiskSecretsParams()
```

##### `resetDiskVulnerabilitiesParams` <a name="resetDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams"></a>

```java
public void resetDiskVulnerabilitiesParams()
```

##### `resetIacParams` <a name="resetIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams"></a>

```java
public void resetIacParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicy;

CicdScanPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicy;

CicdScanPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicy;

CicdScanPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicy;

CicdScanPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CicdScanPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CicdScanPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CicdScanPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CicdScanPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CicdScanPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin">builtin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams">diskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams">diskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams">iacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput">diskSecretsParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput">diskVulnerabilitiesParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput">iacParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin"></a>

```java
public IResolvable getBuiltin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `diskSecretsParams`<sup>Required</sup> <a name="diskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams"></a>

```java
public CicdScanPolicyDiskSecretsParamsOutputReference getDiskSecretsParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a>

---

##### `diskVulnerabilitiesParams`<sup>Required</sup> <a name="diskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams"></a>

```java
public CicdScanPolicyDiskVulnerabilitiesParamsOutputReference getDiskVulnerabilitiesParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a>

---

##### `iacParams`<sup>Required</sup> <a name="iacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams"></a>

```java
public CicdScanPolicyIacParamsOutputReference getIacParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskSecretsParamsInput`<sup>Optional</sup> <a name="diskSecretsParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput"></a>

```java
public CicdScanPolicyDiskSecretsParams getDiskSecretsParamsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `diskVulnerabilitiesParamsInput`<sup>Optional</sup> <a name="diskVulnerabilitiesParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput"></a>

```java
public CicdScanPolicyDiskVulnerabilitiesParams getDiskVulnerabilitiesParamsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `iacParamsInput`<sup>Optional</sup> <a name="iacParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput"></a>

```java
public CicdScanPolicyIacParams getIacParamsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CicdScanPolicyConfig <a name="CicdScanPolicyConfig" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyConfig;

CicdScanPolicyConfig.builder()
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
//  .description(java.lang.String)
//  .diskSecretsParams(CicdScanPolicyDiskSecretsParams)
//  .diskVulnerabilitiesParams(CicdScanPolicyDiskVulnerabilitiesParams)
//  .iacParams(CicdScanPolicyIacParams)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams">diskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams">diskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams">iacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `diskSecretsParams`<sup>Optional</sup> <a name="diskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams"></a>

```java
public CicdScanPolicyDiskSecretsParams getDiskSecretsParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `diskVulnerabilitiesParams`<sup>Optional</sup> <a name="diskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams"></a>

```java
public CicdScanPolicyDiskVulnerabilitiesParams getDiskVulnerabilitiesParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `iacParams`<sup>Optional</sup> <a name="iacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams"></a>

```java
public CicdScanPolicyIacParams getIacParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

### CicdScanPolicyDiskSecretsParams <a name="CicdScanPolicyDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyDiskSecretsParams;

CicdScanPolicyDiskSecretsParams.builder()
    .countThreshold(java.lang.Number)
//  .pathAllowList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold">countThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList">pathAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}. |

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold"></a>

```java
public java.lang.Number getCountThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `pathAllowList`<sup>Optional</sup> <a name="pathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList"></a>

```java
public java.util.List<java.lang.String> getPathAllowList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

### CicdScanPolicyDiskVulnerabilitiesParams <a name="CicdScanPolicyDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyDiskVulnerabilitiesParams;

CicdScanPolicyDiskVulnerabilitiesParams.builder()
    .ignoreUnfixed(java.lang.Boolean)
    .ignoreUnfixed(IResolvable)
    .packageAllowList(java.util.List<java.lang.String>)
    .packageCountThreshold(java.lang.Number)
    .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed">ignoreUnfixed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList">packageAllowList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold">packageCountThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity">severity</a></code> | <code>java.lang.String</code> | Severity. |

---

##### `ignoreUnfixed`<sup>Required</sup> <a name="ignoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed"></a>

```java
public java.lang.Object getIgnoreUnfixed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

##### `packageAllowList`<sup>Required</sup> <a name="packageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList"></a>

```java
public java.util.List<java.lang.String> getPackageAllowList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

##### `packageCountThreshold`<sup>Required</sup> <a name="packageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold"></a>

```java
public java.lang.Number getPackageCountThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

### CicdScanPolicyIacParams <a name="CicdScanPolicyIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyIacParams;

CicdScanPolicyIacParams.builder()
    .countThreshold(java.lang.Number)
    .severityThreshold(java.lang.String)
//  .builtinIgnoreTagsEnabled(java.lang.Boolean)
//  .builtinIgnoreTagsEnabled(IResolvable)
//  .customIgnoreTags(IResolvable)
//  .customIgnoreTags(java.util.List<CicdScanPolicyIacParamsCustomIgnoreTags>)
//  .ignoredRules(java.util.List<java.lang.String>)
//  .securityFrameworks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold">countThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold">severityThreshold</a></code> | <code>java.lang.String</code> | Severity threshold. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled">builtinIgnoreTagsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags">customIgnoreTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>></code> | custom_ignore_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules">ignoredRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks">securityFrameworks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}. |

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold"></a>

```java
public java.lang.Number getCountThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold"></a>

```java
public java.lang.String getSeverityThreshold();
```

- *Type:* java.lang.String

Severity threshold.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

##### `builtinIgnoreTagsEnabled`<sup>Optional</sup> <a name="builtinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled"></a>

```java
public java.lang.Object getBuiltinIgnoreTagsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

##### `customIgnoreTags`<sup>Optional</sup> <a name="customIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags"></a>

```java
public java.lang.Object getCustomIgnoreTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>>

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

##### `ignoredRules`<sup>Optional</sup> <a name="ignoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules"></a>

```java
public java.util.List<java.lang.String> getIgnoredRules();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

##### `securityFrameworks`<sup>Optional</sup> <a name="securityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks"></a>

```java
public java.util.List<java.lang.String> getSecurityFrameworks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

### CicdScanPolicyIacParamsCustomIgnoreTags <a name="CicdScanPolicyIacParamsCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyIacParamsCustomIgnoreTags;

CicdScanPolicyIacParamsCustomIgnoreTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .ignoreAllRules(java.lang.Boolean)
//  .ignoreAllRules(IResolvable)
//  .ruleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules">ignoreAllRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds">ruleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}.

---

##### `ignoreAllRules`<sup>Optional</sup> <a name="ignoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules"></a>

```java
public java.lang.Object getIgnoreAllRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}.

---

##### `ruleIds`<sup>Optional</sup> <a name="ruleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds"></a>

```java
public java.util.List<java.lang.String> getRuleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### CicdScanPolicyDiskSecretsParamsOutputReference <a name="CicdScanPolicyDiskSecretsParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyDiskSecretsParamsOutputReference;

new CicdScanPolicyDiskSecretsParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList">resetPathAllowList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathAllowList` <a name="resetPathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList"></a>

```java
public void resetPathAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput">countThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput">pathAllowListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold">countThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList">pathAllowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countThresholdInput`<sup>Optional</sup> <a name="countThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput"></a>

```java
public java.lang.Number getCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `pathAllowListInput`<sup>Optional</sup> <a name="pathAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput"></a>

```java
public java.util.List<java.lang.String> getPathAllowListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold"></a>

```java
public java.lang.Number getCountThreshold();
```

- *Type:* java.lang.Number

---

##### `pathAllowList`<sup>Required</sup> <a name="pathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList"></a>

```java
public java.util.List<java.lang.String> getPathAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue"></a>

```java
public CicdScanPolicyDiskSecretsParams getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---


### CicdScanPolicyDiskVulnerabilitiesParamsOutputReference <a name="CicdScanPolicyDiskVulnerabilitiesParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference;

new CicdScanPolicyDiskVulnerabilitiesParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput">ignoreUnfixedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput">packageAllowListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput">packageCountThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed">ignoreUnfixed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList">packageAllowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold">packageCountThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreUnfixedInput`<sup>Optional</sup> <a name="ignoreUnfixedInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput"></a>

```java
public java.lang.Object getIgnoreUnfixedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `packageAllowListInput`<sup>Optional</sup> <a name="packageAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput"></a>

```java
public java.util.List<java.lang.String> getPackageAllowListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packageCountThresholdInput`<sup>Optional</sup> <a name="packageCountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput"></a>

```java
public java.lang.Number getPackageCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `ignoreUnfixed`<sup>Required</sup> <a name="ignoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed"></a>

```java
public java.lang.Object getIgnoreUnfixed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `packageAllowList`<sup>Required</sup> <a name="packageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList"></a>

```java
public java.util.List<java.lang.String> getPackageAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packageCountThreshold`<sup>Required</sup> <a name="packageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold"></a>

```java
public java.lang.Number getPackageCountThreshold();
```

- *Type:* java.lang.Number

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue"></a>

```java
public CicdScanPolicyDiskVulnerabilitiesParams getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsList <a name="CicdScanPolicyIacParamsCustomIgnoreTagsList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyIacParamsCustomIgnoreTagsList;

new CicdScanPolicyIacParamsCustomIgnoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get"></a>

```java
public CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference <a name="CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference;

new CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules">resetIgnoreAllRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds">resetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreAllRules` <a name="resetIgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules"></a>

```java
public void resetIgnoreAllRules()
```

##### `resetRuleIds` <a name="resetRuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds"></a>

```java
public void resetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput">ignoreAllRulesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput">ruleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules">ignoreAllRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds">ruleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreAllRulesInput`<sup>Optional</sup> <a name="ignoreAllRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput"></a>

```java
public java.lang.Object getIgnoreAllRulesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `ruleIdsInput`<sup>Optional</sup> <a name="ruleIdsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput"></a>

```java
public java.util.List<java.lang.String> getRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `ignoreAllRules`<sup>Required</sup> <a name="ignoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules"></a>

```java
public java.lang.Object getIgnoreAllRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `ruleIds`<sup>Required</sup> <a name="ruleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds"></a>

```java
public java.util.List<java.lang.String> getRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>

---


### CicdScanPolicyIacParamsOutputReference <a name="CicdScanPolicyIacParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cicd_scan_policy.CicdScanPolicyIacParamsOutputReference;

new CicdScanPolicyIacParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags">putCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled">resetBuiltinIgnoreTagsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags">resetCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules">resetIgnoredRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks">resetSecurityFrameworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomIgnoreTags` <a name="putCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags"></a>

```java
public void putCustomIgnoreTags(IResolvable OR java.util.List<CicdScanPolicyIacParamsCustomIgnoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>>

---

##### `resetBuiltinIgnoreTagsEnabled` <a name="resetBuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled"></a>

```java
public void resetBuiltinIgnoreTagsEnabled()
```

##### `resetCustomIgnoreTags` <a name="resetCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags"></a>

```java
public void resetCustomIgnoreTags()
```

##### `resetIgnoredRules` <a name="resetIgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules"></a>

```java
public void resetIgnoredRules()
```

##### `resetSecurityFrameworks` <a name="resetSecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks"></a>

```java
public void resetSecurityFrameworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags">customIgnoreTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput">builtinIgnoreTagsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput">countThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput">customIgnoreTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput">ignoredRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput">securityFrameworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput">severityThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled">builtinIgnoreTagsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold">countThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules">ignoredRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks">securityFrameworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold">severityThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customIgnoreTags`<sup>Required</sup> <a name="customIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags"></a>

```java
public CicdScanPolicyIacParamsCustomIgnoreTagsList getCustomIgnoreTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a>

---

##### `builtinIgnoreTagsEnabledInput`<sup>Optional</sup> <a name="builtinIgnoreTagsEnabledInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput"></a>

```java
public java.lang.Object getBuiltinIgnoreTagsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `countThresholdInput`<sup>Optional</sup> <a name="countThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput"></a>

```java
public java.lang.Number getCountThresholdInput();
```

- *Type:* java.lang.Number

---

##### `customIgnoreTagsInput`<sup>Optional</sup> <a name="customIgnoreTagsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput"></a>

```java
public java.lang.Object getCustomIgnoreTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags">CicdScanPolicyIacParamsCustomIgnoreTags</a>>

---

##### `ignoredRulesInput`<sup>Optional</sup> <a name="ignoredRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityFrameworksInput`<sup>Optional</sup> <a name="securityFrameworksInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput"></a>

```java
public java.util.List<java.lang.String> getSecurityFrameworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severityThresholdInput`<sup>Optional</sup> <a name="severityThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput"></a>

```java
public java.lang.String getSeverityThresholdInput();
```

- *Type:* java.lang.String

---

##### `builtinIgnoreTagsEnabled`<sup>Required</sup> <a name="builtinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled"></a>

```java
public java.lang.Object getBuiltinIgnoreTagsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `countThreshold`<sup>Required</sup> <a name="countThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold"></a>

```java
public java.lang.Number getCountThreshold();
```

- *Type:* java.lang.Number

---

##### `ignoredRules`<sup>Required</sup> <a name="ignoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules"></a>

```java
public java.util.List<java.lang.String> getIgnoredRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityFrameworks`<sup>Required</sup> <a name="securityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks"></a>

```java
public java.util.List<java.lang.String> getSecurityFrameworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold"></a>

```java
public java.lang.String getSeverityThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue"></a>

```java
public CicdScanPolicyIacParams getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---



