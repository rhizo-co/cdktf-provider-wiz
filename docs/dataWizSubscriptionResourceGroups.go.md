# `data_wiz_subscription_resource_groups`

Refer to the Terraform Registory for docs: [`data_wiz_subscription_resource_groups`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups).

# `dataWizSubscriptionResourceGroups` Submodule <a name="`dataWizSubscriptionResourceGroups` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizSubscriptionResourceGroups <a name="DataWizSubscriptionResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.NewDataWizSubscriptionResourceGroups(scope Construct, id *string, config DataWizSubscriptionResourceGroupsConfig) DataWizSubscriptionResourceGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig">DataWizSubscriptionResourceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType"></a>

```go
func ResetRelationshipType()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.DataWizSubscriptionResourceGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.DataWizSubscriptionResourceGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.DataWizSubscriptionResourceGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups">ResourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroups`<sup>Required</sup> <a name="ResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups"></a>

```go
func ResourceGroups() DataWizSubscriptionResourceGroupsResourceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a>

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput"></a>

```go
func RelationshipTypeInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType"></a>

```go
func RelationshipType() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizSubscriptionResourceGroupsConfig <a name="DataWizSubscriptionResourceGroupsConfig" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

&datawizsubscriptionresourcegroups.DataWizSubscriptionResourceGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	First: *f64,
	RelationshipType: *string,
	SubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first">First</a></code> | <code>*f64</code> | How many matches to return. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType">RelationshipType</a></code> | <code>*string</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | The Wiz subscription ID to search by. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first"></a>

```go
First *f64
```

- *Type:* *f64

How many matches to return. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType"></a>

```go
RelationshipType *string
```

- *Type:* *string

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:

  * ANY
  * ANY_OUTGOING
  * ACTING_AS
  * ADMINISTRATE
  * ALERTED_ON
  * ALLOWS
  * ALLOWS_ACCESS_TO
  * APPLIES_TO
  * ASSIGNED_TO
  * ATTACHED_TO
  * BEHIND
  * BOOTS
  * BUILT_FROM
  * CAUSES
  * COLLABORATES
  * CONNECTED_TO
  * CONTAINS
  * CONTAINS_DST_IP_RANGE
  * CONTAINS_DST_PORT_RANGE
  * CONTAINS_SRC_IP_RANGE
  * CONTAINS_SRC_PORT_RANGE
  * DENIES
  * DEPENDS_ON
  * DEPLOYED_TO
  * ENCRYPTS
  * ENCRYPTS_PARTITION
  * ENTITLES
  * EXCLUDES
  * EXPOSES
  * GOVERNS
  * HAS
  * HAS_BOUNDARY_POLICY
  * HAS_DATA_FINDING
  * HAS_DATA_INVENTORY
  * HAS_DATA_SCHEMA
  * HAS_DATA_STORE
  * HAS_ORGANIZATION_POLICY
  * HAS_PRINCIPAL_POLICY
  * HAS_RESOURCE_POLICY
  * HAS_SNAPSHOT
  * HAS_SOURCE
  * HAS_STANDARD_WEB_ACCESS_FROM
  * HAS_TECH
  * HOSTS
  * IGNORES
  * IMPLEMENTS
  * INCLUDES
  * INFECTS
  * INSIDE
  * INSTANCE_OF
  * INVOKES
  * LOGS_DATA_FOR
  * MANAGES
  * MOUNTS
  * OWNS
  * PART_OF
  * PEERED_TO
  * PERFORMED
  * PERFORMED_IMPERSONATED
  * PERMITS
  * POINTS_TO
  * PROTECTS
  * READS_DATA_FROM
  * REFERENCED_BY
  * REPLICA_OF
  * ROUTES_TRAFFIC_FROM
  * ROUTES_TRAFFIC_TO
  * RUNS
  * SCANNED
  * SEND_MESSAGES_TO
  * SERVES
  * STORES_DATA_IN
  * TRANSIT_PEERED_TO
  * USES
  * VALIDATES
* Defaults to `{{`CONTAINS`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

### DataWizSubscriptionResourceGroupsResourceGroups <a name="DataWizSubscriptionResourceGroupsResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

&datawizsubscriptionresourcegroups.DataWizSubscriptionResourceGroupsResourceGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizSubscriptionResourceGroupsResourceGroupsList <a name="DataWizSubscriptionResourceGroupsResourceGroupsList" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.NewDataWizSubscriptionResourceGroupsResourceGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizSubscriptionResourceGroupsResourceGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get"></a>

```go
func Get(index *f64) DataWizSubscriptionResourceGroupsResourceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizSubscriptionResourceGroupsResourceGroupsOutputReference <a name="DataWizSubscriptionResourceGroupsResourceGroupsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizsubscriptionresourcegroups"

datawizsubscriptionresourcegroups.NewDataWizSubscriptionResourceGroupsResourceGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizSubscriptionResourceGroupsResourceGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizSubscriptionResourceGroupsResourceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a>

---



