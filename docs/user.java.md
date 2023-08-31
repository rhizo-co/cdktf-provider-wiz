# `wiz_user`

Refer to the Terraform Registory for docs: [`wiz_user`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="rhizo-co-terraform-provider-wiz.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="rhizo-co-terraform-provider-wiz.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user wiz_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.user.User;

User.Builder.create(Construct scope, java.lang.String id)
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
    .email(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .assignedProjectIds(java.util.List<java.lang.String>)
//  .sendEmailInvite(java.lang.Boolean)
//  .sendEmailInvite(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The user email address. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Whether the project is archived/inactive. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.assignedProjectIds">assignedProjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Assigned Project Identifiers. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.sendEmailInvite">sendEmailInvite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send email invite? - Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The user email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#email User#email}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#name User#name}

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Whether the project is archived/inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#role User#role}

---

##### `assignedProjectIds`<sup>Optional</sup> <a name="assignedProjectIds" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.assignedProjectIds"></a>

- *Type:* java.util.List<java.lang.String>

Assigned Project Identifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#assigned_project_ids User#assigned_project_ids}

---

##### `sendEmailInvite`<sup>Optional</sup> <a name="sendEmailInvite" id="rhizo-co-terraform-provider-wiz.user.User.Initializer.parameter.sendEmailInvite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send email invite? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#send_email_invite User#send_email_invite}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.resetAssignedProjectIds">resetAssignedProjectIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.resetSendEmailInvite">resetSendEmailInvite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssignedProjectIds` <a name="resetAssignedProjectIds" id="rhizo-co-terraform-provider-wiz.user.User.resetAssignedProjectIds"></a>

```java
public void resetAssignedProjectIds()
```

##### `resetSendEmailInvite` <a name="resetSendEmailInvite" id="rhizo-co-terraform-provider-wiz.user.User.resetSendEmailInvite"></a>

```java
public void resetSendEmailInvite()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.user.User;

User.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.user.User.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.assignedProjectIdsInput">assignedProjectIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.sendEmailInviteInput">sendEmailInviteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.assignedProjectIds">assignedProjectIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.sendEmailInvite">sendEmailInvite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `assignedProjectIdsInput`<sup>Optional</sup> <a name="assignedProjectIdsInput" id="rhizo-co-terraform-provider-wiz.user.User.property.assignedProjectIdsInput"></a>

```java
public java.util.List<java.lang.String> getAssignedProjectIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-wiz.user.User.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.user.User.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-wiz.user.User.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sendEmailInviteInput`<sup>Optional</sup> <a name="sendEmailInviteInput" id="rhizo-co-terraform-provider-wiz.user.User.property.sendEmailInviteInput"></a>

```java
public java.lang.Object getSendEmailInviteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignedProjectIds`<sup>Required</sup> <a name="assignedProjectIds" id="rhizo-co-terraform-provider-wiz.user.User.property.assignedProjectIds"></a>

```java
public java.util.List<java.lang.String> getAssignedProjectIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.user.User.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.user.User.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.user.User.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sendEmailInvite`<sup>Required</sup> <a name="sendEmailInvite" id="rhizo-co-terraform-provider-wiz.user.User.property.sendEmailInvite"></a>

```java
public java.lang.Object getSendEmailInvite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="rhizo-co-terraform-provider-wiz.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.user.UserConfig;

UserConfig.builder()
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
    .email(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .assignedProjectIds(java.util.List<java.lang.String>)
//  .sendEmailInvite(java.lang.Boolean)
//  .sendEmailInvite(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.email">email</a></code> | <code>java.lang.String</code> | The user email address. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.role">role</a></code> | <code>java.lang.String</code> | Whether the project is archived/inactive. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.assignedProjectIds">assignedProjectIds</a></code> | <code>java.util.List<java.lang.String></code> | Assigned Project Identifiers. |
| <code><a href="#rhizo-co-terraform-provider-wiz.user.UserConfig.property.sendEmailInvite">sendEmailInvite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send email invite? - Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The user email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#email User#email}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#name User#name}

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Whether the project is archived/inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#role User#role}

---

##### `assignedProjectIds`<sup>Optional</sup> <a name="assignedProjectIds" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.assignedProjectIds"></a>

```java
public java.util.List<java.lang.String> getAssignedProjectIds();
```

- *Type:* java.util.List<java.lang.String>

Assigned Project Identifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#assigned_project_ids User#assigned_project_ids}

---

##### `sendEmailInvite`<sup>Optional</sup> <a name="sendEmailInvite" id="rhizo-co-terraform-provider-wiz.user.UserConfig.property.sendEmailInvite"></a>

```java
public java.lang.Object getSendEmailInvite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send email invite? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/user#send_email_invite User#send_email_invite}

---



