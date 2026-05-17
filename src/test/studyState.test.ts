import { describe, expect, it } from "vitest";
import { decks } from "../data/decks";
import { getDeckStats, getSessionWords } from "../domain/deckStats";
import {
  createInitialStudyState,
  reconcileStudyState,
  resetDeckToChecked,
  setWordChecked
} from "../domain/studyState";

describe("study state", () => {
  it("starts every word as checked", () => {
    const state = createInitialStudyState(decks, "2026-05-17T00:00:00.000Z");
    const deck = decks[0];

    expect(state.decks[deck.id].checkedWordIds).toEqual(
      deck.words.map((word) => word.id)
    );
  });

  it("excludes memorized words from the next session", () => {
    const deck = decks[0];
    const firstWord = deck.words[0];
    let state = createInitialStudyState(decks, "2026-05-17T00:00:00.000Z");

    state = setWordChecked(
      state,
      deck.id,
      firstWord.id,
      false,
      "2026-05-17T01:00:00.000Z"
    );

    expect(getSessionWords(deck, state).map((word) => word.id)).not.toContain(
      firstWord.id
    );
    expect(getDeckStats(deck, state).memorizedWords).toBe(1);
  });

  it("resets a deck from the beginning", () => {
    const deck = decks[0];
    let state = createInitialStudyState(decks, "2026-05-17T00:00:00.000Z");
    state = setWordChecked(
      state,
      deck.id,
      deck.words[0].id,
      false,
      "2026-05-17T01:00:00.000Z"
    );

    state = resetDeckToChecked(state, deck, "2026-05-17T02:00:00.000Z");

    expect(getSessionWords(deck, state)).toHaveLength(deck.words.length);
  });

  it("adds newly introduced words as checked", () => {
    const deck = decks[0];
    const state = createInitialStudyState(decks, "2026-05-17T00:00:00.000Z");
    const nextDecks = [
      {
        ...deck,
        words: [
          ...deck.words,
          {
            id: "atarashii",
            kanji: "新しい",
            kana: "あたらしい",
            meaningKo: "새롭다",
            exampleJa: "新しい 本を 買いました。",
            exampleKo: "새 책을 샀습니다."
          }
        ]
      }
    ];

    const reconciled = reconcileStudyState(
      state,
      nextDecks,
      "2026-05-17T03:00:00.000Z"
    );

    expect(reconciled.decks[deck.id].checkedWordIds).toContain("atarashii");
  });
});
