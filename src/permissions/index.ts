// https://www.terraform.io/docs/providers/databricks/r/permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#authorization Permissions#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#cluster_id Permissions#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#cluster_policy_id Permissions#cluster_policy_id}
  */
  readonly clusterPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#directory_id Permissions#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#directory_path Permissions#directory_path}
  */
  readonly directoryPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#experiment_id Permissions#experiment_id}
  */
  readonly experimentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#id Permissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#instance_pool_id Permissions#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#job_id Permissions#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#notebook_id Permissions#notebook_id}
  */
  readonly notebookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#notebook_path Permissions#notebook_path}
  */
  readonly notebookPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#object_type Permissions#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#pipeline_id Permissions#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#registered_model_id Permissions#registered_model_id}
  */
  readonly registeredModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#repo_id Permissions#repo_id}
  */
  readonly repoId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#repo_path Permissions#repo_path}
  */
  readonly repoPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#sql_alert_id Permissions#sql_alert_id}
  */
  readonly sqlAlertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#sql_dashboard_id Permissions#sql_dashboard_id}
  */
  readonly sqlDashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#sql_endpoint_id Permissions#sql_endpoint_id}
  */
  readonly sqlEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#sql_query_id Permissions#sql_query_id}
  */
  readonly sqlQueryId?: string;
  /**
  * access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#access_control Permissions#access_control}
  */
  readonly accessControl: PermissionsAccessControl[] | cdktf.IResolvable;
}
export interface PermissionsAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#group_name Permissions#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#permission_level Permissions#permission_level}
  */
  readonly permissionLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#service_principal_name Permissions#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/permissions#user_name Permissions#user_name}
  */
  readonly userName?: string;
}

export function permissionsAccessControlToTerraform(struct?: PermissionsAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    permission_level: cdktf.stringToTerraform(struct!.permissionLevel),
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export class PermissionsAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PermissionsAccessControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._permissionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionLevel = this._permissionLevel;
    }
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsAccessControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._permissionLevel = undefined;
      this._servicePrincipalName = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._permissionLevel = value.permissionLevel;
      this._servicePrincipalName = value.servicePrincipalName;
      this._userName = value.userName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // permission_level - computed: false, optional: false, required: true
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class PermissionsAccessControlList extends cdktf.ComplexList {
  public internalValue? : PermissionsAccessControl[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PermissionsAccessControlOutputReference {
    return new PermissionsAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/permissions databricks_permissions}
*/
export class Permissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/permissions databricks_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_permissions',
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
    this._authorization = config.authorization;
    this._clusterId = config.clusterId;
    this._clusterPolicyId = config.clusterPolicyId;
    this._directoryId = config.directoryId;
    this._directoryPath = config.directoryPath;
    this._experimentId = config.experimentId;
    this._id = config.id;
    this._instancePoolId = config.instancePoolId;
    this._jobId = config.jobId;
    this._notebookId = config.notebookId;
    this._notebookPath = config.notebookPath;
    this._objectType = config.objectType;
    this._pipelineId = config.pipelineId;
    this._registeredModelId = config.registeredModelId;
    this._repoId = config.repoId;
    this._repoPath = config.repoPath;
    this._sqlAlertId = config.sqlAlertId;
    this._sqlDashboardId = config.sqlDashboardId;
    this._sqlEndpointId = config.sqlEndpointId;
    this._sqlQueryId = config.sqlQueryId;
    this._accessControl.internalValue = config.accessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
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

  // cluster_policy_id - computed: false, optional: true, required: false
  private _clusterPolicyId?: string; 
  public get clusterPolicyId() {
    return this.getStringAttribute('cluster_policy_id');
  }
  public set clusterPolicyId(value: string) {
    this._clusterPolicyId = value;
  }
  public resetClusterPolicyId() {
    this._clusterPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPolicyIdInput() {
    return this._clusterPolicyId;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_path - computed: false, optional: true, required: false
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  public resetDirectoryPath() {
    this._directoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // experiment_id - computed: false, optional: true, required: false
  private _experimentId?: string; 
  public get experimentId() {
    return this.getStringAttribute('experiment_id');
  }
  public set experimentId(value: string) {
    this._experimentId = value;
  }
  public resetExperimentId() {
    this._experimentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentIdInput() {
    return this._experimentId;
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

  // instance_pool_id - computed: false, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // notebook_id - computed: false, optional: true, required: false
  private _notebookId?: string; 
  public get notebookId() {
    return this.getStringAttribute('notebook_id');
  }
  public set notebookId(value: string) {
    this._notebookId = value;
  }
  public resetNotebookId() {
    this._notebookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookIdInput() {
    return this._notebookId;
  }

  // notebook_path - computed: false, optional: true, required: false
  private _notebookPath?: string; 
  public get notebookPath() {
    return this.getStringAttribute('notebook_path');
  }
  public set notebookPath(value: string) {
    this._notebookPath = value;
  }
  public resetNotebookPath() {
    this._notebookPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPathInput() {
    return this._notebookPath;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // registered_model_id - computed: false, optional: true, required: false
  private _registeredModelId?: string; 
  public get registeredModelId() {
    return this.getStringAttribute('registered_model_id');
  }
  public set registeredModelId(value: string) {
    this._registeredModelId = value;
  }
  public resetRegisteredModelId() {
    this._registeredModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredModelIdInput() {
    return this._registeredModelId;
  }

  // repo_id - computed: false, optional: true, required: false
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  public resetRepoId() {
    this._repoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // repo_path - computed: false, optional: true, required: false
  private _repoPath?: string; 
  public get repoPath() {
    return this.getStringAttribute('repo_path');
  }
  public set repoPath(value: string) {
    this._repoPath = value;
  }
  public resetRepoPath() {
    this._repoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoPathInput() {
    return this._repoPath;
  }

  // sql_alert_id - computed: false, optional: true, required: false
  private _sqlAlertId?: string; 
  public get sqlAlertId() {
    return this.getStringAttribute('sql_alert_id');
  }
  public set sqlAlertId(value: string) {
    this._sqlAlertId = value;
  }
  public resetSqlAlertId() {
    this._sqlAlertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAlertIdInput() {
    return this._sqlAlertId;
  }

  // sql_dashboard_id - computed: false, optional: true, required: false
  private _sqlDashboardId?: string; 
  public get sqlDashboardId() {
    return this.getStringAttribute('sql_dashboard_id');
  }
  public set sqlDashboardId(value: string) {
    this._sqlDashboardId = value;
  }
  public resetSqlDashboardId() {
    this._sqlDashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDashboardIdInput() {
    return this._sqlDashboardId;
  }

  // sql_endpoint_id - computed: false, optional: true, required: false
  private _sqlEndpointId?: string; 
  public get sqlEndpointId() {
    return this.getStringAttribute('sql_endpoint_id');
  }
  public set sqlEndpointId(value: string) {
    this._sqlEndpointId = value;
  }
  public resetSqlEndpointId() {
    this._sqlEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointIdInput() {
    return this._sqlEndpointId;
  }

  // sql_query_id - computed: false, optional: true, required: false
  private _sqlQueryId?: string; 
  public get sqlQueryId() {
    return this.getStringAttribute('sql_query_id');
  }
  public set sqlQueryId(value: string) {
    this._sqlQueryId = value;
  }
  public resetSqlQueryId() {
    this._sqlQueryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryIdInput() {
    return this._sqlQueryId;
  }

  // access_control - computed: false, optional: false, required: true
  private _accessControl = new PermissionsAccessControlList(this, "access_control", true);
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: PermissionsAccessControl[] | cdktf.IResolvable) {
    this._accessControl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization: cdktf.stringToTerraform(this._authorization),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_policy_id: cdktf.stringToTerraform(this._clusterPolicyId),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      directory_path: cdktf.stringToTerraform(this._directoryPath),
      experiment_id: cdktf.stringToTerraform(this._experimentId),
      id: cdktf.stringToTerraform(this._id),
      instance_pool_id: cdktf.stringToTerraform(this._instancePoolId),
      job_id: cdktf.stringToTerraform(this._jobId),
      notebook_id: cdktf.stringToTerraform(this._notebookId),
      notebook_path: cdktf.stringToTerraform(this._notebookPath),
      object_type: cdktf.stringToTerraform(this._objectType),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      registered_model_id: cdktf.stringToTerraform(this._registeredModelId),
      repo_id: cdktf.stringToTerraform(this._repoId),
      repo_path: cdktf.stringToTerraform(this._repoPath),
      sql_alert_id: cdktf.stringToTerraform(this._sqlAlertId),
      sql_dashboard_id: cdktf.stringToTerraform(this._sqlDashboardId),
      sql_endpoint_id: cdktf.stringToTerraform(this._sqlEndpointId),
      sql_query_id: cdktf.stringToTerraform(this._sqlQueryId),
      access_control: cdktf.listMapper(permissionsAccessControlToTerraform, true)(this._accessControl.internalValue),
    };
  }
}