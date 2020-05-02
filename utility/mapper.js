/* env greasemonkey, es6 */

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class QuickCommandsMapper {
    static getSectorUrl(sector) {

        /* Pardus' built-in map with either the Map Pack 1 or Map Pack 2 special equipment installed */
        if (false) {
            return 'https://artemis.pardus.at/overview_map.php?slim=y';
        }

        // Default
        return `https://pardusmapper.com/${PardusOptionsUtility.getUniverse().capitalize()}/${sector}`;
    }
}