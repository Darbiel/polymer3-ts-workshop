import * as kebabCase from "lodash/fp/kebabCase";
import {BasicWidget} from "./basic-widget";
import {TableComponent} from "./table-component";
import {MultiselectionComponent} from "./multiselection-component";

const elements = {
    TableComponent,
    MultiselectionComponent,
    BasicWidget
};

try {
    Object.keys( elements )
        .forEach( key => {
            if(!customElements.get(kebabCase(key))) {
                customElements.define(kebabCase(key), elements[key])
            }
        } );
}
catch ( e ) {
    console.warn( e );
}