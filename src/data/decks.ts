export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1" | "unknown";

// "reading" (漢字読み): show kanji first, reveal the reading — JLPT 問題1.
// "writing" (表記): show the kana reading first, reveal the kanji — JLPT 問題2.
// "synonym" (言い換え類義): show the word, reveal a near-synonym — JLPT 問題5.
export type QuizStyle = "reading" | "writing" | "synonym";

export type VocabularyWord = {
  id: string;
  kanji: string;
  kana?: string;
  meaningKo: string;
  exampleJa?: string;
  exampleKo?: string;
  // 言い換え類義 (synonym) decks: a near-synonym expression and its Korean gloss.
  synonymJa?: string;
  synonymKo?: string;
  tags?: string[];
};

export type VocabularyDeck = {
  id: string;
  title: string;
  description?: string;
  sourceBatch?: string;
  jlptLevel?: JlptLevel;
  quizStyle?: QuizStyle;
  createdAt: string;
  updatedAt: string;
  words: VocabularyWord[];
};

const KR_BATCH = "kanji-reading-2026-05-25";
const KR_DATE = "2026-05-25";

export const decks: VocabularyDeck[] = [
  {
    id: "kanji-reading-a",
    title: "한자읽기_あ",
    description: "あ행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "akushu",
        kanji: "握手",
        kana: "あくしゅ",
        meaningKo: "악수",
        exampleJa: "二人は 笑顔で 握手を 交わした。",
        exampleKo: "두 사람은 웃는 얼굴로 악수를 나누었다."
      },
      {
        id: "aseru",
        kanji: "焦る",
        kana: "あせる",
        meaningKo: "초조해하다",
        exampleJa: "時間が ないので、つい 焦って しまう。",
        exampleKo: "시간이 없어서 그만 초조해진다."
      },
      {
        id: "ataeru",
        kanji: "与える",
        kana: "あたえる",
        meaningKo: "주다",
        exampleJa: "先生は 学生に チャンスを 与えた。",
        exampleKo: "선생님은 학생에게 기회를 주었다."
      },
      {
        id: "atatakai",
        kanji: "温かい",
        kana: "あたたかい",
        meaningKo: "다정하다, 따뜻하다",
        exampleJa: "温かい 言葉に 心が 救われた。",
        exampleKo: "다정한 말에 마음이 위로받았다."
      },
      {
        id: "asshou",
        kanji: "圧勝",
        kana: "あっしょう",
        meaningKo: "압승",
        exampleJa: "我が 校は 決勝戦で 圧勝した。",
        exampleKo: "우리 학교는 결승전에서 압승했다."
      },
      {
        id: "attouteki",
        kanji: "圧倒的",
        kana: "あっとうてき",
        meaningKo: "압도적",
        exampleJa: "彼の 演技は 圧倒的だった。",
        exampleKo: "그의 연기는 압도적이었다."
      },
      {
        id: "ayashii",
        kanji: "怪しい",
        kana: "あやしい",
        meaningKo: "수상하다",
        exampleJa: "外で 怪しい 物音が した。",
        exampleKo: "밖에서 수상한 소리가 났다."
      },
      {
        id: "ayamari",
        kanji: "誤り",
        kana: "あやまり",
        meaningKo: "잘못, 틀림, 실수",
        exampleJa: "報告書の 誤りを 訂正した。",
        exampleKo: "보고서의 잘못을 정정했다."
      },
      {
        id: "aratamete",
        kanji: "改めて",
        kana: "あらためて",
        meaningKo: "다시, 재차, 새삼스레",
        exampleJa: "改めて お礼を 申し上げます。",
        exampleKo: "다시 한번 감사 인사를 드립니다."
      },
      {
        id: "angai",
        kanji: "案外",
        kana: "あんがい",
        meaningKo: "뜻밖에, 의외로",
        exampleJa: "試験は 案外 やさしかった。",
        exampleKo: "시험은 의외로 쉬웠다."
      },
      {
        id: "iinikui",
        kanji: "言い難い",
        kana: "いいにくい",
        meaningKo: "말하기 어렵다",
        exampleJa: "本当の ことは 言い難い。",
        exampleKo: "진실은 말하기 어렵다."
      },
      {
        id: "isamashii",
        kanji: "勇ましい",
        kana: "いさましい",
        meaningKo: "용감하다",
        exampleJa: "勇ましい 声で 仲間を 励ました。",
        exampleKo: "용감한 목소리로 동료를 격려했다."
      },
      {
        id: "ijou",
        kanji: "異常",
        kana: "いじょう",
        meaningKo: "이상함",
        exampleJa: "機械に 異常が 見つかった。",
        exampleKo: "기계에서 이상이 발견되었다."
      },
      {
        id: "itamu",
        kanji: "傷む",
        kana: "いたむ",
        meaningKo: "상하다",
        exampleJa: "暑さで 果物が 傷んで しまった。",
        exampleKo: "더위로 과일이 상해 버렸다."
      },
      {
        id: "ichijirushii",
        kanji: "著しい",
        kana: "いちじるしい",
        meaningKo: "현저하다, 두드러지다",
        exampleJa: "売り上げが 著しく 伸びた。",
        exampleKo: "매출이 현저하게 늘었다."
      },
      {
        id: "iten",
        kanji: "移転",
        kana: "いてん",
        meaningKo: "이전",
        exampleJa: "来月、事務所が 移転します。",
        exampleKo: "다음 달, 사무실이 이전합니다."
      },
      {
        id: "inoru",
        kanji: "祈る",
        kana: "いのる",
        meaningKo: "기도하다",
        exampleJa: "家族の 健康を 祈る。",
        exampleKo: "가족의 건강을 기도한다."
      },
      {
        id: "ihan",
        kanji: "違反",
        kana: "いはん",
        meaningKo: "위반",
        exampleJa: "交通違反で 罰金を 払った。",
        exampleKo: "교통위반으로 벌금을 냈다."
      },
      {
        id: "iryou",
        kanji: "医療",
        kana: "いりょう",
        meaningKo: "의료",
        exampleJa: "この 国は 医療制度が 整って いる。",
        exampleKo: "이 나라는 의료제도가 잘 갖추어져 있다."
      },
      {
        id: "iwau",
        kanji: "祝う",
        kana: "いわう",
        meaningKo: "축하하다",
        exampleJa: "友人の 誕生日を 祝う。",
        exampleKo: "친구의 생일을 축하한다."
      },
      {
        id: "insatsu",
        kanji: "印刷",
        kana: "いんさつ",
        meaningKo: "인쇄",
        exampleJa: "資料を 五十部 印刷した。",
        exampleKo: "자료를 50부 인쇄했다."
      },
      {
        id: "ueki",
        kanji: "植木",
        kana: "うえき",
        meaningKo: "정원수, 분재",
        exampleJa: "庭の 植木に 水を やる。",
        exampleKo: "정원의 정원수에 물을 준다."
      },
      {
        id: "uku",
        kanji: "浮く",
        kana: "うく",
        meaningKo: "떠오르다, 들뜨다",
        exampleJa: "葉っぱが 水に 浮いて いる。",
        exampleKo: "잎이 물에 떠 있다."
      },
      {
        id: "utagai",
        kanji: "疑い",
        kana: "うたがい",
        meaningKo: "의심",
        exampleJa: "彼に 疑いを かけるのは 早い。",
        exampleKo: "그를 의심하기에는 이르다."
      },
      {
        id: "uchuu",
        kanji: "宇宙",
        kana: "うちゅう",
        meaningKo: "우주",
        exampleJa: "宇宙の 神秘に 興味が ある。",
        exampleKo: "우주의 신비에 관심이 있다."
      },
      {
        id: "utsuru",
        kanji: "映る",
        kana: "うつる",
        meaningKo: "비치다",
        exampleJa: "鏡に 自分の 顔が 映る。",
        exampleKo: "거울에 자신의 얼굴이 비친다."
      },
      {
        id: "ude",
        kanji: "腕",
        kana: "うで",
        meaningKo: "팔",
        exampleJa: "腕を 組んで 考え込む。",
        exampleKo: "팔짱을 끼고 깊이 생각한다."
      },
      {
        id: "unsou",
        kanji: "運送",
        kana: "うんそう",
        meaningKo: "운송",
        exampleJa: "運送会社に 荷物を 預ける。",
        exampleKo: "운송회사에 짐을 맡긴다."
      },
      {
        id: "unchin",
        kanji: "運賃",
        kana: "うんちん",
        meaningKo: "운임",
        exampleJa: "電車の 運賃が 値上がりした。",
        exampleKo: "전철 운임이 인상되었다."
      },
      {
        id: "erai",
        kanji: "偉い",
        kana: "えらい",
        meaningKo: "훌륭하다, 대단하다",
        exampleJa: "一人で やり遂げて 偉いね。",
        exampleKo: "혼자서 해내다니 훌륭하구나."
      },
      {
        id: "eru",
        kanji: "得る",
        kana: "える",
        meaningKo: "얻다",
        exampleJa: "経験から 多くを 得る。",
        exampleKo: "경험에서 많은 것을 얻는다."
      },
      {
        id: "enki",
        kanji: "延期",
        kana: "えんき",
        meaningKo: "연기, 미룸",
        exampleJa: "雨で 試合は 延期に なった。",
        exampleKo: "비로 시합은 연기되었다."
      },
      {
        id: "ouen",
        kanji: "応援",
        kana: "おうえん",
        meaningKo: "응원",
        exampleJa: "皆で チームを 応援した。",
        exampleKo: "다 같이 팀을 응원했다."
      },
      {
        id: "outai",
        kanji: "応対",
        kana: "おうたい",
        meaningKo: "응대, 접대",
        exampleJa: "お客様への 応対が 丁寧だ。",
        exampleKo: "고객에 대한 응대가 정중하다."
      },
      {
        id: "oubei",
        kanji: "欧米",
        kana: "おうべい",
        meaningKo: "구미, 유럽과 미국",
        exampleJa: "欧米の 文化を 研究して いる。",
        exampleKo: "유럽과 미국의 문화를 연구하고 있다."
      },
      {
        id: "oohaba",
        kanji: "大幅",
        kana: "おおはば",
        meaningKo: "큰 폭",
        exampleJa: "料金が 大幅に 下がった。",
        exampleKo: "요금이 큰 폭으로 내렸다."
      },
      {
        id: "oginau",
        kanji: "補う",
        kana: "おぎなう",
        meaningKo: "보충하다",
        exampleJa: "野菜で 栄養を 補う。",
        exampleKo: "채소로 영양을 보충한다."
      },
      {
        id: "oku-billion",
        kanji: "~億",
        kana: "~おく",
        meaningKo: "~억",
        exampleJa: "予算は 三億円を 超えた。",
        exampleKo: "예산은 3억 엔을 넘었다."
      },
      {
        id: "oku",
        kanji: "置く",
        kana: "おく",
        meaningKo: "놓다, 두다",
        exampleJa: "鍵を 机の 上に 置く。",
        exampleKo: "열쇠를 책상 위에 둔다."
      },
      {
        id: "okoru",
        kanji: "怒る",
        kana: "おこる",
        meaningKo: "화내다",
        exampleJa: "父は めったに 怒らない。",
        exampleKo: "아버지는 좀처럼 화내지 않는다."
      },
      {
        id: "osanai",
        kanji: "幼い",
        kana: "おさない",
        meaningKo: "어리다, 미숙하다, 유치하다",
        exampleJa: "幼い 妹の 面倒を 見る。",
        exampleKo: "어린 여동생을 돌본다."
      },
      {
        id: "osameru",
        kanji: "納める",
        kana: "おさめる",
        meaningKo: "넣다, 납입하다",
        exampleJa: "税金を 期限内に 納める。",
        exampleKo: "세금을 기한 내에 납입한다."
      },
      {
        id: "odori",
        kanji: "踊り",
        kana: "おどり",
        meaningKo: "춤",
        exampleJa: "夏祭りで 踊りを 楽しむ。",
        exampleKo: "여름 축제에서 춤을 즐긴다."
      },
      {
        id: "otoru",
        kanji: "劣る",
        kana: "おとる",
        meaningKo: "뒤떨어지다",
        exampleJa: "性能が 他社の 製品に 劣る。",
        exampleKo: "성능이 타사 제품에 비해 뒤떨어진다."
      },
      {
        id: "omo",
        kanji: "主",
        kana: "おも",
        meaningKo: "주됨, 주된",
        exampleJa: "主な 原因は 寝不足だ。",
        exampleKo: "주된 원인은 수면 부족이다."
      }
    ]
  },
  {
    id: "kanji-reading-ka",
    title: "한자읽기_か",
    description: "か행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "kaigo",
        kanji: "介護",
        kana: "かいご",
        meaningKo: "간호",
        exampleJa: "祖母の 介護を 続けて いる。",
        exampleKo: "할머니의 간호를 계속하고 있다."
      },
      {
        id: "kaizen",
        kanji: "改善",
        kana: "かいぜん",
        meaningKo: "개선",
        exampleJa: "サービスの 改善に 取り組む。",
        exampleKo: "서비스 개선에 힘쓴다."
      },
      {
        id: "kaidan-talks",
        kanji: "会談",
        kana: "かいだん",
        meaningKo: "회담",
        exampleJa: "両国の 首脳が 会談を 行った。",
        exampleKo: "양국 정상이 회담을 가졌다."
      },
      {
        id: "kaiteki",
        kanji: "快適",
        kana: "かいてき",
        meaningKo: "쾌적함",
        exampleJa: "ホテルの 部屋は 快適だった。",
        exampleKo: "호텔 방은 쾌적했다."
      },
      {
        id: "kaifuku",
        kanji: "回復",
        kana: "かいふく",
        meaningKo: "회복",
        exampleJa: "体力が だんだん 回復してきた。",
        exampleKo: "체력이 점점 회복되어 왔다."
      },
      {
        id: "kakaeru",
        kanji: "抱える",
        kana: "かかえる",
        meaningKo: "떠안다, 책임지다",
        exampleJa: "多くの 問題を 抱えて いる。",
        exampleKo: "많은 문제를 떠안고 있다."
      },
      {
        id: "kakujuu",
        kanji: "拡充",
        kana: "かくじゅう",
        meaningKo: "확충",
        exampleJa: "公共施設の 拡充が 進む。",
        exampleKo: "공공시설의 확충이 진행된다."
      },
      {
        id: "kakusu",
        kanji: "隠す",
        kana: "かくす",
        meaningKo: "감추다, 숨기다",
        exampleJa: "プレゼントを 戸棚に 隠す。",
        exampleKo: "선물을 찬장에 숨긴다."
      },
      {
        id: "kakou",
        kanji: "下降",
        kana: "かこう",
        meaningKo: "하강, 추락",
        exampleJa: "気温が 急に 下降した。",
        exampleKo: "기온이 갑자기 하강했다."
      },
      {
        id: "kakomu",
        kanji: "囲む",
        kana: "かこむ",
        meaningKo: "둘러싸다",
        exampleJa: "家族で 食卓を 囲む。",
        exampleKo: "가족이 식탁을 둘러싼다."
      },
      {
        id: "kasaneru",
        kanji: "重ねる",
        kana: "かさねる",
        meaningKo: "거듭하다, 겹치다",
        exampleJa: "練習を 重ねて 上達した。",
        exampleKo: "연습을 거듭하여 실력이 늘었다."
      },
      {
        id: "kashikoi",
        kanji: "賢い",
        kana: "かしこい",
        meaningKo: "현명하다, 영리하다",
        exampleJa: "賢い 選択を したと 思う。",
        exampleKo: "현명한 선택을 했다고 생각한다."
      },
      {
        id: "katamuku",
        kanji: "傾く",
        kana: "かたむく",
        meaningKo: "기울다, 치우치다",
        exampleJa: "古い 家が 少し 傾いて いる。",
        exampleKo: "오래된 집이 조금 기울어 있다."
      },
      {
        id: "katei",
        kanji: "仮定",
        kana: "かてい",
        meaningKo: "가정",
        exampleJa: "最悪の 場合を 仮定して 考える。",
        exampleKo: "최악의 경우를 가정해서 생각한다."
      },
      {
        id: "kanousei",
        kanji: "可能性",
        kana: "かのうせい",
        meaningKo: "가능성",
        exampleJa: "成功する 可能性は 高い。",
        exampleKo: "성공할 가능성은 높다."
      },
      {
        id: "kamotsu",
        kanji: "貨物",
        kana: "かもつ",
        meaningKo: "화물",
        exampleJa: "貨物を 港まで 運ぶ。",
        exampleKo: "화물을 항구까지 운반한다."
      },
      {
        id: "karai",
        kanji: "辛い",
        kana: "からい",
        meaningKo: "맵다",
        exampleJa: "この カレーは とても 辛い。",
        exampleKo: "이 카레는 매우 맵다."
      },
      {
        id: "kansatsu",
        kanji: "観察",
        kana: "かんさつ",
        meaningKo: "관찰",
        exampleJa: "星空を じっくり 観察する。",
        exampleKo: "별이 빛나는 하늘을 차분히 관찰한다."
      },
      {
        id: "kansou",
        kanji: "乾燥",
        kana: "かんそう",
        meaningKo: "건조",
        exampleJa: "冬は 肌が 乾燥しやすい。",
        exampleKo: "겨울에는 피부가 건조해지기 쉽다."
      },
      {
        id: "kanzume",
        kanji: "缶詰",
        kana: "かんづめ",
        meaningKo: "통조림",
        exampleJa: "非常用に 缶詰を 備える。",
        exampleKo: "비상용으로 통조림을 비축한다."
      },
      {
        id: "ganbou",
        kanji: "願望",
        kana: "がんぼう",
        meaningKo: "바람, 소원",
        exampleJa: "長年の 願望が かなった。",
        exampleKo: "오랜 소원이 이루어졌다."
      },
      {
        id: "kanyuu",
        kanji: "勧誘",
        kana: "かんゆう",
        meaningKo: "권유",
        exampleJa: "サークルへの 勧誘を 受けた。",
        exampleKo: "동아리 권유를 받았다."
      },
      {
        id: "kanryou",
        kanji: "完了",
        kana: "かんりょう",
        meaningKo: "완료",
        exampleJa: "作業が 完了しました。",
        exampleKo: "작업이 완료되었습니다."
      },
      {
        id: "kioku",
        kanji: "記憶",
        kana: "きおく",
        meaningKo: "기억",
        exampleJa: "子供の 頃の 記憶が よみがえる。",
        exampleKo: "어린 시절의 기억이 되살아난다."
      },
      {
        id: "kikaku",
        kanji: "企画",
        kana: "きかく",
        meaningKo: "기획",
        exampleJa: "新しい 商品を 企画する。",
        exampleKo: "새로운 상품을 기획한다."
      },
      {
        id: "kiken",
        kanji: "危険",
        kana: "きけん",
        meaningKo: "위험",
        exampleJa: "この 道は 夜に なると 危険だ。",
        exampleKo: "이 길은 밤이 되면 위험하다."
      },
      {
        id: "kigen",
        kanji: "機嫌",
        kana: "きげん",
        meaningKo: "기분, 심기",
        exampleJa: "今日の 部長は 機嫌が いい。",
        exampleKo: "오늘 부장님은 기분이 좋다."
      },
      {
        id: "kiji",
        kanji: "記事",
        kana: "きじ",
        meaningKo: "기사",
        exampleJa: "新聞で 関連記事を 読んだ。",
        exampleKo: "신문에서 관련 기사를 읽었다."
      },
      {
        id: "kisei",
        kanji: "規制",
        kana: "きせい",
        meaningKo: "규제",
        exampleJa: "輸入の 規制が 強化された。",
        exampleKo: "수입 규제가 강화되었다."
      },
      {
        id: "kisou",
        kanji: "競う",
        kana: "きそう",
        meaningKo: "겨루다, 경쟁하다",
        exampleJa: "選手たちが 実力を 競う。",
        exampleKo: "선수들이 실력을 겨룬다."
      },
      {
        id: "kichou",
        kanji: "貴重",
        kana: "きちょう",
        meaningKo: "귀중함",
        exampleJa: "貴重な 時間を ありがとう。",
        exampleKo: "귀중한 시간 감사합니다."
      },
      {
        id: "kibo",
        kanji: "規模",
        kana: "きぼ",
        meaningKo: "규모",
        exampleJa: "事業の 規模を 拡大する。",
        exampleKo: "사업의 규모를 확대한다."
      },
      {
        id: "kimaru",
        kanji: "決まる",
        kana: "きまる",
        meaningKo: "결정되다, 정해지다",
        exampleJa: "出発の 日が 決まった。",
        exampleKo: "출발일이 정해졌다."
      },
      {
        id: "kyaku",
        kanji: "客",
        kana: "きゃく",
        meaningKo: "손님",
        exampleJa: "店に 客が 大勢 来た。",
        exampleKo: "가게에 손님이 많이 왔다."
      },
      {
        id: "kyuujin",
        kanji: "求人",
        kana: "きゅうじん",
        meaningKo: "구인",
        exampleJa: "求人広告を 見て 応募した。",
        exampleKo: "구인광고를 보고 응모했다."
      },
      {
        id: "kyuusoku",
        kanji: "休息",
        kana: "きゅうそく",
        meaningKo: "휴식",
        exampleJa: "少し 休息を 取りましょう。",
        exampleKo: "잠시 휴식을 취합시다."
      },
      {
        id: "kyoukan",
        kanji: "共感",
        kana: "きょうかん",
        meaningKo: "공감",
        exampleJa: "彼の 意見に 共感した。",
        exampleKo: "그의 의견에 공감했다."
      },
      {
        id: "gyouji",
        kanji: "行事",
        kana: "ぎょうじ",
        meaningKo: "행사",
        exampleJa: "学校の 行事に 参加する。",
        exampleKo: "학교 행사에 참가한다."
      },
      {
        id: "kyouryoku",
        kanji: "協力",
        kana: "きょうりょく",
        meaningKo: "협력",
        exampleJa: "皆さんの 協力に 感謝します。",
        exampleKo: "여러분의 협력에 감사드립니다."
      },
      {
        id: "gyogyou",
        kanji: "漁業",
        kana: "ぎょぎょう",
        meaningKo: "어업",
        exampleJa: "この 町は 漁業が 盛んだ。",
        exampleKo: "이 마을은 어업이 활발하다."
      },
      {
        id: "kyokutan",
        kanji: "極端",
        kana: "きょくたん",
        meaningKo: "극단적임, 아주 지나침",
        exampleJa: "極端な 意見は 避けたい。",
        exampleKo: "극단적인 의견은 피하고 싶다."
      },
      {
        id: "kyohi",
        kanji: "拒否",
        kana: "きょひ",
        meaningKo: "거부",
        exampleJa: "申し出を きっぱり 拒否した。",
        exampleKo: "제안을 단호히 거부했다."
      },
      {
        id: "kiroku",
        kanji: "記録",
        kana: "きろく",
        meaningKo: "기록",
        exampleJa: "新しい 記録を 達成した。",
        exampleKo: "새로운 기록을 달성했다."
      },
      {
        id: "giron",
        kanji: "議論",
        kana: "ぎろん",
        meaningKo: "의논, 논쟁",
        exampleJa: "夜遅くまで 議論を 続けた。",
        exampleKo: "밤늦게까지 의논을 계속했다."
      },
      {
        id: "kuukou",
        kanji: "空港",
        kana: "くうこう",
        meaningKo: "공항",
        exampleJa: "空港まで 友達を 迎えに 行く。",
        exampleKo: "공항까지 친구를 마중 나간다."
      },
      {
        id: "guuzen",
        kanji: "偶然",
        kana: "ぐうぜん",
        meaningKo: "우연히",
        exampleJa: "駅で 偶然 旧友に 会った。",
        exampleKo: "역에서 우연히 옛 친구를 만났다."
      },
      {
        id: "keishou",
        kanji: "軽傷",
        kana: "けいしょう",
        meaningKo: "경상",
        exampleJa: "事故で 軽傷を 負った。",
        exampleKo: "사고로 경상을 입었다."
      },
      {
        id: "gejun",
        kanji: "下旬",
        kana: "げじゅん",
        meaningKo: "하순",
        exampleJa: "今月の 下旬に 出張が ある。",
        exampleKo: "이번 달 하순에 출장이 있다."
      },
      {
        id: "genshou",
        kanji: "現象",
        kana: "げんしょう",
        meaningKo: "현상",
        exampleJa: "奇妙な 現象が 起きた。",
        exampleKo: "기묘한 현상이 일어났다."
      },
      {
        id: "kutsu",
        kanji: "靴",
        kana: "くつ",
        meaningKo: "신발, 구두",
        exampleJa: "新しい 靴を 買った。",
        exampleKo: "새 신발을 샀다."
      },
      {
        id: "kumo",
        kanji: "雲",
        kana: "くも",
        meaningKo: "구름",
        exampleJa: "空に 白い 雲が 浮かんで いる。",
        exampleKo: "하늘에 흰 구름이 떠 있다."
      },
      {
        id: "kuyashii",
        kanji: "悔しい",
        kana: "くやしい",
        meaningKo: "분하다",
        exampleJa: "試合に 負けて 悔しい。",
        exampleKo: "시합에 져서 분하다."
      },
      {
        id: "kurasu",
        kanji: "暮らす",
        kana: "くらす",
        meaningKo: "살다, 생활하다",
        exampleJa: "田舎で のんびり 暮らしたい。",
        exampleKo: "시골에서 느긋하게 살고 싶다."
      },
      {
        id: "keizoku",
        kanji: "継続",
        kana: "けいぞく",
        meaningKo: "계속",
        exampleJa: "毎日の 練習を 継続する。",
        exampleKo: "매일의 연습을 계속한다."
      },
      {
        id: "geinou",
        kanji: "芸能",
        kana: "げいのう",
        meaningKo: "예능, 연예",
        exampleJa: "芸能界の 話題を 追う。",
        exampleKo: "연예계의 화제를 쫓는다."
      },
      {
        id: "keibi",
        kanji: "警備",
        kana: "けいび",
        meaningKo: "경비",
        exampleJa: "会場の 警備が 厳しい。",
        exampleKo: "행사장 경비가 삼엄하다."
      },
      {
        id: "keshiki",
        kanji: "景色",
        kana: "けしき",
        meaningKo: "경치",
        exampleJa: "山頂からの 景色は すばらしい。",
        exampleKo: "산정에서의 경치는 훌륭하다."
      },
      {
        id: "kekka",
        kanji: "結果",
        kana: "けっか",
        meaningKo: "결과",
        exampleJa: "試験の 結果が 発表された。",
        exampleKo: "시험 결과가 발표되었다."
      },
      {
        id: "kewashii",
        kanji: "険しい",
        kana: "けわしい",
        meaningKo: "험악하다, 험상굳다",
        exampleJa: "険しい 山道を 登った。",
        exampleKo: "험한 산길을 올랐다."
      },
      {
        id: "genin",
        kanji: "原因",
        kana: "げんいん",
        meaningKo: "원인",
        exampleJa: "事故の 原因を 調査する。",
        exampleKo: "사고의 원인을 조사한다."
      },
      {
        id: "genjuu",
        kanji: "厳重",
        kana: "げんじゅう",
        meaningKo: "엄중함",
        exampleJa: "厳重な 注意が 必要だ。",
        exampleKo: "엄중한 주의가 필요하다."
      },
      {
        id: "kensetsu",
        kanji: "建設",
        kana: "けんせつ",
        meaningKo: "건설",
        exampleJa: "新しい 橋が 建設中だ。",
        exampleKo: "새 다리가 건설 중이다."
      },
      {
        id: "kouen-lecture",
        kanji: "講演",
        kana: "こうえん",
        meaningKo: "강연",
        exampleJa: "教授の 講演を 聞きに 行く。",
        exampleKo: "교수의 강연을 들으러 간다."
      },
      {
        id: "kougai-suburbs",
        kanji: "郊外",
        kana: "こうがい",
        meaningKo: "교외",
        exampleJa: "郊外の 静かな 家に 引っ越した。",
        exampleKo: "교외의 조용한 집으로 이사했다."
      },
      {
        id: "kougai-pollution",
        kanji: "公害",
        kana: "こうがい",
        meaningKo: "공해",
        exampleJa: "工場の 公害が 問題に なる。",
        exampleKo: "공장의 공해가 문제가 된다."
      },
      {
        id: "kousaten",
        kanji: "交差点",
        kana: "こうさてん",
        meaningKo: "교차로",
        exampleJa: "次の 交差点を 右に 曲がる。",
        exampleKo: "다음 교차로에서 우회전한다."
      },
      {
        id: "kousou",
        kanji: "高層",
        kana: "こうそう",
        meaningKo: "고층",
        exampleJa: "駅前に 高層ビルが 建つ。",
        exampleKo: "역 앞에 고층 빌딩이 들어선다."
      },
      {
        id: "koe",
        kanji: "声",
        kana: "こえ",
        meaningKo: "(목)소리",
        exampleJa: "大きな 声で 話して ください。",
        exampleKo: "큰 목소리로 말해 주세요."
      },
      {
        id: "koeru",
        kanji: "越える",
        kana: "こえる",
        meaningKo: "넘다, 초월하다",
        exampleJa: "山を 越えて 隣町に 行く。",
        exampleKo: "산을 넘어 옆 마을에 간다."
      },
      {
        id: "koori",
        kanji: "氷",
        kana: "こおり",
        meaningKo: "얼음",
        exampleJa: "コップに 氷を 入れる。",
        exampleKo: "컵에 얼음을 넣는다."
      },
      {
        id: "kokyou",
        kanji: "故郷",
        kana: "こきょう",
        meaningKo: "고향",
        exampleJa: "久しぶりに 故郷へ 帰る。",
        exampleKo: "오랜만에 고향에 돌아간다."
      },
      {
        id: "kozutsumi",
        kanji: "小包",
        kana: "こづつみ",
        meaningKo: "소포",
        exampleJa: "実家から 小包が 届いた。",
        exampleKo: "본가에서 소포가 도착했다."
      },
      {
        id: "kotonaru",
        kanji: "異なる",
        kana: "ことなる",
        meaningKo: "다르다",
        exampleJa: "二人の 意見は 大きく 異なる。",
        exampleKo: "두 사람의 의견은 크게 다르다."
      },
      {
        id: "kotowaru",
        kanji: "断る",
        kana: "ことわる",
        meaningKo: "거절하다",
        exampleJa: "誘いを 丁寧に 断った。",
        exampleKo: "초대를 정중하게 거절했다."
      },
      {
        id: "kowai",
        kanji: "怖い",
        kana: "こわい",
        meaningKo: "무섭다",
        exampleJa: "夜の 道は 一人では 怖い。",
        exampleKo: "밤길은 혼자서는 무섭다."
      },
      {
        id: "konran",
        kanji: "混乱",
        kana: "こんらん",
        meaningKo: "혼란",
        exampleJa: "急な 変更で 現場が 混乱した。",
        exampleKo: "급한 변경으로 현장이 혼란해졌다."
      }
    ]
  },
  {
    id: "kanji-reading-sa",
    title: "한자읽기_さ",
    description: "さ행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "saido",
        kanji: "再度",
        kana: "さいど",
        meaningKo: "재차, 다시",
        exampleJa: "再度 確認して ください。",
        exampleKo: "다시 한번 확인해 주세요."
      },
      {
        id: "saiban",
        kanji: "裁判",
        kana: "さいばん",
        meaningKo: "재판",
        exampleJa: "裁判が 来月 始まる。",
        exampleKo: "재판이 다음 달에 시작된다."
      },
      {
        id: "sairiyou",
        kanji: "再利用",
        kana: "さいりよう",
        meaningKo: "재사용",
        exampleJa: "資源の 再利用を 進める。",
        exampleKo: "자원의 재사용을 추진한다."
      },
      {
        id: "saiwai",
        kanji: "幸い",
        kana: "さいわい",
        meaningKo: "다행임",
        exampleJa: "幸い、けが人は いなかった。",
        exampleKo: "다행히 다친 사람은 없었다."
      },
      {
        id: "sagyou",
        kanji: "作業",
        kana: "さぎょう",
        meaningKo: "작업",
        exampleJa: "朝から ずっと 作業を 続けた。",
        exampleKo: "아침부터 계속 작업을 했다."
      },
      {
        id: "sakujo",
        kanji: "削除",
        kana: "さくじょ",
        meaningKo: "삭제",
        exampleJa: "不要な ファイルを 削除する。",
        exampleKo: "불필요한 파일을 삭제한다."
      },
      {
        id: "satsuei",
        kanji: "撮影",
        kana: "さつえい",
        meaningKo: "촬영",
        exampleJa: "公園で 写真の 撮影を した。",
        exampleKo: "공원에서 사진 촬영을 했다."
      },
      {
        id: "samui",
        kanji: "寒い",
        kana: "さむい",
        meaningKo: "춥다",
        exampleJa: "今朝は とても 寒い。",
        exampleKo: "오늘 아침은 매우 춥다."
      },
      {
        id: "sankou",
        kanji: "参考",
        kana: "さんこう",
        meaningKo: "참고",
        exampleJa: "この 本を 参考に した。",
        exampleKo: "이 책을 참고로 했다."
      },
      {
        id: "sanpi",
        kanji: "賛否",
        kana: "さんぴ",
        meaningKo: "찬반, 가부",
        exampleJa: "計画の 賛否を 問う。",
        exampleKo: "계획의 찬반을 묻는다."
      },
      {
        id: "shikyuu",
        kanji: "至急",
        kana: "しきゅう",
        meaningKo: "시급, 급히",
        exampleJa: "至急 連絡を ください。",
        exampleKo: "급히 연락 주세요."
      },
      {
        id: "shigeki",
        kanji: "刺激",
        kana: "しげき",
        meaningKo: "자극",
        exampleJa: "新しい 経験が いい 刺激に なる。",
        exampleKo: "새로운 경험이 좋은 자극이 된다."
      },
      {
        id: "jiken",
        kanji: "事件",
        kana: "じけん",
        meaningKo: "사건",
        exampleJa: "近所で 事件が 起こった。",
        exampleKo: "근처에서 사건이 일어났다."
      },
      {
        id: "shiji",
        kanji: "指示",
        kana: "しじ",
        meaningKo: "지시",
        exampleJa: "上司の 指示に 従う。",
        exampleKo: "상사의 지시에 따른다."
      },
      {
        id: "jishin",
        kanji: "地震",
        kana: "じしん",
        meaningKo: "지진",
        exampleJa: "昨夜、大きな 地震が あった。",
        exampleKo: "어젯밤 큰 지진이 있었다."
      },
      {
        id: "shisei",
        kanji: "姿勢",
        kana: "しせい",
        meaningKo: "자세",
        exampleJa: "正しい 姿勢で 座る。",
        exampleKo: "바른 자세로 앉는다."
      },
      {
        id: "shiboru",
        kanji: "絞る",
        kana: "しぼる",
        meaningKo: "조이다, (쥐어)짜다",
        exampleJa: "ぞうきんを 絞って 床を 拭く。",
        exampleKo: "걸레를 짜서 바닥을 닦는다."
      },
      {
        id: "shima",
        kanji: "島",
        kana: "しま",
        meaningKo: "섬",
        exampleJa: "小さな 島で 暮らしたい。",
        exampleKo: "작은 섬에서 살고 싶다."
      },
      {
        id: "shimeru-occupy",
        kanji: "占める",
        kana: "しめる",
        meaningKo: "(비율·자리) 차지하다",
        exampleJa: "売上の 半分を 海外が 占める。",
        exampleKo: "매출의 절반을 해외가 차지한다."
      },
      {
        id: "shimeru-damp",
        kanji: "湿る",
        kana: "しめる",
        meaningKo: "축축해지다, 습기 차다",
        exampleJa: "雨で 洗濯物が 湿った。",
        exampleKo: "비로 빨래가 축축해졌다."
      },
      {
        id: "jimoto",
        kanji: "地元",
        kana: "じもと",
        meaningKo: "그 지역, 그 고장, 연고지",
        exampleJa: "地元の 友人と 久しぶりに 会う。",
        exampleKo: "고향 친구와 오랜만에 만난다."
      },
      {
        id: "juunanni",
        kanji: "柔軟に",
        kana: "じゅうなんに",
        meaningKo: "유연하게",
        exampleJa: "状況に 柔軟に 対応する。",
        exampleKo: "상황에 유연하게 대응한다."
      },
      {
        id: "shukuhaku",
        kanji: "宿泊",
        kana: "しゅくはく",
        meaningKo: "숙박",
        exampleJa: "ホテルに 三泊 宿泊する。",
        exampleKo: "호텔에 3박 숙박한다."
      },
      {
        id: "shujutsu",
        kanji: "手術",
        kana: "しゅじゅつ",
        meaningKo: "수술",
        exampleJa: "手術は 無事に 終わった。",
        exampleKo: "수술은 무사히 끝났다."
      },
      {
        id: "shuppan",
        kanji: "出版",
        kana: "しゅっぱん",
        meaningKo: "출판",
        exampleJa: "彼女の 本が 来月 出版される。",
        exampleKo: "그녀의 책이 다음 달에 출판된다."
      },
      {
        id: "shunou",
        kanji: "首脳",
        kana: "しゅのう",
        meaningKo: "수뇌, 정상",
        exampleJa: "各国の 首脳が 集まる。",
        exampleKo: "각국의 정상이 모인다."
      },
      {
        id: "jumyou",
        kanji: "寿命",
        kana: "じゅみょう",
        meaningKo: "수명",
        exampleJa: "平均寿命が 延びて いる。",
        exampleKo: "평균 수명이 늘어나고 있다."
      },
      {
        id: "shuyou",
        kanji: "主要",
        kana: "しゅよう",
        meaningKo: "주요",
        exampleJa: "会議で 主要な 議題を 話す。",
        exampleKo: "회의에서 주요한 의제를 이야기한다."
      },
      {
        id: "junchou",
        kanji: "順調",
        kana: "じゅんちょう",
        meaningKo: "순조로움",
        exampleJa: "工事は 順調に 進んで いる。",
        exampleKo: "공사는 순조롭게 진행되고 있다."
      },
      {
        id: "shou-prize",
        kanji: "~賞",
        kana: "~しょう",
        meaningKo: "~상",
        exampleJa: "彼は 文学賞を 受賞した。",
        exampleKo: "그는 문학상을 수상했다."
      },
      {
        id: "joukyou",
        kanji: "状況",
        kana: "じょうきょう",
        meaningKo: "상황",
        exampleJa: "現在の 状況を 報告する。",
        exampleKo: "현재의 상황을 보고한다."
      },
      {
        id: "joukei",
        kanji: "情景",
        kana: "じょうけい",
        meaningKo: "정경, 광경",
        exampleJa: "美しい 情景が 目に 浮かぶ。",
        exampleKo: "아름다운 정경이 눈에 떠오른다."
      },
      {
        id: "shoujiki",
        kanji: "正直",
        kana: "しょうじき",
        meaningKo: "정직함, 솔직함",
        exampleJa: "正直に 答えて ほしい。",
        exampleKo: "정직하게 답해 줬으면 한다."
      },
      {
        id: "shouten",
        kanji: "焦点",
        kana: "しょうてん",
        meaningKo: "초점",
        exampleJa: "議論の 焦点を 整理する。",
        exampleKo: "논의의 초점을 정리한다."
      },
      {
        id: "shouhin",
        kanji: "商品",
        kana: "しょうひん",
        meaningKo: "상품",
        exampleJa: "新しい 商品が 入荷した。",
        exampleKo: "새 상품이 입고되었다."
      },
      {
        id: "jouhou",
        kanji: "情報",
        kana: "じょうほう",
        meaningKo: "정보",
        exampleJa: "最新の 情報を 集める。",
        exampleKo: "최신 정보를 모은다."
      },
      {
        id: "shouryaku",
        kanji: "省略",
        kana: "しょうりゃく",
        meaningKo: "생략",
        exampleJa: "詳しい 説明は 省略する。",
        exampleKo: "자세한 설명은 생략한다."
      },
      {
        id: "shokuba",
        kanji: "職場",
        kana: "しょくば",
        meaningKo: "직장",
        exampleJa: "新しい 職場に 慣れた。",
        exampleKo: "새 직장에 익숙해졌다."
      },
      {
        id: "shokoku",
        kanji: "諸国",
        kana: "しょこく",
        meaningKo: "여러 나라",
        exampleJa: "アジア 諸国を 訪問する。",
        exampleKo: "아시아 여러 나라를 방문한다."
      },
      {
        id: "shori",
        kanji: "処理",
        kana: "しょり",
        meaningKo: "처리",
        exampleJa: "申請書を 順番に 処理する。",
        exampleKo: "신청서를 순서대로 처리한다."
      },
      {
        id: "shiryou",
        kanji: "資料",
        kana: "しりょう",
        meaningKo: "자료",
        exampleJa: "会議の 資料を 印刷した。",
        exampleKo: "회의 자료를 인쇄했다."
      },
      {
        id: "shingakuritsu",
        kanji: "進学率",
        kana: "しんがくりつ",
        meaningKo: "진학률",
        exampleJa: "今年の 進学率が 上昇した。",
        exampleKo: "올해의 진학률이 상승했다."
      },
      {
        id: "shinzou",
        kanji: "心臓",
        kana: "しんぞう",
        meaningKo: "심장",
        exampleJa: "緊張で 心臓が ドキドキする。",
        exampleKo: "긴장으로 심장이 두근거린다."
      },
      {
        id: "shinyou",
        kanji: "信用",
        kana: "しんよう",
        meaningKo: "신용",
        exampleJa: "彼の 言葉は 信用できる。",
        exampleKo: "그의 말은 신용할 수 있다."
      },
      {
        id: "shinrai",
        kanji: "信頼",
        kana: "しんらい",
        meaningKo: "신뢰",
        exampleJa: "上司の 信頼を 得る。",
        exampleKo: "상사의 신뢰를 얻는다."
      },
      {
        id: "jinrui",
        kanji: "人類",
        kana: "じんるい",
        meaningKo: "인류",
        exampleJa: "人類の 歴史を 学ぶ。",
        exampleKo: "인류의 역사를 배운다."
      },
      {
        id: "suichoku",
        kanji: "垂直",
        kana: "すいちょく",
        meaningKo: "수직",
        exampleJa: "壁に 垂直に 線を 引く。",
        exampleKo: "벽에 수직으로 선을 긋는다."
      },
      {
        id: "suunen",
        kanji: "数年",
        kana: "すうねん",
        meaningKo: "여러 해, 수년",
        exampleJa: "数年 ぶりに 故郷を 訪れた。",
        exampleKo: "수년 만에 고향을 찾았다."
      },
      {
        id: "sugureru",
        kanji: "優れる",
        kana: "すぐれる",
        meaningKo: "뛰어나다, 우수하다",
        exampleJa: "彼は 語学に 優れて いる。",
        exampleKo: "그는 어학에 뛰어나다."
      },
      {
        id: "sumi",
        kanji: "隅",
        kana: "すみ",
        meaningKo: "구석, 모퉁이",
        exampleJa: "部屋の 隅に 本棚が ある。",
        exampleKo: "방 구석에 책장이 있다."
      },
      {
        id: "seien",
        kanji: "声援",
        kana: "せいえん",
        meaningKo: "성원",
        exampleJa: "観客の 声援に 応える。",
        exampleKo: "관객의 성원에 보답한다."
      },
      {
        id: "seikaku-personality",
        kanji: "性格",
        kana: "せいかく",
        meaningKo: "성격",
        exampleJa: "彼は 明るい 性格だ。",
        exampleKo: "그는 밝은 성격이다."
      },
      {
        id: "seiketsu",
        kanji: "清潔",
        kana: "せいけつ",
        meaningKo: "청결함",
        exampleJa: "台所を 清潔に 保つ。",
        exampleKo: "부엌을 청결하게 유지한다."
      },
      {
        id: "seikou",
        kanji: "成功",
        kana: "せいこう",
        meaningKo: "성공",
        exampleJa: "実験は 大いに 成功した。",
        exampleKo: "실험은 크게 성공했다."
      },
      {
        id: "seiji",
        kanji: "政治",
        kana: "せいじ",
        meaningKo: "정치",
        exampleJa: "政治に 関心を 持つ。",
        exampleKo: "정치에 관심을 갖는다."
      },
      {
        id: "seichou",
        kanji: "成長",
        kana: "せいちょう",
        meaningKo: "성장",
        exampleJa: "子どもの 成長が 早い。",
        exampleKo: "아이의 성장이 빠르다."
      },
      {
        id: "seitou",
        kanji: "政党",
        kana: "せいとう",
        meaningKo: "정당",
        exampleJa: "新しい 政党が 結成された。",
        exampleKo: "새 정당이 결성되었다."
      },
      {
        id: "sekinin",
        kanji: "責任",
        kana: "せきにん",
        meaningKo: "책임",
        exampleJa: "自分の 行動に 責任を 持つ。",
        exampleKo: "자신의 행동에 책임을 진다."
      },
      {
        id: "setsubi",
        kanji: "設備",
        kana: "せつび",
        meaningKo: "설비",
        exampleJa: "この ジムは 設備が 整って いる。",
        exampleKo: "이 헬스장은 설비가 잘 갖추어져 있다."
      },
      {
        id: "sensou",
        kanji: "戦争",
        kana: "せんそう",
        meaningKo: "전쟁",
        exampleJa: "戦争の 歴史を 学ぶ。",
        exampleKo: "전쟁의 역사를 배운다."
      },
      {
        id: "sentaku",
        kanji: "選択",
        kana: "せんたく",
        meaningKo: "선택",
        exampleJa: "難しい 選択を 迫られた。",
        exampleKo: "어려운 선택을 강요받았다."
      },
      {
        id: "zenpan",
        kanji: "全般",
        kana: "ぜんぱん",
        meaningKo: "전반, 전체",
        exampleJa: "全般的に レベルが 高い。",
        exampleKo: "전반적으로 수준이 높다."
      },
      {
        id: "zenryouda",
        kanji: "善良だ",
        kana: "ぜんりょうだ",
        meaningKo: "선량하다, 어질다",
        exampleJa: "彼女は 善良な 人だ。",
        exampleKo: "그녀는 선량한 사람이다."
      },
      {
        id: "sougaku",
        kanji: "総額",
        kana: "そうがく",
        meaningKo: "총액",
        exampleJa: "費用の 総額を 計算する。",
        exampleKo: "비용의 총액을 계산한다."
      },
      {
        id: "sougo",
        kanji: "相互",
        kana: "そうご",
        meaningKo: "상호, 서로",
        exampleJa: "相互の 理解が 大切だ。",
        exampleKo: "상호의 이해가 중요하다."
      },
      {
        id: "sousa",
        kanji: "操作",
        kana: "そうさ",
        meaningKo: "조작",
        exampleJa: "機械の 操作は 簡単だ。",
        exampleKo: "기계의 조작은 간단하다."
      },
      {
        id: "souzou",
        kanji: "想像",
        kana: "そうぞう",
        meaningKo: "상상",
        exampleJa: "未来の 街を 想像する。",
        exampleKo: "미래의 도시를 상상한다."
      },
      {
        id: "souchi",
        kanji: "装置",
        kana: "そうち",
        meaningKo: "장치",
        exampleJa: "安全装置が 作動した。",
        exampleKo: "안전장치가 작동했다."
      },
      {
        id: "socchoku",
        kanji: "率直",
        kana: "そっちょく",
        meaningKo: "솔직함",
        exampleJa: "率直な 意見を 聞かせて ください。",
        exampleKo: "솔직한 의견을 들려주세요."
      },
      {
        id: "sonaeru",
        kanji: "備える",
        kana: "そなえる",
        meaningKo: "갖추다, 대비하다",
        exampleJa: "災害に 備えて 水を 用意する。",
        exampleKo: "재해에 대비하여 물을 준비한다."
      },
      {
        id: "songai",
        kanji: "損害",
        kana: "そんがい",
        meaningKo: "손해",
        exampleJa: "台風で 大きな 損害が 出た。",
        exampleKo: "태풍으로 큰 손해가 났다."
      },
      {
        id: "sonchou",
        kanji: "尊重",
        kana: "そんちょう",
        meaningKo: "존중",
        exampleJa: "相手の 意見を 尊重する。",
        exampleKo: "상대의 의견을 존중한다."
      },
      {
        id: "sontoku",
        kanji: "損得",
        kana: "そんとく",
        meaningKo: "손익, 손해와 이득",
        exampleJa: "損得を 考えずに 行動した。",
        exampleKo: "손익을 따지지 않고 행동했다."
      }
    ]
  },
  {
    id: "kanji-reading-ta",
    title: "한자읽기_た",
    description: "た행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "taiin",
        kanji: "退院",
        kana: "たいいん",
        meaningKo: "퇴원",
        exampleJa: "祖父は 来週 退院する。",
        exampleKo: "할아버지는 다음 주에 퇴원한다."
      },
      {
        id: "daijin",
        kanji: "大臣",
        kana: "だいじん",
        meaningKo: "대신, 장관",
        exampleJa: "新しい 大臣が 任命された。",
        exampleKo: "새 장관이 임명되었다."
      },
      {
        id: "daihyou",
        kanji: "代表",
        kana: "だいひょう",
        meaningKo: "대표",
        exampleJa: "会社の 代表として 出席する。",
        exampleKo: "회사 대표로서 출석한다."
      },
      {
        id: "taosu",
        kanji: "倒す",
        kana: "たおす",
        meaningKo: "쓰러뜨리다, 무너뜨리다",
        exampleJa: "強風が 木を 倒した。",
        exampleKo: "강풍이 나무를 쓰러뜨렸다."
      },
      {
        id: "tanin",
        kanji: "他人",
        kana: "たにん",
        meaningKo: "타인",
        exampleJa: "他人の 意見に 耳を 傾ける。",
        exampleKo: "타인의 의견에 귀를 기울인다."
      },
      {
        id: "tanjun",
        kanji: "単純",
        kana: "たんじゅん",
        meaningKo: "단순함",
        exampleJa: "単純な ミスを 繰り返す。",
        exampleKo: "단순한 실수를 반복한다."
      },
      {
        id: "tantousha",
        kanji: "担当者",
        kana: "たんとうしゃ",
        meaningKo: "담당자",
        exampleJa: "担当者に 直接 連絡する。",
        exampleKo: "담당자에게 직접 연락한다."
      },
      {
        id: "chie",
        kanji: "知恵",
        kana: "ちえ",
        meaningKo: "지혜",
        exampleJa: "皆で 知恵を 出し合う。",
        exampleKo: "다 함께 지혜를 모은다."
      },
      {
        id: "chikyuu",
        kanji: "地球",
        kana: "ちきゅう",
        meaningKo: "지구",
        exampleJa: "地球の 環境を 守る。",
        exampleKo: "지구의 환경을 지킨다."
      },
      {
        id: "chikoku",
        kanji: "遅刻",
        kana: "ちこく",
        meaningKo: "지각",
        exampleJa: "電車が 遅れて 遅刻した。",
        exampleKo: "전철이 늦어서 지각했다."
      },
      {
        id: "chishiki",
        kanji: "知識",
        kana: "ちしき",
        meaningKo: "지식",
        exampleJa: "幅広い 知識を 身に つける。",
        exampleKo: "폭넓은 지식을 익힌다."
      },
      {
        id: "chuusha",
        kanji: "駐車",
        kana: "ちゅうしゃ",
        meaningKo: "주차",
        exampleJa: "ここに 駐車しては いけません。",
        exampleKo: "여기에 주차해서는 안 됩니다."
      },
      {
        id: "chuushouteki",
        kanji: "抽象的",
        kana: "ちゅうしょうてき",
        meaningKo: "추상적",
        exampleJa: "抽象的な 話で 分かりにくい。",
        exampleKo: "추상적인 이야기라 이해하기 어렵다."
      },
      {
        id: "chuusen",
        kanji: "抽選",
        kana: "ちゅうせん",
        meaningKo: "추첨",
        exampleJa: "当選者は 抽選で 決まる。",
        exampleKo: "당첨자는 추첨으로 정해진다."
      },
      {
        id: "chou-trillion",
        kanji: "~兆",
        kana: "~ちょう",
        meaningKo: "~조",
        exampleJa: "国の 借金は 数兆円に のぼる。",
        exampleKo: "나라의 빚은 수조 엔에 이른다."
      },
      {
        id: "chousa",
        kanji: "調査",
        kana: "ちょうさ",
        meaningKo: "조사",
        exampleJa: "市場調査の 結果を まとめる。",
        exampleKo: "시장조사 결과를 정리한다."
      },
      {
        id: "chousetsu",
        kanji: "調節",
        kana: "ちょうせつ",
        meaningKo: "조절",
        exampleJa: "温度を 細かく 調節する。",
        exampleKo: "온도를 세밀하게 조절한다."
      },
      {
        id: "chosha",
        kanji: "著者",
        kana: "ちょしゃ",
        meaningKo: "저자",
        exampleJa: "この 本の 著者と 会いたい。",
        exampleKo: "이 책의 저자와 만나고 싶다."
      },
      {
        id: "chozou",
        kanji: "貯蔵",
        kana: "ちょぞう",
        meaningKo: "저장",
        exampleJa: "倉庫に 食料を 貯蔵する。",
        exampleKo: "창고에 식량을 저장한다."
      },
      {
        id: "chiryou",
        kanji: "治療",
        kana: "ちりょう",
        meaningKo: "치료",
        exampleJa: "毎日 治療を 受けて いる。",
        exampleKo: "매일 치료를 받고 있다."
      },
      {
        id: "tsuukou",
        kanji: "通行",
        kana: "つうこう",
        meaningKo: "통행",
        exampleJa: "この 道路は 通行止めです。",
        exampleKo: "이 도로는 통행 금지입니다."
      },
      {
        id: "tsugitsugi-to",
        kanji: "次々と",
        kana: "つぎつぎと",
        meaningKo: "잇달아",
        exampleJa: "観客が 次々と 入場した。",
        exampleKo: "관객이 잇달아 입장했다."
      },
      {
        id: "tsukue",
        kanji: "机",
        kana: "つくえ",
        meaningKo: "책상",
        exampleJa: "机の 上を 整理する。",
        exampleKo: "책상 위를 정리한다."
      },
      {
        id: "tsutaeru",
        kanji: "伝える",
        kana: "つたえる",
        meaningKo: "전하다",
        exampleJa: "彼に 私の 言葉を 伝えて ほしい。",
        exampleKo: "그에게 내 말을 전해 줬으면 한다."
      },
      {
        id: "tsutomeru",
        kanji: "務める",
        kana: "つとめる",
        meaningKo: "역할을 맡다",
        exampleJa: "司会を 務める ことに なった。",
        exampleKo: "사회를 맡게 되었다."
      },
      {
        id: "tsumu",
        kanji: "積む",
        kana: "つむ",
        meaningKo: "(짐·경력) 쌓다, 싣다",
        exampleJa: "トラックに 荷物を 積む。",
        exampleKo: "트럭에 짐을 싣는다."
      },
      {
        id: "tsuyobi",
        kanji: "強火",
        kana: "つよび",
        meaningKo: "센 불",
        exampleJa: "強火で 一気に 炒める。",
        exampleKo: "센 불로 단숨에 볶는다."
      },
      {
        id: "tekisetsu",
        kanji: "適切",
        kana: "てきせつ",
        meaningKo: "적절함",
        exampleJa: "適切な 言葉を 選ぶ。",
        exampleKo: "적절한 말을 고른다."
      },
      {
        id: "tekkyou",
        kanji: "鉄橋",
        kana: "てっきょう",
        meaningKo: "철교",
        exampleJa: "列車が 鉄橋を 渡る。",
        exampleKo: "열차가 철교를 건넌다."
      },
      {
        id: "tenkai",
        kanji: "展開",
        kana: "てんかい",
        meaningKo: "전개",
        exampleJa: "話の 展開が 面白い。",
        exampleKo: "이야기의 전개가 재미있다."
      },
      {
        id: "toubou",
        kanji: "逃亡",
        kana: "とうぼう",
        meaningKo: "도망",
        exampleJa: "犯人が 海外へ 逃亡した。",
        exampleKo: "범인이 해외로 도망갔다."
      },
      {
        id: "tozan",
        kanji: "登山",
        kana: "とざん",
        meaningKo: "등산",
        exampleJa: "週末に 登山に 出かける。",
        exampleKo: "주말에 등산하러 간다."
      },
      {
        id: "totan-ni",
        kanji: "途端に",
        kana: "とたんに",
        meaningKo: "바로 그 순간",
        exampleJa: "ドアを 開けた 途端に 猫が 出てきた。",
        exampleKo: "문을 연 순간 고양이가 나왔다."
      },
      {
        id: "tochuu",
        kanji: "途中",
        kana: "とちゅう",
        meaningKo: "도중",
        exampleJa: "学校へ 行く 途中で 雨が 降った。",
        exampleKo: "학교에 가는 도중에 비가 내렸다."
      },
      {
        id: "totsuzen",
        kanji: "突然",
        kana: "とつぜん",
        meaningKo: "돌연, 갑자기",
        exampleJa: "突然 電気が 消えた。",
        exampleKo: "갑자기 전기가 꺼졌다."
      },
      {
        id: "todoku",
        kanji: "届く",
        kana: "とどく",
        meaningKo: "도착하다, 이르다",
        exampleJa: "注文した 本が 届いた。",
        exampleKo: "주문한 책이 도착했다."
      },
      {
        id: "tonari",
        kanji: "隣",
        kana: "となり",
        meaningKo: "옆",
        exampleJa: "隣の 席に 座って ください。",
        exampleKo: "옆자리에 앉아 주세요."
      },
      {
        id: "toboshii",
        kanji: "乏しい",
        kana: "とぼしい",
        meaningKo: "(경험·물자) 부족하다, 모자라다",
        exampleJa: "経験が 乏しいので 不安だ。",
        exampleKo: "경험이 부족해서 불안하다."
      },
      {
        id: "tomonau",
        kanji: "伴う",
        kana: "ともなう",
        meaningKo: "동반하다, 따르다",
        exampleJa: "成長には 痛みが 伴う。",
        exampleKo: "성장에는 아픔이 따른다."
      },
      {
        id: "doryoku",
        kanji: "努力",
        kana: "どりょく",
        meaningKo: "노력",
        exampleJa: "長年の 努力が 実を 結んだ。",
        exampleKo: "오랜 노력이 결실을 맺었다."
      },
      {
        id: "doro",
        kanji: "泥",
        kana: "どろ",
        meaningKo: "진흙",
        exampleJa: "靴に 泥が ついた。",
        exampleKo: "신발에 진흙이 묻었다."
      }
    ]
  },
  {
    id: "kanji-reading-na",
    title: "한자읽기_な",
    description: "な행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "naiyou",
        kanji: "内容",
        kana: "ないよう",
        meaningKo: "내용",
        exampleJa: "会議の 内容を まとめる。",
        exampleKo: "회의 내용을 정리한다."
      },
      {
        id: "nakayoku",
        kanji: "仲良く",
        kana: "なかよく",
        meaningKo: "사이좋게",
        exampleJa: "兄弟は 仲良く 遊んで いる。",
        exampleKo: "형제는 사이좋게 놀고 있다."
      },
      {
        id: "nagoyaka",
        kanji: "和やか",
        kana: "なごやか",
        meaningKo: "온화함",
        exampleJa: "和やかな 雰囲気で 話し合った。",
        exampleKo: "온화한 분위기로 이야기를 나눴다."
      },
      {
        id: "nayamu",
        kanji: "悩む",
        kana: "なやむ",
        meaningKo: "고민하다",
        exampleJa: "進路に ついて 悩んで いる。",
        exampleKo: "진로에 대해 고민하고 있다."
      },
      {
        id: "nigiru",
        kanji: "握る",
        kana: "にぎる",
        meaningKo: "쥐다, 잡다",
        exampleJa: "手を しっかり 握る。",
        exampleKo: "손을 꽉 잡는다."
      },
      {
        id: "nikui",
        kanji: "憎い",
        kana: "にくい",
        meaningKo: "밉다",
        exampleJa: "嘘を つく 人が 憎い。",
        exampleKo: "거짓말하는 사람이 밉다."
      },
      {
        id: "nikumu",
        kanji: "憎む",
        kana: "にくむ",
        meaningKo: "미워하다, 증오하다",
        exampleJa: "戦争を 心から 憎む。",
        exampleKo: "전쟁을 진심으로 미워한다."
      },
      {
        id: "nikka",
        kanji: "日課",
        kana: "にっか",
        meaningKo: "일과",
        exampleJa: "朝の 散歩が 日課だ。",
        exampleKo: "아침 산책이 일과이다."
      },
      {
        id: "nusumu",
        kanji: "盗む",
        kana: "ぬすむ",
        meaningKo: "훔치다",
        exampleJa: "財布を 盗まれた。",
        exampleKo: "지갑을 도둑맞았다."
      },
      {
        id: "nuru",
        kanji: "塗る",
        kana: "ぬる",
        meaningKo: "바르다, 칠하다",
        exampleJa: "壁に ペンキを 塗る。",
        exampleKo: "벽에 페인트를 칠한다."
      },
      {
        id: "netsuen",
        kanji: "熱演",
        kana: "ねつえん",
        meaningKo: "열연",
        exampleJa: "主演俳優の 熱演に 感動した。",
        exampleKo: "주연 배우의 열연에 감동했다."
      },
      {
        id: "nenrei",
        kanji: "年齢",
        kana: "ねんれい",
        meaningKo: "연령, 나이",
        exampleJa: "年齢に 関係なく 楽しめる。",
        exampleKo: "연령에 관계없이 즐길 수 있다."
      },
      {
        id: "nokoru",
        kanji: "残る",
        kana: "のこる",
        meaningKo: "남다",
        exampleJa: "夕食が 少し 残って いる。",
        exampleKo: "저녁식사가 조금 남아 있다."
      },
      {
        id: "nozoku",
        kanji: "除く",
        kana: "のぞく",
        meaningKo: "제거하다, 제외하다",
        exampleJa: "庭の 雑草を 除く。",
        exampleKo: "정원의 잡초를 제거한다."
      },
      {
        id: "noberu",
        kanji: "述べる",
        kana: "のべる",
        meaningKo: "서술하다, 말하다",
        exampleJa: "自分の 意見を 述べる。",
        exampleKo: "자신의 의견을 말한다."
      }
    ]
  },
  {
    id: "kanji-reading-ha",
    title: "한자읽기_は",
    description: "は행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "bai-times",
        kanji: "~倍",
        kana: "~ばい",
        meaningKo: "~배",
        exampleJa: "売り上げが 二倍に 増えた。",
        exampleKo: "매출이 두 배로 늘었다."
      },
      {
        id: "haifu",
        kanji: "配布",
        kana: "はいふ",
        meaningKo: "배포",
        exampleJa: "資料を 全員に 配布する。",
        exampleKo: "자료를 전원에게 배포한다."
      },
      {
        id: "bakuhatsu",
        kanji: "爆発",
        kana: "ばくはつ",
        meaningKo: "폭발",
        exampleJa: "工場で 爆発事故が 起きた。",
        exampleKo: "공장에서 폭발사고가 일어났다."
      },
      {
        id: "haji",
        kanji: "恥",
        kana: "はじ",
        meaningKo: "부끄러움, 수치",
        exampleJa: "そんな ことを 言うのは 恥だ。",
        exampleKo: "그런 말을 하는 것은 수치다."
      },
      {
        id: "hazureru",
        kanji: "外れる",
        kana: "はずれる",
        meaningKo: "제외되다, 벗어나다",
        exampleJa: "予想が 大きく 外れた。",
        exampleKo: "예상이 크게 빗나갔다."
      },
      {
        id: "hassha",
        kanji: "発射",
        kana: "はっしゃ",
        meaningKo: "발사",
        exampleJa: "ロケットが 無事に 発射された。",
        exampleKo: "로켓이 무사히 발사되었다."
      },
      {
        id: "hanareru",
        kanji: "離れる",
        kana: "はなれる",
        meaningKo: "멀어지다, 떨어지다",
        exampleJa: "故郷を 離れて 暮らす。",
        exampleKo: "고향을 떠나서 산다."
      },
      {
        id: "hahen",
        kanji: "破片",
        kana: "はへん",
        meaningKo: "파편",
        exampleJa: "ガラスの 破片に 注意する。",
        exampleKo: "유리 파편을 조심한다."
      },
      {
        id: "hari",
        kanji: "針",
        kana: "はり",
        meaningKo: "바늘",
        exampleJa: "針に 糸を 通す。",
        exampleKo: "바늘에 실을 꿴다."
      },
      {
        id: "harikiru",
        kanji: "張り切る",
        kana: "はりきる",
        meaningKo: "기운이 넘치다",
        exampleJa: "新入社員が 張り切って いる。",
        exampleKo: "신입사원이 의욕이 넘친다."
      },
      {
        id: "hanzai",
        kanji: "犯罪",
        kana: "はんざい",
        meaningKo: "범죄",
        exampleJa: "犯罪を 未然に 防ぐ。",
        exampleKo: "범죄를 미연에 방지한다."
      },
      {
        id: "hantai",
        kanji: "反対",
        kana: "はんたい",
        meaningKo: "반대",
        exampleJa: "計画に 反対する。",
        exampleKo: "계획에 반대한다."
      },
      {
        id: "handan",
        kanji: "判断",
        kana: "はんだん",
        meaningKo: "판단",
        exampleJa: "冷静に 判断する。",
        exampleKo: "냉정하게 판단한다."
      },
      {
        id: "hanbai",
        kanji: "販売",
        kana: "はんばい",
        meaningKo: "판매",
        exampleJa: "新商品の 販売を 始める。",
        exampleKo: "신상품 판매를 시작한다."
      },
      {
        id: "hikakuteki",
        kanji: "比較的",
        kana: "ひかくてき",
        meaningKo: "비교적",
        exampleJa: "今日は 比較的 暖かい。",
        exampleKo: "오늘은 비교적 따뜻하다."
      },
      {
        id: "higeki",
        kanji: "悲劇",
        kana: "ひげき",
        meaningKo: "비극",
        exampleJa: "歴史上の 悲劇を 学ぶ。",
        exampleKo: "역사상의 비극을 배운다."
      },
      {
        id: "hitoshii",
        kanji: "等しい",
        kana: "ひとしい",
        meaningKo: "동등하다",
        exampleJa: "二つの 量は 等しい。",
        exampleKo: "두 양은 같다."
      },
      {
        id: "hihyou",
        kanji: "批評",
        kana: "ひひょう",
        meaningKo: "비평",
        exampleJa: "作品を 厳しく 批評する。",
        exampleKo: "작품을 엄격하게 비평한다."
      },
      {
        id: "hifu",
        kanji: "皮膚",
        kana: "ひふ",
        meaningKo: "피부",
        exampleJa: "皮膚が 乾燥して かゆい。",
        exampleKo: "피부가 건조해서 가렵다."
      },
      {
        id: "byou-second",
        kanji: "~秒",
        kana: "~びょう",
        meaningKo: "~초",
        exampleJa: "あと 十秒 待って ください。",
        exampleKo: "앞으로 10초 기다려 주세요."
      },
      {
        id: "hyouka",
        kanji: "評価",
        kana: "ひょうか",
        meaningKo: "평가",
        exampleJa: "上司から 高い 評価を 受けた。",
        exampleKo: "상사로부터 높은 평가를 받았다."
      },
      {
        id: "hyoushiki",
        kanji: "標識",
        kana: "ひょうしき",
        meaningKo: "표지, 표식",
        exampleJa: "道路標識に 注意して 運転する。",
        exampleKo: "도로 표지에 주의하여 운전한다."
      },
      {
        id: "byoudou",
        kanji: "平等",
        kana: "びょうどう",
        meaningKo: "평등",
        exampleJa: "誰にでも 平等に 接する。",
        exampleKo: "누구에게나 평등하게 대한다."
      },
      {
        id: "fukumeru",
        kanji: "含める",
        kana: "ふくめる",
        meaningKo: "포함하다",
        exampleJa: "送料を 含めた 金額です。",
        exampleKo: "배송료를 포함한 금액입니다."
      },
      {
        id: "butai",
        kanji: "舞台",
        kana: "ぶたい",
        meaningKo: "무대",
        exampleJa: "初めて 舞台に 立った。",
        exampleKo: "처음으로 무대에 섰다."
      },
      {
        id: "futan",
        kanji: "負担",
        kana: "ふたん",
        meaningKo: "부담",
        exampleJa: "費用は 会社の 負担です。",
        exampleKo: "비용은 회사 부담입니다."
      },
      {
        id: "bubunteki",
        kanji: "部分的",
        kana: "ぶぶんてき",
        meaningKo: "부분적",
        exampleJa: "部分的に 修正する。",
        exampleKo: "부분적으로 수정한다."
      },
      {
        id: "fureru",
        kanji: "触れる",
        kana: "ふれる",
        meaningKo: "(문화·주제) 접하다",
        exampleJa: "異文化に 触れる 機会が 増えた。",
        exampleKo: "이문화에 접할 기회가 늘었다."
      },
      {
        id: "heikin",
        kanji: "平均",
        kana: "へいきん",
        meaningKo: "평균",
        exampleJa: "クラスの 平均点を 出す。",
        exampleKo: "반의 평균점을 낸다."
      },
      {
        id: "heru",
        kanji: "減る",
        kana: "へる",
        meaningKo: "줄다",
        exampleJa: "人口が 少しずつ 減って いる。",
        exampleKo: "인구가 조금씩 줄고 있다."
      },
      {
        id: "henkyaku",
        kanji: "返却",
        kana: "へんきゃく",
        meaningKo: "(책·CD) 반환, 반납",
        exampleJa: "図書館に 本を 返却した。",
        exampleKo: "도서관에 책을 반납했다."
      },
      {
        id: "boueki",
        kanji: "貿易",
        kana: "ぼうえき",
        meaningKo: "무역",
        exampleJa: "二国間の 貿易が 増えた。",
        exampleKo: "양국 간의 무역이 늘었다."
      },
      {
        id: "bousai",
        kanji: "防災",
        kana: "ぼうさい",
        meaningKo: "방재",
        exampleJa: "防災訓練に 参加する。",
        exampleKo: "방재훈련에 참가한다."
      },
      {
        id: "houshin",
        kanji: "方針",
        kana: "ほうしん",
        meaningKo: "방침",
        exampleJa: "会社の 方針が 変わった。",
        exampleKo: "회사 방침이 바뀌었다."
      },
      {
        id: "houfu",
        kanji: "豊富",
        kana: "ほうふ",
        meaningKo: "풍부함",
        exampleJa: "経験が 豊富な 人材を 求める。",
        exampleKo: "경험이 풍부한 인재를 찾는다."
      },
      {
        id: "houritsu",
        kanji: "法律",
        kana: "ほうりつ",
        meaningKo: "법률",
        exampleJa: "新しい 法律が 施行された。",
        exampleKo: "새 법률이 시행되었다."
      },
      {
        id: "hoshi",
        kanji: "星",
        kana: "ほし",
        meaningKo: "별",
        exampleJa: "夜空に 星が 輝いて いる。",
        exampleKo: "밤하늘에 별이 빛나고 있다."
      },
      {
        id: "horu",
        kanji: "掘る",
        kana: "ほる",
        meaningKo: "파다, 캐다",
        exampleJa: "庭に 穴を 掘る。",
        exampleKo: "정원에 구덩이를 판다."
      }
    ]
  },
  {
    id: "kanji-reading-ma",
    title: "한자읽기_ま",
    description: "ま행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "maneku",
        kanji: "招く",
        kana: "まねく",
        meaningKo: "초대하다, 부르다, 초래하다",
        exampleJa: "友人を 家に 招いた。",
        exampleKo: "친구를 집에 초대했다."
      },
      {
        id: "midareru",
        kanji: "乱れる",
        kana: "みだれる",
        meaningKo: "흐트러지다, 흐려지다",
        exampleJa: "風で 髪が 乱れる。",
        exampleKo: "바람에 머리가 흐트러진다."
      },
      {
        id: "missetsu",
        kanji: "密接",
        kana: "みっせつ",
        meaningKo: "밀접함",
        exampleJa: "両者は 密接な 関係に ある。",
        exampleKo: "양자는 밀접한 관계에 있다."
      },
      {
        id: "mippei",
        kanji: "密閉",
        kana: "みっぺい",
        meaningKo: "밀폐",
        exampleJa: "密閉容器に 食品を 入れる。",
        exampleKo: "밀폐 용기에 식품을 넣는다."
      },
      {
        id: "mitomeru",
        kanji: "認める",
        kana: "みとめる",
        meaningKo: "인정하다",
        exampleJa: "自分の 過ちを 認める。",
        exampleKo: "자신의 잘못을 인정한다."
      },
      {
        id: "mirai",
        kanji: "未来",
        kana: "みらい",
        meaningKo: "미래",
        exampleJa: "明るい 未来を 信じる。",
        exampleKo: "밝은 미래를 믿는다."
      },
      {
        id: "mukaeru",
        kanji: "迎える",
        kana: "むかえる",
        meaningKo: "맞이하다",
        exampleJa: "新年を 家族と 迎える。",
        exampleKo: "새해를 가족과 함께 맞이한다."
      },
      {
        id: "mendou",
        kanji: "面倒",
        kana: "めんどう",
        meaningKo: "귀찮음, 번거로움",
        exampleJa: "手続きが 面倒だ。",
        exampleKo: "절차가 번거롭다."
      },
      {
        id: "mokuteki",
        kanji: "目的",
        kana: "もくてき",
        meaningKo: "목적",
        exampleJa: "今回の 出張の 目的を 説明する。",
        exampleKo: "이번 출장의 목적을 설명한다."
      },
      {
        id: "modosu",
        kanji: "戻す",
        kana: "もどす",
        meaningKo: "(원래 자리·상태) 되돌리다",
        exampleJa: "使った 本を 棚に 戻す。",
        exampleKo: "사용한 책을 책장에 되돌려 놓는다."
      },
      {
        id: "motomeru",
        kanji: "求める",
        kana: "もとめる",
        meaningKo: "구하다, 청하다",
        exampleJa: "助けを 求める 声が 聞こえた。",
        exampleKo: "도움을 구하는 소리가 들렸다."
      },
      {
        id: "monogatari",
        kanji: "物語",
        kana: "ものがたり",
        meaningKo: "이야기",
        exampleJa: "祖母から 昔の 物語を 聞く。",
        exampleKo: "할머니로부터 옛 이야기를 듣는다."
      },
      {
        id: "mohan",
        kanji: "模範",
        kana: "もはん",
        meaningKo: "모범",
        exampleJa: "後輩の 模範に なる。",
        exampleKo: "후배의 모범이 된다."
      }
    ]
  },
  {
    id: "kanji-reading-ya",
    title: "한자읽기_や",
    description: "や행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "yakume",
        kanji: "役目",
        kana: "やくめ",
        meaningKo: "임무",
        exampleJa: "自分の 役目を 果たす。",
        exampleKo: "자신의 임무를 다한다."
      },
      {
        id: "yakeru",
        kanji: "焼ける",
        kana: "やける",
        meaningKo: "(불)타다, 구워지다",
        exampleJa: "パンが こんがり 焼けた。",
        exampleKo: "빵이 노릇하게 구워졌다."
      },
      {
        id: "yachin",
        kanji: "家賃",
        kana: "やちん",
        meaningKo: "집세",
        exampleJa: "毎月の 家賃を 払う。",
        exampleKo: "매달 집세를 낸다."
      },
      {
        id: "yatou",
        kanji: "雇う",
        kana: "やとう",
        meaningKo: "고용하다",
        exampleJa: "新しく 二人 雇う ことに した。",
        exampleKo: "새로 두 명을 고용하기로 했다."
      },
      {
        id: "yabureru",
        kanji: "敗れる",
        kana: "やぶれる",
        meaningKo: "지다, 패배하다",
        exampleJa: "決勝で 強敵に 敗れた。",
        exampleKo: "결승에서 강적에게 패배했다."
      },
      {
        id: "yuushou",
        kanji: "優勝",
        kana: "ゆうしょう",
        meaningKo: "우승",
        exampleJa: "わが チームが 優勝した。",
        exampleKo: "우리 팀이 우승했다."
      },
      {
        id: "yutaka",
        kanji: "豊か",
        kana: "ゆたか",
        meaningKo: "풍요로움",
        exampleJa: "豊かな 自然に 囲まれて 育った。",
        exampleKo: "풍요로운 자연에 둘러싸여 자랐다."
      },
      {
        id: "yudan",
        kanji: "油断",
        kana: "ゆだん",
        meaningKo: "방심, 부주의",
        exampleJa: "最後まで 油断は 禁物だ。",
        exampleKo: "끝까지 방심은 금물이다."
      },
      {
        id: "yoi",
        kanji: "良い",
        kana: "よい",
        meaningKo: "좋다",
        exampleJa: "今日は 天気が 良い。",
        exampleKo: "오늘은 날씨가 좋다."
      },
      {
        id: "yougan",
        kanji: "溶岩",
        kana: "ようがん",
        meaningKo: "용암",
        exampleJa: "火山から 溶岩が 流れ出た。",
        exampleKo: "화산에서 용암이 흘러나왔다."
      },
      {
        id: "youkyuu",
        kanji: "要求",
        kana: "ようきゅう",
        meaningKo: "요구",
        exampleJa: "労働者の 要求を 聞く。",
        exampleKo: "노동자의 요구를 듣는다."
      },
      {
        id: "youshi",
        kanji: "容姿",
        kana: "ようし",
        meaningKo: "용모",
        exampleJa: "容姿よりも 中身が 大切だ。",
        exampleKo: "용모보다 내면이 중요하다."
      },
      {
        id: "youchi",
        kanji: "幼稚",
        kana: "ようち",
        meaningKo: "유치함",
        exampleJa: "幼稚な 発想は 卒業しよう。",
        exampleKo: "유치한 발상은 졸업하자."
      },
      {
        id: "yononaka",
        kanji: "世の中",
        kana: "よのなか",
        meaningKo: "세상",
        exampleJa: "世の中は 速く 変化する。",
        exampleKo: "세상은 빠르게 변한다."
      }
    ]
  },
  {
    id: "kanji-reading-ra-wa",
    title: "한자읽기_ら+わ",
    description: "ら·わ행으로 시작하는 한자읽기 기출어휘.",
    sourceBatch: KR_BATCH,
    jlptLevel: "N2",
    createdAt: KR_DATE,
    updatedAt: KR_DATE,
    words: [
      {
        id: "ryakusuru",
        kanji: "略する",
        kana: "りゃくする",
        meaningKo: "생략하다",
        exampleJa: "詳しい 説明は 略する。",
        exampleKo: "자세한 설명은 생략한다."
      },
      {
        id: "ryuukou",
        kanji: "流行",
        kana: "りゅうこう",
        meaningKo: "유행",
        exampleJa: "今年の 流行を 追いかける。",
        exampleKo: "올해의 유행을 쫓는다."
      },
      {
        id: "ryougae",
        kanji: "両替",
        kana: "りょうがえ",
        meaningKo: "환전",
        exampleJa: "空港で 円を ドルに 両替した。",
        exampleKo: "공항에서 엔을 달러로 환전했다."
      },
      {
        id: "ryoukoku",
        kanji: "両国",
        kana: "りょうこく",
        meaningKo: "양국",
        exampleJa: "両国の 関係が 改善された。",
        exampleKo: "양국의 관계가 개선되었다."
      },
      {
        id: "reigai",
        kanji: "例外",
        kana: "れいがい",
        meaningKo: "예외",
        exampleJa: "誰にも 例外は 認めない。",
        exampleKo: "누구에게도 예외는 인정하지 않는다."
      },
      {
        id: "reizouko",
        kanji: "冷蔵庫",
        kana: "れいぞうこ",
        meaningKo: "냉장고",
        exampleJa: "冷蔵庫に 牛乳を 入れる。",
        exampleKo: "냉장고에 우유를 넣는다."
      },
      {
        id: "reitou",
        kanji: "冷凍",
        kana: "れいとう",
        meaningKo: "냉동",
        exampleJa: "肉を 冷凍して 保存する。",
        exampleKo: "고기를 냉동해서 보관한다."
      },
      {
        id: "rekishi",
        kanji: "歴史",
        kana: "れきし",
        meaningKo: "역사",
        exampleJa: "日本の 歴史を 勉強する。",
        exampleKo: "일본의 역사를 공부한다."
      },
      {
        id: "renzoku",
        kanji: "連続",
        kana: "れんぞく",
        meaningKo: "연속",
        exampleJa: "三日 連続で 雨が 降った。",
        exampleKo: "3일 연속으로 비가 내렸다."
      },
      {
        id: "renraku",
        kanji: "連絡",
        kana: "れんらく",
        meaningKo: "연락",
        exampleJa: "あとで 先生に 連絡します。",
        exampleKo: "나중에 선생님께 연락합니다."
      },
      {
        id: "warau",
        kanji: "笑う",
        kana: "わらう",
        meaningKo: "웃다",
        exampleJa: "彼女は 楽しそうに 笑った。",
        exampleKo: "그녀는 즐거운 듯이 웃었다."
      },
      {
        id: "wariai",
        kanji: "割合",
        kana: "わりあい",
        meaningKo: "비율",
        exampleJa: "女性の 割合が 増えた。",
        exampleKo: "여성의 비율이 늘었다."
      }
    ]
  },
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
  },
  {
    id: "kanji-reading-past-2016-2023",
    title: "한자읽기2023~2016",
    description: "2023년부터 2016년까지 연도별 한자읽기 기출어휘.",
    sourceBatch: "kanji-reading-past-2026-07-01",
    jlptLevel: "N2",
    quizStyle: "reading",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
    words: [
      { id: "akushu-2023", kanji: "握手", kana: "あくしゅ", meaningKo: "악수", exampleJa: "二人は 笑顔で 握手を 交わした。", exampleKo: "두 사람은 웃는 얼굴로 악수를 나누었다.", tags: ["2023"] },
      { id: "ude-2023", kanji: "腕", kana: "うで", meaningKo: "팔", exampleJa: "彼は 腕を 組んで 考えている。", exampleKo: "그는 팔짱을 끼고 생각하고 있다.", tags: ["2023"] },
      { id: "osanai-2023", kanji: "幼い", kana: "おさない", meaningKo: "어리다, 유치하다", exampleJa: "幼い 子どもが 公園で 遊んでいる。", exampleKo: "어린 아이가 공원에서 놀고 있다.", tags: ["2023"] },
      { id: "kewashii-2023", kanji: "険しい", kana: "けわしい", meaningKo: "험악하다, 험상궂다", exampleJa: "険しい 山道を 慎重に 登った。", exampleKo: "험한 산길을 신중하게 올랐다.", tags: ["2023"] },
      { id: "zenryou-2023", kanji: "善良だ", kana: "ぜんりょう", meaningKo: "선량하다, 어질다", exampleJa: "彼は 善良な 人柄で 皆に 好かれている。", exampleKo: "그는 선량한 성품으로 모두에게 사랑받는다.", tags: ["2023"] },
      { id: "sakujo-2023", kanji: "削除", kana: "さくじょ", meaningKo: "삭제", exampleJa: "不要な ファイルを 削除した。", exampleKo: "불필요한 파일을 삭제했다.", tags: ["2023"] },
      { id: "byoudou-2023", kanji: "平等", kana: "びょうどう", meaningKo: "평등", exampleJa: "すべての 人は 法の下に 平等だ。", exampleKo: "모든 사람은 법 앞에 평등하다.", tags: ["2023"] },
      { id: "midareru-2023", kanji: "乱れる", kana: "みだれる", meaningKo: "흐트러지다, 흩트러지다", exampleJa: "強い 風で 髪が 乱れた。", exampleKo: "강한 바람에 머리가 흐트러졌다.", tags: ["2023"] },
      { id: "mohan-2023", kanji: "模範", kana: "もはん", meaningKo: "모범", exampleJa: "彼は 後輩の 模範と なる 存在だ。", exampleKo: "그는 후배의 모범이 되는 존재다.", tags: ["2023"] },
      { id: "unchin-2023", kanji: "運賃", kana: "うんちん", meaningKo: "운임", exampleJa: "バスの 運賃が 来月から 上がる。", exampleKo: "버스 운임이 다음 달부터 오른다.", tags: ["2023"] },

      { id: "isamashii-2022", kanji: "勇ましい", kana: "いさましい", meaningKo: "용감하다", exampleJa: "兵士たちは 勇ましく 前へ 進んだ。", exampleKo: "병사들은 용감하게 앞으로 나아갔다.", tags: ["2022"] },
      { id: "erai-2022", kanji: "偉い", kana: "えらい", meaningKo: "대단하다, 위대하다", exampleJa: "彼は 若いのに とても 偉い 学者だ。", exampleKo: "그는 젊은데도 매우 위대한 학자다.", tags: ["2022"] },
      { id: "kioku-2022", kanji: "記憶", kana: "きおく", meaningKo: "기억", exampleJa: "子どもの 頃の 記憶が よみがえる。", exampleKo: "어린 시절의 기억이 되살아난다.", tags: ["2022"] },
      { id: "keibi-2022", kanji: "警備", kana: "けいび", meaningKo: "경비", exampleJa: "会場の 周りは 厳重に 警備されている。", exampleKo: "행사장 주변은 삼엄하게 경비되고 있다.", tags: ["2022"] },
      { id: "shigeki-2022", kanji: "刺激", kana: "しげき", meaningKo: "자극", exampleJa: "辛い 料理は 胃を 刺激する。", exampleKo: "매운 요리는 위를 자극한다.", tags: ["2022"] },
      { id: "seken-2022", kanji: "世間", kana: "せけん", meaningKo: "세간, 세상", exampleJa: "世間の 評判を 気にしすぎる。", exampleKo: "세간의 평판을 지나치게 신경 쓴다.", tags: ["2022"] },
      { id: "sozai-2022", kanji: "素材", kana: "そざい", meaningKo: "소재", exampleJa: "この 服は 良い 素材で 作られている。", exampleKo: "이 옷은 좋은 소재로 만들어졌다.", tags: ["2022"] },
      { id: "tsutomeru-2022", kanji: "務める", kana: "つとめる", meaningKo: "역할을 맡다", exampleJa: "彼女は 会議の 司会を 務めた。", exampleKo: "그녀는 회의 사회를 맡았다.", tags: ["2022"] },
      { id: "totanni-2022", kanji: "途端に", kana: "とたんに", meaningKo: "바로 그 순간", exampleJa: "ドアを 開けた 途端に 猫が 逃げた。", exampleKo: "문을 연 순간 고양이가 도망쳤다.", tags: ["2022"] },
      { id: "hazureru-2022", kanji: "外れる", kana: "はずれる", meaningKo: "제외되다, 벗어나다", exampleJa: "私の 予想が 見事に 外れた。", exampleKo: "내 예상이 보기 좋게 빗나갔다.", tags: ["2022"] },

      { id: "aseru-2021", kanji: "焦る", kana: "あせる", meaningKo: "초조해하다", exampleJa: "時間が ないので、つい 焦って しまう。", exampleKo: "시간이 없어서 그만 초조해진다.", tags: ["2021"] },
      { id: "ichijirushii-2021", kanji: "著しい", kana: "いちじるしい", meaningKo: "현저하다, 두드러지다", exampleJa: "彼の 成績は 著しく 向上した。", exampleKo: "그의 성적은 현저하게 향상되었다.", tags: ["2021"] },
      { id: "kaigo-2021", kanji: "介護", kana: "かいご", meaningKo: "간호", exampleJa: "祖母の 介護を 家族で 分担している。", exampleKo: "할머니 간호를 가족이 분담하고 있다.", tags: ["2021"] },
      { id: "kakujuu-2021", kanji: "拡充", kana: "かくじゅう", meaningKo: "확충", exampleJa: "会社は サービスの 拡充を 進めている。", exampleKo: "회사는 서비스 확충을 추진하고 있다.", tags: ["2021"] },
      { id: "katamuku-2021", kanji: "傾く", kana: "かたむく", meaningKo: "기울다, 치우치다", exampleJa: "古い 家が 少し 傾いている。", exampleKo: "오래된 집이 조금 기울어 있다.", tags: ["2021"] },
      { id: "sanpi-2021", kanji: "賛否", kana: "さんぴ", meaningKo: "찬반, 가부", exampleJa: "その 案には 賛否が 分かれた。", exampleKo: "그 안에는 찬반이 갈렸다.", tags: ["2021"] },
      { id: "joukei-2021", kanji: "情景", kana: "じょうけい", meaningKo: "정경, 광경", exampleJa: "夕日の 美しい 情景が 心に 残る。", exampleKo: "석양의 아름다운 정경이 마음에 남는다.", tags: ["2021"] },
      { id: "seien-2021", kanji: "声援", kana: "せいえん", meaningKo: "성원", exampleJa: "観客の 声援に 選手が 応えた。", exampleKo: "관객의 성원에 선수가 부응했다.", tags: ["2021"] },
      { id: "toboshii-2021", kanji: "乏しい", kana: "とぼしい", meaningKo: "모자라다, 부족하다", exampleJa: "経験が 乏しくて 不安だ。", exampleKo: "경험이 부족해서 불안하다.", tags: ["2021"] },
      { id: "hahen-2021", kanji: "破片", kana: "はへん", meaningKo: "파편", exampleJa: "ガラスの 破片で 手を 切った。", exampleKo: "유리 파편에 손을 베었다.", tags: ["2021"] },

      { id: "kakou-2020", kanji: "下降", kana: "かこう", meaningKo: "하강, 추락", exampleJa: "気温が 急に 下降した。", exampleKo: "기온이 갑자기 하강했다.", tags: ["2020"] },
      { id: "kewashii-2020", kanji: "険しい", kana: "けわしい", meaningKo: "험악하다, 험상궂다", exampleJa: "彼は 険しい 表情で 私を 見た。", exampleKo: "그는 험악한 표정으로 나를 보았다.", tags: ["2020"] },
      { id: "songai-2020", kanji: "損害", kana: "そんがい", meaningKo: "손해", exampleJa: "台風で 大きな 損害を 受けた。", exampleKo: "태풍으로 큰 손해를 입었다.", tags: ["2020"] },
      { id: "taosu-2020", kanji: "倒す", kana: "たおす", meaningKo: "쓰러뜨리다, 무너뜨리다", exampleJa: "相手を 倒して 試合に 勝った。", exampleKo: "상대를 쓰러뜨리고 시합에 이겼다.", tags: ["2020"] },
      { id: "hikakuteki-2020", kanji: "比較的", kana: "ひかくてき", meaningKo: "비교적", exampleJa: "今日は 比較的 暖かい 一日だった。", exampleKo: "오늘은 비교적 따뜻한 하루였다.", tags: ["2020"] },

      { id: "attouteki-2019", kanji: "圧倒的", kana: "あっとうてき", meaningKo: "압도적", exampleJa: "我が チームが 圧倒的な 差で 勝った。", exampleKo: "우리 팀이 압도적인 차이로 이겼다.", tags: ["2019"] },
      { id: "guuzen-2019", kanji: "偶然", kana: "ぐうぜん", meaningKo: "우연히", exampleJa: "街で 偶然 昔の 友人に 会った。", exampleKo: "거리에서 우연히 옛 친구를 만났다.", tags: ["2019"] },
      { id: "utsuru-2019", kanji: "映る", kana: "うつる", meaningKo: "비치다", exampleJa: "湖に 山の 姿が きれいに 映る。", exampleKo: "호수에 산의 모습이 예쁘게 비친다.", tags: ["2019"] },
      { id: "keishou-2019", kanji: "軽傷", kana: "けいしょう", meaningKo: "경상", exampleJa: "幸い けがは 軽傷で 済んだ。", exampleKo: "다행히 부상은 경상으로 그쳤다.", tags: ["2019"] },
      { id: "gejun-2019", kanji: "下旬", kana: "げじゅん", meaningKo: "하순", exampleJa: "来月の 下旬に 旅行に 行く。", exampleKo: "다음 달 하순에 여행을 간다.", tags: ["2019"] },
      { id: "shigeki-2019", kanji: "刺激", kana: "しげき", meaningKo: "자극", exampleJa: "新しい 環境は 良い 刺激に なる。", exampleKo: "새로운 환경은 좋은 자극이 된다.", tags: ["2019"] },
      { id: "nikumu-2019", kanji: "憎む", kana: "にくむ", meaningKo: "미워하다, 증오하다", exampleJa: "人を 憎む 気持ちは 心を 疲れさせる。", exampleKo: "남을 미워하는 마음은 마음을 지치게 한다.", tags: ["2019"] },
      { id: "haji-2019", kanji: "恥", kana: "はじ", meaningKo: "부끄러움, 수치", exampleJa: "失敗を 恥と 思う 必要は ない。", exampleKo: "실패를 부끄러움으로 여길 필요는 없다.", tags: ["2019"] },
      { id: "hitoshii-2019", kanji: "等しい", kana: "ひとしい", meaningKo: "동등하다", exampleJa: "二つの 三角形の 面積は 等しい。", exampleKo: "두 삼각형의 면적은 동등하다.", tags: ["2019"] },
      { id: "futan-2019", kanji: "負担", kana: "ふたん", meaningKo: "부담", exampleJa: "家族の 負担を 少しでも 減らしたい。", exampleKo: "가족의 부담을 조금이라도 줄이고 싶다.", tags: ["2019"] },

      { id: "kikaku-2018", kanji: "企画", kana: "きかく", meaningKo: "기획", exampleJa: "新しい イベントを 企画している。", exampleKo: "새로운 이벤트를 기획하고 있다.", tags: ["2018"] },
      { id: "saido-2018", kanji: "再度", kana: "さいど", meaningKo: "재차, 다시", exampleJa: "問題が あれば 再度 連絡します。", exampleKo: "문제가 있으면 다시 연락하겠습니다.", tags: ["2018"] },
      { id: "kowai-2018", kanji: "怖い", kana: "こわい", meaningKo: "무섭다", exampleJa: "暗い 夜道は 少し 怖い。", exampleKo: "어두운 밤길은 조금 무섭다.", tags: ["2018"] },
      { id: "shimeru-2018", kanji: "湿る", kana: "しめる", meaningKo: "축축해지다, 습기 차다", exampleJa: "雨で 洗濯物が 湿って しまった。", exampleKo: "비로 빨래가 축축해져 버렸다.", tags: ["2018"] },
      { id: "shori-2018", kanji: "処理", kana: "しょり", meaningKo: "처리", exampleJa: "たまった 仕事を 手早く 処理した。", exampleKo: "밀린 일을 재빠르게 처리했다.", tags: ["2018"] },
      { id: "sougaku-2018", kanji: "総額", kana: "そうがく", meaningKo: "총액", exampleJa: "修理の 総額は 五万円だった。", exampleKo: "수리 총액은 5만 엔이었다.", tags: ["2018"] },
      { id: "chuusen-2018", kanji: "抽選", kana: "ちゅうせん", meaningKo: "추첨", exampleJa: "商品券が 抽選で 当たった。", exampleKo: "상품권이 추첨으로 당첨되었다.", tags: ["2018"] },
      { id: "nagoyaka-2018", kanji: "和やか", kana: "なごやか", meaningKo: "온화함", exampleJa: "会議は 和やかな 雰囲気で 進んだ。", exampleKo: "회의는 온화한 분위기로 진행되었다.", tags: ["2018"] },
      { id: "hanareru-2018", kanji: "離れる", kana: "はなれる", meaningKo: "떨어지다, 떨어져 있다", exampleJa: "故郷を 離れて 都会で 暮らす。", exampleKo: "고향을 떠나 도시에서 산다.", tags: ["2018"] },
      { id: "reizouko-2018", kanji: "冷蔵庫", kana: "れいぞうこ", meaningKo: "냉장고", exampleJa: "牛乳を 冷蔵庫に 入れて おく。", exampleKo: "우유를 냉장고에 넣어 둔다.", tags: ["2018"] },

      { id: "osanai-2017", kanji: "幼い", kana: "おさない", meaningKo: "어리다, 유치하다", exampleJa: "幼い 頃の 写真を 見て 懐かしむ。", exampleKo: "어릴 적 사진을 보고 그리워한다.", tags: ["2017"] },
      { id: "kakaeru-2017", kanji: "抱える", kana: "かかえる", meaningKo: "떠안다, 책임지다", exampleJa: "彼は 多くの 問題を 抱えている。", exampleKo: "그는 많은 문제를 떠안고 있다.", tags: ["2017"] },
      { id: "kyuujin-2017", kanji: "求人", kana: "きゅうじん", meaningKo: "구인", exampleJa: "求人の 広告を 見て 応募した。", exampleKo: "구인 광고를 보고 지원했다.", tags: ["2017"] },
      { id: "shiboru-2017", kanji: "絞る", kana: "しぼる", meaningKo: "조이다, (쥐어)짜다", exampleJa: "レモンを 絞って ジュースを 作る。", exampleKo: "레몬을 짜서 주스를 만든다.", tags: ["2017"] },
      { id: "juunan-2017", kanji: "柔軟に", kana: "じゅうなんに", meaningKo: "유연하게", exampleJa: "状況に 応じて 柔軟に 対応する。", exampleKo: "상황에 따라 유연하게 대응한다.", tags: ["2017"] },
      { id: "suichoku-2017", kanji: "垂直", kana: "すいちょく", meaningKo: "수직", exampleJa: "壁に 対して 垂直に 線を 引く。", exampleKo: "벽에 대해 수직으로 선을 긋는다.", tags: ["2017"] },
      { id: "tsuyobi-2017", kanji: "強火", kana: "つよび", meaningKo: "센불", exampleJa: "強火で 一気に 肉を 焼く。", exampleKo: "센 불로 단숨에 고기를 굽는다.", tags: ["2017"] },
      { id: "nigiru-2017", kanji: "握る", kana: "にぎる", meaningKo: "쥐다, 잡다", exampleJa: "彼女は しっかりと 私の 手を 握った。", exampleKo: "그녀는 꼭 내 손을 잡았다.", tags: ["2017"] },
      { id: "midareru-2017", kanji: "乱れる", kana: "みだれる", meaningKo: "흐트러지다, 흩트러지다", exampleJa: "呼吸が 乱れて うまく 話せない。", exampleKo: "호흡이 흐트러져 잘 말할 수 없다.", tags: ["2017"] },
      { id: "mippei-2017", kanji: "密閉", kana: "みっぺい", meaningKo: "밀폐", exampleJa: "食品を 密閉して 保存する。", exampleKo: "식품을 밀폐해서 보존한다.", tags: ["2017"] },

      { id: "ayashii-2016", kanji: "怪しい", kana: "あやしい", meaningKo: "수상하다", exampleJa: "玄関の 前に 怪しい 人が 立っていた。", exampleKo: "현관 앞에 수상한 사람이 서 있었다.", tags: ["2016"] },
      { id: "osameru-2016", kanji: "納める", kana: "おさめる", meaningKo: "넣다, 납입하다", exampleJa: "期限までに 税金を 納めた。", exampleKo: "기한까지 세금을 납입했다.", tags: ["2016"] },
      { id: "otoru-2016", kanji: "劣る", kana: "おとる", meaningKo: "뒤떨어지다", exampleJa: "品質の 点で 他社に 劣る。", exampleKo: "품질 면에서 타사에 뒤떨어진다.", tags: ["2016"] },
      { id: "ganbou-2016", kanji: "願望", kana: "がんぼう", meaningKo: "바람, 소원", exampleJa: "海外で 働きたいという 願望が ある。", exampleKo: "해외에서 일하고 싶다는 바람이 있다.", tags: ["2016"] },
      { id: "kisou-2016", kanji: "競う", kana: "きそう", meaningKo: "겨루다, 경쟁하다", exampleJa: "選手たちが 一位を 競っている。", exampleKo: "선수들이 1위를 다투고 있다.", tags: ["2016"] },
      { id: "kichou-2016", kanji: "貴重", kana: "きちょう", meaningKo: "귀중함", exampleJa: "これは とても 貴重な 資料だ。", exampleKo: "이것은 매우 귀중한 자료다.", tags: ["2016"] },
      { id: "chiryou-2016", kanji: "治療", kana: "ちりょう", meaningKo: "치료", exampleJa: "医者の 治療で 傷が 治った。", exampleKo: "의사의 치료로 상처가 나았다.", tags: ["2016"] },
      { id: "tomonau-2016", kanji: "伴う", kana: "ともなう", meaningKo: "동반하다, 따르다", exampleJa: "成長には 痛みが 伴う ことが 多い。", exampleKo: "성장에는 고통이 따르는 경우가 많다.", tags: ["2016"] },
      { id: "hihyou-2016", kanji: "批評", kana: "ひひょう", meaningKo: "비평", exampleJa: "作品を 冷静に 批評する。", exampleKo: "작품을 냉정하게 비평한다.", tags: ["2016"] },
      { id: "youshi-2016", kanji: "容姿", kana: "ようし", meaningKo: "용모, 외모", exampleJa: "人を 容姿だけで 判断しては いけない。", exampleKo: "사람을 외모만으로 판단해서는 안 된다.", tags: ["2016"] }
    ]
  },
  {
    id: "kanji-writing-past-2016-2023",
    title: "한자표기2023~2016",
    description: "2023년부터 2016년까지 연도별 한자표기 기출어휘.",
    sourceBatch: "kanji-writing-past-2026-07-01",
    jlptLevel: "N2",
    quizStyle: "writing",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
    words: [
      { id: "kakaeru-2023", kanji: "抱える", kana: "かかえる", meaningKo: "안다, 떠안다", exampleJa: "彼は 大きな 荷物を 抱えて 歩いた。", exampleKo: "그는 큰 짐을 안고 걸었다.", tags: ["2023"] },
      { id: "kanri-2023", kanji: "管理", kana: "かんり", meaningKo: "관리", exampleJa: "データを しっかり 管理する。", exampleKo: "데이터를 확실히 관리한다.", tags: ["2023"] },
      { id: "kenshuu-2023", kanji: "研修", kana: "けんしゅう", meaningKo: "연수", exampleJa: "新入社員が 研修を 受けている。", exampleKo: "신입사원이 연수를 받고 있다.", tags: ["2023"] },
      { id: "suteru-2023", kanji: "捨てる", kana: "すてる", meaningKo: "버리다", exampleJa: "ごみを 正しく 捨てる。", exampleKo: "쓰레기를 올바르게 버린다.", tags: ["2023"] },
      { id: "taezu-2023", kanji: "絶えず", kana: "たえず", meaningKo: "늘, 끊임없이", exampleJa: "川の 水は 絶えず 流れている。", exampleKo: "강물은 끊임없이 흐르고 있다.", tags: ["2023"] },
      { id: "touhyou-2023", kanji: "投票", kana: "とうひょう", meaningKo: "투표", exampleJa: "国民が 選挙で 投票する。", exampleKo: "국민이 선거에서 투표한다.", tags: ["2023"] },
      { id: "fukushi-2023", kanji: "福祉", kana: "ふくし", meaningKo: "복지", exampleJa: "社会 福祉の 制度を 整える。", exampleKo: "사회 복지 제도를 정비한다.", tags: ["2023"] },
      { id: "kigen-2023", kanji: "機嫌", kana: "きげん", meaningKo: "기분, 심기", exampleJa: "父は 今日 機嫌が いい。", exampleKo: "아버지는 오늘 기분이 좋다.", tags: ["2023"] },
      { id: "sonshitsu-2023", kanji: "損失", kana: "そんしつ", meaningKo: "손실", exampleJa: "会社は 大きな 損失を 出した。", exampleKo: "회사는 큰 손실을 냈다.", tags: ["2023"] },
      { id: "nuno-2023", kanji: "布", kana: "ぬの", meaningKo: "천", exampleJa: "布で テーブルを 拭いた。", exampleKo: "천으로 테이블을 닦았다.", tags: ["2023"] },

      { id: "juukyo-2022", kanji: "住居", kana: "じゅうきょ", meaningKo: "주거", exampleJa: "新しい 住居を 探している。", exampleKo: "새 주거지를 찾고 있다.", tags: ["2022"] },
      { id: "shindan-2022", kanji: "診断", kana: "しんだん", meaningKo: "진단", exampleJa: "医者に 病気を 診断して もらう。", exampleKo: "의사에게 병을 진단받는다.", tags: ["2022"] },
      { id: "sonaeru-2022", kanji: "備える", kana: "そなえる", meaningKo: "마련하다, 갖추다", exampleJa: "災害に 備えて 水を 用意する。", exampleKo: "재해에 대비해 물을 준비한다.", tags: ["2022"] },
      { id: "tenkeiteki-2022", kanji: "典型的", kana: "てんけいてき", meaningKo: "전형적", exampleJa: "これは 典型的な 失敗の 例だ。", exampleKo: "이것은 전형적인 실패의 예다.", tags: ["2022"] },
      { id: "haiyuu-2022", kanji: "俳優", kana: "はいゆう", meaningKo: "배우", exampleJa: "彼は 有名な 映画 俳優だ。", exampleKo: "그는 유명한 영화 배우다.", tags: ["2022"] },
      { id: "hanareru-2022", kanji: "離れる", kana: "はなれる", meaningKo: "떨어지다, 거리가 멀어지다", exampleJa: "二人の 席は 少し 離れている。", exampleKo: "두 사람의 자리는 조금 떨어져 있다.", tags: ["2022"] },
      { id: "yoku-2022", kanji: "欲", kana: "よく", meaningKo: "욕심", exampleJa: "欲を 出しすぎると 失敗する。", exampleKo: "욕심을 너무 부리면 실패한다.", tags: ["2022"] },
      { id: "suichokuni-2022", kanji: "垂直に", kana: "すいちょくに", meaningKo: "수직으로", exampleJa: "柱を 地面に 垂直に 立てる。", exampleKo: "기둥을 지면에 수직으로 세운다.", tags: ["2022"] },
      { id: "noboru-2022", kanji: "昇る", kana: "のぼる", meaningKo: "떠오르다", exampleJa: "太陽が 東から 昇る。", exampleKo: "해가 동쪽에서 떠오른다.", tags: ["2022"] },
      { id: "hitoshii-2022", kanji: "等しい", kana: "ひとしい", meaningKo: "같다, 동등하다", exampleJa: "二つの 辺の 長さは 等しい。", exampleKo: "두 변의 길이는 같다.", tags: ["2022"] },

      { id: "eikyuu-2021", kanji: "永久", kana: "えいきゅう", meaningKo: "영구, 영원", exampleJa: "平和が 永久に 続くことを 願う。", exampleKo: "평화가 영원히 이어지기를 바란다.", tags: ["2021"] },
      { id: "kanyuu-2021", kanji: "勧誘", kana: "かんゆう", meaningKo: "권유", exampleJa: "しつこい 勧誘を 断った。", exampleKo: "끈질긴 권유를 거절했다.", tags: ["2021"] },
      { id: "jakuten-2021", kanji: "弱点", kana: "じゃくてん", meaningKo: "약점", exampleJa: "自分の 弱点を 克服する。", exampleKo: "자신의 약점을 극복한다.", tags: ["2021"] },
      { id: "junchou-2021", kanji: "順調", kana: "じゅんちょう", meaningKo: "순조로움", exampleJa: "計画は 順調に 進んでいる。", exampleKo: "계획은 순조롭게 진행되고 있다.", tags: ["2021"] },
      { id: "henpin-2021", kanji: "返品", kana: "へんぴん", meaningKo: "반품", exampleJa: "不良品を お店に 返品した。", exampleKo: "불량품을 가게에 반품했다.", tags: ["2021"] },
      { id: "makaseru-2021", kanji: "任せる", kana: "まかせる", meaningKo: "맡기다", exampleJa: "この 仕事は 君に 任せる。", exampleKo: "이 일은 너에게 맡긴다.", tags: ["2021"] },
      { id: "ranbou-2021", kanji: "乱暴", kana: "らんぼう", meaningKo: "난폭함", exampleJa: "乱暴な 言葉を 使っては いけない。", exampleKo: "난폭한 말을 써서는 안 된다.", tags: ["2021"] },
      { id: "kisou-2021", kanji: "競う", kana: "きそう", meaningKo: "경쟁하다, 겨루다", exampleJa: "選手たちが 実力を 競う。", exampleKo: "선수들이 실력을 겨룬다.", tags: ["2021"] },
      { id: "tsumoru-2021", kanji: "積もる", kana: "つもる", meaningKo: "쌓이다", exampleJa: "屋根に 雪が 積もった。", exampleKo: "지붕에 눈이 쌓였다.", tags: ["2021"] },
      { id: "yutaka-2021", kanji: "豊か", kana: "ゆたか", meaningKo: "풍요로움, 풍부함", exampleJa: "自然が 豊かな 土地だ。", exampleKo: "자연이 풍부한 땅이다.", tags: ["2021"] },

      { id: "azayaka-2020", kanji: "鮮やか", kana: "あざやか", meaningKo: "선명함, 또렷함", exampleJa: "鮮やかな 色の 花が 咲いた。", exampleKo: "선명한 색의 꽃이 피었다.", tags: ["2020"] },
      { id: "jissen-2020", kanji: "実践", kana: "じっせん", meaningKo: "실천", exampleJa: "学んだ ことを 実践する。", exampleKo: "배운 것을 실천한다.", tags: ["2020"] },
      { id: "ishoku-2020", kanji: "異色", kana: "いしょく", meaningKo: "이색적임", exampleJa: "彼は 異色の 経歴を 持つ。", exampleKo: "그는 이색적인 경력을 가지고 있다.", tags: ["2020"] },
      { id: "chijimeru-2020", kanji: "縮める", kana: "ちぢめる", meaningKo: "줄이다, 움츠리다", exampleJa: "作業の 時間を 縮める。", exampleKo: "작업 시간을 줄인다.", tags: ["2020"] },
      { id: "kisei-2020", kanji: "帰省", kana: "きせい", meaningKo: "귀성", exampleJa: "正月に 田舎へ 帰省する。", exampleKo: "설에 고향에 귀성한다.", tags: ["2020"] },

      { id: "isamashii-2019", kanji: "勇ましい", kana: "いさましい", meaningKo: "용감하다", exampleJa: "勇ましい 姿に 心を 打たれた。", exampleKo: "용감한 모습에 감동받았다.", tags: ["2019"] },
      { id: "kakuchou-2019", kanji: "拡張", kana: "かくちょう", meaningKo: "확장", exampleJa: "道路の 拡張 工事が 始まった。", exampleKo: "도로 확장 공사가 시작되었다.", tags: ["2019"] },
      { id: "son-2019", kanji: "損", kana: "そん", meaningKo: "손해", exampleJa: "その 取引で 損を した。", exampleKo: "그 거래에서 손해를 봤다.", tags: ["2019"] },
      { id: "youki-2019", kanji: "陽気", kana: "ようき", meaningKo: "명랑함", exampleJa: "彼女は 陽気な 性格だ。", exampleKo: "그녀는 명랑한 성격이다.", tags: ["2019"] },
      { id: "ihan-2019", kanji: "違反", kana: "いはん", meaningKo: "위반", exampleJa: "交通 規則に 違反する。", exampleKo: "교통 규칙을 위반한다.", tags: ["2019"] },
      { id: "koi-2019", kanji: "濃い", kana: "こい", meaningKo: "짙다, 진하다", exampleJa: "濃い コーヒーが 好きだ。", exampleKo: "진한 커피를 좋아한다.", tags: ["2019"] },
      { id: "majiru-2019", kanji: "混じる", kana: "まじる", meaningKo: "섞이다", exampleJa: "白に 少し 赤が 混じる。", exampleKo: "흰색에 조금 빨강이 섞인다.", tags: ["2019"] },
      { id: "engi-2019", kanji: "演技", kana: "えんぎ", meaningKo: "연기", exampleJa: "彼の 演技は とても 自然だ。", exampleKo: "그의 연기는 매우 자연스럽다.", tags: ["2019"] },
      { id: "shumi-2019", kanji: "趣味", kana: "しゅみ", meaningKo: "취미", exampleJa: "私の 趣味は 写真を 撮ることだ。", exampleKo: "내 취미는 사진 찍는 것이다.", tags: ["2019"] },
      { id: "minogasu-2019", kanji: "見逃す", kana: "みのがす", meaningKo: "못 보다, 놓치다", exampleJa: "大事な 場面を 見逃した。", exampleKo: "중요한 장면을 놓쳤다.", tags: ["2019"] },

      { id: "kaigo-2018", kanji: "介護", kana: "かいご", meaningKo: "간호, 간병", exampleJa: "高齢者の 介護を 手伝う。", exampleKo: "고령자 간병을 돕는다.", tags: ["2018"] },
      { id: "seisan-2018", kanji: "精算", kana: "せいさん", meaningKo: "정산", exampleJa: "旅費を あとで 精算する。", exampleKo: "여비를 나중에 정산한다.", tags: ["2018"] },
      { id: "hahen-2018", kanji: "破片", kana: "はへん", meaningKo: "파편", exampleJa: "ガラスの 破片に 気を つける。", exampleKo: "유리 파편을 조심한다.", tags: ["2018"] },
      { id: "yutaka-2018", kanji: "豊か", kana: "ゆたか", meaningKo: "풍요로움, 풍부함", exampleJa: "心の 豊かな 人に なりたい。", exampleKo: "마음이 풍요로운 사람이 되고 싶다.", tags: ["2018"] },
      { id: "keitou-2018", kanji: "系統", kana: "けいとう", meaningKo: "계통", exampleJa: "この 路線は 同じ 系統だ。", exampleKo: "이 노선은 같은 계통이다.", tags: ["2018"] },
      { id: "tabaneru-2018", kanji: "束ねる", kana: "たばねる", meaningKo: "묶다, 통솔하다", exampleJa: "髪を 一つに 束ねる。", exampleKo: "머리를 하나로 묶는다.", tags: ["2018"] },
      { id: "mukae-2018", kanji: "迎え", kana: "むかえ", meaningKo: "맞이, 마중", exampleJa: "駅まで 迎えに 行く。", exampleKo: "역까지 마중을 나간다.", tags: ["2018"] },
      { id: "keibi-2018", kanji: "警備", kana: "けいび", meaningKo: "경비", exampleJa: "建物の 警備を 強化する。", exampleKo: "건물 경비를 강화한다.", tags: ["2018"] },
      { id: "habuku-2018", kanji: "省く", kana: "はぶく", meaningKo: "줄이다, 생략하다", exampleJa: "無駄な 手間を 省く。", exampleKo: "쓸데없는 수고를 던다.", tags: ["2018"] },
      { id: "yashinau-2018", kanji: "養う", kana: "やしなう", meaningKo: "기르다", exampleJa: "家族を 養う ために 働く。", exampleKo: "가족을 부양하기 위해 일한다.", tags: ["2018"] },

      { id: "arai-2017", kanji: "荒い", kana: "あらい", meaningKo: "거칠다, 거세다", exampleJa: "今日は 波が 荒い。", exampleKo: "오늘은 파도가 거세다.", tags: ["2017"] },
      { id: "kooru-2017", kanji: "凍る", kana: "こおる", meaningKo: "얼다", exampleJa: "寒さで 池が 凍った。", exampleKo: "추위로 연못이 얼었다.", tags: ["2017"] },
      { id: "sukuu-2017", kanji: "救う", kana: "すくう", meaningKo: "구하다, 구제하다", exampleJa: "医者が 多くの 命を 救う。", exampleKo: "의사가 많은 생명을 구한다.", tags: ["2017"] },
      { id: "ryoushuusho-2017", kanji: "領収書", kana: "りょうしゅうしょ", meaningKo: "영수증", exampleJa: "お店で 領収書を もらう。", exampleKo: "가게에서 영수증을 받는다.", tags: ["2017"] },
      { id: "eikyuu-2017", kanji: "永久", kana: "えいきゅう", meaningKo: "영구, 영원", exampleJa: "この 建物は 永久に 残る だろう。", exampleKo: "이 건물은 영원히 남을 것이다.", tags: ["2017"] },
      { id: "zaiseki-2017", kanji: "在籍", kana: "ざいせき", meaningKo: "재적", exampleJa: "彼は その 大学に 在籍している。", exampleKo: "그는 그 대학에 재적하고 있다.", tags: ["2017"] },
      { id: "touron-2017", kanji: "討論", kana: "とうろん", meaningKo: "토론", exampleJa: "学生たちが 熱心に 討論する。", exampleKo: "학생들이 열심히 토론한다.", tags: ["2017"] },
      { id: "kouchou-2017", kanji: "好調", kana: "こうちょう", meaningKo: "호조, 순조, 좋은 상태임", exampleJa: "売り上げは 好調だ。", exampleKo: "매출은 호조다.", tags: ["2017"] },
      { id: "shitagau-2017", kanji: "従う", kana: "したがう", meaningKo: "따르다", exampleJa: "先生の 指示に 従う。", exampleKo: "선생님의 지시에 따른다.", tags: ["2017"] },
      { id: "fukushi-2017", kanji: "福祉", kana: "ふくし", meaningKo: "복지", exampleJa: "福祉 施設で ボランティアを する。", exampleKo: "복지 시설에서 봉사한다.", tags: ["2017"] },

      { id: "kanketsu-2016", kanji: "簡潔", kana: "かんけつ", meaningKo: "간결함", exampleJa: "要点を 簡潔に まとめる。", exampleKo: "요점을 간결하게 정리한다.", tags: ["2016"] },
      { id: "kokoroyoi-2016", kanji: "快い", kana: "こころよい", meaningKo: "유쾌하다, 즐겁다", exampleJa: "快い 返事を もらった。", exampleKo: "흔쾌한 대답을 받았다.", tags: ["2016"] },
      { id: "seizou-2016", kanji: "製造", kana: "せいぞう", meaningKo: "제조", exampleJa: "この 工場で 車を 製造する。", exampleKo: "이 공장에서 차를 제조한다.", tags: ["2016"] },
      { id: "moyooshi-2016", kanji: "催し", kana: "もよおし", meaningKo: "모임, 행사", exampleJa: "週末に 地域の 催しが ある。", exampleKo: "주말에 지역 행사가 있다.", tags: ["2016"] },
      { id: "kouka-2016", kanji: "硬貨", kana: "こうか", meaningKo: "금속화폐, 동전", exampleJa: "財布に 硬貨が たくさん ある。", exampleKo: "지갑에 동전이 많이 있다.", tags: ["2016"] },
      { id: "sanshou-2016", kanji: "参照", kana: "さんしょう", meaningKo: "참조", exampleJa: "詳しくは 資料を 参照して ください。", exampleKo: "자세한 것은 자료를 참조해 주세요.", tags: ["2016"] },
      { id: "hoshou-2016", kanji: "保証", kana: "ほしょう", meaningKo: "보증", exampleJa: "この 製品は 一年 保証が つく。", exampleKo: "이 제품은 1년 보증이 붙는다.", tags: ["2016"] },
      { id: "kogeru-2016", kanji: "焦げる", kana: "こげる", meaningKo: "타다, 눋다", exampleJa: "パンが 少し 焦げて しまった。", exampleKo: "빵이 조금 타 버렸다.", tags: ["2016"] },
      { id: "shoujou-2016", kanji: "症状", kana: "しょうじょう", meaningKo: "증상, 증세", exampleJa: "風邪の 症状が 出てきた。", exampleKo: "감기 증상이 나타났다.", tags: ["2016"] },
      { id: "maneku-2016", kanji: "招く", kana: "まねく", meaningKo: "초대하다, 부르다, 초래하다", exampleJa: "友人を 家に 招く。", exampleKo: "친구를 집에 초대한다.", tags: ["2016"] }
    ]
  },
  {
    id: "word-formation-past-2016-2023",
    title: "단어형성2023~2016",
    description: "2023년부터 2016년까지 연도별 단어형성(파생·복합어) 기출어휘.",
    sourceBatch: "word-formation-past-2026-07-01",
    jlptLevel: "N2",
    quizStyle: "reading",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
    words: [
      { id: "kabegiwa-2023", kanji: "壁際", kana: "かべぎわ", meaningKo: "벽가, 벽 옆", exampleJa: "壁際に 本棚を 置いた。", exampleKo: "벽가에 책장을 두었다.", tags: ["2023"] },
      { id: "nihonfuu-2023", kanji: "日本風", kana: "にほんふう", meaningKo: "일본풍", exampleJa: "日本風の 部屋に 泊まった。", exampleKo: "일본풍 방에 묵었다.", tags: ["2023"] },
      { id: "shotetsuzuki-2023", kanji: "諸手続き", kana: "しょてつづき", meaningKo: "여러 절차", exampleJa: "入学の 諸手続きを 済ませた。", exampleKo: "입학의 여러 절차를 마쳤다.", tags: ["2023"] },
      { id: "futarizure-2023", kanji: "二人連れ", kana: "ふたりづれ", meaningKo: "동행한 두 사람", exampleJa: "二人連れの 客が 店に 入ってきた。", exampleKo: "동행한 두 손님이 가게에 들어왔다.", tags: ["2023"] },
      { id: "teikoushin-2023", kanji: "抵抗心", kana: "ていこうしん", meaningKo: "저항심", exampleJa: "命令に 抵抗心を 感じる。", exampleKo: "명령에 저항심을 느낀다.", tags: ["2023"] },
      { id: "mukaitou-2023", kanji: "無回答", kana: "むかいとう", meaningKo: "무응답", exampleJa: "質問の 半分が 無回答だった。", exampleKo: "질문의 절반이 무응답이었다.", tags: ["2023"] },

      { id: "ibunya-2022", kanji: "異分野", kana: "いぶんや", meaningKo: "이분야, 다른 분야", exampleJa: "異分野の 専門家と 協力する。", exampleKo: "다른 분야의 전문가와 협력한다.", tags: ["2022"] },
      { id: "shashintsuki-2022", kanji: "写真付き", kana: "しゃしんつき", meaningKo: "사진 포함", exampleJa: "写真付きの 記事を 投稿した。", exampleKo: "사진이 포함된 기사를 올렸다.", tags: ["2022"] },
      { id: "kidantai-2022", kanji: "貴団体", kana: "きだんたい", meaningKo: "귀 단체", exampleJa: "貴団体の 活動に 感謝します。", exampleKo: "귀 단체의 활동에 감사드립니다.", tags: ["2022"] },
      { id: "teikakaku-2022", kanji: "低価格", kana: "ていかかく", meaningKo: "낮은 가격", exampleJa: "この 店は 低価格で 人気だ。", exampleKo: "이 가게는 낮은 가격으로 인기다.", tags: ["2022"] },
      { id: "genseido-2022", kanji: "現制度", kana: "げんせいど", meaningKo: "현 제도", exampleJa: "現制度には 問題が 多い。", exampleKo: "현 제도에는 문제가 많다.", tags: ["2022"] },
      { id: "youjinbukai-2022", kanji: "用心深い", kana: "ようじんぶかい", meaningKo: "신중하다", exampleJa: "彼は 用心深い 性格だ。", exampleKo: "그는 신중한 성격이다.", tags: ["2022"] },

      { id: "karitouroku-2021", kanji: "仮登録", kana: "かりとうろく", meaningKo: "임시 등록", exampleJa: "まず 仮登録を 済ませて ください。", exampleKo: "우선 임시 등록을 마쳐 주세요.", tags: ["2021"] },
      { id: "douiken-2021", kanji: "同意見", kana: "どういけん", meaningKo: "같은 의견", exampleJa: "私も 彼と 同意見だ。", exampleKo: "나도 그와 같은 의견이다.", tags: ["2021"] },
      { id: "genshachou-2021", kanji: "現社長", kana: "げんしゃちょう", meaningKo: "현 사장", exampleJa: "現社長は 十年 会社を 率いている。", exampleKo: "현 사장은 10년간 회사를 이끌고 있다.", tags: ["2021"] },
      { id: "betsukaijou-2021", kanji: "別会場", kana: "べつかいじょう", meaningKo: "다른 회장", exampleJa: "受付は 別会場で 行う。", exampleKo: "접수는 다른 회장에서 진행한다.", tags: ["2021"] },
      { id: "tabegoro-2021", kanji: "食べ頃", kana: "たべごろ", meaningKo: "먹기에 적당한 때", exampleJa: "この 桃は 今が 食べ頃だ。", exampleKo: "이 복숭아는 지금이 먹기에 적당한 때다.", tags: ["2021"] },
      { id: "boorujou-2021", kanji: "ボール状", kana: "ボールじょう", meaningKo: "공 형태, 둥근 모양", exampleJa: "生地を ボール状に 丸める。", exampleKo: "반죽을 공 모양으로 둥글린다.", tags: ["2021"] },

      { id: "saiteishutsu-2020", kanji: "再提出", kana: "さいていしゅつ", meaningKo: "재제출", exampleJa: "書類を 修正して 再提出した。", exampleKo: "서류를 수정해서 재제출했다.", tags: ["2020"] },
      { id: "tokaisodachi-2020", kanji: "都会育ち", kana: "とかいそだち", meaningKo: "도시에서 자람", exampleJa: "彼女は 都会育ちだ。", exampleKo: "그녀는 도시에서 자랐다.", tags: ["2020"] },
      { id: "hitoshigoto-2020", kanji: "一仕事", kana: "ひとしごと", meaningKo: "조금 일을 함", exampleJa: "朝の うちに 一仕事 終えた。", exampleKo: "아침 사이에 일을 한바탕 끝냈다.", tags: ["2020"] },

      { id: "akueikyou-2019", kanji: "悪影響", kana: "あくえいきょう", meaningKo: "악영향", exampleJa: "睡眠不足は 健康に 悪影響を 与える。", exampleKo: "수면 부족은 건강에 악영향을 준다.", tags: ["2019"] },
      { id: "zenchouchou-2019", kanji: "前町長", kana: "ぜんちょうちょう", meaningKo: "전 마을(정) 대표", exampleJa: "前町長が 式に 出席した。", exampleKo: "전 정장(마을 대표)이 식에 참석했다.", tags: ["2019"] },
      { id: "amerikaryuu-2019", kanji: "アメリカ流", kana: "アメリカりゅう", meaningKo: "미국식", exampleJa: "アメリカ流の 経営を 取り入れる。", exampleKo: "미국식 경영을 도입한다.", tags: ["2019"] },
      { id: "tanomizurai-2019", kanji: "頼みづらい", kana: "たのみづらい", meaningKo: "부탁하기 곤란하다", exampleJa: "忙しそうで 頼みづらい。", exampleKo: "바빠 보여서 부탁하기 곤란하다.", tags: ["2019"] },
      { id: "seijishoku-2019", kanji: "政治色", kana: "せいじしょく", meaningKo: "정치색", exampleJa: "政治色の 強い 発言だった。", exampleKo: "정치색이 강한 발언이었다.", tags: ["2019"] },
      { id: "wakaregiwa-2019", kanji: "別れ際", kana: "わかれぎわ", meaningKo: "헤어질 때", exampleJa: "別れ際に 彼は 笑った。", exampleKo: "헤어질 때 그는 웃었다.", tags: ["2019"] },

      { id: "gakunenbetsu-2018", kanji: "学年別", kana: "がくねんべつ", meaningKo: "학년별", exampleJa: "学年別に 教室を 分ける。", exampleKo: "학년별로 교실을 나눈다.", tags: ["2018"] },
      { id: "soushinmoto-2018", kanji: "送信元", kana: "そうしんもと", meaningKo: "송신인, 발신지", exampleJa: "メールの 送信元を 確認する。", exampleKo: "메일의 발신지를 확인한다.", tags: ["2018"] },
      { id: "mukeikaku-2018", kanji: "無計画", kana: "むけいかく", meaningKo: "무계획", exampleJa: "無計画な 旅行も 楽しい。", exampleKo: "무계획한 여행도 즐겁다.", tags: ["2018"] },
      { id: "shingakuritsu-2018", kanji: "進学率", kana: "しんがくりつ", meaningKo: "진학률", exampleJa: "この 高校は 進学率が 高い。", exampleKo: "이 고교는 진학률이 높다.", tags: ["2018"] },
      { id: "hatarakite-2018", kanji: "働き手", kana: "はたらきて", meaningKo: "일꾼, 일손", exampleJa: "農村では 働き手が 足りない。", exampleKo: "농촌에서는 일손이 부족하다.", tags: ["2018"] },
      { id: "raigakki-2018", kanji: "来学期", kana: "らいがっき", meaningKo: "다음 학기", exampleJa: "来学期から 新しい 授業が 始まる。", exampleKo: "다음 학기부터 새 수업이 시작된다.", tags: ["2018"] },
      { id: "sukiijou-2018", kanji: "スキー場", kana: "スキーじょう", meaningKo: "스키장", exampleJa: "冬に 家族で スキー場へ 行く。", exampleKo: "겨울에 가족과 스키장에 간다.", tags: ["2018"] },
      { id: "fukudaijin-2018", kanji: "副大臣", kana: "ふくだいじん", meaningKo: "부대신, 부장관", exampleJa: "副大臣が 会見を 開いた。", exampleKo: "부장관이 회견을 열었다.", tags: ["2018"] },

      { id: "kaiinsei-2017", kanji: "会員制", kana: "かいいんせい", meaningKo: "회원제", exampleJa: "この クラブは 会員制だ。", exampleKo: "이 클럽은 회원제다.", tags: ["2017"] },
      { id: "juutakugai-2017", kanji: "住宅街", kana: "じゅうたくがい", meaningKo: "주택가", exampleJa: "静かな 住宅街に 住んでいる。", exampleKo: "조용한 주택가에 살고 있다.", tags: ["2017"] },
      { id: "zenshachou-2017", kanji: "前社長", kana: "ぜんしゃちょう", meaningKo: "전 사장", exampleJa: "前社長が 会社を 設立した。", exampleKo: "전 사장이 회사를 설립했다.", tags: ["2017"] },
      { id: "maushiro-2017", kanji: "真後ろ", kana: "まうしろ", meaningKo: "바로 뒤", exampleJa: "私の 真後ろに 彼が 座った。", exampleKo: "내 바로 뒤에 그가 앉았다.", tags: ["2017"] },
      { id: "kaishainfuu-2017", kanji: "会社員風", kana: "かいしゃいんふう", meaningKo: "회사원 같음, 회사원풍", exampleJa: "会社員風の 男性が 現れた。", exampleKo: "회사원 같은 남성이 나타났다.", tags: ["2017"] },
      { id: "shogaikoku-2017", kanji: "諸外国", kana: "しょがいこく", meaningKo: "여러 외국", exampleJa: "諸外国の 例を 参考に する。", exampleKo: "여러 외국의 사례를 참고한다.", tags: ["2017"] },
      { id: "teikarorii-2017", kanji: "低カロリー", kana: "ていカロリー", meaningKo: "저칼로리", exampleJa: "低カロリーの 食事を 選ぶ。", exampleKo: "저칼로리 식사를 고른다.", tags: ["2017"] },
      { id: "kazokuzure-2017", kanji: "家族連れ", kana: "かぞくづれ", meaningKo: "가족 동반", exampleJa: "公園は 家族連れで にぎわう。", exampleKo: "공원은 가족 동반객으로 붐빈다.", tags: ["2017"] },
      { id: "shonendo-2017", kanji: "初年度", kana: "しょねんど", meaningKo: "초년도, 첫 해", exampleJa: "初年度の 売り上げは 好調だ。", exampleKo: "첫 해 매출은 호조다.", tags: ["2017"] },
      { id: "fuseikaku-2017", kanji: "不正確", kana: "ふせいかく", meaningKo: "부정확함", exampleJa: "不正確な 情報を 流しては いけない。", exampleKo: "부정확한 정보를 흘려서는 안 된다.", tags: ["2017"] },

      { id: "ibunka-2016", kanji: "異文化", kana: "いぶんか", meaningKo: "이문화", exampleJa: "異文化の 交流を 深める。", exampleKo: "이문화 교류를 깊게 한다.", tags: ["2016"] },
      { id: "kousuijun-2016", kanji: "高水準", kana: "こうすいじゅん", meaningKo: "높은 수준", exampleJa: "この 製品は 高水準の 品質だ。", exampleKo: "이 제품은 높은 수준의 품질이다.", tags: ["2016"] },
      { id: "nihonshiki-2016", kanji: "日本式", kana: "にほんしき", meaningKo: "일본식", exampleJa: "日本式の 挨拶を 学ぶ。", exampleKo: "일본식 인사를 배운다.", tags: ["2016"] },
      { id: "mishiyou-2016", kanji: "未使用", kana: "みしよう", meaningKo: "미사용", exampleJa: "未使用の 切手を 集める。", exampleKo: "미사용 우표를 모은다.", tags: ["2016"] },
      { id: "kekkonkan-2016", kanji: "結婚観", kana: "けっこんかん", meaningKo: "결혼관", exampleJa: "世代で 結婚観が 異なる。", exampleKo: "세대별로 결혼관이 다르다.", tags: ["2016"] },
      { id: "shuseibun-2016", kanji: "主成分", kana: "しゅせいぶん", meaningKo: "주성분", exampleJa: "この 薬の 主成分は 何ですか。", exampleKo: "이 약의 주성분은 무엇입니까.", tags: ["2016"] },
      { id: "benkyouzuke-2016", kanji: "勉強漬け", kana: "べんきょうづけ", meaningKo: "공부에 열중임", exampleJa: "受験生は 毎日 勉強漬けだ。", exampleKo: "수험생은 매일 공부에 파묻혀 있다.", tags: ["2016"] },
      { id: "kanrika-2016", kanji: "管理下", kana: "かんりか", meaningKo: "관리하", exampleJa: "工事は 専門家の 管理下で 進む。", exampleKo: "공사는 전문가의 관리하에 진행된다.", tags: ["2016"] },
      { id: "saikaihatsu-2016", kanji: "再開発", kana: "さいかいはつ", meaningKo: "재개발", exampleJa: "駅前の 再開発が 始まった。", exampleKo: "역 앞 재개발이 시작되었다.", tags: ["2016"] },
      { id: "nendaijun-2016", kanji: "年代順", kana: "ねんだいじゅん", meaningKo: "연대순", exampleJa: "写真を 年代順に 並べる。", exampleKo: "사진을 연대순으로 배열한다.", tags: ["2016"] }
    ]
  },
  {
    id: "context-past-2016-2023",
    title: "문맥규정2023~2016",
    description: "2023년부터 2016년까지 연도별 문맥규정 기출어휘.",
    sourceBatch: "context-past-2026-07-01",
    jlptLevel: "N2",
    quizStyle: "reading",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
    words: [
      { id: "kasakasa-2023", kanji: "かさかさ", meaningKo: "꺼칠꺼칠, 바삭바삭", exampleJa: "冬は 肌が かさかさに なる。", exampleKo: "겨울엔 피부가 꺼칠꺼칠해진다.", tags: ["2023"] },
      { id: "kouchou-2023", kanji: "好調", kana: "こうちょう", meaningKo: "호조, 순조", exampleJa: "仕事は 好調に 進んでいる。", exampleKo: "일은 순조롭게 진행되고 있다.", tags: ["2023"] },
      { id: "setsuyaku-2023", kanji: "節約", kana: "せつやく", meaningKo: "절약", exampleJa: "電気を 節約する。", exampleKo: "전기를 절약한다.", tags: ["2023"] },
      { id: "tobitsuku-2023", kanji: "飛びつく", kana: "とびつく", meaningKo: "달려들다", exampleJa: "子どもが お菓子に 飛びついた。", exampleKo: "아이가 과자에 달려들었다.", tags: ["2023"] },
      { id: "rihaasaru-2023", kanji: "リハーサル", meaningKo: "리허설", exampleJa: "本番前に リハーサルを 行う。", exampleKo: "본방 전에 리허설을 한다.", tags: ["2023"] },
      { id: "kyuujin-2023", kanji: "求人", kana: "きゅうじん", meaningKo: "구인", exampleJa: "求人の 情報を 探す。", exampleKo: "구인 정보를 찾는다.", tags: ["2023"] },
      { id: "gokai-2023", kanji: "誤解", kana: "ごかい", meaningKo: "오해", exampleJa: "言葉足らずで 誤解を 招いた。", exampleKo: "말이 부족해서 오해를 샀다.", tags: ["2023"] },
      { id: "tanomoshii-2023", kanji: "頼もしい", kana: "たのもしい", meaningKo: "믿음직하다", exampleJa: "彼は とても 頼もしい 存在だ。", exampleKo: "그는 매우 믿음직한 존재다.", tags: ["2023"] },
      { id: "maneru-2023", kanji: "まねる", meaningKo: "흉내 내다", exampleJa: "子どもは 親を まねる。", exampleKo: "아이는 부모를 흉내 낸다.", tags: ["2023"] },
      { id: "wadai-2023", kanji: "話題", kana: "わだい", meaningKo: "화제", exampleJa: "その 映画が 話題に なっている。", exampleKo: "그 영화가 화제가 되고 있다.", tags: ["2023"] },
      { id: "koukai-2023", kanji: "後悔", kana: "こうかい", meaningKo: "후회", exampleJa: "今さら 後悔しても 遅い。", exampleKo: "이제 와서 후회해도 늦다.", tags: ["2023"] },
      { id: "kosokoso-2023", kanji: "こそこそ", meaningKo: "소곤소곤", exampleJa: "二人で こそこそ 話している。", exampleKo: "둘이서 소곤소곤 이야기하고 있다.", tags: ["2023"] },
      { id: "tokutei-2023", kanji: "特定", kana: "とくてい", meaningKo: "특정", exampleJa: "原因を 特定するのは 難しい。", exampleKo: "원인을 특정하기는 어렵다.", tags: ["2023"] },
      { id: "moriagaru-2023", kanji: "盛り上がる", kana: "もりあがる", meaningKo: "고조되다", exampleJa: "パーティーが 大いに 盛り上がった。", exampleKo: "파티가 크게 고조되었다.", tags: ["2023"] },

      { id: "idaku-2022", kanji: "抱く", kana: "いだく", meaningKo: "품다", exampleJa: "将来に 希望を 抱く。", exampleKo: "미래에 희망을 품는다.", tags: ["2022"] },
      { id: "gisshiri-2022", kanji: "ぎっしり", meaningKo: "가득 찬 모양, 잔뜩", exampleJa: "箱に 本が ぎっしり 詰まっている。", exampleKo: "상자에 책이 가득 차 있다.", tags: ["2022"] },
      { id: "gekitekini-2022", kanji: "劇的に", kana: "げきてきに", meaningKo: "극적으로", exampleJa: "状況が 劇的に 変わった。", exampleKo: "상황이 극적으로 바뀌었다.", tags: ["2022"] },
      { id: "shinshutsu-2022", kanji: "進出", kana: "しんしゅつ", meaningKo: "진출", exampleJa: "会社が 海外に 進出する。", exampleKo: "회사가 해외에 진출한다.", tags: ["2022"] },
      { id: "zorozoro-2022", kanji: "ぞろぞろ", meaningKo: "졸졸, 줄줄(많은 사람이 잇달아 움직이는 모양)", exampleJa: "観客が ぞろぞろ 出てきた。", exampleKo: "관객이 줄줄이 나왔다.", tags: ["2022"] },
      { id: "ihan-2022c", kanji: "違反", kana: "いはん", meaningKo: "위반", exampleJa: "規則に 違反する。", exampleKo: "규칙을 위반한다.", tags: ["2022"] },
      { id: "kujou-2022", kanji: "苦情", kana: "くじょう", meaningKo: "불만, 고충", exampleJa: "客から 苦情が 来た。", exampleKo: "손님에게서 불만이 들어왔다.", tags: ["2022"] },
      { id: "koushou-2022", kanji: "交渉", kana: "こうしょう", meaningKo: "교섭", exampleJa: "価格について 交渉する。", exampleKo: "가격에 대해 교섭한다.", tags: ["2022"] },
      { id: "setsuzoku-2022", kanji: "接続", kana: "せつぞく", meaningKo: "접속", exampleJa: "ネットに 接続できない。", exampleKo: "인터넷에 접속할 수 없다.", tags: ["2022"] },
      { id: "otoru-2022c", kanji: "劣る", kana: "おとる", meaningKo: "(능력이) 떨어지다", exampleJa: "品質が 他社に 劣る。", exampleKo: "품질이 타사에 떨어진다.", tags: ["2022"] },
      { id: "kuria-2022", kanji: "クリア", meaningKo: "통과하다, 헤쳐나가다", exampleJa: "難しい 課題を クリアした。", exampleKo: "어려운 과제를 통과했다.", tags: ["2022"] },
      { id: "shimekiru-2022", kanji: "締め切る", kana: "しめきる", meaningKo: "마감하다", exampleJa: "応募を 今日で 締め切る。", exampleKo: "응모를 오늘로 마감한다.", tags: ["2022"] },
      { id: "setsubi-2022", kanji: "設備", kana: "せつび", meaningKo: "설비", exampleJa: "この 工場は 設備が 新しい。", exampleKo: "이 공장은 설비가 새롭다.", tags: ["2022"] },
      { id: "mareda-2022", kanji: "まれだ", meaningKo: "드물다", exampleJa: "こんな 大雪は まれだ。", exampleKo: "이런 폭설은 드물다.", tags: ["2022"] },

      { id: "omoikitte-2021", kanji: "思いきって", kana: "おもいきって", meaningKo: "과감히, 큰맘 먹고", exampleJa: "思いきって 新車を 買った。", exampleKo: "큰맘 먹고 새 차를 샀다.", tags: ["2021"] },
      { id: "katameru-2021", kanji: "固める", kana: "かためる", meaningKo: "굳히다", exampleJa: "決意を 固める。", exampleKo: "결의를 굳힌다.", tags: ["2021"] },
      { id: "girigiri-2021", kanji: "ぎりぎり", meaningKo: "아슬아슬함, 빠듯함", exampleJa: "ぎりぎりで 電車に 間に合った。", exampleKo: "아슬아슬하게 전철을 탔다.", tags: ["2021"] },
      { id: "jirojiro-2021", kanji: "じろじろ", meaningKo: "빤히, 유심히", exampleJa: "人を じろじろ 見るのは 失礼だ。", exampleKo: "남을 빤히 쳐다보는 것은 실례다.", tags: ["2021"] },
      { id: "niizu-2021", kanji: "ニーズ", meaningKo: "요구", exampleJa: "顧客の ニーズに 応える。", exampleKo: "고객의 요구에 부응한다.", tags: ["2021"] },
      { id: "kaisetsu-2021", kanji: "開設", kana: "かいせつ", meaningKo: "개설", exampleJa: "新しい 口座を 開設する。", exampleKo: "새 계좌를 개설한다.", tags: ["2021"] },
      { id: "kakkou-2021", kanji: "格好", kana: "かっこう", meaningKo: "모습, 행색", exampleJa: "変な 格好で 出かける。", exampleKo: "이상한 행색으로 외출한다.", tags: ["2021"] },
      { id: "genkai-2021", kanji: "限界", kana: "げんかい", meaningKo: "한계", exampleJa: "体力の 限界を 感じる。", exampleKo: "체력의 한계를 느낀다.", tags: ["2021"] },
      { id: "taimingu-2021", kanji: "タイミング", meaningKo: "타이밍", exampleJa: "話す タイミングを 逃した。", exampleKo: "말할 타이밍을 놓쳤다.", tags: ["2021"] },
      { id: "yatou-2021", kanji: "雇う", kana: "やとう", meaningKo: "고용하다", exampleJa: "新しい 店員を 雇う。", exampleKo: "새 점원을 고용한다.", tags: ["2021"] },
      { id: "kaiyaku-2021", kanji: "解約", kana: "かいやく", meaningKo: "해약", exampleJa: "契約を 解約する。", exampleKo: "계약을 해약한다.", tags: ["2021"] },
      { id: "kigaruni-2021", kanji: "気軽に", kana: "きがるに", meaningKo: "선뜻, 가벼운 마음으로", exampleJa: "気軽に 相談して ください。", exampleKo: "부담 없이 상담해 주세요.", tags: ["2021"] },
      { id: "joushou-2021", kanji: "上昇", kana: "じょうしょう", meaningKo: "상승", exampleJa: "気温が 上昇する。", exampleKo: "기온이 상승한다.", tags: ["2021"] },
      { id: "tenpu-2021", kanji: "添付", kana: "てんぷ", meaningKo: "첨부", exampleJa: "メールに 資料を 添付する。", exampleKo: "메일에 자료를 첨부한다.", tags: ["2021"] },

      { id: "arasou-2020", kanji: "争う", kana: "あらそう", meaningKo: "다투다, 경쟁하다", exampleJa: "一位を 争う。", exampleKo: "1위를 다툰다.", tags: ["2020"] },
      { id: "sonchou-2020", kanji: "尊重", kana: "そんちょう", meaningKo: "존중", exampleJa: "相手の 意見を 尊重する。", exampleKo: "상대의 의견을 존중한다.", tags: ["2020"] },
      { id: "hyouka-2020", kanji: "評価", kana: "ひょうか", meaningKo: "평가", exampleJa: "努力が 高く 評価された。", exampleKo: "노력이 높이 평가받았다.", tags: ["2020"] },
      { id: "iikagen-2020", kanji: "いいかげん", meaningKo: "건성임, 무책임함", exampleJa: "いいかげんな 返事を するな。", exampleKo: "무책임한 대답을 하지 마라.", tags: ["2020"] },
      { id: "taagetto-2020", kanji: "ターゲット", meaningKo: "타겟, 표적, 대상", exampleJa: "若者を ターゲットに した 商品だ。", exampleKo: "젊은이를 대상으로 한 상품이다.", tags: ["2020"] },
      { id: "kehai-2020", kanji: "気配", kana: "けはい", meaningKo: "기색, 기미", exampleJa: "誰かが いる 気配が した。", exampleKo: "누군가 있는 기색이 났다.", tags: ["2020"] },
      { id: "dokutoku-2020", kanji: "独特", kana: "どくとく", meaningKo: "독특함", exampleJa: "彼には 独特の 魅力が ある。", exampleKo: "그에게는 독특한 매력이 있다.", tags: ["2020"] },

      { id: "aimai-2019", kanji: "あいまい", meaningKo: "애매함", exampleJa: "あいまいな 返事で 困る。", exampleKo: "애매한 대답에 곤란하다.", tags: ["2019"] },
      { id: "otoroeru-2019", kanji: "衰える", kana: "おとろえる", meaningKo: "쇠약해지다, 쇠퇴하다", exampleJa: "年とともに 体力が 衰える。", exampleKo: "나이가 들며 체력이 쇠약해진다.", tags: ["2019"] },
      { id: "saibai-2019", kanji: "栽培", kana: "さいばい", meaningKo: "재배", exampleJa: "野菜を 栽培する。", exampleKo: "채소를 재배한다.", tags: ["2019"] },
      { id: "fusawashii-2019", kanji: "ふさわしい", meaningKo: "적합하다, 어울리다", exampleJa: "場に ふさわしい 服装を する。", exampleKo: "자리에 어울리는 복장을 한다.", tags: ["2019"] },
      { id: "honmono-2019", kanji: "本物", kana: "ほんもの", meaningKo: "진짜, 실물", exampleJa: "これは 本物の 宝石だ。", exampleKo: "이것은 진짜 보석이다.", tags: ["2019"] },
      { id: "akogare-2019", kanji: "あこがれ", meaningKo: "동경", exampleJa: "都会の 生活に あこがれを 抱く。", exampleKo: "도시 생활에 동경을 품는다.", tags: ["2019"] },
      { id: "gochagocha-2019", kanji: "ごちゃごちゃ", meaningKo: "어지러이 뒤섞임, 너저분한 모양", exampleJa: "机の 上が ごちゃごちゃだ。", exampleKo: "책상 위가 너저분하다.", tags: ["2019"] },
      { id: "tenkin-2019", kanji: "転勤", kana: "てんきん", meaningKo: "전근", exampleJa: "父が 大阪へ 転勤に なった。", exampleKo: "아버지가 오사카로 전근하게 되었다.", tags: ["2019"] },
      { id: "puresshaa-2019", kanji: "プレッシャー", meaningKo: "압력", exampleJa: "試験の プレッシャーに 負けない。", exampleKo: "시험의 압박에 지지 않는다.", tags: ["2019"] },
      { id: "mendou-2019", kanji: "面倒", kana: "めんどう", meaningKo: "귀찮음, 번거로움", exampleJa: "手続きが 面倒だ。", exampleKo: "절차가 번거롭다.", tags: ["2019"] },
      { id: "unazuku-2019", kanji: "うなずく", meaningKo: "수긍하다, 고개를 끄덕이다", exampleJa: "彼は 黙って うなずいた。", exampleKo: "그는 말없이 고개를 끄덕였다.", tags: ["2019"] },
      { id: "fuantei-2019", kanji: "不安定", kana: "ふあんてい", meaningKo: "불안정함", exampleJa: "天気が 不安定だ。", exampleKo: "날씨가 불안정하다.", tags: ["2019"] },
      { id: "buntan-2019", kanji: "分担", kana: "ぶんたん", meaningKo: "분담", exampleJa: "家事を 分担する。", exampleKo: "집안일을 분담한다.", tags: ["2019"] },
      { id: "yudan-2019", kanji: "油断", kana: "ゆだん", meaningKo: "방심, 부주의", exampleJa: "最後まで 油断しては いけない。", exampleKo: "끝까지 방심해서는 안 된다.", tags: ["2019"] },

      { id: "arenji-2018", kanji: "アレンジ", meaningKo: "어레인지, 변형, 각색", exampleJa: "曲を 自分流に アレンジする。", exampleKo: "곡을 자기 식으로 편곡한다.", tags: ["2018"] },
      { id: "supeesu-2018", kanji: "スペース", meaningKo: "공간", exampleJa: "荷物を 置く スペースが ない。", exampleKo: "짐을 둘 공간이 없다.", tags: ["2018"] },
      { id: "chakuchakuto-2018", kanji: "着々と", kana: "ちゃくちゃくと", meaningKo: "착착, 척척", exampleJa: "準備が 着々と 進む。", exampleKo: "준비가 착착 진행된다.", tags: ["2018"] },
      { id: "dokutoku-2018", kanji: "独特", kana: "どくとく", meaningKo: "독특함", exampleJa: "この 料理は 独特な 香りが する。", exampleKo: "이 요리는 독특한 향이 난다.", tags: ["2018"] },
      { id: "hakki-2018", kanji: "発揮", kana: "はっき", meaningKo: "발휘", exampleJa: "実力を 十分に 発揮する。", exampleKo: "실력을 충분히 발휘한다.", tags: ["2018"] },
      { id: "kakasu-2018", kanji: "欠かす", kana: "かかす", meaningKo: "빠뜨리다, 빼먹다", exampleJa: "毎日の 練習を 欠かさない。", exampleKo: "매일 연습을 거르지 않는다.", tags: ["2018"] },
      { id: "zokushutsu-2018", kanji: "続出", kana: "ぞくしゅつ", meaningKo: "속출", exampleJa: "事故が 続出する。", exampleKo: "사고가 속출한다.", tags: ["2018"] },
      { id: "detarameni-2018", kanji: "でたらめに", meaningKo: "엉터리로, 아무렇게나", exampleJa: "でたらめに 答えては いけない。", exampleKo: "엉터리로 답해서는 안 된다.", tags: ["2018"] },
      { id: "tobichiru-2018", kanji: "飛び散る", kana: "とびちる", meaningKo: "흩날리다", exampleJa: "火花が 飛び散る。", exampleKo: "불꽃이 흩날린다.", tags: ["2018"] },
      { id: "binkan-2018", kanji: "敏感", kana: "びんかん", meaningKo: "민감함", exampleJa: "肌が 敏感だ。", exampleKo: "피부가 민감하다.", tags: ["2018"] },
      { id: "jimoto-2018", kanji: "地元", kana: "じもと", meaningKo: "그 지역, 그 고장, 연고지", exampleJa: "地元の 祭りに 参加する。", exampleKo: "고향의 축제에 참가한다.", tags: ["2018"] },
      { id: "tassuru-2018", kanji: "達する", kana: "たっする", meaningKo: "이르다, 도달하다", exampleJa: "気温が 三十度に 達する。", exampleKo: "기온이 30도에 이른다.", tags: ["2018"] },
      { id: "tenken-2018", kanji: "点検", kana: "てんけん", meaningKo: "점검", exampleJa: "車を 定期的に 点検する。", exampleKo: "차를 정기적으로 점검한다.", tags: ["2018"] },
      { id: "nikkori-2018", kanji: "にっこり", meaningKo: "빙긋이", exampleJa: "彼女は にっこり 笑った。", exampleKo: "그녀는 빙긋이 웃었다.", tags: ["2018"] },

      { id: "apiiru-2017", kanji: "アピール", meaningKo: "어필, 호소", exampleJa: "自分の 長所を アピールする。", exampleKo: "자신의 장점을 어필한다.", tags: ["2017"] },
      { id: "kakuho-2017", kanji: "確保", kana: "かくほ", meaningKo: "확보", exampleJa: "席を 確保する。", exampleKo: "자리를 확보한다.", tags: ["2017"] },
      { id: "kuyamu-2017", kanji: "悔やむ", kana: "くやむ", meaningKo: "후회하다, 애석하게 여기다", exampleJa: "過去を 悔やんでも 仕方ない。", exampleKo: "과거를 후회해도 소용없다.", tags: ["2017"] },
      { id: "baransu-2017", kanji: "バランス", meaningKo: "밸런스, 균형", exampleJa: "栄養の バランスを 考える。", exampleKo: "영양의 균형을 생각한다.", tags: ["2017"] },
      { id: "meisho-2017", kanji: "名所", kana: "めいしょ", meaningKo: "명소", exampleJa: "京都は 観光の 名所だ。", exampleKo: "교토는 관광 명소다.", tags: ["2017"] },
      { id: "uchikesu-2017", kanji: "打ち消す", kana: "うちけす", meaningKo: "부정하다", exampleJa: "うわさを 打ち消す。", exampleKo: "소문을 부정한다.", tags: ["2017"] },
      { id: "girigiri-2017", kanji: "ぎりぎり", meaningKo: "아슬아슬함, 빠듯함", exampleJa: "締め切り ぎりぎりに 提出した。", exampleKo: "마감 아슬아슬하게 제출했다.", tags: ["2017"] },
      { id: "keiki-2017", kanji: "契機", kana: "けいき", meaningKo: "계기", exampleJa: "留学を 契機に 成長した。", exampleKo: "유학을 계기로 성장했다.", tags: ["2017"] },
      { id: "hisohiso-2017", kanji: "ひそひそ", meaningKo: "소곤소곤", exampleJa: "隅で ひそひそ 話す。", exampleKo: "구석에서 소곤소곤 이야기한다.", tags: ["2017"] },
      { id: "yuuri-2017", kanji: "有利", kana: "ゆうり", meaningKo: "유리함", exampleJa: "経験者が 有利だ。", exampleKo: "경험자가 유리하다.", tags: ["2017"] },
      { id: "odayaka-2017", kanji: "穏やか", kana: "おだやか", meaningKo: "온화함", exampleJa: "穏やかな 天気が 続く。", exampleKo: "온화한 날씨가 이어진다.", tags: ["2017"] },
      { id: "kujou-2017", kanji: "苦情", kana: "くじょう", meaningKo: "불평, 불만", exampleJa: "騒音の 苦情を 言う。", exampleKo: "소음에 대한 불평을 말한다.", tags: ["2017"] },
      { id: "sosokkashii-2017", kanji: "そそっかしい", meaningKo: "경솔하다, 덜렁대다", exampleJa: "彼は そそっかしくて よく 忘れる。", exampleKo: "그는 덜렁대서 자주 잊는다.", tags: ["2017"] },
      { id: "houfuni-2017", kanji: "豊富に", kana: "ほうふに", meaningKo: "풍부하게, 풍족하게", exampleJa: "資源が 豊富に ある。", exampleKo: "자원이 풍부하게 있다.", tags: ["2017"] },

      { id: "anni-2016", kanji: "安易", kana: "あんい", meaningKo: "손쉬움, 안이함", exampleJa: "安易な 考えは 危険だ。", exampleKo: "안이한 생각은 위험하다.", tags: ["2016"] },
      { id: "jama-2016", kanji: "邪魔", kana: "じゃま", meaningKo: "방해, 거추장스러움", exampleJa: "勉強の 邪魔を しないで。", exampleKo: "공부를 방해하지 마.", tags: ["2016"] },
      { id: "tanomoshii-2016", kanji: "たのもしい", meaningKo: "믿음직하다, 기대할 만하다", exampleJa: "若いのに たのもしい 青年だ。", exampleKo: "젊은데도 믿음직한 청년이다.", tags: ["2016"] },
      { id: "nonbiri-2016", kanji: "のんびり", meaningKo: "느긋함, 태평함", exampleJa: "休日は 家で のんびり 過ごす。", exampleKo: "휴일은 집에서 느긋하게 보낸다.", tags: ["2016"] },
      { id: "riidaa-2016", kanji: "リーダー", meaningKo: "리더, 지도자", exampleJa: "彼が チームの リーダーだ。", exampleKo: "그가 팀의 리더다.", tags: ["2016"] },
      { id: "kappatsu-2016", kanji: "活発", kana: "かっぱつ", meaningKo: "활발함", exampleJa: "議論が 活発に 行われた。", exampleKo: "토론이 활발하게 진행되었다.", tags: ["2016"] },
      { id: "shuukaku-2016", kanji: "収穫", kana: "しゅうかく", meaningKo: "수확", exampleJa: "秋に 米を 収穫する。", exampleKo: "가을에 쌀을 수확한다.", tags: ["2016"] },
      { id: "teikyou-2016", kanji: "提供", kana: "ていきょう", meaningKo: "제공", exampleJa: "情報を 無料で 提供する。", exampleKo: "정보를 무료로 제공한다.", tags: ["2016"] },
      { id: "hikitomeru-2016", kanji: "引き止める", kana: "ひきとめる", meaningKo: "말리다, 붙잡다", exampleJa: "帰る 彼を 引き止めた。", exampleKo: "돌아가는 그를 붙잡았다.", tags: ["2016"] },
      { id: "warikomu-2016", kanji: "割り込む", kana: "わりこむ", meaningKo: "끼어들다, 새치기하다", exampleJa: "列に 割り込む。", exampleKo: "줄에 새치기한다.", tags: ["2016"] },
      { id: "guttari-2016", kanji: "ぐったり", meaningKo: "녹초가 됨, 늘어짐", exampleJa: "暑さで ぐったり する。", exampleKo: "더위에 녹초가 된다.", tags: ["2016"] },
      { id: "shokku-2016", kanji: "ショック", meaningKo: "쇼크, 충격", exampleJa: "その 知らせに ショックを 受けた。", exampleKo: "그 소식에 충격을 받았다.", tags: ["2016"] },
      { id: "nadaraka-2016", kanji: "なだらか", meaningKo: "경사가 완만함", exampleJa: "なだらかな 坂を 登る。", exampleKo: "완만한 언덕을 오른다.", tags: ["2016"] },
      { id: "fukyuu-2016", kanji: "普及", kana: "ふきゅう", meaningKo: "보급", exampleJa: "スマホが 急速に 普及した。", exampleKo: "스마트폰이 급속히 보급되었다.", tags: ["2016"] }
    ]
  },
  {
    id: "synonym-past-2016-2023",
    title: "유의표현2023~2016",
    description: "연도별 유의표현(言い換え類義) 기출어휘. 단어와 유의어를 짝지어 학습. (2023·2022 앞부분은 미수록)",
    sourceBatch: "synonym-past-2026-07-02",
    jlptLevel: "N2",
    quizStyle: "synonym",
    createdAt: "2026-07-02",
    updatedAt: "2026-07-02",
    words: [
      { id: "detarame-2022s", kanji: "でたらめ", meaningKo: "엉터리임, 되는 대로임", synonymJa: "うそ", synonymKo: "거짓말", tags: ["2022"] },
      { id: "togatteiru-2022s", kanji: "とがっている", meaningKo: "뾰족하다, 예민하다", synonymJa: "細くなっている", synonymKo: "좁다, 가늘다, 예민하다", tags: ["2022"] },

      { id: "annojou-2021s", kanji: "案の定", kana: "あんのじょう", meaningKo: "예상대로, 아니나 다를까", synonymJa: "やっぱり", synonymKo: "역시", tags: ["2021"] },
      { id: "izen-2021s", kanji: "依然", kana: "いぜん", meaningKo: "여전히", synonymJa: "まだ", synonymKo: "아직", tags: ["2021"] },
      { id: "kakasenai-2021s", kanji: "欠かせない", kana: "かかせない", meaningKo: "빼놓을 수 없다", synonymJa: "ないと困る", synonymKo: "없으면 곤란하다", tags: ["2021"] },
      { id: "kurumu-2021s", kanji: "くるむ", meaningKo: "감싸다, 둘러싸다", synonymJa: "包む", synonymKo: "싸다, 포장하다", tags: ["2021"] },
      { id: "sashizu-2021s", kanji: "指図", kana: "さしず", meaningKo: "지시, 지휘", synonymJa: "命令", synonymKo: "명령", tags: ["2021"] },
      { id: "shigototorikakaru-2021s", kanji: "仕事にとりかかる", kana: "しごとにとりかかる", meaningKo: "일에 착수하다", synonymJa: "仕事をはじめる", synonymKo: "일을 시작하다", tags: ["2021"] },
      { id: "shitsubou-2021s", kanji: "失望した", kana: "しつぼうした", meaningKo: "실망했다", synonymJa: "がっかりした", synonymKo: "낙담했다, 실망했다", tags: ["2021"] },
      { id: "hitogara-2021s", kanji: "人柄", kana: "ひとがら", meaningKo: "인품, 성품", synonymJa: "性格", synonymKo: "성격", tags: ["2021"] },
      { id: "moyorino-2021s", kanji: "最寄の", kana: "もよりの", meaningKo: "근처의", synonymJa: "一番近い", synonymKo: "가장 가까운", tags: ["2021"] },
      { id: "rentaru-2021s", kanji: "レンタルする", meaningKo: "대여하다", synonymJa: "借りる", synonymKo: "빌리다", tags: ["2021"] },

      { id: "ijiru-2020s", kanji: "いじる", meaningKo: "만지다", synonymJa: "触る", synonymKo: "만지다, 닿다", tags: ["2020"] },
      { id: "gaido-2020s", kanji: "ガイドして", meaningKo: "안내해", synonymJa: "案内して", synonymKo: "안내해", tags: ["2020"] },
      { id: "shuujitsu-2020s", kanji: "終日", kana: "しゅうじつ", meaningKo: "종일", synonymJa: "一日中", synonymKo: "하루 종일", tags: ["2020"] },
      { id: "shinkenni-2020s", kanji: "真剣に", kana: "しんけんに", meaningKo: "진지하게", synonymJa: "まじめに", synonymKo: "성실하게", tags: ["2020"] },
      { id: "mareda-2020s", kanji: "まれだ", meaningKo: "드물다", synonymJa: "あまりいない", synonymKo: "드물다, 별로 없다", tags: ["2020"] },

      { id: "issou-2019s", kanji: "一層", kana: "いっそう", meaningKo: "한층", synonymJa: "もっと", synonymKo: "더욱, 더", tags: ["2019"] },
      { id: "ochikonda-2019s", kanji: "落ち込んだ", kana: "おちこんだ", meaningKo: "기가 죽었다", synonymJa: "がっかりした", synonymKo: "낙담했다, 실망했다", tags: ["2019"] },
      { id: "kakaritsuke-2019s", kanji: "かかりつけの", meaningKo: "늘 같은 의사에게 진료 받는", synonymJa: "いつも行く", synonymKo: "늘 가는", tags: ["2019"] },
      { id: "sadameru-2019s", kanji: "定める", kana: "さだめる", meaningKo: "정하다, 결정하다", synonymJa: "決める", synonymKo: "정하다", tags: ["2019"] },
      { id: "seiippai-2019s", kanji: "精一杯", kana: "せいいっぱい", meaningKo: "힘껏, 있는 힘을 다해", synonymJa: "一生懸命", synonymKo: "열심히", tags: ["2019"] },
      { id: "doujou-2019s", kanji: "同情した", kana: "どうじょうした", meaningKo: "동정했다", synonymJa: "かわいそうだと思った", synonymKo: "불쌍하다고 생각했다", tags: ["2019"] },
      { id: "douyou-2019s", kanji: "動揺した", kana: "どうようした", meaningKo: "동요했다", synonymJa: "不安になった", synonymKo: "불안해졌다", tags: ["2019"] },
      { id: "haado-2019s", kanji: "ハードだ", meaningKo: "힘들다", synonymJa: "大変だ", synonymKo: "힘들다", tags: ["2019"] },
      { id: "hikikaesu-2019s", kanji: "引き返す", kana: "ひきかえす", meaningKo: "되돌아가다", synonymJa: "戻る", synonymKo: "돌아가다", tags: ["2019"] },
      { id: "bussou-2019s", kanji: "物騒になってきた", kana: "ぶっそうになってきた", meaningKo: "위험해졌다, 뒤숭숭해졌다", synonymJa: "安全じゃなくなってきた", synonymKo: "안전하지 않게 되었다", tags: ["2019"] },

      { id: "ateru-2018s", kanji: "当てる", kana: "あてる", meaningKo: "맞추다", synonymJa: "ぶつける", synonymKo: "부딪치다, 던져서 맞추다", tags: ["2018"] },
      { id: "awarena-2018s", kanji: "あわれな", meaningKo: "불쌍한, 가여운", synonymJa: "かわいそうな", synonymKo: "불쌍한", tags: ["2018"] },
      { id: "itten-2018s", kanji: "一転した", kana: "いってんした", meaningKo: "완전히 바뀌었다", synonymJa: "すっかり変わった", synonymKo: "완전히 바뀌었다", tags: ["2018"] },
      { id: "utsumuite-2018s", kanji: "うつむいて", meaningKo: "고개를 숙이고", synonymJa: "下を向いて", synonymKo: "아래를 향하고", tags: ["2018"] },
      { id: "kudoi-2018s", kanji: "くどい", meaningKo: "장황하다, 지긋지긋하다", synonymJa: "しつこい", synonymKo: "집요하다, 끈질기다", tags: ["2018"] },
      { id: "jitabata-2018s", kanji: "じたばたしても", meaningKo: "버둥버둥대도, 발버둥쳐도", synonymJa: "あわてても", synonymKo: "허둥대도", tags: ["2018"] },
      { id: "tekunikku-2018s", kanji: "テクニック", meaningKo: "테크닉, 기술", synonymJa: "技術", synonymKo: "기술", tags: ["2018"] },
      { id: "toubun-2018s", kanji: "当分", kana: "とうぶん", meaningKo: "당분간", synonymJa: "しばらく", synonymKo: "잠시, 당분간", tags: ["2018"] },
      { id: "youjin-2018s", kanji: "用心する", kana: "ようじんする", meaningKo: "조심하다, 주의하다", synonymJa: "気をつける", synonymKo: "조심하다, 주의하다", tags: ["2018"] },
      { id: "rikouna-2018s", kanji: "利口な", kana: "りこうな", meaningKo: "영리한", synonymJa: "頭がいい", synonymKo: "머리가 좋은", tags: ["2018"] },

      { id: "ayamari-2017s", kanji: "誤り", kana: "あやまり", meaningKo: "잘못, 틀림, 실수", synonymJa: "間違っているところ", synonymKo: "잘못된 부분", tags: ["2017"] },
      { id: "okubyou-2017s", kanji: "臆病だ", kana: "おくびょうだ", meaningKo: "겁쟁이다, 겁이 많다", synonymJa: "何でも怖がる", synonymKo: "무엇이든 무서워하다", tags: ["2017"] },
      { id: "kajou-2017s", kanji: "過剰である", kana: "かじょうである", meaningKo: "과잉이다", synonymJa: "多すぎる", synonymKo: "너무 많다", tags: ["2017"] },
      { id: "kattena-2017s", kanji: "勝手な", kana: "かってな", meaningKo: "제멋대로인", synonymJa: "わがままな", synonymKo: "제멋대로인", tags: ["2017"] },
      { id: "kioku-2017s", kanji: "記憶している", kana: "きおくしている", meaningKo: "기억하고 있다", synonymJa: "覚えている", synonymKo: "기억하고 있다", tags: ["2017"] },
      { id: "tokkuni-2017s", kanji: "とっくに", meaningKo: "훨씬 전에, 벌써", synonymJa: "ずっと前に", synonymKo: "훨씬 전에", tags: ["2017"] },
      { id: "fuhei-2017s", kanji: "不平", kana: "ふへい", meaningKo: "불평", synonymJa: "文句", synonymKo: "불평, 불만", tags: ["2017"] },
      { id: "marena-2017s", kanji: "まれな", meaningKo: "드문", synonymJa: "ほとんどない", synonymKo: "드문, 거의 없는", tags: ["2017"] },
      { id: "mukatsuku-2017s", kanji: "むかつく", meaningKo: "화가 치밀다, 울컥하다", synonymJa: "怒る", synonymKo: "화나다", tags: ["2017"] },
      { id: "yuzuru-2017s", kanji: "ゆずる", meaningKo: "넘겨주다, 양보하다", synonymJa: "あげる", synonymKo: "주다", tags: ["2017"] },

      { id: "ikinuki-2016s", kanji: "息抜きする", kana: "いきぬきする", meaningKo: "잠시 쉬다, 숨을 돌리다", synonymJa: "休む", synonymKo: "쉬다", tags: ["2016"] },
      { id: "jikani-2016s", kanji: "じかに", meaningKo: "직접", synonymJa: "直接", synonymKo: "직접", tags: ["2016"] },
      { id: "shoutotsu-2016s", kanji: "衝突する", kana: "しょうとつする", meaningKo: "충돌하다", synonymJa: "ぶつかる", synonymKo: "부딪히다", tags: ["2016"] },
      { id: "tabitabi-2016s", kanji: "たびたび", meaningKo: "여러 번, 자주", synonymJa: "何度も", synonymKo: "몇 번이나", tags: ["2016"] },
      { id: "chuumoku-2016s", kanji: "注目する", kana: "ちゅうもくする", meaningKo: "주목하다", synonymJa: "関心を持つ", synonymKo: "관심을 갖다", tags: ["2016"] },
      { id: "tsuiteiru-2016s", kanji: "ついている", meaningKo: "행운이 따르다", synonymJa: "運がいい", synonymKo: "운이 좋다", tags: ["2016"] },
      { id: "tsuneni-2016s", kanji: "つねに", meaningKo: "늘, 항상", synonymJa: "いつも", synonymKo: "언제나", tags: ["2016"] },
      { id: "hikyou-2016s", kanji: "ひきょうな", meaningKo: "비겁한", synonymJa: "ずるい", synonymKo: "치사한, 교활한", tags: ["2016"] },
      { id: "yamuoenai-2016s", kanji: "やむを得ない", kana: "やむをえない", meaningKo: "어쩔 수 없다, 부득이하다", synonymJa: "しかたない", synonymKo: "어쩔 수 없다, 하는 수 없다", tags: ["2016"] },
      { id: "yukaina-2016s", kanji: "愉快な", kana: "ゆかいな", meaningKo: "유쾌한", synonymJa: "面白い", synonymKo: "재미있는", tags: ["2016"] }
    ]
  },
  {
    id: "usage-past-2016-2023",
    title: "용법2023~2016",
    description: "2023년부터 2016년까지 연도별 용법(用法) 기출어휘.",
    sourceBatch: "usage-past-2026-07-02",
    jlptLevel: "N2",
    quizStyle: "reading",
    createdAt: "2026-07-02",
    updatedAt: "2026-07-02",
    words: [
      { id: "idai-2023u", kanji: "偉大", kana: "いだい", meaningKo: "위대함", exampleJa: "彼は 偉大な 業績を 残した。", exampleKo: "그는 위대한 업적을 남겼다.", tags: ["2023"] },
      { id: "zandaka-2023u", kanji: "残高", kana: "ざんだか", meaningKo: "잔고", exampleJa: "口座の 残高を 確認する。", exampleKo: "계좌 잔고를 확인한다.", tags: ["2023"] },
      { id: "souki-2023u", kanji: "早期", kana: "そうき", meaningKo: "조기", exampleJa: "病気の 早期発見が 大切だ。", exampleKo: "병의 조기 발견이 중요하다.", tags: ["2023"] },
      { id: "hareru-2023u", kanji: "腫れる", kana: "はれる", meaningKo: "붓다", exampleJa: "足首が 腫れて 痛い。", exampleKo: "발목이 부어서 아프다.", tags: ["2023"] },
      { id: "kure-2023u", kanji: "暮れ", kana: "くれ", meaningKo: "저녁때, 한 해의 마지막", exampleJa: "年の 暮れは 忙しい。", exampleKo: "연말은 바쁘다.", tags: ["2023"] },
      { id: "joutatsu-2023u", kanji: "上達", kana: "じょうたつ", meaningKo: "숙달", exampleJa: "練習して 日本語が 上達した。", exampleKo: "연습해서 일본어가 늘었다.", tags: ["2023"] },
      { id: "zokushutsu-2023u", kanji: "続出", kana: "ぞくしゅつ", meaningKo: "속출", exampleJa: "会場で トラブルが 続出した。", exampleKo: "행사장에서 문제가 속출했다.", tags: ["2023"] },
      { id: "samatageru-2023u", kanji: "さまたげる", meaningKo: "방해하다, 지장을 주다", exampleJa: "騒音が 睡眠を さまたげる。", exampleKo: "소음이 수면을 방해한다.", tags: ["2023"] },
      { id: "shirushi-2023u", kanji: "印", kana: "しるし", meaningKo: "표, 표시", exampleJa: "大事な 所に 印を つける。", exampleKo: "중요한 곳에 표시를 한다.", tags: ["2023"] },
      { id: "haishi-2023u", kanji: "廃止", kana: "はいし", meaningKo: "폐지", exampleJa: "古い 制度を 廃止する。", exampleKo: "오래된 제도를 폐지한다.", tags: ["2023"] },

      { id: "areru-2022u", kanji: "荒れる", kana: "あれる", meaningKo: "거칠어지다, 날뛰다", exampleJa: "海が 荒れて 船が 出せない。", exampleKo: "바다가 거칠어져 배를 낼 수 없다.", tags: ["2022"] },
      { id: "ganko-2022u", kanji: "頑固", kana: "がんこ", meaningKo: "완고함", exampleJa: "父は 頑固で 意見を 曲げない。", exampleKo: "아버지는 완고해서 의견을 굽히지 않는다.", tags: ["2022"] },
      { id: "chuudan-2022u", kanji: "中断", kana: "ちゅうだん", meaningKo: "중단", exampleJa: "雨で 試合が 中断した。", exampleKo: "비로 경기가 중단됐다.", tags: ["2022"] },
      { id: "beteran-2022u", kanji: "ベテラン", meaningKo: "베테랑, 노련한 사람", exampleJa: "彼は この 分野の ベテランだ。", exampleKo: "그는 이 분야의 베테랑이다.", tags: ["2022"] },
      { id: "uchiawase-2022u", kanji: "打ち合せ", kana: "うちあわせ", meaningKo: "협의, 미리 상의함", exampleJa: "明日の 打ち合せに 出る。", exampleKo: "내일 회의에 참석한다.", tags: ["2022"] },
      { id: "shoujiru-2022u", kanji: "生じる", kana: "しょうじる", meaningKo: "생기다, 발생하다", exampleJa: "誤解が 生じることも ある。", exampleKo: "오해가 생기는 경우도 있다.", tags: ["2022"] },
      { id: "nigoru-2022u", kanji: "濁る", kana: "にごる", meaningKo: "탁해지다, 흐려지다", exampleJa: "大雨で 川の 水が 濁った。", exampleKo: "폭우로 강물이 탁해졌다.", tags: ["2022"] },
      { id: "onkou-2022u", kanji: "温厚", kana: "おんこう", meaningKo: "온화하고 다정함", exampleJa: "彼は 温厚な 人柄だ。", exampleKo: "그는 온화한 성품이다.", tags: ["2022"] },
      { id: "sedai-2022u", kanji: "世代", kana: "せだい", meaningKo: "세대", exampleJa: "若い 世代の 意見を 聞く。", exampleKo: "젊은 세대의 의견을 듣는다.", tags: ["2022"] },
      { id: "fukyuu-2022u", kanji: "普及", kana: "ふきゅう", meaningKo: "보급", exampleJa: "スマホが 広く 普及した。", exampleKo: "스마트폰이 널리 보급됐다.", tags: ["2022"] },

      { id: "inyou-2021u", kanji: "引用", kana: "いんよう", meaningKo: "인용", exampleJa: "論文から 一部を 引用する。", exampleKo: "논문에서 일부를 인용한다.", tags: ["2021"] },
      { id: "keikou-2021u", kanji: "傾向", kana: "けいこう", meaningKo: "경향", exampleJa: "最近 消費が 減る 傾向に ある。", exampleKo: "최근 소비가 줄어드는 경향이 있다.", tags: ["2021"] },
      { id: "datou-2021u", kanji: "妥当", kana: "だとう", meaningKo: "타당함, 적절함", exampleJa: "その 判断は 妥当だ。", exampleKo: "그 판단은 타당하다.", tags: ["2021"] },
      { id: "moreru-2021u", kanji: "漏れる", kana: "もれる", meaningKo: "새다, 빠지다", exampleJa: "ガスが 漏れている。", exampleKo: "가스가 새고 있다.", tags: ["2021"] },
      { id: "kabau-2021u", kanji: "かばう", meaningKo: "감싸다, 비호하다", exampleJa: "友人を かばって うそを ついた。", exampleKo: "친구를 감싸려고 거짓말을 했다.", tags: ["2021"] },
      { id: "saibai-2021u", kanji: "栽培", kana: "さいばい", meaningKo: "재배", exampleJa: "トマトを 栽培している。", exampleKo: "토마토를 재배하고 있다.", tags: ["2021"] },
      { id: "tenkai-2021u", kanji: "展開", kana: "てんかい", meaningKo: "전개", exampleJa: "話が 意外な 方向へ 展開した。", exampleKo: "이야기가 뜻밖의 방향으로 전개됐다.", tags: ["2021"] },
      { id: "kyuugeki-2021u", kanji: "急激", kana: "きゅうげき", meaningKo: "급격함", exampleJa: "気温が 急激に 下がった。", exampleKo: "기온이 급격히 떨어졌다.", tags: ["2021"] },
      { id: "sassato-2021u", kanji: "さっさと", meaningKo: "어서, 서둘러", exampleJa: "さっさと 仕事を 片づけよう。", exampleKo: "어서 일을 끝내자.", tags: ["2021"] },
      { id: "hotto-2021u", kanji: "ほっと", meaningKo: "안심하는 모양", exampleJa: "無事だと 聞いて ほっとした。", exampleKo: "무사하다고 듣고 안심했다.", tags: ["2021"] },

      { id: "intai-2020u", kanji: "引退", kana: "いんたい", meaningKo: "은퇴", exampleJa: "選手が 現役を 引退する。", exampleKo: "선수가 현역에서 은퇴한다.", tags: ["2020"] },
      { id: "kekkan-2020u", kanji: "欠陥", kana: "けっかん", meaningKo: "결함", exampleJa: "製品に 欠陥が 見つかった。", exampleKo: "제품에서 결함이 발견됐다.", tags: ["2020"] },
      { id: "uchiakeru-2020u", kanji: "打ち明ける", kana: "うちあける", meaningKo: "밝히다, 털어놓다", exampleJa: "悩みを 友人に 打ち明けた。", exampleKo: "고민을 친구에게 털어놓았다.", tags: ["2020"] },
      { id: "shoki-2020u", kanji: "初期", kana: "しょき", meaningKo: "초기", exampleJa: "病気は 初期に 治療するのが よい。", exampleKo: "병은 초기에 치료하는 게 좋다.", tags: ["2020"] },
      { id: "gisshiri-2020u", kanji: "ぎっしり", meaningKo: "가득, 잔뜩, 빽빽이", exampleJa: "予定が ぎっしり 詰まっている。", exampleKo: "일정이 빽빽이 차 있다.", tags: ["2020"] },

      { id: "shimiru-2019u", kanji: "しみる", meaningKo: "배다, 스며들다", exampleJa: "汗が シャツに しみる。", exampleKo: "땀이 셔츠에 밴다.", tags: ["2019"] },
      { id: "sokuzani-2019u", kanji: "即座に", kana: "そくざに", meaningKo: "즉각, 당장", exampleJa: "質問に 即座に 答えた。", exampleKo: "질문에 즉각 답했다.", tags: ["2019"] },
      { id: "darashinai-2019u", kanji: "だらしない", meaningKo: "단정하지 않다, 칠칠치 못하다", exampleJa: "服装が だらしない。", exampleKo: "복장이 단정하지 못하다.", tags: ["2019"] },
      { id: "tokushu-2019u", kanji: "特殊", kana: "とくしゅ", meaningKo: "특수", exampleJa: "特殊な 技術が 必要だ。", exampleKo: "특수한 기술이 필요하다.", tags: ["2019"] },
      { id: "juuman-2019u", kanji: "充満", kana: "じゅうまん", meaningKo: "충만, 가득함", exampleJa: "部屋に 煙が 充満した。", exampleKo: "방에 연기가 가득 찼다.", tags: ["2019"] },
      { id: "sozai-2019u", kanji: "素材", kana: "そざい", meaningKo: "소재", exampleJa: "天然の 素材を 使う。", exampleKo: "천연 소재를 사용한다.", tags: ["2019"] },
      { id: "haishi-2019u", kanji: "廃止", kana: "はいし", meaningKo: "폐지", exampleJa: "その 路線は 廃止された。", exampleKo: "그 노선은 폐지됐다.", tags: ["2019"] },
      { id: "shoho-2019u", kanji: "初歩", kana: "しょほ", meaningKo: "초보", exampleJa: "まだ 初歩の 段階だ。", exampleKo: "아직 초보 단계다.", tags: ["2019"] },
      { id: "tsukiru-2019u", kanji: "尽きる", kana: "つきる", meaningKo: "다하다, 떨어지다, 끝나다", exampleJa: "話題が 尽きない。", exampleKo: "화제가 끊이지 않는다.", tags: ["2019"] },
      { id: "mekuru-2019u", kanji: "めくる", meaningKo: "(책장) 넘기다", exampleJa: "ページを めくる。", exampleKo: "페이지를 넘긴다.", tags: ["2019"] },

      { id: "enzetsu-2018u", kanji: "演説", kana: "えんぜつ", meaningKo: "연설", exampleJa: "候補者が 街頭で 演説する。", exampleKo: "후보자가 거리에서 연설한다.", tags: ["2018"] },
      { id: "tasai-2018u", kanji: "多彩", kana: "たさい", meaningKo: "다채로움", exampleJa: "多彩な 才能を 持つ。", exampleKo: "다채로운 재능을 가지고 있다.", tags: ["2018"] },
      { id: "noritsugu-2018u", kanji: "乗り継ぐ", kana: "のりつぐ", meaningKo: "갈아타다", exampleJa: "バスを 乗り継いで 行く。", exampleKo: "버스를 갈아타고 간다.", tags: ["2018"] },
      { id: "yakume-2018u", kanji: "役目", kana: "やくめ", meaningKo: "역할", exampleJa: "自分の 役目を 果たす。", exampleKo: "자신의 역할을 다한다.", tags: ["2018"] },
      { id: "kaiyaku-2018u", kanji: "解約", kana: "かいやく", meaningKo: "해약, 해지", exampleJa: "保険を 解約した。", exampleKo: "보험을 해지했다.", tags: ["2018"] },
      { id: "nikka-2018u", kanji: "日課", kana: "にっか", meaningKo: "일과", exampleJa: "散歩が 毎朝の 日課だ。", exampleKo: "산책이 매일 아침 일과다.", tags: ["2018"] },
      { id: "hozon-2018u", kanji: "保存", kana: "ほぞん", meaningKo: "보존, 저장", exampleJa: "データを 保存する。", exampleKo: "데이터를 저장한다.", tags: ["2018"] },
      { id: "kippari-2018u", kanji: "きっぱり", meaningKo: "딱 잘라, 단호히", exampleJa: "誘いを きっぱり 断った。", exampleKo: "권유를 딱 잘라 거절했다.", tags: ["2018"] },
      { id: "nibui-2018u", kanji: "鈍い", kana: "にぶい", meaningKo: "둔하다, 굼뜨다, 반응이 느리다", exampleJa: "動きが 鈍い。", exampleKo: "움직임이 둔하다.", tags: ["2018"] },
      { id: "moyori-2018u", kanji: "最寄り", kana: "もより", meaningKo: "가장 가까움, 근처", exampleJa: "最寄りの 駅まで 歩く。", exampleKo: "가장 가까운 역까지 걷는다.", tags: ["2018"] },

      { id: "isseini-2017u", kanji: "一斉に", kana: "いっせいに", meaningKo: "일제히, 동시에", exampleJa: "全員が 一斉に 立ち上がった。", exampleKo: "전원이 일제히 일어섰다.", tags: ["2017"] },
      { id: "setsuyaku-2017u", kanji: "節約", kana: "せつやく", meaningKo: "절약", exampleJa: "水道代を 節約する。", exampleKo: "수도세를 절약한다.", tags: ["2017"] },
      { id: "bunkai-2017u", kanji: "分解", kana: "ぶんかい", meaningKo: "분해", exampleJa: "機械を 分解して 修理する。", exampleKo: "기계를 분해해서 수리한다.", tags: ["2017"] },
      { id: "ronsou-2017u", kanji: "論争", kana: "ろんそう", meaningKo: "논쟁", exampleJa: "二人の 意見が 論争に なった。", exampleKo: "두 사람의 의견이 논쟁이 됐다.", tags: ["2017"] },
      { id: "oou-2017u", kanji: "覆う", kana: "おおう", meaningKo: "덮다, 씌우다", exampleJa: "雪が 山を 覆う。", exampleKo: "눈이 산을 덮는다.", tags: ["2017"] },
      { id: "choujou-2017u", kanji: "頂上", kana: "ちょうじょう", meaningKo: "정상", exampleJa: "山の 頂上に 着いた。", exampleKo: "산 정상에 도착했다.", tags: ["2017"] },
      { id: "yabureru-2017u", kanji: "破れる", kana: "やぶれる", meaningKo: "찢어지다", exampleJa: "紙が 破れた。", exampleKo: "종이가 찢어졌다.", tags: ["2017"] },
      { id: "gentei-2017u", kanji: "限定", kana: "げんてい", meaningKo: "한정", exampleJa: "数量 限定の 商品だ。", exampleKo: "수량 한정 상품이다.", tags: ["2017"] },
      { id: "chirakasu-2017u", kanji: "散らかす", kana: "ちらかす", meaningKo: "어지르다", exampleJa: "部屋を 散らかす。", exampleKo: "방을 어지른다.", tags: ["2017"] },
      { id: "ryakusu-2017u", kanji: "略す", kana: "りゃくす", meaningKo: "줄이다, 생략하다", exampleJa: "説明を 略す。", exampleKo: "설명을 생략한다.", tags: ["2017"] },

      { id: "intai-2016u", kanji: "引退", kana: "いんたい", meaningKo: "은퇴", exampleJa: "監督が 今季で 引退する。", exampleKo: "감독이 이번 시즌으로 은퇴한다.", tags: ["2016"] },
      { id: "kikkake-2016u", kanji: "きっかけ", meaningKo: "계기", exampleJa: "留学が 成長の きっかけに なった。", exampleKo: "유학이 성장의 계기가 됐다.", tags: ["2016"] },
      { id: "shoujiru-2016u", kanji: "生じる", kana: "しょうじる", meaningKo: "발생하다, 생기다", exampleJa: "問題が 生じた。", exampleKo: "문제가 발생했다.", tags: ["2016"] },
      { id: "meue-2016u", kanji: "目上", kana: "めうえ", meaningKo: "윗사람, 연장자", exampleJa: "目上の 人には 敬語を 使う。", exampleKo: "윗사람에게는 존댓말을 쓴다.", tags: ["2016"] },
      { id: "enchou-2016u", kanji: "延長", kana: "えんちょう", meaningKo: "연장", exampleJa: "会議が 一時間 延長された。", exampleKo: "회의가 한 시간 연장됐다.", tags: ["2016"] },
      { id: "sabiru-2016u", kanji: "さびる", meaningKo: "녹슬다", exampleJa: "古い 釘が さびている。", exampleKo: "오래된 못이 녹슬어 있다.", tags: ["2016"] },
      { id: "hattatsu-2016u", kanji: "発達", kana: "はったつ", meaningKo: "발달", exampleJa: "科学技術が 発達する。", exampleKo: "과학기술이 발달한다.", tags: ["2016"] },
      { id: "oogesa-2016u", kanji: "大げさ", kana: "おおげさ", meaningKo: "과장됨", exampleJa: "話を 大げさに 言う。", exampleKo: "이야기를 과장해서 말한다.", tags: ["2016"] },
      { id: "junchou-2016u", kanji: "順調", kana: "じゅんちょう", meaningKo: "순조로움", exampleJa: "準備は 順調に 進んでいる。", exampleKo: "준비는 순조롭게 진행되고 있다.", tags: ["2016"] },
      { id: "hansei-2016u", kanji: "反省", kana: "はんせい", meaningKo: "반성", exampleJa: "失敗を 反省する。", exampleKo: "실패를 반성한다.", tags: ["2016"] }
    ]
  }
];
