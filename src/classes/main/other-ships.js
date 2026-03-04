import { PardusOptionsUtility } from 'pardus-options-library';

export default class OtherShips {
    constructor() {
        if (PardusOptionsUtility.getVariableValue('enable_ship_overview', true)) {
            this.addShipLinks();
        }
    }

    addPlayerLink(player, player_id) {
        const player_name = player.innerHTML.replace("<font color=", "").replace("</font>", "").replace('"#bb0000"',"").replace('"#BB0000"',"").replace('"#FFCC00"',"").replace(">", "");

        let alliance_name = '';

        let container = document.getElementById(`quickcommands-player-link-${player_id}`);
        let recreate = false;

        if (!container) {
            recreate = true;
        }

        if (recreate) {
            if (player.nextSibling && player.nextSibling.nextSibling.firstChild.firstChild) {
                alliance_name = player.nextSibling.nextSibling.firstChild.firstChild.innerHTML.replace('<font color="#a1a1af">', '').replace('</font>', '');
            }

            container = document.createElement('font');
            container.setAttribute('id', `quickcommands-player-link-${player_id}`);
            container.setAttribute('size', '1');

            const player_options = [];
            const alliance_options = [];

            if (PardusOptionsUtility.getVariableValue('enable_player_message', true)) {
                player_options.push(`<a href='javascript:sendmsg("${player_name}");'>Msg</a>`);
            }

            if (PardusOptionsUtility.getVariableValue('enable_player_trade', true)) {
                player_options.push(`<a href='ship2ship_transfer.php?playerid=${player_id}'>Trade</a>`);
            }

            if (PardusOptionsUtility.getVariableValue('enable_player_attack', true) && !(document.getElementById('aCmdPlanet') || document.getElementById('aCmdStarbase'))) {
                player_options.push(`<a href='ship2ship_combat.php?playerid=${player_id}'>Attack</a>`);
            }

            if (PardusOptionsUtility.getVariableValue('enable_player_news', true)) {
                alliance_options.push(`<a href='news.php?s=${player_name}&searchtype=pilot&search=Search' target='_blank'>News</a>`);
            }

            if (PardusOptionsUtility.getVariableValue('enable_alliance_news', true) && alliance_name != 'No alliance participation') {
                alliance_options.push(`<a href='news.php?s=${alliance_name}&searchtype=alliance&search=Search' target='_blank'>Ally News</a>`);
            }

            if ((player_options.length > 0 || alliance_options > 0) && player.nextSibling) {

                container.innerHTML += '<br>';

                if (player_options.length > 0) {
                    container.innerHTML += player_options.join('&nbsp;|&nbsp;');
                    container.innerHTML += '<br>';
                }

                if (alliance_options.length > 0) {
                    container.innerHTML += alliance_options.join('&nbsp;|&nbsp;');
                    container.innerHTML += '<br>';
                }

                player.parentNode.insertBefore(container, player.nextSibling.nextSibling.nextSibling);
            }
        }
    }

    addSquadLink(squad, squad_id) {

        let container = document.getElementById(`quickcommands-squad-link-${squad_id}`);
        let recreate = false;

        if (!container) {
            recreate = true;
        }

        if (recreate) {
            container = document.createElement('font');
            container.setAttribute('id', `quickcommands-squad-link-${squad_id}`);
            container.setAttribute('size', '1');

            const squad_options = [];

            if (PardusOptionsUtility.getVariableValue('enable_squad_command', true)) {
                squad_options.push(`<a href='squad_main.php?squadid=${squad_id}'>Command</a>`);
            }

            if (PardusOptionsUtility.getVariableValue('enable_squad_supply', true)) {
                squad_options.push(`<a href='supply_squad.php?squadid=${squad_id}'>Supply</a>`);
            }

            if (squad_options.length > 0) {
                container.innerHTML += '<br>';
                container.innerHTML += squad_options.join('&nbsp;|&nbsp;');
                container.innerHTML += '<br>';
                squad.parentNode.appendChild(container);
            }
        }
    }

    addShipLinks() {
        const otherships_content = document.getElementById('otherships_content');
        const ship_links = otherships_content.getElementsByTagName('a');

        for (const ship of ship_links) {

            let regex = /main\.php\?scan_details=(\d*)&scan_type=(player|squadron)/;

            if (ship.getAttribute('href').search(/main.php[?]scan_details/i) == -1) {
                if (ship.getAttribute('href').search(/javascript:scanid/i) == -1) {
                    continue;
                }

                regex = /javascript:scanId\((\d*), \"(player|squadron)\"\)/;
            }

            const match = ship.getAttribute('href').match(regex);

            if (match) {
                const ship_id = match[1];
                const ship_type = match[2];

                switch (ship_type) {
                    case 'player':
                        this.addPlayerLink(ship, ship_id);
                        break;
                    case 'squadron':
                        this.addSquadLink(ship, ship_id);
                        break;
                    default:
                        console.log(`No handling found for ship type '${ship_type}'`);
                }
            }
        }
    }
}
