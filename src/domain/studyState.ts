import type { VocabularyDeck } from "../data/decks";

export type DeckStudyState = {
  checkedWordIds: string[];
  knownWordIds: string[];
  lastStudiedAt?: string;
};

export type StudyState = {
  version: 1;
  updatedAt: string;
  decks: Record<string, DeckStudyState>;
};

export const STUDY_STATE_STORAGE_KEY = "jlpt-helper.study-state.v1";

export function createInitialStudyState(
  decks: VocabularyDeck[],
  now = new Date().toISOString()
): StudyState {
  return {
    version: 1,
    updatedAt: now,
    decks: Object.fromEntries(
      decks.map((deck) => [
        deck.id,
        {
          checkedWordIds: deck.words.map((word) => word.id),
          knownWordIds: deck.words.map((word) => word.id)
        }
      ])
    )
  };
}

export function reconcileStudyState(
  state: StudyState,
  decks: VocabularyDeck[],
  now = new Date().toISOString()
): StudyState {
  const nextDecks: StudyState["decks"] = {};

  for (const deck of decks) {
    const previous = state.decks[deck.id];
    const previousChecked = new Set(previous?.checkedWordIds ?? []);
    const previousKnown = new Set(
      previous?.knownWordIds ?? previous?.checkedWordIds ?? []
    );
    const checkedWordIds = deck.words
      .map((word) => word.id)
      .filter((id) => (previous ? previousChecked.has(id) || !previousKnown.has(id) : true));

    nextDecks[deck.id] = {
      checkedWordIds: Array.from(new Set(checkedWordIds)),
      knownWordIds: deck.words.map((word) => word.id),
      lastStudiedAt: previous?.lastStudiedAt
    };
  }

  return {
    version: 1,
    updatedAt: now,
    decks: nextDecks
  };
}

export function safeParseStudyState(value: string | null): StudyState | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as StudyState;
    if (parsed.version !== 1 || typeof parsed.decks !== "object") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function loadStudyState(
  decks: VocabularyDeck[],
  storage: Storage = window.localStorage
): StudyState {
  const stored = safeParseStudyState(storage.getItem(STUDY_STATE_STORAGE_KEY));
  if (!stored) {
    return createInitialStudyState(decks);
  }
  return reconcileStudyState(stored, decks);
}

export function saveStudyState(
  state: StudyState,
  storage: Storage = window.localStorage
) {
  storage.setItem(STUDY_STATE_STORAGE_KEY, JSON.stringify(state));
}

export function setWordChecked(
  state: StudyState,
  deckId: string,
  wordId: string,
  checked: boolean,
  now = new Date().toISOString()
): StudyState {
  const deckState = state.decks[deckId] ?? {
    checkedWordIds: [],
    knownWordIds: []
  };
  const checkedIds = new Set(deckState.checkedWordIds);

  if (checked) {
    checkedIds.add(wordId);
  } else {
    checkedIds.delete(wordId);
  }

  return {
    ...state,
    updatedAt: now,
    decks: {
      ...state.decks,
      [deckId]: {
        ...deckState,
        checkedWordIds: Array.from(checkedIds),
        knownWordIds: Array.from(
          new Set([...(deckState.knownWordIds ?? []), wordId])
        ),
        lastStudiedAt: now
      }
    }
  };
}

export function resetDeckToChecked(
  state: StudyState,
  deck: VocabularyDeck,
  now = new Date().toISOString()
): StudyState {
  return {
    ...state,
    updatedAt: now,
    decks: {
      ...state.decks,
      [deck.id]: {
        checkedWordIds: deck.words.map((word) => word.id),
        knownWordIds: deck.words.map((word) => word.id),
        lastStudiedAt: now
      }
    }
  };
}

export function getCheckedWordIds(state: StudyState, deckId: string): string[] {
  return state.decks[deckId]?.checkedWordIds ?? [];
}
