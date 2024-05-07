import { findAll } from "highlight-words-core";

const textToHighlight = "This is some text to highlight.";
const searchWords = ["This", "i"];

findAll({
    searchWords,
    textToHighlight,
});

findAll({
    autoEscape: true,
    caseSensitive: true,
    searchWords,
    textToHighlight,
});

const regexSearchWords = [/some test/gi, new RegExp('some')];

findAll({
    searchWords: regexSearchWords,
    textToHighlight,
});
