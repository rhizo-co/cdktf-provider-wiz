// https://www.terraform.io/docs/providers/databricks/d/notebook_paths
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksNotebookPathsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#id DataDatabricksNotebookPaths#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#path DataDatabricksNotebookPaths#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}
  */
  readonly recursive: boolean | cdktf.IResolvable;
}
export interface DataDatabricksNotebookPathsNotebookPathList {
}

export function dataDatabricksNotebookPathsNotebookPathListToTerraform(struct?: DataDatabricksNotebookPathsNotebookPathList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatabricksNotebookPathsNotebookPathListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksNotebookPathsNotebookPathList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksNotebookPathsNotebookPathList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDatabricksNotebookPathsNotebookPathListList extends cdktf.ComplexList {

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
  public get(index: number): DataDatabricksNotebookPathsNotebookPathListOutputReference {
    return new DataDatabricksNotebookPathsNotebookPathListOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths databricks_notebook_paths}
*/
export class DataDatabricksNotebookPaths extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_notebook_paths";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/notebook_paths databricks_notebook_paths} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksNotebookPathsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksNotebookPathsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_notebook_paths',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.1.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._path = config.path;
    this._recursive = config.recursive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // notebook_path_list - computed: true, optional: false, required: false
  private _notebookPathList = new DataDatabricksNotebookPathsNotebookPathListList(this, "notebook_path_list", true);
  public get notebookPathList() {
    return this._notebookPathList;
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

  // recursive - computed: false, optional: false, required: true
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      recursive: cdktf.booleanToTerraform(this._recursive),
    };
  }
}
