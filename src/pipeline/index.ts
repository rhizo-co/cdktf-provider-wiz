// https://www.terraform.io/docs/providers/databricks/r/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}
  */
  readonly allowDuplicateNames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#channel Pipeline#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#configuration Pipeline#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#continuous Pipeline#continuous}
  */
  readonly continuous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#development Pipeline#development}
  */
  readonly development?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#edition Pipeline#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#photon Pipeline#photon}
  */
  readonly photon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#storage Pipeline#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#target Pipeline#target}
  */
  readonly target?: string;
  /**
  * cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#cluster Pipeline#cluster}
  */
  readonly cluster?: PipelineCluster[] | cdktf.IResolvable;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#filters Pipeline#filters}
  */
  readonly filters?: PipelineFilters;
  /**
  * library block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#library Pipeline#library}
  */
  readonly library?: PipelineLibrary[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#timeouts Pipeline#timeouts}
  */
  readonly timeouts?: PipelineTimeouts;
}
export interface PipelineClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#max_workers Pipeline#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#min_workers Pipeline#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#mode Pipeline#mode}
  */
  readonly mode?: string;
}

export function pipelineClusterAutoscaleToTerraform(struct?: PipelineClusterAutoscaleOutputReference | PipelineClusterAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktf.numberToTerraform(struct!.minWorkers),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class PipelineClusterAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
      this._mode = value.mode;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PipelineClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#first_on_demand Pipeline#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#instance_profile_arn Pipeline#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#zone_id Pipeline#zone_id}
  */
  readonly zoneId?: string;
}

export function pipelineClusterAwsAttributesToTerraform(struct?: PipelineClusterAwsAttributesOutputReference | PipelineClusterAwsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_on_demand: cdktf.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export class PipelineClusterAwsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._zoneId = value.zoneId;
    }
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface PipelineClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterClusterLogConfDbfsToTerraform(struct?: PipelineClusterClusterLogConfDbfsOutputReference | PipelineClusterClusterLogConfDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class PipelineClusterClusterLogConfDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConfDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#canned_acl Pipeline#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#enable_encryption Pipeline#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#encryption_type Pipeline#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#endpoint Pipeline#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#kms_key Pipeline#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#region Pipeline#region}
  */
  readonly region?: string;
}

export function pipelineClusterClusterLogConfS3ToTerraform(struct?: PipelineClusterClusterLogConfS3OutputReference | PipelineClusterClusterLogConfS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class PipelineClusterClusterLogConfS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConfS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConfS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface PipelineClusterClusterLogConf {
  /**
  * dbfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#dbfs Pipeline#dbfs}
  */
  readonly dbfs?: PipelineClusterClusterLogConfDbfs;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#s3 Pipeline#s3}
  */
  readonly s3?: PipelineClusterClusterLogConfS3;
}

export function pipelineClusterClusterLogConfToTerraform(struct?: PipelineClusterClusterLogConfOutputReference | PipelineClusterClusterLogConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: pipelineClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: pipelineClusterClusterLogConfS3ToTerraform(struct!.s3),
  }
}

export class PipelineClusterClusterLogConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterClusterLogConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new PipelineClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: PipelineClusterClusterLogConfDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new PipelineClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: PipelineClusterClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface PipelineClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#google_service_account Pipeline#google_service_account}
  */
  readonly googleServiceAccount?: string;
}

export function pipelineClusterGcpAttributesToTerraform(struct?: PipelineClusterGcpAttributesOutputReference | PipelineClusterGcpAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
  }
}

export class PipelineClusterGcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleServiceAccount = value.googleServiceAccount;
    }
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }
}
export interface PipelineClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
}

export function pipelineClusterInitScriptsDbfsToTerraform(struct?: PipelineClusterInitScriptsDbfsOutputReference | PipelineClusterInitScriptsDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class PipelineClusterInitScriptsDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination?: string;
}

export function pipelineClusterInitScriptsFileToTerraform(struct?: PipelineClusterInitScriptsFileOutputReference | PipelineClusterInitScriptsFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class PipelineClusterInitScriptsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination?: string;
}

export function pipelineClusterInitScriptsGcsToTerraform(struct?: PipelineClusterInitScriptsGcsOutputReference | PipelineClusterInitScriptsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class PipelineClusterInitScriptsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface PipelineClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#canned_acl Pipeline#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#destination Pipeline#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#enable_encryption Pipeline#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#encryption_type Pipeline#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#endpoint Pipeline#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#kms_key Pipeline#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#region Pipeline#region}
  */
  readonly region?: string;
}

export function pipelineClusterInitScriptsS3ToTerraform(struct?: PipelineClusterInitScriptsS3OutputReference | PipelineClusterInitScriptsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class PipelineClusterInitScriptsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineClusterInitScriptsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface PipelineClusterInitScripts {
  /**
  * dbfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#dbfs Pipeline#dbfs}
  */
  readonly dbfs?: PipelineClusterInitScriptsDbfs;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#file Pipeline#file}
  */
  readonly file?: PipelineClusterInitScriptsFile;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#gcs Pipeline#gcs}
  */
  readonly gcs?: PipelineClusterInitScriptsGcs;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#s3 Pipeline#s3}
  */
  readonly s3?: PipelineClusterInitScriptsS3;
}

export function pipelineClusterInitScriptsToTerraform(struct?: PipelineClusterInitScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: pipelineClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: pipelineClusterInitScriptsFileToTerraform(struct!.file),
    gcs: pipelineClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: pipelineClusterInitScriptsS3ToTerraform(struct!.s3),
  }
}

export class PipelineClusterInitScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineClusterInitScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineClusterInitScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new PipelineClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: PipelineClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PipelineClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: PipelineClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new PipelineClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: PipelineClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new PipelineClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: PipelineClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class PipelineClusterInitScriptsList extends cdktf.ComplexList {
  public internalValue? : PipelineClusterInitScripts[] | cdktf.IResolvable

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
  public get(index: number): PipelineClusterInitScriptsOutputReference {
    return new PipelineClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#custom_tags Pipeline#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#driver_node_type_id Pipeline#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#instance_pool_id Pipeline#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#label Pipeline#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#node_type_id Pipeline#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#num_workers Pipeline#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#policy_id Pipeline#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#spark_conf Pipeline#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#spark_env_vars Pipeline#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#ssh_public_keys Pipeline#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#autoscale Pipeline#autoscale}
  */
  readonly autoscale?: PipelineClusterAutoscale;
  /**
  * aws_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#aws_attributes Pipeline#aws_attributes}
  */
  readonly awsAttributes?: PipelineClusterAwsAttributes;
  /**
  * cluster_log_conf block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#cluster_log_conf Pipeline#cluster_log_conf}
  */
  readonly clusterLogConf?: PipelineClusterClusterLogConf;
  /**
  * gcp_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#gcp_attributes Pipeline#gcp_attributes}
  */
  readonly gcpAttributes?: PipelineClusterGcpAttributes;
  /**
  * init_scripts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#init_scripts Pipeline#init_scripts}
  */
  readonly initScripts?: PipelineClusterInitScripts[] | cdktf.IResolvable;
}

export function pipelineClusterToTerraform(struct?: PipelineCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktf.booleanToTerraform(struct!.applyPolicyDefaultValues),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    driver_instance_pool_id: cdktf.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktf.stringToTerraform(struct!.driverNodeTypeId),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    label: cdktf.stringToTerraform(struct!.label),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkEnvVars),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    autoscale: pipelineClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: pipelineClusterAwsAttributesToTerraform(struct!.awsAttributes),
    cluster_log_conf: pipelineClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    gcp_attributes: pipelineClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktf.listMapper(pipelineClusterInitScriptsToTerraform, true)(struct!.initScripts),
  }
}

export class PipelineClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = undefined;
      this._customTags = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._instancePoolId = undefined;
      this._label = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sshPublicKeys = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._customTags = value.customTags;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._instancePoolId = value.instancePoolId;
      this._label = value.label;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sshPublicKeys = value.sshPublicKeys;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
    }
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktf.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktf.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // driver_instance_pool_id - computed: false, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // node_type_id - computed: true, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: false, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new PipelineClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: PipelineClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new PipelineClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: PipelineClusterAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new PipelineClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: PipelineClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new PipelineClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: PipelineClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new PipelineClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: PipelineClusterInitScripts[] | cdktf.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }
}

export class PipelineClusterList extends cdktf.ComplexList {
  public internalValue? : PipelineCluster[] | cdktf.IResolvable

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
  public get(index: number): PipelineClusterOutputReference {
    return new PipelineClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#exclude Pipeline#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#include Pipeline#include}
  */
  readonly include?: string[];
}

export function pipelineFiltersToTerraform(struct?: PipelineFiltersOutputReference | PipelineFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}

export class PipelineFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface PipelineLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#coordinates Pipeline#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#exclusions Pipeline#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#repo Pipeline#repo}
  */
  readonly repo?: string;
}

export function pipelineLibraryMavenToTerraform(struct?: PipelineLibraryMavenOutputReference | PipelineLibraryMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinates: cdktf.stringToTerraform(struct!.coordinates),
    exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusions),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}

export class PipelineLibraryMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface PipelineLibraryNotebook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#path Pipeline#path}
  */
  readonly path: string;
}

export function pipelineLibraryNotebookToTerraform(struct?: PipelineLibraryNotebookOutputReference | PipelineLibraryNotebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class PipelineLibraryNotebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineLibraryNotebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibraryNotebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PipelineLibrary {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#jar Pipeline#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#whl Pipeline#whl}
  */
  readonly whl?: string;
  /**
  * maven block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#maven Pipeline#maven}
  */
  readonly maven?: PipelineLibraryMaven;
  /**
  * notebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#notebook Pipeline#notebook}
  */
  readonly notebook?: PipelineLibraryNotebook;
}

export function pipelineLibraryToTerraform(struct?: PipelineLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar: cdktf.stringToTerraform(struct!.jar),
    whl: cdktf.stringToTerraform(struct!.whl),
    maven: pipelineLibraryMavenToTerraform(struct!.maven),
    notebook: pipelineLibraryNotebookToTerraform(struct!.notebook),
  }
}

export class PipelineLibraryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineLibrary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._notebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineLibrary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jar = undefined;
      this._whl = undefined;
      this._maven.internalValue = undefined;
      this._notebook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jar = value.jar;
      this._whl = value.whl;
      this._maven.internalValue = value.maven;
      this._notebook.internalValue = value.notebook;
    }
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new PipelineLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: PipelineLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // notebook - computed: false, optional: true, required: false
  private _notebook = new PipelineLibraryNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: PipelineLibraryNotebook) {
    this._notebook.internalValue = value;
  }
  public resetNotebook() {
    this._notebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook.internalValue;
  }
}

export class PipelineLibraryList extends cdktf.ComplexList {
  public internalValue? : PipelineLibrary[] | cdktf.IResolvable

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
  public get(index: number): PipelineLibraryOutputReference {
    return new PipelineLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/pipeline#default Pipeline#default}
  */
  readonly default?: string;
}

export function pipelineTimeoutsToTerraform(struct?: PipelineTimeoutsOutputReference | PipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class PipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/pipeline databricks_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/pipeline databricks_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_pipeline',
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
    this._allowDuplicateNames = config.allowDuplicateNames;
    this._channel = config.channel;
    this._configuration = config.configuration;
    this._continuous = config.continuous;
    this._development = config.development;
    this._edition = config.edition;
    this._id = config.id;
    this._name = config.name;
    this._photon = config.photon;
    this._storage = config.storage;
    this._target = config.target;
    this._cluster.internalValue = config.cluster;
    this._filters.internalValue = config.filters;
    this._library.internalValue = config.library;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_names - computed: false, optional: true, required: false
  private _allowDuplicateNames?: boolean | cdktf.IResolvable; 
  public get allowDuplicateNames() {
    return this.getBooleanAttribute('allow_duplicate_names');
  }
  public set allowDuplicateNames(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateNames = value;
  }
  public resetAllowDuplicateNames() {
    this._allowDuplicateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateNamesInput() {
    return this._allowDuplicateNames;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous?: boolean | cdktf.IResolvable; 
  public get continuous() {
    return this.getBooleanAttribute('continuous');
  }
  public set continuous(value: boolean | cdktf.IResolvable) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // development - computed: false, optional: true, required: false
  private _development?: boolean | cdktf.IResolvable; 
  public get development() {
    return this.getBooleanAttribute('development');
  }
  public set development(value: boolean | cdktf.IResolvable) {
    this._development = value;
  }
  public resetDevelopment() {
    this._development = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
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

  // name - computed: false, optional: true, required: false
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

  // photon - computed: false, optional: true, required: false
  private _photon?: boolean | cdktf.IResolvable; 
  public get photon() {
    return this.getBooleanAttribute('photon');
  }
  public set photon(value: boolean | cdktf.IResolvable) {
    this._photon = value;
  }
  public resetPhoton() {
    this._photon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonInput() {
    return this._photon;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new PipelineClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PipelineCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new PipelineFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: PipelineFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new PipelineLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: PipelineLibrary[] | cdktf.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate_names: cdktf.booleanToTerraform(this._allowDuplicateNames),
      channel: cdktf.stringToTerraform(this._channel),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      continuous: cdktf.booleanToTerraform(this._continuous),
      development: cdktf.booleanToTerraform(this._development),
      edition: cdktf.stringToTerraform(this._edition),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      photon: cdktf.booleanToTerraform(this._photon),
      storage: cdktf.stringToTerraform(this._storage),
      target: cdktf.stringToTerraform(this._target),
      cluster: cdktf.listMapper(pipelineClusterToTerraform, true)(this._cluster.internalValue),
      filters: pipelineFiltersToTerraform(this._filters.internalValue),
      library: cdktf.listMapper(pipelineLibraryToTerraform, true)(this._library.internalValue),
      timeouts: pipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}