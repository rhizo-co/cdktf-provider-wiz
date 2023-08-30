# `wiz_security_framework`

Refer to the Terraform Registory for docs: [`wiz_security_framework`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework).

# `securityFramework` Submodule <a name="`securityFramework` Submodule" id="rhizo-co-terraform-provider-wiz.securityFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFramework <a name="SecurityFramework" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework wiz_security_framework}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFramework(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]],
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.category">category</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]</code> | category block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the security framework. - Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.category"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#category SecurityFramework#category}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.name"></a>

- *Type:* str

Name of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#name SecurityFramework#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.description"></a>

- *Type:* str

Description of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the security framework. - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#enabled SecurityFramework#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory">put_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_category` <a name="put_category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory"></a>

```python
def put_category(
  value: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.putCategory.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFramework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFramework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFramework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.category">category</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList">SecurityFrameworkCategoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.categoryInput">category_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.category"></a>

```python
category: SecurityFrameworkCategoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList">SecurityFrameworkCategoryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.categoryInput"></a>

```python
category_input: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFramework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFrameworkCategory <a name="SecurityFrameworkCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategory(
  name: str,
  sub_category: typing.Union[IResolvable, typing.List[SecurityFrameworkCategorySubCategory]],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.name">name</a></code> | <code>str</code> | Name fo the security category. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.subCategory">sub_category</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]</code> | sub_category block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.description">description</a></code> | <code>str</code> | Description of the security category. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.name"></a>

```python
name: str
```

- *Type:* str

Name fo the security category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#name SecurityFramework#name}

---

##### `sub_category`<sup>Required</sup> <a name="sub_category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.subCategory"></a>

```python
sub_category: typing.Union[IResolvable, typing.List[SecurityFrameworkCategorySubCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]

sub_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#sub_category SecurityFramework#sub_category}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

### SecurityFrameworkCategorySubCategory <a name="SecurityFrameworkCategorySubCategory" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategorySubCategory(
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.title">title</a></code> | <code>str</code> | Title of the security subcategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.description">description</a></code> | <code>str</code> | Description of the security subcategory. |

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.title"></a>

```python
title: str
```

- *Type:* str

Title of the security subcategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#title SecurityFramework#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security subcategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

### SecurityFrameworkConfig <a name="SecurityFrameworkConfig" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]],
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.category">category</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]</code> | category block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.name">name</a></code> | <code>str</code> | Name of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.description">description</a></code> | <code>str</code> | Description of the security framework. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the security framework. - Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.category"></a>

```python
category: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#category SecurityFramework#category}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#name SecurityFramework#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#description SecurityFramework#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the security framework. - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/security_framework#enabled SecurityFramework#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFrameworkCategoryList <a name="SecurityFrameworkCategoryList" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityFrameworkCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecurityFrameworkCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]]

---


### SecurityFrameworkCategoryOutputReference <a name="SecurityFrameworkCategoryOutputReference" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory">put_sub_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sub_category` <a name="put_sub_category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory"></a>

```python
def put_sub_category(
  value: typing.Union[IResolvable, typing.List[SecurityFrameworkCategorySubCategory]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.putSubCategory.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategory">sub_category</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList">SecurityFrameworkCategorySubCategoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategoryInput">sub_category_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sub_category`<sup>Required</sup> <a name="sub_category" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategory"></a>

```python
sub_category: SecurityFrameworkCategorySubCategoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList">SecurityFrameworkCategorySubCategoryList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sub_category_input`<sup>Optional</sup> <a name="sub_category_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.subCategoryInput"></a>

```python
sub_category_input: typing.Union[IResolvable, typing.List[SecurityFrameworkCategorySubCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecurityFrameworkCategory]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategory">SecurityFrameworkCategory</a>]

---


### SecurityFrameworkCategorySubCategoryList <a name="SecurityFrameworkCategorySubCategoryList" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategorySubCategoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityFrameworkCategorySubCategoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecurityFrameworkCategorySubCategory]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]]

---


### SecurityFrameworkCategorySubCategoryOutputReference <a name="SecurityFrameworkCategorySubCategoryOutputReference" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import security_framework

securityFramework.SecurityFrameworkCategorySubCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecurityFrameworkCategorySubCategory]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.securityFramework.SecurityFrameworkCategorySubCategory">SecurityFrameworkCategorySubCategory</a>]

---



