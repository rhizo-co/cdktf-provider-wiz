# `integrationServicenow` Submodule <a name="`integrationServicenow` Submodule" id="rhizo-co-terraform-provider-wiz.integrationServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServicenow <a name="IntegrationServicenow" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow wiz_integration_servicenow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

integrationservicenow.NewIntegrationServicenow(scope Construct, id *string, config IntegrationServicenowConfig) IntegrationServicenow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig">IntegrationServicenowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig">IntegrationServicenowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId">ResetServicenowClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret">ResetServicenowClientSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetScope"></a>

```go
func ResetScope()
```

##### `ResetServicenowClientId` <a name="ResetServicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientId"></a>

```go
func ResetServicenowClientId()
```

##### `ResetServicenowClientSecret` <a name="ResetServicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.resetServicenowClientSecret"></a>

```go
func ResetServicenowClientSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

integrationservicenow.IntegrationServicenow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

integrationservicenow.IntegrationServicenow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

integrationservicenow.IntegrationServicenow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

integrationservicenow.IntegrationServicenow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationServicenow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationServicenow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput">ServicenowClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput">ServicenowClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput">ServicenowPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput">ServicenowUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput">ServicenowUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId">ServicenowClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret">ServicenowClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword">ServicenowPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl">ServicenowUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername">ServicenowUsername</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServicenowClientIdInput`<sup>Optional</sup> <a name="ServicenowClientIdInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientIdInput"></a>

```go
func ServicenowClientIdInput() *string
```

- *Type:* *string

---

##### `ServicenowClientSecretInput`<sup>Optional</sup> <a name="ServicenowClientSecretInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecretInput"></a>

```go
func ServicenowClientSecretInput() *string
```

- *Type:* *string

---

##### `ServicenowPasswordInput`<sup>Optional</sup> <a name="ServicenowPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPasswordInput"></a>

```go
func ServicenowPasswordInput() *string
```

- *Type:* *string

---

##### `ServicenowUrlInput`<sup>Optional</sup> <a name="ServicenowUrlInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrlInput"></a>

```go
func ServicenowUrlInput() *string
```

- *Type:* *string

---

##### `ServicenowUsernameInput`<sup>Optional</sup> <a name="ServicenowUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsernameInput"></a>

```go
func ServicenowUsernameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ServicenowClientId`<sup>Required</sup> <a name="ServicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientId"></a>

```go
func ServicenowClientId() *string
```

- *Type:* *string

---

##### `ServicenowClientSecret`<sup>Required</sup> <a name="ServicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowClientSecret"></a>

```go
func ServicenowClientSecret() *string
```

- *Type:* *string

---

##### `ServicenowPassword`<sup>Required</sup> <a name="ServicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowPassword"></a>

```go
func ServicenowPassword() *string
```

- *Type:* *string

---

##### `ServicenowUrl`<sup>Required</sup> <a name="ServicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUrl"></a>

```go
func ServicenowUrl() *string
```

- *Type:* *string

---

##### `ServicenowUsername`<sup>Required</sup> <a name="ServicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.servicenowUsername"></a>

```go
func ServicenowUsername() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServicenowConfig <a name="IntegrationServicenowConfig" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationservicenow"

&integrationservicenow.IntegrationServicenowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ServicenowPassword: *string,
	ServicenowUrl: *string,
	ServicenowUsername: *string,
	ProjectId: *string,
	Scope: *string,
	ServicenowClientId: *string,
	ServicenowClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name">Name</a></code> | <code>*string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword">ServicenowPassword</a></code> | <code>*string</code> | ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl">ServicenowUrl</a></code> | <code>*string</code> | ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername">ServicenowUsername</a></code> | <code>*string</code> | Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope">Scope</a></code> | <code>*string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId">ServicenowClientId</a></code> | <code>*string</code> | ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret">ServicenowClientSecret</a></code> | <code>*string</code> | ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#name IntegrationServicenow#name}

---

##### `ServicenowPassword`<sup>Required</sup> <a name="ServicenowPassword" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowPassword"></a>

```go
ServicenowPassword *string
```

- *Type:* *string

ServiceNow password. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_password IntegrationServicenow#servicenow_password}

---

##### `ServicenowUrl`<sup>Required</sup> <a name="ServicenowUrl" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUrl"></a>

```go
ServicenowUrl *string
```

- *Type:* *string

ServiceNow URL. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_url IntegrationServicenow#servicenow_url}

---

##### `ServicenowUsername`<sup>Required</sup> <a name="ServicenowUsername" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowUsername"></a>

```go
ServicenowUsername *string
```

- *Type:* *string

Email of a ServiceNow user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_username IntegrationServicenow#servicenow_username}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#project_id IntegrationServicenow#project_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.
- Allowed values:
- Selected Project
- All Resources
- All Resources, Restrict this Integration to global roles only

```
- Defaults to `All Resources, Restrict this Integration to global roles only`.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#scope IntegrationServicenow#scope}

---

##### `ServicenowClientId`<sup>Optional</sup> <a name="ServicenowClientId" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientId"></a>

```go
ServicenowClientId *string
```

- *Type:* *string

ServiceNow OAuth Client ID. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_id IntegrationServicenow#servicenow_client_id}

---

##### `ServicenowClientSecret`<sup>Optional</sup> <a name="ServicenowClientSecret" id="rhizo-co-terraform-provider-wiz.integrationServicenow.IntegrationServicenowConfig.property.servicenowClientSecret"></a>

```go
ServicenowClientSecret *string
```

- *Type:* *string

ServiceNow OAuth Client Secret. (default: none, environment variable: WIZ_INTEGRATION_SERVICENOW_CLIENT_SECRET).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_servicenow#servicenow_client_secret IntegrationServicenow#servicenow_client_secret}

---



