# `wiz_control`

Refer to the Terraform Registory for docs: [`wiz_control`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control).

# `control` Submodule <a name="`control` Submodule" id="rhizo-co-terraform-provider-wiz.control"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Control <a name="Control" id="rhizo-co-terraform-provider-wiz.control.Control"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control wiz_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import control

control.Control(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  query: str,
  scope_query: str,
  severity: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  resolution_recommendation: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.query">query</a></code> | <code>str</code> | The query that the control runs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scopeQuery">scope_query</a></code> | <code>str</code> | The query that represents the control's scope. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Severity that will be set for this control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.resolutionRecommendation">resolution_recommendation</a></code> | <code>str</code> | Guidance on how the user should address an issue that was created by this control. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.name"></a>

- *Type:* str

Name of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#name Control#name}

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.query"></a>

- *Type:* str

The query that the control runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#query Control#query}

---

##### `scope_query`<sup>Required</sup> <a name="scope_query" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.scopeQuery"></a>

- *Type:* str

The query that represents the control's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#scope_query Control#scope_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.severity"></a>

- *Type:* str

Severity that will be set for this control.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#severity Control#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.description"></a>

- *Type:* str

Description of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#description Control#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the Control.

This has a known defect where if set to false, it will be created as true because the API to create Controls does not accept this parameter.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#enabled Control#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.projectId"></a>

- *Type:* str

Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#project_id Control#project_id}

---

##### `resolution_recommendation`<sup>Optional</sup> <a name="resolution_recommendation" id="rhizo-co-terraform-provider-wiz.control.Control.Initializer.parameter.resolutionRecommendation"></a>

- *Type:* str

Guidance on how the user should address an issue that was created by this control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#resolution_recommendation Control#resolution_recommendation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.resetResolutionRecommendation">reset_resolution_recommendation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.control.Control.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.control.Control.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.control.Control.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.control.Control.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.control.Control.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.control.Control.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.control.Control.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-wiz.control.Control.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.control.Control.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-wiz.control.Control.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_resolution_recommendation` <a name="reset_resolution_recommendation" id="rhizo-co-terraform-provider-wiz.control.Control.resetResolutionRecommendation"></a>

```python
def reset_resolution_recommendation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.control.Control.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import control

control.Control.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import control

control.Control.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import control

control.Control.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.control.Control.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.securitySubCategories">security_sub_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendationInput">resolution_recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.scopeQueryInput">scope_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendation">resolution_recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.scopeQuery">scope_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.severity">severity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.control.Control.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.control.Control.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.control.Control.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.control.Control.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.control.Control.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.control.Control.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.control.Control.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.control.Control.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.control.Control.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.control.Control.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.control.Control.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.control.Control.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.control.Control.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_sub_categories`<sup>Required</sup> <a name="security_sub_categories" id="rhizo-co-terraform-provider-wiz.control.Control.property.securitySubCategories"></a>

```python
security_sub_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `resolution_recommendation_input`<sup>Optional</sup> <a name="resolution_recommendation_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendationInput"></a>

```python
resolution_recommendation_input: str
```

- *Type:* str

---

##### `scope_query_input`<sup>Optional</sup> <a name="scope_query_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.scopeQueryInput"></a>

```python
scope_query_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-wiz.control.Control.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.control.Control.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.control.Control.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.control.Control.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.control.Control.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-wiz.control.Control.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `resolution_recommendation`<sup>Required</sup> <a name="resolution_recommendation" id="rhizo-co-terraform-provider-wiz.control.Control.property.resolutionRecommendation"></a>

```python
resolution_recommendation: str
```

- *Type:* str

---

##### `scope_query`<sup>Required</sup> <a name="scope_query" id="rhizo-co-terraform-provider-wiz.control.Control.property.scopeQuery"></a>

```python
scope_query: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.control.Control.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.Control.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.control.Control.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ControlConfig <a name="ControlConfig" id="rhizo-co-terraform-provider-wiz.control.ControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import control

control.ControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  query: str,
  scope_query: str,
  severity: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  resolution_recommendation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.name">name</a></code> | <code>str</code> | Name of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.query">query</a></code> | <code>str</code> | The query that the control runs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.scopeQuery">scope_query</a></code> | <code>str</code> | The query that represents the control's scope. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.severity">severity</a></code> | <code>str</code> | Severity that will be set for this control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.description">description</a></code> | <code>str</code> | Description of the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable the Control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.projectId">project_id</a></code> | <code>str</code> | Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.control.ControlConfig.property.resolutionRecommendation">resolution_recommendation</a></code> | <code>str</code> | Guidance on how the user should address an issue that was created by this control. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#name Control#name}

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query that the control runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#query Control#query}

---

##### `scope_query`<sup>Required</sup> <a name="scope_query" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.scopeQuery"></a>

```python
scope_query: str
```

- *Type:* str

The query that represents the control's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#scope_query Control#scope_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity that will be set for this control.

* Allowed values:

  * INFORMATIONAL
  * LOW
  * MEDIUM
  * HIGH
  * CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#severity Control#severity}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#description Control#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable the Control.

This has a known defect where if set to false, it will be created as true because the API to create Controls does not accept this parameter.

* Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#enabled Control#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project scope of the control. Use '*' for all projects. - Defaults to `{{`*`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#project_id Control#project_id}

---

##### `resolution_recommendation`<sup>Optional</sup> <a name="resolution_recommendation" id="rhizo-co-terraform-provider-wiz.control.ControlConfig.property.resolutionRecommendation"></a>

```python
resolution_recommendation: str
```

- *Type:* str

Guidance on how the user should address an issue that was created by this control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control#resolution_recommendation Control#resolution_recommendation}

---



