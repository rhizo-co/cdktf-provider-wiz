// https://www.terraform.io/docs/providers/databricks/r/git_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/git_credential#force GitCredential#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/git_credential#git_provider GitCredential#git_provider}
  */
  readonly gitProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/git_credential#git_username GitCredential#git_username}
  */
  readonly gitUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/git_credential#id GitCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/git_credential#personal_access_token GitCredential#personal_access_token}
  */
  readonly personalAccessToken?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/git_credential databricks_git_credential}
*/
export class GitCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_git_credential";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/git_credential databricks_git_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: GitCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_git_credential',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.0',
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
    this._force = config.force;
    this._gitProvider = config.gitProvider;
    this._gitUsername = config.gitUsername;
    this._id = config.id;
    this._personalAccessToken = config.personalAccessToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // git_provider - computed: false, optional: false, required: true
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
  }

  // git_username - computed: false, optional: true, required: false
  private _gitUsername?: string; 
  public get gitUsername() {
    return this.getStringAttribute('git_username');
  }
  public set gitUsername(value: string) {
    this._gitUsername = value;
  }
  public resetGitUsername() {
    this._gitUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernameInput() {
    return this._gitUsername;
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

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      git_username: cdktf.stringToTerraform(this._gitUsername),
      id: cdktf.stringToTerraform(this._id),
      personal_access_token: cdktf.stringToTerraform(this._personalAccessToken),
    };
  }
}
