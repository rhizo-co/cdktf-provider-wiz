# `mwsStorageConfigurations` Submodule <a name="`mwsStorageConfigurations` Submodule" id="@cdktf/provider-databricks.mwsStorageConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsStorageConfigurations <a name="MwsStorageConfigurations" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations databricks_mws_storage_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsstorageconfigurations"

mwsstorageconfigurations.NewMwsStorageConfigurations(scope Construct, id *string, config MwsStorageConfigurationsConfig) MwsStorageConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig">MwsStorageConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig">MwsStorageConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsstorageconfigurations"

mwsstorageconfigurations.MwsStorageConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsstorageconfigurations"

mwsstorageconfigurations.MwsStorageConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsstorageconfigurations"

mwsstorageconfigurations.MwsStorageConfigurations_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationNameInput">StorageConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationName">StorageConfigurationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationId"></a>

```go
func StorageConfigurationId() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StorageConfigurationNameInput`<sup>Optional</sup> <a name="StorageConfigurationNameInput" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationNameInput"></a>

```go
func StorageConfigurationNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageConfigurationName`<sup>Required</sup> <a name="StorageConfigurationName" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.storageConfigurationName"></a>

```go
func StorageConfigurationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsStorageConfigurationsConfig <a name="MwsStorageConfigurationsConfig" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsstorageconfigurations"

&mwsstorageconfigurations.MwsStorageConfigurationsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BucketName: *string,
	StorageConfigurationName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#account_id MwsStorageConfigurations#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#bucket_name MwsStorageConfigurations#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.storageConfigurationName">StorageConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#storage_configuration_name MwsStorageConfigurations#storage_configuration_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#id MwsStorageConfigurations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#account_id MwsStorageConfigurations#account_id}.

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#bucket_name MwsStorageConfigurations#bucket_name}.

---

##### `StorageConfigurationName`<sup>Required</sup> <a name="StorageConfigurationName" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.storageConfigurationName"></a>

```go
StorageConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#storage_configuration_name MwsStorageConfigurations#storage_configuration_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsStorageConfigurations.MwsStorageConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_storage_configurations#id MwsStorageConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


