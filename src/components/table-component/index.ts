import { PolymerElement } from '@polymer/polymer/polymer-element';
import "@polymer/polymer/lib/elements/dom-repeat";

import {html} from "@polymer/polymer/polymer-element";
import * as view from "./table.template.pug";
import * as dataMock from "./mock-data/mockData.json";
import * as configMock from "./mock-data/mockConfiguration.json";

export class TableComponent extends PolymerElement {
    private data;
    private config;

    constructor() {
        super();
        this.data = dataMock;
        this.config = configMock;
    }

    static get template() {
        const stringArray = [`${view}`];
        return html({raw: stringArray, ...stringArray} as TemplateStringsArray);
    }

    ready() {
        super.ready();
    }

    getTablesRows(columns:Array<any>, values:Array<any>): Array<Array<any>>{

        let results: Array<Array<any>> = [];

        values.forEach((row) => {
            let rows: Array<any> = [];
            columns.forEach((column) => {
                let value = row[column.field];
                if(value){
                    rows.push(value);
                }else{
                    rows.push('');
                }
            });
            results.push(rows);
        });

        return results;

    }
}