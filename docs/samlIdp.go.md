# `wiz_saml_idp`

Refer to the Terraform Registory for docs: [`wiz_saml_idp`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="rhizo-co-terraform-provider-wiz.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp wiz_saml_idp}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.NewSamlIdp(scope Construct, id *string, config SamlIdpConfig) SamlIdp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig">SamlIdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig">SamlIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping">PutGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride">ResetAllowManualRoleOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping">ResetGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl">ResetLogoutUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole">ResetMergeGroupsMappingByRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles">ResetUseProviderManagedRoles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroupMapping` <a name="PutGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping"></a>

```go
func PutGroupMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowManualRoleOverride` <a name="ResetAllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride"></a>

```go
func ResetAllowManualRoleOverride()
```

##### `ResetDomains` <a name="ResetDomains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetGroupMapping` <a name="ResetGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping"></a>

```go
func ResetGroupMapping()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl"></a>

```go
func ResetIssuerUrl()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl"></a>

```go
func ResetLogoutUrl()
```

##### `ResetMergeGroupsMappingByRole` <a name="ResetMergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole"></a>

```go
func ResetMergeGroupsMappingByRole()
```

##### `ResetUseProviderManagedRoles` <a name="ResetUseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles"></a>

```go
func ResetUseProviderManagedRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.SamlIdp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.SamlIdp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.SamlIdp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping">GroupMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput">AllowManualRoleOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput">GroupMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput">LoginUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput">MergeGroupsMappingByRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput">UseProviderManagedRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride">AllowManualRoleOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole">MergeGroupsMappingByRole</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles">UseProviderManagedRoles</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupMapping`<sup>Required</sup> <a name="GroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping"></a>

```go
func GroupMapping() SamlIdpGroupMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AllowManualRoleOverrideInput`<sup>Optional</sup> <a name="AllowManualRoleOverrideInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput"></a>

```go
func AllowManualRoleOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupMappingInput`<sup>Optional</sup> <a name="GroupMappingInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput"></a>

```go
func GroupMappingInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput"></a>

```go
func IssuerUrlInput() *string
```

- *Type:* *string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput"></a>

```go
func LoginUrlInput() *string
```

- *Type:* *string

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput"></a>

```go
func LogoutUrlInput() *string
```

- *Type:* *string

---

##### `MergeGroupsMappingByRoleInput`<sup>Optional</sup> <a name="MergeGroupsMappingByRoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput"></a>

```go
func MergeGroupsMappingByRoleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UseProviderManagedRolesInput`<sup>Optional</sup> <a name="UseProviderManagedRolesInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput"></a>

```go
func UseProviderManagedRolesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowManualRoleOverride`<sup>Required</sup> <a name="AllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride"></a>

```go
func AllowManualRoleOverride() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl"></a>

```go
func LogoutUrl() *string
```

- *Type:* *string

---

##### `MergeGroupsMappingByRole`<sup>Required</sup> <a name="MergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole"></a>

```go
func MergeGroupsMappingByRole() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UseProviderManagedRoles`<sup>Required</sup> <a name="UseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles"></a>

```go
func UseProviderManagedRoles() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

&samlidp.SamlIdpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	LoginUrl: *string,
	Name: *string,
	AllowManualRoleOverride: interface{},
	Domains: *[]*string,
	GroupMapping: interface{},
	IssuerUrl: *string,
	LogoutUrl: *string,
	MergeGroupsMappingByRole: interface{},
	UseProviderManagedRoles: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate">Certificate</a></code> | <code>*string</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name">Name</a></code> | <code>*string</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride">AllowManualRoleOverride</a></code> | <code>interface{}</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains">Domains</a></code> | <code>*[]*string</code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping">GroupMapping</a></code> | <code>interface{}</code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole">MergeGroupsMappingByRole</a></code> | <code>interface{}</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles">UseProviderManagedRoles</a></code> | <code>interface{}</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl"></a>

```go
LoginUrl *string
```

- *Type:* *string

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `AllowManualRoleOverride`<sup>Optional</sup> <a name="AllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride"></a>

```go
AllowManualRoleOverride interface{}
```

- *Type:* interface{}

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `GroupMapping`<sup>Optional</sup> <a name="GroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping"></a>

```go
GroupMapping interface{}
```

- *Type:* interface{}

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl"></a>

```go
IssuerUrl *string
```

- *Type:* *string

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl"></a>

```go
LogoutUrl *string
```

- *Type:* *string

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `MergeGroupsMappingByRole`<sup>Optional</sup> <a name="MergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole"></a>

```go
MergeGroupsMappingByRole interface{}
```

- *Type:* interface{}

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `UseProviderManagedRoles`<sup>Optional</sup> <a name="UseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles"></a>

```go
UseProviderManagedRoles interface{}
```

- *Type:* interface{}

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

### SamlIdpGroupMapping <a name="SamlIdpGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

&samlidp.SamlIdpGroupMapping {
	ProviderGroupId: *string,
	Role: *string,
	Projects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId">ProviderGroupId</a></code> | <code>*string</code> | Provider group ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role">Role</a></code> | <code>*string</code> | Wiz Role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects">Projects</a></code> | <code>*[]*string</code> | Project mapping. |

---

##### `ProviderGroupId`<sup>Required</sup> <a name="ProviderGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId"></a>

```go
ProviderGroupId *string
```

- *Type:* *string

Provider group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role"></a>

```go
Role *string
```

- *Type:* *string

Wiz Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#role SamlIdp#role}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects"></a>

```go
Projects *[]*string
```

- *Type:* *[]*string

Project mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#projects SamlIdp#projects}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlIdpGroupMappingList <a name="SamlIdpGroupMappingList" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.NewSamlIdpGroupMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SamlIdpGroupMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get"></a>

```go
func Get(index *f64) SamlIdpGroupMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SamlIdpGroupMappingOutputReference <a name="SamlIdpGroupMappingOutputReference" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/samlidp"

samlidp.NewSamlIdpGroupMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SamlIdpGroupMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjects` <a name="ResetProjects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects"></a>

```go
func ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput">ProviderGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId">ProviderGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput"></a>

```go
func ProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProviderGroupIdInput`<sup>Optional</sup> <a name="ProviderGroupIdInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput"></a>

```go
func ProviderGroupIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `ProviderGroupId`<sup>Required</sup> <a name="ProviderGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId"></a>

```go
func ProviderGroupId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



