/* env greasemonkey, es6 */

class QuickCommandsOptionsPage {
    constructor() {

    }

    static navOptions(subtab) {
        const nav_options_box = subtab.addBox({
            heading: 'Nav',
            description: 'These options control the quick links on the Nav screen.',
        });

        // Commands Box
        nav_options_box.addBooleanOption({variable: "enable_ship_equipment", description: "Enable 'Ship Equipment' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_trade_with_planet_or_starbase", description: "Enable 'Trade With Planet/Starbase' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_bulletin_board", description: "Enable 'Bulletin Board' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_bounty_board", description: "Enable 'Bounty Board' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_ship_yard", description: "Enable 'Ship Yard' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_black_market", description: "Enable 'Black Market' link:", defaultValue: true});
        nav_options_box.addBooleanOption({variable: "enable_hack", description: "Enable 'Hack' link:", defaultValue: true});

        // Ship Box
        nav_options_box.addBooleanOption({variable: "enable_ship_overview", description: "Enable 'Ship Overview' link:", defaultValue: false});
    }

    static description(subtab) {
        const description_box = subtab.addBox({
            heading: 'Description',
            description: 'These are the options for the Pardus Quick Commands script.',
        });
    }

    static statusBarOptions(subtab) {
        const custom_links_options_box = subtab.addBoxLeft({
            heading: 'Status Bar',
            description: 'These are the options for the status bar.'
        });
    }

    static run() {
        var quick_commands_options_tab = unsafeWindow.PardusOptions.addTab({
            heading: 'Quick Commands',
            id: 'quick-commands-options',
        });

        this.description(quick_commands_options_tab);
        this.navOptions(quick_commands_options_tab);
        this.statusBarOptions(quick_commands_options_tab);
    }
}