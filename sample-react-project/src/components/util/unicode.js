export const M_DASH = '\u2014';
export const H_ELLIPSIS = '\u2026';
export const COPYRIGHT = '\u00a9';
export const QUOTATION_MARK = '\u0022';
export const DEGREES = '\u00b0';
export const CELCIUS = '\u00b0c';

export const COMMAND = '\u2318';
export const CONTROL = '\u2303';
export const SHIFT = '\u21e7';
export const ALT = '\u2325';
export const DELETE = '\u232b';

export const OMEGA = '\u03A9';
export const HORIZONTAL_BAR = '\u2015';
export const MARS = '\u2642';
export const VENUS = '\u2640';

export const DOG = ":dog2:";
export const CAT = ":cat2:";


function toUTF16(codePoint) {
    var TEN_BITS = parseInt('1111111111', 2);
    function u(codeUnit) {
        return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
        return u(codePoint);
    }
    codePoint -= 0x10000;

    // Shift right to get to most significant 10 bits
    var leadSurrogate = 0xD800 + (codePoint >> 10);

    // Mask to get least significant 10 bits
    var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

    return u(leadSurrogate) + u(tailSurrogate);
}


export function getSpecieCode(specie) {
    if (specie == 'dog') return DOG;
    if (specie == 'cat') return CAT;
}
export function getSterilizedCode(code) {
    if (code=='sterilized-no') {
        return ":seeding";
    }
    return ":scissors:";
}