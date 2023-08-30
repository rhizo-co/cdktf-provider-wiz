# `wiz_project`

Refer to the Terraform Registory for docs: [`wiz_project`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="rhizo-co-terraform-provider-wiz.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="rhizo-co-terraform-provider-wiz.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project wiz_project}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProject(scope Construct, id *string, config ProjectConfig) Project
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink">PutCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink">PutCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink">PutKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile">PutRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit">ResetBusinessUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink">ResetCloudAccountLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink">ResetCloudOrganizationLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers">ResetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder">ResetIsFolder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink">ResetKubernetesClusterLink</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId">ResetParentProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners">ResetProjectOwners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile">ResetRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions">ResetSecurityChampions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.Project.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.project.Project.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.project.Project.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCloudAccountLink` <a name="PutCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink"></a>

```go
func PutCloudAccountLink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudAccountLink.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCloudOrganizationLink` <a name="PutCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink"></a>

```go
func PutCloudOrganizationLink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putCloudOrganizationLink.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKubernetesClusterLink` <a name="PutKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink"></a>

```go
func PutKubernetesClusterLink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putKubernetesClusterLink.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRiskProfile` <a name="PutRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile"></a>

```go
func PutRiskProfile(value ProjectRiskProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.Project.putRiskProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `ResetArchived` <a name="ResetArchived" id="rhizo-co-terraform-provider-wiz.project.Project.resetArchived"></a>

```go
func ResetArchived()
```

##### `ResetBusinessUnit` <a name="ResetBusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.resetBusinessUnit"></a>

```go
func ResetBusinessUnit()
```

##### `ResetCloudAccountLink` <a name="ResetCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudAccountLink"></a>

```go
func ResetCloudAccountLink()
```

##### `ResetCloudOrganizationLink` <a name="ResetCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetCloudOrganizationLink"></a>

```go
func ResetCloudOrganizationLink()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.project.Project.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIdentifiers` <a name="ResetIdentifiers" id="rhizo-co-terraform-provider-wiz.project.Project.resetIdentifiers"></a>

```go
func ResetIdentifiers()
```

##### `ResetIsFolder` <a name="ResetIsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.resetIsFolder"></a>

```go
func ResetIsFolder()
```

##### `ResetKubernetesClusterLink` <a name="ResetKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.resetKubernetesClusterLink"></a>

```go
func ResetKubernetesClusterLink()
```

##### `ResetParentProjectId` <a name="ResetParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.resetParentProjectId"></a>

```go
func ResetParentProjectId()
```

##### `ResetProjectOwners` <a name="ResetProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.resetProjectOwners"></a>

```go
func ResetProjectOwners()
```

##### `ResetRiskProfile` <a name="ResetRiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.resetRiskProfile"></a>

```go
func ResetRiskProfile()
```

##### `ResetSecurityChampions` <a name="ResetSecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.resetSecurityChampions"></a>

```go
func ResetSecurityChampions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.project.Project.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.Project_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.Project_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.Project_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink">CloudAccountLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink">CloudOrganizationLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink">KubernetesClusterLink</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile">RiskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput">ArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput">BusinessUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput">CloudAccountLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput">CloudOrganizationLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput">IdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput">IsFolderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput">KubernetesClusterLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput">ParentProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput">ProjectOwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput">RiskProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput">SecurityChampionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.archived">Archived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit">BusinessUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.isFolder">IsFolder</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId">ParentProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners">ProjectOwners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions">SecurityChampions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.project.Project.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.project.Project.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.Project.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.project.Project.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.project.Project.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.project.Project.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.project.Project.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.project.Project.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.project.Project.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.project.Project.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.Project.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.project.Project.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudAccountLink`<sup>Required</sup> <a name="CloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLink"></a>

```go
func CloudAccountLink() ProjectCloudAccountLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList">ProjectCloudAccountLinkList</a>

---

##### `CloudOrganizationLink`<sup>Required</sup> <a name="CloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLink"></a>

```go
func CloudOrganizationLink() ProjectCloudOrganizationLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList">ProjectCloudOrganizationLinkList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.project.Project.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusterLink`<sup>Required</sup> <a name="KubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLink"></a>

```go
func KubernetesClusterLink() ProjectKubernetesClusterLinkList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList">ProjectKubernetesClusterLinkList</a>

---

##### `RiskProfile`<sup>Required</sup> <a name="RiskProfile" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfile"></a>

```go
func RiskProfile() ProjectRiskProfileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference">ProjectRiskProfileOutputReference</a>

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="rhizo-co-terraform-provider-wiz.project.Project.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.archivedInput"></a>

```go
func ArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `BusinessUnitInput`<sup>Optional</sup> <a name="BusinessUnitInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnitInput"></a>

```go
func BusinessUnitInput() *string
```

- *Type:* *string

---

##### `CloudAccountLinkInput`<sup>Optional</sup> <a name="CloudAccountLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudAccountLinkInput"></a>

```go
func CloudAccountLinkInput() interface{}
```

- *Type:* interface{}

---

##### `CloudOrganizationLinkInput`<sup>Optional</sup> <a name="CloudOrganizationLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.cloudOrganizationLinkInput"></a>

```go
func CloudOrganizationLinkInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiersInput"></a>

```go
func IdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsFolderInput`<sup>Optional</sup> <a name="IsFolderInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolderInput"></a>

```go
func IsFolderInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesClusterLinkInput`<sup>Optional</sup> <a name="KubernetesClusterLinkInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.kubernetesClusterLinkInput"></a>

```go
func KubernetesClusterLinkInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentProjectIdInput`<sup>Optional</sup> <a name="ParentProjectIdInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectIdInput"></a>

```go
func ParentProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectOwnersInput`<sup>Optional</sup> <a name="ProjectOwnersInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwnersInput"></a>

```go
func ProjectOwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RiskProfileInput`<sup>Optional</sup> <a name="RiskProfileInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.riskProfileInput"></a>

```go
func RiskProfileInput() ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---

##### `SecurityChampionsInput`<sup>Optional</sup> <a name="SecurityChampionsInput" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampionsInput"></a>

```go
func SecurityChampionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="rhizo-co-terraform-provider-wiz.project.Project.property.archived"></a>

```go
func Archived() interface{}
```

- *Type:* interface{}

---

##### `BusinessUnit`<sup>Required</sup> <a name="BusinessUnit" id="rhizo-co-terraform-provider-wiz.project.Project.property.businessUnit"></a>

```go
func BusinessUnit() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.project.Project.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-wiz.project.Project.property.identifiers"></a>

```go
func Identifiers() *[]*string
```

- *Type:* *[]*string

---

##### `IsFolder`<sup>Required</sup> <a name="IsFolder" id="rhizo-co-terraform-provider-wiz.project.Project.property.isFolder"></a>

```go
func IsFolder() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.project.Project.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentProjectId`<sup>Required</sup> <a name="ParentProjectId" id="rhizo-co-terraform-provider-wiz.project.Project.property.parentProjectId"></a>

```go
func ParentProjectId() *string
```

- *Type:* *string

---

##### `ProjectOwners`<sup>Required</sup> <a name="ProjectOwners" id="rhizo-co-terraform-provider-wiz.project.Project.property.projectOwners"></a>

```go
func ProjectOwners() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityChampions`<sup>Required</sup> <a name="SecurityChampions" id="rhizo-co-terraform-provider-wiz.project.Project.property.securityChampions"></a>

```go
func SecurityChampions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.project.Project.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLink <a name="ProjectCloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectCloudAccountLink {
	CloudAccountId: *string,
	Environment: *string,
	ResourceGroups: *[]*string,
	ResourceTags: interface{},
	Shared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId">CloudAccountId</a></code> | <code>*string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment">Environment</a></code> | <code>*string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags">ResourceTags</a></code> | <code>interface{}</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared">Shared</a></code> | <code>interface{}</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.cloudAccountId"></a>

```go
CloudAccountId *string
```

- *Type:* *string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_account_id Project#cloud_account_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

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

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceGroups"></a>

```go
ResourceGroups *[]*string
```

- *Type:* *[]*string

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_groups Project#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.resourceTags"></a>

```go
ResourceTags interface{}
```

- *Type:* interface{}

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_tags Project#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLink.property.shared"></a>

```go
Shared interface{}
```

- *Type:* interface{}

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectCloudAccountLinkResourceTags <a name="ProjectCloudAccountLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectCloudAccountLinkResourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}.

---

### ProjectCloudOrganizationLink <a name="ProjectCloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectCloudOrganizationLink {
	CloudOrganization: *string,
	Environment: *string,
	ResourceGroups: *[]*string,
	ResourceTags: interface{},
	Shared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization">CloudOrganization</a></code> | <code>*string</code> | The Wiz internal identifier for the Organizational Unit. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment">Environment</a></code> | <code>*string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags">ResourceTags</a></code> | <code>interface{}</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared">Shared</a></code> | <code>interface{}</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `CloudOrganization`<sup>Required</sup> <a name="CloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.cloudOrganization"></a>

```go
CloudOrganization *string
```

- *Type:* *string

The Wiz internal identifier for the Organizational Unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_organization Project#cloud_organization}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

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

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceGroups"></a>

```go
ResourceGroups *[]*string
```

- *Type:* *[]*string

Please provide a list of strings for filtering by resource groups. `shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_groups Project#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.resourceTags"></a>

```go
ResourceTags interface{}
```

- *Type:* interface{}

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#resource_tags Project#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLink.property.shared"></a>

```go
Shared interface{}
```

- *Type:* interface{}

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectCloudOrganizationLinkResourceTags <a name="ProjectCloudOrganizationLinkResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectCloudOrganizationLinkResourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#key Project#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#value Project#value}.

---

### ProjectConfig <a name="ProjectConfig" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Archived: interface{},
	BusinessUnit: *string,
	CloudAccountLink: interface{},
	CloudOrganizationLink: interface{},
	Description: *string,
	Identifiers: *[]*string,
	IsFolder: interface{},
	KubernetesClusterLink: interface{},
	ParentProjectId: *string,
	ProjectOwners: *[]*string,
	RiskProfile: github.com/rhizo-co/cdktf-provider-wiz-go/wiz.project.ProjectRiskProfile,
	SecurityChampions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name">Name</a></code> | <code>*string</code> | The project name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived">Archived</a></code> | <code>interface{}</code> | Whether the project is archived/inactive - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit">BusinessUnit</a></code> | <code>*string</code> | The business unit to which the project belongs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink">CloudAccountLink</a></code> | <code>interface{}</code> | cloud_account_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink">CloudOrganizationLink</a></code> | <code>interface{}</code> | cloud_organization_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description">Description</a></code> | <code>*string</code> | The project description. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers">Identifiers</a></code> | <code>*[]*string</code> | Identifiers for the project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder">IsFolder</a></code> | <code>interface{}</code> | Whether the project is a folder. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink">KubernetesClusterLink</a></code> | <code>interface{}</code> | kubernetes_cluster_link block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId">ParentProjectId</a></code> | <code>*string</code> | The parent project ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners">ProjectOwners</a></code> | <code>*[]*string</code> | A list of project owner IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile">RiskProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | risk_profile block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions">SecurityChampions</a></code> | <code>*[]*string</code> | A list of security champions IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The project name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#name Project#name}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.archived"></a>

```go
Archived interface{}
```

- *Type:* interface{}

Whether the project is archived/inactive - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#archived Project#archived}

---

##### `BusinessUnit`<sup>Optional</sup> <a name="BusinessUnit" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.businessUnit"></a>

```go
BusinessUnit *string
```

- *Type:* *string

The business unit to which the project belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#business_unit Project#business_unit}

---

##### `CloudAccountLink`<sup>Optional</sup> <a name="CloudAccountLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudAccountLink"></a>

```go
CloudAccountLink interface{}
```

- *Type:* interface{}

cloud_account_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_account_link Project#cloud_account_link}

---

##### `CloudOrganizationLink`<sup>Optional</sup> <a name="CloudOrganizationLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.cloudOrganizationLink"></a>

```go
CloudOrganizationLink interface{}
```

- *Type:* interface{}

cloud_organization_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#cloud_organization_link Project#cloud_organization_link}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The project description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#description Project#description}

---

##### `Identifiers`<sup>Optional</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.identifiers"></a>

```go
Identifiers *[]*string
```

- *Type:* *[]*string

Identifiers for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#identifiers Project#identifiers}

---

##### `IsFolder`<sup>Optional</sup> <a name="IsFolder" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.isFolder"></a>

```go
IsFolder interface{}
```

- *Type:* interface{}

Whether the project is a folder. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_folder Project#is_folder}

---

##### `KubernetesClusterLink`<sup>Optional</sup> <a name="KubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.kubernetesClusterLink"></a>

```go
KubernetesClusterLink interface{}
```

- *Type:* interface{}

kubernetes_cluster_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#kubernetes_cluster_link Project#kubernetes_cluster_link}

---

##### `ParentProjectId`<sup>Optional</sup> <a name="ParentProjectId" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.parentProjectId"></a>

```go
ParentProjectId *string
```

- *Type:* *string

The parent project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#parent_project_id Project#parent_project_id}

---

##### `ProjectOwners`<sup>Optional</sup> <a name="ProjectOwners" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.projectOwners"></a>

```go
ProjectOwners *[]*string
```

- *Type:* *[]*string

A list of project owner IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#project_owners Project#project_owners}

---

##### `RiskProfile`<sup>Optional</sup> <a name="RiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.riskProfile"></a>

```go
RiskProfile ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

risk_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#risk_profile Project#risk_profile}

---

##### `SecurityChampions`<sup>Optional</sup> <a name="SecurityChampions" id="rhizo-co-terraform-provider-wiz.project.ProjectConfig.property.securityChampions"></a>

```go
SecurityChampions *[]*string
```

- *Type:* *[]*string

A list of security champions IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#security_champions Project#security_champions}

---

### ProjectKubernetesClusterLink <a name="ProjectKubernetesClusterLink" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectKubernetesClusterLink {
	KubernetesCluster: *string,
	Environment: *string,
	Namespaces: *[]*string,
	Shared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster">KubernetesCluster</a></code> | <code>*string</code> | The Wiz internal identifier for the kubernetes cluster. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment">Environment</a></code> | <code>*string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared">Shared</a></code> | <code>interface{}</code> | Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked. |

---

##### `KubernetesCluster`<sup>Required</sup> <a name="KubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.kubernetesCluster"></a>

```go
KubernetesCluster *string
```

- *Type:* *string

The Wiz internal identifier for the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#kubernetes_cluster Project#kubernetes_cluster}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

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

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

The kubernetes namespaces to link. `shared` must be set to `true` if namespaces are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#namespaces Project#namespaces}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLink.property.shared"></a>

```go
Shared interface{}
```

- *Type:* interface{}

Mark the kubernetes cluster as shared, in which case, specific namespaces can be linked.

This needs to be set to `true` if `namespaces` are set.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#shared Project#shared}

---

### ProjectRiskProfile <a name="ProjectRiskProfile" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

&project.ProjectRiskProfile {
	BusinessImpact: *string,
	HasAuthentication: *string,
	HasExposedApi: *string,
	IsActivelyDeveloped: *string,
	IsCustomerFacing: *string,
	IsInternetFacing: *string,
	IsRegulated: *string,
	RegulatoryStandards: *[]*string,
	SensitiveDataTypes: *[]*string,
	StoresData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact">BusinessImpact</a></code> | <code>*string</code> | Business impact. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication">HasAuthentication</a></code> | <code>*string</code> | Does the project require authentication? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi">HasExposedApi</a></code> | <code>*string</code> | Does the project expose an API? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped">IsActivelyDeveloped</a></code> | <code>*string</code> | Is the project under active development? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing">IsCustomerFacing</a></code> | <code>*string</code> | Is the project customer facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing">IsInternetFacing</a></code> | <code>*string</code> | Is the project Internet facing? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated">IsRegulated</a></code> | <code>*string</code> | Is the project regulated? |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards">RegulatoryStandards</a></code> | <code>*[]*string</code> | Regulatory Standards. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes">SensitiveDataTypes</a></code> | <code>*[]*string</code> | Sensitive Data Types. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData">StoresData</a></code> | <code>*string</code> | Does the project store data? |

---

##### `BusinessImpact`<sup>Optional</sup> <a name="BusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.businessImpact"></a>

```go
BusinessImpact *string
```

- *Type:* *string

Business impact.

* Allowed values:

  * LBI
  * MBI
  * HBI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#business_impact Project#business_impact}

---

##### `HasAuthentication`<sup>Optional</sup> <a name="HasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasAuthentication"></a>

```go
HasAuthentication *string
```

- *Type:* *string

Does the project require authentication?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#has_authentication Project#has_authentication}

---

##### `HasExposedApi`<sup>Optional</sup> <a name="HasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.hasExposedApi"></a>

```go
HasExposedApi *string
```

- *Type:* *string

Does the project expose an API?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#has_exposed_api Project#has_exposed_api}

---

##### `IsActivelyDeveloped`<sup>Optional</sup> <a name="IsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isActivelyDeveloped"></a>

```go
IsActivelyDeveloped *string
```

- *Type:* *string

Is the project under active development?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_actively_developed Project#is_actively_developed}

---

##### `IsCustomerFacing`<sup>Optional</sup> <a name="IsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isCustomerFacing"></a>

```go
IsCustomerFacing *string
```

- *Type:* *string

Is the project customer facing?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_customer_facing Project#is_customer_facing}

---

##### `IsInternetFacing`<sup>Optional</sup> <a name="IsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isInternetFacing"></a>

```go
IsInternetFacing *string
```

- *Type:* *string

Is the project Internet facing?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_internet_facing Project#is_internet_facing}

---

##### `IsRegulated`<sup>Optional</sup> <a name="IsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.isRegulated"></a>

```go
IsRegulated *string
```

- *Type:* *string

Is the project regulated?

* Allowed values:

  * YES
  * NO
  * UNKNOWN
* Defaults to `{{`UNKNOWN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/project#is_regulated Project#is_regulated}

---

##### `RegulatoryStandards`<sup>Optional</sup> <a name="RegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.regulatoryStandards"></a>

```go
RegulatoryStandards *[]*string
```

- *Type:* *[]*string

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

##### `SensitiveDataTypes`<sup>Optional</sup> <a name="SensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.sensitiveDataTypes"></a>

```go
SensitiveDataTypes *[]*string
```

- *Type:* *[]*string

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

##### `StoresData`<sup>Optional</sup> <a name="StoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile.property.storesData"></a>

```go
StoresData *string
```

- *Type:* *string

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

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudAccountLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectCloudAccountLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get"></a>

```go
func Get(index *f64) ProjectCloudAccountLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudAccountLinkOutputReference <a name="ProjectCloudAccountLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudAccountLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectCloudAccountLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags"></a>

```go
func PutResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceGroups"></a>

```go
func ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetResourceTags"></a>

```go
func ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.resetShared"></a>

```go
func ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput">CloudAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId">CloudAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared">Shared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTags"></a>

```go
func ResourceTags() ProjectCloudAccountLinkResourceTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList">ProjectCloudAccountLinkResourceTagsList</a>

---

##### `CloudAccountIdInput`<sup>Optional</sup> <a name="CloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountIdInput"></a>

```go
func CloudAccountIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroupsInput"></a>

```go
func ResourceGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.sharedInput"></a>

```go
func SharedInput() interface{}
```

- *Type:* interface{}

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.cloudAccountId"></a>

```go
func CloudAccountId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.resourceGroups"></a>

```go
func ResourceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.shared"></a>

```go
func Shared() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudAccountLinkResourceTagsList <a name="ProjectCloudAccountLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudAccountLinkResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectCloudAccountLinkResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get"></a>

```go
func Get(index *f64) ProjectCloudAccountLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudAccountLinkResourceTagsOutputReference <a name="ProjectCloudAccountLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudAccountLinkResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectCloudAccountLinkResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudAccountLinkResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudOrganizationLinkList <a name="ProjectCloudOrganizationLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudOrganizationLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectCloudOrganizationLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get"></a>

```go
func Get(index *f64) ProjectCloudOrganizationLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudOrganizationLinkOutputReference <a name="ProjectCloudOrganizationLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudOrganizationLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectCloudOrganizationLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags"></a>

```go
func PutResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.putResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceGroups"></a>

```go
func ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetResourceTags"></a>

```go
func ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.resetShared"></a>

```go
func ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput">CloudOrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization">CloudOrganization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared">Shared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTags"></a>

```go
func ResourceTags() ProjectCloudOrganizationLinkResourceTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList">ProjectCloudOrganizationLinkResourceTagsList</a>

---

##### `CloudOrganizationInput`<sup>Optional</sup> <a name="CloudOrganizationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganizationInput"></a>

```go
func CloudOrganizationInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroupsInput"></a>

```go
func ResourceGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.sharedInput"></a>

```go
func SharedInput() interface{}
```

- *Type:* interface{}

---

##### `CloudOrganization`<sup>Required</sup> <a name="CloudOrganization" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.cloudOrganization"></a>

```go
func CloudOrganization() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.resourceGroups"></a>

```go
func ResourceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.shared"></a>

```go
func Shared() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudOrganizationLinkResourceTagsList <a name="ProjectCloudOrganizationLinkResourceTagsList" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudOrganizationLinkResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectCloudOrganizationLinkResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get"></a>

```go
func Get(index *f64) ProjectCloudOrganizationLinkResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudOrganizationLinkResourceTagsOutputReference <a name="ProjectCloudOrganizationLinkResourceTagsOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectCloudOrganizationLinkResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectCloudOrganizationLinkResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectCloudOrganizationLinkResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectKubernetesClusterLinkList <a name="ProjectKubernetesClusterLinkList" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectKubernetesClusterLinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectKubernetesClusterLinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get"></a>

```go
func Get(index *f64) ProjectKubernetesClusterLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectKubernetesClusterLinkOutputReference <a name="ProjectKubernetesClusterLinkOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectKubernetesClusterLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectKubernetesClusterLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetNamespaces"></a>

```go
func ResetNamespaces()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.resetShared"></a>

```go
func ResetShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput">KubernetesClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput">SharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster">KubernetesCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared">Shared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterInput`<sup>Optional</sup> <a name="KubernetesClusterInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesClusterInput"></a>

```go
func KubernetesClusterInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.sharedInput"></a>

```go
func SharedInput() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `KubernetesCluster`<sup>Required</sup> <a name="KubernetesCluster" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.kubernetesCluster"></a>

```go
func KubernetesCluster() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.shared"></a>

```go
func Shared() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectKubernetesClusterLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectRiskProfileOutputReference <a name="ProjectRiskProfileOutputReference" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/project"

project.NewProjectRiskProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectRiskProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact">ResetBusinessImpact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication">ResetHasAuthentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi">ResetHasExposedApi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped">ResetIsActivelyDeveloped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing">ResetIsCustomerFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing">ResetIsInternetFacing</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated">ResetIsRegulated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards">ResetRegulatoryStandards</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes">ResetSensitiveDataTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData">ResetStoresData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBusinessImpact` <a name="ResetBusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetBusinessImpact"></a>

```go
func ResetBusinessImpact()
```

##### `ResetHasAuthentication` <a name="ResetHasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasAuthentication"></a>

```go
func ResetHasAuthentication()
```

##### `ResetHasExposedApi` <a name="ResetHasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetHasExposedApi"></a>

```go
func ResetHasExposedApi()
```

##### `ResetIsActivelyDeveloped` <a name="ResetIsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsActivelyDeveloped"></a>

```go
func ResetIsActivelyDeveloped()
```

##### `ResetIsCustomerFacing` <a name="ResetIsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsCustomerFacing"></a>

```go
func ResetIsCustomerFacing()
```

##### `ResetIsInternetFacing` <a name="ResetIsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsInternetFacing"></a>

```go
func ResetIsInternetFacing()
```

##### `ResetIsRegulated` <a name="ResetIsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetIsRegulated"></a>

```go
func ResetIsRegulated()
```

##### `ResetRegulatoryStandards` <a name="ResetRegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetRegulatoryStandards"></a>

```go
func ResetRegulatoryStandards()
```

##### `ResetSensitiveDataTypes` <a name="ResetSensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetSensitiveDataTypes"></a>

```go
func ResetSensitiveDataTypes()
```

##### `ResetStoresData` <a name="ResetStoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.resetStoresData"></a>

```go
func ResetStoresData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput">BusinessImpactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput">HasAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput">HasExposedApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput">IsActivelyDevelopedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput">IsCustomerFacingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput">IsInternetFacingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput">IsRegulatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput">RegulatoryStandardsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput">SensitiveDataTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput">StoresDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact">BusinessImpact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication">HasAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi">HasExposedApi</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped">IsActivelyDeveloped</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing">IsCustomerFacing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing">IsInternetFacing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated">IsRegulated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards">RegulatoryStandards</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes">SensitiveDataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData">StoresData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BusinessImpactInput`<sup>Optional</sup> <a name="BusinessImpactInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpactInput"></a>

```go
func BusinessImpactInput() *string
```

- *Type:* *string

---

##### `HasAuthenticationInput`<sup>Optional</sup> <a name="HasAuthenticationInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthenticationInput"></a>

```go
func HasAuthenticationInput() *string
```

- *Type:* *string

---

##### `HasExposedApiInput`<sup>Optional</sup> <a name="HasExposedApiInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApiInput"></a>

```go
func HasExposedApiInput() *string
```

- *Type:* *string

---

##### `IsActivelyDevelopedInput`<sup>Optional</sup> <a name="IsActivelyDevelopedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDevelopedInput"></a>

```go
func IsActivelyDevelopedInput() *string
```

- *Type:* *string

---

##### `IsCustomerFacingInput`<sup>Optional</sup> <a name="IsCustomerFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacingInput"></a>

```go
func IsCustomerFacingInput() *string
```

- *Type:* *string

---

##### `IsInternetFacingInput`<sup>Optional</sup> <a name="IsInternetFacingInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacingInput"></a>

```go
func IsInternetFacingInput() *string
```

- *Type:* *string

---

##### `IsRegulatedInput`<sup>Optional</sup> <a name="IsRegulatedInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulatedInput"></a>

```go
func IsRegulatedInput() *string
```

- *Type:* *string

---

##### `RegulatoryStandardsInput`<sup>Optional</sup> <a name="RegulatoryStandardsInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandardsInput"></a>

```go
func RegulatoryStandardsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataTypesInput`<sup>Optional</sup> <a name="SensitiveDataTypesInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypesInput"></a>

```go
func SensitiveDataTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StoresDataInput`<sup>Optional</sup> <a name="StoresDataInput" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesDataInput"></a>

```go
func StoresDataInput() *string
```

- *Type:* *string

---

##### `BusinessImpact`<sup>Required</sup> <a name="BusinessImpact" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.businessImpact"></a>

```go
func BusinessImpact() *string
```

- *Type:* *string

---

##### `HasAuthentication`<sup>Required</sup> <a name="HasAuthentication" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasAuthentication"></a>

```go
func HasAuthentication() *string
```

- *Type:* *string

---

##### `HasExposedApi`<sup>Required</sup> <a name="HasExposedApi" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.hasExposedApi"></a>

```go
func HasExposedApi() *string
```

- *Type:* *string

---

##### `IsActivelyDeveloped`<sup>Required</sup> <a name="IsActivelyDeveloped" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isActivelyDeveloped"></a>

```go
func IsActivelyDeveloped() *string
```

- *Type:* *string

---

##### `IsCustomerFacing`<sup>Required</sup> <a name="IsCustomerFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isCustomerFacing"></a>

```go
func IsCustomerFacing() *string
```

- *Type:* *string

---

##### `IsInternetFacing`<sup>Required</sup> <a name="IsInternetFacing" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isInternetFacing"></a>

```go
func IsInternetFacing() *string
```

- *Type:* *string

---

##### `IsRegulated`<sup>Required</sup> <a name="IsRegulated" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.isRegulated"></a>

```go
func IsRegulated() *string
```

- *Type:* *string

---

##### `RegulatoryStandards`<sup>Required</sup> <a name="RegulatoryStandards" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.regulatoryStandards"></a>

```go
func RegulatoryStandards() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataTypes`<sup>Required</sup> <a name="SensitiveDataTypes" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.sensitiveDataTypes"></a>

```go
func SensitiveDataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `StoresData`<sup>Required</sup> <a name="StoresData" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.storesData"></a>

```go
func StoresData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.project.ProjectRiskProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectRiskProfile
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.project.ProjectRiskProfile">ProjectRiskProfile</a>

---



