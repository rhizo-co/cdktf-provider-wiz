// https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsBucketPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}
  */
  readonly databricksAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}
  */
  readonly fullAccessRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy databricks_aws_bucket_policy}
*/
export class DataDatabricksAwsBucketPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_bucket_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/aws_bucket_policy databricks_aws_bucket_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAwsBucketPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAwsBucketPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_bucket_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.5.0',
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
    this._bucket = config.bucket;
    this._databricksAccountId = config.databricksAccountId;
    this._fullAccessRole = config.fullAccessRole;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // databricks_account_id - computed: false, optional: true, required: false
  private _databricksAccountId?: string; 
  public get databricksAccountId() {
    return this.getStringAttribute('databricks_account_id');
  }
  public set databricksAccountId(value: string) {
    this._databricksAccountId = value;
  }
  public resetDatabricksAccountId() {
    this._databricksAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksAccountIdInput() {
    return this._databricksAccountId;
  }

  // full_access_role - computed: false, optional: true, required: false
  private _fullAccessRole?: string; 
  public get fullAccessRole() {
    return this.getStringAttribute('full_access_role');
  }
  public set fullAccessRole(value: string) {
    this._fullAccessRole = value;
  }
  public resetFullAccessRole() {
    this._fullAccessRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullAccessRoleInput() {
    return this._fullAccessRole;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      databricks_account_id: cdktf.stringToTerraform(this._databricksAccountId),
      full_access_role: cdktf.stringToTerraform(this._fullAccessRole),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}