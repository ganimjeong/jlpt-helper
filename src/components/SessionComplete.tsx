import type { VocabularyDeck, VocabularyWord } from "../data/decks";
import { getDeckStats } from "../domain/deckStats";
import { getCheckedWordIds, type StudyState } from "../domain/studyState";

type SessionCompleteProps = {
  deck: VocabularyDeck;
  reviewedWords: VocabularyWord[];
  studyState: StudyState;
  onReviewAgain: () => void;
  onReset: () => void;
  onDeckList: () => void;
};

export function SessionComplete({
  deck,
  reviewedWords,
  studyState,
  onReviewAgain,
  onReset,
  onDeckList
}: SessionCompleteProps) {
  const stats = getDeckStats(deck, studyState);
  const checked = new Set(getCheckedWordIds(studyState, deck.id));
  const allMemorized = stats.totalWords > 0 && stats.checkedWords === 0;

  return (
    <main
      className={`app-shell ${allMemorized ? "celebration-screen" : ""}`}
      data-screen-label="04 Session Complete"
    >
      <header className="app-header">
        <div>
          <p className="eyebrow">Session complete</p>
          <h1>{allMemorized ? "전부 외웠습니다" : "한 바퀴 완료"}</h1>
        </div>
      </header>

      {allMemorized ? (
        <section className="celebration-panel" aria-label="단어장 완료 축하">
          <div className="celebration-burst" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <p className="eyebrow">Deck cleared</p>
          <h2>오늘 이 단어장은 마무리됐습니다</h2>
          <p>
            모든 단어가 외운 상태입니다. 나중에 헷갈리는 단어만 단어장 보기에서
            다시 못외움으로 바꿀 수 있습니다.
          </p>
        </section>
      ) : null}

      <section className="summary-panel">
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

        <div className="complete-actions">
          <button
            className="primary-button"
            type="button"
            onClick={onReviewAgain}
            disabled={stats.checkedWords === 0}
          >
            다시 외우기
          </button>
          <button className="secondary-button" type="button" onClick={onReset}>
            처음부터 외우기
          </button>
          <button className="ghost-button" type="button" onClick={onDeckList}>
            단어장으로
          </button>
        </div>
      </section>

      <section className="review-list" aria-label="이번 회차 단어 요약">
        <div className="section-heading">
          <h2>이번 회차</h2>
          <span>{reviewedWords.length}개 확인</span>
        </div>
        {reviewedWords.map((word) => (
          <article className="review-row" key={word.id}>
            <div>
              <strong>{word.kanji}</strong>
              {word.kana ? <span>{word.kana}</span> : null}
              <small>{word.meaningKo}</small>
            </div>
            <span className={checked.has(word.id) ? "status-checked" : "status-clear"}>
              {checked.has(word.id) ? "못 외움" : "외움"}
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
