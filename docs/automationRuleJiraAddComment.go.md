# `automationRuleJiraAddComment` Submodule <a name="`automationRuleJiraAddComment` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraAddComment <a name="AutomationRuleJiraAddComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment wiz_automation_rule_jira_add_comment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

automationrulejiraaddcomment.NewAutomationRuleJiraAddComment(scope Construct, id *string, config AutomationRuleJiraAddCommentConfig) AutomationRuleJiraAddComment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig">AutomationRuleJiraAddCommentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig">AutomationRuleJiraAddCommentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport">ResetJiraAddIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment">ResetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey">ResetJiraProjectKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJiraAddIssuesReport` <a name="ResetJiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraAddIssuesReport"></a>

```go
func ResetJiraAddIssuesReport()
```

##### `ResetJiraComment` <a name="ResetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraComment"></a>

```go
func ResetJiraComment()
```

##### `ResetJiraProjectKey` <a name="ResetJiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetJiraProjectKey"></a>

```go
func ResetJiraProjectKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleJiraAddComment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

automationrulejiraaddcomment.AutomationRuleJiraAddComment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

automationrulejiraaddcomment.AutomationRuleJiraAddComment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

automationrulejiraaddcomment.AutomationRuleJiraAddComment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

automationrulejiraaddcomment.AutomationRuleJiraAddComment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationRuleJiraAddComment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRuleJiraAddComment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRuleJiraAddComment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraAddComment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput">FiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput">JiraAddIssuesReportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput">JiraCommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput">JiraProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters">Filters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport">JiraAddIssuesReport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment">JiraComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey">JiraProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filtersInput"></a>

```go
func FiltersInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `JiraAddIssuesReportInput`<sup>Optional</sup> <a name="JiraAddIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReportInput"></a>

```go
func JiraAddIssuesReportInput() interface{}
```

- *Type:* interface{}

---

##### `JiraCommentInput`<sup>Optional</sup> <a name="JiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraCommentInput"></a>

```go
func JiraCommentInput() *string
```

- *Type:* *string

---

##### `JiraProjectKeyInput`<sup>Optional</sup> <a name="JiraProjectKeyInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKeyInput"></a>

```go
func JiraProjectKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSourceInput"></a>

```go
func TriggerSourceInput() *string
```

- *Type:* *string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.filters"></a>

```go
func Filters() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `JiraAddIssuesReport`<sup>Required</sup> <a name="JiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraAddIssuesReport"></a>

```go
func JiraAddIssuesReport() interface{}
```

- *Type:* interface{}

---

##### `JiraComment`<sup>Required</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraComment"></a>

```go
func JiraComment() *string
```

- *Type:* *string

---

##### `JiraProjectKey`<sup>Required</sup> <a name="JiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.jiraProjectKey"></a>

```go
func JiraProjectKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.triggerType"></a>

```go
func TriggerType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddComment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraAddCommentConfig <a name="AutomationRuleJiraAddCommentConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiraaddcomment"

&automationrulejiraaddcomment.AutomationRuleJiraAddCommentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filters: *string,
	IntegrationId: *string,
	Name: *string,
	TriggerSource: *string,
	TriggerType: *[]*string,
	Description: *string,
	Enabled: interface{},
	JiraAddIssuesReport: interface{},
	JiraComment: *string,
	JiraProjectKey: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters">Filters</a></code> | <code>*string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport">JiraAddIssuesReport</a></code> | <code>interface{}</code> | Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment">JiraComment</a></code> | <code>*string</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey">JiraProjectKey</a></code> | <code>*string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.filters"></a>

```go
Filters *string
```

- *Type:* *string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#filters AutomationRuleJiraAddComment#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#integration_id AutomationRuleJiraAddComment#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#name AutomationRuleJiraAddComment#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerSource"></a>

```go
TriggerSource *string
```

- *Type:* *string

Trigger source.

* Allowed values:
  - ISSUES
  - CLOUD_EVENTS
  - CONTROL
  - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#trigger_source AutomationRuleJiraAddComment#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.triggerType"></a>

```go
TriggerType *[]*string
```

- *Type:* *[]*string

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_add_comment.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#trigger_type AutomationRuleJiraAddComment#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#description AutomationRuleJiraAddComment#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#enabled AutomationRuleJiraAddComment#enabled}

---

##### `JiraAddIssuesReport`<sup>Optional</sup> <a name="JiraAddIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraAddIssuesReport"></a>

```go
JiraAddIssuesReport interface{}
```

- *Type:* interface{}

Whether or not to attach a report on all open issues as an attachment to ticket, only relevant in CONTROL triggered actions     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#jira_add_issues_report AutomationRuleJiraAddComment#jira_add_issues_report}

---

##### `JiraComment`<sup>Optional</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraComment"></a>

```go
JiraComment *string
```

- *Type:* *string

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#jira_comment AutomationRuleJiraAddComment#jira_comment}

---

##### `JiraProjectKey`<sup>Optional</sup> <a name="JiraProjectKey" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.jiraProjectKey"></a>

```go
JiraProjectKey *string
```

- *Type:* *string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#jira_project_key AutomationRuleJiraAddComment#jira_project_key}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraAddComment.AutomationRuleJiraAddCommentConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_add_comment#project_id AutomationRuleJiraAddComment#project_id}

---



