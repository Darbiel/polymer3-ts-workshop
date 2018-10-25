import { PolymerElement } from '@polymer/polymer/polymer-element';
import "@polymer/polymer/lib/elements/dom-repeat";
import "@polymer/polymer/lib/elements/dom-if";

import {html} from "@polymer/polymer/polymer-element";
import * as view from "./table.template.pug";

export class TableComponent extends PolymerElement {
    private data;
    private config;


    static get properties() {
        return {
            data: {
                type: Object
            },
            config:{
                type: Object
            }
        };
    }

    constructor() {
        super();
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
                if(column.visible) {
                    let value = row[column.field];
                    if (value) {
                        rows.push(value);
                    } else {
                        rows.push('');
                    }
                }
            });
            results.push(rows);
        });

        return results;

    }
}
