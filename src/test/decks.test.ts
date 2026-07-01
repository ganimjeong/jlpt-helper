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

  it("includes Korean meanings plus either an example or a synonym", () => {
    for (const deck of decks) {
      for (const word of deck.words) {
        expect(word.kanji.length).toBeGreaterThan(0);
        expect(word.meaningKo.length).toBeGreaterThan(0);

        if (word.synonymJa) {
          // 言い換え類義 (synonym) decks carry a synonym pair instead of an example.
          expect(word.synonymJa.length).toBeGreaterThan(0);
          expect(word.synonymKo?.length ?? 0).toBeGreaterThan(0);
        } else {
          expect(word.exampleJa?.length ?? 0).toBeGreaterThan(0);
          expect(word.exampleKo?.length ?? 0).toBeGreaterThan(0);
        }
      }
    }
  });
});
