const scenes = [
  {
    id: "airport",
    icon: "plane",
    name: "机场",
    english: "Airport English",
    line: "找不到登机口、不会托运行李？",
    subtitle: "值机、安检、登机、转机常用表达",
    color: "#2f6f73",
    progress: 42,
    words: [
      item("word", "boarding pass", "/ˈbɔːrdɪŋ pæs/", "登机牌", "n.", "May I see your boarding pass?", "我可以看一下你的登机牌吗？"),
      item("word", "gate", "/ɡeɪt/", "登机口", "n.", "Which gate should I go to?", "我应该去哪个登机口？"),
      item("word", "luggage", "/ˈlʌɡɪdʒ/", "行李", "n.", "I need to check this luggage.", "我需要托运这件行李。")
    ],
    sentences: [
      item("sentence", "Where is gate B12?", "", "B12 登机口在哪里？", "", "Excuse me, where is gate B12?", "打扰一下，B12 登机口在哪里？"),
      item("sentence", "I have a connecting flight.", "", "我需要转机。", "", "I have a connecting flight to Paris.", "我要转机去巴黎。"),
      item("sentence", "Can I take this bag on board?", "", "这个包可以带上飞机吗？", "", "Can I take this bag on board with me?", "这个包我可以随身带上飞机吗？")
    ],
    dialogs: [
      dialog("checkin", "值机托运行李", [
        ["Staff", "May I see your passport and boarding pass?"],
        ["You", "Sure. Here you are."],
        ["Staff", "Do you have any luggage to check?"],
        ["You", "Yes, just this suitcase."]
      ], "出示护照和登机牌，并说明要托运行李。")
    ]
  },
  {
    id: "hotel",
    icon: "hotel",
    name: "酒店",
    english: "Hotel English",
    line: "入住、退房、要 Wi-Fi 不会说？",
    subtitle: "入住、退房、房间问题和服务请求",
    color: "#7760a8",
    progress: 35,
    words: [
      item("word", "reservation", "/ˌrezərˈveɪʃn/", "预订", "n.", "I have a reservation under Li.", "我用李这个名字预订了。"),
      item("word", "check-in", "/ˈtʃek ɪn/", "入住", "n./v.", "What time is check-in?", "几点可以入住？"),
      item("word", "receipt", "/rɪˈsiːt/", "收据", "n.", "Can I have a receipt?", "可以给我收据吗？")
    ],
    sentences: [
      item("sentence", "I have a reservation.", "", "我有预订。", "", "Hi, I have a reservation for tonight.", "你好，我今晚有预订。"),
      item("sentence", "Could I get the Wi-Fi password?", "", "可以告诉我 Wi-Fi 密码吗？", "", "Could I get the Wi-Fi password, please?", "请问可以告诉我 Wi-Fi 密码吗？"),
      item("sentence", "The air conditioner is not working.", "", "空调坏了。", "", "The air conditioner in my room is not working.", "我房间的空调坏了。")
    ],
    dialogs: [
      dialog("hotel-checkin", "酒店入住", [
        ["You", "Hello, I have a reservation."],
        ["Staff", "May I have your passport, please?"],
        ["You", "Sure. Is breakfast included?"],
        ["Staff", "Yes, from 7 to 10 a.m."]
      ], "说明已预订，确认早餐时间。")
    ]
  },
  {
    id: "restaurant",
    icon: "utensils",
    name: "餐厅",
    english: "Restaurant English",
    line: "点餐、买单、打包卡住了？",
    subtitle: "点餐、推荐菜、忌口、买单和打包",
    color: "#b35643",
    progress: 28,
    words: [
      item("word", "menu", "/ˈmenjuː/", "菜单", "n.", "Could I see the menu?", "我可以看一下菜单吗？"),
      item("word", "recommend", "/ˌrekəˈmend/", "推荐", "v.", "What do you recommend?", "你推荐什么？"),
      item("word", "bill", "/bɪl/", "账单", "n.", "Could we have the bill?", "我们可以买单吗？")
    ],
    sentences: [
      item("sentence", "What do you recommend?", "", "你推荐什么？", "", "What do you recommend for two people?", "两个人吃你推荐什么？"),
      item("sentence", "I am allergic to peanuts.", "", "我对花生过敏。", "", "I am allergic to peanuts. Does this have peanuts?", "我对花生过敏，这里面有花生吗？"),
      item("sentence", "Can I get this to go?", "", "这个可以打包吗？", "", "Can I get the rest to go?", "剩下的可以打包吗？")
    ],
    dialogs: [
      dialog("order", "点餐买单", [
        ["You", "What do you recommend?"],
        ["Staff", "The grilled fish is popular."],
        ["You", "Great. I'll have that."],
        ["You", "Could we have the bill, please?"]
      ], "询问推荐菜，点餐并买单。")
    ]
  },
  {
    id: "shopping",
    icon: "bag",
    name: "购物",
    english: "Shopping English",
    line: "问价格、试尺码、退税说不出口？",
    subtitle: "价格、尺码、付款、退税和退货",
    color: "#4f6fad",
    progress: 24,
    words: [
      item("word", "size", "/saɪz/", "尺码", "n.", "Do you have this in a smaller size?", "这个有小一号的吗？"),
      item("word", "tax refund", "/tæks ˈriːfʌnd/", "退税", "n.", "Can I get a tax refund form?", "可以给我退税单吗？"),
      item("word", "receipt", "/rɪˈsiːt/", "小票", "n.", "Please keep your receipt.", "请保留小票。")
    ],
    sentences: [
      item("sentence", "How much is this?", "", "这个多少钱？", "", "Excuse me, how much is this?", "打扰一下，这个多少钱？"),
      item("sentence", "Can I try this on?", "", "我可以试穿吗？", "", "Can I try this on in medium?", "我可以试穿中码吗？"),
      item("sentence", "Do you accept credit cards?", "", "可以刷信用卡吗？", "", "Do you accept credit cards here?", "这里可以刷信用卡吗？")
    ],
    dialogs: [
      dialog("try-on", "试尺码", [
        ["You", "Can I try this on?"],
        ["Staff", "Sure. The fitting room is over there."],
        ["You", "Do you have a larger size?"],
        ["Staff", "Let me check for you."]
      ], "试穿并询问更大尺码。")
    ]
  },
  {
    id: "tickets",
    icon: "ticket",
    name: "门票",
    english: "Ticket English",
    line: "买票、预约、问开放时间不会说？",
    subtitle: "景区买票、开放时间、预约和入口出口",
    color: "#2d7a55",
    progress: 18,
    words: [
      item("word", "ticket", "/ˈtɪkɪt/", "门票", "n.", "Two tickets, please.", "请给我两张票。"),
      item("word", "entrance", "/ˈentrəns/", "入口", "n.", "Where is the entrance?", "入口在哪里？"),
      item("word", "reservation", "/ˌrezərˈveɪʃn/", "预约", "n.", "Do I need a reservation?", "我需要预约吗？")
    ],
    sentences: [
      item("sentence", "What time do you close?", "", "你们几点关门？", "", "What time do you close today?", "你们今天几点关门？"),
      item("sentence", "Do I need to book in advance?", "", "我需要提前预订吗？", "", "Do I need to book tickets in advance?", "我需要提前订票吗？"),
      item("sentence", "Where is the exit?", "", "出口在哪里？", "", "Excuse me, where is the exit?", "打扰一下，出口在哪里？")
    ],
    dialogs: [
      dialog("buy-ticket", "购买门票", [
        ["You", "Two tickets, please."],
        ["Staff", "For adults or children?"],
        ["You", "Two adults."],
        ["Staff", "That will be 40 dollars."]
      ], "购买两张成人票并确认价格。")
    ]
  },
  {
    id: "transport",
    icon: "train",
    name: "交通",
    english: "Transportation English",
    line: "坐地铁、买票、问路线听不懂？",
    subtitle: "地铁、巴士、火车、路线和换乘",
    color: "#8b6840",
    progress: 31,
    words: [
      item("word", "platform", "/ˈplætfɔːrm/", "站台", "n.", "Which platform is it?", "它在哪个站台？"),
      item("word", "transfer", "/trænsˈfɜːr/", "换乘", "v./n.", "Where do I transfer?", "我在哪里换乘？"),
      item("word", "one-way ticket", "/ˌwʌn weɪ ˈtɪkɪt/", "单程票", "n.", "A one-way ticket to Central, please.", "请给我一张去中心站的单程票。")
    ],
    sentences: [
      item("sentence", "How do I get to the station?", "", "我怎么去车站？", "", "How do I get to the train station?", "我怎么去火车站？"),
      item("sentence", "Which line should I take?", "", "我应该坐哪条线？", "", "Which line should I take to downtown?", "去市中心我应该坐哪条线？"),
      item("sentence", "Do I need to transfer?", "", "我需要换乘吗？", "", "Do I need to transfer to another line?", "我需要换乘另一条线吗？")
    ],
    dialogs: [
      dialog("route", "问路线", [
        ["You", "Which line should I take to the museum?"],
        ["Staff", "Take Line 2 and transfer at Central."],
        ["You", "How many stops is it?"],
        ["Staff", "It is five stops from here."]
      ], "询问路线、换乘站和站数。")
    ]
  }
];

addSceneContent();

const state = {
  route: parseRoute(),
  favorites: read("jiega:favorites", []),
  mastered: read("jiega:mastered", []),
  checkins: read("jiega:checkins", {}),
  profile: read("jiega:profile", {
    nickname: "旅行学习者",
    account: "jiega_2026",
    level: "Travel Starter",
    avatar: "接"
  }),
  loggedIn: localStorage.getItem("jiega:loggedIn") !== "false",
  todayCount: Number(localStorage.getItem("jiega:todayCount") || 0)
};

let voiceReady = false;

window.addEventListener("hashchange", () => {
  state.route = parseRoute();
  render();
});

function item(type, english, phonetic, chinese, pos, example, exampleCn) {
  return { id: slug(`${type}-${english}`), type, english, phonetic, chinese, pos, example, exampleCn };
}

function dialog(id, title, lines, chinese) {
  return { id, type: "dialog", title, lines, english: lines.map((line) => `${line[0]}: ${line[1]}`).join("\n"), chinese };
}

function parseRoute() {
  const [page = "home", a = "", b = ""] = location.hash.replace("#/", "").split("/");
  return { page, a, b };
}

function navigate(path) {
  location.hash = `#/${path}`;
}

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function allItems() {
  return scenes.flatMap((scene) => [
    ...scene.words.map((entry) => ({ ...entry, sceneId: scene.id, sceneName: scene.name })),
    ...scene.sentences.map((entry) => ({ ...entry, sceneId: scene.id, sceneName: scene.name })),
    ...scene.dialogs.map((entry) => ({ ...entry, sceneId: scene.id, sceneName: scene.name }))
  ]);
}

function getScene(id) {
  return scenes.find((scene) => scene.id === id) || scenes[0];
}

function getEntry(id) {
  return allItems().find((entry) => entry.id === id);
}

function practiceDeck(sceneId = "all") {
  const entries = allItems();
  return sceneId === "all" ? entries : entries.filter((entry) => entry.sceneId === sceneId);
}

function randomSeed() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function seededIndex(seed, length) {
  if (!length) return 0;
  const value = String(seed || randomSeed()).split("").reduce((sum, char) => ((sum << 5) - sum + char.charCodeAt(0)) >>> 0, 0);
  return value % length;
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function toggleFavorite(id) {
  state.favorites = isFavorite(id) ? state.favorites.filter((entry) => entry !== id) : [...state.favorites, id];
  save("jiega:favorites", state.favorites);
  render();
}

function loadVoices() {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    if (voices.length) {
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => resolve(window.speechSynthesis.getVoices());
  });
}

function chooseEnglishVoice(voices) {
  const rankedNames = [
    "Google US English",
    "Microsoft Jenny Online",
    "Microsoft Aria Online",
    "Samantha",
    "Ava",
    "Allison",
    "Karen",
    "Daniel"
  ];
  const english = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  return rankedNames.map((name) => english.find((voice) => voice.name.includes(name))).find(Boolean)
    || english.find((voice) => voice.lang === "en-US" && voice.localService)
    || english.find((voice) => voice.lang === "en-US")
    || english[0];
}

async function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const voices = await loadVoices();
  const voice = chooseEnglishVoice(voices);
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/\n/g, ". "));
  utterance.lang = "en-US";
  utterance.voice = voice || null;
  utterance.rate = 0.92;
  utterance.pitch = 1.02;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
  if (!voiceReady) {
    voiceReady = true;
    toast(voice ? `已切换：${voice.name}` : "当前浏览器未提供高质量英语音色");
  }
}

function speechText(entry) {
  if (!entry) return "";
  if (entry.type === "dialog") return entry.lines.map((line) => line[1]).join(". ");
  return entry.example || entry.english;
}

function repeat(entry) {
  speak(speechText(entry));
  toast("请跟着读一遍");
}

function markRead(id) {
  state.todayCount += 1;
  localStorage.setItem("jiega:todayCount", String(state.todayCount));
  if (!state.mastered.includes(id)) {
    state.mastered = [...state.mastered, id];
    save("jiega:mastered", state.mastered);
  }
  toast("已记录一次练习");
  render();
}

function checkIn() {
  const today = new Date().toISOString().slice(0, 10);
  state.checkins[today] = Math.max(state.checkins[today] || 0, state.todayCount || 1);
  save("jiega:checkins", state.checkins);
  navigate("result");
}

function streak() {
  let count = 0;
  const date = new Date();
  while (true) {
    const key = date.toISOString().slice(0, 10);
    if (!state.checkins[key]) break;
    count += 1;
    date.setDate(date.getDate() - 1);
  }
  return count;
}

function lastSeven() {
  return Array.from({ length: 7 }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    return { label: `${date.getMonth() + 1}/${date.getDate()}`, value: state.checkins[key] || 0 };
  });
}

function getProfileStats() {
  const all = allItems();
  return {
    todayPractice: state.todayCount,
    streakDays: streak(),
    favorites: state.favorites.length,
    mastered: state.mastered.length,
    masteryRate: all.length ? Math.round((state.mastered.length / all.length) * 100) : 0,
    totalCards: all.length
  };
}

function accountAction(action) {
  if (action === "edit-profile") {
    const nextName = prompt("请输入新的昵称", state.profile.nickname);
    if (!nextName) return;
    state.profile.nickname = nextName.trim().slice(0, 16) || state.profile.nickname;
    state.profile.avatar = state.profile.nickname.slice(0, 1);
    save("jiega:profile", state.profile);
    toast("个人信息已更新");
    render();
    return;
  }
  if (action === "change-password") {
    toast("已进入更换密码流程");
    return;
  }
  if (action === "settings") {
    navigate("settings");
    return;
  }
  if (action === "login") {
    state.loggedIn = true;
    localStorage.setItem("jiega:loggedIn", "true");
    toast("已登录");
    render();
    return;
  }
  if (action === "logout") {
    state.loggedIn = false;
    localStorage.setItem("jiega:loggedIn", "false");
    toast("已退出登录");
    render();
  }
}

function icon(name) {
  const paths = {
    home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>',
    book: '<path d="M5 4.5h10a4 4 0 0 1 4 4V20H8a3 3 0 0 0-3 3z"/><path d="M5 4.5V20a3 3 0 0 1 3-3h11"/>',
    star: '<path d="m12 3.5 2.6 5.2 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.2-4.1 5.8-.8z"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20.5a7 7 0 0 1 14 0"/>',
    volume: '<path d="M4 10h3.2L12 6.2v11.6L7.2 14H4z"/><path d="M16 9.2a4 4 0 0 1 0 5.6"/><path d="M18.5 6.8a7.5 7.5 0 0 1 0 10.4"/>',
    heart: '<path d="M12 20s-7-4.4-8.7-8.2A4.9 4.9 0 0 1 12 7a4.9 4.9 0 0 1 8.7 4.8C19 15.6 12 20 12 20z"/>',
    plane: '<path d="M3.5 12.8 20.5 5l-7.8 17-2.2-7.5z"/><path d="m20.5 5-10 9.5"/>',
    hotel: '<path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V21"/><path d="M16 10h2.5A1.5 1.5 0 0 1 20 11.5V21"/><path d="M8 8h3M8 12h3M8 16h3M3 21h18"/>',
    utensils: '<path d="M6 3v8"/><path d="M10 3v8"/><path d="M6 7h4"/><path d="M8 11v10"/><path d="M16 3c2.2 1.7 3.2 4.1 3.2 7.2H16V21"/>',
    bag: '<path d="M6 8.5h12l1 12H5z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/><path d="M9 12h6"/>',
    ticket: '<path d="M4 8a2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h16v-2a2 2 0 0 1 0-4 2 2 0 0 0 0-4V6H4z"/><path d="M13 7.5v9"/>',
    train: '<path d="M7 3.5h10A2.5 2.5 0 0 1 19.5 6v8.5A3.5 3.5 0 0 1 16 18H8a3.5 3.5 0 0 1-3.5-3.5V6A2.5 2.5 0 0 1 7 3.5z"/><path d="M8 8h8M8 13h8M8.5 21l2-3M15.5 18l2 3"/>',
    arrow: '<path d="M9 5.5 15.5 12 9 18.5"/>',
    check: '<path d="M20 7 10 17l-5-5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-1.9.3 1.7 1.7 0 0 0-.8 1.6V22h-4v-.2a1.7 1.7 0 0 0-.8-1.6 1.7 1.7 0 0 0-1.9-.3l-.2.1-2-3.4.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.4-1.1H4v-4h.2a1.7 1.7 0 0 0 1.4-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.2.1a1.7 1.7 0 0 0 1.9-.3A1.7 1.7 0 0 0 10.2 2h4v.2a1.7 1.7 0 0 0 .8 1.6 1.7 1.7 0 0 0 1.9.3l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.4 1.1h.2v4h-.2a1.7 1.7 0 0 0-1.4 1.1z"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    logout: '<path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M21 4v16"/>'
  };
  return `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.book}</svg>`;
}

function render() {
  const app = document.querySelector("#app");
  const { page } = state.route;
  const pages = {
    home: Home,
    scene: SceneDetail,
    word: WordDetail,
    favorites: Favorites,
    practice: Practice,
    result: Result,
    profile: Profile,
    settings: Settings
  };
  app.innerHTML = `${(pages[page] || Home)()}${Nav()}`;
  bind();
}

function Home() {
  return shell(`
    <section class="brand">
      <div>
        <p class="eyebrow">旅行英语系列</p>
        <h1>接嘎</h1>
        <p>接住尴尬，开口不尴尬</p>
      </div>
      <div class="brand-mark">${icon("volume")}</div>
    </section>
    <section class="headline">
      <h2>今天想接住哪个尴尬场景？</h2>
    </section>
    <section class="today-card">
      <div>
        <span>今日练习</span>
        <strong>${Math.max(8 - state.todayCount, 0)} 个待练习</strong>
        <small>连续打卡 ${streak()} 天</small>
      </div>
      <button class="primary" data-go="practice">${icon("book")}开始练习</button>
    </section>
    <section class="scene-grid">
      ${scenes.map(SceneCard).join("")}
    </section>
  `);
}

function SceneCard(scene) {
  const count = allItems().filter((entry) => entry.sceneId === scene.id && isFavorite(entry.id)).length;
  return `
    <button class="scene-card" data-go="scene/${scene.id}" style="--scene:${scene.color}">
      <span class="scene-art">${icon(scene.icon)}</span>
      <span class="scene-copy">
        <small>${scene.english}</small>
        <strong>${scene.name}</strong>
        <em>${scene.line}</em>
        <span class="scene-meta">
          <b>${scene.sentences.length}句</b>
          <b>${scene.words.length}词</b>
          <b>收藏 ${count}</b>
        </span>
      </span>
      ${icon("arrow")}
    </button>
  `;
}

function SceneDetail() {
  const scene = getScene(state.route.a);
  const tab = state.route.b || "words";
  const map = { words: scene.words, sentences: scene.sentences, dialogs: scene.dialogs };
  return shell(`
    ${TopBack(scene.name)}
    <section class="scene-hero" style="--scene:${scene.color}">
      <div class="scene-icon large">${icon(scene.icon)}</div>
      <p>${scene.english}</p>
      <h2>${scene.subtitle}</h2>
      <div class="meter"><span style="width:${scene.progress}%"></span></div>
      <small>学习进度 ${scene.progress}% · 已收藏 ${state.favorites.length}</small>
    </section>
    <div class="tabs">
      ${tabButton("高频单词", `scene/${scene.id}/words`, tab === "words")}
      ${tabButton("常用句子", `scene/${scene.id}/sentences`, tab === "sentences")}
      ${tabButton("情景对话", `scene/${scene.id}/dialogs`, tab === "dialogs")}
    </div>
    <section class="list">
      ${map[tab].map(EntryCard).join("")}
    </section>
  `);
}

function tabButton(label, path, active) {
  return `<button class="${active ? "active" : ""}" data-go="${path}">${label}</button>`;
}

function EntryCard(entry) {
  const main = entry.type === "dialog" ? entry.title : entry.english;
  const sub = entry.type === "dialog" ? entry.chinese : `${entry.phonetic ? `${entry.phonetic} · ` : ""}${entry.chinese}`;
  return `
    <article class="entry-card">
      <button class="entry-main" data-go="word/${entry.id}">
        <strong>${main}</strong>
        <span>${sub}</span>
        ${entry.example ? `<small>${entry.example}<br>${entry.exampleCn}</small>` : ""}
      </button>
      <div class="actions">
        <button title="朗读" data-speak="${entry.id}">${icon("volume")}</button>
        <button data-repeat="${entry.id}">跟读</button>
        <button title="收藏" class="${isFavorite(entry.id) ? "saved" : ""}" data-fav="${entry.id}">${icon("heart")}</button>
      </div>
    </article>
  `;
}

function WordDetail() {
  const entry = getEntry(state.route.a) || allItems()[0];
  const isDialog = entry.type === "dialog";
  return shell(`
    ${TopBack(entry.sceneName)}
    <section class="detail-card">
      <p class="eyebrow">${labelType(entry.type)}</p>
      <h2>${isDialog ? entry.title : entry.english}</h2>
      <p class="meaning">${entry.chinese}</p>
      ${entry.phonetic ? `<p class="phonetic">${entry.phonetic} · ${entry.pos}</p>` : ""}
      ${isDialog ? DialogLines(entry) : `<div class="example"><b>${entry.example}</b><span>${entry.exampleCn}</span></div>`}
      <div class="button-stack">
        <button class="primary" data-speak="${entry.id}">${icon("volume")}朗读</button>
        <button data-repeat="${entry.id}">跟读</button>
        <button class="${isFavorite(entry.id) ? "saved" : ""}" data-fav="${entry.id}">${icon("heart")}${isFavorite(entry.id) ? "已收藏" : "加入收藏"}</button>
        <button data-done="${entry.id}">${icon("check")}我已跟读</button>
      </div>
    </section>
  `);
}

function DialogLines(entry) {
  return `<div class="dialog-lines">${entry.lines.map(([role, text]) => `<p><b>${role}</b><span>${text}</span></p>`).join("")}</div>`;
}

function Favorites() {
  const entries = state.favorites.map(getEntry).filter(Boolean);
  return shell(`
    <section class="page-title"><h2>个人收藏</h2><p>单词、句子、对话都在这里</p></section>
    <section class="stat-row">
      <div><strong>${entries.length}</strong><span>已收藏</span></div>
      <div><strong>${state.mastered.length}</strong><span>已掌握</span></div>
    </section>
    <section class="list empty-wrap">
      ${entries.length ? entries.map(EntryCard).join("") : Empty("还没有收藏内容", "去首页选择一个场景，把救场表达收进来。")}
    </section>
  `);
}

function Practice() {
  const filter = scenes.some((scene) => scene.id === state.route.a) ? state.route.a : "all";
  const deck = practiceDeck(filter);
  const entry = deck[seededIndex(state.route.b, deck.length)];
  if (!entry) {
    return shell(`
      <section class="page-title"><h2>翻牌练习</h2><p>这个场景暂时没有可练习内容</p></section>
      ${PracticeFilter(filter)}
      ${Empty("练习牌堆是空的", "换一个场景继续练习。")}
    `);
  }
  return shell(`
    <section class="page-title"><h2>翻牌练习</h2><p>随机抽取卡片，也可以只练某一个场景</p></section>
    ${PracticeFilter(filter)}
    <section class="flip-card" data-flip>
      <div class="front">
        <small>${entry.sceneName} · ${labelType(entry.type)}</small>
        <strong>${entry.type === "dialog" ? entry.title : entry.english}</strong>
        ${entry.phonetic ? `<span>${entry.phonetic}</span>` : ""}
      </div>
      <div class="back">
        <small>中文意思</small>
        <strong>${entry.chinese}</strong>
        ${entry.exampleCn ? `<span>${entry.exampleCn}</span>` : ""}
      </div>
    </section>
    <div class="button-stack">
      <button data-speak="${entry.id}">${icon("volume")}听朗读想意思</button>
      <button data-flip-button>翻牌</button>
      <button class="primary" data-done="${entry.id}">${icon("check")}我掌握了</button>
      <button data-go="practice/${filter}/${randomSeed()}">随机下一张</button>
      <button data-checkin>完成今日练习</button>
    </div>
  `);
}

function PracticeFilter(active) {
  const chips = [["all", "全部"], ...scenes.map((scene) => [scene.id, scene.name])];
  return `
    <section class="practice-filter">
      ${chips.map(([id, label]) => `<button class="${active === id ? "active" : ""}" data-go="practice/${id}/${randomSeed()}">${label}</button>`).join("")}
    </section>
  `;
}

function Result() {
  return shell(`
    <section class="result">
      <div>${icon("check")}</div>
      <h2>今日已打卡</h2>
      <p>完成 ${state.todayCount || 1} 次练习，连续打卡 ${streak()} 天。</p>
      <button class="primary" data-go="profile">查看进度</button>
    </section>
  `);
}

function Profile() {
  const stats = getProfileStats();
  return shell(`
    <section class="profile-card">
      <div class="avatar">${state.profile.avatar}</div>
      <div>
        <p>${state.loggedIn ? "已登录" : "未登录"}</p>
        <h2>${state.profile.nickname}</h2>
        <span>${state.profile.account} · ${state.profile.level}</span>
      </div>
      <button data-account-action="edit-profile">编辑</button>
    </section>
    <section class="profile-stats">
      ${stat("今日练习", stats.todayPractice, "次")}
      ${stat("连续打卡", stats.streakDays, "天")}
      ${stat("已收藏", stats.favorites, "条")}
      ${stat("已掌握", stats.mastered, "条")}
    </section>
    <section class="settings-list profile-menu">
      ${settingRow("settings", "设置", "账号安全、通知、偏好设置", "gear", "settings")}
    </section>
  `);
}

function Settings() {
  return shell(`
    ${TopBack("设置")}
    <section class="settings-list">
      ${settingRow("edit-profile", "个人信息", "头像、昵称、账号资料", "user", "account-action")}
      ${settingRow("change-password", "更换密码", "保护你的账号安全", "lock", "account-action")}
      ${settingRow("notification", "学习提醒", "每日练习与打卡通知", "bell", "toast")}
      ${settingRow("privacy", "隐私与数据", "收藏、练习记录和本地数据", "shield", "toast")}
    </section>
    <section class="settings-list danger-list">
      ${state.loggedIn
        ? settingRow("logout", "退出登录", "退出当前账号", "logout", "account-action", true)
        : settingRow("login", "登录", "登录后同步学习数据", "user", "account-action")}
    </section>
  `);
}

function settingRow(action, title, desc, iconName, type, danger = false) {
  const attr = type === "settings" ? `data-account-action="settings"` : type === "toast" ? `data-toast="${title}"` : `data-account-action="${action}"`;
  return `
    <button class="setting-row ${danger ? "danger" : ""}" ${attr}>
      <span>${icon(iconName)}</span>
      <b>${title}<small>${desc}</small></b>
      ${icon("arrow")}
    </button>
  `;
}

function stat(label, value, unit = "") {
  return `<div><strong>${value}<small>${unit}</small></strong><span>${label}</span></div>`;
}

function Empty(title, text) {
  return `<div class="empty"><strong>${title}</strong><p>${text}</p><button data-go="home">去首页</button></div>`;
}

function TopBack(title) {
  return `<header class="topbar"><button data-back>‹</button><strong>${title}</strong><span></span></header>`;
}

function shell(content) {
  return `<main class="screen">${content}</main>`;
}

function Nav() {
  const page = state.route.page;
  const items = [
    ["home", "首页", "home"],
    ["practice", "练习", "book"],
    ["favorites", "收藏", "star"],
    ["profile", "我的", "user"]
  ];
  return `<nav class="bottom-nav">${items.map(([id, label, name]) => `<button class="${page === id ? "active" : ""}" data-go="${id}">${icon(name)}<span>${label}</span></button>`).join("")}</nav>`;
}

function labelType(type) {
  return { word: "高频单词", sentence: "常用句子", dialog: "情景对话" }[type];
}

function toast(text) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

function bind() {
  document.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => navigate(el.dataset.go)));
  document.querySelectorAll("[data-back]").forEach((el) => el.addEventListener("click", () => history.back()));
  document.querySelectorAll("[data-fav]").forEach((el) => el.addEventListener("click", () => toggleFavorite(el.dataset.fav)));
  document.querySelectorAll("[data-speak]").forEach((el) => el.addEventListener("click", () => speak(speechText(getEntry(el.dataset.speak)))));
  document.querySelectorAll("[data-repeat]").forEach((el) => el.addEventListener("click", () => repeat(getEntry(el.dataset.repeat))));
  document.querySelectorAll("[data-done]").forEach((el) => el.addEventListener("click", () => markRead(el.dataset.done)));
  document.querySelectorAll("[data-checkin]").forEach((el) => el.addEventListener("click", checkIn));
  document.querySelectorAll("[data-account-action]").forEach((el) => el.addEventListener("click", () => accountAction(el.dataset.accountAction)));
  document.querySelectorAll("[data-toast]").forEach((el) => el.addEventListener("click", () => toast(`${el.dataset.toast}暂未开放`)));
  document.querySelectorAll("[data-flip-button], [data-flip]").forEach((el) => el.addEventListener("click", () => document.querySelector("[data-flip]")?.classList.toggle("show-back")));
}

function addSceneContent() {
  const pack = {
    airport: {
      words: [
        ["security check", "/sɪˈkjʊrəti tʃek/", "安检", "n.", "Please go through the security check.", "请通过安检。"],
        ["carry-on", "/ˈkæri ɑːn/", "随身行李", "n.", "Is this carry-on allowed?", "这个随身行李可以带吗？"],
        ["departure", "/dɪˈpɑːrtʃər/", "出发", "n.", "The departure gate has changed.", "登机口变更了。"],
        ["baggage claim", "/ˈbæɡɪdʒ kleɪm/", "行李提取处", "n.", "Where is baggage claim?", "行李提取处在哪里？"]
      ],
      sentences: [
        ["Where can I check in?", "", "我在哪里值机？", "", "Excuse me, where can I check in for this flight?", "打扰一下，我在哪里办理这个航班的值机？"],
        ["My flight is delayed.", "", "我的航班延误了。", "", "My flight is delayed. What should I do?", "我的航班延误了，我该怎么办？"],
        ["I cannot find my luggage.", "", "我找不到我的行李。", "", "I cannot find my luggage at baggage claim.", "我在行李提取处找不到我的行李。"],
        ["Could you help me find my terminal?", "", "能帮我找航站楼吗？", "", "Could you help me find Terminal 2?", "能帮我找 2 号航站楼吗？"]
      ],
      dialogs: [
        ["airport-gate", "寻找登机口", [["You", "Excuse me, where is gate B12?"], ["Staff", "Go straight and turn left after security."], ["You", "How long does it take to get there?"], ["Staff", "About ten minutes."]], "问登机口位置和步行时间。"],
        ["airport-delay", "航班延误", [["You", "My flight is delayed. Is there a new boarding time?"], ["Staff", "Boarding is now at 6:30 p.m."], ["You", "Do I need to change gates?"], ["Staff", "No, please stay at gate B12."]], "确认新的登机时间和登机口。"]
      ]
    },
    hotel: {
      words: [
        ["front desk", "/ˌfrʌnt ˈdesk/", "前台", "n.", "Please call the front desk.", "请联系前台。"],
        ["housekeeping", "/ˈhaʊskiːpɪŋ/", "客房服务", "n.", "Could you send housekeeping?", "可以安排客房服务吗？"],
        ["deposit", "/dɪˈpɑːzɪt/", "押金", "n.", "Is there a deposit?", "需要押金吗？"],
        ["checkout", "/ˈtʃek aʊt/", "退房", "n./v.", "What time is checkout?", "几点退房？"]
      ],
      sentences: [
        ["Can I check in early?", "", "我可以提前入住吗？", "", "Can I check in early if the room is ready?", "如果房间准备好了，我可以提前入住吗？"],
        ["Could I change rooms?", "", "我可以换房间吗？", "", "Could I change rooms? It is too noisy.", "我可以换房间吗？这里太吵了。"],
        ["Can I leave my luggage here?", "", "我可以寄存行李吗？", "", "Can I leave my luggage here after checkout?", "退房后我可以把行李寄存在这里吗？"],
        ["The key card does not work.", "", "房卡不能用。", "", "The key card does not work. Could you reset it?", "房卡不能用，可以帮我重置一下吗？"]
      ],
      dialogs: [
        ["hotel-problem", "房间有问题", [["You", "The air conditioner is not working."], ["Staff", "I am sorry. We will send someone up."], ["You", "Could you please check it soon?"], ["Staff", "Of course, within ten minutes."]], "说明房间问题并请求尽快处理。"],
        ["hotel-checkout", "退房寄存", [["You", "I would like to check out."], ["Staff", "Sure. Did you use the minibar?"], ["You", "No, I did not."], ["You", "Can I leave my luggage here until 3 p.m.?"]], "退房并询问是否能寄存行李。"]
      ]
    },
    restaurant: {
      words: [
        ["reservation", "/ˌrezərˈveɪʃn/", "订位", "n.", "We have a reservation for two.", "我们订了两个人的位置。"],
        ["spicy", "/ˈspaɪsi/", "辣的", "adj.", "Is this dish spicy?", "这道菜辣吗？"],
        ["vegetarian", "/ˌvedʒəˈteriən/", "素食的", "adj.", "Do you have vegetarian options?", "有素食选择吗？"],
        ["takeout box", "/ˈteɪkaʊt bɑːks/", "打包盒", "n.", "Could I get a takeout box?", "可以给我一个打包盒吗？"]
      ],
      sentences: [
        ["A table for two, please.", "", "两位，谢谢。", "", "Hi, a table for two, please.", "你好，两位，谢谢。"],
        ["Could you make it less spicy?", "", "可以少辣一点吗？", "", "Could you make this dish less spicy?", "这道菜可以少辣一点吗？"],
        ["Does this contain seafood?", "", "这里面有海鲜吗？", "", "Does this soup contain seafood?", "这个汤里面有海鲜吗？"],
        ["Could we split the bill?", "", "我们可以分开买单吗？", "", "Could we split the bill between two cards?", "我们可以用两张卡分开买单吗？"]
      ],
      dialogs: [
        ["restaurant-table", "入座点餐", [["You", "A table for two, please."], ["Staff", "Do you have a reservation?"], ["You", "No, we do not."], ["Staff", "No problem. Please follow me."]], "没有订位时请求两人桌。"],
        ["restaurant-allergy", "说明忌口", [["You", "I am allergic to peanuts."], ["Staff", "Thank you for telling us."], ["You", "Does this dish have peanuts?"], ["Staff", "No, but I will double-check."]], "说明过敏并请服务员确认。"]
      ]
    },
    shopping: {
      words: [
        ["discount", "/ˈdɪskaʊnt/", "折扣", "n.", "Is there a discount today?", "今天有折扣吗？"],
        ["fitting room", "/ˈfɪtɪŋ ruːm/", "试衣间", "n.", "Where is the fitting room?", "试衣间在哪里？"],
        ["exchange", "/ɪksˈtʃeɪndʒ/", "换货", "v./n.", "Can I exchange this?", "这个可以换吗？"],
        ["cashier", "/kæˈʃɪr/", "收银台", "n.", "The cashier is over there.", "收银台在那里。"]
      ],
      sentences: [
        ["Do you have this in black?", "", "这个有黑色的吗？", "", "Do you have this in black or navy?", "这个有黑色或藏青色的吗？"],
        ["Is this on sale?", "", "这个在打折吗？", "", "Excuse me, is this on sale?", "打扰一下，这个在打折吗？"],
        ["Can I return it if it does not fit?", "", "不合适可以退吗？", "", "Can I return it if it does not fit me?", "如果不合身我可以退吗？"],
        ["Could you gift-wrap it?", "", "可以帮我包装成礼物吗？", "", "Could you gift-wrap it, please?", "可以帮我包装成礼物吗？"]
      ],
      dialogs: [
        ["shopping-tax", "询问退税", [["You", "Can I get a tax refund form?"], ["Staff", "Yes. May I see your passport?"], ["You", "Sure. Here it is."], ["Staff", "Please keep the receipt."]], "购物后索要退税单。"],
        ["shopping-return", "退换货政策", [["You", "Can I return this if it does not fit?"], ["Staff", "Yes, within 30 days with the receipt."], ["You", "Can I exchange it for another size?"], ["Staff", "Yes, if it is unused."]], "确认退货和换尺码规则。"]
      ]
    },
    tickets: {
      words: [
        ["opening hours", "/ˈoʊpənɪŋ aʊərz/", "开放时间", "n.", "What are the opening hours?", "开放时间是什么？"],
        ["guided tour", "/ˈɡaɪdɪd tʊr/", "导览", "n.", "Is there a guided tour?", "有导览吗？"],
        ["adult ticket", "/ˈædʌlt ˈtɪkɪt/", "成人票", "n.", "Two adult tickets, please.", "请给我两张成人票。"],
        ["available", "/əˈveɪləbl/", "有空位的", "adj.", "Are tickets still available?", "还有票吗？"]
      ],
      sentences: [
        ["Are tickets available for today?", "", "今天还有票吗？", "", "Are tickets still available for today?", "今天还可以买票吗？"],
        ["How long is the visit?", "", "参观需要多久？", "", "How long does the visit usually take?", "参观通常需要多久？"],
        ["Is audio guide included?", "", "包含语音导览吗？", "", "Is the audio guide included in the ticket?", "门票包含语音导览吗？"],
        ["Can I book for tomorrow?", "", "我可以预约明天吗？", "", "Can I book two tickets for tomorrow morning?", "我可以预约明天上午两张票吗？"]
      ],
      dialogs: [
        ["tickets-hours", "询问开放时间", [["You", "What time do you close today?"], ["Staff", "We close at 6 p.m."], ["You", "What time is the last entry?"], ["Staff", "The last entry is at 5 p.m."]], "确认关门时间和最晚入场时间。"],
        ["tickets-guide", "购买导览票", [["You", "Two adult tickets, please."], ["Staff", "Would you like an audio guide?"], ["You", "Yes, is it included?"], ["Staff", "It is five dollars extra."]], "买票并询问语音导览是否包含。"]
      ]
    },
    transport: {
      words: [
        ["fare", "/fer/", "票价", "n.", "What is the fare?", "票价是多少？"],
        ["schedule", "/ˈskedʒuːl/", "时刻表", "n.", "Where can I see the schedule?", "哪里可以看时刻表？"],
        ["stop", "/stɑːp/", "车站", "n.", "Is this the right stop?", "这是正确的车站吗？"],
        ["round-trip ticket", "/ˌraʊnd trɪp ˈtɪkɪt/", "往返票", "n.", "A round-trip ticket, please.", "请给我一张往返票。"]
      ],
      sentences: [
        ["Where can I buy a ticket?", "", "我在哪里买票？", "", "Where can I buy a ticket for the subway?", "我在哪里买地铁票？"],
        ["Is this train going downtown?", "", "这趟车去市中心吗？", "", "Is this train going downtown or to the airport?", "这趟车去市中心还是机场？"],
        ["How often does the bus come?", "", "公交多久来一班？", "", "How often does this bus come?", "这路公交多久来一班？"],
        ["Please tell me when to get off.", "", "请告诉我什么时候下车。", "", "Could you please tell me when to get off?", "可以请你告诉我什么时候下车吗？"]
      ],
      dialogs: [
        ["transport-ticket", "买交通票", [["You", "Where can I buy a ticket?"], ["Staff", "Use the machine on your left."], ["You", "Can I pay by card?"], ["Staff", "Yes, card and cash are both accepted."]], "询问购票位置和付款方式。"],
        ["transport-transfer", "确认换乘", [["You", "Do I need to transfer to get downtown?"], ["Staff", "Yes, transfer to Line 3 at Central."], ["You", "Which platform should I use?"], ["Staff", "Platform 2."]], "确认是否换乘以及站台。"]
      ]
    }
  };

  scenes.forEach((scene) => {
    const extra = pack[scene.id];
    scene.words.push(...extra.words.map((row) => item("word", ...row)));
    scene.sentences.push(...extra.sentences.map((row) => item("sentence", ...row)));
    scene.dialogs.push(...extra.dialogs.map((row) => dialog(...row)));
    scene.sentences = ensureOneHundredSentences(scene);
  });
}

function ensureOneHundredSentences(scene) {
  const seen = new Set(scene.sentences.map((entry) => entry.english.toLowerCase()));
  const generated = [];
  const frames = sentenceFrames(scene.id);
  sentenceTargets(scene.id).forEach((target) => {
    frames.forEach((frame) => {
      if (scene.sentences.length + generated.length >= 100) return;
      const english = frame.en(target.en);
      const key = english.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      generated.push({
        id: `sentence-${scene.id}-${String(generated.length + 1).padStart(3, "0")}`,
        type: "sentence",
        english,
        phonetic: "",
        chinese: frame.cn(target.cn),
        pos: "",
        example: frame.example ? frame.example(target.en) : english,
        exampleCn: frame.exampleCn ? frame.exampleCn(target.cn) : frame.cn(target.cn)
      });
    });
  });
  return [...scene.sentences, ...generated].slice(0, 100);
}

function sentenceTargets(sceneId) {
  const targets = {
    airport: [
      ["check-in counter", "值机柜台"], ["boarding gate", "登机口"], ["security checkpoint", "安检口"], ["baggage claim", "行李提取处"],
      ["transfer desk", "转机柜台"], ["information desk", "问讯处"], ["departure hall", "出发大厅"], ["arrival hall", "到达大厅"],
      ["customs area", "海关区域"], ["Terminal 2", "2 号航站楼"], ["self check-in machine", "自助值机机器"], ["oversized baggage counter", "大件行李柜台"],
      ["passport control", "护照检查处"], ["luggage belt", "行李转盘"], ["airport shuttle", "机场接驳车"], ["priority lane", "优先通道"],
      ["lost luggage office", "行李丢失办公室"], ["charging station", "充电区"], ["currency exchange", "货币兑换处"], ["tax refund counter", "退税柜台"]
    ],
    hotel: [
      ["front desk", "前台"], ["Wi-Fi password", "Wi-Fi 密码"], ["breakfast area", "早餐区"], ["elevator", "电梯"],
      ["room key", "房卡"], ["extra towel", "额外毛巾"], ["quiet room", "安静房间"], ["non-smoking room", "无烟房"],
      ["late checkout", "延迟退房"], ["early check-in", "提前入住"], ["luggage storage", "行李寄存"], ["airport shuttle", "机场接驳车"],
      ["housekeeping", "客房服务"], ["laundry service", "洗衣服务"], ["room service", "客房送餐"], ["wake-up call", "叫醒服务"],
      ["receipt", "收据"], ["deposit", "押金"], ["adapter", "转换插头"], ["taxi booking", "出租车预订"]
    ],
    restaurant: [
      ["menu", "菜单"], ["table for two", "两人桌"], ["recommendation", "推荐菜"], ["vegetarian option", "素食选择"],
      ["local specialty", "当地特色菜"], ["less spicy version", "少辣版本"], ["allergy information", "过敏信息"], ["seafood ingredient", "海鲜成分"],
      ["peanut ingredient", "花生成分"], ["kids' meal", "儿童餐"], ["drinking water", "饮用水"], ["fork and spoon", "叉子和勺子"],
      ["bill", "账单"], ["takeout box", "打包盒"], ["dessert menu", "甜品菜单"], ["window seat", "靠窗座位"],
      ["reservation", "订位"], ["service charge", "服务费"], ["card payment", "刷卡付款"], ["separate bills", "分开账单"]
    ],
    shopping: [
      ["price", "价格"], ["discount", "折扣"], ["smaller size", "小一号"], ["larger size", "大一号"],
      ["black color", "黑色款"], ["white color", "白色款"], ["fitting room", "试衣间"], ["cashier", "收银台"],
      ["tax refund form", "退税单"], ["receipt", "小票"], ["gift wrapping", "礼品包装"], ["return policy", "退货政策"],
      ["exchange policy", "换货政策"], ["credit card payment", "信用卡付款"], ["cash payment", "现金付款"], ["new item", "新的商品"],
      ["shopping bag", "购物袋"], ["coupon", "优惠券"], ["customer service desk", "客服柜台"], ["security tag", "防盗扣"]
    ],
    tickets: [
      ["adult ticket", "成人票"], ["child ticket", "儿童票"], ["student ticket", "学生票"], ["family ticket", "家庭票"],
      ["ticket office", "售票处"], ["online booking", "线上预约"], ["QR code", "二维码"], ["audio guide", "语音导览"],
      ["English guide", "英文导览"], ["opening hours", "开放时间"], ["last entry", "最晚入场"], ["entrance", "入口"],
      ["exit", "出口"], ["map", "地图"], ["souvenir shop", "纪念品店"], ["guided tour", "导览团"],
      ["time slot", "预约时间段"], ["refund policy", "退款政策"], ["photo rules", "拍照规则"], ["shuttle stop", "接驳车站"]
    ],
    transport: [
      ["subway ticket", "地铁票"], ["bus ticket", "公交票"], ["train ticket", "火车票"], ["one-way ticket", "单程票"],
      ["round-trip ticket", "往返票"], ["day pass", "日票"], ["ticket machine", "售票机"], ["ticket office", "售票处"],
      ["Platform 2", "2 号站台"], ["bus stop", "公交站"], ["transfer station", "换乘站"], ["airport shuttle", "机场接驳车"],
      ["taxi stand", "出租车站"], ["downtown route", "去市中心的路线"], ["museum route", "去博物馆的路线"], ["train schedule", "火车时刻表"],
      ["next stop", "下一站"], ["fare", "票价"], ["rechargeable card", "充值卡"], ["wrong train", "坐错的车"]
    ]
  };
  return (targets[sceneId] || []).map(([en, cn]) => ({ en, cn }));
}

function sentenceFrames(sceneId) {
  const frames = {
    airport: [
      { en: (x) => `Where is the ${x}?`, cn: (x) => `${x}在哪里？` },
      { en: (x) => `How do I get to the ${x}?`, cn: (x) => `我怎么去${x}？` },
      { en: (x) => `Could you help me find the ${x}?`, cn: (x) => `可以帮我找到${x}吗？` },
      { en: (x) => `Is this the way to the ${x}?`, cn: (x) => `这是去${x}的路吗？` },
      { en: (x) => `I need to go to the ${x}.`, cn: (x) => `我需要去${x}。` }
    ],
    hotel: [
      { en: (x) => `Could I get the ${x}?`, cn: (x) => `可以给我${x}吗？` },
      { en: (x) => `Where can I find the ${x}?`, cn: (x) => `我在哪里可以找到${x}？` },
      { en: (x) => `I need help with the ${x}.`, cn: (x) => `我需要关于${x}的帮助。` },
      { en: (x) => `Is the ${x} available?`, cn: (x) => `${x}可以提供吗？` },
      { en: (x) => `Could you arrange the ${x} for me?`, cn: (x) => `可以帮我安排${x}吗？` }
    ],
    restaurant: [
      { en: (x) => `Could we have the ${x}?`, cn: (x) => `可以给我们${x}吗？` },
      { en: (x) => `Do you have a ${x}?`, cn: (x) => `你们有${x}吗？` },
      { en: (x) => `Could you tell me about the ${x}?`, cn: (x) => `可以给我介绍一下${x}吗？` },
      { en: (x) => `Is the ${x} included?`, cn: (x) => `${x}包含在内吗？` },
      { en: (x) => `Can we order the ${x}?`, cn: (x) => `我们可以点${x}吗？` }
    ],
    shopping: [
      { en: (x) => `Do you have the ${x}?`, cn: (x) => `你们有${x}吗？` },
      { en: (x) => `How much is the ${x}?`, cn: (x) => `${x}多少钱？` },
      { en: (x) => `Can I see the ${x}?`, cn: (x) => `我可以看一下${x}吗？` },
      { en: (x) => `Is the ${x} available?`, cn: (x) => `${x}有货吗？` },
      { en: (x) => `Could you help me with the ${x}?`, cn: (x) => `可以帮我处理${x}吗？` }
    ],
    tickets: [
      { en: (x) => `I would like the ${x}.`, cn: (x) => `我想要${x}。` },
      { en: (x) => `Where can I get the ${x}?`, cn: (x) => `我在哪里可以拿到${x}？` },
      { en: (x) => `Is the ${x} included?`, cn: (x) => `${x}包含在内吗？` },
      { en: (x) => `Do I need the ${x}?`, cn: (x) => `我需要${x}吗？` },
      { en: (x) => `Could you explain the ${x}?`, cn: (x) => `可以解释一下${x}吗？` }
    ],
    transport: [
      { en: (x) => `Where can I get the ${x}?`, cn: (x) => `我在哪里可以获得${x}？` },
      { en: (x) => `Do I need the ${x}?`, cn: (x) => `我需要${x}吗？` },
      { en: (x) => `How do I use the ${x}?`, cn: (x) => `我怎么使用${x}？` },
      { en: (x) => `Is this the right ${x}?`, cn: (x) => `这是正确的${x}吗？` },
      { en: (x) => `Could you help me find the ${x}?`, cn: (x) => `可以帮我找到${x}吗？` }
    ]
  };
  return frames[sceneId] || frames.airport;
}

if (!location.hash) location.hash = "#/home";
render();
