# `wiz_service_account`

Refer to the Terraform Registory for docs: [`wiz_service_account`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account).

# `serviceAccount` Submodule <a name="`serviceAccount` Submodule" id="rhizo-co-terraform-provider-wiz.serviceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccount <a name="ServiceAccount" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account wiz_service_account}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.service_account.ServiceAccount;

ServiceAccount.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .assignedProjects(java.util.List<java.lang.String>)
//  .recreateIfRotated(java.lang.Boolean)
//  .recreateIfRotated(IResolvable)
//  .scopes(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.assignedProjects">assignedProjects</a></code> | <code>java.util.List<java.lang.String></code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.recreateIfRotated">recreateIfRotated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `assignedProjects`<sup>Optional</sup> <a name="assignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.assignedProjects"></a>

- *Type:* java.util.List<java.lang.String>

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `recreateIfRotated`<sup>Optional</sup> <a name="recreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.recreateIfRotated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Scopes, required with THIRD_PARTY (GraphQL API type).

* Allowed values:

  * admin:all
  * admin:audit
  * admin:digital_trust_settings
  * admin:identity_providers
  * admin:projects
  * admin:reports
  * admin:security_settings
  * admin:users
  * create:action_templates
  * create:admission_controllers
  * create:all
  * create:automation_actions
  * create:automation_rules
  * create:cloud_configuration
  * create:cloud_event_rules
  * create:connectors
  * create:controls
  * create:host_configuration
  * create:integrations
  * create:outposts
  * create:reports
  * create:run_action
  * create:run_control
  * create:saved_cloud_event_filters
  * create:saved_graph_queries
  * create:scan_policies
  * create:security_frameworks
  * create:security_scans
  * create:service_accounts
  * create:service_tickets
  * delete:action_templates
  * delete:all
  * delete:automation_actions
  * delete:automation_rules
  * delete:cloud_configuration
  * delete:cloud_event_rules
  * delete:connectors
  * delete:controls
  * delete:host_configuration
  * delete:integrations
  * delete:outposts
  * delete:reports
  * delete:saved_cloud_event_filters
  * delete:saved_graph_queries
  * delete:scan_policies
  * delete:security_frameworks
  * delete:security_scans
  * delete:service_accounts
  * read:action_templates
  * read:admission_controllers
  * read:all
  * read:automation_actions
  * read:automation_rules
  * read:benchmarks
  * read:cloud_accounts
  * read:cloud_configuration
  * read:cloud_event_rules
  * read:cloud_events
  * read:connectors
  * read:controls
  * read:digital_trust_settings
  * read:host_configuration
  * read:integrations
  * read:inventory
  * read:issue_settings
  * read:issues
  * read:kubernetes_clusters
  * read:licenses
  * read:outposts
  * read:projects
  * read:reports
  * read:resources
  * read:saved_cloud_event_filters
  * read:saved_graph_queries
  * read:scan_policies
  * read:scanner_settings
  * read:security_frameworks
  * read:security_scans
  * read:security_settings
  * read:service_accounts
  * read:system_activities
  * read:users
  * read:vulnerabilities
  * update:admission_controllers
  * update:all
  * update:automation_actions
  * update:automation_rules
  * update:cloud_configuration
  * update:cloud_event_rules
  * update:connectors
  * update:controls
  * update:host_configuration
  * update:integrations
  * update:inventory
  * update:issue_settings
  * update:issues
  * update:outposts
  * update:reports
  * update:resources
  * update:saved_cloud_event_filters
  * update:saved_graph_queries
  * update:scan_policies
  * update:scanner_settings
  * update:security_frameworks
  * update:security_scans
  * update:service_accounts
  * update:vulnerabilities
  * write:all
  * write:automation_actions
  * write:automation_rules
  * write:cloud_configuration
  * write:cloud_event_rules
  * write:connectors
  * write:controls
  * write:host_configuration
  * write:issue_settings
  * write:issues
  * write:outposts
  * write:reports
  * write:saved_cloud_event_filters
  * write:saved_graph_queries
  * write:scan_policies
  * write:scanner_settings
  * write:security_frameworks
  * write:security_scans
  * write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

* Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects">resetAssignedProjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated">resetRecreateIfRotated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssignedProjects` <a name="resetAssignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects"></a>

```java
public void resetAssignedProjects()
```

##### `resetRecreateIfRotated` <a name="resetRecreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated"></a>

```java
public void resetRecreateIfRotated()
```

##### `resetScopes` <a name="resetScopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.service_account.ServiceAccount;

ServiceAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.service_account.ServiceAccount;

ServiceAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.service_account.ServiceAccount;

ServiceAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt">lastRotatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput">assignedProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput">recreateIfRotatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects">assignedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated">recreateIfRotated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastRotatedAt`<sup>Required</sup> <a name="lastRotatedAt" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt"></a>

```java
public java.lang.String getLastRotatedAt();
```

- *Type:* java.lang.String

---

##### `assignedProjectsInput`<sup>Optional</sup> <a name="assignedProjectsInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput"></a>

```java
public java.util.List<java.lang.String> getAssignedProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recreateIfRotatedInput`<sup>Optional</sup> <a name="recreateIfRotatedInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput"></a>

```java
public java.lang.Object getRecreateIfRotatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `assignedProjects`<sup>Required</sup> <a name="assignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects"></a>

```java
public java.util.List<java.lang.String> getAssignedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recreateIfRotated`<sup>Required</sup> <a name="recreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated"></a>

```java
public java.lang.Object getRecreateIfRotated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountConfig <a name="ServiceAccountConfig" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.service_account.ServiceAccountConfig;

ServiceAccountConfig.builder()
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
    .name(java.lang.String)
//  .assignedProjects(java.util.List<java.lang.String>)
//  .recreateIfRotated(java.lang.Boolean)
//  .recreateIfRotated(IResolvable)
//  .scopes(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects">assignedProjects</a></code> | <code>java.util.List<java.lang.String></code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated">recreateIfRotated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type">type</a></code> | <code>java.lang.String</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `assignedProjects`<sup>Optional</sup> <a name="assignedProjects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects"></a>

```java
public java.util.List<java.lang.String> getAssignedProjects();
```

- *Type:* java.util.List<java.lang.String>

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `recreateIfRotated`<sup>Optional</sup> <a name="recreateIfRotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated"></a>

```java
public java.lang.Object getRecreateIfRotated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Scopes, required with THIRD_PARTY (GraphQL API type).

* Allowed values:

  * admin:all
  * admin:audit
  * admin:digital_trust_settings
  * admin:identity_providers
  * admin:projects
  * admin:reports
  * admin:security_settings
  * admin:users
  * create:action_templates
  * create:admission_controllers
  * create:all
  * create:automation_actions
  * create:automation_rules
  * create:cloud_configuration
  * create:cloud_event_rules
  * create:connectors
  * create:controls
  * create:host_configuration
  * create:integrations
  * create:outposts
  * create:reports
  * create:run_action
  * create:run_control
  * create:saved_cloud_event_filters
  * create:saved_graph_queries
  * create:scan_policies
  * create:security_frameworks
  * create:security_scans
  * create:service_accounts
  * create:service_tickets
  * delete:action_templates
  * delete:all
  * delete:automation_actions
  * delete:automation_rules
  * delete:cloud_configuration
  * delete:cloud_event_rules
  * delete:connectors
  * delete:controls
  * delete:host_configuration
  * delete:integrations
  * delete:outposts
  * delete:reports
  * delete:saved_cloud_event_filters
  * delete:saved_graph_queries
  * delete:scan_policies
  * delete:security_frameworks
  * delete:security_scans
  * delete:service_accounts
  * read:action_templates
  * read:admission_controllers
  * read:all
  * read:automation_actions
  * read:automation_rules
  * read:benchmarks
  * read:cloud_accounts
  * read:cloud_configuration
  * read:cloud_event_rules
  * read:cloud_events
  * read:connectors
  * read:controls
  * read:digital_trust_settings
  * read:host_configuration
  * read:integrations
  * read:inventory
  * read:issue_settings
  * read:issues
  * read:kubernetes_clusters
  * read:licenses
  * read:outposts
  * read:projects
  * read:reports
  * read:resources
  * read:saved_cloud_event_filters
  * read:saved_graph_queries
  * read:scan_policies
  * read:scanner_settings
  * read:security_frameworks
  * read:security_scans
  * read:security_settings
  * read:service_accounts
  * read:system_activities
  * read:users
  * read:vulnerabilities
  * update:admission_controllers
  * update:all
  * update:automation_actions
  * update:automation_rules
  * update:cloud_configuration
  * update:cloud_event_rules
  * update:connectors
  * update:controls
  * update:host_configuration
  * update:integrations
  * update:inventory
  * update:issue_settings
  * update:issues
  * update:outposts
  * update:reports
  * update:resources
  * update:saved_cloud_event_filters
  * update:saved_graph_queries
  * update:scan_policies
  * update:scanner_settings
  * update:security_frameworks
  * update:security_scans
  * update:service_accounts
  * update:vulnerabilities
  * write:all
  * write:automation_actions
  * write:automation_rules
  * write:cloud_configuration
  * write:cloud_event_rules
  * write:connectors
  * write:controls
  * write:host_configuration
  * write:issue_settings
  * write:issues
  * write:outposts
  * write:reports
  * write:saved_cloud_event_filters
  * write:saved_graph_queries
  * write:scan_policies
  * write:scanner_settings
  * write:security_frameworks
  * write:security_scans
  * write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

* Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---



