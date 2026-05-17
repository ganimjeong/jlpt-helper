import type { VocabularyDeck } from "../data/decks";
import { getDeckStats } from "../domain/deckStats";
import type { StudyState } from "../domain/studyState";

type DeckListProps = {
  decks: VocabularyDeck[];
  studyState: StudyState;
  onStart: (deck: VocabularyDeck) => void;
  onView: (deck: VocabularyDeck) => void;
  onReset: (deck: VocabularyDeck) => void;
};

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

export function DeckList({
  decks,
  studyState,
  onStart,
  onView,
  onReset
}: DeckListProps) {
  return (
    <main className="app-shell" data-screen-label="01 Deck List">
      <header className="app-header">
        <div>
          <p className="eyebrow">Vocabulary decks</p>
          <h1>JLPT Helper</h1>
        </div>
        <span className="header-badge">{decks.length} decks</span>
      </header>

      {decks.length === 0 ? (
        <section className="empty-state">
          <h2>아직 단어장이 없습니다</h2>
          <p>단어 묶음을 코드 데이터로 추가하면 여기에서 바로 학습할 수 있습니다.</p>
        </section>
      ) : (
        <section className="deck-list" aria-label="단어장 목록">
          {decks.map((deck) => {
            const stats = getDeckStats(deck, studyState);
            const canStudy = stats.checkedWords > 0;
            const allMemorized = stats.totalWords > 0 && !canStudy;
            const memorizedPercent =
              stats.totalWords === 0
                ? 0
                : Math.round((stats.memorizedWords / stats.totalWords) * 100);

            return (
              <article
                className={`deck-card ${allMemorized ? "deck-card-cleared" : ""}`}
                key={deck.id}
              >
                <button
                  className="deck-card-main"
                  type="button"
                  onClick={() => canStudy && onStart(deck)}
                  aria-disabled={!canStudy}
                >
                  <span className="deck-title-row">
                    <span className="deck-title">{deck.title}</span>
                    {allMemorized ? (
                      <span className="cleared-badge">완료</span>
                    ) : null}
                  </span>
                  {deck.description ? (
                    <span className="deck-description">{deck.description}</span>
                  ) : null}
                  <span className="deck-meta">
                    총 {stats.totalWords}개 · 못 외운 단어 {stats.checkedWords}개
                  </span>
                  {stats.lastStudiedAt ? (
                    <span className="deck-meta">
                      최근 학습 {dateFormatter.format(new Date(stats.lastStudiedAt))}
                    </span>
                  ) : null}
                  <span
                    className="deck-progress"
                    aria-label={`외운 단어 ${memorizedPercent}%`}
                  >
                    <span style={{ width: `${memorizedPercent}%` }} />
                  </span>
                </button>

                {canStudy ? (
                  <div className="deck-card-actions">
                    <button
                      className="primary-button"
                      type="button"
                      onClick={() => onStart(deck)}
                    >
                      학습하기
                    </button>
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={() => onView(deck)}
                    >
                      단어장 보기
                    </button>
                  </div>
                ) : (
                  <div className="deck-reset">
                    <span>모든 단어를 외웠습니다</span>
                    <div className="deck-reset-actions">
                      <button
                        className="secondary-button"
                        type="button"
                        onClick={() => onView(deck)}
                      >
                        단어장 보기
                      </button>
                      <button
                        className="secondary-button"
                        type="button"
                        onClick={() => onReset(deck)}
                      >
                        처음부터 외우기
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
