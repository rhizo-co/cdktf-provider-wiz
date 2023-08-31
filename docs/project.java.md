# `wiz_project`

Refer to the Terraform Registory for docs: [`wiz_project`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="rhizo-co-terraform-provider-wiz.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="rhizo-co-terraform-provider-wiz.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project wiz_project}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.Project;

Project.Builder.create(Construct scope, java.lang.String id)
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
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .businessUnit(java.lang.String)
//  .cloudAccountLink(IResolvable)
//  .cloudAccountLink(java.util.List<ProjectCloudAccountLink>)
//  .cloudOrganizationLink(IResolvable)
//  .cloudOrganizationLink(java.util.List<ProjectCloudOrganizationLink>)
//  .description(java.lang.String)
//  .identifiers(java.util.List<java.lang.String>)
//  .isFolder(java.lang.Boolean)
//  .isFolder(IResolvable)
//  .kubernetesClusterLink(IResolvable)
//  .kubernetesClusterLink(java.util.List<ProjectKubernetesClusterLink>)
//  .parentProjectId(java.lang.String)
//  .projectOwners(java.util.List<java.lang.String>)
//  .riskProfile(ProjectRiskProfile)
//  .securityChampions(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the project is archived/inactive - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.businessUnit">businessUnit</a></code> | <code>java.lang.String</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudAccountLink">cloudAccountLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>></code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudOrganizationLink">cloudOrganizationLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>></code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.isFolder">isFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the project is a folder. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.kubernetesClusterLink">kubernetesClusterLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>></code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.parentProjectId">parentProjectId</a></code> | <code>java.lang.String</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.projectOwners">projectOwners</a></code> | <code>java.util.List<java.lang.String></code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.riskProfile">riskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.securityChampions">securityChampions</a></code> | <code>java.util.List<java.lang.String></code> | A list of security champions IDs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#name Project#name}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the project is archived/inactive - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#archived Project#archived}

---

##### `businessUnit`<sup>Optional</sup> <a name="businessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.businessUnit"></a>

- *Type:* java.lang.String

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#business_unit Project#business_unit}

---

##### `cloudAccountLink`<sup>Optional</sup> <a name="cloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudAccountLink"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>>

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `cloudOrganizationLink`<sup>Optional</sup> <a name="cloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.cloudOrganizationLink"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>>

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#description Project#description}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.identifiers"></a>

- *Type:* java.util.List<java.lang.String>

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#identifiers Project#identifiers}

---

##### `isFolder`<sup>Optional</sup> <a name="isFolder" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.isFolder"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the project is a folder. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_folder Project#is_folder}

---

##### `kubernetesClusterLink`<sup>Optional</sup> <a name="kubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.kubernetesClusterLink"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>>

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `parentProjectId`<sup>Optional</sup> <a name="parentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.parentProjectId"></a>

- *Type:* java.lang.String

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `projectOwners`<sup>Optional</sup> <a name="projectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.projectOwners"></a>

- *Type:* java.util.List<java.lang.String>

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#project_owners Project#project_owners}

---

##### `riskProfile`<sup>Optional</sup> <a name="riskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.riskProfile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#risk_profile Project#risk_profile}

---

##### `securityChampions`<sup>Optional</sup> <a name="securityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.securityChampions"></a>

- *Type:* java.util.List<java.lang.String>

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#security_champions Project#security_champions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink">putCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink">putCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink">putKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile">putRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit">resetBusinessUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink">resetCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink">resetCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers">resetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder">resetIsFolder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink">resetKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId">resetParentProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners">resetProjectOwners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile">resetRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions">resetSecurityChampions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.Project.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudAccountLink` <a name="putCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink"></a>

```java
public void putCloudAccountLink(IResolvable OR java.util.List<ProjectCloudAccountLink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>>

---

##### `putCloudOrganizationLink` <a name="putCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink"></a>

```java
public void putCloudOrganizationLink(IResolvable OR java.util.List<ProjectCloudOrganizationLink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>>

---

##### `putKubernetesClusterLink` <a name="putKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink"></a>

```java
public void putKubernetesClusterLink(IResolvable OR java.util.List<ProjectKubernetesClusterLink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>>

---

##### `putRiskProfile` <a name="putRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile"></a>

```java
public void putRiskProfile(ProjectRiskProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `resetArchived` <a name="resetArchived" id="rhizo-co-terraform-provider-wiz.project.Project.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetBusinessUnit` <a name="resetBusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit"></a>

```java
public void resetBusinessUnit()
```

##### `resetCloudAccountLink` <a name="resetCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink"></a>

```java
public void resetCloudAccountLink()
```

##### `resetCloudOrganizationLink` <a name="resetCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink"></a>

```java
public void resetCloudOrganizationLink()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.project.Project.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIdentifiers` <a name="resetIdentifiers" id="rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers"></a>

```java
public void resetIdentifiers()
```

##### `resetIsFolder` <a name="resetIsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder"></a>

```java
public void resetIsFolder()
```

##### `resetKubernetesClusterLink` <a name="resetKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink"></a>

```java
public void resetKubernetesClusterLink()
```

##### `resetParentProjectId` <a name="resetParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId"></a>

```java
public void resetParentProjectId()
```

##### `resetProjectOwners` <a name="resetProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners"></a>

```java
public void resetProjectOwners()
```

##### `resetRiskProfile` <a name="resetRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile"></a>

```java
public void resetRiskProfile()
```

##### `resetSecurityChampions` <a name="resetSecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions"></a>

```java
public void resetSecurityChampions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.Project;

Project.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.Project;

Project.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.Project;

Project.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink">cloudAccountLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink">cloudOrganizationLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink">kubernetesClusterLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile">riskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.slug">slug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput">businessUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput">cloudAccountLinkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput">cloudOrganizationLinkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput">isFolderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput">kubernetesClusterLinkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput">parentProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput">projectOwnersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput">riskProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput">securityChampionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit">businessUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolder">isFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId">parentProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners">projectOwners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions">securityChampions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.project.Project.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.Project.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.Project.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.Project.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.project.Project.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.Project.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudAccountLink`<sup>Required</sup> <a name="cloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink"></a>

```java
public ProjectCloudAccountLinkList getCloudAccountLink();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a>

---

##### `cloudOrganizationLink`<sup>Required</sup> <a name="cloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink"></a>

```java
public ProjectCloudOrganizationLinkList getCloudOrganizationLink();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterLink`<sup>Required</sup> <a name="kubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink"></a>

```java
public ProjectKubernetesClusterLinkList getKubernetesClusterLink();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a>

---

##### `riskProfile`<sup>Required</sup> <a name="riskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile"></a>

```java
public ProjectRiskProfileOutputReference getRiskProfile();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a>

---

##### `slug`<sup>Required</sup> <a name="slug" id="rhizo-co-terraform-provider-wiz.project.Project.property.slug"></a>

```java
public java.lang.String getSlug();
```

- *Type:* java.lang.String

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput"></a>

```java
public java.lang.Object getArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `businessUnitInput`<sup>Optional</sup> <a name="businessUnitInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput"></a>

```java
public java.lang.String getBusinessUnitInput();
```

- *Type:* java.lang.String

---

##### `cloudAccountLinkInput`<sup>Optional</sup> <a name="cloudAccountLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput"></a>

```java
public java.lang.Object getCloudAccountLinkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>>

---

##### `cloudOrganizationLinkInput`<sup>Optional</sup> <a name="cloudOrganizationLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput"></a>

```java
public java.lang.Object getCloudOrganizationLinkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFolderInput`<sup>Optional</sup> <a name="isFolderInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput"></a>

```java
public java.lang.Object getIsFolderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kubernetesClusterLinkInput`<sup>Optional</sup> <a name="kubernetesClusterLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput"></a>

```java
public java.lang.Object getKubernetesClusterLinkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentProjectIdInput`<sup>Optional</sup> <a name="parentProjectIdInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput"></a>

```java
public java.lang.String getParentProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectOwnersInput`<sup>Optional</sup> <a name="projectOwnersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput"></a>

```java
public java.util.List<java.lang.String> getProjectOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskProfileInput`<sup>Optional</sup> <a name="riskProfileInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput"></a>

```java
public ProjectRiskProfile getRiskProfileInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `securityChampionsInput`<sup>Optional</sup> <a name="securityChampionsInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityChampionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archived`<sup>Required</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.Project.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `businessUnit`<sup>Required</sup> <a name="businessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit"></a>

```java
public java.lang.String getBusinessUnit();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.Project.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFolder`<sup>Required</sup> <a name="isFolder" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolder"></a>

```java
public java.lang.Object getIsFolder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.Project.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentProjectId`<sup>Required</sup> <a name="parentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId"></a>

```java
public java.lang.String getParentProjectId();
```

- *Type:* java.lang.String

---

##### `projectOwners`<sup>Required</sup> <a name="projectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners"></a>

```java
public java.util.List<java.lang.String> getProjectOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityChampions`<sup>Required</sup> <a name="securityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions"></a>

```java
public java.util.List<java.lang.String> getSecurityChampions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLink <a name="ProjectCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLink;

ProjectCloudAccountLink.builder()
    .cloudAccountId(java.lang.String)
//  .environment(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceTags(IResolvable)
//  .resourceTags(java.util.List<ProjectCloudAccountLinkResourceTags>)
//  .shared(java.lang.Boolean)
//  .shared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.String</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags">resourceTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>></code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId"></a>

```java
public java.lang.String getCloudAccountId();
```

- *Type:* java.lang.String

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_account_id Project#cloud_account_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment.

* Allowed values:

  * PRODUCTION
  * STAGING
  * DEVELOPMENT
  * TESTING
  * OTHER
* Defaults to `{{`PRODUCTION`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#environment Project#environment}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags"></a>

```java
public java.lang.Object getResourceTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>>

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectCloudAccountLinkResourceTags <a name="ProjectCloudAccountLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLinkResourceTags;

ProjectCloudAccountLinkResourceTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}.

---

### ProjectCloudOrganizationLink <a name="ProjectCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLink;

ProjectCloudOrganizationLink.builder()
    .cloudOrganization(java.lang.String)
//  .environment(java.lang.String)
//  .resourceGroups(java.util.List<java.lang.String>)
//  .resourceTags(IResolvable)
//  .resourceTags(java.util.List<ProjectCloudOrganizationLinkResourceTags>)
//  .shared(java.lang.Boolean)
//  .shared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization">cloudOrganization</a></code> | <code>java.lang.String</code> | The Wiz internal identifier for the Organizational Unit. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags">resourceTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>></code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `cloudOrganization`<sup>Required</sup> <a name="cloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization"></a>

```java
public java.lang.String getCloudOrganization();
```

- *Type:* java.lang.String

The Wiz internal identifier for the Organizational Unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_organization Project#cloud_organization}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment.

* Allowed values:

  * PRODUCTION
  * STAGING
  * DEVELOPMENT
  * TESTING
  * OTHER
* Defaults to `{{`PRODUCTION`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#environment Project#environment}

---

##### `resourceGroups`<sup>Optional</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_groups Project#resource_groups}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags"></a>

```java
public java.lang.Object getResourceTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>>

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_tags Project#resource_tags}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectCloudOrganizationLinkResourceTags <a name="ProjectCloudOrganizationLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLinkResourceTags;

ProjectCloudOrganizationLinkResourceTags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}.

---

### ProjectConfig <a name="ProjectConfig" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectConfig;

ProjectConfig.builder()
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
//  .archived(java.lang.Boolean)
//  .archived(IResolvable)
//  .businessUnit(java.lang.String)
//  .cloudAccountLink(IResolvable)
//  .cloudAccountLink(java.util.List<ProjectCloudAccountLink>)
//  .cloudOrganizationLink(IResolvable)
//  .cloudOrganizationLink(java.util.List<ProjectCloudOrganizationLink>)
//  .description(java.lang.String)
//  .identifiers(java.util.List<java.lang.String>)
//  .isFolder(java.lang.Boolean)
//  .isFolder(IResolvable)
//  .kubernetesClusterLink(IResolvable)
//  .kubernetesClusterLink(java.util.List<ProjectKubernetesClusterLink>)
//  .parentProjectId(java.lang.String)
//  .projectOwners(java.util.List<java.lang.String>)
//  .riskProfile(ProjectRiskProfile)
//  .securityChampions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived">archived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the project is archived/inactive - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit">businessUnit</a></code> | <code>java.lang.String</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink">cloudAccountLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>></code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink">cloudOrganizationLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>></code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description">description</a></code> | <code>java.lang.String</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder">isFolder</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the project is a folder. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink">kubernetesClusterLink</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>></code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId">parentProjectId</a></code> | <code>java.lang.String</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners">projectOwners</a></code> | <code>java.util.List<java.lang.String></code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile">riskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions">securityChampions</a></code> | <code>java.util.List<java.lang.String></code> | A list of security champions IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#name Project#name}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived"></a>

```java
public java.lang.Object getArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the project is archived/inactive - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#archived Project#archived}

---

##### `businessUnit`<sup>Optional</sup> <a name="businessUnit" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit"></a>

```java
public java.lang.String getBusinessUnit();
```

- *Type:* java.lang.String

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#business_unit Project#business_unit}

---

##### `cloudAccountLink`<sup>Optional</sup> <a name="cloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink"></a>

```java
public java.lang.Object getCloudAccountLink();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>>

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `cloudOrganizationLink`<sup>Optional</sup> <a name="cloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink"></a>

```java
public java.lang.Object getCloudOrganizationLink();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>>

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#description Project#description}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#identifiers Project#identifiers}

---

##### `isFolder`<sup>Optional</sup> <a name="isFolder" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder"></a>

```java
public java.lang.Object getIsFolder();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the project is a folder. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_folder Project#is_folder}

---

##### `kubernetesClusterLink`<sup>Optional</sup> <a name="kubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink"></a>

```java
public java.lang.Object getKubernetesClusterLink();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>>

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `parentProjectId`<sup>Optional</sup> <a name="parentProjectId" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId"></a>

```java
public java.lang.String getParentProjectId();
```

- *Type:* java.lang.String

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `projectOwners`<sup>Optional</sup> <a name="projectOwners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners"></a>

```java
public java.util.List<java.lang.String> getProjectOwners();
```

- *Type:* java.util.List<java.lang.String>

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#project_owners Project#project_owners}

---

##### `riskProfile`<sup>Optional</sup> <a name="riskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile"></a>

```java
public ProjectRiskProfile getRiskProfile();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#risk_profile Project#risk_profile}

---

##### `securityChampions`<sup>Optional</sup> <a name="securityChampions" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions"></a>

```java
public java.util.List<java.lang.String> getSecurityChampions();
```

- *Type:* java.util.List<java.lang.String>

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#security_champions Project#security_champions}

---

### ProjectKubernetesClusterLink <a name="ProjectKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectKubernetesClusterLink;

ProjectKubernetesClusterLink.builder()
    .kubernetesCluster(java.lang.String)
//  .environment(java.lang.String)
//  .namespaces(java.util.List<java.lang.String>)
//  .shared(java.lang.Boolean)
//  .shared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster">kubernetesCluster</a></code> | <code>java.lang.String</code> | The Wiz internal identifier for the kubernetes cluster. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. |

---

##### `kubernetesCluster`<sup>Required</sup> <a name="kubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster"></a>

```java
public java.lang.String getKubernetesCluster();
```

- *Type:* java.lang.String

The Wiz internal identifier for the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment.

* Allowed values:

  * PRODUCTION
  * STAGING
  * DEVELOPMENT
  * TESTING
  * OTHER
* Defaults to `{{`PRODUCTION`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#environment Project#environment}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#namespaces Project#namespaces}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked.

This needs to be set to `true` if `namespaces` are set.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectRiskProfile <a name="ProjectRiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectRiskProfile;

ProjectRiskProfile.builder()
//  .businessImpact(java.lang.String)
//  .hasAuthentication(java.lang.String)
//  .hasExposedApi(java.lang.String)
//  .isActivelyDeveloped(java.lang.String)
//  .isCustomerFacing(java.lang.String)
//  .isInternetFacing(java.lang.String)
//  .isRegulated(java.lang.String)
//  .regulatoryStandards(java.util.List<java.lang.String>)
//  .sensitiveDataTypes(java.util.List<java.lang.String>)
//  .storesData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact">businessImpact</a></code> | <code>java.lang.String</code> | Business impact. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication">hasAuthentication</a></code> | <code>java.lang.String</code> | Does the project require authentication? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi">hasExposedApi</a></code> | <code>java.lang.String</code> | Does the project expose an API? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped">isActivelyDeveloped</a></code> | <code>java.lang.String</code> | Is the project under active development? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing">isCustomerFacing</a></code> | <code>java.lang.String</code> | Is the project customer facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing">isInternetFacing</a></code> | <code>java.lang.String</code> | Is the project Internet facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated">isRegulated</a></code> | <code>java.lang.String</code> | Is the project regulated? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards">regulatoryStandards</a></code> | <code>java.util.List<java.lang.String></code> | Regulatory Standards. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes">sensitiveDataTypes</a></code> | <code>java.util.List<java.lang.String></code> | Sensitive Data Types. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData">storesData</a></code> | <code>java.lang.String</code> | Does the project store data? |

---

##### `businessImpact`<sup>Optional</sup> <a name="businessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact"></a>

```java
public java.lang.String getBusinessImpact();
```

- *Type:* java.lang.String

Business impact.

* Allowed values:

  * LBI
  * MBI
  * HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#business_impact Project#business_impact}

---

##### `hasAuthentication`<sup>Optional</sup> <a name="hasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication"></a>

```java
public java.lang.String getHasAuthentication();
```

- *Type:* java.lang.String

Does the project require authentication?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#has_authentication Project#has_authentication}

---

##### `hasExposedApi`<sup>Optional</sup> <a name="hasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi"></a>

```java
public java.lang.String getHasExposedApi();
```

- *Type:* java.lang.String

Does the project expose an API?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

##### `isActivelyDeveloped`<sup>Optional</sup> <a name="isActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped"></a>

```java
public java.lang.String getIsActivelyDeveloped();
```

- *Type:* java.lang.String

Is the project under active development?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

##### `isCustomerFacing`<sup>Optional</sup> <a name="isCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing"></a>

```java
public java.lang.String getIsCustomerFacing();
```

- *Type:* java.lang.String

Is the project customer facing?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

##### `isInternetFacing`<sup>Optional</sup> <a name="isInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing"></a>

```java
public java.lang.String getIsInternetFacing();
```

- *Type:* java.lang.String

Is the project Internet facing?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

##### `isRegulated`<sup>Optional</sup> <a name="isRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated"></a>

```java
public java.lang.String getIsRegulated();
```

- *Type:* java.lang.String

Is the project regulated?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_regulated Project#is_regulated}

---

##### `regulatoryStandards`<sup>Optional</sup> <a name="regulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards"></a>

```java
public java.util.List<java.lang.String> getRegulatoryStandards();
```

- *Type:* java.util.List<java.lang.String>

Regulatory Standards.

* Allowed values:

  * ISO_20000_1_2011
  * ISO_22301
  * ISO_27001
  * ISO_27017
  * ISO_27018
  * ISO_27701
  * ISO_9001
  * SOC
  * FEDRAMP
  * NIST_800_171
  * NIST_CSF
  * HIPPA_HITECH
  * HITRUST
  * PCI_DSS
  * SEC_17A_4
  * SEC_REGULATION_SCI
  * SOX
  * GDPR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#regulatory_standards Project#regulatory_standards}

---

##### `sensitiveDataTypes`<sup>Optional</sup> <a name="sensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes"></a>

```java
public java.util.List<java.lang.String> getSensitiveDataTypes();
```

- *Type:* java.util.List<java.lang.String>

Sensitive Data Types.

* Allowed values:

  * CLASSIFIED
  * HEALTH
  * PII
  * PCI
  * FINANCIAL
  * CUSTOMER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#sensitive_data_types Project#sensitive_data_types}

---

##### `storesData`<sup>Optional</sup> <a name="storesData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData"></a>

```java
public java.lang.String getStoresData();
```

- *Type:* java.lang.String

Does the project store data?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#stores_data Project#stores_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkList <a name="ProjectCloudAccountLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLinkList;

new ProjectCloudAccountLinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get"></a>

```java
public ProjectCloudAccountLinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>>

---


### ProjectCloudAccountLinkOutputReference <a name="ProjectCloudAccountLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLinkOutputReference;

new ProjectCloudAccountLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags"></a>

```java
public void putResourceTags(IResolvable OR java.util.List<ProjectCloudAccountLinkResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>>

---

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared"></a>

```java
public void resetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags"></a>

```java
public ProjectCloudAccountLinkResourceTagsList getResourceTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a>

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput"></a>

```java
public java.lang.String getCloudAccountIdInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput"></a>

```java
public java.lang.Object getResourceTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>>

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput"></a>

```java
public java.lang.Object getSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId"></a>

```java
public java.lang.String getCloudAccountId();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink">ProjectCloudAccountLink</a>

---


### ProjectCloudAccountLinkResourceTagsList <a name="ProjectCloudAccountLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLinkResourceTagsList;

new ProjectCloudAccountLinkResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get"></a>

```java
public ProjectCloudAccountLinkResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>>

---


### ProjectCloudAccountLinkResourceTagsOutputReference <a name="ProjectCloudAccountLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference;

new ProjectCloudAccountLinkResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags">ProjectCloudAccountLinkResourceTags</a>

---


### ProjectCloudOrganizationLinkList <a name="ProjectCloudOrganizationLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLinkList;

new ProjectCloudOrganizationLinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get"></a>

```java
public ProjectCloudOrganizationLinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>>

---


### ProjectCloudOrganizationLinkOutputReference <a name="ProjectCloudOrganizationLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLinkOutputReference;

new ProjectCloudOrganizationLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups">resetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTags` <a name="putResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags"></a>

```java
public void putResourceTags(IResolvable OR java.util.List<ProjectCloudOrganizationLinkResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>>

---

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetResourceGroups` <a name="resetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups"></a>

```java
public void resetResourceGroups()
```

##### `resetResourceTags` <a name="resetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared"></a>

```java
public void resetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput">cloudOrganizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput">resourceGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization">cloudOrganization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups">resourceGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags"></a>

```java
public ProjectCloudOrganizationLinkResourceTagsList getResourceTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a>

---

##### `cloudOrganizationInput`<sup>Optional</sup> <a name="cloudOrganizationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput"></a>

```java
public java.lang.String getCloudOrganizationInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupsInput`<sup>Optional</sup> <a name="resourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput"></a>

```java
public java.util.List<java.lang.String> getResourceGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput"></a>

```java
public java.lang.Object getResourceTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>>

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput"></a>

```java
public java.lang.Object getSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudOrganization`<sup>Required</sup> <a name="cloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization"></a>

```java
public java.lang.String getCloudOrganization();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups"></a>

```java
public java.util.List<java.lang.String> getResourceGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink">ProjectCloudOrganizationLink</a>

---


### ProjectCloudOrganizationLinkResourceTagsList <a name="ProjectCloudOrganizationLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLinkResourceTagsList;

new ProjectCloudOrganizationLinkResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get"></a>

```java
public ProjectCloudOrganizationLinkResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>>

---


### ProjectCloudOrganizationLinkResourceTagsOutputReference <a name="ProjectCloudOrganizationLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference;

new ProjectCloudOrganizationLinkResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags">ProjectCloudOrganizationLinkResourceTags</a>

---


### ProjectKubernetesClusterLinkList <a name="ProjectKubernetesClusterLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectKubernetesClusterLinkList;

new ProjectKubernetesClusterLinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get"></a>

```java
public ProjectKubernetesClusterLinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>>

---


### ProjectKubernetesClusterLinkOutputReference <a name="ProjectKubernetesClusterLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectKubernetesClusterLinkOutputReference;

new ProjectKubernetesClusterLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared">resetShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetNamespaces` <a name="resetNamespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces"></a>

```java
public void resetNamespaces()
```

##### `resetShared` <a name="resetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared"></a>

```java
public void resetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput">kubernetesClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput">sharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster">kubernetesCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared">shared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterInput`<sup>Optional</sup> <a name="kubernetesClusterInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput"></a>

```java
public java.lang.String getKubernetesClusterInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput"></a>

```java
public java.lang.Object getSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `kubernetesCluster`<sup>Required</sup> <a name="kubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster"></a>

```java
public java.lang.String getKubernetesCluster();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shared`<sup>Required</sup> <a name="shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared"></a>

```java
public java.lang.Object getShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink">ProjectKubernetesClusterLink</a>

---


### ProjectRiskProfileOutputReference <a name="ProjectRiskProfileOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.project.ProjectRiskProfileOutputReference;

new ProjectRiskProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact">resetBusinessImpact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication">resetHasAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi">resetHasExposedApi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped">resetIsActivelyDeveloped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing">resetIsCustomerFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing">resetIsInternetFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated">resetIsRegulated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards">resetRegulatoryStandards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes">resetSensitiveDataTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData">resetStoresData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusinessImpact` <a name="resetBusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact"></a>

```java
public void resetBusinessImpact()
```

##### `resetHasAuthentication` <a name="resetHasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication"></a>

```java
public void resetHasAuthentication()
```

##### `resetHasExposedApi` <a name="resetHasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi"></a>

```java
public void resetHasExposedApi()
```

##### `resetIsActivelyDeveloped` <a name="resetIsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped"></a>

```java
public void resetIsActivelyDeveloped()
```

##### `resetIsCustomerFacing` <a name="resetIsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing"></a>

```java
public void resetIsCustomerFacing()
```

##### `resetIsInternetFacing` <a name="resetIsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing"></a>

```java
public void resetIsInternetFacing()
```

##### `resetIsRegulated` <a name="resetIsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated"></a>

```java
public void resetIsRegulated()
```

##### `resetRegulatoryStandards` <a name="resetRegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards"></a>

```java
public void resetRegulatoryStandards()
```

##### `resetSensitiveDataTypes` <a name="resetSensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes"></a>

```java
public void resetSensitiveDataTypes()
```

##### `resetStoresData` <a name="resetStoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData"></a>

```java
public void resetStoresData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput">businessImpactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput">hasAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput">hasExposedApiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput">isActivelyDevelopedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput">isCustomerFacingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput">isInternetFacingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput">isRegulatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput">regulatoryStandardsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput">sensitiveDataTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput">storesDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact">businessImpact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication">hasAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi">hasExposedApi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped">isActivelyDeveloped</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing">isCustomerFacing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing">isInternetFacing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated">isRegulated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards">regulatoryStandards</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes">sensitiveDataTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData">storesData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessImpactInput`<sup>Optional</sup> <a name="businessImpactInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput"></a>

```java
public java.lang.String getBusinessImpactInput();
```

- *Type:* java.lang.String

---

##### `hasAuthenticationInput`<sup>Optional</sup> <a name="hasAuthenticationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput"></a>

```java
public java.lang.String getHasAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `hasExposedApiInput`<sup>Optional</sup> <a name="hasExposedApiInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput"></a>

```java
public java.lang.String getHasExposedApiInput();
```

- *Type:* java.lang.String

---

##### `isActivelyDevelopedInput`<sup>Optional</sup> <a name="isActivelyDevelopedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput"></a>

```java
public java.lang.String getIsActivelyDevelopedInput();
```

- *Type:* java.lang.String

---

##### `isCustomerFacingInput`<sup>Optional</sup> <a name="isCustomerFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput"></a>

```java
public java.lang.String getIsCustomerFacingInput();
```

- *Type:* java.lang.String

---

##### `isInternetFacingInput`<sup>Optional</sup> <a name="isInternetFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput"></a>

```java
public java.lang.String getIsInternetFacingInput();
```

- *Type:* java.lang.String

---

##### `isRegulatedInput`<sup>Optional</sup> <a name="isRegulatedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput"></a>

```java
public java.lang.String getIsRegulatedInput();
```

- *Type:* java.lang.String

---

##### `regulatoryStandardsInput`<sup>Optional</sup> <a name="regulatoryStandardsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput"></a>

```java
public java.util.List<java.lang.String> getRegulatoryStandardsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveDataTypesInput`<sup>Optional</sup> <a name="sensitiveDataTypesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput"></a>

```java
public java.util.List<java.lang.String> getSensitiveDataTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storesDataInput`<sup>Optional</sup> <a name="storesDataInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput"></a>

```java
public java.lang.String getStoresDataInput();
```

- *Type:* java.lang.String

---

##### `businessImpact`<sup>Required</sup> <a name="businessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact"></a>

```java
public java.lang.String getBusinessImpact();
```

- *Type:* java.lang.String

---

##### `hasAuthentication`<sup>Required</sup> <a name="hasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication"></a>

```java
public java.lang.String getHasAuthentication();
```

- *Type:* java.lang.String

---

##### `hasExposedApi`<sup>Required</sup> <a name="hasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi"></a>

```java
public java.lang.String getHasExposedApi();
```

- *Type:* java.lang.String

---

##### `isActivelyDeveloped`<sup>Required</sup> <a name="isActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped"></a>

```java
public java.lang.String getIsActivelyDeveloped();
```

- *Type:* java.lang.String

---

##### `isCustomerFacing`<sup>Required</sup> <a name="isCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing"></a>

```java
public java.lang.String getIsCustomerFacing();
```

- *Type:* java.lang.String

---

##### `isInternetFacing`<sup>Required</sup> <a name="isInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing"></a>

```java
public java.lang.String getIsInternetFacing();
```

- *Type:* java.lang.String

---

##### `isRegulated`<sup>Required</sup> <a name="isRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated"></a>

```java
public java.lang.String getIsRegulated();
```

- *Type:* java.lang.String

---

##### `regulatoryStandards`<sup>Required</sup> <a name="regulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards"></a>

```java
public java.util.List<java.lang.String> getRegulatoryStandards();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveDataTypes`<sup>Required</sup> <a name="sensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes"></a>

```java
public java.util.List<java.lang.String> getSensitiveDataTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storesData`<sup>Required</sup> <a name="storesData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData"></a>

```java
public java.lang.String getStoresData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue"></a>

```java
public ProjectRiskProfile getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---



