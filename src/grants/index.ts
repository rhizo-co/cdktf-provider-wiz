// https://www.terraform.io/docs/providers/databricks/r/grants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#catalog Grants#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#external_location Grants#external_location}
  */
  readonly externalLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#function Grants#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#id Grants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#materialized_view Grants#materialized_view}
  */
  readonly materializedView?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#metastore Grants#metastore}
  */
  readonly metastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#schema Grants#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#storage_credential Grants#storage_credential}
  */
  readonly storageCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#table Grants#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#view Grants#view}
  */
  readonly view?: string;
  /**
  * grant block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#grant Grants#grant}
  */
  readonly grant: GrantsGrant[] | cdktf.IResolvable;
}
export interface GrantsGrant {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#principal Grants#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/grants#privileges Grants#privileges}
  */
  readonly privileges: string[];
}

export function grantsGrantToTerraform(struct?: GrantsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal: cdktf.stringToTerraform(struct!.principal),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}

export class GrantsGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrantsGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantsGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principal = undefined;
      this._privileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principal = value.principal;
      this._privileges = value.privileges;
    }
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}

export class GrantsGrantList extends cdktf.ComplexList {
  public internalValue? : GrantsGrant[] | cdktf.IResolvable

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
  public get(index: number): GrantsGrantOutputReference {
    return new GrantsGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/grants databricks_grants}
*/
export class Grants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_grants";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/grants databricks_grants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantsConfig
  */
  public constructor(scope: Construct, id: string, config: GrantsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_grants',
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
    this._catalog = config.catalog;
    this._externalLocation = config.externalLocation;
    this._function = config.function;
    this._id = config.id;
    this._materializedView = config.materializedView;
    this._metastore = config.metastore;
    this._schema = config.schema;
    this._storageCredential = config.storageCredential;
    this._table = config.table;
    this._view = config.view;
    this._grant.internalValue = config.grant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // external_location - computed: false, optional: true, required: false
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  public resetExternalLocation() {
    this._externalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // materialized_view - computed: false, optional: true, required: false
  private _materializedView?: string; 
  public get materializedView() {
    return this.getStringAttribute('materialized_view');
  }
  public set materializedView(value: string) {
    this._materializedView = value;
  }
  public resetMaterializedView() {
    this._materializedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView;
  }

  // metastore - computed: false, optional: true, required: false
  private _metastore?: string; 
  public get metastore() {
    return this.getStringAttribute('metastore');
  }
  public set metastore(value: string) {
    this._metastore = value;
  }
  public resetMetastore() {
    this._metastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // storage_credential - computed: false, optional: true, required: false
  private _storageCredential?: string; 
  public get storageCredential() {
    return this.getStringAttribute('storage_credential');
  }
  public set storageCredential(value: string) {
    this._storageCredential = value;
  }
  public resetStorageCredential() {
    this._storageCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCredentialInput() {
    return this._storageCredential;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // grant - computed: false, optional: false, required: true
  private _grant = new GrantsGrantList(this, "grant", true);
  public get grant() {
    return this._grant;
  }
  public putGrant(value: GrantsGrant[] | cdktf.IResolvable) {
    this._grant.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktf.stringToTerraform(this._catalog),
      external_location: cdktf.stringToTerraform(this._externalLocation),
      function: cdktf.stringToTerraform(this._function),
      id: cdktf.stringToTerraform(this._id),
      materialized_view: cdktf.stringToTerraform(this._materializedView),
      metastore: cdktf.stringToTerraform(this._metastore),
      schema: cdktf.stringToTerraform(this._schema),
      storage_credential: cdktf.stringToTerraform(this._storageCredential),
      table: cdktf.stringToTerraform(this._table),
      view: cdktf.stringToTerraform(this._view),
      grant: cdktf.listMapper(grantsGrantToTerraform, true)(this._grant.internalValue),
    };
  }
}