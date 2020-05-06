/* env greasemonkey, es6 */
/* global QuickCommandsMapper, PardusOptionsUtility, userid */

class QuickCommandsMsgFramePage {
    static run() {
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_account_name'), true)) {
            this.addAccountName();
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_edit_profile'), true)) {
            this.addEditProfile();
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_custom_links'), true)) {
            this.addCustomLinks();
        }
    }

    static addAccountName() {
        const container = document.createElement('span');
        const image_element = document.getElementsByTagName('img')[0]
        const username = image_element.getAttribute('title').replace('Artemis: ', '').replace('Orion: ', '').replace('Pegasus: ', '').replace(/^\s+|\s+$/g, '');
        container.innerHTML = ` ${username}`;
        image_element.parentNode.insertBefore(container, image_element.nextSibling);
    }

    static addEditProfile() {
        const logout_element = document.querySelector('a[href*="logout"]');
        const container = document.createElement('span');
        container.innerHTML = `<a href='profile.php?action=edit&userid=${userid}' target='main'>Edit Profile</a> | `;
        logout_element.parentNode.insertBefore(container, logout_element);
    }

    static addCustomLinks() {
        const target_element = document.querySelector('td[align="right"] b');
        const container = document.createElement('div');
        container.innerHTML = '&nbsp';
        const links = [];
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_mapper_link'), true)) {
            links.push(`<a href="${QuickCommandsMapper.getUniverseUrl()}" target="_blank">Mapper</a>&nbsp`);
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_upgrades_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/building_upgrade.html" target="_blank">Upgrades</a>&nbsp');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_maxes_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/maxes/" target="_blank">Maxes</a>&nbsp');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_ap_calculator_link'), true)) {
            links.push('<a href="https://web.cs.elte.hu/~terpai/tcc_alt.html" target="_blank">AP Calculator</a>&nbsp');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_fsc_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/fsc/" target="_blank">FSC</a>&nbsp');
        }

        container.innerHTML = links.join('&nbsp;|&nbsp;');
        target_element.appendChild(container);
    }
}

/*

msgframe = document;
  var img = document.getElementsByTagName('img');

  var table = document.getElementsByTagName('table');
  var e = table[0].firstChild.firstChild.childNodes[3].firstChild;

  if(getUniverseName() == 'artemis' && (artemisCustomLinks.length>0))
  {
    var child = document.createElement('div');
    child.innerHTML = '&nbsp';
    for(var i = 0;i<artemisCustomLinks.length;i++){
        var link = artemisCustomLinks[i] ;
        var name = artemisCustomLinkNames[i];
        child.innerHTML+='<a href="' + link + '" target="_blank">' + name + '</a>&nbsp;|&nbsp;';
    }
    if(child.innerHTML.lastIndexOf('&nbsp;|&nbsp;')>=0){
        child.innerHTML=child.innerHTML.substring(0,child.innerHTML.lastIndexOf('&nbsp;|&nbsp;'))
    }
    e.appendChild(child);
  }
  if(getUniverseName() == 'orion' && (orionCustomLinks.length > 0))
  {
  
  var child = document.createElement('div');
    child.innerHTML = '&nbsp';
    for(var i = 0;i<orionCustomLinks.length;i++){
        var link = orionCustomLinks[i] ;
        var name = orionCustomLinkNames[i];
        child.innerHTML+='<a href="' + link + '" target="_blank">' + name + '</a>&nbsp;|&nbsp;';
    }
    if(child.innerHTML.lastIndexOf('&nbsp;|&nbsp;')>=0){
        child.innerHTML=child.innerHTML.substring(0,child.innerHTML.lastIndexOf('&nbsp;|&nbsp;'))
    }
    e.appendChild(child);
  }
  if(getUniverseName() == 'pegasus' && (pegasusCustomLinks.length>0))
  {
    var child = document.createElement('div');
    child.innerHTML = '&nbsp';
    for(var i = 0;i<pegasusCustomLinks.length;i++){
        var link = pegasusCustomLinks[i] ;
        var name = pegasusCustomLinkNames[i];
        child.innerHTML+='<a href="' + link + '" target="_blank">' + name + '</a>&nbsp;|&nbsp;';
    }
    if(child.innerHTML.lastIndexOf('&nbsp;|&nbsp;')>=0){
        child.innerHTML=child.innerHTML.substring(0,child.innerHTML.lastIndexOf('&nbsp;|&nbsp;'))
    }
    e.appendChild(child);
  }