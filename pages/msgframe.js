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
        const links = [];
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_mapper_link'), true)) {
            links.push(`<a href="${QuickCommandsMapper.getUniverseUrl()}" target="_blank">Mapper</a>`);
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_upgrades_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/building_upgrade.html" target="_blank">Upgrades</a>');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_maxes_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/maxes/" target="_blank">Maxes</a>');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_ap_calculator_link'), true)) {
            links.push('<a href="https://tro.xcom-alliance.info/path_calculator.html" target="_blank">AP Calculator</a>');
        }
        if (GM_getValue(PardusOptionsUtility.getVariableName('enable_fsc_link'), true)) {
            links.push('<a href="https://www.xcom-alliance.info/fsc/" target="_blank">FSC</a>');
        }

        container.innerHTML = links.join('&nbsp;|&nbsp;');
        target_element.appendChild(container);
    }
}
