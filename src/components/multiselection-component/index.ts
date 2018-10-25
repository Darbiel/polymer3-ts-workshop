import { PolymerElement } from '@polymer/polymer/polymer-element';
import "@polymer/polymer/lib/elements/dom-repeat";
import {html} from "@polymer/polymer/polymer-element";
import * as view from "./multiselect.template.pug";


export class MultiselectionComponent extends PolymerElement {

    private data: any = {};

    static get properties() {
        return {
            data: {
                type: Object,
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
        super.ready()
    }

    onChange(e){
        (this as any).dispatchEvent(new CustomEvent('checked-box', {detail: {name: e.currentTarget.name, checked: e.currentTarget.checked}}));
    }

}