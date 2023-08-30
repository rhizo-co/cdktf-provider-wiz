# `wiz_service_account`

Refer to the Terraform Registory for docs: [`wiz_service_account`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account).

# `serviceAccount` Submodule <a name="`serviceAccount` Submodule" id="rhizo-co-terraform-provider-wiz.serviceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccount <a name="ServiceAccount" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account wiz_service_account}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import service_account

serviceAccount.ServiceAccount(
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
  assigned_projects: typing.List[str] = None,
  recreate_if_rotated: typing.Union[bool, IResolvable] = None,
  scopes: typing.List[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.assignedProjects">assigned_projects</a></code> | <code>typing.List[str]</code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.recreateIfRotated">recreate_if_rotated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.type">type</a></code> | <code>str</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `assigned_projects`<sup>Optional</sup> <a name="assigned_projects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.assignedProjects"></a>

- *Type:* typing.List[str]

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `recreate_if_rotated`<sup>Optional</sup> <a name="recreate_if_rotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.recreateIfRotated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Scopes, required with THIRD_PARTY (GraphQL API type).

* Allowed values:

  * admin:all
  * admin:audit
  * admin:digital_trust_settings
  * admin:identity_providers
  * admin:projects
  * admin:reports
  * admin:security_settings
  * admin:users
  * create:action_templates
  * create:admission_controllers
  * create:all
  * create:automation_actions
  * create:automation_rules
  * create:cloud_configuration
  * create:cloud_event_rules
  * create:connectors
  * create:controls
  * create:host_configuration
  * create:integrations
  * create:outposts
  * create:reports
  * create:run_action
  * create:run_control
  * create:saved_cloud_event_filters
  * create:saved_graph_queries
  * create:scan_policies
  * create:security_frameworks
  * create:security_scans
  * create:service_accounts
  * create:service_tickets
  * delete:action_templates
  * delete:all
  * delete:automation_actions
  * delete:automation_rules
  * delete:cloud_configuration
  * delete:cloud_event_rules
  * delete:connectors
  * delete:controls
  * delete:host_configuration
  * delete:integrations
  * delete:outposts
  * delete:reports
  * delete:saved_cloud_event_filters
  * delete:saved_graph_queries
  * delete:scan_policies
  * delete:security_frameworks
  * delete:security_scans
  * delete:service_accounts
  * read:action_templates
  * read:admission_controllers
  * read:all
  * read:automation_actions
  * read:automation_rules
  * read:benchmarks
  * read:cloud_accounts
  * read:cloud_configuration
  * read:cloud_event_rules
  * read:cloud_events
  * read:connectors
  * read:controls
  * read:digital_trust_settings
  * read:host_configuration
  * read:integrations
  * read:inventory
  * read:issue_settings
  * read:issues
  * read:kubernetes_clusters
  * read:licenses
  * read:outposts
  * read:projects
  * read:reports
  * read:resources
  * read:saved_cloud_event_filters
  * read:saved_graph_queries
  * read:scan_policies
  * read:scanner_settings
  * read:security_frameworks
  * read:security_scans
  * read:security_settings
  * read:service_accounts
  * read:system_activities
  * read:users
  * read:vulnerabilities
  * update:admission_controllers
  * update:all
  * update:automation_actions
  * update:automation_rules
  * update:cloud_configuration
  * update:cloud_event_rules
  * update:connectors
  * update:controls
  * update:host_configuration
  * update:integrations
  * update:inventory
  * update:issue_settings
  * update:issues
  * update:outposts
  * update:reports
  * update:resources
  * update:saved_cloud_event_filters
  * update:saved_graph_queries
  * update:scan_policies
  * update:scanner_settings
  * update:security_frameworks
  * update:security_scans
  * update:service_accounts
  * update:vulnerabilities
  * write:all
  * write:automation_actions
  * write:automation_rules
  * write:cloud_configuration
  * write:cloud_event_rules
  * write:connectors
  * write:controls
  * write:host_configuration
  * write:issue_settings
  * write:issues
  * write:outposts
  * write:reports
  * write:saved_cloud_event_filters
  * write:saved_graph_queries
  * write:scan_policies
  * write:scanner_settings
  * write:security_frameworks
  * write:security_scans
  * write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.Initializer.parameter.type"></a>

- *Type:* str

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

* Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects">reset_assigned_projects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated">reset_recreate_if_rotated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assigned_projects` <a name="reset_assigned_projects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetAssignedProjects"></a>

```python
def reset_assigned_projects() -> None
```

##### `reset_recreate_if_rotated` <a name="reset_recreate_if_rotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetRecreateIfRotated"></a>

```python
def reset_recreate_if_rotated() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import service_account

serviceAccount.ServiceAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import service_account

serviceAccount.ServiceAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import service_account

serviceAccount.ServiceAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt">last_rotated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput">assigned_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput">recreate_if_rotated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects">assigned_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated">recreate_if_rotated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_rotated_at`<sup>Required</sup> <a name="last_rotated_at" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.lastRotatedAt"></a>

```python
last_rotated_at: str
```

- *Type:* str

---

##### `assigned_projects_input`<sup>Optional</sup> <a name="assigned_projects_input" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjectsInput"></a>

```python
assigned_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recreate_if_rotated_input`<sup>Optional</sup> <a name="recreate_if_rotated_input" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotatedInput"></a>

```python
recreate_if_rotated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `assigned_projects`<sup>Required</sup> <a name="assigned_projects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.assignedProjects"></a>

```python
assigned_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recreate_if_rotated`<sup>Required</sup> <a name="recreate_if_rotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.recreateIfRotated"></a>

```python
recreate_if_rotated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountConfig <a name="ServiceAccountConfig" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import service_account

serviceAccount.ServiceAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  assigned_projects: typing.List[str] = None,
  recreate_if_rotated: typing.Union[bool, IResolvable] = None,
  scopes: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects">assigned_projects</a></code> | <code>typing.List[str]</code> | Project ID assignments, optional with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated">recreate_if_rotated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Recreate the resource if rotated outside Terraform? |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes, required with THIRD_PARTY (GraphQL API type). |
| <code><a href="#rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type">type</a></code> | <code>str</code> | Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#name ServiceAccount#name}.

---

##### `assigned_projects`<sup>Optional</sup> <a name="assigned_projects" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.assignedProjects"></a>

```python
assigned_projects: typing.List[str]
```

- *Type:* typing.List[str]

Project ID assignments, optional with THIRD_PARTY (GraphQL API type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#assigned_projects ServiceAccount#assigned_projects}

---

##### `recreate_if_rotated`<sup>Optional</sup> <a name="recreate_if_rotated" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.recreateIfRotated"></a>

```python
recreate_if_rotated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Recreate the resource if rotated outside Terraform?

This can be used to ensure the state contains valid authentication information. This option should be disabled if external tools are used to manage the credentials for this service account.

* Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#recreate_if_rotated ServiceAccount#recreate_if_rotated}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Scopes, required with THIRD_PARTY (GraphQL API type).

* Allowed values:

  * admin:all
  * admin:audit
  * admin:digital_trust_settings
  * admin:identity_providers
  * admin:projects
  * admin:reports
  * admin:security_settings
  * admin:users
  * create:action_templates
  * create:admission_controllers
  * create:all
  * create:automation_actions
  * create:automation_rules
  * create:cloud_configuration
  * create:cloud_event_rules
  * create:connectors
  * create:controls
  * create:host_configuration
  * create:integrations
  * create:outposts
  * create:reports
  * create:run_action
  * create:run_control
  * create:saved_cloud_event_filters
  * create:saved_graph_queries
  * create:scan_policies
  * create:security_frameworks
  * create:security_scans
  * create:service_accounts
  * create:service_tickets
  * delete:action_templates
  * delete:all
  * delete:automation_actions
  * delete:automation_rules
  * delete:cloud_configuration
  * delete:cloud_event_rules
  * delete:connectors
  * delete:controls
  * delete:host_configuration
  * delete:integrations
  * delete:outposts
  * delete:reports
  * delete:saved_cloud_event_filters
  * delete:saved_graph_queries
  * delete:scan_policies
  * delete:security_frameworks
  * delete:security_scans
  * delete:service_accounts
  * read:action_templates
  * read:admission_controllers
  * read:all
  * read:automation_actions
  * read:automation_rules
  * read:benchmarks
  * read:cloud_accounts
  * read:cloud_configuration
  * read:cloud_event_rules
  * read:cloud_events
  * read:connectors
  * read:controls
  * read:digital_trust_settings
  * read:host_configuration
  * read:integrations
  * read:inventory
  * read:issue_settings
  * read:issues
  * read:kubernetes_clusters
  * read:licenses
  * read:outposts
  * read:projects
  * read:reports
  * read:resources
  * read:saved_cloud_event_filters
  * read:saved_graph_queries
  * read:scan_policies
  * read:scanner_settings
  * read:security_frameworks
  * read:security_scans
  * read:security_settings
  * read:service_accounts
  * read:system_activities
  * read:users
  * read:vulnerabilities
  * update:admission_controllers
  * update:all
  * update:automation_actions
  * update:automation_rules
  * update:cloud_configuration
  * update:cloud_event_rules
  * update:connectors
  * update:controls
  * update:host_configuration
  * update:integrations
  * update:inventory
  * update:issue_settings
  * update:issues
  * update:outposts
  * update:reports
  * update:resources
  * update:saved_cloud_event_filters
  * update:saved_graph_queries
  * update:scan_policies
  * update:scanner_settings
  * update:security_frameworks
  * update:security_scans
  * update:service_accounts
  * update:vulnerabilities
  * write:all
  * write:automation_actions
  * write:automation_rules
  * write:cloud_configuration
  * write:cloud_event_rules
  * write:connectors
  * write:controls
  * write:host_configuration
  * write:issue_settings
  * write:issues
  * write:outposts
  * write:reports
  * write:saved_cloud_event_filters
  * write:saved_graph_queries
  * write:scan_policies
  * write:scanner_settings
  * write:security_frameworks
  * write:security_scans
  * write:service_accounts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#scopes ServiceAccount#scopes}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.serviceAccount.ServiceAccountConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Service account type, for Helm use `BROKER` type.` - Allowed values:      - THIRD_PARTY     - SENSOR     - KUBERNETES_ADMISSION_CONTROLLER     - BROKER.

* Defaults to `{{`THIRD_PARTY`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/service_account#type ServiceAccount#type}

---



