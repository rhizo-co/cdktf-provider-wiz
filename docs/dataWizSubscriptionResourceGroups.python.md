# `data_wiz_subscription_resource_groups`

Refer to the Terraform Registory for docs: [`data_wiz_subscription_resource_groups`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups).

# `dataWizSubscriptionResourceGroups` Submodule <a name="`dataWizSubscriptionResourceGroups` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizSubscriptionResourceGroups <a name="DataWizSubscriptionResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups wiz_subscription_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  first: typing.Union[int, float] = None,
  relationship_type: str = None,
  subscription_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.relationshipType">relationship_type</a></code> | <code>str</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The Wiz subscription ID to search by. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.first"></a>

- *Type:* typing.Union[int, float]

How many matches to return. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `relationship_type`<sup>Optional</sup> <a name="relationship_type" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.relationshipType"></a>

- *Type:* str

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:

  * ANY
  * ANY_OUTGOING
  * ACTING_AS
  * ADMINISTRATE
  * ALERTED_ON
  * ALLOWS
  * ALLOWS_ACCESS_TO
  * APPLIES_TO
  * ASSIGNED_TO
  * ATTACHED_TO
  * BEHIND
  * BOOTS
  * BUILT_FROM
  * CAUSES
  * COLLABORATES
  * CONNECTED_TO
  * CONTAINS
  * CONTAINS_DST_IP_RANGE
  * CONTAINS_DST_PORT_RANGE
  * CONTAINS_SRC_IP_RANGE
  * CONTAINS_SRC_PORT_RANGE
  * DENIES
  * DEPENDS_ON
  * DEPLOYED_TO
  * ENCRYPTS
  * ENCRYPTS_PARTITION
  * ENTITLES
  * EXCLUDES
  * EXPOSES
  * GOVERNS
  * HAS
  * HAS_BOUNDARY_POLICY
  * HAS_DATA_FINDING
  * HAS_DATA_INVENTORY
  * HAS_DATA_SCHEMA
  * HAS_DATA_STORE
  * HAS_ORGANIZATION_POLICY
  * HAS_PRINCIPAL_POLICY
  * HAS_RESOURCE_POLICY
  * HAS_SNAPSHOT
  * HAS_SOURCE
  * HAS_STANDARD_WEB_ACCESS_FROM
  * HAS_TECH
  * HOSTS
  * IGNORES
  * IMPLEMENTS
  * INCLUDES
  * INFECTS
  * INSIDE
  * INSTANCE_OF
  * INVOKES
  * LOGS_DATA_FOR
  * MANAGES
  * MOUNTS
  * OWNS
  * PART_OF
  * PEERED_TO
  * PERFORMED
  * PERFORMED_IMPERSONATED
  * PERMITS
  * POINTS_TO
  * PROTECTS
  * READS_DATA_FROM
  * REFERENCED_BY
  * REPLICA_OF
  * ROUTES_TRAFFIC_FROM
  * ROUTES_TRAFFIC_TO
  * RUNS
  * SCANNED
  * SEND_MESSAGES_TO
  * SERVES
  * STORES_DATA_IN
  * TRANSIT_PEERED_TO
  * USES
  * VALIDATES
* Defaults to `{{`CONTAINS`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst">reset_first</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType">reset_relationship_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_first` <a name="reset_first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetFirst"></a>

```python
def reset_first() -> None
```

##### `reset_relationship_type` <a name="reset_relationship_type" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetRelationshipType"></a>

```python
def reset_relationship_type() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups">resource_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput">first_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput">relationship_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first">first</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType">relationship_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.resourceGroups"></a>

```python
resource_groups: DataWizSubscriptionResourceGroupsResourceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList">DataWizSubscriptionResourceGroupsResourceGroupsList</a>

---

##### `first_input`<sup>Optional</sup> <a name="first_input" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.firstInput"></a>

```python
first_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relationship_type_input`<sup>Optional</sup> <a name="relationship_type_input" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipTypeInput"></a>

```python
relationship_type_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relationship_type`<sup>Required</sup> <a name="relationship_type" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizSubscriptionResourceGroupsConfig <a name="DataWizSubscriptionResourceGroupsConfig" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  first: typing.Union[int, float] = None,
  relationship_type: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first">first</a></code> | <code>typing.Union[int, float]</code> | How many matches to return. - Defaults to `50`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType">relationship_type</a></code> | <code>str</code> | Relationship type, will default to `CONTAINS` if not specified. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The Wiz subscription ID to search by. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.first"></a>

```python
first: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many matches to return. - Defaults to `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#first DataWizSubscriptionResourceGroups#first}

---

##### `relationship_type`<sup>Optional</sup> <a name="relationship_type" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

Relationship type, will default to `CONTAINS` if not specified.

* Allowed values:

  * ANY
  * ANY_OUTGOING
  * ACTING_AS
  * ADMINISTRATE
  * ALERTED_ON
  * ALLOWS
  * ALLOWS_ACCESS_TO
  * APPLIES_TO
  * ASSIGNED_TO
  * ATTACHED_TO
  * BEHIND
  * BOOTS
  * BUILT_FROM
  * CAUSES
  * COLLABORATES
  * CONNECTED_TO
  * CONTAINS
  * CONTAINS_DST_IP_RANGE
  * CONTAINS_DST_PORT_RANGE
  * CONTAINS_SRC_IP_RANGE
  * CONTAINS_SRC_PORT_RANGE
  * DENIES
  * DEPENDS_ON
  * DEPLOYED_TO
  * ENCRYPTS
  * ENCRYPTS_PARTITION
  * ENTITLES
  * EXCLUDES
  * EXPOSES
  * GOVERNS
  * HAS
  * HAS_BOUNDARY_POLICY
  * HAS_DATA_FINDING
  * HAS_DATA_INVENTORY
  * HAS_DATA_SCHEMA
  * HAS_DATA_STORE
  * HAS_ORGANIZATION_POLICY
  * HAS_PRINCIPAL_POLICY
  * HAS_RESOURCE_POLICY
  * HAS_SNAPSHOT
  * HAS_SOURCE
  * HAS_STANDARD_WEB_ACCESS_FROM
  * HAS_TECH
  * HOSTS
  * IGNORES
  * IMPLEMENTS
  * INCLUDES
  * INFECTS
  * INSIDE
  * INSTANCE_OF
  * INVOKES
  * LOGS_DATA_FOR
  * MANAGES
  * MOUNTS
  * OWNS
  * PART_OF
  * PEERED_TO
  * PERFORMED
  * PERFORMED_IMPERSONATED
  * PERMITS
  * POINTS_TO
  * PROTECTS
  * READS_DATA_FROM
  * REFERENCED_BY
  * REPLICA_OF
  * ROUTES_TRAFFIC_FROM
  * ROUTES_TRAFFIC_TO
  * RUNS
  * SCANNED
  * SEND_MESSAGES_TO
  * SERVES
  * STORES_DATA_IN
  * TRANSIT_PEERED_TO
  * USES
  * VALIDATES
* Defaults to `{{`CONTAINS`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#relationship_type DataWizSubscriptionResourceGroups#relationship_type}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The Wiz subscription ID to search by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/subscription_resource_groups#subscription_id DataWizSubscriptionResourceGroups#subscription_id}

---

### DataWizSubscriptionResourceGroupsResourceGroups <a name="DataWizSubscriptionResourceGroupsResourceGroups" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataWizSubscriptionResourceGroupsResourceGroupsList <a name="DataWizSubscriptionResourceGroupsResourceGroupsList" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataWizSubscriptionResourceGroupsResourceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataWizSubscriptionResourceGroupsResourceGroupsOutputReference <a name="DataWizSubscriptionResourceGroupsResourceGroupsOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import data_wiz_subscription_resource_groups

dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataWizSubscriptionResourceGroupsResourceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizSubscriptionResourceGroups.DataWizSubscriptionResourceGroupsResourceGroups">DataWizSubscriptionResourceGroupsResourceGroups</a>

---



