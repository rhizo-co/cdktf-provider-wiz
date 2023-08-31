# `data_wiz_users`

Refer to the Terraform Registory for docs: [`data_wiz_users`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users).

# `dataWizUsers` Submodule <a name="`dataWizUsers` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizUsers <a name="DataWizUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users wiz_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_source: str = None,
  first: typing.Union[int, float] = None,
  max_pages: typing.Union[int, float] = None,
  roles: typing.List[str] = None,
  search: str = None,
  users: typing.Union[IResolvable, typing.List[DataWizUsersUsers]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.authenticationSource">authentication_source</a></code> | <code>str</code> | Authentication Source. - Allowed values:      - LEGACY     - MODERN. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return, maximum is `100` is per page. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles to filter by. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.search">search</a></code> | <code>str</code> | Free text search. Specify empty string to return all users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]</code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_source`<sup>Optional</sup> <a name="authentication_source" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.authenticationSource"></a>

- *Type:* str

Authentication Source. - Allowed values:      - LEGACY     - MODERN.

* Defaults to `{{`MODERN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#authentication_source DataWizUsers#authentication_source}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.first"></a>

- *Type:* typing.Union[int, float]

How many matches to return, maximum is `100` is per page. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#first DataWizUsers#first}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.maxPages"></a>

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#max_pages DataWizUsers#max_pages}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

List of roles to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#roles DataWizUsers#roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.search"></a>

- *Type:* str

Free text search. Specify empty string to return all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#search DataWizUsers#search}

---

##### `users`<sup>Optional</sup> <a name="users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#users DataWizUsers#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetAuthenticationSource">reset_authentication_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetMaxPages">reset_max_pages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_users` <a name="put_users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[DataWizUsersUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]

---

##### `reset_authentication_source` <a name="reset_authentication_source" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetAuthenticationSource"></a>

```python
def reset_authentication_source() -> None
```

##### `reset_first` <a name="reset_first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_max_pages` <a name="reset_max_pages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetMaxPages"></a>

```python
def reset_max_pages() -> None
```

##### `reset_roles` <a name="reset_roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_search` <a name="reset_search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_users` <a name="reset_users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.users">users</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList">DataWizUsersUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSourceInput">authentication_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPagesInput">max_pages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSource">authentication_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.search">search</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `users`<sup>Required</sup> <a name="users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.users"></a>

```python
users: DataWizUsersUsersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList">DataWizUsersUsersList</a>

---

##### `authentication_source_input`<sup>Optional</sup> <a name="authentication_source_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSourceInput"></a>

```python
authentication_source_input: str
```

- *Type:* str

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pages_input`<sup>Optional</sup> <a name="max_pages_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPagesInput"></a>

```python
max_pages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[DataWizUsersUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]

---

##### `authentication_source`<sup>Required</sup> <a name="authentication_source" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.authenticationSource"></a>

```python
authentication_source: str
```

- *Type:* str

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pages`<sup>Required</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.search"></a>

```python
search: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizUsersConfig <a name="DataWizUsersConfig" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_source: str = None,
  first: typing.Union[int, float] = None,
  max_pages: typing.Union[int, float] = None,
  roles: typing.List[str] = None,
  search: str = None,
  users: typing.Union[IResolvable, typing.List[DataWizUsersUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.authenticationSource">authentication_source</a></code> | <code>str</code> | Authentication Source. - Allowed values:      - LEGACY     - MODERN. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return, maximum is `100` is per page. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.maxPages">max_pages</a></code> | <code>typing.Union[int, float]</code> | How many pages to return. 0 means all pages. - Defaults to `0`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles to filter by. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.search">search</a></code> | <code>str</code> | Free text search. Specify empty string to return all users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_source`<sup>Optional</sup> <a name="authentication_source" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.authenticationSource"></a>

```python
authentication_source: str
```

- *Type:* str

Authentication Source. - Allowed values:      - LEGACY     - MODERN.

* Defaults to `{{`MODERN`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#authentication_source DataWizUsers#authentication_source}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many matches to return, maximum is `100` is per page. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#first DataWizUsers#first}

---

##### `max_pages`<sup>Optional</sup> <a name="max_pages" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.maxPages"></a>

```python
max_pages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many pages to return. 0 means all pages. - Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#max_pages DataWizUsers#max_pages}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#roles DataWizUsers#roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Free text search. Specify empty string to return all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#search DataWizUsers#search}

---

##### `users`<sup>Optional</sup> <a name="users" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[DataWizUsersUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#users DataWizUsers#users}

---

### DataWizUsersUsers <a name="DataWizUsersUsers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsers(
  effective_role: typing.Union[IResolvable, typing.List[DataWizUsersUsersEffectiveRole]] = None,
  email: str = None,
  id: str = None,
  identity_provider: typing.Union[IResolvable, typing.List[DataWizUsersUsersIdentityProvider]] = None,
  identity_provider_type: str = None,
  is_suspended: typing.Union[bool, IResolvable] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.effectiveRole">effective_role</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]</code> | effective_role block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.email">email</a></code> | <code>str</code> | User email address. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.id">id</a></code> | <code>str</code> | Internal Wiz ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProvider">identity_provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]</code> | identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProviderType">identity_provider_type</a></code> | <code>str</code> | Identity Provider Type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.isSuspended">is_suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If user is suspended. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.name">name</a></code> | <code>str</code> | User email name. |

---

##### `effective_role`<sup>Optional</sup> <a name="effective_role" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.effectiveRole"></a>

```python
effective_role: typing.Union[IResolvable, typing.List[DataWizUsersUsersEffectiveRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]

effective_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#effective_role DataWizUsers#effective_role}

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.email"></a>

```python
email: str
```

- *Type:* str

User email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#email DataWizUsers#email}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.id"></a>

```python
id: str
```

- *Type:* str

Internal Wiz ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#id DataWizUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProvider"></a>

```python
identity_provider: typing.Union[IResolvable, typing.List[DataWizUsersUsersIdentityProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]

identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#identity_provider DataWizUsers#identity_provider}

---

##### `identity_provider_type`<sup>Optional</sup> <a name="identity_provider_type" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.identityProviderType"></a>

```python
identity_provider_type: str
```

- *Type:* str

Identity Provider Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#identity_provider_type DataWizUsers#identity_provider_type}

---

##### `is_suspended`<sup>Optional</sup> <a name="is_suspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.isSuspended"></a>

```python
is_suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If user is suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#is_suspended DataWizUsers#is_suspended}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers.property.name"></a>

```python
name: str
```

- *Type:* str

User email name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

### DataWizUsersUsersEffectiveRole <a name="DataWizUsersUsersEffectiveRole" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersEffectiveRole(
  id: str = None,
  name: str = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.id">id</a></code> | <code>str</code> | The role internal identifier. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.name">name</a></code> | <code>str</code> | The role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Permission Scopes. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.id"></a>

```python
id: str
```

- *Type:* str

The role internal identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#id DataWizUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.name"></a>

```python
name: str
```

- *Type:* str

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Permission Scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#scopes DataWizUsers#scopes}

---

### DataWizUsersUsersIdentityProvider <a name="DataWizUsersUsersIdentityProvider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersIdentityProvider(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.property.name">name</a></code> | <code>str</code> | The identity provider name. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider.property.name"></a>

```python
name: str
```

- *Type:* str

The identity provider name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/users#name DataWizUsers#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizUsersUsersEffectiveRoleList <a name="DataWizUsersUsersEffectiveRoleList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersEffectiveRoleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizUsersUsersEffectiveRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataWizUsersUsersEffectiveRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]

---


### DataWizUsersUsersEffectiveRoleOutputReference <a name="DataWizUsersUsersEffectiveRoleOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataWizUsersUsersEffectiveRole]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]

---


### DataWizUsersUsersIdentityProviderList <a name="DataWizUsersUsersIdentityProviderList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersIdentityProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizUsersUsersIdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataWizUsersUsersIdentityProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]

---


### DataWizUsersUsersIdentityProviderOutputReference <a name="DataWizUsersUsersIdentityProviderOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataWizUsersUsersIdentityProvider]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]

---


### DataWizUsersUsersList <a name="DataWizUsersUsersList" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataWizUsersUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]]

---


### DataWizUsersUsersOutputReference <a name="DataWizUsersUsersOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_users

dataWizUsers.DataWizUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole">put_effective_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider">put_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEffectiveRole">reset_effective_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProvider">reset_identity_provider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProviderType">reset_identity_provider_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIsSuspended">reset_is_suspended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_effective_role` <a name="put_effective_role" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole"></a>

```python
def put_effective_role(
  value: typing.Union[IResolvable, typing.List[DataWizUsersUsersEffectiveRole]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putEffectiveRole.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]

---

##### `put_identity_provider` <a name="put_identity_provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider"></a>

```python
def put_identity_provider(
  value: typing.Union[IResolvable, typing.List[DataWizUsersUsersIdentityProvider]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.putIdentityProvider.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]

---

##### `reset_effective_role` <a name="reset_effective_role" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEffectiveRole"></a>

```python
def reset_effective_role() -> None
```

##### `reset_email` <a name="reset_email" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider` <a name="reset_identity_provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProvider"></a>

```python
def reset_identity_provider() -> None
```

##### `reset_identity_provider_type` <a name="reset_identity_provider_type" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIdentityProviderType"></a>

```python
def reset_identity_provider_type() -> None
```

##### `reset_is_suspended` <a name="reset_is_suspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetIsSuspended"></a>

```python
def reset_is_suspended() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRole">effective_role</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList">DataWizUsersUsersEffectiveRoleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProvider">identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList">DataWizUsersUsersIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRoleInput">effective_role_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderInput">identity_provider_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderTypeInput">identity_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspendedInput">is_suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderType">identity_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspended">is_suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_role`<sup>Required</sup> <a name="effective_role" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRole"></a>

```python
effective_role: DataWizUsersUsersEffectiveRoleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRoleList">DataWizUsersUsersEffectiveRoleList</a>

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProvider"></a>

```python
identity_provider: DataWizUsersUsersIdentityProviderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProviderList">DataWizUsersUsersIdentityProviderList</a>

---

##### `effective_role_input`<sup>Optional</sup> <a name="effective_role_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.effectiveRoleInput"></a>

```python
effective_role_input: typing.Union[IResolvable, typing.List[DataWizUsersUsersEffectiveRole]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersEffectiveRole">DataWizUsersUsersEffectiveRole</a>]]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `identity_provider_input`<sup>Optional</sup> <a name="identity_provider_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderInput"></a>

```python
identity_provider_input: typing.Union[IResolvable, typing.List[DataWizUsersUsersIdentityProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersIdentityProvider">DataWizUsersUsersIdentityProvider</a>]]

---

##### `identity_provider_type_input`<sup>Optional</sup> <a name="identity_provider_type_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderTypeInput"></a>

```python
identity_provider_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_suspended_input`<sup>Optional</sup> <a name="is_suspended_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspendedInput"></a>

```python
is_suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_type`<sup>Required</sup> <a name="identity_provider_type" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.identityProviderType"></a>

```python
identity_provider_type: str
```

- *Type:* str

---

##### `is_suspended`<sup>Required</sup> <a name="is_suspended" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.isSuspended"></a>

```python
is_suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataWizUsersUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.dataWizUsers.DataWizUsersUsers">DataWizUsersUsers</a>]

---



