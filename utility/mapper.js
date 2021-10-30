/* env greasemonkey, es6 */
/* global PardusOptionsUtility */

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class QuickCommandsMapper {
    static getMappers() {
        return [
            {
                text: 'Zaqwer\'s Mapper (Hosted by Tightwad)',
                value: 'zaqwer',
                universe: 'https://pardusmapper.com/<Universe>/',
                sector: 'https://pardusmapper.com/<Universe>/<Sector>',
                default: true,
            },
            {
                text: 'Pardus\' Map Pack Equipment',
                value: 'pardus',
                universe: '/overview_map.php?slim=y',
                sector: '/overview_map.php?slim=y',
            },
            {
                text: 'X-COM Mapper',
                value: 'xcom',
                universe: 'http://map.xcom-alliance.info/',
                sector: 'http://map.xcom-alliance.info/<Sector>.html',
            },
            {
                text: 'Butterfat',
                value: 'butterfat',
                universe: 'http://pardus.butterfat.net/pardusmapper/maps/<universe>/universe.html',
                sector: 'http://pardus.butterfat.net/pardusmapper/maps/<universe>/<SectorNoSpace>.html'
            }
        ];
    }

    static getMapper(mapperToFetch) {
        for (const mapper of this.getMappers()) {
            if (mapper.value === mapperToFetch) {
                return mapper;
            }
        }
        throw new Error(`Mapper ${mapperToFetch} not found!`);
    }

    static getMapperToUse() {
        const mapperToUse = GM_getValue(PardusOptionsUtility.getVariableName('mapper_to_use'), 'zaqwer');
        return this.getMapper(mapperToUse);
    }

    static getSectorUrl(sector) {

        const mapperSector = this.getMapperToUse().sector
            .replace(/<universe>/, PardusOptionsUtility.getUniverse().toLowerCase())
            .replace(/<Universe>/, PardusOptionsUtility.getUniverse().capitalize())
            .replace(/<UNIVERSE>/, PardusOptionsUtility.getUniverse().toUpperCase())
            .replace(/<sector>/, sector.toLowerCase())
            .replace(/<Sector>/, sector.capitalize())
            .replace(/<SectorNoSpace>/, sector.capitalize().replace(' ', ''))
            .replace(/<SECTOR>/, sector.toUpperCase());

        return mapperSector;
        /* Pardus' built-in map with either the Map Pack 1 or Map Pack 2 special equipment installed */
        /*
        if (false) {
            return '/overview_map.php?slim=y';
        }

        // Default
        return `https://pardusmapper.com/${PardusOptionsUtility.getUniverse().capitalize()}/${sector}`;
        */
    }

    static getUniverseUrl() {
        /* Pardus' built-in map with either the Map Pack 1 or Map Pack 2 special equipment installed */
        /*if (false) {
            return '/overview_map.php?slim=y';
        }

        return `https://pardusmapper.com/${PardusOptionsUtility.getUniverse().capitalize()}/`;*/
        const mapperUniverse = this.getMapperToUse().universe
            .replace(/<universe>/, PardusOptionsUtility.getUniverse().toLowerCase())
            .replace(/<Universe>/, PardusOptionsUtility.getUniverse().capitalize())
            .replace(/<UNIVERSE>/, PardusOptionsUtility.getUniverse().toUpperCase());

        return mapperUniverse;
    }
}