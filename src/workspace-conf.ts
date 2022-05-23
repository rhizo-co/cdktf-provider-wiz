// https://www.terraform.io/docs/providers/databricks/r/workspace_conf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/workspace_conf#custom_config WorkspaceConf#custom_config}
  */
  readonly customConfig?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/workspace_conf databricks_workspace_conf}
*/
export class WorkspaceConf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_conf";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/workspace_conf databricks_workspace_conf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_conf',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customConfig = config.customConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_config - computed: false, optional: true, required: false
  private _customConfig?: { [key: string]: string }; 
  public get customConfig() {
    return this.getStringMapAttribute('custom_config');
  }
  public set customConfig(value: { [key: string]: string }) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._customConfig),
    };
  }
}
