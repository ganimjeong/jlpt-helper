export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1" | "unknown";

export type VocabularyWord = {
  id: string;
  kanji: string;
  kana?: string;
  meaningKo: string;
  exampleJa: string;
  exampleKo?: string;
  tags?: string[];
};

export type VocabularyDeck = {
  id: string;
  title: string;
  description?: string;
  sourceBatch?: string;
  jlptLevel?: JlptLevel;
  createdAt: string;
  updatedAt: string;
  words: VocabularyWord[];
};

export const decks: VocabularyDeck[] = [
  {
    id: "sample-basics-2026-05-17",
    title: "기초 반복 단어",
    description: "앱 흐름 검증을 위한 샘플 단어장입니다.",
    sourceBatch: "sample-2026-05-17",
    jlptLevel: "unknown",
    createdAt: "2026-05-17",
    updatedAt: "2026-05-17",
    words: [
      {
        id: "benkyou",
        kanji: "勉強",
        kana: "べんきょう",
        meaningKo: "공부",
        exampleJa: "毎日 日本語を 勉強します。",
        exampleKo: "매일 일본어를 공부합니다.",
        tags: ["noun", "suru-verb"]
      },
      {
        id: "yakusoku",
        kanji: "約束",
        kana: "やくそく",
        meaningKo: "약속",
        exampleJa: "友だちと 約束を しました。",
        exampleKo: "친구와 약속을 했습니다.",
        tags: ["noun", "suru-verb"]
      },
      {
        id: "taisetsu",
        kanji: "大切",
        kana: "たいせつ",
        meaningKo: "중요함, 소중함",
        exampleJa: "時間は とても 大切です。",
        exampleKo: "시간은 매우 중요합니다.",
        tags: ["na-adjective"]
      },
      {
        id: "hayai",
        kanji: "早い",
        kana: "はやい",
        meaningKo: "이르다, 빠르다",
        exampleJa: "朝 早く 起きました。",
        exampleKo: "아침에 일찍 일어났습니다.",
        tags: ["i-adjective"]
      },
      {
        id: "renraku",
        kanji: "連絡",
        kana: "れんらく",
        meaningKo: "연락",
        exampleJa: "あとで 先生に 連絡します。",
        exampleKo: "나중에 선생님께 연락합니다.",
        tags: ["noun", "suru-verb"]
      }
    ]
  }
];
