# `wiz_automation_rule_jira_transition_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_transition_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket).

# `automationRuleJiraTransitionTicket` Submodule <a name="`automationRuleJiraTransitionTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraTransitionTicket <a name="AutomationRuleJiraTransitionTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer"></a>

```typescript
import { automationRuleJiraTransitionTicket } from 'rhizo-co-terraform-provider-wiz'

new automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket(scope: Construct, id: string, config: AutomationRuleJiraTransitionTicketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig">AutomationRuleJiraTransitionTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields">resetJiraAdvancedFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv">resetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment">resetJiraComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition">resetJiraCommentOnTransition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject">resetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId">resetJiraTransitionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJiraAdvancedFields` <a name="resetJiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAdvancedFields"></a>

```typescript
public resetJiraAdvancedFields(): void
```

##### `resetJiraAttachEvidenceCsv` <a name="resetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraAttachEvidenceCsv"></a>

```typescript
public resetJiraAttachEvidenceCsv(): void
```

##### `resetJiraComment` <a name="resetJiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraComment"></a>

```typescript
public resetJiraComment(): void
```

##### `resetJiraCommentOnTransition` <a name="resetJiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraCommentOnTransition"></a>

```typescript
public resetJiraCommentOnTransition(): void
```

##### `resetJiraProject` <a name="resetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraProject"></a>

```typescript
public resetJiraProject(): void
```

##### `resetJiraTransitionId` <a name="resetJiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetJiraTransitionId"></a>

```typescript
public resetJiraTransitionId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct"></a>

```typescript
import { automationRuleJiraTransitionTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement"></a>

```typescript
import { automationRuleJiraTransitionTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource"></a>

```typescript
import { automationRuleJiraTransitionTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput">filtersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput">jiraAdvancedFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput">jiraAttachEvidenceCsvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput">jiraCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput">jiraCommentOnTransitionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput">jiraProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput">jiraTransitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters">filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields">jiraAdvancedFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment">jiraComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition">jiraCommentOnTransition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject">jiraProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId">jiraTransitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType">triggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filtersInput"></a>

```typescript
public readonly filtersInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `jiraAdvancedFieldsInput`<sup>Optional</sup> <a name="jiraAdvancedFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFieldsInput"></a>

```typescript
public readonly jiraAdvancedFieldsInput: string;
```

- *Type:* string

---

##### `jiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="jiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsvInput"></a>

```typescript
public readonly jiraAttachEvidenceCsvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraCommentInput`<sup>Optional</sup> <a name="jiraCommentInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentInput"></a>

```typescript
public readonly jiraCommentInput: string;
```

- *Type:* string

---

##### `jiraCommentOnTransitionInput`<sup>Optional</sup> <a name="jiraCommentOnTransitionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransitionInput"></a>

```typescript
public readonly jiraCommentOnTransitionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraProjectInput`<sup>Optional</sup> <a name="jiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProjectInput"></a>

```typescript
public readonly jiraProjectInput: string;
```

- *Type:* string

---

##### `jiraTransitionIdInput`<sup>Optional</sup> <a name="jiraTransitionIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionIdInput"></a>

```typescript
public readonly jiraTransitionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSourceInput"></a>

```typescript
public readonly triggerSourceInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `jiraAdvancedFields`<sup>Required</sup> <a name="jiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAdvancedFields"></a>

```typescript
public readonly jiraAdvancedFields: string;
```

- *Type:* string

---

##### `jiraAttachEvidenceCsv`<sup>Required</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraAttachEvidenceCsv"></a>

```typescript
public readonly jiraAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraComment`<sup>Required</sup> <a name="jiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraComment"></a>

```typescript
public readonly jiraComment: string;
```

- *Type:* string

---

##### `jiraCommentOnTransition`<sup>Required</sup> <a name="jiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraCommentOnTransition"></a>

```typescript
public readonly jiraCommentOnTransition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraProject`<sup>Required</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraProject"></a>

```typescript
public readonly jiraProject: string;
```

- *Type:* string

---

##### `jiraTransitionId`<sup>Required</sup> <a name="jiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.jiraTransitionId"></a>

```typescript
public readonly jiraTransitionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraTransitionTicketConfig <a name="AutomationRuleJiraTransitionTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.Initializer"></a>

```typescript
import { automationRuleJiraTransitionTicket } from 'rhizo-co-terraform-provider-wiz'

const automationRuleJiraTransitionTicketConfig: automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters">filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name">name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource">triggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType">triggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description">description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields">jiraAdvancedFields</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment">jiraComment</a></code> | <code>string</code> | Issue Jira comment. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition">jiraCommentOnTransition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject">jiraProject</a></code> | <code>string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId">jiraTransitionId</a></code> | <code>string</code> | Issue transition ID or Name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId">projectId</a></code> | <code>string</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
- Allowed values: 
    - CREATED
    - UPDATED
    - RESOLVED
    - REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}

---

##### `jiraAdvancedFields`<sup>Optional</sup> <a name="jiraAdvancedFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAdvancedFields"></a>

```typescript
public readonly jiraAdvancedFields: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}.

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraAttachEvidenceCsv"></a>

```typescript
public readonly jiraAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Upload issues report as attachment Only relevant in CONTROL-triggered Actions. - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}

---

##### `jiraComment`<sup>Optional</sup> <a name="jiraComment" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraComment"></a>

```typescript
public readonly jiraComment: string;
```

- *Type:* string

Issue Jira comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}

---

##### `jiraCommentOnTransition`<sup>Optional</sup> <a name="jiraCommentOnTransition" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraCommentOnTransition"></a>

```typescript
public readonly jiraCommentOnTransition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraProject"></a>

```typescript
public readonly jiraProject: string;
```

- *Type:* string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}

---

##### `jiraTransitionId`<sup>Optional</sup> <a name="jiraTransitionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.jiraTransitionId"></a>

```typescript
public readonly jiraTransitionId: string;
```

- *Type:* string

Issue transition ID or Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraTransitionTicket.AutomationRuleJiraTransitionTicketConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}

---



