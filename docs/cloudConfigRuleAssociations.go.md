# `wiz_cloud_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations).

# `cloudConfigRuleAssociations` Submodule <a name="`cloudConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRuleAssociations <a name="CloudConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigruleassociations"

cloudconfigruleassociations.NewCloudConfigRuleAssociations(scope Construct, id *string, config CloudConfigRuleAssociationsConfig) CloudConfigRuleAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig">CloudConfigRuleAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails">ResetDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDetails` <a name="ResetDetails" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails"></a>

```go
func ResetDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigruleassociations"

cloudconfigruleassociations.CloudConfigRuleAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigruleassociations"

cloudconfigruleassociations.CloudConfigRuleAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigruleassociations"

cloudconfigruleassociations.CloudConfigRuleAssociations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput">CloudConfigRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput">DetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput">SecuritySubCategoryIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds">CloudConfigRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloudConfigRuleIdsInput`<sup>Optional</sup> <a name="CloudConfigRuleIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput"></a>

```go
func CloudConfigRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput"></a>

```go
func DetailsInput() *string
```

- *Type:* *string

---

##### `SecuritySubCategoryIdsInput`<sup>Optional</sup> <a name="SecuritySubCategoryIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```go
func SecuritySubCategoryIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudConfigRuleIds`<sup>Required</sup> <a name="CloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds"></a>

```go
func CloudConfigRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds"></a>

```go
func SecuritySubCategoryIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleAssociationsConfig <a name="CloudConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigruleassociations"

&cloudconfigruleassociations.CloudConfigRuleAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudConfigRuleIds: *[]*string,
	SecuritySubCategoryIds: *[]*string,
	Details: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds">CloudConfigRuleIds</a></code> | <code>*[]*string</code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>*[]*string</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details">Details</a></code> | <code>*string</code> | Details of the association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudConfigRuleIds`<sup>Required</sup> <a name="CloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds"></a>

```go
CloudConfigRuleIds *[]*string
```

- *Type:* *[]*string

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```go
SecuritySubCategoryIds *[]*string
```

- *Type:* *[]*string

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details"></a>

```go
Details *string
```

- *Type:* *string

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---



