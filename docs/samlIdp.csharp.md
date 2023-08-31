# `wiz_saml_idp`

Refer to the Terraform Registory for docs: [`wiz_saml_idp`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="rhizo-co-terraform-provider-wiz.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp wiz_saml_idp}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new SamlIdp(Construct Scope, string Id, SamlIdpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig">SamlIdpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGroupMapping` <a name="PutGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping"></a>

```csharp
private void PutGroupMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowManualRoleOverride` <a name="ResetAllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride"></a>

```csharp
private void ResetAllowManualRoleOverride()
```

##### `ResetDomains` <a name="ResetDomains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetGroupMapping` <a name="ResetGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping"></a>

```csharp
private void ResetGroupMapping()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl"></a>

```csharp
private void ResetIssuerUrl()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl"></a>

```csharp
private void ResetLogoutUrl()
```

##### `ResetMergeGroupsMappingByRole` <a name="ResetMergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole"></a>

```csharp
private void ResetMergeGroupsMappingByRole()
```

##### `ResetUseProviderManagedRoles` <a name="ResetUseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles"></a>

```csharp
private void ResetUseProviderManagedRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

SamlIdp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

SamlIdp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

SamlIdp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping">GroupMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput">AllowManualRoleOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput">GroupMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput">LoginUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput">MergeGroupsMappingByRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput">UseProviderManagedRolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride">AllowManualRoleOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl">LoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole">MergeGroupsMappingByRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles">UseProviderManagedRoles</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GroupMapping`<sup>Required</sup> <a name="GroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping"></a>

```csharp
public SamlIdpGroupMappingList GroupMapping { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AllowManualRoleOverrideInput`<sup>Optional</sup> <a name="AllowManualRoleOverrideInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput"></a>

```csharp
public object AllowManualRoleOverrideInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `GroupMappingInput`<sup>Optional</sup> <a name="GroupMappingInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput"></a>

```csharp
public object GroupMappingInput { get; }
```

- *Type:* object

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput"></a>

```csharp
public string LoginUrlInput { get; }
```

- *Type:* string

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput"></a>

```csharp
public string LogoutUrlInput { get; }
```

- *Type:* string

---

##### `MergeGroupsMappingByRoleInput`<sup>Optional</sup> <a name="MergeGroupsMappingByRoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput"></a>

```csharp
public object MergeGroupsMappingByRoleInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UseProviderManagedRolesInput`<sup>Optional</sup> <a name="UseProviderManagedRolesInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput"></a>

```csharp
public object UseProviderManagedRolesInput { get; }
```

- *Type:* object

---

##### `AllowManualRoleOverride`<sup>Required</sup> <a name="AllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride"></a>

```csharp
public object AllowManualRoleOverride { get; }
```

- *Type:* object

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl"></a>

```csharp
public string LoginUrl { get; }
```

- *Type:* string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; }
```

- *Type:* string

---

##### `MergeGroupsMappingByRole`<sup>Required</sup> <a name="MergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole"></a>

```csharp
public object MergeGroupsMappingByRole { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UseProviderManagedRoles`<sup>Required</sup> <a name="UseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles"></a>

```csharp
public object UseProviderManagedRoles { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new SamlIdpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate,
    string LoginUrl,
    string Name,
    object AllowManualRoleOverride = null,
    string[] Domains = null,
    object GroupMapping = null,
    string IssuerUrl = null,
    string LogoutUrl = null,
    object MergeGroupsMappingByRole = null,
    object UseProviderManagedRoles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate">Certificate</a></code> | <code>string</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl">LoginUrl</a></code> | <code>string</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name">Name</a></code> | <code>string</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride">AllowManualRoleOverride</a></code> | <code>object</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains">Domains</a></code> | <code>string[]</code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping">GroupMapping</a></code> | <code>object</code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl">LogoutUrl</a></code> | <code>string</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole">MergeGroupsMappingByRole</a></code> | <code>object</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles">UseProviderManagedRoles</a></code> | <code>object</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl"></a>

```csharp
public string LoginUrl { get; set; }
```

- *Type:* string

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `AllowManualRoleOverride`<sup>Optional</sup> <a name="AllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride"></a>

```csharp
public object AllowManualRoleOverride { get; set; }
```

- *Type:* object

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `GroupMapping`<sup>Optional</sup> <a name="GroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping"></a>

```csharp
public object GroupMapping { get; set; }
```

- *Type:* object

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl"></a>

```csharp
public string LogoutUrl { get; set; }
```

- *Type:* string

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `MergeGroupsMappingByRole`<sup>Optional</sup> <a name="MergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole"></a>

```csharp
public object MergeGroupsMappingByRole { get; set; }
```

- *Type:* object

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `UseProviderManagedRoles`<sup>Optional</sup> <a name="UseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles"></a>

```csharp
public object UseProviderManagedRoles { get; set; }
```

- *Type:* object

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

### SamlIdpGroupMapping <a name="SamlIdpGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new SamlIdpGroupMapping {
    string ProviderGroupId,
    string Role,
    string[] Projects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId">ProviderGroupId</a></code> | <code>string</code> | Provider group ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role">Role</a></code> | <code>string</code> | Wiz Role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects">Projects</a></code> | <code>string[]</code> | Project mapping. |

---

##### `ProviderGroupId`<sup>Required</sup> <a name="ProviderGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId"></a>

```csharp
public string ProviderGroupId { get; set; }
```

- *Type:* string

Provider group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Wiz Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#role SamlIdp#role}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

Project mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#projects SamlIdp#projects}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlIdpGroupMappingList <a name="SamlIdpGroupMappingList" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new SamlIdpGroupMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get"></a>

```csharp
private SamlIdpGroupMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SamlIdpGroupMappingOutputReference <a name="SamlIdpGroupMappingOutputReference" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new SamlIdpGroupMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjects` <a name="ResetProjects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput">ProviderGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId">ProviderGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `ProviderGroupIdInput`<sup>Optional</sup> <a name="ProviderGroupIdInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput"></a>

```csharp
public string ProviderGroupIdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `ProviderGroupId`<sup>Required</sup> <a name="ProviderGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId"></a>

```csharp
public string ProviderGroupId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



