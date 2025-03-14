# `dataWizSubscriptionResourceGroups` Submodule <a name="`dataWizSubscriptionResourceGroups` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizSubscriptionResourceGroups <a name="DataWizSubscriptionResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroups;

DataWizSubscriptionResourceGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .first(java.lang.Number)
//  .relationshipType(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.first">first</a></code> | <code>java.lang.Number</code> | How many matches to return.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.relationshipType">relationshipType</a></code> | <code>java.lang.String</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Wiz subscription ID to search by. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.first"></a>

- *Type:* java.lang.Number

How many matches to return.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.relationshipType"></a>

- *Type:* java.lang.String

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:
  - ANY
  - ANY_OUTGOING
  - ACTING_AS
  - ADMINISTRATE
  - ALERTED_ON
  - ALLOWS
  - ALLOWS_ACCESS_TO
  - APPLIES_TO
  - ASSIGNED_TO
  - ATTACHED_TO
  - BEHIND
  - BOOTS
  - BUILT_FROM
  - CAUSES
  - COLLABORATES
  - CONNECTED_TO
  - CONTAINS
  - CONTAINS_DST_IP_RANGE
  - CONTAINS_DST_PORT_RANGE
  - CONTAINS_SRC_IP_RANGE
  - CONTAINS_SRC_PORT_RANGE
  - DENIES
  - DEPENDS_ON
  - DEPLOYED_TO
  - ENCRYPTS
  - ENCRYPTS_PARTITION
  - ENTITLES
  - EXCLUDES
  - EXPOSES
  - GOVERNS
  - HAS
  - HAS_BOUNDARY_POLICY
  - HAS_DATA_FINDING
  - HAS_DATA_INVENTORY
  - HAS_DATA_SCHEMA
  - HAS_DATA_STORE
  - HAS_ORGANIZATION_POLICY
  - HAS_PRINCIPAL_POLICY
  - HAS_RESOURCE_POLICY
  - HAS_SNAPSHOT
  - HAS_SOURCE
  - HAS_STANDARD_WEB_ACCESS_FROM
  - HAS_TECH
  - HOSTS
  - IGNORES
  - IMPLEMENTS
  - INCLUDES
  - INFECTS
  - INSIDE
  - INSTANCE_OF
  - INVOKES
  - LOGS_DATA_FOR
  - MANAGES
  - MOUNTS
  - OWNS
  - PART_OF
  - PEERED_TO
  - PERFORMED
  - PERFORMED_IMPERSONATED
  - PERMITS
  - POINTS_TO
  - PROTECTS
  - READS_DATA_FROM
  - REFERENCED_BY
  - REPLICA_OF
  - ROUTES_TRAFFIC_FROM
  - ROUTES_TRAFFIC_TO
  - RUNS
  - SCANNED
  - SEND_MESSAGES_TO
  - SERVES
  - STORES_DATA_IN
  - TRANSIT_PEERED_TO
  - USES
  - VALIDATES

  * Defaults to `CONTAINS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst"></a>

```java
public void resetFirst()
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType"></a>

```java
public void resetRelationshipType()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataWizSubscriptionResourceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroups;

DataWizSubscriptionResourceGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroups;

DataWizSubscriptionResourceGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroups;

DataWizSubscriptionResourceGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroups;

DataWizSubscriptionResourceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataWizSubscriptionResourceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataWizSubscriptionResourceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataWizSubscriptionResourceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataWizSubscriptionResourceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataWizSubscriptionResourceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups">resourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput">firstInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first">first</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType">relationshipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroups`<sup>Required</sup> <a name="resourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups"></a>

```java
public DataWizSubscriptionResourceGroupsResourceGroupsList getResourceGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a>

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput"></a>

```java
public java.lang.Number getFirstInput();
```

- *Type:* java.lang.Number

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput"></a>

```java
public java.lang.String getRelationshipTypeInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType"></a>

```java
public java.lang.String getRelationshipType();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizSubscriptionResourceGroupsConfig <a name="DataWizSubscriptionResourceGroupsConfig" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroupsConfig;

DataWizSubscriptionResourceGroupsConfig.builder()
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
//  .first(java.lang.Number)
//  .relationshipType(java.lang.String)
//  .subscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first">first</a></code> | <code>java.lang.Number</code> | How many matches to return.     - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType">relationshipType</a></code> | <code>java.lang.String</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Wiz subscription ID to search by. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first"></a>

```java
public java.lang.Number getFirst();
```

- *Type:* java.lang.Number

How many matches to return.     - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType"></a>

```java
public java.lang.String getRelationshipType();
```

- *Type:* java.lang.String

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:
  - ANY
  - ANY_OUTGOING
  - ACTING_AS
  - ADMINISTRATE
  - ALERTED_ON
  - ALLOWS
  - ALLOWS_ACCESS_TO
  - APPLIES_TO
  - ASSIGNED_TO
  - ATTACHED_TO
  - BEHIND
  - BOOTS
  - BUILT_FROM
  - CAUSES
  - COLLABORATES
  - CONNECTED_TO
  - CONTAINS
  - CONTAINS_DST_IP_RANGE
  - CONTAINS_DST_PORT_RANGE
  - CONTAINS_SRC_IP_RANGE
  - CONTAINS_SRC_PORT_RANGE
  - DENIES
  - DEPENDS_ON
  - DEPLOYED_TO
  - ENCRYPTS
  - ENCRYPTS_PARTITION
  - ENTITLES
  - EXCLUDES
  - EXPOSES
  - GOVERNS
  - HAS
  - HAS_BOUNDARY_POLICY
  - HAS_DATA_FINDING
  - HAS_DATA_INVENTORY
  - HAS_DATA_SCHEMA
  - HAS_DATA_STORE
  - HAS_ORGANIZATION_POLICY
  - HAS_PRINCIPAL_POLICY
  - HAS_RESOURCE_POLICY
  - HAS_SNAPSHOT
  - HAS_SOURCE
  - HAS_STANDARD_WEB_ACCESS_FROM
  - HAS_TECH
  - HOSTS
  - IGNORES
  - IMPLEMENTS
  - INCLUDES
  - INFECTS
  - INSIDE
  - INSTANCE_OF
  - INVOKES
  - LOGS_DATA_FOR
  - MANAGES
  - MOUNTS
  - OWNS
  - PART_OF
  - PEERED_TO
  - PERFORMED
  - PERFORMED_IMPERSONATED
  - PERMITS
  - POINTS_TO
  - PROTECTS
  - READS_DATA_FROM
  - REFERENCED_BY
  - REPLICA_OF
  - ROUTES_TRAFFIC_FROM
  - ROUTES_TRAFFIC_TO
  - RUNS
  - SCANNED
  - SEND_MESSAGES_TO
  - SERVES
  - STORES_DATA_IN
  - TRANSIT_PEERED_TO
  - USES
  - VALIDATES

  * Defaults to `CONTAINS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

### DataWizSubscriptionResourceGroupsResourceGroups <a name="DataWizSubscriptionResourceGroupsResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroupsResourceGroups;

DataWizSubscriptionResourceGroupsResourceGroups.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizSubscriptionResourceGroupsResourceGroupsList <a name="DataWizSubscriptionResourceGroupsResourceGroupsList" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroupsResourceGroupsList;

new DataWizSubscriptionResourceGroupsResourceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get"></a>

```java
public DataWizSubscriptionResourceGroupsResourceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataWizSubscriptionResourceGroupsResourceGroupsOutputReference <a name="DataWizSubscriptionResourceGroupsResourceGroupsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.data_wiz_subscription_resource_groups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference;

new DataWizSubscriptionResourceGroupsResourceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue"></a>

```java
public DataWizSubscriptionResourceGroupsResourceGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a>

---



