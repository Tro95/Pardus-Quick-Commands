/* env greasemonkey, es6 */
/* global PardusOptions */

class QuickCommandsOptionsPage {
    static navOptions(subtab) {
        const nav_options_box = subtab.addBox({
            heading: 'Nav',
            description: 'These options control the quick links on the Nav screen.',
        });

        /*
         *  Status box
         */
        const status_box = subtab.addBox({
            heading: 'Status Box',
            description: 'These options control the quick links in the \'Status\' box in the top-left corner of the Nav screen.',
        });

        status_box.addBooleanOption({
            variable: 'enable_sector_map_link',
            description: 'Enable link from sector to mapper',
            defaultValue: true,
        });

        /*
         *  Commands box
         */
        const commands_box = subtab.addBox({
            heading: 'Commands Box',
            description: 'These options control the quick links in the \'Commands\' box on the left side of the Nav screen.',
        });

        commands_box.addBooleanOption({
            variable: 'enable_ship_equipment',
            description: 'Enable \'Ship Equipment\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_trade_with_planet_or_sb',
            description: 'Enable \'Trade With Planet/Starbase\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_bulletin_board',
            description: 'Enable \'Bulletin Board\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_bounty_board',
            description: 'Enable \'Bounty Board\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_shipyard',
            description: 'Enable \'Ship Yard\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_trade_with_blackmarket',
            description: 'Enable \'Black Market\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_hack_faction_database',
            description: 'Enable \'Hack\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_transfer_credits',
            description: 'Enable \'Transfer Credits\' link',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_trade_with_building',
            description: 'Enable \'Trade\' link for buildings',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_hack_building',
            description: 'Enable \'Hack information\' link for buildings',
            defaultValue: true
        });

        commands_box.addBooleanOption({
            variable: 'enable_recharge_shield',
            description: 'Enable \'Recharge Shield\' link for Energy Wells',
            defaultValue: true
        });


        /*
         *  Ship box
         */
        const ship_box = subtab.addBox({
            heading: 'Ship Box',
            description: 'These options control the quick links in the \'Ship\' box in the bottom-left corner of the Nav screen.',
        });

        ship_box.addBooleanOption({
            variable: 'enable_ship_overview',
            description: 'Enable \'Ship Overview\' link',
            defaultValue: false
        });
    }

    static description(subtab) {
        const description_box = subtab.addBox({
            heading: 'Description',
            description: 'These are the options for the Pardus Quick Commands script.',
        });
    }

    static mapperOptions(subtab) {
        const mapper_box = subtab.addBox({
            heading: 'Mapper',
            description: 'These are the options for the mapper that is used in multiple places, such as the commands box on the nav screen, and the mapper link in the status bar.',
        });

        mapper_box.addSelectOption({
            variable: 'mapper_to_use',
            description: 'Mapper to use',
            options: QuickCommandsMapper.getMappers(),
        });
    }

    static msgFrameOptions(subtab) {
        const msg_frame_general_box = subtab.addBoxLeft({
            heading: 'Status Bar',
            description: 'These are the options for the status bar at the top of the screen.'
        });

        msg_frame_general_box.addBooleanOption({
            variable: 'enable_account_name',
            description: 'Enable account name',
            defaultValue: true,
        });

        msg_frame_general_box.addBooleanOption({
            variable: 'enable_edit_profile',
            description: 'Enable \'Edit Profile\'',
            defaultValue: true,
        }); 

        msg_frame_general_box.addBooleanOption({
            variable: 'enable_custom_links',
            description: 'Enable custom links',
            defaultValue: true,
        });

        const custom_links_options_box = subtab.addBoxRight({
            heading: 'Custom Links',
            description: 'These are the options for the individual custom links displayed',
        });

        custom_links_options_box.addBooleanOption({
            variable: 'enable_mapper_link',
            description: 'Enable \'Mapper\' link',
            defaultValue: true,
            info: {
                title: 'Mapper Link',
                description: 'This uses the mapper selected in the \'General Options\' subtab.'
            }
        });

        custom_links_options_box.addBooleanOption({
            variable: 'enable_upgrades_link',
            description: 'Enable \'Upgrades\' link',
            defaultValue: true,
        });

        custom_links_options_box.addBooleanOption({
            variable: 'enable_maxes_link',
            description: 'Enable \'Maxes\' link',
            defaultValue: true,
        });

        custom_links_options_box.addBooleanOption({
            variable: 'enable_ap_calculator_link',
            description: 'Enable \'AP Calculator\' link',
            defaultValue: true,
        });

        custom_links_options_box.addBooleanOption({
            variable: 'enable_fsc_link',
            description: 'Enable \'FSC\' link',
            defaultValue: true,
        });
    }

    static run() {
        const quick_commands_options_tab = PardusOptions.addTab({
            heading: 'Quick Commands',
            id: 'quick-commands-options',
            defaultLabel: 'General Options',
        });

        const nav_subtab = quick_commands_options_tab.addSubTab({
            label: 'Nav Screen',
        });

        const message_frame_subtab = quick_commands_options_tab.addSubTab({
            label: 'Status Bar',
        });

        this.description(quick_commands_options_tab);
        this.navOptions(nav_subtab);
        this.mapperOptions(quick_commands_options_tab);
        this.msgFrameOptions(message_frame_subtab);
    }
}