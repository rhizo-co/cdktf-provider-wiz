# `storageCredential` Submodule <a name="`storageCredential` Submodule" id="@cdktf/provider-databricks.storageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageCredential <a name="StorageCredential" id="@cdktf/provider-databricks.storageCredential.StorageCredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredential;

StorageCredential.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsIamRole(StorageCredentialAwsIamRole)
//  .azureManagedIdentity(StorageCredentialAzureManagedIdentity)
//  .azureServicePrincipal(StorageCredentialAzureServicePrincipal)
//  .comment(java.lang.String)
//  .gcpServiceAccountKey(StorageCredentialGcpServiceAccountKey)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .owner(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.awsIamRole">awsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureManagedIdentity">azureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureServicePrincipal">azureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}.

---

##### `awsIamRole`<sup>Optional</sup> <a name="awsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `azureManagedIdentity`<sup>Optional</sup> <a name="azureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `azureServicePrincipal`<sup>Optional</sup> <a name="azureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureServicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}.

---

##### `gcpServiceAccountKey`<sup>Optional</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.gcpServiceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole">putAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity">putAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal">putAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey">putGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole">resetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity">resetAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal">resetAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey">resetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAwsIamRole` <a name="putAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole"></a>

```java
public void putAwsIamRole(StorageCredentialAwsIamRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `putAzureManagedIdentity` <a name="putAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity"></a>

```java
public void putAzureManagedIdentity(StorageCredentialAzureManagedIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `putAzureServicePrincipal` <a name="putAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal"></a>

```java
public void putAzureServicePrincipal(StorageCredentialAzureServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `putGcpServiceAccountKey` <a name="putGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey"></a>

```java
public void putGcpServiceAccountKey(StorageCredentialGcpServiceAccountKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `resetAwsIamRole` <a name="resetAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole"></a>

```java
public void resetAwsIamRole()
```

##### `resetAzureManagedIdentity` <a name="resetAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity"></a>

```java
public void resetAzureManagedIdentity()
```

##### `resetAzureServicePrincipal` <a name="resetAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal"></a>

```java
public void resetAzureServicePrincipal()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment"></a>

```java
public void resetComment()
```

##### `resetGcpServiceAccountKey` <a name="resetGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey"></a>

```java
public void resetGcpServiceAccountKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner"></a>

```java
public void resetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredential;

StorageCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredential;

StorageCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredential;

StorageCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole">awsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity">azureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal">azureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput">awsIamRoleInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput">azureManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput">azureServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput">gcpServiceAccountKeyInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsIamRole`<sup>Required</sup> <a name="awsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole"></a>

```java
public StorageCredentialAwsIamRoleOutputReference getAwsIamRole();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a>

---

##### `azureManagedIdentity`<sup>Required</sup> <a name="azureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity"></a>

```java
public StorageCredentialAzureManagedIdentityOutputReference getAzureManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a>

---

##### `azureServicePrincipal`<sup>Required</sup> <a name="azureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal"></a>

```java
public StorageCredentialAzureServicePrincipalOutputReference getAzureServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a>

---

##### `gcpServiceAccountKey`<sup>Required</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey"></a>

```java
public StorageCredentialGcpServiceAccountKeyOutputReference getGcpServiceAccountKey();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a>

---

##### `awsIamRoleInput`<sup>Optional</sup> <a name="awsIamRoleInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput"></a>

```java
public StorageCredentialAwsIamRole getAwsIamRoleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `azureManagedIdentityInput`<sup>Optional</sup> <a name="azureManagedIdentityInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput"></a>

```java
public StorageCredentialAzureManagedIdentity getAzureManagedIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `azureServicePrincipalInput`<sup>Optional</sup> <a name="azureServicePrincipalInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput"></a>

```java
public StorageCredentialAzureServicePrincipal getAzureServicePrincipalInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `gcpServiceAccountKeyInput`<sup>Optional</sup> <a name="gcpServiceAccountKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput"></a>

```java
public StorageCredentialGcpServiceAccountKey getGcpServiceAccountKeyInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageCredentialAwsIamRole <a name="StorageCredentialAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAwsIamRole;

StorageCredentialAwsIamRole.builder()
    .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#role_arn StorageCredential#role_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#role_arn StorageCredential#role_arn}.

---

### StorageCredentialAzureManagedIdentity <a name="StorageCredentialAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAzureManagedIdentity;

StorageCredentialAzureManagedIdentity.builder()
    .accessConnectorId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId">accessConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#access_connector_id StorageCredential#access_connector_id}. |

---

##### `accessConnectorId`<sup>Required</sup> <a name="accessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId"></a>

```java
public java.lang.String getAccessConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#access_connector_id StorageCredential#access_connector_id}.

---

### StorageCredentialAzureServicePrincipal <a name="StorageCredentialAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAzureServicePrincipal;

StorageCredentialAzureServicePrincipal.builder()
    .applicationId(java.lang.String)
    .clientSecret(java.lang.String)
    .directoryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#application_id StorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#client_secret StorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#directory_id StorageCredential#directory_id}. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#application_id StorageCredential#application_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#client_secret StorageCredential#client_secret}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#directory_id StorageCredential#directory_id}.

---

### StorageCredentialConfig <a name="StorageCredentialConfig" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialConfig;

StorageCredentialConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsIamRole(StorageCredentialAwsIamRole)
//  .azureManagedIdentity(StorageCredentialAzureManagedIdentity)
//  .azureServicePrincipal(StorageCredentialAzureServicePrincipal)
//  .comment(java.lang.String)
//  .gcpServiceAccountKey(StorageCredentialGcpServiceAccountKey)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .owner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole">awsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity">azureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal">azureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}.

---

##### `awsIamRole`<sup>Optional</sup> <a name="awsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole"></a>

```java
public StorageCredentialAwsIamRole getAwsIamRole();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `azureManagedIdentity`<sup>Optional</sup> <a name="azureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity"></a>

```java
public StorageCredentialAzureManagedIdentity getAzureManagedIdentity();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `azureServicePrincipal`<sup>Optional</sup> <a name="azureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal"></a>

```java
public StorageCredentialAzureServicePrincipal getAzureServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}.

---

##### `gcpServiceAccountKey`<sup>Optional</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey"></a>

```java
public StorageCredentialGcpServiceAccountKey getGcpServiceAccountKey();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}.

---

### StorageCredentialGcpServiceAccountKey <a name="StorageCredentialGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialGcpServiceAccountKey;

StorageCredentialGcpServiceAccountKey.builder()
    .email(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#email StorageCredential#email}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key StorageCredential#private_key}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key_id StorageCredential#private_key_id}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#email StorageCredential#email}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key StorageCredential#private_key}.

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key_id StorageCredential#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageCredentialAwsIamRoleOutputReference <a name="StorageCredentialAwsIamRoleOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAwsIamRoleOutputReference;

new StorageCredentialAwsIamRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue"></a>

```java
public StorageCredentialAwsIamRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---


### StorageCredentialAzureManagedIdentityOutputReference <a name="StorageCredentialAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAzureManagedIdentityOutputReference;

new StorageCredentialAzureManagedIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput">accessConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId">accessConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConnectorIdInput`<sup>Optional</sup> <a name="accessConnectorIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```java
public java.lang.String getAccessConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `accessConnectorId`<sup>Required</sup> <a name="accessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```java
public java.lang.String getAccessConnectorId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue"></a>

```java
public StorageCredentialAzureManagedIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---


### StorageCredentialAzureServicePrincipalOutputReference <a name="StorageCredentialAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialAzureServicePrincipalOutputReference;

new StorageCredentialAzureServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue"></a>

```java
public StorageCredentialAzureServicePrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---


### StorageCredentialGcpServiceAccountKeyOutputReference <a name="StorageCredentialGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.storage_credential.StorageCredentialGcpServiceAccountKeyOutputReference;

new StorageCredentialGcpServiceAccountKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```java
public StorageCredentialGcpServiceAccountKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---


