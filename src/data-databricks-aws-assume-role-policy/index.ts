// https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAwsAssumeRolePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy#databricks_account_id DataDatabricksAwsAssumeRolePolicy#databricks_account_id}
  */
  readonly databricksAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy#external_id DataDatabricksAwsAssumeRolePolicy#external_id}
  */
  readonly externalId: string;
  /**
  * Grant AssumeRole to Databricks SaasUsageDeliveryRole instead of root account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy#for_log_delivery DataDatabricksAwsAssumeRolePolicy#for_log_delivery}
  */
  readonly forLogDelivery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy#id DataDatabricksAwsAssumeRolePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy databricks_aws_assume_role_policy}
*/
export class DataDatabricksAwsAssumeRolePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_aws_assume_role_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/aws_assume_role_policy databricks_aws_assume_role_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAwsAssumeRolePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAwsAssumeRolePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_aws_assume_role_policy',
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
    this._databricksAccountId = config.databricksAccountId;
    this._externalId = config.externalId;
    this._forLogDelivery = config.forLogDelivery;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // for_log_delivery - computed: false, optional: true, required: false
  private _forLogDelivery?: boolean | cdktf.IResolvable; 
  public get forLogDelivery() {
    return this.getBooleanAttribute('for_log_delivery');
  }
  public set forLogDelivery(value: boolean | cdktf.IResolvable) {
    this._forLogDelivery = value;
  }
  public resetForLogDelivery() {
    this._forLogDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forLogDeliveryInput() {
    return this._forLogDelivery;
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
      databricks_account_id: cdktf.stringToTerraform(this._databricksAccountId),
      external_id: cdktf.stringToTerraform(this._externalId),
      for_log_delivery: cdktf.booleanToTerraform(this._forLogDelivery),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}