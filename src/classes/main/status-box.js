import { PardusOptionsUtility } from 'pardus-options-library';
import Mapper from '../utility/mapper.js';

export default class StatusBox {
    constructor() {
        if (PardusOptionsUtility.getVariableValue('enable_sector_map_link', true)) {
            this.addSectorMapLink();
            this.addCoordsMapLink();
        }
    }

    addSectorMapLink() {
        const sector_span = document.getElementById('sector');
        const parent_node = sector_span.parentNode;

        let sector_a = document.getElementById('quickcommands-sector-map-link');
        let recreate = false;

        if (!sector_a) {
            recreate = true;

            sector_a = document.createElement('a');
            sector_a.setAttribute('id', 'quickcommands-sector-map-link');
        }

        sector_a.href = Mapper.getSectorUrl(sector_span.innerHTML);
        sector_a.target = '_blank';
    
        if (recreate) {
            sector_a.appendChild(sector_span);
            parent_node.appendChild(sector_a);
        }
    }

    addCoordsMapLink() {
        const coords_span = document.getElementById('coords');
        const parent_node = coords_span.parentNode;

        let coords_a = document.getElementById('quickcommands-coords-map-link');
        let recreate = false;

        if (!coords_a) {
            recreate = true;

            coords_a = document.createElement('a');
            coords_a.setAttribute('id', 'quickcommands-coords-map-link');
        }

        coords_a.href = Mapper.getSectorUrl(document.getElementById('sector').innerHTML);
        coords_a.target = '_blank';

        if (recreate) {
            coords_a.appendChild(coords_span);
            parent_node.appendChild(coords_a);
        }
    }

    addCheckClusterProtection() {

    }
}
