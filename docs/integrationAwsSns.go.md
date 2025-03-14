# `integrationAwsSns` Submodule <a name="`integrationAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.integrationAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsSns <a name="IntegrationAwsSns" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns wiz_integration_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

integrationawssns.NewIntegrationAwsSns(scope Construct, id *string, config IntegrationAwsSnsConfig) IntegrationAwsSns
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId">ResetAwsSnsConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn">ResetAwsSnsCustomerRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn">ResetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsSnsConnectorId` <a name="ResetAwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId"></a>

```go
func ResetAwsSnsConnectorId()
```

##### `ResetAwsSnsCustomerRoleArn` <a name="ResetAwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn"></a>

```go
func ResetAwsSnsCustomerRoleArn()
```

##### `ResetAwsSnsTopicArn` <a name="ResetAwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn"></a>

```go
func ResetAwsSnsTopicArn()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope"></a>

```go
func ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

integrationawssns.IntegrationAwsSns_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

integrationawssns.IntegrationAwsSns_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

integrationawssns.IntegrationAwsSns_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

integrationawssns.IntegrationAwsSns_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationAwsSns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationAwsSns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationAwsSns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsSns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput">AwsSnsAccessMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput">AwsSnsConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput">AwsSnsCustomerRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput">AwsSnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod">AwsSnsAccessMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId">AwsSnsConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn">AwsSnsCustomerRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AwsSnsAccessMethodInput`<sup>Optional</sup> <a name="AwsSnsAccessMethodInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput"></a>

```go
func AwsSnsAccessMethodInput() *string
```

- *Type:* *string

---

##### `AwsSnsConnectorIdInput`<sup>Optional</sup> <a name="AwsSnsConnectorIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput"></a>

```go
func AwsSnsConnectorIdInput() *string
```

- *Type:* *string

---

##### `AwsSnsCustomerRoleArnInput`<sup>Optional</sup> <a name="AwsSnsCustomerRoleArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput"></a>

```go
func AwsSnsCustomerRoleArnInput() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArnInput`<sup>Optional</sup> <a name="AwsSnsTopicArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput"></a>

```go
func AwsSnsTopicArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `AwsSnsAccessMethod`<sup>Required</sup> <a name="AwsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod"></a>

```go
func AwsSnsAccessMethod() *string
```

- *Type:* *string

---

##### `AwsSnsConnectorId`<sup>Required</sup> <a name="AwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId"></a>

```go
func AwsSnsConnectorId() *string
```

- *Type:* *string

---

##### `AwsSnsCustomerRoleArn`<sup>Required</sup> <a name="AwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn"></a>

```go
func AwsSnsCustomerRoleArn() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn"></a>

```go
func AwsSnsTopicArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsSnsConfig <a name="IntegrationAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationawssns"

&integrationawssns.IntegrationAwsSnsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwsSnsAccessMethod: *string,
	Name: *string,
	AwsSnsConnectorId: *string,
	AwsSnsCustomerRoleArn: *string,
	AwsSnsTopicArn: *string,
	ProjectId: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod">AwsSnsAccessMethod</a></code> | <code>*string</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId">AwsSnsConnectorId</a></code> | <code>*string</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn">AwsSnsCustomerRoleArn</a></code> | <code>*string</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope">Scope</a></code> | <code>*string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsSnsAccessMethod`<sup>Required</sup> <a name="AwsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod"></a>

```go
AwsSnsAccessMethod *string
```

- *Type:* *string

The access method this integration should use.

* Allowed values:
  - ASSUME_CONNECTOR_ROLE
  - ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `AwsSnsConnectorId`<sup>Optional</sup> <a name="AwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId"></a>

```go
AwsSnsConnectorId *string
```

- *Type:* *string

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `AwsSnsCustomerRoleArn`<sup>Optional</sup> <a name="AwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn"></a>

```go
AwsSnsCustomerRoleArn *string
```

- *Type:* *string

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `AwsSnsTopicArn`<sup>Optional</sup> <a name="AwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn"></a>

```go
AwsSnsTopicArn *string
```

- *Type:* *string

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---



