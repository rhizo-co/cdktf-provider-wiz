# `wiz_automation_rule_servicenow_update_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_update_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket).

# `automationRuleServicenowUpdateTicket` Submodule <a name="`automationRuleServicenowUpdateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowUpdateTicket <a name="AutomationRuleServicenowUpdateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer"></a>

```typescript
import { automationRuleServicenowUpdateTicket } from 'rhizo-co-terraform-provider-wiz'

new automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket(scope: Construct, id: string, config: AutomationRuleServicenowUpdateTicketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig">AutomationRuleServicenowUpdateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport">resetServicenowAttachIssuesReport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields">resetServicenowFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName">resetServicenowTableName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetServicenowAttachIssuesReport` <a name="resetServicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowAttachIssuesReport"></a>

```typescript
public resetServicenowAttachIssuesReport(): void
```

##### `resetServicenowFields` <a name="resetServicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowFields"></a>

```typescript
public resetServicenowFields(): void
```

##### `resetServicenowTableName` <a name="resetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.resetServicenowTableName"></a>

```typescript
public resetServicenowTableName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct"></a>

```typescript
import { automationRuleServicenowUpdateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement"></a>

```typescript
import { automationRuleServicenowUpdateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource"></a>

```typescript
import { automationRuleServicenowUpdateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput">filtersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput">servicenowAttachIssuesReportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput">servicenowFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput">servicenowTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters">filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport">servicenowAttachIssuesReport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields">servicenowFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName">servicenowTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType">triggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filtersInput"></a>

```typescript
public readonly filtersInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `servicenowAttachIssuesReportInput`<sup>Optional</sup> <a name="servicenowAttachIssuesReportInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReportInput"></a>

```typescript
public readonly servicenowAttachIssuesReportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicenowFieldsInput`<sup>Optional</sup> <a name="servicenowFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFieldsInput"></a>

```typescript
public readonly servicenowFieldsInput: string;
```

- *Type:* string

---

##### `servicenowTableNameInput`<sup>Optional</sup> <a name="servicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableNameInput"></a>

```typescript
public readonly servicenowTableNameInput: string;
```

- *Type:* string

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSourceInput"></a>

```typescript
public readonly triggerSourceInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `servicenowAttachIssuesReport`<sup>Required</sup> <a name="servicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowAttachIssuesReport"></a>

```typescript
public readonly servicenowAttachIssuesReport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicenowFields`<sup>Required</sup> <a name="servicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowFields"></a>

```typescript
public readonly servicenowFields: string;
```

- *Type:* string

---

##### `servicenowTableName`<sup>Required</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.servicenowTableName"></a>

```typescript
public readonly servicenowTableName: string;
```

- *Type:* string

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowUpdateTicketConfig <a name="AutomationRuleServicenowUpdateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.Initializer"></a>

```typescript
import { automationRuleServicenowUpdateTicket } from 'rhizo-co-terraform-provider-wiz'

const automationRuleServicenowUpdateTicketConfig: automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description">description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters">filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name">name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType">triggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId">projectId</a></code> | <code>string</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport">servicenowAttachIssuesReport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields">servicenowFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName">servicenowTableName</a></code> | <code>string</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

Trigger source.

Allowed values: 
    - ISSUES
    - CLOUD_EVENTS
    - CONTROL
    - CONFIGURATION_FINDING

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.
- Allowed values: 
    - CREATED
    - UPDATED
    - RESOLVED
    - REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}

---

##### `servicenowAttachIssuesReport`<sup>Optional</sup> <a name="servicenowAttachIssuesReport" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowAttachIssuesReport"></a>

```typescript
public readonly servicenowAttachIssuesReport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}

---

##### `servicenowFields`<sup>Optional</sup> <a name="servicenowFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowFields"></a>

```typescript
public readonly servicenowFields: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}.

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowUpdateTicket.AutomationRuleServicenowUpdateTicketConfig.property.servicenowTableName"></a>

```typescript
public readonly servicenowTableName: string;
```

- *Type:* string

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}

---



