// https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControlAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of control IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations#control_ids ControlAssociations#control_ids}
  */
  readonly controlIds: string[];
  /**
  * Details of the association. This information is not used to manage resources but can serve as notes or documentation for the associations.
    - Defaults to `{{`undefined`}}`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations#details ControlAssociations#details}
  */
  readonly details?: string;
  /**
  * List of security sub-category IDs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations#security_sub_category_ids ControlAssociations#security_sub_category_ids}
  */
  readonly securitySubCategoryIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations wiz_control_associations}
*/
export class ControlAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_control_associations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/control_associations wiz_control_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControlAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: ControlAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_control_associations',
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
    this._controlIds = config.controlIds;
    this._details = config.details;
    this._securitySubCategoryIds = config.securitySubCategoryIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_ids - computed: false, optional: false, required: true
  private _controlIds?: string[]; 
  public get controlIds() {
    return this.getListAttribute('control_ids');
  }
  public set controlIds(value: string[]) {
    this._controlIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlIdsInput() {
    return this._controlIds;
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
      control_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlIds),
      details: cdktf.stringToTerraform(this._details),
      security_sub_category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitySubCategoryIds),
    };
  }
}
