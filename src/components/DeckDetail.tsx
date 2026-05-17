import type { VocabularyDeck } from "../data/decks";
import { getDeckStats } from "../domain/deckStats";
import { getCheckedWordIds, type StudyState } from "../domain/studyState";

type DeckDetailProps = {
  deck: VocabularyDeck;
  studyState: StudyState;
  onBack: () => void;
  onStart: () => void;
  onReset: () => void;
  onSetWordChecked: (wordId: string, checked: boolean) => void;
};

export function DeckDetail({
  deck,
  studyState,
  onBack,
  onStart,
  onReset,
  onSetWordChecked
}: DeckDetailProps) {
  const stats = getDeckStats(deck, studyState);
  const checked = new Set(getCheckedWordIds(studyState, deck.id));
  const canStudy = stats.checkedWords > 0;

  return (
    <main className="app-shell" data-screen-label="02 Deck Detail">
      <header className="session-header">
        <button className="icon-text-button" type="button" onClick={onBack}>
          ← 단어장
        </button>
        <div>
          <p className="eyebrow">Deck detail</p>
          <h1>{deck.title}</h1>
        </div>
        <span className="progress-pill">
          {stats.checkedWords} / {stats.totalWords}
        </span>
      </header>

      <section className="summary-panel deck-detail-summary">
        <div className="summary-grid">
          <div>
            <span>전체</span>
            <strong>{stats.totalWords}</strong>
          </div>
          <div>
            <span>못 외움</span>
            <strong>{stats.checkedWords}</strong>
          </div>
          <div>
            <span>외움</span>
            <strong>{stats.memorizedWords}</strong>
          </div>
        </div>
        <div className="deck-detail-actions">
          <button
            className="primary-button"
            type="button"
            onClick={onStart}
            disabled={!canStudy}
          >
            학습하기
          </button>
          <button className="secondary-button" type="button" onClick={onReset}>
            처음부터 외우기
          </button>
        </div>
      </section>

      <section className="word-table" aria-label="단어장 단어 목록">
        <div className="section-heading">
          <h2>단어 목록</h2>
          <span>{stats.checkedWords}개 복습 대기</span>
        </div>
        {deck.words.map((word) => {
          const isChecked = checked.has(word.id);

          return (
            <article className="word-row" key={word.id}>
              <div className="word-row-content">
                <div className="word-row-head">
                  <div className="word-row-title">
                    <strong>{word.kanji}</strong>
                    {word.kana ? <span>{word.kana}</span> : null}
                  </div>
                  <label className="status-switch">
                    <span>{isChecked ? "못외움" : "외움"}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(event) =>
                        onSetWordChecked(word.id, event.currentTarget.checked)
                      }
                      aria-label={`${word.kanji} ${isChecked ? "못외움" : "외움"}`}
                    />
                    <i aria-hidden="true" />
                  </label>
                </div>
                <p>{word.meaningKo}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
