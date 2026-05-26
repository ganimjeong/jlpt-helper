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
  }
];
