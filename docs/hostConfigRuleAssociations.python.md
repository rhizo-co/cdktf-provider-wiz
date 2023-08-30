# `wiz_host_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_host_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations).

# `hostConfigRuleAssociations` Submodule <a name="`hostConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostConfigRuleAssociations <a name="HostConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations wiz_host_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import host_config_rule_associations

hostConfigRuleAssociations.HostConfigRuleAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_config_rule_ids: typing.List[str],
  security_sub_category_ids: typing.List[str],
  details: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.hostConfigRuleIds">host_config_rule_ids</a></code> | <code>typing.List[str]</code> | List of host configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.details">details</a></code> | <code>str</code> | Details of the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_config_rule_ids`<sup>Required</sup> <a name="host_config_rule_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.hostConfigRuleIds"></a>

- *Type:* typing.List[str]

List of host configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#host_config_rule_ids HostConfigRuleAssociations#host_config_rule_ids}

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds"></a>

- *Type:* typing.List[str]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#security_sub_category_ids HostConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.Initializer.parameter.details"></a>

- *Type:* str

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#details HostConfigRuleAssociations#details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetDetails">reset_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_details` <a name="reset_details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.resetDetails"></a>

```python
def reset_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import host_config_rule_associations

hostConfigRuleAssociations.HostConfigRuleAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import host_config_rule_associations

hostConfigRuleAssociations.HostConfigRuleAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import host_config_rule_associations

hostConfigRuleAssociations.HostConfigRuleAssociations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.detailsInput">details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIdsInput">host_config_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIdsInput">security_sub_category_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIds">host_config_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.detailsInput"></a>

```python
details_input: str
```

- *Type:* str

---

##### `host_config_rule_ids_input`<sup>Optional</sup> <a name="host_config_rule_ids_input" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIdsInput"></a>

```python
host_config_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_sub_category_ids_input`<sup>Optional</sup> <a name="security_sub_category_ids_input" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```python
security_sub_category_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `host_config_rule_ids`<sup>Required</sup> <a name="host_config_rule_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.hostConfigRuleIds"></a>

```python
host_config_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.securitySubCategoryIds"></a>

```python
security_sub_category_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HostConfigRuleAssociationsConfig <a name="HostConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import host_config_rule_associations

hostConfigRuleAssociations.HostConfigRuleAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_config_rule_ids: typing.List[str],
  security_sub_category_ids: typing.List[str],
  details: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.hostConfigRuleIds">host_config_rule_ids</a></code> | <code>typing.List[str]</code> | List of host configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.details">details</a></code> | <code>str</code> | Details of the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_config_rule_ids`<sup>Required</sup> <a name="host_config_rule_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.hostConfigRuleIds"></a>

```python
host_config_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of host configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#host_config_rule_ids HostConfigRuleAssociations#host_config_rule_ids}

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```python
security_sub_category_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#security_sub_category_ids HostConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.hostConfigRuleAssociations.HostConfigRuleAssociationsConfig.property.details"></a>

```python
details: str
```

- *Type:* str

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/host_config_rule_associations#details HostConfigRuleAssociations#details}

---



