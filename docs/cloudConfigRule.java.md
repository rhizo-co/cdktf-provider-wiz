# `cloudConfigRule` Submodule <a name="`cloudConfigRule` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRule <a name="CloudConfigRule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule wiz_cloud_config_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRule;

CloudConfigRule.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .name(java.lang.String)
    .remediationInstructions(java.lang.String)
    .targetNativeTypes(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .functionAsControl(java.lang.Boolean)
//  .functionAsControl(IResolvable)
//  .iacMatchers(IResolvable)
//  .iacMatchers(java.util.List<CloudConfigRuleIacMatchers>)
//  .opaPolicy(java.lang.String)
//  .scopeAccountIds(java.util.List<java.lang.String>)
//  .severity(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.remediationInstructions">remediationInstructions</a></code> | <code>java.lang.String</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.targetNativeTypes">targetNativeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable/disable this rule.     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.iacMatchers">iacMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>></code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.opaPolicy">opaPolicy</a></code> | <code>java.lang.String</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Severity that will be set for findings of this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.remediationInstructions"></a>

- *Type:* java.lang.String

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.targetNativeTypes"></a>

- *Type:* java.util.List<java.lang.String>

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable/disable this rule.     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.functionAsControl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `iacMatchers`<sup>Optional</sup> <a name="iacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.iacMatchers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>>

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `opaPolicy`<sup>Optional</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.opaPolicy"></a>

- *Type:* java.lang.String

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scopeAccountIds"></a>

- *Type:* java.util.List<java.lang.String>

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Severity that will be set for findings of this rule.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

  * Defaults to `MEDIUM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers">putIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl">resetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers">resetIacMatchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy">resetOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIacMatchers` <a name="putIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers"></a>

```java
public void putIacMatchers(IResolvable OR java.util.List<CloudConfigRuleIacMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFunctionAsControl` <a name="resetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl"></a>

```java
public void resetFunctionAsControl()
```

##### `resetIacMatchers` <a name="resetIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers"></a>

```java
public void resetIacMatchers()
```

##### `resetOpaPolicy` <a name="resetOpaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy"></a>

```java
public void resetOpaPolicy()
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds"></a>

```java
public void resetScopeAccountIds()
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity"></a>

```java
public void resetSeverity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRule;

CloudConfigRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRule;

CloudConfigRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRule;

CloudConfigRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRule;

CloudConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudConfigRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers">iacMatchers</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories">securitySubCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput">functionAsControlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput">iacMatchersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput">opaPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput">remediationInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput">targetNativeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy">opaPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions">remediationInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes">targetNativeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iacMatchers`<sup>Required</sup> <a name="iacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers"></a>

```java
public CloudConfigRuleIacMatchersList getIacMatchers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securitySubCategories`<sup>Required</sup> <a name="securitySubCategories" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories"></a>

```java
public java.util.List<java.lang.String> getSecuritySubCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionAsControlInput`<sup>Optional</sup> <a name="functionAsControlInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput"></a>

```java
public java.lang.Object getFunctionAsControlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iacMatchersInput`<sup>Optional</sup> <a name="iacMatchersInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput"></a>

```java
public java.lang.Object getIacMatchersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opaPolicyInput`<sup>Optional</sup> <a name="opaPolicyInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput"></a>

```java
public java.lang.String getOpaPolicyInput();
```

- *Type:* java.lang.String

---

##### `remediationInstructionsInput`<sup>Optional</sup> <a name="remediationInstructionsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput"></a>

```java
public java.lang.String getRemediationInstructionsInput();
```

- *Type:* java.lang.String

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `targetNativeTypesInput`<sup>Optional</sup> <a name="targetNativeTypesInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput"></a>

```java
public java.util.List<java.lang.String> getTargetNativeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl"></a>

```java
public java.lang.Object getFunctionAsControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opaPolicy`<sup>Required</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy"></a>

```java
public java.lang.String getOpaPolicy();
```

- *Type:* java.lang.String

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions"></a>

```java
public java.lang.String getRemediationInstructions();
```

- *Type:* java.lang.String

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes"></a>

```java
public java.util.List<java.lang.String> getTargetNativeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleConfig <a name="CloudConfigRuleConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRuleConfig;

CloudConfigRuleConfig.builder()
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
    .description(java.lang.String)
    .name(java.lang.String)
    .remediationInstructions(java.lang.String)
    .targetNativeTypes(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .functionAsControl(java.lang.Boolean)
//  .functionAsControl(IResolvable)
//  .iacMatchers(IResolvable)
//  .iacMatchers(java.util.List<CloudConfigRuleIacMatchers>)
//  .opaPolicy(java.lang.String)
//  .scopeAccountIds(java.util.List<java.lang.String>)
//  .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions">remediationInstructions</a></code> | <code>java.lang.String</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes">targetNativeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable/disable this rule.     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl">functionAsControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers">iacMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>></code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy">opaPolicy</a></code> | <code>java.lang.String</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Severity that will be set for findings of this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions"></a>

```java
public java.lang.String getRemediationInstructions();
```

- *Type:* java.lang.String

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes"></a>

```java
public java.util.List<java.lang.String> getTargetNativeTypes();
```

- *Type:* java.util.List<java.lang.String>

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable/disable this rule.     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl"></a>

```java
public java.lang.Object getFunctionAsControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `iacMatchers`<sup>Optional</sup> <a name="iacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers"></a>

```java
public java.lang.Object getIacMatchers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>>

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `opaPolicy`<sup>Optional</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy"></a>

```java
public java.lang.String getOpaPolicy();
```

- *Type:* java.lang.String

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.String> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Severity that will be set for findings of this rule.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

  * Defaults to `MEDIUM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

### CloudConfigRuleIacMatchers <a name="CloudConfigRuleIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRuleIacMatchers;

CloudConfigRuleIacMatchers.builder()
    .regoCode(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode">regoCode</a></code> | <code>java.lang.String</code> | Write code in the Rego query language. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type">type</a></code> | <code>java.lang.String</code> | The type of resource that will be evaluated by the Rego Code. |

---

##### `regoCode`<sup>Required</sup> <a name="regoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode"></a>

```java
public java.lang.String getRegoCode();
```

- *Type:* java.lang.String

Write code in the Rego query language.

This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of resource that will be evaluated by the Rego Code.

* Allowed values:
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#type CloudConfigRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigRuleIacMatchersList <a name="CloudConfigRuleIacMatchersList" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRuleIacMatchersList;

new CloudConfigRuleIacMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get"></a>

```java
public CloudConfigRuleIacMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>>

---


### CloudConfigRuleIacMatchersOutputReference <a name="CloudConfigRuleIacMatchersOutputReference" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.cloud_config_rule.CloudConfigRuleIacMatchersOutputReference;

new CloudConfigRuleIacMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput">regoCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode">regoCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regoCodeInput`<sup>Optional</sup> <a name="regoCodeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput"></a>

```java
public java.lang.String getRegoCodeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `regoCode`<sup>Required</sup> <a name="regoCode" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode"></a>

```java
public java.lang.String getRegoCode();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>

---



