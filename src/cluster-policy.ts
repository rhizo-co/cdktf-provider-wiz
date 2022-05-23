// https://www.terraform.io/docs/providers/databricks/r/cluster_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy definition JSON document expressed in
Databricks Policy Definition Language.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#definition ClusterPolicy#definition}
  */
  readonly definition?: string;
  /**
  * Cluster policy name. This must be unique.
Length must be between 1 and 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#name ClusterPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy databricks_cluster_policy}
*/
export class ClusterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy databricks_cluster_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster_policy',
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
    this._definition = config.definition;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
