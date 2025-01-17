/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizOrganizationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * How many matches to return.
    - Defaults to `500`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations#first DataWizOrganizations#first}
  */
  readonly first?: number;
  /**
  * Organization search string. Used to search all organization attributes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations#search DataWizOrganizations#search}
  */
  readonly search: string;
}
export interface DataWizOrganizationsOrganizations {
}

export function dataWizOrganizationsOrganizationsToTerraform(struct?: DataWizOrganizationsOrganizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataWizOrganizationsOrganizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizOrganizationsOrganizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizOrganizationsOrganizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataWizOrganizationsOrganizationsList extends cdktf.ComplexList {

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
  public get(index: number): DataWizOrganizationsOrganizationsOutputReference {
    return new DataWizOrganizationsOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations wiz_organizations}
*/
export class DataWizOrganizations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_organizations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/data-sources/organizations wiz_organizations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizOrganizationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataWizOrganizationsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_organizations',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.1.6',
        providerVersionConstraint: '~> 1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._first = config.first;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organizations - computed: true, optional: false, required: false
  private _organizations = new DataWizOrganizationsOrganizationsList(this, "organizations", true);
  public get organizations() {
    return this._organizations;
  }

  // search - computed: false, optional: false, required: true
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      first: cdktf.numberToTerraform(this._first),
      search: cdktf.stringToTerraform(this._search),
    };
  }
}
