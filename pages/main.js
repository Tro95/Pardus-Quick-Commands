/* env greasemonkey, es6 */
/* global QuickCommandsMapper, PardusOptionsUtility */

class QuickCommandsMainPageStatusBox {
    static run() {
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_sector_map_link'), true)) {
            this.addSectorMapLink();
            this.addCoordsMapLink();
        }
    }

    static addSectorMapLink() {
        const sector_span = document.getElementById('sector');
        const parent_node = sector_span.parentNode;

        let sector_a = document.getElementById('quickcommands-sector-map-link');
        let recreate = false;

        if (!sector_a) {
            recreate = true;

            sector_a = document.createElement('a');
            sector_a.setAttribute('id', 'quickcommands-sector-map-link');
        }

        sector_a.href = QuickCommandsMapper.getSectorUrl(sector_span.innerHTML);
        sector_a.target = '_blank';
    
        if (recreate) {
            sector_a.appendChild(sector_span);
            parent_node.appendChild(sector_a);
        }
    }

    static addCoordsMapLink() {
        const coords_span = document.getElementById('coords');
        const parent_node = coords_span.parentNode;

        let coords_a = document.getElementById('quickcommands-coords-map-link');
        let recreate = false;

        if (!coords_a) {
            recreate = true;

            coords_a = document.createElement('a');
            coords_a.setAttribute('id', 'quickcommands-coords-map-link');
        }

        coords_a.href = QuickCommandsMapper.getSectorUrl(document.getElementById('sector').innerHTML);
        coords_a.target = '_blank';

        if (recreate) {
            coords_a.appendChild(coords_span);
            parent_node.appendChild(coords_a);
        }
    }

    static addCheckClusterProtection() {

    }
}

class QuickCommandsMainPageCommandsBox {
    static run() {
        let container = document.getElementById('quickcommands-commands');

        if (!container) {
            container = document.createElement('div');
            container.setAttribute('id', 'quickcommands-commands');
            container.setAttribute('style', 'position:relative; top:6px; margin-top: 5px; margin-bottom: 7px;');

            if (document.getElementById('aCmdPlanet')) {
                this.addPlanetLinks(container);
            }

            if (document.getElementById('aCmdStarbase')) {
                this.addStarbaseLinks(container);
            }

            // Make sure there's something to display
            if (container.innerHTML !== '') {
                document.getElementById('commands_content').insertBefore(container, document.querySelector('#commands_content div').nextSibling);
            }
        }
    }

    static addPlanetLinks(container) {
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_ship_equipment'), true)) {
            container.innerHTML += '<a href="ship_equipment.php">Ship Equipment</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_planet_or_sb'), true)) {
            container.innerHTML += '<a href="planet_trade.php">Trade with planet</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_bulletin_board'), true)) {
            container.innerHTML += '<a href="bulletin_board.php">Bulletin Board</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_bounty_board'), true)) {
            container.innerHTML += '<a href="bounties.php">Bounty Board</a><br>';
        }

        // Insert a clean break
        if ((
            GM_getValue(PardusOptionsUtility.getVariableName('enable_ship_equipment'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_planet_or_sb'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_bulletin_board'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_bounty_board'), true)
        ) && (
            GM_getValue(PardusOptionsUtility.getVariableName('enable_shipyard'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_blackmarket'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_hack_faction_database'), true)
        )) {
            container.innerHTML += '<br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_shipyard'), true)) {
            container.innerHTML += '<a href="shipyard.php">Shipyard</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_blackmarket'), true)) {
            container.innerHTML += '<a href="blackmarket.php">Black Market</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_hack_faction_database'), true)) {
            container.innerHTML += '<a href="hack.php">Hack faction database</a><br>';
        }
    }

    static addStarbaseLinks(container) {
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_ship_equipment'), true)) {
            container.innerHTML += '<a href="ship_equipment.php">Ship Equipment</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_planet_or_sb'), true)) {
            container.innerHTML += '<a href="planet_trade.php">Trade with starbase</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_bulletin_board'), true)) {
            container.innerHTML += '<a href="bulletin_board.php">Bulletin Board</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_bounty_board'), true)) {
            container.innerHTML += '<a href="bounties.php">Bounty Board</a><br>';
        }

        // Insert a clean break
        if ((
            GM_getValue(PardusOptionsUtility.getVariableName('enable_ship_equipment'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_planet_or_sb'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_bulletin_board'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_bounty_board'), true)
        ) && (
            GM_getValue(PardusOptionsUtility.getVariableName('enable_shipyard'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_blackmarket'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_hack_faction_database'), true) ||
            GM_getValue(PardusOptionsUtility.getVariableName('enable_transfer_credits'), true)
        )) {
            container.innerHTML += '<br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_shipyard'), true)) {
            container.innerHTML += '<a href="shipyard.php">Shipyard</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_blackmarket'), true)) {
            container.innerHTML += '<a href="blackmarket.php">Black Market</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_hack_faction_database'), true)) {
            container.innerHTML += '<a href="hack.php">Hack faction database</a><br>';
        }

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_transfer_credits'), true)) {
            container.innerHTML += '<a href="hack.php">Transfer Credits</a><br>';
        }
    }

    static addBuildingLinks(container) {
        const building_image = document.querySelector('#stdCommand img').src;

        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_trade_with_building'), true)) {
            container.innerHTML += '<a href="building_trade.php">Trade</a><br>';
        }
        
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_hack_building'), true)) {
            container.innerHTML += '<a href="hack.php">Hack information</a><br>';
        }
        
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_recharge_shield'), true) && building_image.split('/')[building_image.split('/').length - 1] == 'energy_well.png') {
            container.innerHTML += '<a href="energy_well.php">Recharge shield</a><br>';
        }
    }
}

class QuickCommandsMainPageOtherShips {
    static run() {
        this.addShipLinks();
    }

    static addPlayerLink(player, player_id) {
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

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_player_message'), true)) {
                player_options.push(`<a href='javascript:sendmsg("${player_name}");'>Msg</a>`);
            }

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_player_trade'), true)) {
                player_options.push(`<a href='ship2ship_transfer.php?playerid=${player_id}'>Trade</a>`);
            }

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_player_attack'), true) && !(
                    document.getElementById('aCmdPlanet') || document.getElementById('aCmdStarbase')
                )) {
                player_options.push(`<a href='ship2ship_combat.php?playerid=${player_id}'>Attack</a>`);
            }

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_player_news'), true)) {
                alliance_options.push(`<a href='news.php?s=${player_name}&searchtype=pilot&search=Search' target='_blank'>News</a>`);
            }

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_alliance_news'), true) && alliance_name != 'No alliance participation') {
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

    static addSquadLink(squad, squad_id) {

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

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_squad_command'), true)) {
                squad_options.push(`<a href='squad_main.php?squadid=${squad_id}'>Command</a>`);
            }

            if (GM_getValue(PardusOptionsUtility.getVariableName('enable_squad_supply'), true)) {
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

    static addShipLinks() {
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

class QuickCommandsMainPage {
    static run() {
        this.handlePartialRefresh();
        this.statusBox();
    }

    static handlePartialRefresh() {
        const navElement = document.getElementById('tdSpaceChart').getElementsByTagName('table')[0];

        // Options for the observer (which mutations to observe)
        const config = { attributes: false, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            QuickCommandsMainPage.statusBox();
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(navElement, config);
    }

    static statusBox() {
        QuickCommandsMainPageStatusBox.run();
        QuickCommandsMainPageCommandsBox.run();
        QuickCommandsMainPageOtherShips.run();
    }
}

/*

//updateShip
    var shipCookie = readCookie('ship');
    if(shipCookie != null)  shipCookie = shipCookie.split("|");
    function do_updateShip(){
        for(var i = 0; i < document.getElementById("yourship_content").getElementsByTagName('a').length; i++)
        {
            var a = document.getElementById("yourship_content").getElementsByTagName('a')[i]
            if((a.getAttribute('href').search(/main.php[?]ccc=1/i) != -1 || a.getAttribute('href').indexOf("cloakingchance()") != -1 )&& a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                
                child.setAttribute("style", "position:relative; top:6px; margin-left: 12px; margin-top: 5px; margin-bottom: 7px;");
                if(enableShipOverview)  child.innerHTML = child.innerHTML + "<a href='overview_ship.php'>Ship Overview</a>";
                if(enableShipName && shipCookie != null && shipCookie[0] != "")  child.innerHTML = child.innerHTML + "<br>Name: " + shipCookie[0];
                if(enableShipType && shipCookie != null && shipCookie[1] != "")  child.innerHTML = child.innerHTML + "<br>Type: " + shipCookie[1];
                if(enableShipImage && shipCookie != null && shipCookie[2] != "")  child.innerHTML = child.innerHTML + "<br><center><img src='" + shipCookie[2] + "'></center>";
                if(enableShipOverview || enableShipName || enableShipType || enableShipImage) { document.getElementById("yourship_content").insertBefore(child,document.getElementById("yourship_content").firstChild); i++; 
                }
            }
        }
    }
    
    do_updateShip();
    var local_updateShip = unsafeWindow.updateShip;
    if(local_updateShip){
        unsafeWindow.updateShip = function(result){
            local_updateShip(result);
            do_updateShip();
        }
    }

*/