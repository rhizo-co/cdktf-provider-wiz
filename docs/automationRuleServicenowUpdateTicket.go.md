# `automationRuleServicenowUpdateTicket` Submodule <a name="`automationRuleServicenowUpdateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowUpdateTicket <a name="AutomationRuleServicenowUpdateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

automationruleservicenowupdateticket.NewAutomationRuleServicenowUpdateTicket(scope Construct, id *string, config AutomationRuleServicenowUpdateTicketConfig) AutomationRuleServicenowUpdateTicket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport">ResetServicenowAttachIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields">ResetServicenowFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName">ResetServicenowTableName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetServicenowAttachIssuesReport` <a name="ResetServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport"></a>

```go
func ResetServicenowAttachIssuesReport()
```

##### `ResetServicenowFields` <a name="ResetServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields"></a>

```go
func ResetServicenowFields()
```

##### `ResetServicenowTableName` <a name="ResetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName"></a>

```go
func ResetServicenowTableName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleServicenowUpdateTicket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

automationruleservicenowupdateticket.AutomationRuleServicenowUpdateTicket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

automationruleservicenowupdateticket.AutomationRuleServicenowUpdateTicket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

automationruleservicenowupdateticket.AutomationRuleServicenowUpdateTicket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

automationruleservicenowupdateticket.AutomationRuleServicenowUpdateTicket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationRuleServicenowUpdateTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRuleServicenowUpdateTicket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRuleServicenowUpdateTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleServicenowUpdateTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput">FiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput">ServicenowAttachIssuesReportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput">ServicenowFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput">ServicenowTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters">Filters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport">ServicenowAttachIssuesReport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields">ServicenowFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName">ServicenowTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput"></a>

```go
func FiltersInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ServicenowAttachIssuesReportInput`<sup>Optional</sup> <a name="ServicenowAttachIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput"></a>

```go
func ServicenowAttachIssuesReportInput() interface{}
```

- *Type:* interface{}

---

##### `ServicenowFieldsInput`<sup>Optional</sup> <a name="ServicenowFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput"></a>

```go
func ServicenowFieldsInput() *string
```

- *Type:* *string

---

##### `ServicenowTableNameInput`<sup>Optional</sup> <a name="ServicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput"></a>

```go
func ServicenowTableNameInput() *string
```

- *Type:* *string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput"></a>

```go
func TriggerSourceInput() *string
```

- *Type:* *string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters"></a>

```go
func Filters() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ServicenowAttachIssuesReport`<sup>Required</sup> <a name="ServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport"></a>

```go
func ServicenowAttachIssuesReport() interface{}
```

- *Type:* interface{}

---

##### `ServicenowFields`<sup>Required</sup> <a name="ServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields"></a>

```go
func ServicenowFields() *string
```

- *Type:* *string

---

##### `ServicenowTableName`<sup>Required</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName"></a>

```go
func ServicenowTableName() *string
```

- *Type:* *string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType"></a>

```go
func TriggerType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowUpdateTicketConfig <a name="AutomationRuleServicenowUpdateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationruleservicenowupdateticket"

&automationruleservicenowupdateticket.AutomationRuleServicenowUpdateTicketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Filters: *string,
	IntegrationId: *string,
	Name: *string,
	TriggerSource: *string,
	TriggerType: *[]*string,
	Enabled: interface{},
	ProjectId: *string,
	ServicenowAttachIssuesReport: interface{},
	ServicenowFields: *string,
	ServicenowTableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description">Description</a></code> | <code>*string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters">Filters</a></code> | <code>*string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name">Name</a></code> | <code>*string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport">ServicenowAttachIssuesReport</a></code> | <code>interface{}</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields">ServicenowFields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName">ServicenowTableName</a></code> | <code>*string</code> | Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters"></a>

```go
Filters *string
```

- *Type:* *string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType"></a>

```go
TriggerType *[]*string
```

- *Type:* *[]*string

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `ServicenowAttachIssuesReport`<sup>Optional</sup> <a name="ServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport"></a>

```go
ServicenowAttachIssuesReport interface{}
```

- *Type:* interface{}

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `ServicenowFields`<sup>Optional</sup> <a name="ServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields"></a>

```go
ServicenowFields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `ServicenowTableName`<sup>Optional</sup> <a name="ServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName"></a>

```go
ServicenowTableName *string
```

- *Type:* *string

Table name to which new tickets will be added to, e.g: 'incident'.     - Defaults to `incident`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---



