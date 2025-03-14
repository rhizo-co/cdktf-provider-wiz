# `dataWizKubernetesClusters` Submodule <a name="`dataWizKubernetesClusters` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizKubernetesClusters <a name="DataWizKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters wiz_kubernetes_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.NewDataWizKubernetesClusters(scope Construct, id *string, config DataWizKubernetesClustersConfig) DataWizKubernetesClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig">DataWizKubernetesClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds">ResetExternalIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages">ResetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetExternalIds` <a name="ResetExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetExternalIds"></a>

```go
func ResetExternalIds()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetKind` <a name="ResetKind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetKind"></a>

```go
func ResetKind()
```

##### `ResetMaxPages` <a name="ResetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetMaxPages"></a>

```go
func ResetMaxPages()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.resetSearch"></a>

```go
func ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.DataWizKubernetesClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.DataWizKubernetesClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.DataWizKubernetesClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.DataWizKubernetesClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWizKubernetesClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWizKubernetesClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWizKubernetesClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWizKubernetesClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters">KubernetesClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput">ExternalIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput">KindInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput">MaxPagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds">ExternalIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind">Kind</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages">MaxPages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search">Search</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusters`<sup>Required</sup> <a name="KubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kubernetesClusters"></a>

```go
func KubernetesClusters() DataWizKubernetesClustersKubernetesClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList">DataWizKubernetesClustersKubernetesClustersList</a>

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIdsInput`<sup>Optional</sup> <a name="ExternalIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIdsInput"></a>

```go
func ExternalIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kindInput"></a>

```go
func KindInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPagesInput`<sup>Optional</sup> <a name="MaxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPagesInput"></a>

```go
func MaxPagesInput() *f64
```

- *Type:* *f64

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.cloudProvider"></a>

```go
func CloudProvider() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.externalIds"></a>

```go
func ExternalIds() *[]*string
```

- *Type:* *[]*string

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.kind"></a>

```go
func Kind() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPages`<sup>Required</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.maxPages"></a>

```go
func MaxPages() *f64
```

- *Type:* *f64

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizKubernetesClustersConfig <a name="DataWizKubernetesClustersConfig" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

&datawizkubernetesclusters.DataWizKubernetesClustersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudProvider: *[]*string,
	ExternalIds: *[]*string,
	First: *f64,
	Kind: *[]*string,
	MaxPages: *f64,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds">ExternalIds</a></code> | <code>*[]*string</code> | The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first">First</a></code> | <code>*f64</code> | How many matches to return, maximum is `500` per page.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind">Kind</a></code> | <code>*[]*string</code> | Query Kubernetes Cluster of specific kind(s) or cloud provider(s). |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages">MaxPages</a></code> | <code>*f64</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search">Search</a></code> | <code>*string</code> | Free text search. Specify empty string to return all kubernetes clusters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.cloudProvider"></a>

```go
CloudProvider *[]*string
```

- *Type:* *[]*string

Query cloud accounts of specific cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#cloud_provider DataWizKubernetesClusters#cloud_provider}

---

##### `ExternalIds`<sup>Optional</sup> <a name="ExternalIds" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.externalIds"></a>

```go
ExternalIds *[]*string
```

- *Type:* *[]*string

The ID(s) to search by. i.e `Azure Subscription ID` or `AWS account number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#external_ids DataWizKubernetesClusters#external_ids}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.first"></a>

```go
First *f64
```

- *Type:* *f64

How many matches to return, maximum is `500` per page.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#first DataWizKubernetesClusters#first}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.kind"></a>

```go
Kind *[]*string
```

- *Type:* *[]*string

Query Kubernetes Cluster of specific kind(s) or cloud provider(s).

* Allowed values:
  - EKS
  - GKE
  - AKS
  - OKE
  - OPEN_SHIFT
  - SELF_HOSTED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#kind DataWizKubernetesClusters#kind}

---

##### `MaxPages`<sup>Optional</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.maxPages"></a>

```go
MaxPages *f64
```

- *Type:* *f64

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#max_pages DataWizKubernetesClusters#max_pages}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Free text search. Specify empty string to return all kubernetes clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/kubernetes_clusters#search DataWizKubernetesClusters#search}

---

### DataWizKubernetesClustersKubernetesClusters <a name="DataWizKubernetesClustersKubernetesClusters" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

&datawizkubernetesclusters.DataWizKubernetesClustersKubernetesClusters {

}
```


### DataWizKubernetesClustersKubernetesClustersCloudAccount <a name="DataWizKubernetesClustersKubernetesClustersCloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

&datawizkubernetesclusters.DataWizKubernetesClustersKubernetesClustersCloudAccount {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizKubernetesClustersKubernetesClustersCloudAccountList <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.NewDataWizKubernetesClustersKubernetesClustersCloudAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizKubernetesClustersKubernetesClustersCloudAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get"></a>

```go
func Get(index *f64) DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference <a name="DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.NewDataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizKubernetesClustersKubernetesClustersCloudAccount
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccount">DataWizKubernetesClustersKubernetesClustersCloudAccount</a>

---


### DataWizKubernetesClustersKubernetesClustersList <a name="DataWizKubernetesClustersKubernetesClustersList" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.NewDataWizKubernetesClustersKubernetesClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizKubernetesClustersKubernetesClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get"></a>

```go
func Get(index *f64) DataWizKubernetesClustersKubernetesClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizKubernetesClustersKubernetesClustersOutputReference <a name="DataWizKubernetesClustersKubernetesClustersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizkubernetesclusters"

datawizkubernetesclusters.NewDataWizKubernetesClustersKubernetesClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizKubernetesClustersKubernetesClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount">CloudAccount</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccount`<sup>Required</sup> <a name="CloudAccount" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.cloudAccount"></a>

```go
func CloudAccount() DataWizKubernetesClustersKubernetesClustersCloudAccountList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersCloudAccountList">DataWizKubernetesClustersKubernetesClustersCloudAccountList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizKubernetesClustersKubernetesClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizKubernetesClusters.DataWizKubernetesClustersKubernetesClusters">DataWizKubernetesClustersKubernetesClusters</a>

---



