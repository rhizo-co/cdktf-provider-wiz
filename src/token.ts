// https://www.terraform.io/docs/providers/databricks/r/token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#comment Token#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#creation_time Token#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#expiry_time Token#expiry_time}
  */
  readonly expiryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#id Token#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#lifetime_seconds Token#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/token#token_id Token#token_id}
  */
  readonly tokenId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/token databricks_token}
*/
export class Token extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/token databricks_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_token',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.3.1',
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
    this._comment = config.comment;
    this._creationTime = config.creationTime;
    this._expiryTime = config.expiryTime;
    this._id = config.id;
    this._lifetimeSeconds = config.lifetimeSeconds;
    this._tokenId = config.tokenId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: number; 
  public get expiryTime() {
    return this.getNumberAttribute('expiry_time');
  }
  public set expiryTime(value: number) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
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

  // lifetime_seconds - computed: false, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // token_id - computed: true, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // token_value - computed: true, optional: false, required: false
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      expiry_time: cdktf.numberToTerraform(this._expiryTime),
      id: cdktf.stringToTerraform(this._id),
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
      token_id: cdktf.stringToTerraform(this._tokenId),
    };
  }
}
