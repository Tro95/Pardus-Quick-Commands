/* global userid */
import { PardusOptionsUtility } from 'pardus-options-library';
import Mapper from '../utility/mapper.js';

export default class Msgframe {
    constructor() {
        if (PardusOptionsUtility.getVariableValue('enable_account_name', true)) {
            this.addAccountName();
        }
        if (PardusOptionsUtility.getVariableValue('enable_edit_profile', true)) {
            this.addEditProfile();
        }
        if (PardusOptionsUtility.getVariableValue('enable_custom_links', true)) {
            this.addCustomLinks();
        }
    }

    addAccountName() {
        const container = document.createElement('span');
        const image_element = document.getElementsByTagName('img')[0];
        const username = image_element.getAttribute('title').replace('Artemis: ', '').replace('Orion: ', '').replace('Pegasus: ', '').replace(/^\s+|\s+$/g, '');
        container.innerHTML = ` ${username}`;
        image_element.parentNode.insertBefore(container, image_element.nextSibling);
    }

    addEditProfile() {
        const logout_element = document.querySelector('a[href*="logout"]');
        const container = document.createElement('span');
        container.innerHTML = `<a href='profile.php?action=edit&userid=${userid}' target='main'>Edit Profile</a> | `;
        logout_element.parentNode.insertBefore(container, logout_element);
    }

    addCustomLinks() {
        const target_element = document.querySelector('td[align="right"] b');
        const container = document.createElement('div');
        const links = [];
        if (PardusOptionsUtility.getVariableValue('enable_mapper_link', true)) {
            links.push(`<a href="${Mapper.getUniverseUrl()}" target="_blank">Mapper</a>`);
        }
        if (PardusOptionsUtility.getVariableValue('enable_upgrades_link', true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/building_upgrade.html" target="_blank">Upgrades</a>');
        }
        if (PardusOptionsUtility.getVariableValue('enable_maxes_link', true)) {
            links.push('<a href="https://www.xcom-alliance.info/buildingtools/maxes/" target="_blank">Maxes</a>');
        }
        if (PardusOptionsUtility.getVariableValue('enable_ap_calculator_link', true)) {
            links.push('<a href="https://tro.xcom-alliance.info/path_calculator.html" target="_blank">AP Calculator</a>');
        }
        if (PardusOptionsUtility.getVariableValue('enable_fsc_link', true)) {
            links.push('<a href="https://www.xcom-alliance.info/fsc/" target="_blank">FSC</a>');
        }

        container.innerHTML = links.join('&nbsp;|&nbsp;');
        target_element.appendChild(container);
    }
}
