# `cloudConfigRule` Submodule <a name="`cloudConfigRule` Submodule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConfigRule <a name="CloudConfigRule" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule wiz_cloud_config_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  remediation_instructions: str,
  target_native_types: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  function_as_control: typing.Union[bool, IResolvable] = None,
  iac_matchers: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]] = None,
  opa_policy: str = None,
  scope_account_ids: typing.List[str] = None,
  severity: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.remediationInstructions">remediation_instructions</a></code> | <code>str</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.targetNativeTypes">target_native_types</a></code> | <code>typing.List[str]</code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable/disable this rule.     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.iacMatchers">iac_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]</code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.opaPolicy">opa_policy</a></code> | <code>str</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Severity that will be set for findings of this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.description"></a>

- *Type:* str

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.name"></a>

- *Type:* str

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `remediation_instructions`<sup>Required</sup> <a name="remediation_instructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.remediationInstructions"></a>

- *Type:* str

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `target_native_types`<sup>Required</sup> <a name="target_native_types" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.targetNativeTypes"></a>

- *Type:* typing.List[str]

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable/disable this rule.     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `function_as_control`<sup>Optional</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.functionAsControl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `iac_matchers`<sup>Optional</sup> <a name="iac_matchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.iacMatchers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `opa_policy`<sup>Optional</sup> <a name="opa_policy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.opaPolicy"></a>

- *Type:* str

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.scopeAccountIds"></a>

- *Type:* typing.List[str]

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.Initializer.parameter.severity"></a>

- *Type:* str

Severity that will be set for findings of this rule.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

  * Defaults to `MEDIUM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers">put_iac_matchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl">reset_function_as_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers">reset_iac_matchers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy">reset_opa_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds">reset_scope_account_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_iac_matchers` <a name="put_iac_matchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers"></a>

```python
def put_iac_matchers(
  value: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.putIacMatchers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]

---

##### `reset_enabled` <a name="reset_enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_function_as_control` <a name="reset_function_as_control" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetFunctionAsControl"></a>

```python
def reset_function_as_control() -> None
```

##### `reset_iac_matchers` <a name="reset_iac_matchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetIacMatchers"></a>

```python
def reset_iac_matchers() -> None
```

##### `reset_opa_policy` <a name="reset_opa_policy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetOpaPolicy"></a>

```python
def reset_opa_policy() -> None
```

##### `reset_scope_account_ids` <a name="reset_scope_account_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetScopeAccountIds"></a>

```python
def reset_scope_account_ids() -> None
```

##### `reset_severity` <a name="reset_severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.resetSeverity"></a>

```python
def reset_severity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudConfigRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudConfigRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers">iac_matchers</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories">security_sub_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput">function_as_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput">iac_matchers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput">opa_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput">remediation_instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput">scope_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput">target_native_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy">opa_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions">remediation_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes">target_native_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iac_matchers`<sup>Required</sup> <a name="iac_matchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchers"></a>

```python
iac_matchers: CloudConfigRuleIacMatchersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList">CloudConfigRuleIacMatchersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_sub_categories`<sup>Required</sup> <a name="security_sub_categories" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.securitySubCategories"></a>

```python
security_sub_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_as_control_input`<sup>Optional</sup> <a name="function_as_control_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControlInput"></a>

```python
function_as_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iac_matchers_input`<sup>Optional</sup> <a name="iac_matchers_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.iacMatchersInput"></a>

```python
iac_matchers_input: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `opa_policy_input`<sup>Optional</sup> <a name="opa_policy_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicyInput"></a>

```python
opa_policy_input: str
```

- *Type:* str

---

##### `remediation_instructions_input`<sup>Optional</sup> <a name="remediation_instructions_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructionsInput"></a>

```python
remediation_instructions_input: str
```

- *Type:* str

---

##### `scope_account_ids_input`<sup>Optional</sup> <a name="scope_account_ids_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIdsInput"></a>

```python
scope_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `target_native_types_input`<sup>Optional</sup> <a name="target_native_types_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypesInput"></a>

```python
target_native_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_as_control`<sup>Required</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.functionAsControl"></a>

```python
function_as_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opa_policy`<sup>Required</sup> <a name="opa_policy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.opaPolicy"></a>

```python
opa_policy: str
```

- *Type:* str

---

##### `remediation_instructions`<sup>Required</sup> <a name="remediation_instructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.remediationInstructions"></a>

```python
remediation_instructions: str
```

- *Type:* str

---

##### `scope_account_ids`<sup>Required</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `target_native_types`<sup>Required</sup> <a name="target_native_types" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.targetNativeTypes"></a>

```python
target_native_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConfigRuleConfig <a name="CloudConfigRuleConfig" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  remediation_instructions: str,
  target_native_types: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  function_as_control: typing.Union[bool, IResolvable] = None,
  iac_matchers: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]] = None,
  opa_policy: str = None,
  scope_account_ids: typing.List[str] = None,
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description">description</a></code> | <code>str</code> | Detailed description for this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name">name</a></code> | <code>str</code> | Name of this rule, as appeared in the UI in the portal. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions">remediation_instructions</a></code> | <code>str</code> | Steps to mitigate the issue that match this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes">target_native_types</a></code> | <code>typing.List[str]</code> | The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable/disable this rule.     - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl">function_as_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Make this rule function as a Control that creates Issues for new findings. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers">iac_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]</code> | iac_matchers block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy">opa_policy</a></code> | <code>str</code> | OPA rego policy that defines this rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[str]</code> | Set the rule scope of cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity">severity</a></code> | <code>str</code> | Severity that will be set for findings of this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Detailed description for this rule.

There is a defect in the API that makes this required; the description field cannot be nullified after one is defined, so we make it required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#description CloudConfigRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of this rule, as appeared in the UI in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#name CloudConfigRule#name}

---

##### `remediation_instructions`<sup>Required</sup> <a name="remediation_instructions" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.remediationInstructions"></a>

```python
remediation_instructions: str
```

- *Type:* str

Steps to mitigate the issue that match this rule.

If possible, include sample commands to execute in your cloud provider's console. Markdown formatting is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#remediation_instructions CloudConfigRule#remediation_instructions}

---

##### `target_native_types`<sup>Required</sup> <a name="target_native_types" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.targetNativeTypes"></a>

```python
target_native_types: typing.List[str]
```

- *Type:* typing.List[str]

The identifier types of the resources targeted by this rule, as seen on the cloud provider service. e.g. 'ec2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#target_native_types CloudConfigRule#target_native_types}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable/disable this rule.     - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#enabled CloudConfigRule#enabled}

---

##### `function_as_control`<sup>Optional</sup> <a name="function_as_control" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.functionAsControl"></a>

```python
function_as_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Make this rule function as a Control that creates Issues for new findings.

By default only findings are created. If enabled=false, an error will be returned if this is set to true.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#function_as_control CloudConfigRule#function_as_control}

---

##### `iac_matchers`<sup>Optional</sup> <a name="iac_matchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.iacMatchers"></a>

```python
iac_matchers: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]

iac_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#iac_matchers CloudConfigRule#iac_matchers}

---

##### `opa_policy`<sup>Optional</sup> <a name="opa_policy" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.opaPolicy"></a>

```python
opa_policy: str
```

- *Type:* str

OPA rego policy that defines this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#opa_policy CloudConfigRule#opa_policy}

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set the rule scope of cloud account IDs.

Select only subscriptions matching to the rule cloud provider. To change scope to 'all relevant resources' set to empty array. This must be the Wiz internal identifier for the account(uuid format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#scope_account_ids CloudConfigRule#scope_account_ids}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Severity that will be set for findings of this rule.

* Allowed values:
  - INFORMATIONAL
  - LOW
  - MEDIUM
  - HIGH
  - CRITICAL

  * Defaults to `MEDIUM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#severity CloudConfigRule#severity}

---

### CloudConfigRuleIacMatchers <a name="CloudConfigRuleIacMatchers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRuleIacMatchers(
  rego_code: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode">rego_code</a></code> | <code>str</code> | Write code in the Rego query language. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type">type</a></code> | <code>str</code> | The type of resource that will be evaluated by the Rego Code. |

---

##### `rego_code`<sup>Required</sup> <a name="rego_code" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.regoCode"></a>

```python
rego_code: str
```

- *Type:* str

Write code in the Rego query language.

This code will be evaluated against the JSON representation of each resource of the selected Native Type to determine if it passes or fails the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#rego_code CloudConfigRule#rego_code}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers.property.type"></a>

```python
type: str
```

- *Type:* str

The type of resource that will be evaluated by the Rego Code.

* Allowed values:
  - TERRAFORM
  - CLOUD_FORMATION
  - KUBERNETES
  - AZURE_RESOURCE_MANAGER
  - DOCKER_FILE
  - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/cloud_config_rule#type CloudConfigRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConfigRuleIacMatchersList <a name="CloudConfigRuleIacMatchersList" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRuleIacMatchersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudConfigRuleIacMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudConfigRuleIacMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]]

---


### CloudConfigRuleIacMatchersOutputReference <a name="CloudConfigRuleIacMatchersOutputReference" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_wiz import cloud_config_rule

cloudConfigRule.CloudConfigRuleIacMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput">rego_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode">rego_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rego_code_input`<sup>Optional</sup> <a name="rego_code_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCodeInput"></a>

```python
rego_code_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `rego_code`<sup>Required</sup> <a name="rego_code" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.regoCode"></a>

```python
rego_code: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudConfigRuleIacMatchers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-wiz.cloudConfigRule.CloudConfigRuleIacMatchers">CloudConfigRuleIacMatchers</a>]

---



