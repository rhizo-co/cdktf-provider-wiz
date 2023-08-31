# `wiz_cloud_config_rule_associations`

Refer to the Terraform Registory for docs: [`wiz_cloud_config_rule_associations`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations).

# `cloudConfigRuleAssociations` Submodule <a name="`cloudConfigRuleAssociations` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRuleAssociations <a name="CloudConfigRuleAssociations" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule_associations

cloudConfigRuleAssociations.CloudConfigRuleAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_config_rule_ids: typing.List[str],
  security_sub_category_ids: typing.List[str],
  details: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.cloudConfigRuleIds">cloud_config_rule_ids</a></code> | <code>typing.List[str]</code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.details">details</a></code> | <code>str</code> | Details of the association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_config_rule_ids`<sup>Required</sup> <a name="cloud_config_rule_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.cloudConfigRuleIds"></a>

- *Type:* typing.List[str]

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.securitySubCategoryIds"></a>

- *Type:* typing.List[str]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.Initializer.parameter.details"></a>

- *Type:* str

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails">reset_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_details` <a name="reset_details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.resetDetails"></a>

```python
def reset_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule_associations

cloudConfigRuleAssociations.CloudConfigRuleAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule_associations

cloudConfigRuleAssociations.CloudConfigRuleAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule_associations

cloudConfigRuleAssociations.CloudConfigRuleAssociations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput">cloud_config_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput">details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput">security_sub_category_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds">cloud_config_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `cloud_config_rule_ids_input`<sup>Optional</sup> <a name="cloud_config_rule_ids_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIdsInput"></a>

```python
cloud_config_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.detailsInput"></a>

```python
details_input: str
```

- *Type:* str

---

##### `security_sub_category_ids_input`<sup>Optional</sup> <a name="security_sub_category_ids_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIdsInput"></a>

```python
security_sub_category_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_config_rule_ids`<sup>Required</sup> <a name="cloud_config_rule_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.cloudConfigRuleIds"></a>

```python
cloud_config_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.securitySubCategoryIds"></a>

```python
security_sub_category_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleAssociationsConfig <a name="CloudConfigRuleAssociationsConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule_associations

cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_config_rule_ids: typing.List[str],
  security_sub_category_ids: typing.List[str],
  details: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds">cloud_config_rule_ids</a></code> | <code>typing.List[str]</code> | List of cloud configuration rule IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds">security_sub_category_ids</a></code> | <code>typing.List[str]</code> | List of security sub-category IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details">details</a></code> | <code>str</code> | Details of the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_config_rule_ids`<sup>Required</sup> <a name="cloud_config_rule_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.cloudConfigRuleIds"></a>

```python
cloud_config_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of cloud configuration rule IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}

---

##### `security_sub_category_ids`<sup>Required</sup> <a name="security_sub_category_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.securitySubCategoryIds"></a>

```python
security_sub_category_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of security sub-category IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}

---

##### `details`<sup>Optional</sup> <a name="details" id="rhizo-co-terraform-provider-wiz.cloudConfigRuleAssociations.CloudConfigRuleAssociationsConfig.property.details"></a>

```python
details: str
```

- *Type:* str

Details of the association.

This information is not used to manage resources but can serve as notes or documentation for the associations.

* Defaults to `{{`undefined`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}

---



