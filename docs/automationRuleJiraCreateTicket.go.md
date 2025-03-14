# `automationRuleJiraCreateTicket` Submodule <a name="`automationRuleJiraCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraCreateTicket <a name="AutomationRuleJiraCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

automationrulejiracreateticket.NewAutomationRuleJiraCreateTicket(scope Construct, id *string, config AutomationRuleJiraCreateTicketConfig) AutomationRuleJiraCreateTicket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField">ResetJiraAlternativeDescriptionField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee">ResetJiraAssignee</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv">ResetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents">ResetJiraComponents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields">ResetJiraCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription">ResetJiraDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion">ResetJiraFixVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType">ResetJiraIssueType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels">ResetJiraLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority">ResetJiraPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject">ResetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary">ResetJiraSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJiraAlternativeDescriptionField` <a name="ResetJiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField"></a>

```go
func ResetJiraAlternativeDescriptionField()
```

##### `ResetJiraAssignee` <a name="ResetJiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee"></a>

```go
func ResetJiraAssignee()
```

##### `ResetJiraAttachEvidenceCsv` <a name="ResetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv"></a>

```go
func ResetJiraAttachEvidenceCsv()
```

##### `ResetJiraComponents` <a name="ResetJiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents"></a>

```go
func ResetJiraComponents()
```

##### `ResetJiraCustomFields` <a name="ResetJiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields"></a>

```go
func ResetJiraCustomFields()
```

##### `ResetJiraDescription` <a name="ResetJiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription"></a>

```go
func ResetJiraDescription()
```

##### `ResetJiraFixVersion` <a name="ResetJiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion"></a>

```go
func ResetJiraFixVersion()
```

##### `ResetJiraIssueType` <a name="ResetJiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType"></a>

```go
func ResetJiraIssueType()
```

##### `ResetJiraLabels` <a name="ResetJiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels"></a>

```go
func ResetJiraLabels()
```

##### `ResetJiraPriority` <a name="ResetJiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority"></a>

```go
func ResetJiraPriority()
```

##### `ResetJiraProject` <a name="ResetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject"></a>

```go
func ResetJiraProject()
```

##### `ResetJiraSummary` <a name="ResetJiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary"></a>

```go
func ResetJiraSummary()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRuleJiraCreateTicket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

automationrulejiracreateticket.AutomationRuleJiraCreateTicket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

automationrulejiracreateticket.AutomationRuleJiraCreateTicket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

automationrulejiracreateticket.AutomationRuleJiraCreateTicket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

automationrulejiracreateticket.AutomationRuleJiraCreateTicket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationRuleJiraCreateTicket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRuleJiraCreateTicket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRuleJiraCreateTicket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRuleJiraCreateTicket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput">FiltersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput">JiraAlternativeDescriptionFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput">JiraAssigneeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput">JiraAttachEvidenceCsvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput">JiraComponentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput">JiraCustomFieldsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput">JiraDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput">JiraFixVersionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput">JiraIssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput">JiraLabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput">JiraPriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput">JiraProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput">JiraSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput">TriggerSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters">Filters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField">JiraAlternativeDescriptionField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee">JiraAssignee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents">JiraComponents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields">JiraCustomFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription">JiraDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion">JiraFixVersion</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType">JiraIssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels">JiraLabels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority">JiraPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject">JiraProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary">JiraSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput"></a>

```go
func FiltersInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `JiraAlternativeDescriptionFieldInput`<sup>Optional</sup> <a name="JiraAlternativeDescriptionFieldInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput"></a>

```go
func JiraAlternativeDescriptionFieldInput() *string
```

- *Type:* *string

---

##### `JiraAssigneeInput`<sup>Optional</sup> <a name="JiraAssigneeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput"></a>

```go
func JiraAssigneeInput() *string
```

- *Type:* *string

---

##### `JiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="JiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput"></a>

```go
func JiraAttachEvidenceCsvInput() interface{}
```

- *Type:* interface{}

---

##### `JiraComponentsInput`<sup>Optional</sup> <a name="JiraComponentsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput"></a>

```go
func JiraComponentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JiraCustomFieldsInput`<sup>Optional</sup> <a name="JiraCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput"></a>

```go
func JiraCustomFieldsInput() *string
```

- *Type:* *string

---

##### `JiraDescriptionInput`<sup>Optional</sup> <a name="JiraDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput"></a>

```go
func JiraDescriptionInput() *string
```

- *Type:* *string

---

##### `JiraFixVersionInput`<sup>Optional</sup> <a name="JiraFixVersionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput"></a>

```go
func JiraFixVersionInput() *[]*string
```

- *Type:* *[]*string

---

##### `JiraIssueTypeInput`<sup>Optional</sup> <a name="JiraIssueTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput"></a>

```go
func JiraIssueTypeInput() *string
```

- *Type:* *string

---

##### `JiraLabelsInput`<sup>Optional</sup> <a name="JiraLabelsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput"></a>

```go
func JiraLabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JiraPriorityInput`<sup>Optional</sup> <a name="JiraPriorityInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput"></a>

```go
func JiraPriorityInput() *string
```

- *Type:* *string

---

##### `JiraProjectInput`<sup>Optional</sup> <a name="JiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput"></a>

```go
func JiraProjectInput() *string
```

- *Type:* *string

---

##### `JiraSummaryInput`<sup>Optional</sup> <a name="JiraSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput"></a>

```go
func JiraSummaryInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TriggerSourceInput`<sup>Optional</sup> <a name="TriggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput"></a>

```go
func TriggerSourceInput() *string
```

- *Type:* *string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters"></a>

```go
func Filters() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `JiraAlternativeDescriptionField`<sup>Required</sup> <a name="JiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField"></a>

```go
func JiraAlternativeDescriptionField() *string
```

- *Type:* *string

---

##### `JiraAssignee`<sup>Required</sup> <a name="JiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee"></a>

```go
func JiraAssignee() *string
```

- *Type:* *string

---

##### `JiraAttachEvidenceCsv`<sup>Required</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv"></a>

```go
func JiraAttachEvidenceCsv() interface{}
```

- *Type:* interface{}

---

##### `JiraComponents`<sup>Required</sup> <a name="JiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents"></a>

```go
func JiraComponents() *[]*string
```

- *Type:* *[]*string

---

##### `JiraCustomFields`<sup>Required</sup> <a name="JiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields"></a>

```go
func JiraCustomFields() *string
```

- *Type:* *string

---

##### `JiraDescription`<sup>Required</sup> <a name="JiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription"></a>

```go
func JiraDescription() *string
```

- *Type:* *string

---

##### `JiraFixVersion`<sup>Required</sup> <a name="JiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion"></a>

```go
func JiraFixVersion() *[]*string
```

- *Type:* *[]*string

---

##### `JiraIssueType`<sup>Required</sup> <a name="JiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType"></a>

```go
func JiraIssueType() *string
```

- *Type:* *string

---

##### `JiraLabels`<sup>Required</sup> <a name="JiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels"></a>

```go
func JiraLabels() *[]*string
```

- *Type:* *[]*string

---

##### `JiraPriority`<sup>Required</sup> <a name="JiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority"></a>

```go
func JiraPriority() *string
```

- *Type:* *string

---

##### `JiraProject`<sup>Required</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject"></a>

```go
func JiraProject() *string
```

- *Type:* *string

---

##### `JiraSummary`<sup>Required</sup> <a name="JiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary"></a>

```go
func JiraSummary() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType"></a>

```go
func TriggerType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraCreateTicketConfig <a name="AutomationRuleJiraCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/automationrulejiracreateticket"

&automationrulejiracreateticket.AutomationRuleJiraCreateTicketConfig {
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
	JiraAlternativeDescriptionField: *string,
	JiraAssignee: *string,
	JiraAttachEvidenceCsv: interface{},
	JiraComponents: *[]*string,
	JiraCustomFields: *string,
	JiraDescription: *string,
	JiraFixVersion: *[]*string,
	JiraIssueType: *string,
	JiraLabels: *[]*string,
	JiraPriority: *string,
	JiraProject: *string,
	JiraSummary: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters">Filters</a></code> | <code>*string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name">Name</a></code> | <code>*string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType">TriggerType</a></code> | <code>*[]*string</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description">Description</a></code> | <code>*string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enabled?     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField">JiraAlternativeDescriptionField</a></code> | <code>*string</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee">JiraAssignee</a></code> | <code>*string</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv">JiraAttachEvidenceCsv</a></code> | <code>interface{}</code> | Upload issue evidence CSV as attachment?     - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents">JiraComponents</a></code> | <code>*[]*string</code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields">JiraCustomFields</a></code> | <code>*string</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription">JiraDescription</a></code> | <code>*string</code> | Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion">JiraFixVersion</a></code> | <code>*[]*string</code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType">JiraIssueType</a></code> | <code>*string</code> | Issue type     - Defaults to `Vulnerability`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels">JiraLabels</a></code> | <code>*[]*string</code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority">JiraPriority</a></code> | <code>*string</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject">JiraProject</a></code> | <code>*string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary">JiraSummary</a></code> | <code>*string</code> | Issue summary     - Defaults to `Wiz Issue: {{control.name}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Wiz internal ID for a project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters"></a>

```go
Filters *string
```

- *Type:* *string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType"></a>

```go
TriggerType *[]*string
```

- *Type:* *[]*string

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.
- Allowed values:
- CREATED
- UPDATED
- RESOLVED
- REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enabled?     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `JiraAlternativeDescriptionField`<sup>Optional</sup> <a name="JiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField"></a>

```go
JiraAlternativeDescriptionField *string
```

- *Type:* *string

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `JiraAssignee`<sup>Optional</sup> <a name="JiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee"></a>

```go
JiraAssignee *string
```

- *Type:* *string

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `JiraAttachEvidenceCsv`<sup>Optional</sup> <a name="JiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv"></a>

```go
JiraAttachEvidenceCsv interface{}
```

- *Type:* interface{}

Upload issue evidence CSV as attachment?     - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `JiraComponents`<sup>Optional</sup> <a name="JiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents"></a>

```go
JiraComponents *[]*string
```

- *Type:* *[]*string

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `JiraCustomFields`<sup>Optional</sup> <a name="JiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields"></a>

```go
JiraCustomFields *string
```

- *Type:* *string

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `JiraDescription`<sup>Optional</sup> <a name="JiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription"></a>

```go
JiraDescription *string
```

- *Type:* *string

Issue description     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `JiraFixVersion`<sup>Optional</sup> <a name="JiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion"></a>

```go
JiraFixVersion *[]*string
```

- *Type:* *[]*string

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `JiraIssueType`<sup>Optional</sup> <a name="JiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType"></a>

```go
JiraIssueType *string
```

- *Type:* *string

Issue type     - Defaults to `Vulnerability`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `JiraLabels`<sup>Optional</sup> <a name="JiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels"></a>

```go
JiraLabels *[]*string
```

- *Type:* *[]*string

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `JiraPriority`<sup>Optional</sup> <a name="JiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority"></a>

```go
JiraPriority *string
```

- *Type:* *string

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `JiraProject`<sup>Optional</sup> <a name="JiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject"></a>

```go
JiraProject *string
```

- *Type:* *string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `JiraSummary`<sup>Optional</sup> <a name="JiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary"></a>

```go
JiraSummary *string
```

- *Type:* *string

Issue summary     - Defaults to `Wiz Issue: {{control.name}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---



