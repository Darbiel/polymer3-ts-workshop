import { PolymerElement } from '@polymer/polymer/polymer-element';
import "@polymer/polymer/lib/elements/dom-if";
import {html} from "@polymer/polymer/polymer-element";

import * as view from "./widget.template.pug";
import * as dataMock from "./mock/mockData.json";
import * as configMock from "./mock/mockConfiguration.json";
import {MultiselectionModel} from "../multiselection-component/models/multiselection";
import {TableModel} from "../table-component/models/table";
import {MultiselectDataModel} from "./models/multiselectData";


export class BasicWidget extends PolymerElement {
    private data: any = dataMock;
    private config: any = configMock;

    constructor() {
        super();
    }

    static get observers() {
        return []
    }

    static get template() {
        const stringArray = [`${view}`];
        return html({raw: stringArray, ...stringArray} as TemplateStringsArray);
    }

    ready() {
        super.ready();
        (this as any).addEventListener('on-checked-box', e => {
            e.stopPropagation();
        });

    }

    onCheckedBox(e){
        let detail = e.detail;
        let position: number = -1;
        let columns: Array<TableModel.IColumn> = [];

        this.config.table.columns.forEach((column, index) =>{

            let newColumn: TableModel.IColumn = {
                headerName: '',
                field: '',
                visible: false
            };

            newColumn.headerName = column.headerName;
            newColumn.field = column.field;

            if(column.field === detail.name){
                newColumn.visible = !column.visible;
            }else{
                newColumn.visible = column.visible;
            }

            columns.push(newColumn);

        });

        (this as any).set('config.table.columns', columns);

    }


    convertFromTableToMultiselection(tableConf: any){
        let multiselectionData: MultiselectDataModel.IMultiselectData = {"values":[]};
        tableConf.columns.forEach((singleConf) => {
          let newConf: MultiselectionModel.IMultiselection = {
              'label':singleConf.headerName,
              'key':singleConf.field,
              'checked': singleConf.visible
          };
          multiselectionData.values.push(newConf);
        });

        return multiselectionData;

    }

    isAviable(data:any, config:any){
      return (data !=null && config!=null);
    }

    getConfigTable(){
      return this.config.table;
    }

    getDataTable(){
      return this.data.table;
    }

}
