/* env greasemonkey, es6 */
/* global QuickCommandsMapper, PardusOptionsUtility */

class QuickCommandsMainPageStatusBox {
    static run() {
        this.addSectorMapLink();
        //this.addCoordsMapLink();
    }

    static addSectorMapLink() {
        const sector_span = document.getElementById('sector');
        const parent_node = sector_span.parentNode;
        const sector_a = document.createElement('a');
        sector_a.href = QuickCommandsMapper.getSectorUrl(sector_span.innerHTML);
        sector_a.target = '_blank';
        sector_a.appendChild(sector_span);
        parent_node.appendChild(sector_a);
    }

    static addCoordsMapLink() {
        const coords_spam = document.getElementById('coords');
        const parent_node = coords_spam.parentNode;
        const coords_a = document.createElement('a');
        coords_a.href = QuickCommandsMapper.getSectorUrl(coords_spam.innerHTML);
        coords_a.target = '_blank';
        coords_a.appendChild(coords_spam);
        parent_node.appendChild(coords_a);
    }

    static addCheckClusterProtection() {

    }
}

class QuickCommandsMainPageCommandsBox {
    static run() {
        const container = document.createElement('div');
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

class QuickCommandsMainPage {
    static run() {
        this.statusBox();
    }

    static statusBox() {
        QuickCommandsMainPageStatusBox.run();
        QuickCommandsMainPageCommandsBox.run();
    }
}

/*



    mainframe = document;

    //updateStatus
    function do_updateStatus(){
        if(enableMap){
            var img = document.getElementsByTagName('img');

            for(var i = 0; i < img.length; i++){
                if(img[i].getAttribute('title') == 'Action Points'){
                    img[i].parentNode.previousSibling.previousSibling.previousSibling.innerHTML = '<a href="overview_map.php">' + img[i].parentNode.previousSibling.previousSibling.previousSibling.innerHTML + '</a>';
                    break;
              }
            }
        }
        
        
        for(var i = 0; i < document.getElementById("status_content").getElementsByTagName('a').length; i++)
        {
            var a = document.getElementById("status_content").getElementsByTagName('a')[i]
        
            if((a.getAttribute('href').search(/main.php[?]ccp=1/i) != -1 || a.getAttribute('href').indexOf("clusterprot()") != -1 )&& a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                child.setAttribute("style", "position:relative; top:6px; margin-left: 12px; margin-top: 5px; margin-bottom: 7px;");
                if(enableStats)  child.innerHTML = child.innerHTML + "<a href='overview_stats.php'>Stats</a>";
                if(enableStats && (enableJobs || enableBuildings))  child.innerHTML = child.innerHTML + "&nbsp;&nbsp;|&nbsp;&nbsp;";
                if(enableJobs)  child.innerHTML = child.innerHTML + "<a href='overview_jobs.php'>Jobs</a>";
                if(enableJobs && enableBuildings)  child.innerHTML = child.innerHTML + "&nbsp;&nbsp;|&nbsp;&nbsp;";
                if(enableBuildings)  child.innerHTML = child.innerHTML + "<a href='overview_buildings.php'>Buildings</a>";
                if((enableStats || enableJobs || enableBuildings) && a.nextSibling)  a.parentNode.insertBefore(child,a.nextSibling);
            }
        }
    }
    
    do_updateStatus();
    var local_updateStatus = unsafeWindow.updateStatus;
    if(local_updateStatus){
        unsafeWindow.updateStatus = function(result){
            local_updateStatus(result);
            do_updateStatus();
        }
    }
*/
//updateCmd
/*
    function do_updateCmd(){
        for(var i = 0; i < document.getElementById("commands_content").getElementsByTagName('a').length; i++)
        {
            var a = document.getElementById("commands_content").getElementsByTagName('a')[i]
            
            if(a.getAttribute('href').search(/planet.php/i) != -1 && a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                child.setAttribute("style", "position:relative; top:6px; margin-top: 5px; margin-bottom: 7px;");
                if(enableShipEquipment)  child.innerHTML = child.innerHTML + "<a href='ship_equipment.php'>Ship Equipment</a><br>";
                if(enableTradeWithPlanetOrStarbase)  child.innerHTML = child.innerHTML + "<a href='planet_trade.php'>Trade with planet</a><br>";
                if(enableBulletinBoard)  child.innerHTML = child.innerHTML + "<a href='bulletin_board.php'>Bulletin Board</a><br>";
                if(enableBountyBoard)  child.innerHTML = child.innerHTML + "<a href='bounties.php'>Bounty Board</a><br>";
                if((enableShipEquipment || enableTradeWithPlanetOrStarbase || enableBulletinBoard || enableBountyBoard) && (enableShipYard || enableTradeWithBlackMarket || enableHackFactionDatabase))  child.innerHTML = child.innerHTML + "<br>";
                if(enableShipYard)  child.innerHTML = child.innerHTML + "<a href='shipyard.php'>Shipyard</a><br>";
                if(enableTradeWithBlackMarket)  child.innerHTML = child.innerHTML + "<a href='blackmarket.php'>Black Market</a><br>";
                if(enableHackFactionDatabase)  child.innerHTML = child.innerHTML + "<a href='hack.php'>Hack faction database</a><br>";
                if(enableShipEquipment || enableTradeWithPlanetOrStarbase || enableBulletinBoard || enableBountyBoard || enableShipYard || enableTradeWithBlackMarket || enableHackFactionDatabase)  a.parentNode.insertBefore(child,a.nextSibling);
                if(enableDeliverToPlanetOrStarbase)  a.innerHTML = "<b>Land on/Deliver to planet</b>"; 
            }
            if(a.getAttribute('href').search(/starbase.php/i) != -1 && a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                child.setAttribute("style", "position:relative; top:6px; margin-top: 5px; margin-bottom: 7px;");
                if(enableShipEquipment)  child.innerHTML = child.innerHTML + "<a href='ship_equipment.php'>Ship Equipment</a><br>";
                if(enableTradeWithPlanetOrStarbase)  child.innerHTML = child.innerHTML + "<a href='starbase_trade.php'>Trade with starbase</a><br>";
                if(enableBulletinBoard)  child.innerHTML = child.innerHTML + "<a href='bulletin_board.php'>Bulletin Board</a><br>";
                if(enableBountyBoard)  child.innerHTML = child.innerHTML + "<a href='bounties.php'>Bounty Board</a><br>";
                if((enableShipEquipment || enableTradeWithPlanetOrStarbase || enableBulletinBoard || enableBountyBoard) && (enableShipYard || enableTradeWithBlackMarket || enableHackFactionDatabase || enableTransferCredits))  //child.innerHTML = child.innerHTML + "<br>";
                if(enableShipYard)  child.innerHTML = child.innerHTML + "<a href='shipyard.php'>Shipyard</a><br>";
                if(enableTradeWithBlackMarket)  child.innerHTML = child.innerHTML + "<a href='blackmarket.php'>Black Market</a><br>";
                if(enableHackFactionDatabase)  child.innerHTML = child.innerHTML + "<a href='hack.php'>Hack faction database</a><br>";
                if(enableTransferCredits) child.innerHTML = child.innerHTML + "<a href='starbase_credits.php'>Transfer Credits</a><br>";
                if(enableShipEquipment || enableTradeWithPlanetOrStarbase || enableBulletinBoard || enableBountyBoard || enableShipYard || enableTradeWithBlackMarket || enableHackFactionDatabase || enableTransferCredits)  a.parentNode.insertBefore(child,a.nextSibling);
                if(enableDeliverToPlanetOrStarbase)  a.innerHTML = "<b>Land on/Deliver to starbase</b>"; 
            }
            if(a.getAttribute('href').search(/building.php/i) != -1 && a.getAttribute('href').search(/newbuilding.php/i) == -1 && a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                child.setAttribute("style", "position:relative; top:6px; margin-top: 5px; margin-bottom: 7px;");
                if(enableTradeWithBuilding)  child.innerHTML = child.innerHTML + "<a href='building_trade.php'>Trade with building</a><br>";
                if(enableHackInformation)  child.innerHTML = child.innerHTML + "<a href='hack.php'>Hack information</a><br>";
                if(enableRechargeShield && getLocName() == 'Energy Well') child.innerHTML = child.innerHTML + "<a href='energy_well.php'>Recharge shield</a><br>";
                if(enableTradeWithBuilding || enableHackInformation || enableRechargeShield)  a.parentNode.insertBefore(child,a.nextSibling);
            }
            if(a.getAttribute('href').search(/building_management.php/i) != -1 && a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var child = document.createElement("div");
                child.setAttribute("style", "position:relative; top:6px; margin-top: 5px; margin-bottom: 7px;");
                if(enableBuildingTradeSettings)  child.innerHTML = child.innerHTML + "<a href='building_trade_settings.php'>Building trade settings</a><br>";
                if(enableBuildingTradeSettings)  a.parentNode.insertBefore(child,a.nextSibling);
            }
        }
    }
    
    do_updateCmd();
    var local_updateCmd = unsafeWindow.updateCmd;
    if(local_updateCmd){
        unsafeWindow.updateCmd = function(result){
            local_updateCmd(result);
            do_updateCmd();
        }
    }
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

//updateShips
    function do_updateShips(){
        for(var i = 0; i < document.getElementById("otherships_content").getElementsByTagName('a').length; i++)
        {
            var a = document.getElementById("otherships_content").getElementsByTagName('a')[i]
            
            if((a.getAttribute('href').search(/main.php[?]scan_details/i) != -1 || a.getAttribute('href').indexOf("scanId(") != -1) && a.innerHTML.indexOf('class="nf"') == -1 && a.innerHTML.indexOf("class='nf'") == -1)
            {
                var playerid = a.getAttribute('href').replace("main.php?scan_details=", "").replace("&scan_type=player", "").replace("javascript:scanId(","").replace(', "player")',"");
                var playername = a.innerHTML.replace("<font color=", "").replace("</font>", "").replace('"#bb0000"',"").replace('"#BB0000"',"").replace('"#FFCC00"',"").replace(">", "");
                var alliancename = 'No alliance participation';
                if(a.nextSibling && a.nextSibling.nextSibling.firstChild.firstChild)  alliancename = a.nextSibling.nextSibling.firstChild.firstChild.innerHTML.replace('<font color="#a1a1af">', '').replace('</font>', '');
                var child = document.createElement("font");
                child.setAttribute("size", "1");
                if(enablePlayerMsg || enablePlayerTrade || enablePlayerAttack)
                    child.innerHTML = child.innerHTML + "<br>";
                if(enablePlayerMsg)  child.innerHTML = child.innerHTML + "<a href='javascript:sendmsg(\"" + playername + "\");'>Msg</a>";
                if(enablePlayerMsg && (enablePlayerTrade || enablePlayerAttack))  child.innerHTML = child.innerHTML + "&nbsp;|&nbsp;";
                if(enablePlayerTrade)  child.innerHTML = child.innerHTML + "<a href='ship2ship_transfer.php?playerid=" + playerid + "'>Trade</a>";
                if(enablePlayerTrade && enablePlayerAttack && getLocName() != "Planet" && getLocName() != "Starbase")  child.innerHTML = child.innerHTML + "&nbsp;|&nbsp;";
                if(enablePlayerAttack && getLocName() != "Planet" && getLocName() != "Starbase") child.innerHTML = child.innerHTML + "<a href='ship2ship_combat.php?playerid=" + playerid + "'>Attack</a>";
                if(enablePlayerNews || enableAllianceNews)  child.innerHTML = child.innerHTML + "<br>";
                if(enablePlayerNews)  child.innerHTML = child.innerHTML + "<a href='news.php?s=" + playername + "&searchtype=pilot&search=Search' target='_blank'>News</a>";
                if(enablePlayerNews && enableAllianceNews && alliancename != 'No alliance participation')  child.innerHTML = child.innerHTML + "&nbsp;|&nbsp;";
                if(enableAllianceNews && alliancename != 'No alliance participation')  child.innerHTML = child.innerHTML + "<a href='news.php?s=" + alliancename + "&searchtype=alliance&search=Search' target='_blank'>Ally News</a>";
                if(enablePlayerMsg || enablePlayerTrade || enablePlayerAttack || enablePlayerNews || enableAllianceNews)   child.innerHTML = child.innerHTML + "<br>";
                if((enablePlayerMsg || enablePlayerTrade || enablePlayerAttack || enablePlayerNews || enableAllianceNews) && a.nextSibling)  a.parentNode.insertBefore(child,a.nextSibling.nextSibling.nextSibling);
            }
        }
    }
    
    do_updateShips();
    var local_updateShips = unsafeWindow.updateShips;
    if(local_updateShips){
        unsafeWindow.updateShips = function(result){
            local_updateShips(result);
            do_updateShips();
        }
    }
*/