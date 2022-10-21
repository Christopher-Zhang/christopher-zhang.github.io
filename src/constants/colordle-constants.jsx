import "../Pages/Colordle.css";
export const COLOR_LENGTH = 6;
export const NUM_GUESSES = 6;
export const FEEDBACK = {
    gray: 0,
    yellow: 1,
    green: 2,
    silver: 3
}
export const COLORS = ["lightslategrey", "yellow", "green", "silver"];

// "which" is deprecated
export const KEYCODES = {
    "0": 48,
    "9": 57,
    "A": 65,
    "F": 70,
    "ENTER": 13,
    "BACKSPACE": 8,
    "DELETE": 46
};

export const HELP_CONTENT = (
    <p className="help-text">
        <b>Welcome to Colordle!</b><br/><br/>
        This game is similar to the popular game Wordle,
        but instead of guessing a 5-letter word, you are guessing
        the hexadecimal value for an RGB color. To help you out, 
        the colored bar at the top is the color you are aiming for.<br/><br/>
        To begin your guess, just type anywhere on the page,
        and once the line is filled, you can click submit or 
        [enter] on your keyboard to check your guess.<br/><br/>
        A green tile means you have the right value in the right place.
        A yellow one means you have the right value in the wrong place 
        A gray tile means its completely wrong.<br/><br/>
        A couple of notes: only 0 through 9 and A through F are valid values for hexadecimal, 
        and the first two digits correspond to the Red value, 3rd and 4th are to Green, 5th and 6th match up to Blue.<br/><br/>
        <b>Good luck!</b>
    </p>
);