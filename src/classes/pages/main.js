import { CommandsBox, OtherShips, StatusBox } from '../main/index.js';

export default class Main {
    constructor(main) {
        main.nav.addAfterRefreshHook(() => {
            new StatusBox();
            new CommandsBox();
        });

        main.otherShips.addAfterRefreshHook(() => {
            new OtherShips();
        });

        new StatusBox();
        new CommandsBox();
        new OtherShips();
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