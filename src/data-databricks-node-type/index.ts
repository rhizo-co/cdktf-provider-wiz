// https://www.terraform.io/docs/providers/databricks/d/node_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksNodeTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#category DataDatabricksNodeType#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}
  */
  readonly gbPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#graviton DataDatabricksNodeType#graviton}
  */
  readonly graviton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#id DataDatabricksNodeType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}
  */
  readonly isIoCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#local_disk DataDatabricksNodeType#local_disk}
  */
  readonly localDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#min_cores DataDatabricksNodeType#min_cores}
  */
  readonly minCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#min_gpus DataDatabricksNodeType#min_gpus}
  */
  readonly minGpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}
  */
  readonly minMemoryGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}
  */
  readonly photonDriverCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}
  */
  readonly photonWorkerCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}
  */
  readonly supportPortForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/node_type#vcpu DataDatabricksNodeType#vcpu}
  */
  readonly vcpu?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/node_type databricks_node_type}
*/
export class DataDatabricksNodeType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_node_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/node_type databricks_node_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksNodeTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksNodeTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_node_type',
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
    this._category = config.category;
    this._gbPerCore = config.gbPerCore;
    this._graviton = config.graviton;
    this._id = config.id;
    this._isIoCacheEnabled = config.isIoCacheEnabled;
    this._localDisk = config.localDisk;
    this._minCores = config.minCores;
    this._minGpus = config.minGpus;
    this._minMemoryGb = config.minMemoryGb;
    this._photonDriverCapable = config.photonDriverCapable;
    this._photonWorkerCapable = config.photonWorkerCapable;
    this._supportPortForwarding = config.supportPortForwarding;
    this._vcpu = config.vcpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // gb_per_core - computed: false, optional: true, required: false
  private _gbPerCore?: number; 
  public get gbPerCore() {
    return this.getNumberAttribute('gb_per_core');
  }
  public set gbPerCore(value: number) {
    this._gbPerCore = value;
  }
  public resetGbPerCore() {
    this._gbPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbPerCoreInput() {
    return this._gbPerCore;
  }

  // graviton - computed: false, optional: true, required: false
  private _graviton?: boolean | cdktf.IResolvable; 
  public get graviton() {
    return this.getBooleanAttribute('graviton');
  }
  public set graviton(value: boolean | cdktf.IResolvable) {
    this._graviton = value;
  }
  public resetGraviton() {
    this._graviton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gravitonInput() {
    return this._graviton;
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

  // is_io_cache_enabled - computed: false, optional: true, required: false
  private _isIoCacheEnabled?: boolean | cdktf.IResolvable; 
  public get isIoCacheEnabled() {
    return this.getBooleanAttribute('is_io_cache_enabled');
  }
  public set isIoCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._isIoCacheEnabled = value;
  }
  public resetIsIoCacheEnabled() {
    this._isIoCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIoCacheEnabledInput() {
    return this._isIoCacheEnabled;
  }

  // local_disk - computed: false, optional: true, required: false
  private _localDisk?: boolean | cdktf.IResolvable; 
  public get localDisk() {
    return this.getBooleanAttribute('local_disk');
  }
  public set localDisk(value: boolean | cdktf.IResolvable) {
    this._localDisk = value;
  }
  public resetLocalDisk() {
    this._localDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskInput() {
    return this._localDisk;
  }

  // min_cores - computed: false, optional: true, required: false
  private _minCores?: number; 
  public get minCores() {
    return this.getNumberAttribute('min_cores');
  }
  public set minCores(value: number) {
    this._minCores = value;
  }
  public resetMinCores() {
    this._minCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCoresInput() {
    return this._minCores;
  }

  // min_gpus - computed: false, optional: true, required: false
  private _minGpus?: number; 
  public get minGpus() {
    return this.getNumberAttribute('min_gpus');
  }
  public set minGpus(value: number) {
    this._minGpus = value;
  }
  public resetMinGpus() {
    this._minGpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minGpusInput() {
    return this._minGpus;
  }

  // min_memory_gb - computed: false, optional: true, required: false
  private _minMemoryGb?: number; 
  public get minMemoryGb() {
    return this.getNumberAttribute('min_memory_gb');
  }
  public set minMemoryGb(value: number) {
    this._minMemoryGb = value;
  }
  public resetMinMemoryGb() {
    this._minMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryGbInput() {
    return this._minMemoryGb;
  }

  // photon_driver_capable - computed: false, optional: true, required: false
  private _photonDriverCapable?: boolean | cdktf.IResolvable; 
  public get photonDriverCapable() {
    return this.getBooleanAttribute('photon_driver_capable');
  }
  public set photonDriverCapable(value: boolean | cdktf.IResolvable) {
    this._photonDriverCapable = value;
  }
  public resetPhotonDriverCapable() {
    this._photonDriverCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonDriverCapableInput() {
    return this._photonDriverCapable;
  }

  // photon_worker_capable - computed: false, optional: true, required: false
  private _photonWorkerCapable?: boolean | cdktf.IResolvable; 
  public get photonWorkerCapable() {
    return this.getBooleanAttribute('photon_worker_capable');
  }
  public set photonWorkerCapable(value: boolean | cdktf.IResolvable) {
    this._photonWorkerCapable = value;
  }
  public resetPhotonWorkerCapable() {
    this._photonWorkerCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonWorkerCapableInput() {
    return this._photonWorkerCapable;
  }

  // support_port_forwarding - computed: false, optional: true, required: false
  private _supportPortForwarding?: boolean | cdktf.IResolvable; 
  public get supportPortForwarding() {
    return this.getBooleanAttribute('support_port_forwarding');
  }
  public set supportPortForwarding(value: boolean | cdktf.IResolvable) {
    this._supportPortForwarding = value;
  }
  public resetSupportPortForwarding() {
    this._supportPortForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPortForwardingInput() {
    return this._supportPortForwarding;
  }

  // vcpu - computed: false, optional: true, required: false
  private _vcpu?: boolean | cdktf.IResolvable; 
  public get vcpu() {
    return this.getBooleanAttribute('vcpu');
  }
  public set vcpu(value: boolean | cdktf.IResolvable) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      gb_per_core: cdktf.numberToTerraform(this._gbPerCore),
      graviton: cdktf.booleanToTerraform(this._graviton),
      id: cdktf.stringToTerraform(this._id),
      is_io_cache_enabled: cdktf.booleanToTerraform(this._isIoCacheEnabled),
      local_disk: cdktf.booleanToTerraform(this._localDisk),
      min_cores: cdktf.numberToTerraform(this._minCores),
      min_gpus: cdktf.numberToTerraform(this._minGpus),
      min_memory_gb: cdktf.numberToTerraform(this._minMemoryGb),
      photon_driver_capable: cdktf.booleanToTerraform(this._photonDriverCapable),
      photon_worker_capable: cdktf.booleanToTerraform(this._photonWorkerCapable),
      support_port_forwarding: cdktf.booleanToTerraform(this._supportPortForwarding),
      vcpu: cdktf.booleanToTerraform(this._vcpu),
    };
  }
}