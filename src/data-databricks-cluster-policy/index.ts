/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksClusterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}
  */
  readonly definition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}
  */
  readonly maxClustersPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}
  */
  readonly policyFamilyDefinitionOverrides?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}
  */
  readonly policyFamilyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy databricks_cluster_policy}
*/
export class DataDatabricksClusterPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/data-sources/cluster_policy databricks_cluster_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksClusterPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksClusterPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.24.0',
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
    this._definition = config.definition;
    this._description = config.description;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._maxClustersPerUser = config.maxClustersPerUser;
    this._name = config.name;
    this._policyFamilyDefinitionOverrides = config.policyFamilyDefinitionOverrides;
    this._policyFamilyId = config.policyFamilyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // max_clusters_per_user - computed: true, optional: true, required: false
  private _maxClustersPerUser?: number; 
  public get maxClustersPerUser() {
    return this.getNumberAttribute('max_clusters_per_user');
  }
  public set maxClustersPerUser(value: number) {
    this._maxClustersPerUser = value;
  }
  public resetMaxClustersPerUser() {
    this._maxClustersPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersPerUserInput() {
    return this._maxClustersPerUser;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_family_definition_overrides - computed: true, optional: true, required: false
  private _policyFamilyDefinitionOverrides?: string; 
  public get policyFamilyDefinitionOverrides() {
    return this.getStringAttribute('policy_family_definition_overrides');
  }
  public set policyFamilyDefinitionOverrides(value: string) {
    this._policyFamilyDefinitionOverrides = value;
  }
  public resetPolicyFamilyDefinitionOverrides() {
    this._policyFamilyDefinitionOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFamilyDefinitionOverridesInput() {
    return this._policyFamilyDefinitionOverrides;
  }

  // policy_family_id - computed: true, optional: true, required: false
  private _policyFamilyId?: string; 
  public get policyFamilyId() {
    return this.getStringAttribute('policy_family_id');
  }
  public set policyFamilyId(value: string) {
    this._policyFamilyId = value;
  }
  public resetPolicyFamilyId() {
    this._policyFamilyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFamilyIdInput() {
    return this._policyFamilyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      max_clusters_per_user: cdktf.numberToTerraform(this._maxClustersPerUser),
      name: cdktf.stringToTerraform(this._name),
      policy_family_definition_overrides: cdktf.stringToTerraform(this._policyFamilyDefinitionOverrides),
      policy_family_id: cdktf.stringToTerraform(this._policyFamilyId),
    };
  }
}
