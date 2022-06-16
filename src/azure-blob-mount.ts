// https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureBlobMountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#auth_type AzureBlobMount#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#container_name AzureBlobMount#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#directory AzureBlobMount#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#id AzureBlobMount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#mount_name AzureBlobMount#mount_name}
  */
  readonly mountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}
  */
  readonly tokenSecretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}
  */
  readonly tokenSecretScope: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount databricks_azure_blob_mount}
*/
export class AzureBlobMount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_azure_blob_mount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/azure_blob_mount databricks_azure_blob_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureBlobMountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureBlobMountConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_azure_blob_mount',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.6.1',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authType = config.authType;
    this._clusterId = config.clusterId;
    this._containerName = config.containerName;
    this._directory = config.directory;
    this._id = config.id;
    this._mountName = config.mountName;
    this._storageAccountName = config.storageAccountName;
    this._tokenSecretKey = config.tokenSecretKey;
    this._tokenSecretScope = config.tokenSecretScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
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

  // mount_name - computed: false, optional: false, required: true
  private _mountName?: string; 
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }
  public set mountName(value: string) {
    this._mountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountNameInput() {
    return this._mountName;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // token_secret_key - computed: false, optional: false, required: true
  private _tokenSecretKey?: string; 
  public get tokenSecretKey() {
    return this.getStringAttribute('token_secret_key');
  }
  public set tokenSecretKey(value: string) {
    this._tokenSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretKeyInput() {
    return this._tokenSecretKey;
  }

  // token_secret_scope - computed: false, optional: false, required: true
  private _tokenSecretScope?: string; 
  public get tokenSecretScope() {
    return this.getStringAttribute('token_secret_scope');
  }
  public set tokenSecretScope(value: string) {
    this._tokenSecretScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretScopeInput() {
    return this._tokenSecretScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      container_name: cdktf.stringToTerraform(this._containerName),
      directory: cdktf.stringToTerraform(this._directory),
      id: cdktf.stringToTerraform(this._id),
      mount_name: cdktf.stringToTerraform(this._mountName),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      token_secret_key: cdktf.stringToTerraform(this._tokenSecretKey),
      token_secret_scope: cdktf.stringToTerraform(this._tokenSecretScope),
    };
  }
}
