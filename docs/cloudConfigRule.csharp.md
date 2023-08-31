# `wiz_cloud_config_rule`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule).

# `cloudConfigRule` Submodule <a name="`cloudConfigRule` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRule <a name="CloudConfigRule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule wiz_cloud_config_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRule(Construct Scope, string Id, CloudConfigRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig">CloudConfigRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIacMatchers` <a name="PutIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers"></a>

```csharp
private void PutIacMatchers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFunctionAsControl` <a name="ResetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl"></a>

```csharp
private void ResetFunctionAsControl()
```

##### `ResetIacMatchers` <a name="ResetIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers"></a>

```csharp
private void ResetIacMatchers()
```

##### `ResetOpaPolicy` <a name="ResetOpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy"></a>

```csharp
private void ResetOpaPolicy()
```

##### `ResetScopeAccountIds` <a name="ResetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds"></a>

```csharp
private void ResetScopeAccountIds()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

CloudConfigRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers">IacMatchers</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories">SecuritySubCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput">FunctionAsControlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput">IacMatchersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput">OpaPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput">RemediationInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput">ScopeAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput">TargetNativeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl">FunctionAsControl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy">OpaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions">RemediationInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IacMatchers`<sup>Required</sup> <a name="IacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers"></a>

```csharp
public CloudConfigRuleIacMatchersList IacMatchers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecuritySubCategories`<sup>Required</sup> <a name="SecuritySubCategories" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories"></a>

```csharp
public string[] SecuritySubCategories { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FunctionAsControlInput`<sup>Optional</sup> <a name="FunctionAsControlInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput"></a>

```csharp
public object FunctionAsControlInput { get; }
```

- *Type:* object

---

##### `IacMatchersInput`<sup>Optional</sup> <a name="IacMatchersInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput"></a>

```csharp
public object IacMatchersInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpaPolicyInput`<sup>Optional</sup> <a name="OpaPolicyInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput"></a>

```csharp
public string OpaPolicyInput { get; }
```

- *Type:* string

---

##### `RemediationInstructionsInput`<sup>Optional</sup> <a name="RemediationInstructionsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput"></a>

```csharp
public string RemediationInstructionsInput { get; }
```

- *Type:* string

---

##### `ScopeAccountIdsInput`<sup>Optional</sup> <a name="ScopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput"></a>

```csharp
public string[] ScopeAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TargetNativeTypesInput`<sup>Optional</sup> <a name="TargetNativeTypesInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput"></a>

```csharp
public string[] TargetNativeTypesInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FunctionAsControl`<sup>Required</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl"></a>

```csharp
public object FunctionAsControl { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpaPolicy`<sup>Required</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy"></a>

```csharp
public string OpaPolicy { get; }
```

- *Type:* string

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions"></a>

```csharp
public string RemediationInstructions { get; }
```

- *Type:* string

---

##### `ScopeAccountIds`<sup>Required</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds"></a>

```csharp
public string[] ScopeAccountIds { get; }
```

- *Type:* string[]

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes"></a>

```csharp
public string[] TargetNativeTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleConfig <a name="CloudConfigRuleConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string Name,
    string RemediationInstructions,
    string[] TargetNativeTypes,
    object Enabled = null,
    object FunctionAsControl = null,
    object IacMatchers = null,
    string OpaPolicy = null,
    string[] ScopeAccountIds = null,
    string Severity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description">Description</a></code> | <code>string</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions">RemediationInstructions</a></code> | <code>string</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes">TargetNativeTypes</a></code> | <code>string[]</code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable/disable this rule. - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl">FunctionAsControl</a></code> | <code>object</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers">IacMatchers</a></code> | <code>object</code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy">OpaPolicy</a></code> | <code>string</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds">ScopeAccountIds</a></code> | <code>string[]</code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity">Severity</a></code> | <code>string</code> | Severity that will be set for findings of this rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `RemediationInstructions`<sup>Required</sup> <a name="RemediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions"></a>

```csharp
public string RemediationInstructions { get; set; }
```

- *Type:* string

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `TargetNativeTypes`<sup>Required</sup> <a name="TargetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes"></a>

```csharp
public string[] TargetNativeTypes { get; set; }
```

- *Type:* string[]

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable/disable this rule. - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `FunctionAsControl`<sup>Optional</sup> <a name="FunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl"></a>

```csharp
public object FunctionAsControl { get; set; }
```

- *Type:* object

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `IacMatchers`<sup>Optional</sup> <a name="IacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers"></a>

```csharp
public object IacMatchers { get; set; }
```

- *Type:* object

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `OpaPolicy`<sup>Optional</sup> <a name="OpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy"></a>

```csharp
public string OpaPolicy { get; set; }
```

- *Type:* string

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `ScopeAccountIds`<sup>Optional</sup> <a name="ScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds"></a>

```csharp
public string[] ScopeAccountIds { get; set; }
```

- *Type:* string[]

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

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

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleIacMatchers {
    string RegoCode,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode">RegoCode</a></code> | <code>string</code> | Write code in the Rego query language. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type">Type</a></code> | <code>string</code> | The type of resource that will be evaluated by the Rego Code. |

---

##### `RegoCode`<sup>Required</sup> <a name="RegoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode"></a>

```csharp
public string RegoCode { get; set; }
```

- *Type:* string

Write code in the Rego query language.

This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

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

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleIacMatchersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get"></a>

```csharp
private CloudConfigRuleIacMatchersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudConfigRuleIacMatchersOutputReference <a name="CloudConfigRuleIacMatchersOutputReference" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new CloudConfigRuleIacMatchersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput">RegoCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode">RegoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegoCodeInput`<sup>Optional</sup> <a name="RegoCodeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput"></a>

```csharp
public string RegoCodeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `RegoCode`<sup>Required</sup> <a name="RegoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode"></a>

```csharp
public string RegoCode { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



