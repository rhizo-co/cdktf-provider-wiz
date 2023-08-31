# `wiz_service_account`

Refer to the Terraform Registory for docs: [`wiz_service_account`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account).

# `serviceAccount` Submodule <a name="`serviceAccount` Submodule" id="rhizo-co-terraform-provider-wiz.serviceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccount <a name="ServiceAccount" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account wiz_service_account}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/serviceaccount"

serviceaccount.NewServiceAccount(scope Construct, id *string, config ServiceAccountConfig) ServiceAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig">ServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig">ServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects">ResetAssignedProjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated">ResetRecreateIfRotated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssignedProjects` <a name="ResetAssignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects"></a>

```go
func ResetAssignedProjects()
```

##### `ResetRecreateIfRotated` <a name="ResetRecreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated"></a>

```go
func ResetRecreateIfRotated()
```

##### `ResetScopes` <a name="ResetScopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/serviceaccount"

serviceaccount.ServiceAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/serviceaccount"

serviceaccount.ServiceAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/serviceaccount"

serviceaccount.ServiceAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt">LastRotatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput">AssignedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput">RecreateIfRotatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects">AssignedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated">RecreateIfRotated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastRotatedAt`<sup>Required</sup> <a name="LastRotatedAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt"></a>

```go
func LastRotatedAt() *string
```

- *Type:* *string

---

##### `AssignedProjectsInput`<sup>Optional</sup> <a name="AssignedProjectsInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput"></a>

```go
func AssignedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecreateIfRotatedInput`<sup>Optional</sup> <a name="RecreateIfRotatedInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput"></a>

```go
func RecreateIfRotatedInput() interface{}
```

- *Type:* interface{}

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AssignedProjects`<sup>Required</sup> <a name="AssignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects"></a>

```go
func AssignedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecreateIfRotated`<sup>Required</sup> <a name="RecreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated"></a>

```go
func RecreateIfRotated() interface{}
```

- *Type:* interface{}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountConfig <a name="ServiceAccountConfig" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/serviceaccount"

&serviceaccount.ServiceAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AssignedProjects: *[]*string,
	RecreateIfRotated: interface{},
	Scopes: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects">AssignedProjects</a></code> | <code>*[]*string</code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated">RecreateIfRotated</a></code> | <code>interface{}</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type">Type</a></code> | <code>*string</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `AssignedProjects`<sup>Optional</sup> <a name="AssignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects"></a>

```go
AssignedProjects *[]*string
```

- *Type:* *[]*string

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `RecreateIfRotated`<sup>Optional</sup> <a name="RecreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated"></a>

```go
RecreateIfRotated interface{}
```

- *Type:* interface{}

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Scopes, required with THIRD_PARTY (GraphQL API type).

* Allowed values:

  * admin:all
  * admin:audit
  * admin:digital_trust_settings
  * admin:identity_providers
  * admin:projects
  * admin:reports
  * admin:security_settings
  * admin:users
  * create:action_templates
  * create:admission_controllers
  * create:all
  * create:automation_actions
  * create:automation_rules
  * create:cloud_configuration
  * create:cloud_event_rules
  * create:connectors
  * create:controls
  * create:host_configuration
  * create:integrations
  * create:outposts
  * create:reports
  * create:run_action
  * create:run_control
  * create:saved_cloud_event_filters
  * create:saved_graph_queries
  * create:scan_policies
  * create:security_frameworks
  * create:security_scans
  * create:service_accounts
  * create:service_tickets
  * delete:action_templates
  * delete:all
  * delete:automation_actions
  * delete:automation_rules
  * delete:cloud_configuration
  * delete:cloud_event_rules
  * delete:connectors
  * delete:controls
  * delete:host_configuration
  * delete:integrations
  * delete:outposts
  * delete:reports
  * delete:saved_cloud_event_filters
  * delete:saved_graph_queries
  * delete:scan_policies
  * delete:security_frameworks
  * delete:security_scans
  * delete:service_accounts
  * read:action_templates
  * read:admission_controllers
  * read:all
  * read:automation_actions
  * read:automation_rules
  * read:benchmarks
  * read:cloud_accounts
  * read:cloud_configuration
  * read:cloud_event_rules
  * read:cloud_events
  * read:connectors
  * read:controls
  * read:digital_trust_settings
  * read:host_configuration
  * read:integrations
  * read:inventory
  * read:issue_settings
  * read:issues
  * read:kubernetes_clusters
  * read:licenses
  * read:outposts
  * read:projects
  * read:reports
  * read:resources
  * read:saved_cloud_event_filters
  * read:saved_graph_queries
  * read:scan_policies
  * read:scanner_settings
  * read:security_frameworks
  * read:security_scans
  * read:security_settings
  * read:service_accounts
  * read:system_activities
  * read:users
  * read:vulnerabilities
  * update:admission_controllers
  * update:all
  * update:automation_actions
  * update:automation_rules
  * update:cloud_configuration
  * update:cloud_event_rules
  * update:connectors
  * update:controls
  * update:host_configuration
  * update:integrations
  * update:inventory
  * update:issue_settings
  * update:issues
  * update:outposts
  * update:reports
  * update:resources
  * update:saved_cloud_event_filters
  * update:saved_graph_queries
  * update:scan_policies
  * update:scanner_settings
  * update:security_frameworks
  * update:security_scans
  * update:service_accounts
  * update:vulnerabilities
  * write:all
  * write:automation_actions
  * write:automation_rules
  * write:cloud_configuration
  * write:cloud_event_rules
  * write:connectors
  * write:controls
  * write:host_configuration
  * write:issue_settings
  * write:issues
  * write:outposts
  * write:reports
  * write:saved_cloud_event_filters
  * write:saved_graph_queries
  * write:scan_policies
  * write:scanner_settings
  * write:security_frameworks
  * write:security_scans
  * write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

* Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---



