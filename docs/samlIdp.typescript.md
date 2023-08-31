# `wiz_saml_idp`

Refer to the Terraform Registory for docs: [`wiz_saml_idp`](https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="rhizo-co-terraform-provider-wiz.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp wiz_saml_idp}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

new samlIdp.SamlIdp(scope: Construct, id: string, config: SamlIdpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig">SamlIdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig">SamlIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping">putGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride">resetAllowManualRoleOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping">resetGroupMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl">resetIssuerUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl">resetLogoutUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole">resetMergeGroupsMappingByRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles">resetUseProviderManagedRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGroupMapping` <a name="putGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping"></a>

```typescript
public putGroupMapping(value: IResolvable | SamlIdpGroupMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.putGroupMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]

---

##### `resetAllowManualRoleOverride` <a name="resetAllowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetAllowManualRoleOverride"></a>

```typescript
public resetAllowManualRoleOverride(): void
```

##### `resetDomains` <a name="resetDomains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetGroupMapping` <a name="resetGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetGroupMapping"></a>

```typescript
public resetGroupMapping(): void
```

##### `resetIssuerUrl` <a name="resetIssuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetIssuerUrl"></a>

```typescript
public resetIssuerUrl(): void
```

##### `resetLogoutUrl` <a name="resetLogoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetLogoutUrl"></a>

```typescript
public resetLogoutUrl(): void
```

##### `resetMergeGroupsMappingByRole` <a name="resetMergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetMergeGroupsMappingByRole"></a>

```typescript
public resetMergeGroupsMappingByRole(): void
```

##### `resetUseProviderManagedRoles` <a name="resetUseProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.resetUseProviderManagedRoles"></a>

```typescript
public resetUseProviderManagedRoles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

samlIdp.SamlIdp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

samlIdp.SamlIdp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

samlIdp.SamlIdp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping">groupMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput">allowManualRoleOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput">groupMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput">loginUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput">logoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput">mergeGroupsMappingByRoleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput">useProviderManagedRolesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride">allowManualRoleOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl">loginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole">mergeGroupsMappingByRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles">useProviderManagedRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupMapping`<sup>Required</sup> <a name="groupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMapping"></a>

```typescript
public readonly groupMapping: SamlIdpGroupMappingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList">SamlIdpGroupMappingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allowManualRoleOverrideInput`<sup>Optional</sup> <a name="allowManualRoleOverrideInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverrideInput"></a>

```typescript
public readonly allowManualRoleOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `groupMappingInput`<sup>Optional</sup> <a name="groupMappingInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.groupMappingInput"></a>

```typescript
public readonly groupMappingInput: IResolvable | SamlIdpGroupMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrlInput"></a>

```typescript
public readonly loginUrlInput: string;
```

- *Type:* string

---

##### `logoutUrlInput`<sup>Optional</sup> <a name="logoutUrlInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrlInput"></a>

```typescript
public readonly logoutUrlInput: string;
```

- *Type:* string

---

##### `mergeGroupsMappingByRoleInput`<sup>Optional</sup> <a name="mergeGroupsMappingByRoleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRoleInput"></a>

```typescript
public readonly mergeGroupsMappingByRoleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `useProviderManagedRolesInput`<sup>Optional</sup> <a name="useProviderManagedRolesInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRolesInput"></a>

```typescript
public readonly useProviderManagedRolesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowManualRoleOverride`<sup>Required</sup> <a name="allowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.allowManualRoleOverride"></a>

```typescript
public readonly allowManualRoleOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

---

##### `mergeGroupsMappingByRole`<sup>Required</sup> <a name="mergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.mergeGroupsMappingByRole"></a>

```typescript
public readonly mergeGroupsMappingByRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `useProviderManagedRoles`<sup>Required</sup> <a name="useProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.useProviderManagedRoles"></a>

```typescript
public readonly useProviderManagedRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.Initializer"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

const samlIdpConfig: samlIdp.SamlIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate">certificate</a></code> | <code>string</code> | PEM certificate from IdP. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl">loginUrl</a></code> | <code>string</code> | IdP Login URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name">name</a></code> | <code>string</code> | IdP name to display in Wiz. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride">allowManualRoleOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, allow overriding the mapped SSO role for specific users. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains">domains</a></code> | <code>string[]</code> | A list of domains the IdP handles. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping">groupMapping</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]</code> | group_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | If undefined, this will default to the login_url value. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl">logoutUrl</a></code> | <code>string</code> | IdP Logout URL. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole">mergeGroupsMappingByRole</a></code> | <code>boolean \| cdktf.IResolvable</code> | Manage group mapping by role? |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles">useProviderManagedRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, roles will be provided by the SSO provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

PEM certificate from IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#certificate SamlIdp#certificate}

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

IdP Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#login_url SamlIdp#login_url}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IdP name to display in Wiz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#name SamlIdp#name}

---

##### `allowManualRoleOverride`<sup>Optional</sup> <a name="allowManualRoleOverride" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.allowManualRoleOverride"></a>

```typescript
public readonly allowManualRoleOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, allow overriding the mapped SSO role for specific users.

Must be set `true` if `use_provided_roles` is false.
- Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

A list of domains the IdP handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#domains SamlIdp#domains}

---

##### `groupMapping`<sup>Optional</sup> <a name="groupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.groupMapping"></a>

```typescript
public readonly groupMapping: IResolvable | SamlIdpGroupMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]

group_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

If undefined, this will default to the login_url value.

Set to the same value as login_url if unsure what value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}

---

##### `logoutUrl`<sup>Optional</sup> <a name="logoutUrl" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.logoutUrl"></a>

```typescript
public readonly logoutUrl: string;
```

- *Type:* string

IdP Logout URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#logout_url SamlIdp#logout_url}

---

##### `mergeGroupsMappingByRole`<sup>Optional</sup> <a name="mergeGroupsMappingByRole" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.mergeGroupsMappingByRole"></a>

```typescript
public readonly mergeGroupsMappingByRole: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Manage group mapping by role?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}

---

##### `useProviderManagedRoles`<sup>Optional</sup> <a name="useProviderManagedRoles" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpConfig.property.useProviderManagedRoles"></a>

```typescript
public readonly useProviderManagedRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, roles will be provided by the SSO provider.

Manage the roles via Wiz portal otherwise.
- Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}

---

### SamlIdpGroupMapping <a name="SamlIdpGroupMapping" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.Initializer"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

const samlIdpGroupMapping: samlIdp.SamlIdpGroupMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId">providerGroupId</a></code> | <code>string</code> | Provider group ID. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role">role</a></code> | <code>string</code> | Wiz Role name. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects">projects</a></code> | <code>string[]</code> | Project mapping. |

---

##### `providerGroupId`<sup>Required</sup> <a name="providerGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.providerGroupId"></a>

```typescript
public readonly providerGroupId: string;
```

- *Type:* string

Provider group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Wiz Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#role SamlIdp#role}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

Project mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/saml_idp#projects SamlIdp#projects}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlIdpGroupMappingList <a name="SamlIdpGroupMappingList" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

new samlIdp.SamlIdpGroupMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get"></a>

```typescript
public get(index: number): SamlIdpGroupMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SamlIdpGroupMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>[]

---


### SamlIdpGroupMappingOutputReference <a name="SamlIdpGroupMappingOutputReference" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer"></a>

```typescript
import { samlIdp } from 'rhizo-co-terraform-provider-wiz'

new samlIdp.SamlIdpGroupMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjects` <a name="resetProjects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput">providerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId">providerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `providerGroupIdInput`<sup>Optional</sup> <a name="providerGroupIdInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupIdInput"></a>

```typescript
public readonly providerGroupIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `projects`<sup>Required</sup> <a name="projects" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `providerGroupId`<sup>Required</sup> <a name="providerGroupId" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.providerGroupId"></a>

```typescript
public readonly providerGroupId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SamlIdpGroupMapping;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-wiz.samlIdp.SamlIdpGroupMapping">SamlIdpGroupMapping</a>

---



