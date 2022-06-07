// https://www.terraform.io/docs/providers/databricks/r/user_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserInstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/user_instance_profile#id UserInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/user_instance_profile#instance_profile_id UserInstanceProfile#instance_profile_id}
  */
  readonly instanceProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/user_instance_profile#user_id UserInstanceProfile#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/user_instance_profile databricks_user_instance_profile}
*/
export class UserInstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_user_instance_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/user_instance_profile databricks_user_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserInstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UserInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_user_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.6.0',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._instanceProfileId = config.instanceProfileId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_profile_id: cdktf.stringToTerraform(this._instanceProfileId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
