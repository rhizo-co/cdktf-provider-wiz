# `wiz_integration_jira`

Refer to the Terraform Registory for docs: [`wiz_integration_jira`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira).

# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="rhizo-co-terraform-provider-wiz.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira wiz_integration_jira}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationjira"

integrationjira.NewIntegrationJira(scope Construct, id *string, config IntegrationJiraConfig) IntegrationJira
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls">ResetJiraAllowInsecureTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey">ResetJiraClientCertificateAndPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem">ResetJiraIsOnPrem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword">ResetJiraPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat">ResetJiraPat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa">ResetJiraServerCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType">ResetJiraServerType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername">ResetJiraUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetJiraAllowInsecureTls` <a name="ResetJiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls"></a>

```go
func ResetJiraAllowInsecureTls()
```

##### `ResetJiraClientCertificateAndPrivateKey` <a name="ResetJiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey"></a>

```go
func ResetJiraClientCertificateAndPrivateKey()
```

##### `ResetJiraIsOnPrem` <a name="ResetJiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem"></a>

```go
func ResetJiraIsOnPrem()
```

##### `ResetJiraPassword` <a name="ResetJiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword"></a>

```go
func ResetJiraPassword()
```

##### `ResetJiraPat` <a name="ResetJiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat"></a>

```go
func ResetJiraPat()
```

##### `ResetJiraServerCa` <a name="ResetJiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa"></a>

```go
func ResetJiraServerCa()
```

##### `ResetJiraServerType` <a name="ResetJiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType"></a>

```go
func ResetJiraServerType()
```

##### `ResetJiraUsername` <a name="ResetJiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername"></a>

```go
func ResetJiraUsername()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope"></a>

```go
func ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationjira"

integrationjira.IntegrationJira_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationjira"

integrationjira.IntegrationJira_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationjira"

integrationjira.IntegrationJira_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput">JiraAllowInsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput">JiraClientCertificateAndPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput">JiraIsOnPremInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput">JiraPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput">JiraPatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput">JiraServerCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput">JiraServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput">JiraUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput">JiraUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls">JiraAllowInsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey">JiraClientCertificateAndPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem">JiraIsOnPrem</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword">JiraPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat">JiraPat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa">JiraServerCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType">JiraServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl">JiraUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername">JiraUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JiraAllowInsecureTlsInput`<sup>Optional</sup> <a name="JiraAllowInsecureTlsInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput"></a>

```go
func JiraAllowInsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `JiraClientCertificateAndPrivateKeyInput`<sup>Optional</sup> <a name="JiraClientCertificateAndPrivateKeyInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput"></a>

```go
func JiraClientCertificateAndPrivateKeyInput() *string
```

- *Type:* *string

---

##### `JiraIsOnPremInput`<sup>Optional</sup> <a name="JiraIsOnPremInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput"></a>

```go
func JiraIsOnPremInput() interface{}
```

- *Type:* interface{}

---

##### `JiraPasswordInput`<sup>Optional</sup> <a name="JiraPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput"></a>

```go
func JiraPasswordInput() *string
```

- *Type:* *string

---

##### `JiraPatInput`<sup>Optional</sup> <a name="JiraPatInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput"></a>

```go
func JiraPatInput() *string
```

- *Type:* *string

---

##### `JiraServerCaInput`<sup>Optional</sup> <a name="JiraServerCaInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput"></a>

```go
func JiraServerCaInput() *string
```

- *Type:* *string

---

##### `JiraServerTypeInput`<sup>Optional</sup> <a name="JiraServerTypeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput"></a>

```go
func JiraServerTypeInput() *string
```

- *Type:* *string

---

##### `JiraUrlInput`<sup>Optional</sup> <a name="JiraUrlInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput"></a>

```go
func JiraUrlInput() *string
```

- *Type:* *string

---

##### `JiraUsernameInput`<sup>Optional</sup> <a name="JiraUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput"></a>

```go
func JiraUsernameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `JiraAllowInsecureTls`<sup>Required</sup> <a name="JiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls"></a>

```go
func JiraAllowInsecureTls() interface{}
```

- *Type:* interface{}

---

##### `JiraClientCertificateAndPrivateKey`<sup>Required</sup> <a name="JiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey"></a>

```go
func JiraClientCertificateAndPrivateKey() *string
```

- *Type:* *string

---

##### `JiraIsOnPrem`<sup>Required</sup> <a name="JiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem"></a>

```go
func JiraIsOnPrem() interface{}
```

- *Type:* interface{}

---

##### `JiraPassword`<sup>Required</sup> <a name="JiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword"></a>

```go
func JiraPassword() *string
```

- *Type:* *string

---

##### `JiraPat`<sup>Required</sup> <a name="JiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat"></a>

```go
func JiraPat() *string
```

- *Type:* *string

---

##### `JiraServerCa`<sup>Required</sup> <a name="JiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa"></a>

```go
func JiraServerCa() *string
```

- *Type:* *string

---

##### `JiraServerType`<sup>Required</sup> <a name="JiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType"></a>

```go
func JiraServerType() *string
```

- *Type:* *string

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl"></a>

```go
func JiraUrl() *string
```

- *Type:* *string

---

##### `JiraUsername`<sup>Required</sup> <a name="JiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername"></a>

```go
func JiraUsername() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-wiz-go/wiz/integrationjira"

&integrationjira.IntegrationJiraConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JiraUrl: *string,
	Name: *string,
	JiraAllowInsecureTls: interface{},
	JiraClientCertificateAndPrivateKey: *string,
	JiraIsOnPrem: interface{},
	JiraPassword: *string,
	JiraPat: *string,
	JiraServerCa: *string,
	JiraServerType: *string,
	JiraUsername: *string,
	ProjectId: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl">JiraUrl</a></code> | <code>*string</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name">Name</a></code> | <code>*string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls">JiraAllowInsecureTls</a></code> | <code>interface{}</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey">JiraClientCertificateAndPrivateKey</a></code> | <code>*string</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem">JiraIsOnPrem</a></code> | <code>interface{}</code> | Whether Jira instance is on prem - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword">JiraPassword</a></code> | <code>*string</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat">JiraPat</a></code> | <code>*string</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa">JiraServerCa</a></code> | <code>*string</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType">JiraServerType</a></code> | <code>*string</code> | Jira server type - Defaults to `{{`CLOUD`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername">JiraUsername</a></code> | <code>*string</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope">Scope</a></code> | <code>*string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl"></a>

```go
JiraUrl *string
```

- *Type:* *string

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `JiraAllowInsecureTls`<sup>Optional</sup> <a name="JiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls"></a>

```go
JiraAllowInsecureTls interface{}
```

- *Type:* interface{}

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `JiraClientCertificateAndPrivateKey`<sup>Optional</sup> <a name="JiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey"></a>

```go
JiraClientCertificateAndPrivateKey *string
```

- *Type:* *string

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `JiraIsOnPrem`<sup>Optional</sup> <a name="JiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem"></a>

```go
JiraIsOnPrem interface{}
```

- *Type:* interface{}

Whether Jira instance is on prem - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `JiraPassword`<sup>Optional</sup> <a name="JiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword"></a>

```go
JiraPassword *string
```

- *Type:* *string

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `JiraPat`<sup>Optional</sup> <a name="JiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat"></a>

```go
JiraPat *string
```

- *Type:* *string

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `JiraServerCa`<sup>Optional</sup> <a name="JiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa"></a>

```go
JiraServerCa *string
```

- *Type:* *string

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `JiraServerType`<sup>Optional</sup> <a name="JiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType"></a>

```go
JiraServerType *string
```

- *Type:* *string

Jira server type - Defaults to `{{`CLOUD`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `JiraUsername`<sup>Optional</sup> <a name="JiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername"></a>

```go
JiraUsername *string
```

- *Type:* *string

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.

* Allowed values:

  * Selected Project
  * All Resources
  * All Resources, Restrict this Integration to global roles only
* Defaults to `{{`All Resources, Restrict this Integration to global roles only`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#scope IntegrationJira#scope}

---



