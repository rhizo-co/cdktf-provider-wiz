# `wiz_saml_idp`

Refer to the Terraform Registory for docs: [`wiz_saml_idp`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="rhizo-co-terraform-provider-wiz.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp wiz_saml_idp}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdp;

SamlIdp.Builder.create(Construct scope, java.lang.String id)
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
    .certificate(java.lang.String)
    .loginUrl(java.lang.String)
    .name(java.lang.String)
//  .allowManualRoleOverride(java.lang.Boolean)
//  .allowManualRoleOverride(IResolvable)
//  .domains(java.util.List<java.lang.String>)
//  .groupMapping(IResolvable)
//  .groupMapping(java.util.List<SamlIdpGroupMapping>)
//  .issuerUrl(java.lang.String)
//  .logoutUrl(java.lang.String)
//  .mergeGroupsMappingByRole(java.lang.Boolean)
//  .mergeGroupsMappingByRole(IResolvable)
//  .useProviderManagedRoles(java.lang.Boolean)
//  .useProviderManagedRoles(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.allowManualRoleOverride">allowManualRoleOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.groupMapping">groupMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>></code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.mergeGroupsMappingByRole">mergeGroupsMappingByRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.useProviderManagedRoles">useProviderManagedRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.loginUrl"></a>

- *Type:* java.lang.String

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `allowManualRoleOverride`<sup>Optional</sup> <a name="allowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.allowManualRoleOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `groupMapping`<sup>Optional</sup> <a name="groupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.groupMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>>

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.issuerUrl"></a>

- *Type:* java.lang.String

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.logoutUrl"></a>

- *Type:* java.lang.String

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `mergeGroupsMappingByRole`<sup>Optional</sup> <a name="mergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.mergeGroupsMappingByRole"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `useProviderManagedRoles`<sup>Optional</sup> <a name="useProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.useProviderManagedRoles"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping">putGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride">resetAllowManualRoleOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping">resetGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl">resetIssuerUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole">resetMergeGroupsMappingByRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles">resetUseProviderManagedRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroupMapping` <a name="putGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping"></a>

```java
public void putGroupMapping(IResolvable OR java.util.List<SamlIdpGroupMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>>

---

##### `resetAllowManualRoleOverride` <a name="resetAllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride"></a>

```java
public void resetAllowManualRoleOverride()
```

##### `resetDomains` <a name="resetDomains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetGroupMapping` <a name="resetGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping"></a>

```java
public void resetGroupMapping()
```

##### `resetIssuerUrl` <a name="resetIssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl"></a>

```java
public void resetIssuerUrl()
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl"></a>

```java
public void resetLogoutUrl()
```

##### `resetMergeGroupsMappingByRole` <a name="resetMergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole"></a>

```java
public void resetMergeGroupsMappingByRole()
```

##### `resetUseProviderManagedRoles` <a name="resetUseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles"></a>

```java
public void resetUseProviderManagedRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdp;

SamlIdp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdp;

SamlIdp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdp;

SamlIdp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping">groupMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput">allowManualRoleOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput">groupMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput">issuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput">loginUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput">logoutUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput">mergeGroupsMappingByRoleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput">useProviderManagedRolesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride">allowManualRoleOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole">mergeGroupsMappingByRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles">useProviderManagedRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupMapping`<sup>Required</sup> <a name="groupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping"></a>

```java
public SamlIdpGroupMappingList getGroupMapping();
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `allowManualRoleOverrideInput`<sup>Optional</sup> <a name="allowManualRoleOverrideInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput"></a>

```java
public java.lang.Object getAllowManualRoleOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupMappingInput`<sup>Optional</sup> <a name="groupMappingInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput"></a>

```java
public java.lang.Object getGroupMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>>

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput"></a>

```java
public java.lang.String getIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput"></a>

```java
public java.lang.String getLoginUrlInput();
```

- *Type:* java.lang.String

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput"></a>

```java
public java.lang.String getLogoutUrlInput();
```

- *Type:* java.lang.String

---

##### `mergeGroupsMappingByRoleInput`<sup>Optional</sup> <a name="mergeGroupsMappingByRoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput"></a>

```java
public java.lang.Object getMergeGroupsMappingByRoleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `useProviderManagedRolesInput`<sup>Optional</sup> <a name="useProviderManagedRolesInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput"></a>

```java
public java.lang.Object getUseProviderManagedRolesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowManualRoleOverride`<sup>Required</sup> <a name="allowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride"></a>

```java
public java.lang.Object getAllowManualRoleOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

---

##### `mergeGroupsMappingByRole`<sup>Required</sup> <a name="mergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole"></a>

```java
public java.lang.Object getMergeGroupsMappingByRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `useProviderManagedRoles`<sup>Required</sup> <a name="useProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles"></a>

```java
public java.lang.Object getUseProviderManagedRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdpConfig;

SamlIdpConfig.builder()
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
    .certificate(java.lang.String)
    .loginUrl(java.lang.String)
    .name(java.lang.String)
//  .allowManualRoleOverride(java.lang.Boolean)
//  .allowManualRoleOverride(IResolvable)
//  .domains(java.util.List<java.lang.String>)
//  .groupMapping(IResolvable)
//  .groupMapping(java.util.List<SamlIdpGroupMapping>)
//  .issuerUrl(java.lang.String)
//  .logoutUrl(java.lang.String)
//  .mergeGroupsMappingByRole(java.lang.Boolean)
//  .mergeGroupsMappingByRole(IResolvable)
//  .useProviderManagedRoles(java.lang.Boolean)
//  .useProviderManagedRoles(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride">allowManualRoleOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping">groupMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>></code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole">mergeGroupsMappingByRole</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles">useProviderManagedRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `allowManualRoleOverride`<sup>Optional</sup> <a name="allowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride"></a>

```java
public java.lang.Object getAllowManualRoleOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `groupMapping`<sup>Optional</sup> <a name="groupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping"></a>

```java
public java.lang.Object getGroupMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>>

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `mergeGroupsMappingByRole`<sup>Optional</sup> <a name="mergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole"></a>

```java
public java.lang.Object getMergeGroupsMappingByRole();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `useProviderManagedRoles`<sup>Optional</sup> <a name="useProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles"></a>

```java
public java.lang.Object getUseProviderManagedRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

### SamlIdpGroupMapping <a name="SamlIdpGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdpGroupMapping;

SamlIdpGroupMapping.builder()
    .providerGroupId(java.lang.String)
    .role(java.lang.String)
//  .projects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId">providerGroupId</a></code> | <code>java.lang.String</code> | Provider group ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role">role</a></code> | <code>java.lang.String</code> | Wiz Role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | Project mapping. |

---

##### `providerGroupId`<sup>Required</sup> <a name="providerGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId"></a>

```java
public java.lang.String getProviderGroupId();
```

- *Type:* java.lang.String

Provider group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Wiz Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#role SamlIdp#role}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

Project mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#projects SamlIdp#projects}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlIdpGroupMappingList <a name="SamlIdpGroupMappingList" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdpGroupMappingList;

new SamlIdpGroupMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get"></a>

```java
public SamlIdpGroupMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>>

---


### SamlIdpGroupMappingOutputReference <a name="SamlIdpGroupMappingOutputReference" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.wiz.saml_idp.SamlIdpGroupMappingOutputReference;

new SamlIdpGroupMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjects` <a name="resetProjects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects"></a>

```java
public void resetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput">providerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId">providerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerGroupIdInput`<sup>Optional</sup> <a name="providerGroupIdInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput"></a>

```java
public java.lang.String getProviderGroupIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `projects`<sup>Required</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerGroupId`<sup>Required</sup> <a name="providerGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId"></a>

```java
public java.lang.String getProviderGroupId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>

---



