import { PardusOptionsUtility } from 'pardus-options-library';

export default class CommandsBox {
    constructor() {
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

            document.addPardusKeyDownListener('enter_tradescreen_key', {code: 84}, (event) => {
                if (document.getElementById('aCmdPlanet')) {
                    window.location.assign(`${window.location.origin}/planet_trade.php`);
                } else if (document.getElementById('aCmdStarbase')) {
                    window.location.assign(`${window.location.origin}/starbase_trade.php`);
                } else if (document.getElementById('aCmdBuilding')) {
                    window.location.assign(`${window.location.origin}/building_trade.php`);
                }
            });

            // Make sure there's something to display
            if (container.innerHTML !== '') {
                document.getElementById('commands_content').insertBefore(container, document.querySelector('#commands_content div').nextSibling);
            }
        }
    }

    addPlanetLinks(container) {
        if (PardusOptionsUtility.getVariableValue('enable_ship_equipment', true)) {
            container.innerHTML += '<a href="ship_equipment.php">Ship Equipment</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_trade_with_planet_or_sb', true)) {
            container.innerHTML += '<a href="planet_trade.php">Trade with planet</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_bulletin_board', true)) {
            container.innerHTML += '<a href="bulletin_board.php">Bulletin Board</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_bounty_board', true)) {
            container.innerHTML += '<a href="bounties.php">Bounty Board</a><br>';
        }

        // Insert a clean break
        if ((
            PardusOptionsUtility.getVariableValue('enable_ship_equipment', true) ||
            PardusOptionsUtility.getVariableValue('enable_trade_with_planet_or_sb', true) ||
            PardusOptionsUtility.getVariableValue('enable_bulletin_board', true) ||
            PardusOptionsUtility.getVariableValue('enable_bounty_board', true)
        ) && (
            PardusOptionsUtility.getVariableValue('enable_shipyard', true) ||
            PardusOptionsUtility.getVariableValue('enable_trade_with_blackmarket', true) ||
            PardusOptionsUtility.getVariableValue('enable_hack_faction_database', true)
        )) {
            container.innerHTML += '<br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_shipyard', true)) {
            container.innerHTML += '<a href="shipyard.php">Shipyard</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_trade_with_blackmarket', true)) {
            container.innerHTML += '<a href="blackmarket.php">Black Market</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_hack_faction_database', true)) {
            container.innerHTML += '<a href="hack.php">Hack faction database</a><br>';
        }
    }

    addStarbaseLinks(container) {
        if (PardusOptionsUtility.getVariableValue('enable_ship_equipment', true)) {
            container.innerHTML += '<a href="ship_equipment.php">Ship Equipment</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_trade_with_planet_or_sb', true)) {
            container.innerHTML += '<a href="starbase_trade.php">Trade with starbase</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_bulletin_board', true)) {
            container.innerHTML += '<a href="bulletin_board.php">Bulletin Board</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_bounty_board', true)) {
            container.innerHTML += '<a href="bounties.php">Bounty Board</a><br>';
        }

        // Insert a clean break
        if ((
            PardusOptionsUtility.getVariableValue('enable_ship_equipment', true) ||
            PardusOptionsUtility.getVariableValue('enable_trade_with_planet_or_sb', true) ||
            PardusOptionsUtility.getVariableValue('enable_bulletin_board', true) ||
            PardusOptionsUtility.getVariableValue('enable_bounty_board', true)
        ) && (
            PardusOptionsUtility.getVariableValue('enable_shipyard', true) ||
            PardusOptionsUtility.getVariableValue('enable_trade_with_blackmarket', true) ||
            PardusOptionsUtility.getVariableValue('enable_hack_faction_database', true) ||
            PardusOptionsUtility.getVariableValue('enable_transfer_credits', true)
        )) {
            container.innerHTML += '<br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_shipyard', true)) {
            container.innerHTML += '<a href="shipyard.php">Shipyard</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_trade_with_blackmarket', true)) {
            container.innerHTML += '<a href="blackmarket.php">Black Market</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_hack_faction_database', true)) {
            container.innerHTML += '<a href="hack.php">Hack faction database</a><br>';
        }

        if (PardusOptionsUtility.getVariableValue('enable_transfer_credits', true)) {
            container.innerHTML += '<a href="hack.php">Transfer Credits</a><br>';
        }
    }

    addBuildingLinks(container) {
        const building_image = document.querySelector('#stdCommand img').src;

        if (PardusOptionsUtility.getVariableValue('enable_trade_with_building', true)) {
            container.innerHTML += '<a href="building_trade.php">Trade</a><br>';
        }
        
        if (PardusOptionsUtility.getVariableValue('enable_hack_building', true)) {
            container.innerHTML += '<a href="hack.php">Hack information</a><br>';
        }
        
        if (PardusOptionsUtility.getVariableValue('enable_recharge_shield', true) && building_image.split('/')[building_image.split('/').length - 1] == 'energy_well.png') {
            container.innerHTML += '<a href="energy_well.php">Recharge shield</a><br>';
        }
    }
}
