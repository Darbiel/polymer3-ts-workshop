import { PolymerElement } from '@polymer/polymer/polymer-element';

import {html} from "@polymer/polymer/polymer-element";
import * as view from "./table.template.pug";



export class TableComponent extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        const stringArray = [`${view}`];
        return html({raw: stringArray, ...stringArray} as TemplateStringsArray);
    }

    ready() {
        super.ready()
    }
}