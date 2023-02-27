# `storageCredential` Submodule <a name="`storageCredential` Submodule" id="@cdktf/provider-databricks.storageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageCredential <a name="StorageCredential" id="@cdktf/provider-databricks.storageCredential.StorageCredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.NewStorageCredential(scope Construct, id *string, config StorageCredentialConfig) StorageCredential
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig">StorageCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig">StorageCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole">PutAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity">PutAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal">PutAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey">PutGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole">ResetAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity">ResetAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal">ResetAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey">ResetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAwsIamRole` <a name="PutAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole"></a>

```go
func PutAwsIamRole(value StorageCredentialAwsIamRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `PutAzureManagedIdentity` <a name="PutAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity"></a>

```go
func PutAzureManagedIdentity(value StorageCredentialAzureManagedIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `PutAzureServicePrincipal` <a name="PutAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal"></a>

```go
func PutAzureServicePrincipal(value StorageCredentialAzureServicePrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `PutGcpServiceAccountKey` <a name="PutGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey"></a>

```go
func PutGcpServiceAccountKey(value StorageCredentialGcpServiceAccountKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `ResetAwsIamRole` <a name="ResetAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole"></a>

```go
func ResetAwsIamRole()
```

##### `ResetAzureManagedIdentity` <a name="ResetAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity"></a>

```go
func ResetAzureManagedIdentity()
```

##### `ResetAzureServicePrincipal` <a name="ResetAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal"></a>

```go
func ResetAzureServicePrincipal()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment"></a>

```go
func ResetComment()
```

##### `ResetGcpServiceAccountKey` <a name="ResetGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey"></a>

```go
func ResetGcpServiceAccountKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner"></a>

```go
func ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.StorageCredential_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.StorageCredential_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.StorageCredential_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput">AwsIamRoleInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput">AzureManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput">AzureServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput">GcpServiceAccountKeyInput</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsIamRole`<sup>Required</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole"></a>

```go
func AwsIamRole() StorageCredentialAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a>

---

##### `AzureManagedIdentity`<sup>Required</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity"></a>

```go
func AzureManagedIdentity() StorageCredentialAzureManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a>

---

##### `AzureServicePrincipal`<sup>Required</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal"></a>

```go
func AzureServicePrincipal() StorageCredentialAzureServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a>

---

##### `GcpServiceAccountKey`<sup>Required</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey"></a>

```go
func GcpServiceAccountKey() StorageCredentialGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a>

---

##### `AwsIamRoleInput`<sup>Optional</sup> <a name="AwsIamRoleInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput"></a>

```go
func AwsIamRoleInput() StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `AzureManagedIdentityInput`<sup>Optional</sup> <a name="AzureManagedIdentityInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput"></a>

```go
func AzureManagedIdentityInput() StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `AzureServicePrincipalInput`<sup>Optional</sup> <a name="AzureServicePrincipalInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput"></a>

```go
func AzureServicePrincipalInput() StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `GcpServiceAccountKeyInput`<sup>Optional</sup> <a name="GcpServiceAccountKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput"></a>

```go
func GcpServiceAccountKeyInput() StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageCredentialAwsIamRole <a name="StorageCredentialAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

&storagecredential.StorageCredentialAwsIamRole {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#role_arn StorageCredential#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#role_arn StorageCredential#role_arn}.

---

### StorageCredentialAzureManagedIdentity <a name="StorageCredentialAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

&storagecredential.StorageCredentialAzureManagedIdentity {
	AccessConnectorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId">AccessConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#access_connector_id StorageCredential#access_connector_id}. |

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId"></a>

```go
AccessConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#access_connector_id StorageCredential#access_connector_id}.

---

### StorageCredentialAzureServicePrincipal <a name="StorageCredentialAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

&storagecredential.StorageCredentialAzureServicePrincipal {
	ApplicationId: *string,
	ClientSecret: *string,
	DirectoryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#application_id StorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#client_secret StorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#directory_id StorageCredential#directory_id}. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#application_id StorageCredential#application_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#client_secret StorageCredential#client_secret}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#directory_id StorageCredential#directory_id}.

---

### StorageCredentialConfig <a name="StorageCredentialConfig" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

&storagecredential.StorageCredentialConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AwsIamRole: github.com/cdktf/cdktf-provider-databricks-go/databricks.storageCredential.StorageCredentialAwsIamRole,
	AzureManagedIdentity: github.com/cdktf/cdktf-provider-databricks-go/databricks.storageCredential.StorageCredentialAzureManagedIdentity,
	AzureServicePrincipal: github.com/cdktf/cdktf-provider-databricks-go/databricks.storageCredential.StorageCredentialAzureServicePrincipal,
	Comment: *string,
	GcpServiceAccountKey: github.com/cdktf/cdktf-provider-databricks-go/databricks.storageCredential.StorageCredentialGcpServiceAccountKey,
	Id: *string,
	MetastoreId: *string,
	Owner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole">AwsIamRole</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity">AzureManagedIdentity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal">AzureServicePrincipal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#name StorageCredential#name}.

---

##### `AwsIamRole`<sup>Optional</sup> <a name="AwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole"></a>

```go
AwsIamRole StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `AzureManagedIdentity`<sup>Optional</sup> <a name="AzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity"></a>

```go
AzureManagedIdentity StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `AzureServicePrincipal`<sup>Optional</sup> <a name="AzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal"></a>

```go
AzureServicePrincipal StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#comment StorageCredential#comment}.

---

##### `GcpServiceAccountKey`<sup>Optional</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey"></a>

```go
GcpServiceAccountKey StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#owner StorageCredential#owner}.

---

### StorageCredentialGcpServiceAccountKey <a name="StorageCredentialGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

&storagecredential.StorageCredentialGcpServiceAccountKey {
	Email: *string,
	PrivateKey: *string,
	PrivateKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#email StorageCredential#email}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key StorageCredential#private_key}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key_id StorageCredential#private_key_id}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#email StorageCredential#email}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key StorageCredential#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId"></a>

```go
PrivateKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/storage_credential#private_key_id StorageCredential#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageCredentialAwsIamRoleOutputReference <a name="StorageCredentialAwsIamRoleOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.NewStorageCredentialAwsIamRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageCredentialAwsIamRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---


### StorageCredentialAzureManagedIdentityOutputReference <a name="StorageCredentialAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.NewStorageCredentialAzureManagedIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageCredentialAzureManagedIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput">AccessConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId">AccessConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConnectorIdInput`<sup>Optional</sup> <a name="AccessConnectorIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```go
func AccessConnectorIdInput() *string
```

- *Type:* *string

---

##### `AccessConnectorId`<sup>Required</sup> <a name="AccessConnectorId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```go
func AccessConnectorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---


### StorageCredentialAzureServicePrincipalOutputReference <a name="StorageCredentialAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.NewStorageCredentialAzureServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageCredentialAzureServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---


### StorageCredentialGcpServiceAccountKeyOutputReference <a name="StorageCredentialGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/storagecredential"

storagecredential.NewStorageCredentialGcpServiceAccountKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageCredentialGcpServiceAccountKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId">PrivateKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```go
func PrivateKeyIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```go
func PrivateKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---


