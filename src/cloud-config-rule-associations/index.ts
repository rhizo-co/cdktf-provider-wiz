// https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudConfigRuleAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of cloud configuration rule IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#cloud_config_rule_ids CloudConfigRuleAssociations#cloud_config_rule_ids}
  */
  readonly cloudConfigRuleIds: string[];
  /**
  * Details of the association. This information is not used to manage resources but can serve as notes or documentation for the associations.
    - Defaults to `{{`undefined`}}`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#details CloudConfigRuleAssociations#details}
  */
  readonly details?: string;
  /**
  * List of security sub-category IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations#security_sub_category_ids CloudConfigRuleAssociations#security_sub_category_ids}
  */
  readonly securitySubCategoryIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations}
*/
export class CloudConfigRuleAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cloud_config_rule_associations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/cloud_config_rule_associations wiz_cloud_config_rule_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudConfigRuleAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudConfigRuleAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_cloud_config_rule_associations',
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
    this._cloudConfigRuleIds = config.cloudConfigRuleIds;
    this._details = config.details;
    this._securitySubCategoryIds = config.securitySubCategoryIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_config_rule_ids - computed: false, optional: false, required: true
  private _cloudConfigRuleIds?: string[]; 
  public get cloudConfigRuleIds() {
    return this.getListAttribute('cloud_config_rule_ids');
  }
  public set cloudConfigRuleIds(value: string[]) {
    this._cloudConfigRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigRuleIdsInput() {
    return this._cloudConfigRuleIds;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_sub_category_ids - computed: false, optional: false, required: true
  private _securitySubCategoryIds?: string[]; 
  public get securitySubCategoryIds() {
    return this.getListAttribute('security_sub_category_ids');
  }
  public set securitySubCategoryIds(value: string[]) {
    this._securitySubCategoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySubCategoryIdsInput() {
    return this._securitySubCategoryIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_config_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudConfigRuleIds),
      details: cdktf.stringToTerraform(this._details),
      security_sub_category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitySubCategoryIds),
    };
  }
}
