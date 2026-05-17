import { useState } from "react";
import type { VocabularyDeck, VocabularyWord } from "../data/decks";
import { WordCard } from "./WordCard";

type StudySessionProps = {
  deck: VocabularyDeck;
  words: VocabularyWord[];
  onBack: () => void;
  onResolve: (deckId: string, wordId: string, memorized: boolean) => void;
  onComplete: (reviewedWords: VocabularyWord[]) => void;
};

export function StudySession({
  deck,
  words,
  onBack,
  onResolve,
  onComplete
}: StudySessionProps) {
  const [index, setIndex] = useState(0);
  const [reviewedWords, setReviewedWords] = useState<VocabularyWord[]>([]);
  const currentWord = words[index];

  function resolveCurrent(memorized: boolean) {
    if (!currentWord) {
      return;
    }

    onResolve(deck.id, currentWord.id, memorized);
    const nextReviewed = [...reviewedWords, currentWord];

    if (index + 1 >= words.length) {
      onComplete(nextReviewed);
      return;
    }

    setReviewedWords(nextReviewed);
    setIndex((current) => current + 1);
  }

  if (!currentWord) {
    return (
      <main className="app-shell">
        <section className="empty-state">
          <h1>학습할 단어가 없습니다</h1>
          <button className="primary-button" type="button" onClick={onBack}>
            단어장으로
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell study-shell" data-screen-label="03 Study Session">
      <header className="session-header">
        <button className="icon-text-button" type="button" onClick={onBack}>
          ← 단어장
        </button>
        <div>
          <p className="eyebrow">못 외운 단어 복습</p>
          <h1>{deck.title}</h1>
        </div>
        <span className="progress-pill">
          {index + 1} / {words.length}
        </span>
      </header>

      <WordCard word={currentWord} onResolve={resolveCurrent} />
    </main>
  );
}
