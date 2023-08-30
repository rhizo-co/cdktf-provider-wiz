# `wiz_integration_jira`

Refer to the Terraform Registory for docs: [`wiz_integration_jira`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira).

# `integrationJira` Submodule <a name="`integrationJira` Submodule" id="rhizo-co-terraform-provider-wiz.integrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJira <a name="IntegrationJira" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira wiz_integration_jira}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new IntegrationJira(Construct Scope, string Id, IntegrationJiraConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig">IntegrationJiraConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetJiraAllowInsecureTls` <a name="ResetJiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraAllowInsecureTls"></a>

```csharp
private void ResetJiraAllowInsecureTls()
```

##### `ResetJiraClientCertificateAndPrivateKey` <a name="ResetJiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraClientCertificateAndPrivateKey"></a>

```csharp
private void ResetJiraClientCertificateAndPrivateKey()
```

##### `ResetJiraIsOnPrem` <a name="ResetJiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraIsOnPrem"></a>

```csharp
private void ResetJiraIsOnPrem()
```

##### `ResetJiraPassword` <a name="ResetJiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPassword"></a>

```csharp
private void ResetJiraPassword()
```

##### `ResetJiraPat` <a name="ResetJiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraPat"></a>

```csharp
private void ResetJiraPat()
```

##### `ResetJiraServerCa` <a name="ResetJiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerCa"></a>

```csharp
private void ResetJiraServerCa()
```

##### `ResetJiraServerType` <a name="ResetJiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraServerType"></a>

```csharp
private void ResetJiraServerType()
```

##### `ResetJiraUsername` <a name="ResetJiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetJiraUsername"></a>

```csharp
private void ResetJiraUsername()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationJira.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationJira.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationJira.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput">JiraAllowInsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput">JiraClientCertificateAndPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput">JiraIsOnPremInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput">JiraPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput">JiraPatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput">JiraServerCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput">JiraServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput">JiraUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput">JiraUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls">JiraAllowInsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey">JiraClientCertificateAndPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem">JiraIsOnPrem</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword">JiraPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat">JiraPat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa">JiraServerCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType">JiraServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl">JiraUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername">JiraUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JiraAllowInsecureTlsInput`<sup>Optional</sup> <a name="JiraAllowInsecureTlsInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTlsInput"></a>

```csharp
public object JiraAllowInsecureTlsInput { get; }
```

- *Type:* object

---

##### `JiraClientCertificateAndPrivateKeyInput`<sup>Optional</sup> <a name="JiraClientCertificateAndPrivateKeyInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKeyInput"></a>

```csharp
public string JiraClientCertificateAndPrivateKeyInput { get; }
```

- *Type:* string

---

##### `JiraIsOnPremInput`<sup>Optional</sup> <a name="JiraIsOnPremInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPremInput"></a>

```csharp
public object JiraIsOnPremInput { get; }
```

- *Type:* object

---

##### `JiraPasswordInput`<sup>Optional</sup> <a name="JiraPasswordInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPasswordInput"></a>

```csharp
public string JiraPasswordInput { get; }
```

- *Type:* string

---

##### `JiraPatInput`<sup>Optional</sup> <a name="JiraPatInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPatInput"></a>

```csharp
public string JiraPatInput { get; }
```

- *Type:* string

---

##### `JiraServerCaInput`<sup>Optional</sup> <a name="JiraServerCaInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCaInput"></a>

```csharp
public string JiraServerCaInput { get; }
```

- *Type:* string

---

##### `JiraServerTypeInput`<sup>Optional</sup> <a name="JiraServerTypeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerTypeInput"></a>

```csharp
public string JiraServerTypeInput { get; }
```

- *Type:* string

---

##### `JiraUrlInput`<sup>Optional</sup> <a name="JiraUrlInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrlInput"></a>

```csharp
public string JiraUrlInput { get; }
```

- *Type:* string

---

##### `JiraUsernameInput`<sup>Optional</sup> <a name="JiraUsernameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsernameInput"></a>

```csharp
public string JiraUsernameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `JiraAllowInsecureTls`<sup>Required</sup> <a name="JiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraAllowInsecureTls"></a>

```csharp
public object JiraAllowInsecureTls { get; }
```

- *Type:* object

---

##### `JiraClientCertificateAndPrivateKey`<sup>Required</sup> <a name="JiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraClientCertificateAndPrivateKey"></a>

```csharp
public string JiraClientCertificateAndPrivateKey { get; }
```

- *Type:* string

---

##### `JiraIsOnPrem`<sup>Required</sup> <a name="JiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraIsOnPrem"></a>

```csharp
public object JiraIsOnPrem { get; }
```

- *Type:* object

---

##### `JiraPassword`<sup>Required</sup> <a name="JiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPassword"></a>

```csharp
public string JiraPassword { get; }
```

- *Type:* string

---

##### `JiraPat`<sup>Required</sup> <a name="JiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraPat"></a>

```csharp
public string JiraPat { get; }
```

- *Type:* string

---

##### `JiraServerCa`<sup>Required</sup> <a name="JiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerCa"></a>

```csharp
public string JiraServerCa { get; }
```

- *Type:* string

---

##### `JiraServerType`<sup>Required</sup> <a name="JiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraServerType"></a>

```csharp
public string JiraServerType { get; }
```

- *Type:* string

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUrl"></a>

```csharp
public string JiraUrl { get; }
```

- *Type:* string

---

##### `JiraUsername`<sup>Required</sup> <a name="JiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.jiraUsername"></a>

```csharp
public string JiraUsername { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJira.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJiraConfig <a name="IntegrationJiraConfig" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new IntegrationJiraConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JiraUrl,
    string Name,
    object JiraAllowInsecureTls = null,
    string JiraClientCertificateAndPrivateKey = null,
    object JiraIsOnPrem = null,
    string JiraPassword = null,
    string JiraPat = null,
    string JiraServerCa = null,
    string JiraServerType = null,
    string JiraUsername = null,
    string ProjectId = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl">JiraUrl</a></code> | <code>string</code> | Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name">Name</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls">JiraAllowInsecureTls</a></code> | <code>object</code> | Jira integration TLS setting. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey">JiraClientCertificateAndPrivateKey</a></code> | <code>string</code> | Jira PEM with client certificate and private key. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem">JiraIsOnPrem</a></code> | <code>object</code> | Whether Jira instance is on prem - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword">JiraPassword</a></code> | <code>string</code> | Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat">JiraPat</a></code> | <code>string</code> | Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa">JiraServerCa</a></code> | <code>string</code> | Jira server CA. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType">JiraServerType</a></code> | <code>string</code> | Jira server type - Defaults to `{{`CLOUD`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername">JiraUsername</a></code> | <code>string</code> | Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope">Scope</a></code> | <code>string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JiraUrl`<sup>Required</sup> <a name="JiraUrl" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUrl"></a>

```csharp
public string JiraUrl { get; set; }
```

- *Type:* string

Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#name IntegrationJira#name}

---

##### `JiraAllowInsecureTls`<sup>Optional</sup> <a name="JiraAllowInsecureTls" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraAllowInsecureTls"></a>

```csharp
public object JiraAllowInsecureTls { get; set; }
```

- *Type:* object

Jira integration TLS setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}

---

##### `JiraClientCertificateAndPrivateKey`<sup>Optional</sup> <a name="JiraClientCertificateAndPrivateKey" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraClientCertificateAndPrivateKey"></a>

```csharp
public string JiraClientCertificateAndPrivateKey { get; set; }
```

- *Type:* string

Jira PEM with client certificate and private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}

---

##### `JiraIsOnPrem`<sup>Optional</sup> <a name="JiraIsOnPrem" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraIsOnPrem"></a>

```csharp
public object JiraIsOnPrem { get; set; }
```

- *Type:* object

Whether Jira instance is on prem - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}

---

##### `JiraPassword`<sup>Optional</sup> <a name="JiraPassword" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPassword"></a>

```csharp
public string JiraPassword { get; set; }
```

- *Type:* string

Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}

---

##### `JiraPat`<sup>Optional</sup> <a name="JiraPat" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraPat"></a>

```csharp
public string JiraPat { get; set; }
```

- *Type:* string

Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}

---

##### `JiraServerCa`<sup>Optional</sup> <a name="JiraServerCa" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerCa"></a>

```csharp
public string JiraServerCa { get; set; }
```

- *Type:* string

Jira server CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}

---

##### `JiraServerType`<sup>Optional</sup> <a name="JiraServerType" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraServerType"></a>

```csharp
public string JiraServerType { get; set; }
```

- *Type:* string

Jira server type - Defaults to `{{`CLOUD`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}

---

##### `JiraUsername`<sup>Optional</sup> <a name="JiraUsername" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.jiraUsername"></a>

```csharp
public string JiraUsername { get; set; }
```

- *Type:* string

Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#project_id IntegrationJira#project_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationJira.IntegrationJiraConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project.

Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles.

* Allowed values:

  * Selected Project
  * All Resources
  * All Resources, Restrict this Integration to global roles only
* Defaults to `{{`All Resources, Restrict this Integration to global roles only`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_jira#scope IntegrationJira#scope}

---



