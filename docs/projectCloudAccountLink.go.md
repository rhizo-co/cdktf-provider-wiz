# `projectCloudAccountLink` Submodule <a name="`projectCloudAccountLink` Submodule" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCloudAccountLinkA <a name="ProjectCloudAccountLinkA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link wiz_project_cloud_account_link}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.NewProjectCloudAccountLinkA(scope Construct, id *string, config ProjectCloudAccountLinkAConfig) ProjectCloudAccountLinkA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig">ProjectCloudAccountLinkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId">ResetCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId">ResetExternalCloudAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups">ResetResourceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared">ResetShared</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceTags` <a name="PutResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags"></a>

```go
func PutResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.putResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudAccountId` <a name="ResetCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetCloudAccountId"></a>

```go
func ResetCloudAccountId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetExternalCloudAccountId` <a name="ResetExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetExternalCloudAccountId"></a>

```go
func ResetExternalCloudAccountId()
```

##### `ResetResourceGroups` <a name="ResetResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceGroups"></a>

```go
func ResetResourceGroups()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetResourceTags"></a>

```go
func ResetResourceTags()
```

##### `ResetShared` <a name="ResetShared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.resetShared"></a>

```go
func ResetShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.ProjectCloudAccountLinkA_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.ProjectCloudAccountLinkA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.ProjectCloudAccountLinkA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.ProjectCloudAccountLinkA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectCloudAccountLinkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectCloudAccountLinkA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectCloudAccountLinkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCloudAccountLinkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags">ResourceTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput">CloudAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput">ExternalCloudAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput">ResourceGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput">SharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId">CloudAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId">ExternalCloudAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared">Shared</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTags"></a>

```go
func ResourceTags() ProjectCloudAccountLinkResourceTagsAList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList">ProjectCloudAccountLinkResourceTagsAList</a>

---

##### `CloudAccountIdInput`<sup>Optional</sup> <a name="CloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountIdInput"></a>

```go
func CloudAccountIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ExternalCloudAccountIdInput`<sup>Optional</sup> <a name="ExternalCloudAccountIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountIdInput"></a>

```go
func ExternalCloudAccountIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupsInput`<sup>Optional</sup> <a name="ResourceGroupsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroupsInput"></a>

```go
func ResourceGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `SharedInput`<sup>Optional</sup> <a name="SharedInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.sharedInput"></a>

```go
func SharedInput() interface{}
```

- *Type:* interface{}

---

##### `CloudAccountId`<sup>Required</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.cloudAccountId"></a>

```go
func CloudAccountId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `ExternalCloudAccountId`<sup>Required</sup> <a name="ExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.externalCloudAccountId"></a>

```go
func ExternalCloudAccountId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.resourceGroups"></a>

```go
func ResourceGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Shared`<sup>Required</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.shared"></a>

```go
func Shared() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCloudAccountLinkAConfig <a name="ProjectCloudAccountLinkAConfig" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

&projectcloudaccountlink.ProjectCloudAccountLinkAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	CloudAccountId: *string,
	Environment: *string,
	ExternalCloudAccountId: *string,
	ResourceGroups: *[]*string,
	ResourceTags: interface{},
	Shared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The Wiz internal identifier of the Wiz project to link the cloud account to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId">CloudAccountId</a></code> | <code>*string</code> | The Wiz internal identifier for the Cloud Account Subscription. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment">Environment</a></code> | <code>*string</code> | The environment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId">ExternalCloudAccountId</a></code> | <code>*string</code> | The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups">ResourceGroups</a></code> | <code>*[]*string</code> | Please provide a list of resource group identifiers for filtering by resource groups. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags">ResourceTags</a></code> | <code>interface{}</code> | resource_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared">Shared</a></code> | <code>interface{}</code> | Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The Wiz internal identifier of the Wiz project to link the cloud account to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#project_id ProjectCloudAccountLinkA#project_id}

---

##### `CloudAccountId`<sup>Optional</sup> <a name="CloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.cloudAccountId"></a>

```go
CloudAccountId *string
```

- *Type:* *string

The Wiz internal identifier for the Cloud Account Subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#cloud_account_id ProjectCloudAccountLinkA#cloud_account_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

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

##### `ExternalCloudAccountId`<sup>Optional</sup> <a name="ExternalCloudAccountId" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.externalCloudAccountId"></a>

```go
ExternalCloudAccountId *string
```

- *Type:* *string

The external identifier for the Cloud Account, e.g. an azure subscription id or an aws account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#external_cloud_account_id ProjectCloudAccountLinkA#external_cloud_account_id}

---

##### `ResourceGroups`<sup>Optional</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceGroups"></a>

```go
ResourceGroups *[]*string
```

- *Type:* *[]*string

Please provide a list of resource group identifiers for filtering by resource groups.

`shared` must be true to define resource_groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_groups ProjectCloudAccountLinkA#resource_groups}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.resourceTags"></a>

```go
ResourceTags interface{}
```

- *Type:* interface{}

resource_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#resource_tags ProjectCloudAccountLinkA#resource_tags}

---

##### `Shared`<sup>Optional</sup> <a name="Shared" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkAConfig.property.shared"></a>

```go
Shared interface{}
```

- *Type:* interface{}

Subscriptions that host a few projects can be marked as ‘shared subscriptions’ and resources can be filtered by tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#shared ProjectCloudAccountLinkA#shared}

---

### ProjectCloudAccountLinkResourceTagsA <a name="ProjectCloudAccountLinkResourceTagsA" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

&projectcloudaccountlink.ProjectCloudAccountLinkResourceTagsA {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#key ProjectCloudAccountLinkA#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsA.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/project_cloud_account_link#value ProjectCloudAccountLinkA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectCloudAccountLinkResourceTagsAList <a name="ProjectCloudAccountLinkResourceTagsAList" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.NewProjectCloudAccountLinkResourceTagsAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectCloudAccountLinkResourceTagsAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get"></a>

```go
func Get(index *f64) ProjectCloudAccountLinkResourceTagsAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectCloudAccountLinkResourceTagsAOutputReference <a name="ProjectCloudAccountLinkResourceTagsAOutputReference" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/projectcloudaccountlink"

projectcloudaccountlink.NewProjectCloudAccountLinkResourceTagsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectCloudAccountLinkResourceTagsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.projectCloudAccountLink.ProjectCloudAccountLinkResourceTagsAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



