import { useEffect, useMemo, useRef, useState } from "react";
import type { QuizStyle, VocabularyWord } from "../data/decks";

type WordCardProps = {
  word: VocabularyWord;
  quizStyle?: QuizStyle;
  onResolve: (memorized: boolean) => void;
};

type RevealStep = "kanji" | "kana" | "example" | "meaning";

const stepLabels: Record<RevealStep, string> = {
  kanji: "표기",
  kana: "읽기",
  example: "예문",
  meaning: "뜻"
};

export function WordCard({ word, quizStyle = "reading", onResolve }: WordCardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const [nudge, setNudge] = useState(false);
  const [exitDirection, setExitDirection] = useState<"known" | "forgot" | null>(
    null
  );
  const draggedRef = useRef(false);

  const hasKana = Boolean(word.kana && word.kana !== word.kanji);
  // 表記 (writing) decks mimic JLPT 問題2: the kana reading is the prompt and
  // the kanji is revealed as the answer, so kana comes first.
  const isWriting = quizStyle === "writing" && hasKana;

  const steps = useMemo<RevealStep[]>(() => {
    if (isWriting) {
      return ["kana", "kanji", "example", "meaning"];
    }
    const next: RevealStep[] = ["kanji"];
    if (hasKana) {
      next.push("kana");
    }
    next.push("example", "meaning");
    return next;
  }, [isWriting, hasKana]);

  const currentStep = steps[stepIndex];
  const isFinalStep = stepIndex === steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setDragX(0);
    setPointerStartX(null);
    setExitDirection(null);
    draggedRef.current = false;
  }, [word.id]);

  function revealNext() {
    if (!isFinalStep) {
      setStepIndex((current) => current + 1);
      return;
    }

    setNudge(true);
    window.setTimeout(() => setNudge(false), 240);
  }

  function resolve(memorized: boolean) {
    if (exitDirection) {
      return;
    }

    setExitDirection(memorized ? "known" : "forgot");
    setDragX(memorized ? 130 : -130);
    window.setTimeout(() => {
      onResolve(memorized);
    }, 180);
  }

  function finishSwipe(currentDragX: number) {
    if (currentDragX > 88) {
      resolve(true);
    } else if (currentDragX < -88) {
      resolve(false);
    } else {
      setDragX(0);
    }
  }

  return (
    <div className="study-card-area">
      <button
        className={[
          "word-card",
          nudge ? "word-card-nudge" : "",
          exitDirection === "known" ? "word-card-exit-known" : "",
          exitDirection === "forgot" ? "word-card-exit-forgot" : ""
        ]
          .filter(Boolean)
          .join(" ")}
        key={word.id}
        type="button"
        onClick={(event) => {
          if (draggedRef.current) {
            event.preventDefault();
            draggedRef.current = false;
            return;
          }
          revealNext();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            revealNext();
          }
        }}
        onPointerDown={(event) => {
          if (exitDirection) {
            return;
          }
          draggedRef.current = false;
          setPointerStartX(event.clientX);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (pointerStartX === null || exitDirection) {
            return;
          }
          const nextDragX = event.clientX - pointerStartX;
          if (Math.abs(nextDragX) > 8) {
            draggedRef.current = true;
          }
          setDragX(Math.max(Math.min(nextDragX, 130), -130));
        }}
        onPointerUp={(event) => {
          const currentDragX =
            pointerStartX === null
              ? dragX
              : Math.max(Math.min(event.clientX - pointerStartX, 130), -130);

          setPointerStartX(null);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          finishSwipe(currentDragX);
          if (draggedRef.current) {
            window.setTimeout(() => {
              draggedRef.current = false;
            }, 160);
          }
        }}
        onPointerCancel={() => {
          setPointerStartX(null);
          setDragX(0);
          window.setTimeout(() => {
            draggedRef.current = false;
          }, 0);
        }}
        style={{ transform: `translateX(${dragX}px) rotate(${dragX / 24}deg)` }}
        aria-label="단어 카드, 누르면 다음 정보가 표시됩니다"
      >
        <span className="card-progress">
          <span className="card-step">
            {stepLabels[currentStep]} · {stepIndex + 1}/{steps.length}
          </span>
          <span className="reveal-track" aria-hidden="true">
            {steps.map((step, index) => (
              <span
                className={index <= stepIndex ? "reveal-dot reveal-dot-active" : "reveal-dot"}
                key={step}
              />
            ))}
          </span>
        </span>

        <span className="card-content" key={`${word.id}-${currentStep}`}>
          {isWriting ? (
            stepIndex >= steps.indexOf("kanji") ? (
              <>
                <strong className="word-kanji">{word.kanji}</strong>
                <span className="word-kana">{word.kana}</span>
              </>
            ) : (
              <strong className="word-kanji">{word.kana}</strong>
            )
          ) : (
            <>
              <strong className="word-kanji">{word.kanji}</strong>
              {hasKana && currentStep !== "kanji" ? (
                <span className="word-kana">{word.kana}</span>
              ) : null}
            </>
          )}

          {(currentStep === "example" || currentStep === "meaning") && (
            <span className="example-block">
              <span className="word-example-ja">{word.exampleJa}</span>
              {currentStep === "meaning" && word.exampleKo ? (
                <small>{word.exampleKo}</small>
              ) : null}
            </span>
          )}

          {currentStep === "meaning" && (
            <span className="meaning-block">
              <span>{word.meaningKo}</span>
            </span>
          )}
        </span>
      </button>

      <div className="swipe-hints" aria-hidden="true">
        <span className={dragX < -32 ? "hint-active hint-forget" : "hint-forget"}>
          ← 못외웠음
        </span>
        <span className={dragX > 32 ? "hint-active hint-known" : "hint-known"}>
          외웠음 →
        </span>
      </div>

      <div className="study-actions">
        <button className="secondary-button action-button" type="button" onClick={() => resolve(false)}>
          못외웠음
        </button>
        <button className="primary-button action-button" type="button" onClick={() => resolve(true)}>
          외웠음
        </button>
      </div>
    </div>
  );
}
