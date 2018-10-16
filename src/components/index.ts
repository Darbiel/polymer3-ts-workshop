import * as kebabCase from "lodash/fp/kebabCase";
import {BasicPolymerElement} from "./basic-component";
import {TableComponent} from "./table-component";

const elements = {
    BasicPolymerElement,
    TableComponent
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