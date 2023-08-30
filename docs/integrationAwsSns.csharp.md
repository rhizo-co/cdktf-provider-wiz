# `wiz_integration_aws_sns`

Refer to the Terraform Registory for docs: [`wiz_integration_aws_sns`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns).

# `integrationAwsSns` Submodule <a name="`integrationAwsSns` Submodule" id="rhizo-co-terraform-provider-wiz.integrationAwsSns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsSns <a name="IntegrationAwsSns" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns wiz_integration_aws_sns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new IntegrationAwsSns(Construct Scope, string Id, IntegrationAwsSnsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig">IntegrationAwsSnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId">ResetAwsSnsConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn">ResetAwsSnsCustomerRoleArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn">ResetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAwsSnsConnectorId` <a name="ResetAwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsConnectorId"></a>

```csharp
private void ResetAwsSnsConnectorId()
```

##### `ResetAwsSnsCustomerRoleArn` <a name="ResetAwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsCustomerRoleArn"></a>

```csharp
private void ResetAwsSnsCustomerRoleArn()
```

##### `ResetAwsSnsTopicArn` <a name="ResetAwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetAwsSnsTopicArn"></a>

```csharp
private void ResetAwsSnsTopicArn()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationAwsSns.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationAwsSns.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

IntegrationAwsSns.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput">AwsSnsAccessMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput">AwsSnsConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput">AwsSnsCustomerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput">AwsSnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod">AwsSnsAccessMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId">AwsSnsConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn">AwsSnsCustomerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AwsSnsAccessMethodInput`<sup>Optional</sup> <a name="AwsSnsAccessMethodInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethodInput"></a>

```csharp
public string AwsSnsAccessMethodInput { get; }
```

- *Type:* string

---

##### `AwsSnsConnectorIdInput`<sup>Optional</sup> <a name="AwsSnsConnectorIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorIdInput"></a>

```csharp
public string AwsSnsConnectorIdInput { get; }
```

- *Type:* string

---

##### `AwsSnsCustomerRoleArnInput`<sup>Optional</sup> <a name="AwsSnsCustomerRoleArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArnInput"></a>

```csharp
public string AwsSnsCustomerRoleArnInput { get; }
```

- *Type:* string

---

##### `AwsSnsTopicArnInput`<sup>Optional</sup> <a name="AwsSnsTopicArnInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArnInput"></a>

```csharp
public string AwsSnsTopicArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `AwsSnsAccessMethod`<sup>Required</sup> <a name="AwsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsAccessMethod"></a>

```csharp
public string AwsSnsAccessMethod { get; }
```

- *Type:* string

---

##### `AwsSnsConnectorId`<sup>Required</sup> <a name="AwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsConnectorId"></a>

```csharp
public string AwsSnsConnectorId { get; }
```

- *Type:* string

---

##### `AwsSnsCustomerRoleArn`<sup>Required</sup> <a name="AwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsCustomerRoleArn"></a>

```csharp
public string AwsSnsCustomerRoleArn { get; }
```

- *Type:* string

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.awsSnsTopicArn"></a>

```csharp
public string AwsSnsTopicArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSns.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsSnsConfig <a name="IntegrationAwsSnsConfig" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Wiz;

new IntegrationAwsSnsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwsSnsAccessMethod,
    string Name,
    string AwsSnsConnectorId = null,
    string AwsSnsCustomerRoleArn = null,
    string AwsSnsTopicArn = null,
    string ProjectId = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod">AwsSnsAccessMethod</a></code> | <code>string</code> | The access method this integration should use. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name">Name</a></code> | <code>string</code> | The name of the integration. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId">AwsSnsConnectorId</a></code> | <code>string</code> | Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn">AwsSnsCustomerRoleArn</a></code> | <code>string</code> | Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID). |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>string</code> | The SNS Topic Arn. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project this action is scoped to. |
| <code><a href="#rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope">Scope</a></code> | <code>string</code> | Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwsSnsAccessMethod`<sup>Required</sup> <a name="AwsSnsAccessMethod" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsAccessMethod"></a>

```csharp
public string AwsSnsAccessMethod { get; set; }
```

- *Type:* string

The access method this integration should use.

* Allowed values:

  * ASSUME_CONNECTOR_ROLE
  * ASSUME_SPECIFIED_ROLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#aws_sns_access_method IntegrationAwsSns#aws_sns_access_method}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#name IntegrationAwsSns#name}

---

##### `AwsSnsConnectorId`<sup>Optional</sup> <a name="AwsSnsConnectorId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsConnectorId"></a>

```csharp
public string AwsSnsConnectorId { get; set; }
```

- *Type:* string

Required if and only if accessMethod is ASSUME_CONNECTOR_ROLE, this should be a valid existing AWS connector ID from which the role ARN will be taken.

* Conflicts with `[aws_sns_customer_role_arn]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#aws_sns_connector_id IntegrationAwsSns#aws_sns_connector_id}

---

##### `AwsSnsCustomerRoleArn`<sup>Optional</sup> <a name="AwsSnsCustomerRoleArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsCustomerRoleArn"></a>

```csharp
public string AwsSnsCustomerRoleArn { get; set; }
```

- *Type:* string

Required if and only if accessMethod is ASSUME_SPECIFIED_ROLE, this is the role that should be assumed, the ExternalID of the role must be your Wiz Tenant ID (a GUID).

* Conflicts with `[aws_sns_connector_id]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#aws_sns_customer_role_arn IntegrationAwsSns#aws_sns_customer_role_arn}

---

##### `AwsSnsTopicArn`<sup>Optional</sup> <a name="AwsSnsTopicArn" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.awsSnsTopicArn"></a>

```csharp
public string AwsSnsTopicArn { get; set; }
```

- *Type:* string

The SNS Topic Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#aws_sns_topic_arn IntegrationAwsSns#aws_sns_topic_arn}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project this action is scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#project_id IntegrationAwsSns#project_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-wiz.integrationAwsSns.IntegrationAwsSnsConfig.property.scope"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/integration_aws_sns#scope IntegrationAwsSns#scope}

---



