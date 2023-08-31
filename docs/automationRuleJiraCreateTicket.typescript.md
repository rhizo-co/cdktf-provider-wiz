# `wiz_automation_rule_jira_create_ticket`

Refer to the Terraform Registory for docs: [`wiz_automation_rule_jira_create_ticket`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket).

# `automationRuleJiraCreateTicket` Submodule <a name="`automationRuleJiraCreateTicket` Submodule" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuleJiraCreateTicket <a name="AutomationRuleJiraCreateTicket" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer"></a>

```typescript
import { automationRuleJiraCreateTicket } from 'rhizo-co-terraform-provider-wiz'

new automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket(scope: Construct, id: string, config: AutomationRuleJiraCreateTicketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig">AutomationRuleJiraCreateTicketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField">resetJiraAlternativeDescriptionField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee">resetJiraAssignee</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv">resetJiraAttachEvidenceCsv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents">resetJiraComponents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields">resetJiraCustomFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription">resetJiraDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion">resetJiraFixVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType">resetJiraIssueType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels">resetJiraLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority">resetJiraPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject">resetJiraProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary">resetJiraSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJiraAlternativeDescriptionField` <a name="resetJiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAlternativeDescriptionField"></a>

```typescript
public resetJiraAlternativeDescriptionField(): void
```

##### `resetJiraAssignee` <a name="resetJiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAssignee"></a>

```typescript
public resetJiraAssignee(): void
```

##### `resetJiraAttachEvidenceCsv` <a name="resetJiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraAttachEvidenceCsv"></a>

```typescript
public resetJiraAttachEvidenceCsv(): void
```

##### `resetJiraComponents` <a name="resetJiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraComponents"></a>

```typescript
public resetJiraComponents(): void
```

##### `resetJiraCustomFields` <a name="resetJiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraCustomFields"></a>

```typescript
public resetJiraCustomFields(): void
```

##### `resetJiraDescription` <a name="resetJiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraDescription"></a>

```typescript
public resetJiraDescription(): void
```

##### `resetJiraFixVersion` <a name="resetJiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraFixVersion"></a>

```typescript
public resetJiraFixVersion(): void
```

##### `resetJiraIssueType` <a name="resetJiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraIssueType"></a>

```typescript
public resetJiraIssueType(): void
```

##### `resetJiraLabels` <a name="resetJiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraLabels"></a>

```typescript
public resetJiraLabels(): void
```

##### `resetJiraPriority` <a name="resetJiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraPriority"></a>

```typescript
public resetJiraPriority(): void
```

##### `resetJiraProject` <a name="resetJiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraProject"></a>

```typescript
public resetJiraProject(): void
```

##### `resetJiraSummary` <a name="resetJiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetJiraSummary"></a>

```typescript
public resetJiraSummary(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct"></a>

```typescript
import { automationRuleJiraCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement"></a>

```typescript
import { automationRuleJiraCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource"></a>

```typescript
import { automationRuleJiraCreateTicket } from 'rhizo-co-terraform-provider-wiz'

automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput">filtersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput">jiraAlternativeDescriptionFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput">jiraAssigneeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput">jiraAttachEvidenceCsvInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput">jiraComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput">jiraCustomFieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput">jiraDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput">jiraFixVersionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput">jiraIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput">jiraLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput">jiraPriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput">jiraProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput">jiraSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput">triggerSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput">triggerTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters">filters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField">jiraAlternativeDescriptionField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee">jiraAssignee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents">jiraComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields">jiraCustomFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription">jiraDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion">jiraFixVersion</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType">jiraIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels">jiraLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority">jiraPriority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject">jiraProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary">jiraSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType">triggerType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filtersInput"></a>

```typescript
public readonly filtersInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `jiraAlternativeDescriptionFieldInput`<sup>Optional</sup> <a name="jiraAlternativeDescriptionFieldInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionFieldInput"></a>

```typescript
public readonly jiraAlternativeDescriptionFieldInput: string;
```

- *Type:* string

---

##### `jiraAssigneeInput`<sup>Optional</sup> <a name="jiraAssigneeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssigneeInput"></a>

```typescript
public readonly jiraAssigneeInput: string;
```

- *Type:* string

---

##### `jiraAttachEvidenceCsvInput`<sup>Optional</sup> <a name="jiraAttachEvidenceCsvInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsvInput"></a>

```typescript
public readonly jiraAttachEvidenceCsvInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraComponentsInput`<sup>Optional</sup> <a name="jiraComponentsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponentsInput"></a>

```typescript
public readonly jiraComponentsInput: string[];
```

- *Type:* string[]

---

##### `jiraCustomFieldsInput`<sup>Optional</sup> <a name="jiraCustomFieldsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFieldsInput"></a>

```typescript
public readonly jiraCustomFieldsInput: string;
```

- *Type:* string

---

##### `jiraDescriptionInput`<sup>Optional</sup> <a name="jiraDescriptionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescriptionInput"></a>

```typescript
public readonly jiraDescriptionInput: string;
```

- *Type:* string

---

##### `jiraFixVersionInput`<sup>Optional</sup> <a name="jiraFixVersionInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersionInput"></a>

```typescript
public readonly jiraFixVersionInput: string[];
```

- *Type:* string[]

---

##### `jiraIssueTypeInput`<sup>Optional</sup> <a name="jiraIssueTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueTypeInput"></a>

```typescript
public readonly jiraIssueTypeInput: string;
```

- *Type:* string

---

##### `jiraLabelsInput`<sup>Optional</sup> <a name="jiraLabelsInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabelsInput"></a>

```typescript
public readonly jiraLabelsInput: string[];
```

- *Type:* string[]

---

##### `jiraPriorityInput`<sup>Optional</sup> <a name="jiraPriorityInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriorityInput"></a>

```typescript
public readonly jiraPriorityInput: string;
```

- *Type:* string

---

##### `jiraProjectInput`<sup>Optional</sup> <a name="jiraProjectInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProjectInput"></a>

```typescript
public readonly jiraProjectInput: string;
```

- *Type:* string

---

##### `jiraSummaryInput`<sup>Optional</sup> <a name="jiraSummaryInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummaryInput"></a>

```typescript
public readonly jiraSummaryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `triggerSourceInput`<sup>Optional</sup> <a name="triggerSourceInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSourceInput"></a>

```typescript
public readonly triggerSourceInput: string;
```

- *Type:* string

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerTypeInput"></a>

```typescript
public readonly triggerTypeInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `jiraAlternativeDescriptionField`<sup>Required</sup> <a name="jiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAlternativeDescriptionField"></a>

```typescript
public readonly jiraAlternativeDescriptionField: string;
```

- *Type:* string

---

##### `jiraAssignee`<sup>Required</sup> <a name="jiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAssignee"></a>

```typescript
public readonly jiraAssignee: string;
```

- *Type:* string

---

##### `jiraAttachEvidenceCsv`<sup>Required</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraAttachEvidenceCsv"></a>

```typescript
public readonly jiraAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jiraComponents`<sup>Required</sup> <a name="jiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraComponents"></a>

```typescript
public readonly jiraComponents: string[];
```

- *Type:* string[]

---

##### `jiraCustomFields`<sup>Required</sup> <a name="jiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraCustomFields"></a>

```typescript
public readonly jiraCustomFields: string;
```

- *Type:* string

---

##### `jiraDescription`<sup>Required</sup> <a name="jiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraDescription"></a>

```typescript
public readonly jiraDescription: string;
```

- *Type:* string

---

##### `jiraFixVersion`<sup>Required</sup> <a name="jiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraFixVersion"></a>

```typescript
public readonly jiraFixVersion: string[];
```

- *Type:* string[]

---

##### `jiraIssueType`<sup>Required</sup> <a name="jiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraIssueType"></a>

```typescript
public readonly jiraIssueType: string;
```

- *Type:* string

---

##### `jiraLabels`<sup>Required</sup> <a name="jiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraLabels"></a>

```typescript
public readonly jiraLabels: string[];
```

- *Type:* string[]

---

##### `jiraPriority`<sup>Required</sup> <a name="jiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraPriority"></a>

```typescript
public readonly jiraPriority: string;
```

- *Type:* string

---

##### `jiraProject`<sup>Required</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraProject"></a>

```typescript
public readonly jiraProject: string;
```

- *Type:* string

---

##### `jiraSummary`<sup>Required</sup> <a name="jiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.jiraSummary"></a>

```typescript
public readonly jiraSummary: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuleJiraCreateTicketConfig <a name="AutomationRuleJiraCreateTicketConfig" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.Initializer"></a>

```typescript
import { automationRuleJiraCreateTicket } from 'rhizo-co-terraform-provider-wiz'

const automationRuleJiraCreateTicketConfig: automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters">filters</a></code> | <code>string</code> | Value should be wrapped in jsonencode() to avoid diff detection. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name">name</a></code> | <code>string</code> | Name of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource">triggerSource</a></code> | <code>string</code> | Trigger source. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType">triggerType</a></code> | <code>string[]</code> | Trigger type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description">description</a></code> | <code>string</code> | Description of the automation rule. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabled? - Defaults to `true`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField">jiraAlternativeDescriptionField</a></code> | <code>string</code> | Issue alternative description field. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee">jiraAssignee</a></code> | <code>string</code> | Issue assignee. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv">jiraAttachEvidenceCsv</a></code> | <code>boolean \| cdktf.IResolvable</code> | Upload issue evidence CSV as attachment? - Defaults to `false`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents">jiraComponents</a></code> | <code>string[]</code> | Issue components. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields">jiraCustomFields</a></code> | <code>string</code> | Custom configuration fields as specified in Jira. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription">jiraDescription</a></code> | <code>string</code> | Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion">jiraFixVersion</a></code> | <code>string[]</code> | Issue fix versions. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType">jiraIssueType</a></code> | <code>string</code> | Issue type - Defaults to `{{`Vulnerability`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels">jiraLabels</a></code> | <code>string[]</code> | Issue labels. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority">jiraPriority</a></code> | <code>string</code> | Issue priority. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject">jiraProject</a></code> | <code>string</code> | Issue project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary">jiraSummary</a></code> | <code>string</code> | Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId">projectId</a></code> | <code>string</code> | Wiz internal ID for a project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.filters"></a>

```typescript
public readonly filters: string;
```

- *Type:* string

Value should be wrapped in jsonencode() to avoid diff detection.

This is required even though the API states it is not required.  Validate is performed by the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerSource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.triggerType"></a>

```typescript
public readonly triggerType: string[];
```

- *Type:* string[]

Trigger type.

Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.
- Allowed values: 
    - CREATED
    - UPDATED
    - RESOLVED
    - REOPENED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabled? - Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}

---

##### `jiraAlternativeDescriptionField`<sup>Optional</sup> <a name="jiraAlternativeDescriptionField" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAlternativeDescriptionField"></a>

```typescript
public readonly jiraAlternativeDescriptionField: string;
```

- *Type:* string

Issue alternative description field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}

---

##### `jiraAssignee`<sup>Optional</sup> <a name="jiraAssignee" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAssignee"></a>

```typescript
public readonly jiraAssignee: string;
```

- *Type:* string

Issue assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}

---

##### `jiraAttachEvidenceCsv`<sup>Optional</sup> <a name="jiraAttachEvidenceCsv" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraAttachEvidenceCsv"></a>

```typescript
public readonly jiraAttachEvidenceCsv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Upload issue evidence CSV as attachment? - Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}

---

##### `jiraComponents`<sup>Optional</sup> <a name="jiraComponents" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraComponents"></a>

```typescript
public readonly jiraComponents: string[];
```

- *Type:* string[]

Issue components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}

---

##### `jiraCustomFields`<sup>Optional</sup> <a name="jiraCustomFields" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraCustomFields"></a>

```typescript
public readonly jiraCustomFields: string;
```

- *Type:* string

Custom configuration fields as specified in Jira.

Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}

---

##### `jiraDescription`<sup>Optional</sup> <a name="jiraDescription" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraDescription"></a>

```typescript
public readonly jiraDescription: string;
```

- *Type:* string

Issue description - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}

---

##### `jiraFixVersion`<sup>Optional</sup> <a name="jiraFixVersion" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraFixVersion"></a>

```typescript
public readonly jiraFixVersion: string[];
```

- *Type:* string[]

Issue fix versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}

---

##### `jiraIssueType`<sup>Optional</sup> <a name="jiraIssueType" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraIssueType"></a>

```typescript
public readonly jiraIssueType: string;
```

- *Type:* string

Issue type - Defaults to `{{`Vulnerability`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}

---

##### `jiraLabels`<sup>Optional</sup> <a name="jiraLabels" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraLabels"></a>

```typescript
public readonly jiraLabels: string[];
```

- *Type:* string[]

Issue labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}

---

##### `jiraPriority`<sup>Optional</sup> <a name="jiraPriority" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraPriority"></a>

```typescript
public readonly jiraPriority: string;
```

- *Type:* string

Issue priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}

---

##### `jiraProject`<sup>Optional</sup> <a name="jiraProject" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraProject"></a>

```typescript
public readonly jiraProject: string;
```

- *Type:* string

Issue project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}

---

##### `jiraSummary`<sup>Optional</sup> <a name="jiraSummary" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.jiraSummary"></a>

```typescript
public readonly jiraSummary: string;
```

- *Type:* string

Issue summary - Defaults to `{{`Wiz Issue: {{control.name}}`}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-wiz.automationRuleJiraCreateTicket.AutomationRuleJiraCreateTicketConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Wiz internal ID for a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}

---



