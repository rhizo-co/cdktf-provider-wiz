# `dataWizCloudAccounts` Submodule <a name="`dataWizCloudAccounts` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudAccounts <a name="DataWizCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts wiz_cloud_accounts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.NewDataWizCloudAccounts(scope Construct, id *string, config DataWizCloudAccountsConfig) DataWizCloudAccounts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig">DataWizCloudAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject">ResetAssignedToProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId">ResetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId">ResetConnectorIssueId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources">ResetHasMultipleConnectorSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages">ResetMaxPages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAssignedToProject` <a name="ResetAssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetAssignedToProject"></a>

```go
func ResetAssignedToProject()
```

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetConnectorId` <a name="ResetConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorId"></a>

```go
func ResetConnectorId()
```

##### `ResetConnectorIssueId` <a name="ResetConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetConnectorIssueId"></a>

```go
func ResetConnectorIssueId()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetHasMultipleConnectorSources` <a name="ResetHasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetHasMultipleConnectorSources"></a>

```go
func ResetHasMultipleConnectorSources()
```

##### `ResetIds` <a name="ResetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetIds"></a>

```go
func ResetIds()
```

##### `ResetMaxPages` <a name="ResetMaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetMaxPages"></a>

```go
func ResetMaxPages()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.DataWizCloudAccounts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.DataWizCloudAccounts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.DataWizCloudAccounts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.DataWizCloudAccounts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWizCloudAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWizCloudAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWizCloudAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts">CloudAccounts</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput">AssignedToProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput">ConnectorIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput">ConnectorIssueIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput">HasMultipleConnectorSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput">MaxPagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput">SearchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput">StatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject">AssignedToProject</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId">ConnectorId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId">ConnectorIssueId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources">HasMultipleConnectorSources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages">MaxPages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search">Search</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudAccounts`<sup>Required</sup> <a name="CloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudAccounts"></a>

```go
func CloudAccounts() DataWizCloudAccountsCloudAccountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList">DataWizCloudAccountsCloudAccountsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AssignedToProjectInput`<sup>Optional</sup> <a name="AssignedToProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProjectInput"></a>

```go
func AssignedToProjectInput() interface{}
```

- *Type:* interface{}

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorIdInput`<sup>Optional</sup> <a name="ConnectorIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIdInput"></a>

```go
func ConnectorIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorIssueIdInput`<sup>Optional</sup> <a name="ConnectorIssueIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueIdInput"></a>

```go
func ConnectorIssueIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `HasMultipleConnectorSourcesInput`<sup>Optional</sup> <a name="HasMultipleConnectorSourcesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSourcesInput"></a>

```go
func HasMultipleConnectorSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPagesInput`<sup>Optional</sup> <a name="MaxPagesInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPagesInput"></a>

```go
func MaxPagesInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.searchInput"></a>

```go
func SearchInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.statusInput"></a>

```go
func StatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssignedToProject`<sup>Required</sup> <a name="AssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.assignedToProject"></a>

```go
func AssignedToProject() interface{}
```

- *Type:* interface{}

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.cloudProvider"></a>

```go
func CloudProvider() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorId"></a>

```go
func ConnectorId() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorIssueId`<sup>Required</sup> <a name="ConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.connectorIssueId"></a>

```go
func ConnectorIssueId() *[]*string
```

- *Type:* *[]*string

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `HasMultipleConnectorSources`<sup>Required</sup> <a name="HasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.hasMultipleConnectorSources"></a>

```go
func HasMultipleConnectorSources() interface{}
```

- *Type:* interface{}

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPages`<sup>Required</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.maxPages"></a>

```go
func MaxPages() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.search"></a>

```go
func Search() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccounts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudAccountsCloudAccounts <a name="DataWizCloudAccountsCloudAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

&datawizcloudaccounts.DataWizCloudAccountsCloudAccounts {

}
```


### DataWizCloudAccountsConfig <a name="DataWizCloudAccountsConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

&datawizcloudaccounts.DataWizCloudAccountsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssignedToProject: interface{},
	CloudProvider: *[]*string,
	ConnectorId: *[]*string,
	ConnectorIssueId: *[]*string,
	First: *f64,
	HasMultipleConnectorSources: interface{},
	Ids: *[]*string,
	MaxPages: *f64,
	ProjectId: *string,
	Search: *[]*string,
	Status: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject">AssignedToProject</a></code> | <code>interface{}</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | Query cloud accounts of specific cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId">ConnectorId</a></code> | <code>*[]*string</code> | Query cloud accounts by specific connector ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId">ConnectorIssueId</a></code> | <code>*[]*string</code> | Query cloud accounts by specific connector issue ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first">First</a></code> | <code>*f64</code> | How many results to return, maximum is `500` is per page.     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources">HasMultipleConnectorSources</a></code> | <code>interface{}</code> | QueryQuery cloud accounts by project assignment state. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids">Ids</a></code> | <code>*[]*string</code> | Get specific Cloud Accounts by their IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages">MaxPages</a></code> | <code>*f64</code> | How many pages to return. 0 means all pages.     - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Query cloud accounts of a specific linked project, given its id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search">Search</a></code> | <code>*[]*string</code> | Free text search on cloud account name or tags or external-id. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status">Status</a></code> | <code>*[]*string</code> | Query cloud accounts by status. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignedToProject`<sup>Optional</sup> <a name="AssignedToProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.assignedToProject"></a>

```go
AssignedToProject interface{}
```

- *Type:* interface{}

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#assigned_to_project DataWizCloudAccounts#assigned_to_project}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.cloudProvider"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#cloud_provider DataWizCloudAccounts#cloud_provider}

---

##### `ConnectorId`<sup>Optional</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorId"></a>

```go
ConnectorId *[]*string
```

- *Type:* *[]*string

Query cloud accounts by specific connector ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_id DataWizCloudAccounts#connector_id}

---

##### `ConnectorIssueId`<sup>Optional</sup> <a name="ConnectorIssueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.connectorIssueId"></a>

```go
ConnectorIssueId *[]*string
```

- *Type:* *[]*string

Query cloud accounts by specific connector issue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#connector_issue_id DataWizCloudAccounts#connector_issue_id}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.first"></a>

```go
First *f64
```

- *Type:* *f64

How many results to return, maximum is `500` is per page.     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#first DataWizCloudAccounts#first}

---

##### `HasMultipleConnectorSources`<sup>Optional</sup> <a name="HasMultipleConnectorSources" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.hasMultipleConnectorSources"></a>

```go
HasMultipleConnectorSources interface{}
```

- *Type:* interface{}

QueryQuery cloud accounts by project assignment state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#has_multiple_connector_sources DataWizCloudAccounts#has_multiple_connector_sources}

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

Get specific Cloud Accounts by their IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#ids DataWizCloudAccounts#ids}

---

##### `MaxPages`<sup>Optional</sup> <a name="MaxPages" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.maxPages"></a>

```go
MaxPages *f64
```

- *Type:* *f64

How many pages to return. 0 means all pages.     - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#max_pages DataWizCloudAccounts#max_pages}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Query cloud accounts of a specific linked project, given its id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#project_id DataWizCloudAccounts#project_id}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.search"></a>

```go
Search *[]*string
```

- *Type:* *[]*string

Free text search on cloud account name or tags or external-id.

Specify list of empty string to return all cloud accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#search DataWizCloudAccounts#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsConfig.property.status"></a>

```go
Status *[]*string
```

- *Type:* *[]*string

Query cloud accounts by status.

* Allowed values:
  - CONNECTED
  - ERROR
  - DISABLED
  - INITIAL_SCANNING
  - PARTIALLY_CONNECTED
  - DISCONNECTED
  - DISCOVERED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_accounts#status DataWizCloudAccounts#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudAccountsCloudAccountsList <a name="DataWizCloudAccountsCloudAccountsList" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.NewDataWizCloudAccountsCloudAccountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizCloudAccountsCloudAccountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get"></a>

```go
func Get(index *f64) DataWizCloudAccountsCloudAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizCloudAccountsCloudAccountsOutputReference <a name="DataWizCloudAccountsCloudAccountsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudaccounts"

datawizcloudaccounts.NewDataWizCloudAccountsCloudAccountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizCloudAccountsCloudAccountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds">LinkedProjectIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds">SourceConnectorIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedProjectIds`<sup>Required</sup> <a name="LinkedProjectIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.linkedProjectIds"></a>

```go
func LinkedProjectIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceConnectorIds`<sup>Required</sup> <a name="SourceConnectorIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.sourceConnectorIds"></a>

```go
func SourceConnectorIds() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizCloudAccountsCloudAccounts
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudAccounts.DataWizCloudAccountsCloudAccounts">DataWizCloudAccountsCloudAccounts</a>

---



