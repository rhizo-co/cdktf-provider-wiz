# `data_wiz_cloud_accounts`

Refer to the Terraform Registory for docs: [`data_wiz_cloud_accounts`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts).

# `dataWizCloudAccounts` Submodule <a name="`dataWizCloudAccounts` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudAccounts <a name="DataWizCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts wiz_cloud_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccounts;

DataWizCloudAccounts.Builder.create(Construct scope, java.lang.String id)
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
//  .assignedToProject(java.lang.Boolean)
//  .assignedToProject(IResolvable)
//  .cloudProvider(java.util.List<java.lang.String>)
//  .connectorId(java.util.List<java.lang.String>)
//  .connectorIssueId(java.util.List<java.lang.String>)
//  .first(java.lang.Number)
//  .hasMultipleConnectorSources(java.lang.Boolean)
//  .hasMultipleConnectorSources(IResolvable)
//  .ids(java.util.List<java.lang.String>)
//  .maxPages(java.lang.Number)
//  .projectId(java.lang.String)
//  .search(java.util.List<java.lang.String>)
//  .status(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.assignedToProject">assignedToProject</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorId">connectorId</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorIssueId">connectorIssueId</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.first">first</a></code> | <code>java.lang.Number</code> | How many results to return, maximum is `500` is per page. - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.hasMultipleConnectorSources">hasMultipleConnectorSources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.search">search</a></code> | <code>java.util.List<java.lang.String></code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by status. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignedToProject`<sup>Optional</sup> <a name="assignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.assignedToProject"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.cloudProvider"></a>

- *Type:* java.util.List<java.lang.String>

Query cloud accounts of specific cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorId"></a>

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `connectorIssueId`<sup>Optional</sup> <a name="connectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.connectorIssueId"></a>

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.first"></a>

- *Type:* java.lang.Number

How many results to return, maximum is `500` is per page. - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `hasMultipleConnectorSources`<sup>Optional</sup> <a name="hasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.hasMultipleConnectorSources"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.ids"></a>

- *Type:* java.util.List<java.lang.String>

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.maxPages"></a>

- *Type:* java.lang.Number

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.search"></a>

- *Type:* java.util.List<java.lang.String>

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.status"></a>

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by status.

* Allowed values:

  * CONNECTED
  * ERROR
  * DISABLED
  * INITIAL_SCANNING
  * PARTIALLY_CONNECTED
  * DISCONNECTED
  * DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject">resetAssignedToProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId">resetConnectorIssueId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources">resetHasMultipleConnectorSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages">resetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssignedToProject` <a name="resetAssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject"></a>

```java
public void resetAssignedToProject()
```

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider"></a>

```java
public void resetCloudProvider()
```

##### `resetConnectorId` <a name="resetConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId"></a>

```java
public void resetConnectorId()
```

##### `resetConnectorIssueId` <a name="resetConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId"></a>

```java
public void resetConnectorIssueId()
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetHasMultipleConnectorSources` <a name="resetHasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources"></a>

```java
public void resetHasMultipleConnectorSources()
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds"></a>

```java
public void resetIds()
```

##### `resetMaxPages` <a name="resetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages"></a>

```java
public void resetMaxPages()
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccounts;

DataWizCloudAccounts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccounts;

DataWizCloudAccounts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccounts;

DataWizCloudAccounts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts">cloudAccounts</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput">assignedToProjectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput">connectorIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput">connectorIssueIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput">hasMultipleConnectorSourcesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput">idsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput">maxPagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput">searchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput">statusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject">assignedToProject</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId">connectorId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId">connectorIssueId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources">hasMultipleConnectorSources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search">search</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cloudAccounts`<sup>Required</sup> <a name="cloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts"></a>

```java
public DataWizCloudAccountsCloudAccountsList getCloudAccounts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `assignedToProjectInput`<sup>Optional</sup> <a name="assignedToProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput"></a>

```java
public java.lang.Object getAssignedToProjectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput"></a>

```java
public java.util.List<java.lang.String> getCloudProviderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput"></a>

```java
public java.util.List<java.lang.String> getConnectorIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectorIssueIdInput`<sup>Optional</sup> <a name="connectorIssueIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput"></a>

```java
public java.util.List<java.lang.String> getConnectorIssueIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `hasMultipleConnectorSourcesInput`<sup>Optional</sup> <a name="hasMultipleConnectorSourcesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput"></a>

```java
public java.lang.Object getHasMultipleConnectorSourcesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput"></a>

```java
public java.util.List<java.lang.String> getIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPagesInput`<sup>Optional</sup> <a name="maxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput"></a>

```java
public java.lang.Number getMaxPagesInput();
```

- *Type:* java.lang.Number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput"></a>

```java
public java.util.List<java.lang.String> getSearchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput"></a>

```java
public java.util.List<java.lang.String> getStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignedToProject`<sup>Required</sup> <a name="assignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject"></a>

```java
public java.lang.Object getAssignedToProject();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId"></a>

```java
public java.util.List<java.lang.String> getConnectorId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectorIssueId`<sup>Required</sup> <a name="connectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId"></a>

```java
public java.util.List<java.lang.String> getConnectorIssueId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `hasMultipleConnectorSources`<sup>Required</sup> <a name="hasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources"></a>

```java
public java.lang.Object getHasMultipleConnectorSources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPages`<sup>Required</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages"></a>

```java
public java.lang.Number getMaxPages();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search"></a>

```java
public java.util.List<java.lang.String> getSearch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudAccountsCloudAccounts <a name="DataWizCloudAccountsCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccountsCloudAccounts;

DataWizCloudAccountsCloudAccounts.builder()
    .build();
```


### DataWizCloudAccountsConfig <a name="DataWizCloudAccountsConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccountsConfig;

DataWizCloudAccountsConfig.builder()
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
//  .assignedToProject(java.lang.Boolean)
//  .assignedToProject(IResolvable)
//  .cloudProvider(java.util.List<java.lang.String>)
//  .connectorId(java.util.List<java.lang.String>)
//  .connectorIssueId(java.util.List<java.lang.String>)
//  .first(java.lang.Number)
//  .hasMultipleConnectorSources(java.lang.Boolean)
//  .hasMultipleConnectorSources(IResolvable)
//  .ids(java.util.List<java.lang.String>)
//  .maxPages(java.lang.Number)
//  .projectId(java.lang.String)
//  .search(java.util.List<java.lang.String>)
//  .status(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject">assignedToProject</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId">connectorId</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId">connectorIssueId</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first">first</a></code> | <code>java.lang.Number</code> | How many results to return, maximum is `500` is per page. - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources">hasMultipleConnectorSources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search">search</a></code> | <code>java.util.List<java.lang.String></code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts by status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignedToProject`<sup>Optional</sup> <a name="assignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject"></a>

```java
public java.lang.Object getAssignedToProject();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

Query cloud accounts of specific cloud provider.

* Allowed values:

  * GCP
  * AWS
  * Azure
  * OCI
  * Alibaba
  * vSphere
  * OpenShift
  * Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId"></a>

```java
public java.util.List<java.lang.String> getConnectorId();
```

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `connectorIssueId`<sup>Optional</sup> <a name="connectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId"></a>

```java
public java.util.List<java.lang.String> getConnectorIssueId();
```

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

How many results to return, maximum is `500` is per page. - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `hasMultipleConnectorSources`<sup>Optional</sup> <a name="hasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources"></a>

```java
public java.lang.Object getHasMultipleConnectorSources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages"></a>

```java
public java.lang.Number getMaxPages();
```

- *Type:* java.lang.Number

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search"></a>

```java
public java.util.List<java.lang.String> getSearch();
```

- *Type:* java.util.List<java.lang.String>

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

Query cloud accounts by status.

* Allowed values:

  * CONNECTED
  * ERROR
  * DISABLED
  * INITIAL_SCANNING
  * PARTIALLY_CONNECTED
  * DISCONNECTED
  * DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudAccountsCloudAccountsList <a name="DataWizCloudAccountsCloudAccountsList" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccountsCloudAccountsList;

new DataWizCloudAccountsCloudAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get"></a>

```java
public DataWizCloudAccountsCloudAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizCloudAccountsCloudAccountsOutputReference <a name="DataWizCloudAccountsCloudAccountsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_cloud_accounts.DataWizCloudAccountsCloudAccountsOutputReference;

new DataWizCloudAccountsCloudAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds">linkedProjectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds">sourceConnectorIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedProjectIds`<sup>Required</sup> <a name="linkedProjectIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds"></a>

```java
public java.util.List<java.lang.String> getLinkedProjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceConnectorIds`<sup>Required</sup> <a name="sourceConnectorIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds"></a>

```java
public java.util.List<java.lang.String> getSourceConnectorIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue"></a>

```java
public DataWizCloudAccountsCloudAccounts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a>

---



