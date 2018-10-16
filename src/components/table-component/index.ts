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

        console.log('LOGGGGGG', this.data);
        console.log('LOGGGGGG', this.config);

    }

    static get template() {
        const stringArray = [`${view}`];
        return html({raw: stringArray, ...stringArray} as TemplateStringsArray);
    }

    ready() {
        super.ready()
    }
}