# `data_wiz_cloud_config_rules`

Refer to the Terraform Registory for docs: [`data_wiz_cloud_config_rules`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules).

# `dataWizCloudConfigRules` Submodule <a name="`dataWizCloudConfigRules` Submodule" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataWizCloudConfigRules <a name="DataWizCloudConfigRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudConfigRules.DataWizCloudConfigRules(scope: Construct, id: string, config?: DataWizCloudConfigRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig">DataWizCloudConfigRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory">resetFrameworkCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl">resetFunctionAsControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation">resetHasAutoRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation">resetHasRemediation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy">resetIsOpaPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType">resetMatcherType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll">resetRiskEqualsAll</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny">resetRiskEqualsAny</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType">resetSubjectEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType">resetTargetNativeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCloudProvider` <a name="resetCloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetEnabled` <a name="resetEnabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFirst` <a name="resetFirst" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetFrameworkCategory` <a name="resetFrameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFrameworkCategory"></a>

```typescript
public resetFrameworkCategory(): void
```

##### `resetFunctionAsControl` <a name="resetFunctionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetFunctionAsControl"></a>

```typescript
public resetFunctionAsControl(): void
```

##### `resetHasAutoRemediation` <a name="resetHasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasAutoRemediation"></a>

```typescript
public resetHasAutoRemediation(): void
```

##### `resetHasRemediation` <a name="resetHasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetHasRemediation"></a>

```typescript
public resetHasRemediation(): void
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIds"></a>

```typescript
public resetIds(): void
```

##### `resetIsOpaPolicy` <a name="resetIsOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetIsOpaPolicy"></a>

```typescript
public resetIsOpaPolicy(): void
```

##### `resetMatcherType` <a name="resetMatcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetMatcherType"></a>

```typescript
public resetMatcherType(): void
```

##### `resetProject` <a name="resetProject" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRiskEqualsAll` <a name="resetRiskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAll"></a>

```typescript
public resetRiskEqualsAll(): void
```

##### `resetRiskEqualsAny` <a name="resetRiskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetRiskEqualsAny"></a>

```typescript
public resetRiskEqualsAny(): void
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetScopeAccountIds"></a>

```typescript
public resetScopeAccountIds(): void
```

##### `resetSearch` <a name="resetSearch" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetServiceType` <a name="resetServiceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSubjectEntityType` <a name="resetSubjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetSubjectEntityType"></a>

```typescript
public resetSubjectEntityType(): void
```

##### `resetTargetNativeType` <a name="resetTargetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.resetTargetNativeType"></a>

```typescript
public resetTargetNativeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules">cloudConfigurationRules</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput">createdByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput">frameworkCategoryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput">functionAsControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput">hasAutoRemediationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput">hasRemediationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput">isOpaPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput">matcherTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput">projectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput">riskEqualsAllInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput">riskEqualsAnyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput">severityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput">subjectEntityTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput">targetNativeTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy">createdBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory">frameworkCategory</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl">functionAsControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation">hasRemediation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy">isOpaPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType">matcherType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project">project</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll">riskEqualsAll</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny">riskEqualsAny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds">scopeAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType">serviceType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity">severity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType">subjectEntityType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType">targetNativeType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudConfigurationRules`<sup>Required</sup> <a name="cloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudConfigurationRules"></a>

```typescript
public readonly cloudConfigurationRules: DataWizCloudConfigRulesCloudConfigurationRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList">DataWizCloudConfigRulesCloudConfigurationRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string[];
```

- *Type:* string[]

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdByInput"></a>

```typescript
public readonly createdByInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `frameworkCategoryInput`<sup>Optional</sup> <a name="frameworkCategoryInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategoryInput"></a>

```typescript
public readonly frameworkCategoryInput: string[];
```

- *Type:* string[]

---

##### `functionAsControlInput`<sup>Optional</sup> <a name="functionAsControlInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControlInput"></a>

```typescript
public readonly functionAsControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasAutoRemediationInput`<sup>Optional</sup> <a name="hasAutoRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediationInput"></a>

```typescript
public readonly hasAutoRemediationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasRemediationInput`<sup>Optional</sup> <a name="hasRemediationInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediationInput"></a>

```typescript
public readonly hasRemediationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `isOpaPolicyInput`<sup>Optional</sup> <a name="isOpaPolicyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicyInput"></a>

```typescript
public readonly isOpaPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matcherTypeInput`<sup>Optional</sup> <a name="matcherTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherTypeInput"></a>

```typescript
public readonly matcherTypeInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.projectInput"></a>

```typescript
public readonly projectInput: string[];
```

- *Type:* string[]

---

##### `riskEqualsAllInput`<sup>Optional</sup> <a name="riskEqualsAllInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAllInput"></a>

```typescript
public readonly riskEqualsAllInput: string[];
```

- *Type:* string[]

---

##### `riskEqualsAnyInput`<sup>Optional</sup> <a name="riskEqualsAnyInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAnyInput"></a>

```typescript
public readonly riskEqualsAnyInput: string[];
```

- *Type:* string[]

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIdsInput"></a>

```typescript
public readonly scopeAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string[];
```

- *Type:* string[]

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severityInput"></a>

```typescript
public readonly severityInput: string[];
```

- *Type:* string[]

---

##### `subjectEntityTypeInput`<sup>Optional</sup> <a name="subjectEntityTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityTypeInput"></a>

```typescript
public readonly subjectEntityTypeInput: string[];
```

- *Type:* string[]

---

##### `targetNativeTypeInput`<sup>Optional</sup> <a name="targetNativeTypeInput" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeTypeInput"></a>

```typescript
public readonly targetNativeTypeInput: string[];
```

- *Type:* string[]

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string[];
```

- *Type:* string[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.createdBy"></a>

```typescript
public readonly createdBy: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `first`<sup>Required</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `frameworkCategory`<sup>Required</sup> <a name="frameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.frameworkCategory"></a>

```typescript
public readonly frameworkCategory: string[];
```

- *Type:* string[]

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.functionAsControl"></a>

```typescript
public readonly functionAsControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasAutoRemediation`<sup>Required</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasAutoRemediation"></a>

```typescript
public readonly hasAutoRemediation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasRemediation`<sup>Required</sup> <a name="hasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.hasRemediation"></a>

```typescript
public readonly hasRemediation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `isOpaPolicy`<sup>Required</sup> <a name="isOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.isOpaPolicy"></a>

```typescript
public readonly isOpaPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matcherType`<sup>Required</sup> <a name="matcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.matcherType"></a>

```typescript
public readonly matcherType: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.project"></a>

```typescript
public readonly project: string[];
```

- *Type:* string[]

---

##### `riskEqualsAll`<sup>Required</sup> <a name="riskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAll"></a>

```typescript
public readonly riskEqualsAll: string[];
```

- *Type:* string[]

---

##### `riskEqualsAny`<sup>Required</sup> <a name="riskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.riskEqualsAny"></a>

```typescript
public readonly riskEqualsAny: string[];
```

- *Type:* string[]

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: string[];
```

- *Type:* string[]

---

##### `search`<sup>Required</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.serviceType"></a>

```typescript
public readonly serviceType: string[];
```

- *Type:* string[]

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.severity"></a>

```typescript
public readonly severity: string[];
```

- *Type:* string[]

---

##### `subjectEntityType`<sup>Required</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.subjectEntityType"></a>

```typescript
public readonly subjectEntityType: string[];
```

- *Type:* string[]

---

##### `targetNativeType`<sup>Required</sup> <a name="targetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.targetNativeType"></a>

```typescript
public readonly targetNativeType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataWizCloudConfigRulesCloudConfigurationRules <a name="DataWizCloudConfigRulesCloudConfigurationRules" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

const dataWizCloudConfigRulesCloudConfigurationRules: dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules = { ... }
```


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

const dataWizCloudConfigRulesCloudConfigurationRulesExternalReferences: dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences = { ... }
```


### DataWizCloudConfigRulesConfig <a name="DataWizCloudConfigRulesConfig" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

const dataWizCloudConfigRulesConfig: dataWizCloudConfigRules.DataWizCloudConfigRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider">cloudProvider</a></code> | <code>string[]</code> | Find CSPM rules related to cloud provider. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy">createdBy</a></code> | <code>string[]</code> | Search rules by user. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | CSPM Rule enabled status. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first">first</a></code> | <code>number</code> | How many results to return - Defaults to `500`. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory">frameworkCategory</a></code> | <code>string[]</code> | Search rules by any of securityFramework \| securitySubCategory \| securityCategory. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl">functionAsControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Search by function as control. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Rule has auto remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation">hasRemediation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Rule has remediation. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids">ids</a></code> | <code>string[]</code> | GetSearch by IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy">isOpaPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Search by opaPolicy presence. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType">matcherType</a></code> | <code>string[]</code> | Search rules by target native type. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project">project</a></code> | <code>string[]</code> | Search by project. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll">riskEqualsAll</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny">riskEqualsAny</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>string[]</code> | Find CSPM rules applied on cloud account IDs. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search">search</a></code> | <code>string</code> | Free text search on CSPM name or resource ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType">serviceType</a></code> | <code>string[]</code> | Find CSPM rules related to the service. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity">severity</a></code> | <code>string[]</code> | CSPM Rule severity. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType">subjectEntityType</a></code> | <code>string[]</code> | Find rules by their entity type subject. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType">targetNativeType</a></code> | <code>string[]</code> | Search rules by target native type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string[];
```

- *Type:* string[]

Find CSPM rules related to cloud provider.

Allowed values: 
    - GCP
    - AWS
    - Azure
    - OCI
    - Alibaba
    - vSphere
    - OpenShift
    - Kubernetes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.createdBy"></a>

```typescript
public readonly createdBy: string[];
```

- *Type:* string[]

Search rules by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

CSPM Rule enabled status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}

---

##### `first`<sup>Optional</sup> <a name="first" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

How many results to return - Defaults to `500`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}

---

##### `frameworkCategory`<sup>Optional</sup> <a name="frameworkCategory" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.frameworkCategory"></a>

```typescript
public readonly frameworkCategory: string[];
```

- *Type:* string[]

Search rules by any of securityFramework | securitySubCategory | securityCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}

---

##### `functionAsControl`<sup>Optional</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.functionAsControl"></a>

```typescript
public readonly functionAsControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Search by function as control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}

---

##### `hasAutoRemediation`<sup>Optional</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasAutoRemediation"></a>

```typescript
public readonly hasAutoRemediation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Rule has auto remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}

---

##### `hasRemediation`<sup>Optional</sup> <a name="hasRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.hasRemediation"></a>

```typescript
public readonly hasRemediation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Rule has remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

GetSearch by IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}

---

##### `isOpaPolicy`<sup>Optional</sup> <a name="isOpaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.isOpaPolicy"></a>

```typescript
public readonly isOpaPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Search by opaPolicy presence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}

---

##### `matcherType`<sup>Optional</sup> <a name="matcherType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.matcherType"></a>

```typescript
public readonly matcherType: string[];
```

- *Type:* string[]

Search rules by target native type.

Allowed values: 
    - CLOUD
    - TERRAFORM
    - CLOUD_FORMATION
    - KUBERNETES
    - AZURE_RESOURCE_MANAGER
    - DOCKER_FILE
    - ADMISSION_CONTROLLER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.project"></a>

```typescript
public readonly project: string[];
```

- *Type:* string[]

Search by project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}

---

##### `riskEqualsAll`<sup>Optional</sup> <a name="riskEqualsAll" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAll"></a>

```typescript
public readonly riskEqualsAll: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}.

---

##### `riskEqualsAny`<sup>Optional</sup> <a name="riskEqualsAny" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.riskEqualsAny"></a>

```typescript
public readonly riskEqualsAny: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.scopeAccountIds"></a>

```typescript
public readonly scopeAccountIds: string[];
```

- *Type:* string[]

Find CSPM rules applied on cloud account IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}

---

##### `search`<sup>Optional</sup> <a name="search" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Free text search on CSPM name or resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.serviceType"></a>

```typescript
public readonly serviceType: string[];
```

- *Type:* string[]

Find CSPM rules related to the service.

Allowed values: 
    - AWS
    - Azure
    - GCP
    - OCI
    - Alibaba
    - AKS
    - EKS
    - GKE
    - Kubernetes
    - OKE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.severity"></a>

```typescript
public readonly severity: string[];
```

- *Type:* string[]

CSPM Rule severity.

Allowed values: 
    - INFORMATIONAL
    - LOW
    - MEDIUM
    - HIGH
    - CRITICAL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}

---

##### `subjectEntityType`<sup>Optional</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.subjectEntityType"></a>

```typescript
public readonly subjectEntityType: string[];
```

- *Type:* string[]

Find rules by their entity type subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}

---

##### `targetNativeType`<sup>Optional</sup> <a name="targetNativeType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesConfig.property.targetNativeType"></a>

```typescript
public readonly targetNativeType: string[];
```

- *Type:* string[]

Search rules by target native type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get"></a>

```typescript
public get(index: number): DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences</a>

---


### DataWizCloudConfigRulesCloudConfigurationRulesList <a name="DataWizCloudConfigRulesCloudConfigurationRulesList" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get"></a>

```typescript
public get(index: number): DataWizCloudConfigRulesCloudConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataWizCloudConfigRulesCloudConfigurationRulesOutputReference <a name="DataWizCloudConfigRulesCloudConfigurationRulesOutputReference" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { dataWizCloudConfigRules } from 'rhizo-co-terraform-provider-wiz'

new dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin">builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId">controlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences">externalReferences</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl">functionAsControl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId">graphId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation">hasAutoRemediation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds">iacMatcherIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy">opaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions">remediationInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts">scopeAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds">securitySubCategoryIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId">shortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType">subjectEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt">supportsNrt</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes">targetNativeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `builtin`<sup>Required</sup> <a name="builtin" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.builtin"></a>

```typescript
public readonly builtin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalReferences`<sup>Required</sup> <a name="externalReferences" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.externalReferences"></a>

```typescript
public readonly externalReferences: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList">DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList</a>

---

##### `functionAsControl`<sup>Required</sup> <a name="functionAsControl" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.functionAsControl"></a>

```typescript
public readonly functionAsControl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `graphId`<sup>Required</sup> <a name="graphId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.graphId"></a>

```typescript
public readonly graphId: string;
```

- *Type:* string

---

##### `hasAutoRemediation`<sup>Required</sup> <a name="hasAutoRemediation" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.hasAutoRemediation"></a>

```typescript
public readonly hasAutoRemediation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iacMatcherIds`<sup>Required</sup> <a name="iacMatcherIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.iacMatcherIds"></a>

```typescript
public readonly iacMatcherIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opaPolicy`<sup>Required</sup> <a name="opaPolicy" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.opaPolicy"></a>

```typescript
public readonly opaPolicy: string;
```

- *Type:* string

---

##### `remediationInstructions`<sup>Required</sup> <a name="remediationInstructions" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.remediationInstructions"></a>

```typescript
public readonly remediationInstructions: string;
```

- *Type:* string

---

##### `scopeAccounts`<sup>Required</sup> <a name="scopeAccounts" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.scopeAccounts"></a>

```typescript
public readonly scopeAccounts: string[];
```

- *Type:* string[]

---

##### `securitySubCategoryIds`<sup>Required</sup> <a name="securitySubCategoryIds" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.securitySubCategoryIds"></a>

```typescript
public readonly securitySubCategoryIds: string[];
```

- *Type:* string[]

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `shortId`<sup>Required</sup> <a name="shortId" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.shortId"></a>

```typescript
public readonly shortId: string;
```

- *Type:* string

---

##### `subjectEntityType`<sup>Required</sup> <a name="subjectEntityType" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.subjectEntityType"></a>

```typescript
public readonly subjectEntityType: string;
```

- *Type:* string

---

##### `supportsNrt`<sup>Required</sup> <a name="supportsNrt" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.supportsNrt"></a>

```typescript
public readonly supportsNrt: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetNativeTypes`<sup>Required</sup> <a name="targetNativeTypes" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.targetNativeTypes"></a>

```typescript
public readonly targetNativeTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataWizCloudConfigRulesCloudConfigurationRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.dataWizCloudConfigRules.DataWizCloudConfigRulesCloudConfigurationRules">DataWizCloudConfigRulesCloudConfigurationRules</a>

---



