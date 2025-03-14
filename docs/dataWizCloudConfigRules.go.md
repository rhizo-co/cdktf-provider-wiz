# `dataWizCloudConfigRules` Submodule <a name="`dataWizCloudConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudConfigRules <a name="DataWizCloudConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.NewDataWizCloudConfigRules(scope Construct, id *string, config DataWizCloudConfigRulesConfig) DataWizCloudConfigRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider">ResetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory">ResetFrameworkCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl">ResetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation">ResetHasAutoRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation">ResetHasRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy">ResetIsOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType">ResetMatcherType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll">ResetRiskEqualsAll</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny">ResetRiskEqualsAny</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds">ResetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType">ResetSubjectEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType">ResetTargetNativeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCloudProvider` <a name="ResetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider"></a>

```go
func ResetCloudProvider()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFirst` <a name="ResetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetFrameworkCategory` <a name="ResetFrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory"></a>

```go
func ResetFrameworkCategory()
```

##### `ResetFunctionAsControl` <a name="ResetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl"></a>

```go
func ResetFunctionAsControl()
```

##### `ResetHasAutoRemediation` <a name="ResetHasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation"></a>

```go
func ResetHasAutoRemediation()
```

##### `ResetHasRemediation` <a name="ResetHasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation"></a>

```go
func ResetHasRemediation()
```

##### `ResetIds` <a name="ResetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds"></a>

```go
func ResetIds()
```

##### `ResetIsOpaPolicy` <a name="ResetIsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy"></a>

```go
func ResetIsOpaPolicy()
```

##### `ResetMatcherType` <a name="ResetMatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType"></a>

```go
func ResetMatcherType()
```

##### `ResetProject` <a name="ResetProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRiskEqualsAll` <a name="ResetRiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll"></a>

```go
func ResetRiskEqualsAll()
```

##### `ResetRiskEqualsAny` <a name="ResetRiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny"></a>

```go
func ResetRiskEqualsAny()
```

##### `ResetScopeAccountIds` <a name="ResetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds"></a>

```go
func ResetScopeAccountIds()
```

##### `ResetSearch` <a name="ResetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetServiceType` <a name="ResetServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType"></a>

```go
func ResetServiceType()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSubjectEntityType` <a name="ResetSubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType"></a>

```go
func ResetSubjectEntityType()
```

##### `ResetTargetNativeType` <a name="ResetTargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType"></a>

```go
func ResetTargetNativeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.DataWizCloudConfigRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.DataWizCloudConfigRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.DataWizCloudConfigRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.DataWizCloudConfigRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataWizCloudConfigRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataWizCloudConfigRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataWizCloudConfigRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules">CloudConfigurationRules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput">CreatedByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput">FrameworkCategoryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput">FunctionAsControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput">HasAutoRemediationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput">HasRemediationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput">IsOpaPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput">MatcherTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput">ProjectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput">RiskEqualsAllInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput">RiskEqualsAnyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput">ScopeAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput">SeverityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput">SubjectEntityTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput">TargetNativeTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy">CreatedBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory">FrameworkCategory</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl">FunctionAsControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation">HasRemediation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy">IsOpaPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType">MatcherType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project">Project</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll">RiskEqualsAll</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny">RiskEqualsAny</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType">ServiceType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity">Severity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType">SubjectEntityType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType">TargetNativeType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudConfigurationRules`<sup>Required</sup> <a name="CloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules"></a>

```go
func CloudConfigurationRules() DataWizCloudConfigRulesCloudConfigurationRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput"></a>

```go
func CreatedByInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `FrameworkCategoryInput`<sup>Optional</sup> <a name="FrameworkCategoryInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput"></a>

```go
func FrameworkCategoryInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionAsControlInput`<sup>Optional</sup> <a name="FunctionAsControlInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput"></a>

```go
func FunctionAsControlInput() interface{}
```

- *Type:* interface{}

---

##### `HasAutoRemediationInput`<sup>Optional</sup> <a name="HasAutoRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput"></a>

```go
func HasAutoRemediationInput() interface{}
```

- *Type:* interface{}

---

##### `HasRemediationInput`<sup>Optional</sup> <a name="HasRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput"></a>

```go
func HasRemediationInput() interface{}
```

- *Type:* interface{}

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsOpaPolicyInput`<sup>Optional</sup> <a name="IsOpaPolicyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput"></a>

```go
func IsOpaPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `MatcherTypeInput`<sup>Optional</sup> <a name="MatcherTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput"></a>

```go
func MatcherTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput"></a>

```go
func ProjectInput() *[]*string
```

- *Type:* *[]*string

---

##### `RiskEqualsAllInput`<sup>Optional</sup> <a name="RiskEqualsAllInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput"></a>

```go
func RiskEqualsAllInput() *[]*string
```

- *Type:* *[]*string

---

##### `RiskEqualsAnyInput`<sup>Optional</sup> <a name="RiskEqualsAnyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput"></a>

```go
func RiskEqualsAnyInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeAccountIdsInput`<sup>Optional</sup> <a name="ScopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput"></a>

```go
func ScopeAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput"></a>

```go
func SeverityInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectEntityTypeInput`<sup>Optional</sup> <a name="SubjectEntityTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput"></a>

```go
func SubjectEntityTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNativeTypeInput`<sup>Optional</sup> <a name="TargetNativeTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput"></a>

```go
func TargetNativeTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider"></a>

```go
func CloudProvider() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy"></a>

```go
func CreatedBy() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `First`<sup>Required</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `FrameworkCategory`<sup>Required</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory"></a>

```go
func FrameworkCategory() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl"></a>

```go
func FunctionAsControl() interface{}
```

- *Type:* interface{}

---

##### `HasAutoRemediation`<sup>Required</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation"></a>

```go
func HasAutoRemediation() interface{}
```

- *Type:* interface{}

---

##### `HasRemediation`<sup>Required</sup> <a name="HasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation"></a>

```go
func HasRemediation() interface{}
```

- *Type:* interface{}

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `IsOpaPolicy`<sup>Required</sup> <a name="IsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy"></a>

```go
func IsOpaPolicy() interface{}
```

- *Type:* interface{}

---

##### `MatcherType`<sup>Required</sup> <a name="MatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType"></a>

```go
func MatcherType() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project"></a>

```go
func Project() *[]*string
```

- *Type:* *[]*string

---

##### `RiskEqualsAll`<sup>Required</sup> <a name="RiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll"></a>

```go
func RiskEqualsAll() *[]*string
```

- *Type:* *[]*string

---

##### `RiskEqualsAny`<sup>Required</sup> <a name="RiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny"></a>

```go
func RiskEqualsAny() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeAccountIds`<sup>Required</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds"></a>

```go
func ScopeAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `Search`<sup>Required</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType"></a>

```go
func ServiceType() *[]*string
```

- *Type:* *[]*string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity"></a>

```go
func Severity() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectEntityType`<sup>Required</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType"></a>

```go
func SubjectEntityType() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNativeType`<sup>Required</sup> <a name="TargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType"></a>

```go
func TargetNativeType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudConfigRulesCloudConfigurationRules <a name="DataWizCloudConfigRulesCloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

&datawizcloudconfigrules.DataWizCloudConfigRulesCloudConfigurationRules {

}
```


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

&datawizcloudconfigrules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences {

}
```


### DataWizCloudConfigRulesConfig <a name="DataWizCloudConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

&datawizcloudconfigrules.DataWizCloudConfigRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudProvider: *[]*string,
	CreatedBy: *[]*string,
	Enabled: interface{},
	First: *f64,
	FrameworkCategory: *[]*string,
	FunctionAsControl: interface{},
	HasAutoRemediation: interface{},
	HasRemediation: interface{},
	Ids: *[]*string,
	IsOpaPolicy: interface{},
	MatcherType: *[]*string,
	Project: *[]*string,
	RiskEqualsAll: *[]*string,
	RiskEqualsAny: *[]*string,
	ScopeAccountIds: *[]*string,
	Search: *string,
	ServiceType: *[]*string,
	Severity: *[]*string,
	SubjectEntityType: *[]*string,
	TargetNativeType: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider">CloudProvider</a></code> | <code>*[]*string</code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy">CreatedBy</a></code> | <code>*[]*string</code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first">First</a></code> | <code>*f64</code> | How many results to return     - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory">FrameworkCategory</a></code> | <code>*[]*string</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl">FunctionAsControl</a></code> | <code>interface{}</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>interface{}</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation">HasRemediation</a></code> | <code>interface{}</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids">Ids</a></code> | <code>*[]*string</code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy">IsOpaPolicy</a></code> | <code>interface{}</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType">MatcherType</a></code> | <code>*[]*string</code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project">Project</a></code> | <code>*[]*string</code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll">RiskEqualsAll</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny">RiskEqualsAny</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*string</code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search">Search</a></code> | <code>*string</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType">ServiceType</a></code> | <code>*[]*string</code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity">Severity</a></code> | <code>*[]*string</code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType">SubjectEntityType</a></code> | <code>*[]*string</code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType">TargetNativeType</a></code> | <code>*[]*string</code> | Search rules by target native type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProvider`<sup>Optional</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider"></a>

```go
CloudProvider *[]*string
```

- *Type:* *[]*string

Find CSPM rules related to cloud provider.

* Allowed values:
  - GCP
  - AWS
  - Azure
  - OCI
  - Alibaba
  - vSphere
  - OpenShift
  - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy"></a>

```go
CreatedBy *[]*string
```

- *Type:* *[]*string

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `First`<sup>Optional</sup> <a name="First" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first"></a>

```go
First *f64
```

- *Type:* *f64

How many results to return     - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `FrameworkCategory`<sup>Optional</sup> <a name="FrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory"></a>

```go
FrameworkCategory *[]*string
```

- *Type:* *[]*string

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `FunctionAsControl`<sup>Optional</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl"></a>

```go
FunctionAsControl interface{}
```

- *Type:* interface{}

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `HasAutoRemediation`<sup>Optional</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation"></a>

```go
HasAutoRemediation interface{}
```

- *Type:* interface{}

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `HasRemediation`<sup>Optional</sup> <a name="HasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation"></a>

```go
HasRemediation interface{}
```

- *Type:* interface{}

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `IsOpaPolicy`<sup>Optional</sup> <a name="IsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy"></a>

```go
IsOpaPolicy interface{}
```

- *Type:* interface{}

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `MatcherType`<sup>Optional</sup> <a name="MatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType"></a>

```go
MatcherType *[]*string
```

- *Type:* *[]*string

Search rules by target native type.

* Allowed values:
  - CLOUD
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project"></a>

```go
Project *[]*string
```

- *Type:* *[]*string

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `RiskEqualsAll`<sup>Optional</sup> <a name="RiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll"></a>

```go
RiskEqualsAll *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `RiskEqualsAny`<sup>Optional</sup> <a name="RiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny"></a>

```go
RiskEqualsAny *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `ScopeAccountIds`<sup>Optional</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds"></a>

```go
ScopeAccountIds *[]*string
```

- *Type:* *[]*string

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType"></a>

```go
ServiceType *[]*string
```

- *Type:* *[]*string

Find CSPM rules related to the service.

* Allowed values:
  - AWS
  - Azure
  - GCP
  - OCI
  - Alibaba
  - AKS
  - EKS
  - GKE
  - Kubernetes
  - OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity"></a>

```go
Severity *[]*string
```

- *Type:* *[]*string

CSPM Rule severity.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `SubjectEntityType`<sup>Optional</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType"></a>

```go
SubjectEntityType *[]*string
```

- *Type:* *[]*string

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `TargetNativeType`<sup>Optional</sup> <a name="TargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType"></a>

```go
TargetNativeType *[]*string
```

- *Type:* *[]*string

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.NewDataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get"></a>

```go
func Get(index *f64) DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.NewDataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a>

---


### DataWizCloudConfigRulesCloudConfigurationRulesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.NewDataWizCloudConfigRulesCloudConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataWizCloudConfigRulesCloudConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get"></a>

```go
func Get(index *f64) DataWizCloudConfigRulesCloudConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataWizCloudConfigRulesCloudConfigurationRulesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/datawizcloudconfigrules"

datawizcloudconfigrules.NewDataWizCloudConfigRulesCloudConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataWizCloudConfigRulesCloudConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin">Builtin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId">ControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences">ExternalReferences</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl">FunctionAsControl</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId">GraphId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation">HasAutoRemediation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds">IacMatcherIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy">OpaPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions">RemediationInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts">ScopeAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds">SecuritySubCategoryIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId">ShortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType">SubjectEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt">SupportsNrt</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Builtin`<sup>Required</sup> <a name="Builtin" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin"></a>

```go
func Builtin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId"></a>

```go
func ControlId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalReferences`<sup>Required</sup> <a name="ExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences"></a>

```go
func ExternalReferences() DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a>

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl"></a>

```go
func FunctionAsControl() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GraphId`<sup>Required</sup> <a name="GraphId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId"></a>

```go
func GraphId() *string
```

- *Type:* *string

---

##### `HasAutoRemediation`<sup>Required</sup> <a name="HasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation"></a>

```go
func HasAutoRemediation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IacMatcherIds`<sup>Required</sup> <a name="IacMatcherIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds"></a>

```go
func IacMatcherIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpaPolicy`<sup>Required</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy"></a>

```go
func OpaPolicy() *string
```

- *Type:* *string

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions"></a>

```go
func RemediationInstructions() *string
```

- *Type:* *string

---

##### `ScopeAccounts`<sup>Required</sup> <a name="ScopeAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts"></a>

```go
func ScopeAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `SecuritySubCategoryIds`<sup>Required</sup> <a name="SecuritySubCategoryIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```go
func SecuritySubCategoryIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `ShortId`<sup>Required</sup> <a name="ShortId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId"></a>

```go
func ShortId() *string
```

- *Type:* *string

---

##### `SubjectEntityType`<sup>Required</sup> <a name="SubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType"></a>

```go
func SubjectEntityType() *string
```

- *Type:* *string

---

##### `SupportsNrt`<sup>Required</sup> <a name="SupportsNrt" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt"></a>

```go
func SupportsNrt() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes"></a>

```go
func TargetNativeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataWizCloudConfigRulesCloudConfigurationRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a>

---



