# `wiz_saml_idp`

Refer to the Terraform Registory for docs: [`wiz_saml_idp`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="rhizo-co-terraform-provider-wiz.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp wiz_saml_idp}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  login_url: str,
  name: str,
  allow_manual_role_override: typing.Union[bool, IResolvable] = None,
  domains: typing.List[str] = None,
  group_mapping: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]] = None,
  issuer_url: str = None,
  logout_url: str = None,
  merge_groups_mapping_by_role: typing.Union[bool, IResolvable] = None,
  use_provider_managed_roles: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.loginUrl">login_url</a></code> | <code>str</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.name">name</a></code> | <code>str</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.allowManualRoleOverride">allow_manual_role_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.domains">domains</a></code> | <code>typing.List[str]</code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.groupMapping">group_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]</code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.issuerUrl">issuer_url</a></code> | <code>str</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.logoutUrl">logout_url</a></code> | <code>str</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.mergeGroupsMappingByRole">merge_groups_mapping_by_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.useProviderManagedRoles">use_provider_managed_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.certificate"></a>

- *Type:* str

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.loginUrl"></a>

- *Type:* str

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.name"></a>

- *Type:* str

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `allow_manual_role_override`<sup>Optional</sup> <a name="allow_manual_role_override" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.allowManualRoleOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.domains"></a>

- *Type:* typing.List[str]

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `group_mapping`<sup>Optional</sup> <a name="group_mapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.groupMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.issuerUrl"></a>

- *Type:* str

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `logout_url`<sup>Optional</sup> <a name="logout_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.logoutUrl"></a>

- *Type:* str

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `merge_groups_mapping_by_role`<sup>Optional</sup> <a name="merge_groups_mapping_by_role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.mergeGroupsMappingByRole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `use_provider_managed_roles`<sup>Optional</sup> <a name="use_provider_managed_roles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.useProviderManagedRoles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping">put_group_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride">reset_allow_manual_role_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping">reset_group_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl">reset_issuer_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl">reset_logout_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole">reset_merge_groups_mapping_by_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles">reset_use_provider_managed_roles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_group_mapping` <a name="put_group_mapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping"></a>

```python
def put_group_mapping(
  value: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]

---

##### `reset_allow_manual_role_override` <a name="reset_allow_manual_role_override" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride"></a>

```python
def reset_allow_manual_role_override() -> None
```

##### `reset_domains` <a name="reset_domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_group_mapping` <a name="reset_group_mapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping"></a>

```python
def reset_group_mapping() -> None
```

##### `reset_issuer_url` <a name="reset_issuer_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl"></a>

```python
def reset_issuer_url() -> None
```

##### `reset_logout_url` <a name="reset_logout_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl"></a>

```python
def reset_logout_url() -> None
```

##### `reset_merge_groups_mapping_by_role` <a name="reset_merge_groups_mapping_by_role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole"></a>

```python
def reset_merge_groups_mapping_by_role() -> None
```

##### `reset_use_provider_managed_roles` <a name="reset_use_provider_managed_roles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles"></a>

```python
def reset_use_provider_managed_roles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdp.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping">group_mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput">allow_manual_role_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput">group_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput">login_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput">logout_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput">merge_groups_mapping_by_role_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput">use_provider_managed_roles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride">allow_manual_role_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl">login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl">logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole">merge_groups_mapping_by_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles">use_provider_managed_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_mapping`<sup>Required</sup> <a name="group_mapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping"></a>

```python
group_mapping: SamlIdpGroupMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `allow_manual_role_override_input`<sup>Optional</sup> <a name="allow_manual_role_override_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput"></a>

```python
allow_manual_role_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_mapping_input`<sup>Optional</sup> <a name="group_mapping_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput"></a>

```python
group_mapping_input: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `login_url_input`<sup>Optional</sup> <a name="login_url_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput"></a>

```python
login_url_input: str
```

- *Type:* str

---

##### `logout_url_input`<sup>Optional</sup> <a name="logout_url_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput"></a>

```python
logout_url_input: str
```

- *Type:* str

---

##### `merge_groups_mapping_by_role_input`<sup>Optional</sup> <a name="merge_groups_mapping_by_role_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput"></a>

```python
merge_groups_mapping_by_role_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `use_provider_managed_roles_input`<sup>Optional</sup> <a name="use_provider_managed_roles_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput"></a>

```python
use_provider_managed_roles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_manual_role_override`<sup>Required</sup> <a name="allow_manual_role_override" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride"></a>

```python
allow_manual_role_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

---

##### `logout_url`<sup>Required</sup> <a name="logout_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

---

##### `merge_groups_mapping_by_role`<sup>Required</sup> <a name="merge_groups_mapping_by_role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole"></a>

```python
merge_groups_mapping_by_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `use_provider_managed_roles`<sup>Required</sup> <a name="use_provider_managed_roles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles"></a>

```python
use_provider_managed_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate: str,
  login_url: str,
  name: str,
  allow_manual_role_override: typing.Union[bool, IResolvable] = None,
  domains: typing.List[str] = None,
  group_mapping: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]] = None,
  issuer_url: str = None,
  logout_url: str = None,
  merge_groups_mapping_by_role: typing.Union[bool, IResolvable] = None,
  use_provider_managed_roles: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate">certificate</a></code> | <code>str</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl">login_url</a></code> | <code>str</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name">name</a></code> | <code>str</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride">allow_manual_role_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping">group_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]</code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl">logout_url</a></code> | <code>str</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole">merge_groups_mapping_by_role</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles">use_provider_managed_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `allow_manual_role_override`<sup>Optional</sup> <a name="allow_manual_role_override" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride"></a>

```python
allow_manual_role_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `group_mapping`<sup>Optional</sup> <a name="group_mapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping"></a>

```python
group_mapping: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `logout_url`<sup>Optional</sup> <a name="logout_url" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl"></a>

```python
logout_url: str
```

- *Type:* str

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `merge_groups_mapping_by_role`<sup>Optional</sup> <a name="merge_groups_mapping_by_role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole"></a>

```python
merge_groups_mapping_by_role: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `use_provider_managed_roles`<sup>Optional</sup> <a name="use_provider_managed_roles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles"></a>

```python
use_provider_managed_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

### SamlIdpGroupMapping <a name="SamlIdpGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdpGroupMapping(
  provider_group_id: str,
  role: str,
  projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId">provider_group_id</a></code> | <code>str</code> | Provider group ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role">role</a></code> | <code>str</code> | Wiz Role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects">projects</a></code> | <code>typing.List[str]</code> | Project mapping. |

---

##### `provider_group_id`<sup>Required</sup> <a name="provider_group_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId"></a>

```python
provider_group_id: str
```

- *Type:* str

Provider group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role"></a>

```python
role: str
```

- *Type:* str

Wiz Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#role SamlIdp#role}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

Project mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#projects SamlIdp#projects}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlIdpGroupMappingList <a name="SamlIdpGroupMappingList" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdpGroupMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SamlIdpGroupMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SamlIdpGroupMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]]

---


### SamlIdpGroupMappingOutputReference <a name="SamlIdpGroupMappingOutputReference" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import saml_idp

samlIdp.SamlIdpGroupMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects">reset_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_projects` <a name="reset_projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects"></a>

```python
def reset_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput">projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput">provider_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects">projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId">provider_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `projects_input`<sup>Optional</sup> <a name="projects_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput"></a>

```python
projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider_group_id_input`<sup>Optional</sup> <a name="provider_group_id_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput"></a>

```python
provider_group_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `projects`<sup>Required</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider_group_id`<sup>Required</sup> <a name="provider_group_id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId"></a>

```python
provider_group_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SamlIdpGroupMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>]

---



