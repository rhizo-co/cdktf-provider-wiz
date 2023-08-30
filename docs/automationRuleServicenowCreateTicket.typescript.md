# `wiz_automation_rule_servicenow_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_servicenow_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket).

# `automationRuleServicenowCreateTicket` Submodule <a name="`automationRuleServicenowCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleServicenowCreateTicket <a name="AutomationRuleServicenowCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket wiz_automation_rule_servicenow_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer"></a>

```typescript
import { automationRuleServicenowCreateTicket } from 'rhizo-co-terraform-provider-wiz'

new automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket(scope: Construct, id: string, config: AutomationRuleServicenowCreateTicketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig">AutomationRuleServicenowCreateTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig">AutomationRuleServicenowCreateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv">resetServicenowAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields">resetServicenowCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription">resetServicenowDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary">resetServicenowSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName">resetServicenowTableName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetServicenowAttachEvidenceCsv` <a name="resetServicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowAttachEvidenceCsv"></a>

```typescript
public resetServicenowAttachEvidenceCsv(): void
```

##### `resetServicenowCustomFields` <a name="resetServicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowCustomFields"></a>

```typescript
public resetServicenowCustomFields(): void
```

##### `resetServicenowDescription` <a name="resetServicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowDescription"></a>

```typescript
public resetServicenowDescription(): void
```

##### `resetServicenowSummary` <a name="resetServicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowSummary"></a>

```typescript
public resetServicenowSummary(): void
```

##### `resetServicenowTableName` <a name="resetServicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.resetServicenowTableName"></a>

```typescript
public resetServicenowTableName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct"></a>

```typescript
import { automationRuleServicenowCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement"></a>

```typescript
import { automationRuleServicenowCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource"></a>

```typescript
import { automationRuleServicenowCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput">filtersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput">servicenowAttachEvidenceCsvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput">servicenowCustomFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput">servicenowDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput">servicenowSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput">servicenowTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters">filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv">servicenowAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields">servicenowCustomFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription">servicenowDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary">servicenowSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName">servicenowTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType">triggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filtersInput"></a>

```typescript
public readonly filtersInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `servicenowAttachEvidenceCsvInput`<sup>Optional</sup> <a name="servicenowAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsvInput"></a>

```typescript
public readonly servicenowAttachEvidenceCsvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicenowCustomFieldsInput`<sup>Optional</sup> <a name="servicenowCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFieldsInput"></a>

```typescript
public readonly servicenowCustomFieldsInput: string;
```

- *Type:* string

---

##### `servicenowDescriptionInput`<sup>Optional</sup> <a name="servicenowDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescriptionInput"></a>

```typescript
public readonly servicenowDescriptionInput: string;
```

- *Type:* string

---

##### `servicenowSummaryInput`<sup>Optional</sup> <a name="servicenowSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummaryInput"></a>

```typescript
public readonly servicenowSummaryInput: string;
```

- *Type:* string

---

##### `servicenowTableNameInput`<sup>Optional</sup> <a name="servicenowTableNameInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableNameInput"></a>

```typescript
public readonly servicenowTableNameInput: string;
```

- *Type:* string

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSourceInput"></a>

```typescript
public readonly triggerSourceInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `servicenowAttachEvidenceCsv`<sup>Required</sup> <a name="servicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowAttachEvidenceCsv"></a>

```typescript
public readonly servicenowAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicenowCustomFields`<sup>Required</sup> <a name="servicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowCustomFields"></a>

```typescript
public readonly servicenowCustomFields: string;
```

- *Type:* string

---

##### `servicenowDescription`<sup>Required</sup> <a name="servicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowDescription"></a>

```typescript
public readonly servicenowDescription: string;
```

- *Type:* string

---

##### `servicenowSummary`<sup>Required</sup> <a name="servicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowSummary"></a>

```typescript
public readonly servicenowSummary: string;
```

- *Type:* string

---

##### `servicenowTableName`<sup>Required</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.servicenowTableName"></a>

```typescript
public readonly servicenowTableName: string;
```

- *Type:* string

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleServicenowCreateTicketConfig <a name="AutomationRuleServicenowCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.Initializer"></a>

```typescript
import { automationRuleServicenowCreateTicket } from 'rhizo-co-terraform-provider-wiz'

const automationRuleServicenowCreateTicketConfig: automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description">description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters">filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name">name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType">triggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId">projectId</a></code> | <code>string</code> | Wiz internal ID for a project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv">servicenowAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields">servicenowCustomFields</a></code> | <code>string</code> | Custom configuration fields as specified in Service Now. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription">servicenowDescription</a></code> | <code>string</code> | Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary">servicenowSummary</a></code> | <code>string</code> | Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName">servicenowTableName</a></code> | <code>string</code> | Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#description AutomationRuleServicenowCreateTicket#description}

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#filters AutomationRuleServicenowCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#integration_id AutomationRuleServicenowCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#name AutomationRuleServicenowCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_source AutomationRuleServicenowCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_servicenow_create_ticket.
- Allowed values: 
    - CREATED
    - UPDATED
    - RESOLVED
    - REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_type AutomationRuleServicenowCreateTicket#trigger_type}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#enabled AutomationRuleServicenowCreateTicket#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#project_id AutomationRuleServicenowCreateTicket#project_id}

---

##### `servicenowAttachEvidenceCsv`<sup>Optional</sup> <a name="servicenowAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowAttachEvidenceCsv"></a>

```typescript
public readonly servicenowAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_attach_evidence_csv AutomationRuleServicenowCreateTicket#servicenow_attach_evidence_csv}

---

##### `servicenowCustomFields`<sup>Optional</sup> <a name="servicenowCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowCustomFields"></a>

```typescript
public readonly servicenowCustomFields: string;
```

- *Type:* string

Custom configuration fields as specified in Service Now.

Make sure you add the fields that are configured as required in Service Now Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_custom_fields AutomationRuleServicenowCreateTicket#servicenow_custom_fields}

---

##### `servicenowDescription`<sup>Optional</sup> <a name="servicenowDescription" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowDescription"></a>

```typescript
public readonly servicenowDescription: string;
```

- *Type:* string

Ticket description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_description AutomationRuleServicenowCreateTicket#servicenow_description}

---

##### `servicenowSummary`<sup>Optional</sup> <a name="servicenowSummary" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowSummary"></a>

```typescript
public readonly servicenowSummary: string;
```

- *Type:* string

Ticket summary - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_summary AutomationRuleServicenowCreateTicket#servicenow_summary}

---

##### `servicenowTableName`<sup>Optional</sup> <a name="servicenowTableName" id="rhizo-co-terraform-provider-wiz.automationRuleServicenowCreateTicket.AutomationRuleServicenowCreateTicketConfig.property.servicenowTableName"></a>

```typescript
public readonly servicenowTableName: string;
```

- *Type:* string

Table name to which new tickets will be added to, e.g: 'incident'. - Defaults to `{{`incident`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_table_name AutomationRuleServicenowCreateTicket#servicenow_table_name}

---



