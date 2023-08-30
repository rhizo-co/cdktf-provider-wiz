# `wiz_cloud_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations).

# `cloudConfigRuleAssociations` Submodule <a name="`cloudConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRuleAssociations <a name="CloudConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule_associations.CloudConfigRuleAssociations;

CloudConfigRuleAssociations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudConfigRuleIds(java.util.List<java.lang.String>)
    .securitySubCategoryIds(java.util.List<java.lang.String>)
//  .details(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.cloudConfigRuleIds">cloudConfigRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>java.util.List<java.lang.String></code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.details">details</a></code> | <code>java.lang.String</code> | Details of the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudConfigRuleIds`<sup>Required</sup> <a name="cloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.cloudConfigRuleIds"></a>

- *Type:* java.util.List<java.lang.String>

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds"></a>

- *Type:* java.util.List<java.lang.String>

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.details"></a>

- *Type:* java.lang.String

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails">resetDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDetails` <a name="resetDetails" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails"></a>

```java
public void resetDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule_associations.CloudConfigRuleAssociations;

CloudConfigRuleAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule_associations.CloudConfigRuleAssociations;

CloudConfigRuleAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule_associations.CloudConfigRuleAssociations;

CloudConfigRuleAssociations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput">cloudConfigRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput">detailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput">securitySubCategoryIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds">cloudConfigRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cloudConfigRuleIdsInput`<sup>Optional</sup> <a name="cloudConfigRuleIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getCloudConfigRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput"></a>

```java
public java.lang.String getDetailsInput();
```

- *Type:* java.lang.String

---

##### `securitySubCategoryIdsInput`<sup>Optional</sup> <a name="securitySubCategoryIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecuritySubCategoryIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudConfigRuleIds`<sup>Required</sup> <a name="cloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds"></a>

```java
public java.util.List<java.lang.String> getCloudConfigRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds"></a>

```java
public java.util.List<java.lang.String> getSecuritySubCategoryIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleAssociationsConfig <a name="CloudConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule_associations.CloudConfigRuleAssociationsConfig;

CloudConfigRuleAssociationsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cloudConfigRuleIds(java.util.List<java.lang.String>)
    .securitySubCategoryIds(java.util.List<java.lang.String>)
//  .details(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds">cloudConfigRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>java.util.List<java.lang.String></code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details">details</a></code> | <code>java.lang.String</code> | Details of the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudConfigRuleIds`<sup>Required</sup> <a name="cloudConfigRuleIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds"></a>

```java
public java.util.List<java.lang.String> getCloudConfigRuleIds();
```

- *Type:* java.util.List<java.lang.String>

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```java
public java.util.List<java.lang.String> getSecuritySubCategoryIds();
```

- *Type:* java.util.List<java.lang.String>

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---



