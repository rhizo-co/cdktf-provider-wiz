# `dataWizKubernetesClusters` Submodule <a name="`dataWizKubernetesClusters` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizKubernetesClusters <a name="DataWizKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClusters;

DataWizKubernetesClusters.Builder.create(Construct scope, java.lang.String id)
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
//  .cloudProvider(java.util.List<java.lang.String>)
//  .externalIds(java.util.List<java.lang.String>)
//  .first(java.lang.Number)
//  .kind(java.util.List<java.lang.String>)
//  .maxPages(java.lang.Number)
//  .search(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.externalIds">externalIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.first">first</a></code> | <code>java.lang.Number</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.kind">kind</a></code> | <code>java.util.List<java.lang.String></code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.cloudProvider"></a>

- *Type:* java.util.List<java.lang.String>

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.externalIds"></a>

- *Type:* java.util.List<java.lang.String>

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.first"></a>

- *Type:* java.lang.Number

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.kind"></a>

- *Type:* java.util.List<java.lang.String>

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:
  - EKS
  - GKE
  - AKS
  - OKE
  - OPEN_SHIFT
  - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.maxPages"></a>

- *Type:* java.lang.Number

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds">resetExternalIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages">resetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider"></a>

```java
public void resetCloudProvider()
```

##### `resetExternalIds` <a name="resetExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds"></a>

```java
public void resetExternalIds()
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind"></a>

```java
public void resetKind()
```

##### `resetMaxPages` <a name="resetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages"></a>

```java
public void resetMaxPages()
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch"></a>

```java
public void resetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClusters;

DataWizKubernetesClusters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClusters;

DataWizKubernetesClusters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClusters;

DataWizKubernetesClusters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClusters;

DataWizKubernetesClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataWizKubernetesClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataWizKubernetesClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataWizKubernetesClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataWizKubernetesClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters">kubernetesClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput">externalIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput">kindInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput">maxPagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds">externalIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind">kind</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusters`<sup>Required</sup> <a name="kubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters"></a>

```java
public DataWizKubernetesClustersKubernetesClustersList getKubernetesClusters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a>

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput"></a>

```java
public java.util.List<java.lang.String> getCloudProviderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalIdsInput`<sup>Optional</sup> <a name="externalIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput"></a>

```java
public java.util.List<java.lang.String> getExternalIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput"></a>

```java
public java.util.List<java.lang.String> getKindInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPagesInput`<sup>Optional</sup> <a name="maxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput"></a>

```java
public java.lang.Number getMaxPagesInput();
```

- *Type:* java.lang.Number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalIds`<sup>Required</sup> <a name="externalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds"></a>

```java
public java.util.List<java.lang.String> getExternalIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind"></a>

```java
public java.util.List<java.lang.String> getKind();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPages`<sup>Required</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages"></a>

```java
public java.lang.Number getMaxPages();
```

- *Type:* java.lang.Number

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizKubernetesClustersConfig <a name="DataWizKubernetesClustersConfig" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersConfig;

DataWizKubernetesClustersConfig.builder()
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
//  .cloudProvider(java.util.List<java.lang.String>)
//  .externalIds(java.util.List<java.lang.String>)
//  .first(java.lang.Number)
//  .kind(java.util.List<java.lang.String>)
//  .maxPages(java.lang.Number)
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider">cloudProvider</a></code> | <code>java.util.List<java.lang.String></code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds">externalIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first">first</a></code> | <code>java.lang.Number</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind">kind</a></code> | <code>java.util.List<java.lang.String></code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages">maxPages</a></code> | <code>java.lang.Number</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search">search</a></code> | <code>java.lang.String</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider"></a>

```java
public java.util.List<java.lang.String> getCloudProvider();
```

- *Type:* java.util.List<java.lang.String>

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds"></a>

```java
public java.util.List<java.lang.String> getExternalIds();
```

- *Type:* java.util.List<java.lang.String>

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind"></a>

```java
public java.util.List<java.lang.String> getKind();
```

- *Type:* java.util.List<java.lang.String>

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:
  - EKS
  - GKE
  - AKS
  - OKE
  - OPEN_SHIFT
  - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `maxPages`<sup>Optional</sup> <a name="maxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages"></a>

```java
public java.lang.Number getMaxPages();
```

- *Type:* java.lang.Number

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

### DataWizKubernetesClustersKubernetesClusters <a name="DataWizKubernetesClustersKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClusters;

DataWizKubernetesClustersKubernetesClusters.builder()
    .build();
```


### DataWizKubernetesClustersKubernetesClustersCloudAccount <a name="DataWizKubernetesClustersKubernetesClustersCloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClustersCloudAccount;

DataWizKubernetesClustersKubernetesClustersCloudAccount.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizKubernetesClustersKubernetesClustersCloudAccountList <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList;

new DataWizKubernetesClustersKubernetesClustersCloudAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get"></a>

```java
public DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference;

new DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue"></a>

```java
public DataWizKubernetesClustersKubernetesClustersCloudAccount getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a>

---


### DataWizKubernetesClustersKubernetesClustersList <a name="DataWizKubernetesClustersKubernetesClustersList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClustersList;

new DataWizKubernetesClustersKubernetesClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get"></a>

```java
public DataWizKubernetesClustersKubernetesClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizKubernetesClustersKubernetesClustersOutputReference <a name="DataWizKubernetesClustersKubernetesClustersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_kubernetes_clusters.DataWizKubernetesClustersKubernetesClustersOutputReference;

new DataWizKubernetesClustersKubernetesClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount">cloudAccount</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudAccount`<sup>Required</sup> <a name="cloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount"></a>

```java
public DataWizKubernetesClustersKubernetesClustersCloudAccountList getCloudAccount();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue"></a>

```java
public DataWizKubernetesClustersKubernetesClusters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a>

---



