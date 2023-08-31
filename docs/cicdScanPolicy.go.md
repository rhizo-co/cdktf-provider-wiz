# `wiz_cicd_scan_policy`

Refer to the Terraform Registory for docs: [`wiz_cicd_scan_policy`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy).

# `cicdScanPolicy` Submodule <a name="`cicdScanPolicy` Submodule" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CicdScanPolicy <a name="CicdScanPolicy" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy wiz_cicd_scan_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicy(scope Construct, id *string, config CicdScanPolicyConfig) CicdScanPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig">CicdScanPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams">PutDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams">PutDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams">PutIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams">ResetDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams">ResetDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams">ResetIacParams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDiskSecretsParams` <a name="PutDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams"></a>

```go
func PutDiskSecretsParams(value CicdScanPolicyDiskSecretsParams)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskSecretsParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `PutDiskVulnerabilitiesParams` <a name="PutDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams"></a>

```go
func PutDiskVulnerabilitiesParams(value CicdScanPolicyDiskVulnerabilitiesParams)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putDiskVulnerabilitiesParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `PutIacParams` <a name="PutIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams"></a>

```go
func PutIacParams(value CicdScanPolicyIacParams)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.putIacParams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiskSecretsParams` <a name="ResetDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskSecretsParams"></a>

```go
func ResetDiskSecretsParams()
```

##### `ResetDiskVulnerabilitiesParams` <a name="ResetDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetDiskVulnerabilitiesParams"></a>

```go
func ResetDiskVulnerabilitiesParams()
```

##### `ResetIacParams` <a name="ResetIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.resetIacParams"></a>

```go
func ResetIacParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.CicdScanPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.CicdScanPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.CicdScanPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin">Builtin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams">DiskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams">DiskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams">IacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput">DiskSecretsParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput">DiskVulnerabilitiesParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput">IacParamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Builtin`<sup>Required</sup> <a name="Builtin" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.builtin"></a>

```go
func Builtin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiskSecretsParams`<sup>Required</sup> <a name="DiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParams"></a>

```go
func DiskSecretsParams() CicdScanPolicyDiskSecretsParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference">CicdScanPolicyDiskSecretsParamsOutputReference</a>

---

##### `DiskVulnerabilitiesParams`<sup>Required</sup> <a name="DiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParams"></a>

```go
func DiskVulnerabilitiesParams() CicdScanPolicyDiskVulnerabilitiesParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference">CicdScanPolicyDiskVulnerabilitiesParamsOutputReference</a>

---

##### `IacParams`<sup>Required</sup> <a name="IacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParams"></a>

```go
func IacParams() CicdScanPolicyIacParamsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference">CicdScanPolicyIacParamsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskSecretsParamsInput`<sup>Optional</sup> <a name="DiskSecretsParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskSecretsParamsInput"></a>

```go
func DiskSecretsParamsInput() CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---

##### `DiskVulnerabilitiesParamsInput`<sup>Optional</sup> <a name="DiskVulnerabilitiesParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.diskVulnerabilitiesParamsInput"></a>

```go
func DiskVulnerabilitiesParamsInput() CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---

##### `IacParamsInput`<sup>Optional</sup> <a name="IacParamsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.iacParamsInput"></a>

```go
func IacParamsInput() CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CicdScanPolicyConfig <a name="CicdScanPolicyConfig" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

&cicdscanpolicy.CicdScanPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	DiskSecretsParams: github.com/rhizo-co/cdktf-provider-wiz-go/wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams,
	DiskVulnerabilitiesParams: github.com/rhizo-co/cdktf-provider-wiz-go/wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams,
	IacParams: github.com/rhizo-co/cdktf-provider-wiz-go/wiz.cicdScanPolicy.CicdScanPolicyIacParams,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Scan Policy. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams">DiskSecretsParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | disk_secrets_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams">DiskVulnerabilitiesParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | disk_vulnerabilities_params block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams">IacParams</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | iac_params block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#name CicdScanPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Scan Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#description CicdScanPolicy#description}

---

##### `DiskSecretsParams`<sup>Optional</sup> <a name="DiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskSecretsParams"></a>

```go
DiskSecretsParams CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

disk_secrets_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_secrets_params CicdScanPolicy#disk_secrets_params}

---

##### `DiskVulnerabilitiesParams`<sup>Optional</sup> <a name="DiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.diskVulnerabilitiesParams"></a>

```go
DiskVulnerabilitiesParams CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

disk_vulnerabilities_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#disk_vulnerabilities_params CicdScanPolicy#disk_vulnerabilities_params}

---

##### `IacParams`<sup>Optional</sup> <a name="IacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyConfig.property.iacParams"></a>

```go
IacParams CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

iac_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#iac_params CicdScanPolicy#iac_params}

---

### CicdScanPolicyDiskSecretsParams <a name="CicdScanPolicyDiskSecretsParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

&cicdscanpolicy.CicdScanPolicyDiskSecretsParams {
	CountThreshold: *f64,
	PathAllowList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold">CountThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList">PathAllowList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}. |

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.countThreshold"></a>

```go
CountThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `PathAllowList`<sup>Optional</sup> <a name="PathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams.property.pathAllowList"></a>

```go
PathAllowList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#path_allow_list CicdScanPolicy#path_allow_list}.

---

### CicdScanPolicyDiskVulnerabilitiesParams <a name="CicdScanPolicyDiskVulnerabilitiesParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

&cicdscanpolicy.CicdScanPolicyDiskVulnerabilitiesParams {
	IgnoreUnfixed: interface{},
	PackageAllowList: *[]*string,
	PackageCountThreshold: *f64,
	Severity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed">IgnoreUnfixed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList">PackageAllowList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold">PackageCountThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity">Severity</a></code> | <code>*string</code> | Severity. |

---

##### `IgnoreUnfixed`<sup>Required</sup> <a name="IgnoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.ignoreUnfixed"></a>

```go
IgnoreUnfixed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_unfixed CicdScanPolicy#ignore_unfixed}.

---

##### `PackageAllowList`<sup>Required</sup> <a name="PackageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageAllowList"></a>

```go
PackageAllowList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_allow_list CicdScanPolicy#package_allow_list}.

---

##### `PackageCountThreshold`<sup>Required</sup> <a name="PackageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.packageCountThreshold"></a>

```go
PackageCountThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#package_count_threshold CicdScanPolicy#package_count_threshold}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Severity.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity CicdScanPolicy#severity}

---

### CicdScanPolicyIacParams <a name="CicdScanPolicyIacParams" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

&cicdscanpolicy.CicdScanPolicyIacParams {
	CountThreshold: *f64,
	SeverityThreshold: *string,
	BuiltinIgnoreTagsEnabled: interface{},
	CustomIgnoreTags: interface{},
	IgnoredRules: *[]*string,
	SecurityFrameworks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold">CountThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold">SeverityThreshold</a></code> | <code>*string</code> | Severity threshold. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled">BuiltinIgnoreTagsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags">CustomIgnoreTags</a></code> | <code>interface{}</code> | custom_ignore_tags block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules">IgnoredRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks">SecurityFrameworks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}. |

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.countThreshold"></a>

```go
CountThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#count_threshold CicdScanPolicy#count_threshold}.

---

##### `SeverityThreshold`<sup>Required</sup> <a name="SeverityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.severityThreshold"></a>

```go
SeverityThreshold *string
```

- *Type:* *string

Severity threshold.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#severity_threshold CicdScanPolicy#severity_threshold}

---

##### `BuiltinIgnoreTagsEnabled`<sup>Optional</sup> <a name="BuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.builtinIgnoreTagsEnabled"></a>

```go
BuiltinIgnoreTagsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#builtin_ignore_tags_enabled CicdScanPolicy#builtin_ignore_tags_enabled}.

---

##### `CustomIgnoreTags`<sup>Optional</sup> <a name="CustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.customIgnoreTags"></a>

```go
CustomIgnoreTags interface{}
```

- *Type:* interface{}

custom_ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#custom_ignore_tags CicdScanPolicy#custom_ignore_tags}

---

##### `IgnoredRules`<sup>Optional</sup> <a name="IgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.ignoredRules"></a>

```go
IgnoredRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignored_rules CicdScanPolicy#ignored_rules}.

---

##### `SecurityFrameworks`<sup>Optional</sup> <a name="SecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams.property.securityFrameworks"></a>

```go
SecurityFrameworks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#security_frameworks CicdScanPolicy#security_frameworks}.

---

### CicdScanPolicyIacParamsCustomIgnoreTags <a name="CicdScanPolicyIacParamsCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

&cicdscanpolicy.CicdScanPolicyIacParamsCustomIgnoreTags {
	Key: *string,
	Value: *string,
	IgnoreAllRules: interface{},
	RuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules">IgnoreAllRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds">RuleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#key CicdScanPolicy#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#value CicdScanPolicy#value}.

---

##### `IgnoreAllRules`<sup>Optional</sup> <a name="IgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ignoreAllRules"></a>

```go
IgnoreAllRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#ignore_all_rules CicdScanPolicy#ignore_all_rules}.

---

##### `RuleIds`<sup>Optional</sup> <a name="RuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTags.property.ruleIds"></a>

```go
RuleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cicd_scan_policy#rule_ids CicdScanPolicy#rule_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### CicdScanPolicyDiskSecretsParamsOutputReference <a name="CicdScanPolicyDiskSecretsParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicyDiskSecretsParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CicdScanPolicyDiskSecretsParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList">ResetPathAllowList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPathAllowList` <a name="ResetPathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.resetPathAllowList"></a>

```go
func ResetPathAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput">CountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput">PathAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold">CountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList">PathAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountThresholdInput`<sup>Optional</sup> <a name="CountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThresholdInput"></a>

```go
func CountThresholdInput() *f64
```

- *Type:* *f64

---

##### `PathAllowListInput`<sup>Optional</sup> <a name="PathAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowListInput"></a>

```go
func PathAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.countThreshold"></a>

```go
func CountThreshold() *f64
```

- *Type:* *f64

---

##### `PathAllowList`<sup>Required</sup> <a name="PathAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.pathAllowList"></a>

```go
func PathAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() CicdScanPolicyDiskSecretsParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskSecretsParams">CicdScanPolicyDiskSecretsParams</a>

---


### CicdScanPolicyDiskVulnerabilitiesParamsOutputReference <a name="CicdScanPolicyDiskVulnerabilitiesParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicyDiskVulnerabilitiesParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CicdScanPolicyDiskVulnerabilitiesParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput">IgnoreUnfixedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput">PackageAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput">PackageCountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed">IgnoreUnfixed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList">PackageAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold">PackageCountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreUnfixedInput`<sup>Optional</sup> <a name="IgnoreUnfixedInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixedInput"></a>

```go
func IgnoreUnfixedInput() interface{}
```

- *Type:* interface{}

---

##### `PackageAllowListInput`<sup>Optional</sup> <a name="PackageAllowListInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowListInput"></a>

```go
func PackageAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `PackageCountThresholdInput`<sup>Optional</sup> <a name="PackageCountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThresholdInput"></a>

```go
func PackageCountThresholdInput() *f64
```

- *Type:* *f64

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `IgnoreUnfixed`<sup>Required</sup> <a name="IgnoreUnfixed" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.ignoreUnfixed"></a>

```go
func IgnoreUnfixed() interface{}
```

- *Type:* interface{}

---

##### `PackageAllowList`<sup>Required</sup> <a name="PackageAllowList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageAllowList"></a>

```go
func PackageAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `PackageCountThreshold`<sup>Required</sup> <a name="PackageCountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.packageCountThreshold"></a>

```go
func PackageCountThreshold() *f64
```

- *Type:* *f64

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() CicdScanPolicyDiskVulnerabilitiesParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyDiskVulnerabilitiesParams">CicdScanPolicyDiskVulnerabilitiesParams</a>

---


### CicdScanPolicyIacParamsCustomIgnoreTagsList <a name="CicdScanPolicyIacParamsCustomIgnoreTagsList" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicyIacParamsCustomIgnoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CicdScanPolicyIacParamsCustomIgnoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get"></a>

```go
func Get(index *f64) CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference <a name="CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicyIacParamsCustomIgnoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules">ResetIgnoreAllRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds">ResetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreAllRules` <a name="ResetIgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetIgnoreAllRules"></a>

```go
func ResetIgnoreAllRules()
```

##### `ResetRuleIds` <a name="ResetRuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.resetRuleIds"></a>

```go
func ResetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput">IgnoreAllRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput">RuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules">IgnoreAllRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds">RuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreAllRulesInput`<sup>Optional</sup> <a name="IgnoreAllRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRulesInput"></a>

```go
func IgnoreAllRulesInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RuleIdsInput`<sup>Optional</sup> <a name="RuleIdsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIdsInput"></a>

```go
func RuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IgnoreAllRules`<sup>Required</sup> <a name="IgnoreAllRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ignoreAllRules"></a>

```go
func IgnoreAllRules() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.ruleIds"></a>

```go
func RuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CicdScanPolicyIacParamsOutputReference <a name="CicdScanPolicyIacParamsOutputReference" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/cicdscanpolicy"

cicdscanpolicy.NewCicdScanPolicyIacParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CicdScanPolicyIacParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags">PutCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled">ResetBuiltinIgnoreTagsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags">ResetCustomIgnoreTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules">ResetIgnoredRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks">ResetSecurityFrameworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomIgnoreTags` <a name="PutCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags"></a>

```go
func PutCustomIgnoreTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.putCustomIgnoreTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBuiltinIgnoreTagsEnabled` <a name="ResetBuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetBuiltinIgnoreTagsEnabled"></a>

```go
func ResetBuiltinIgnoreTagsEnabled()
```

##### `ResetCustomIgnoreTags` <a name="ResetCustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetCustomIgnoreTags"></a>

```go
func ResetCustomIgnoreTags()
```

##### `ResetIgnoredRules` <a name="ResetIgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetIgnoredRules"></a>

```go
func ResetIgnoredRules()
```

##### `ResetSecurityFrameworks` <a name="ResetSecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.resetSecurityFrameworks"></a>

```go
func ResetSecurityFrameworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags">CustomIgnoreTags</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput">BuiltinIgnoreTagsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput">CountThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput">CustomIgnoreTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput">IgnoredRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput">SecurityFrameworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput">SeverityThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled">BuiltinIgnoreTagsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold">CountThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules">IgnoredRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks">SecurityFrameworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold">SeverityThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomIgnoreTags`<sup>Required</sup> <a name="CustomIgnoreTags" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTags"></a>

```go
func CustomIgnoreTags() CicdScanPolicyIacParamsCustomIgnoreTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsCustomIgnoreTagsList">CicdScanPolicyIacParamsCustomIgnoreTagsList</a>

---

##### `BuiltinIgnoreTagsEnabledInput`<sup>Optional</sup> <a name="BuiltinIgnoreTagsEnabledInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabledInput"></a>

```go
func BuiltinIgnoreTagsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CountThresholdInput`<sup>Optional</sup> <a name="CountThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThresholdInput"></a>

```go
func CountThresholdInput() *f64
```

- *Type:* *f64

---

##### `CustomIgnoreTagsInput`<sup>Optional</sup> <a name="CustomIgnoreTagsInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.customIgnoreTagsInput"></a>

```go
func CustomIgnoreTagsInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoredRulesInput`<sup>Optional</sup> <a name="IgnoredRulesInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRulesInput"></a>

```go
func IgnoredRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityFrameworksInput`<sup>Optional</sup> <a name="SecurityFrameworksInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworksInput"></a>

```go
func SecurityFrameworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityThresholdInput`<sup>Optional</sup> <a name="SeverityThresholdInput" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThresholdInput"></a>

```go
func SeverityThresholdInput() *string
```

- *Type:* *string

---

##### `BuiltinIgnoreTagsEnabled`<sup>Required</sup> <a name="BuiltinIgnoreTagsEnabled" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.builtinIgnoreTagsEnabled"></a>

```go
func BuiltinIgnoreTagsEnabled() interface{}
```

- *Type:* interface{}

---

##### `CountThreshold`<sup>Required</sup> <a name="CountThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.countThreshold"></a>

```go
func CountThreshold() *f64
```

- *Type:* *f64

---

##### `IgnoredRules`<sup>Required</sup> <a name="IgnoredRules" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.ignoredRules"></a>

```go
func IgnoredRules() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityFrameworks`<sup>Required</sup> <a name="SecurityFrameworks" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.securityFrameworks"></a>

```go
func SecurityFrameworks() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityThreshold`<sup>Required</sup> <a name="SeverityThreshold" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.severityThreshold"></a>

```go
func SeverityThreshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() CicdScanPolicyIacParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cicdScanPolicy.CicdScanPolicyIacParams">CicdScanPolicyIacParams</a>

---



