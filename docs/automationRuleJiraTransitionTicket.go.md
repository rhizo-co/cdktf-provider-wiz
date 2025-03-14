# `automationRuleJiraTransitionTicket` Submodule <a name="`automationRuleJiraTransitionTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraTransitionTicket <a name="AutomationRuleJiraTransitionTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

automationrulejiratransitionticket.NewAutomationRuleJiraTransitionTicket(scope Construct, id *string, config AutomationRuleJiraTransitionTicketConfig) AutomationRuleJiraTransitionTicket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields">ResetJiraAdvancedFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv">ResetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment">ResetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition">ResetJiraCommentOnTransition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject">ResetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId">ResetJiraTransitionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJiraAdvancedFields` <a name="ResetJiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields"></a>

```go
func ResetJiraAdvancedFields()
```

##### `ResetJiraAttachEvidenceCsv` <a name="ResetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv"></a>

```go
func ResetJiraAttachEvidenceCsv()
```

##### `ResetJiraComment` <a name="ResetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment"></a>

```go
func ResetJiraComment()
```

##### `ResetJiraCommentOnTransition` <a name="ResetJiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition"></a>

```go
func ResetJiraCommentOnTransition()
```

##### `ResetJiraProject` <a name="ResetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject"></a>

```go
func ResetJiraProject()
```

##### `ResetJiraTransitionId` <a name="ResetJiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId"></a>

```go
func ResetJiraTransitionId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

automationrulejiratransitionticket.AutomationRuleJiraTransitionTicket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

automationrulejiratransitionticket.AutomationRuleJiraTransitionTicket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

automationrulejiratransitionticket.AutomationRuleJiraTransitionTicket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

automationrulejiratransitionticket.AutomationRuleJiraTransitionTicket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRuleJiraTransitionTicket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRuleJiraTransitionTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraTransitionTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput">FiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput">JiraAdvancedFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput">JiraAttachEvidenceCsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput">JiraCommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput">JiraCommentOnTransitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput">JiraProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput">JiraTransitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters">Filters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields">JiraAdvancedFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment">JiraComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition">JiraCommentOnTransition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject">JiraProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId">JiraTransitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput"></a>

```go
func FiltersInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `JiraAdvancedFieldsInput`<sup>Optional</sup> <a name="JiraAdvancedFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput"></a>

```go
func JiraAdvancedFieldsInput() *string
```

- *Type:* *string

---

##### `JiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="JiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput"></a>

```go
func JiraAttachEvidenceCsvInput() interface{}
```

- *Type:* interface{}

---

##### `JiraCommentInput`<sup>Optional</sup> <a name="JiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput"></a>

```go
func JiraCommentInput() *string
```

- *Type:* *string

---

##### `JiraCommentOnTransitionInput`<sup>Optional</sup> <a name="JiraCommentOnTransitionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput"></a>

```go
func JiraCommentOnTransitionInput() interface{}
```

- *Type:* interface{}

---

##### `JiraProjectInput`<sup>Optional</sup> <a name="JiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput"></a>

```go
func JiraProjectInput() *string
```

- *Type:* *string

---

##### `JiraTransitionIdInput`<sup>Optional</sup> <a name="JiraTransitionIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput"></a>

```go
func JiraTransitionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput"></a>

```go
func TriggerSourceInput() *string
```

- *Type:* *string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters"></a>

```go
func Filters() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `JiraAdvancedFields`<sup>Required</sup> <a name="JiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields"></a>

```go
func JiraAdvancedFields() *string
```

- *Type:* *string

---

##### `JiraAttachEvidenceCsv`<sup>Required</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv"></a>

```go
func JiraAttachEvidenceCsv() interface{}
```

- *Type:* interface{}

---

##### `JiraComment`<sup>Required</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment"></a>

```go
func JiraComment() *string
```

- *Type:* *string

---

##### `JiraCommentOnTransition`<sup>Required</sup> <a name="JiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition"></a>

```go
func JiraCommentOnTransition() interface{}
```

- *Type:* interface{}

---

##### `JiraProject`<sup>Required</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject"></a>

```go
func JiraProject() *string
```

- *Type:* *string

---

##### `JiraTransitionId`<sup>Required</sup> <a name="JiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId"></a>

```go
func JiraTransitionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType"></a>

```go
func TriggerType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraTransitionTicketConfig <a name="AutomationRuleJiraTransitionTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiratransitionticket"

&automationrulejiratransitionticket.AutomationRuleJiraTransitionTicketConfig {
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
	JiraAdvancedFields: *string,
	JiraAttachEvidenceCsv: interface{},
	JiraComment: *string,
	JiraCommentOnTransition: interface{},
	JiraProject: *string,
	JiraTransitionId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters">Filters</a></code> | <code>*string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name">Name</a></code> | <code>*string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description">Description</a></code> | <code>*string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields">JiraAdvancedFields</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>interface{}</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment">JiraComment</a></code> | <code>*string</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition">JiraCommentOnTransition</a></code> | <code>interface{}</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject">JiraProject</a></code> | <code>*string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId">JiraTransitionId</a></code> | <code>*string</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters"></a>

```go
Filters *string
```

- *Type:* *string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType"></a>

```go
TriggerType *[]*string
```

- *Type:* *[]*string

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `JiraAdvancedFields`<sup>Optional</sup> <a name="JiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields"></a>

```go
JiraAdvancedFields *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `JiraAttachEvidenceCsv`<sup>Optional</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv"></a>

```go
JiraAttachEvidenceCsv interface{}
```

- *Type:* interface{}

Upload issues report as attachment Only relevant in CONTROL-triggered Actions.     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `JiraComment`<sup>Optional</sup> <a name="JiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment"></a>

```go
JiraComment *string
```

- *Type:* *string

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `JiraCommentOnTransition`<sup>Optional</sup> <a name="JiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition"></a>

```go
JiraCommentOnTransition interface{}
```

- *Type:* interface{}

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `JiraProject`<sup>Optional</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject"></a>

```go
JiraProject *string
```

- *Type:* *string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `JiraTransitionId`<sup>Optional</sup> <a name="JiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId"></a>

```go
JiraTransitionId *string
```

- *Type:* *string

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---



