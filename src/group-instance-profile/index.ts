// https://www.terraform.io/docs/providers/databricks/r/group_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupInstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group_instance_profile#group_id GroupInstanceProfile#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group_instance_profile#id GroupInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/group_instance_profile#instance_profile_id GroupInstanceProfile#instance_profile_id}
  */
  readonly instanceProfileId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/group_instance_profile databricks_group_instance_profile}
*/
export class GroupInstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_group_instance_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/group_instance_profile databricks_group_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupInstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GroupInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_group_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.1',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._instanceProfileId = config.instanceProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_profile_id - computed: false, optional: false, required: true
  private _instanceProfileId?: string; 
  public get instanceProfileId() {
    return this.getStringAttribute('instance_profile_id');
  }
  public set instanceProfileId(value: string) {
    this._instanceProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileIdInput() {
    return this._instanceProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_id: cdktf.stringToTerraform(this._instanceProfileId),
    };
  }
}
