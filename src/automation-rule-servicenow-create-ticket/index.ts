/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRuleServicenowCreateTicketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the automation rule
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#description AutomationRuleServicenowCreateTicket#description}
  */
  readonly description: string;
  /**
  * Enabled?
    - Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#enabled AutomationRuleServicenowCreateTicket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value should be wrapped in jsonencode() to avoid diff detection. This is required even though the API states it is not required.  Validate is performed by the UI.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#filters AutomationRuleServicenowCreateTicket#filters}
  */
  readonly filters: string;
  /**
  * Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#integration_id AutomationRuleServicenowCreateTicket#integration_id}
  */
  readonly integrationId: string;
  /**
  * Name of the automation rule
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#name AutomationRuleServicenowCreateTicket#name}
  */
  readonly name: string;
  /**
  * Wiz internal ID for a project.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#project_id AutomationRuleServicenowCreateTicket#project_id}
  */
  readonly projectId?: string;
  /**
  * Upload issue evidence CSV as attachment?
    - Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_attach_evidence_csv AutomationRuleServicenowCreateTicket#servicenow_attach_evidence_csv}
  */
  readonly servicenowAttachEvidenceCsv?: boolean | cdktf.IResolvable;
  /**
  * Custom configuration fields as specified in Service Now. Make sure you add the fields that are configured as required in Service Now Project, otherwise ticket creation will fail. Must be valid JSON.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_custom_fields AutomationRuleServicenowCreateTicket#servicenow_custom_fields}
  */
  readonly servicenowCustomFields?: string;
  /**
  * Ticket description
    - Defaults to `{{`Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`}}`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_description AutomationRuleServicenowCreateTicket#servicenow_description}
  */
  readonly servicenowDescription?: string;
  /**
  * Ticket summary
    - Defaults to `{{`Wiz Issue: {{issue.control.name}}`}}`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_summary AutomationRuleServicenowCreateTicket#servicenow_summary}
  */
  readonly servicenowSummary?: string;
  /**
  * Table name to which new tickets will be added to, e.g: 'incident'.
    - Defaults to `{{`incident`}}`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#servicenow_table_name AutomationRuleServicenowCreateTicket#servicenow_table_name}
  */
  readonly servicenowTableName?: string;
  /**
  * Trigger source.
    - Allowed values: 
        - ISSUES
        - CLOUD_EVENTS
        - CONTROL
        - CONFIGURATION_FINDING
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_source AutomationRuleServicenowCreateTicket#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * Trigger type. Must be set to `CREATED` for wiz_automation_rule_servicenow_create_ticket.
    - Allowed values: 
        - CREATED
        - UPDATED
        - RESOLVED
        - REOPENED
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket#trigger_type AutomationRuleServicenowCreateTicket#trigger_type}
  */
  readonly triggerType: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket wiz_automation_rule_servicenow_create_ticket}
*/
export class AutomationRuleServicenowCreateTicket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_automation_rule_servicenow_create_ticket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rhizo-co/wiz/1.1.6/docs/resources/automation_rule_servicenow_create_ticket wiz_automation_rule_servicenow_create_ticket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuleServicenowCreateTicketConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuleServicenowCreateTicketConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_automation_rule_servicenow_create_ticket',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._filters = config.filters;
    this._integrationId = config.integrationId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._servicenowAttachEvidenceCsv = config.servicenowAttachEvidenceCsv;
    this._servicenowCustomFields = config.servicenowCustomFields;
    this._servicenowDescription = config.servicenowDescription;
    this._servicenowSummary = config.servicenowSummary;
    this._servicenowTableName = config.servicenowTableName;
    this._triggerSource = config.triggerSource;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // servicenow_attach_evidence_csv - computed: false, optional: true, required: false
  private _servicenowAttachEvidenceCsv?: boolean | cdktf.IResolvable; 
  public get servicenowAttachEvidenceCsv() {
    return this.getBooleanAttribute('servicenow_attach_evidence_csv');
  }
  public set servicenowAttachEvidenceCsv(value: boolean | cdktf.IResolvable) {
    this._servicenowAttachEvidenceCsv = value;
  }
  public resetServicenowAttachEvidenceCsv() {
    this._servicenowAttachEvidenceCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowAttachEvidenceCsvInput() {
    return this._servicenowAttachEvidenceCsv;
  }

  // servicenow_custom_fields - computed: false, optional: true, required: false
  private _servicenowCustomFields?: string; 
  public get servicenowCustomFields() {
    return this.getStringAttribute('servicenow_custom_fields');
  }
  public set servicenowCustomFields(value: string) {
    this._servicenowCustomFields = value;
  }
  public resetServicenowCustomFields() {
    this._servicenowCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowCustomFieldsInput() {
    return this._servicenowCustomFields;
  }

  // servicenow_description - computed: false, optional: true, required: false
  private _servicenowDescription?: string; 
  public get servicenowDescription() {
    return this.getStringAttribute('servicenow_description');
  }
  public set servicenowDescription(value: string) {
    this._servicenowDescription = value;
  }
  public resetServicenowDescription() {
    this._servicenowDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowDescriptionInput() {
    return this._servicenowDescription;
  }

  // servicenow_summary - computed: false, optional: true, required: false
  private _servicenowSummary?: string; 
  public get servicenowSummary() {
    return this.getStringAttribute('servicenow_summary');
  }
  public set servicenowSummary(value: string) {
    this._servicenowSummary = value;
  }
  public resetServicenowSummary() {
    this._servicenowSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowSummaryInput() {
    return this._servicenowSummary;
  }

  // servicenow_table_name - computed: false, optional: true, required: false
  private _servicenowTableName?: string; 
  public get servicenowTableName() {
    return this.getStringAttribute('servicenow_table_name');
  }
  public set servicenowTableName(value: string) {
    this._servicenowTableName = value;
  }
  public resetServicenowTableName() {
    this._servicenowTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowTableNameInput() {
    return this._servicenowTableName;
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string[]; 
  public get triggerType() {
    return this.getListAttribute('trigger_type');
  }
  public set triggerType(value: string[]) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filters: cdktf.stringToTerraform(this._filters),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      servicenow_attach_evidence_csv: cdktf.booleanToTerraform(this._servicenowAttachEvidenceCsv),
      servicenow_custom_fields: cdktf.stringToTerraform(this._servicenowCustomFields),
      servicenow_description: cdktf.stringToTerraform(this._servicenowDescription),
      servicenow_summary: cdktf.stringToTerraform(this._servicenowSummary),
      servicenow_table_name: cdktf.stringToTerraform(this._servicenowTableName),
      trigger_source: cdktf.stringToTerraform(this._triggerSource),
      trigger_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerType),
    };
  }
}
