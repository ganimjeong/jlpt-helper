import { useEffect, useMemo, useState } from "react";
import { DeckDetail } from "./components/DeckDetail";
import { DeckList } from "./components/DeckList";
import { SessionComplete } from "./components/SessionComplete";
import { StudySession } from "./components/StudySession";
import { decks, type VocabularyDeck, type VocabularyWord } from "./data/decks";
import { getSessionWords } from "./domain/deckStats";
import {
  loadStudyState,
  resetDeckToChecked,
  saveStudyState,
  setWordChecked,
  type StudyState
} from "./domain/studyState";

type View =
  | { name: "decks" }
  | { name: "deckDetail"; deckId: string }
  | { name: "study"; deckId: string; sessionWords: VocabularyWord[] }
  | {
      name: "complete";
      deckId: string;
      reviewedWords: VocabularyWord[];
    };

export default function App() {
  const [studyState, setStudyState] = useState<StudyState>(() =>
    loadStudyState(decks)
  );
  const [view, setView] = useState<View>({ name: "decks" });

  useEffect(() => {
    saveStudyState(studyState);
  }, [studyState]);

  const deckById = useMemo(
    () => new Map(decks.map((deck) => [deck.id, deck])),
    []
  );

  function findDeck(deckId: string): VocabularyDeck {
    const deck = deckById.get(deckId);
    if (!deck) {
      throw new Error(`Unknown deck: ${deckId}`);
    }
    return deck;
  }

  function startCheckedSession(deck: VocabularyDeck) {
    const sessionWords = getSessionWords(deck, studyState);
    if (sessionWords.length === 0) {
      return;
    }
    setView({ name: "study", deckId: deck.id, sessionWords });
  }

  function resetAndStart(deck: VocabularyDeck) {
    const next = resetDeckToChecked(studyState, deck);
    setStudyState(next);
    setView({ name: "study", deckId: deck.id, sessionWords: deck.words });
  }

  function resolveWord(deckId: string, wordId: string, memorized: boolean) {
    setStudyState((current) =>
      setWordChecked(current, deckId, wordId, !memorized)
    );
  }

  function setManualWordStatus(deckId: string, wordId: string, checked: boolean) {
    setStudyState((current) => setWordChecked(current, deckId, wordId, checked));
  }

  if (view.name === "deckDetail") {
    const deck = findDeck(view.deckId);
    return (
      <DeckDetail
        deck={deck}
        studyState={studyState}
        onBack={() => setView({ name: "decks" })}
        onStart={() => startCheckedSession(deck)}
        onReset={() => resetAndStart(deck)}
        onSetWordChecked={(wordId, checked) =>
          setManualWordStatus(deck.id, wordId, checked)
        }
      />
    );
  }

  if (view.name === "study") {
    const deck = findDeck(view.deckId);
    return (
      <StudySession
        deck={deck}
        words={view.sessionWords}
        onBack={() => setView({ name: "decks" })}
        onResolve={resolveWord}
        onComplete={(reviewedWords) =>
          setView({ name: "complete", deckId: deck.id, reviewedWords })
        }
      />
    );
  }

  if (view.name === "complete") {
    const deck = findDeck(view.deckId);
    return (
      <SessionComplete
        deck={deck}
        reviewedWords={view.reviewedWords}
        studyState={studyState}
        onReviewAgain={() => startCheckedSession(deck)}
        onReset={() => resetAndStart(deck)}
        onDeckList={() => setView({ name: "decks" })}
      />
    );
  }

  return (
    <DeckList
      decks={decks}
      studyState={studyState}
      onStart={startCheckedSession}
      onView={(deck) => setView({ name: "deckDetail", deckId: deck.id })}
      onReset={resetAndStart}
    />
  );
}
