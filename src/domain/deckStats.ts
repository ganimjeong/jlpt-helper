import type { VocabularyDeck, VocabularyWord } from "../data/decks";
import type { StudyState } from "./studyState";

export type DeckStats = {
  totalWords: number;
  checkedWords: number;
  memorizedWords: number;
  lastStudiedAt?: string;
};

export function getDeckStats(deck: VocabularyDeck, state: StudyState): DeckStats {
  const checkedWords = state.decks[deck.id]?.checkedWordIds.length ?? deck.words.length;

  return {
    totalWords: deck.words.length,
    checkedWords,
    memorizedWords: Math.max(deck.words.length - checkedWords, 0),
    lastStudiedAt: state.decks[deck.id]?.lastStudiedAt
  };
}

export function getSessionWords(
  deck: VocabularyDeck,
  state: StudyState
): VocabularyWord[] {
  const checked = new Set(state.decks[deck.id]?.checkedWordIds ?? []);
  return deck.words.filter((word) => checked.has(word.id));
}
