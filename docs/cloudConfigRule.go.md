# `wiz_cloud_config_rule`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule).

# `cloudConfigRule` Submodule <a name="`cloudConfigRule` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRule <a name="CloudConfigRule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule wiz_cloud_config_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.NewCloudConfigRule(scope Construct, id *string, config CloudConfigRuleConfig) CloudConfigRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig">CloudConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig">CloudConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers">PutIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl">ResetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers">ResetIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy">ResetOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds">ResetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity">ResetSeverity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIacMatchers` <a name="PutIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers"></a>

```go
func PutIacMatchers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFunctionAsControl` <a name="ResetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl"></a>

```go
func ResetFunctionAsControl()
```

##### `ResetIacMatchers` <a name="ResetIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers"></a>

```go
func ResetIacMatchers()
```

##### `ResetOpaPolicy` <a name="ResetOpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy"></a>

```go
func ResetOpaPolicy()
```

##### `ResetScopeAccountIds` <a name="ResetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds"></a>

```go
func ResetScopeAccountIds()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity"></a>

```go
func ResetSeverity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.CloudConfigRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.CloudConfigRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.CloudConfigRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers">IacMatchers</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories">SecuritySubCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput">FunctionAsControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput">IacMatchersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput">OpaPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput">RemediationInstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput">ScopeAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput">TargetNativeTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl">FunctionAsControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy">OpaPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions">RemediationInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IacMatchers`<sup>Required</sup> <a name="IacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers"></a>

```go
func IacMatchers() CloudConfigRuleIacMatchersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecuritySubCategories`<sup>Required</sup> <a name="SecuritySubCategories" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories"></a>

```go
func SecuritySubCategories() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionAsControlInput`<sup>Optional</sup> <a name="FunctionAsControlInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput"></a>

```go
func FunctionAsControlInput() interface{}
```

- *Type:* interface{}

---

##### `IacMatchersInput`<sup>Optional</sup> <a name="IacMatchersInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput"></a>

```go
func IacMatchersInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpaPolicyInput`<sup>Optional</sup> <a name="OpaPolicyInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput"></a>

```go
func OpaPolicyInput() *string
```

- *Type:* *string

---

##### `RemediationInstructionsInput`<sup>Optional</sup> <a name="RemediationInstructionsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput"></a>

```go
func RemediationInstructionsInput() *string
```

- *Type:* *string

---

##### `ScopeAccountIdsInput`<sup>Optional</sup> <a name="ScopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput"></a>

```go
func ScopeAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `TargetNativeTypesInput`<sup>Optional</sup> <a name="TargetNativeTypesInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput"></a>

```go
func TargetNativeTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl"></a>

```go
func FunctionAsControl() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpaPolicy`<sup>Required</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy"></a>

```go
func OpaPolicy() *string
```

- *Type:* *string

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions"></a>

```go
func RemediationInstructions() *string
```

- *Type:* *string

---

##### `ScopeAccountIds`<sup>Required</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds"></a>

```go
func ScopeAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes"></a>

```go
func TargetNativeTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleConfig <a name="CloudConfigRuleConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

&cloudconfigrule.CloudConfigRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Name: *string,
	RemediationInstructions: *string,
	TargetNativeTypes: *[]*string,
	Enabled: interface{},
	FunctionAsControl: interface{},
	IacMatchers: interface{},
	OpaPolicy: *string,
	ScopeAccountIds: *[]*string,
	Severity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description">Description</a></code> | <code>*string</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions">RemediationInstructions</a></code> | <code>*string</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>*[]*string</code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable/disable this rule. - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl">FunctionAsControl</a></code> | <code>interface{}</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers">IacMatchers</a></code> | <code>interface{}</code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy">OpaPolicy</a></code> | <code>*string</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>*[]*string</code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity">Severity</a></code> | <code>*string</code> | Severity that will be set for findings of this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions"></a>

```go
RemediationInstructions *string
```

- *Type:* *string

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes"></a>

```go
TargetNativeTypes *[]*string
```

- *Type:* *[]*string

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable/disable this rule. - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `FunctionAsControl`<sup>Optional</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl"></a>

```go
FunctionAsControl interface{}
```

- *Type:* interface{}

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `IacMatchers`<sup>Optional</sup> <a name="IacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers"></a>

```go
IacMatchers interface{}
```

- *Type:* interface{}

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `OpaPolicy`<sup>Optional</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy"></a>

```go
OpaPolicy *string
```

- *Type:* *string

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `ScopeAccountIds`<sup>Optional</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds"></a>

```go
ScopeAccountIds *[]*string
```

- *Type:* *[]*string

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Severity that will be set for findings of this rule.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL
* Defaults to `{{`MEDIUM`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

### CloudConfigRuleIacMatchers <a name="CloudConfigRuleIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

&cloudconfigrule.CloudConfigRuleIacMatchers {
	RegoCode: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode">RegoCode</a></code> | <code>*string</code> | Write code in the Rego query language. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type">Type</a></code> | <code>*string</code> | The type of resource that will be evaluated by the Rego Code. |

---

##### `RegoCode`<sup>Required</sup> <a name="RegoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode"></a>

```go
RegoCode *string
```

- *Type:* *string

Write code in the Rego query language.

This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of resource that will be evaluated by the Rego Code.

* Allowed values:

  * TERRAFORM
  * CLOUD_FORMATION
  * KUBERNETES
  * AZURE_RESOURCE_MANAGER
  * DOCKER_FILE
  * ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#type CloudConfigRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigRuleIacMatchersList <a name="CloudConfigRuleIacMatchersList" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.NewCloudConfigRuleIacMatchersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudConfigRuleIacMatchersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get"></a>

```go
func Get(index *f64) CloudConfigRuleIacMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudConfigRuleIacMatchersOutputReference <a name="CloudConfigRuleIacMatchersOutputReference" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cloudconfigrule"

cloudconfigrule.NewCloudConfigRuleIacMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudConfigRuleIacMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput">RegoCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode">RegoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegoCodeInput`<sup>Optional</sup> <a name="RegoCodeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput"></a>

```go
func RegoCodeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `RegoCode`<sup>Required</sup> <a name="RegoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode"></a>

```go
func RegoCode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



