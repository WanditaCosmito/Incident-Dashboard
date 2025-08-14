export const extractDCIMTiles = (description) => {
    const tilePatterns = [
        /tile[\s-]?(\w+)/gi,
        /row[\s-]?(\w+)[\s-]?tile[\s-]?(\w+)/gi,
        /dcim[\s-]?(\w+)/gi,
    ];

    let tiles = [];
    tilePatterns.forEach(pattern => {
        const matches = description.match(pattern);
        if (matches) {
            tiles = tiles.concat(matches.map(match => match.trim()));
        }
    });

    return tiles;
};

export const standardizeLocationName = (location) => {
    return location
        .trim()
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .replace(/(?:st|street)/g, 'St')
        .replace(/(?:rd|road)/g, 'Rd')
        .replace(/(?:ave|avenue)/g, 'Ave')
        .replace(/(?:blvd|boulevard)/g, 'Blvd');
};