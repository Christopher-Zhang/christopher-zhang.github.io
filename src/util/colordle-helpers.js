export function setSeed(s) {
    return function () {
        s = Math.sin(s) * 10000; return s - Math.floor(s);
    };
};

export function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export function getContrastColor(color) {
    return color > 0xFFFFFF / 2 ? 'black' : 'white';
}

export function preventFocus(event) {
    event.target.blur();
}