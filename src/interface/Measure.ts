import Note from "./Note";

export default interface Measure {
    clef: Clef;
    notes: Array<Note>;
}

export enum Clef {
    TREBLE,
    BASS
}