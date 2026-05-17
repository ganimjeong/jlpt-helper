import { describe, expect, it } from "vitest";
import { decks } from "../data/decks";

describe("vocabulary decks", () => {
  it("uses unique deck ids and word ids", () => {
    const deckIds = new Set<string>();

    for (const deck of decks) {
      expect(deckIds.has(deck.id)).toBe(false);
      deckIds.add(deck.id);

      const wordIds = new Set<string>();
      for (const word of deck.words) {
        expect(wordIds.has(word.id)).toBe(false);
        wordIds.add(word.id);
      }
    }
  });

  it("includes Korean meanings and example translations", () => {
    for (const deck of decks) {
      for (const word of deck.words) {
        expect(word.kanji.length).toBeGreaterThan(0);
        expect(word.meaningKo.length).toBeGreaterThan(0);
        expect(word.exampleJa.length).toBeGreaterThan(0);
        expect(word.exampleKo?.length).toBeGreaterThan(0);
      }
    }
  });
});
