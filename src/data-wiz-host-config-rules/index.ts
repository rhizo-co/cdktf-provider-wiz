/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizHostConfigRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host Configuration Rule enabled status.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#enabled DataWizHostConfigRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How many results to return
    - Defaults to `500`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#first DataWizHostConfigRules#first}
  */
  readonly first?: number;
  /**
  * Search rules by any of securityFramework | securitySubCategory | securityCategory.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#framework_category DataWizHostConfigRules#framework_category}
  */
  readonly frameworkCategory?: string[];
  /**
  * Free text search on id, name, externalId.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#search DataWizHostConfigRules#search}
  */
  readonly search?: string;
  /**
  * Search by target platforms.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules#target_platform DataWizHostConfigRules#target_platform}
  */
  readonly targetPlatform?: string[];
}
export interface DataWizHostConfigRulesHostConfigurationRules {
}

export function dataWizHostConfigRulesHostConfigurationRulesToTerraform(struct?: DataWizHostConfigRulesHostConfigurationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataWizHostConfigRulesHostConfigurationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataWizHostConfigRulesHostConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizHostConfigRulesHostConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // builtin - computed: true, optional: false, required: false
  public get builtin() {
    return this.getBooleanAttribute('builtin');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direct_oval - computed: true, optional: false, required: false
  public get directOval() {
    return this.getStringAttribute('direct_oval');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_sub_category_ids - computed: true, optional: false, required: false
  public get securitySubCategoryIds() {
    return this.getListAttribute('security_sub_category_ids');
  }

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // target_platform_ids - computed: true, optional: false, required: false
  public get targetPlatformIds() {
    return this.getListAttribute('target_platform_ids');
  }
}

export class DataWizHostConfigRulesHostConfigurationRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataWizHostConfigRulesHostConfigurationRulesOutputReference {
    return new DataWizHostConfigRulesHostConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules wiz_host_config_rules}
*/
export class DataWizHostConfigRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_host_config_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/host_config_rules wiz_host_config_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizHostConfigRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWizHostConfigRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wiz_host_config_rules',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.1.6',
        providerVersionConstraint: '~> 1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._first = config.first;
    this._frameworkCategory = config.frameworkCategory;
    this._search = config.search;
    this._targetPlatform = config.targetPlatform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // framework_category - computed: false, optional: true, required: false
  private _frameworkCategory?: string[]; 
  public get frameworkCategory() {
    return this.getListAttribute('framework_category');
  }
  public set frameworkCategory(value: string[]) {
    this._frameworkCategory = value;
  }
  public resetFrameworkCategory() {
    this._frameworkCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkCategoryInput() {
    return this._frameworkCategory;
  }

  // host_configuration_rules - computed: true, optional: false, required: false
  private _hostConfigurationRules = new DataWizHostConfigRulesHostConfigurationRulesList(this, "host_configuration_rules", true);
  public get hostConfigurationRules() {
    return this._hostConfigurationRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // target_platform - computed: false, optional: true, required: false
  private _targetPlatform?: string[]; 
  public get targetPlatform() {
    return this.getListAttribute('target_platform');
  }
  public set targetPlatform(value: string[]) {
    this._targetPlatform = value;
  }
  public resetTargetPlatform() {
    this._targetPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformInput() {
    return this._targetPlatform;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      first: cdktf.numberToTerraform(this._first),
      framework_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frameworkCategory),
      search: cdktf.stringToTerraform(this._search),
      target_platform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetPlatform),
    };
  }
}
