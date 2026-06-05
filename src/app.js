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
  todayCount: Number(localStorage.getItem("jiega:todayCount") || 0),
  dialogEnglishOnly: localStorage.getItem("jiega:dialogEnglishOnly") === "true"
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
  const normalizedLines = lines.map(([role, english, chineseLine]) => [role, english, chineseLine || translateDialogLine(english)]);
  return {
    id,
    type: "dialog",
    title,
    lines: normalizedLines,
    english: normalizedLines.map((line) => `${line[0]}: ${line[1]}`).join("\n"),
    chinese
  };
}

function translateDialogLine(text) {
  const translations = {
    "May I see your passport and boarding pass?": "可以看一下您的护照和登机牌吗？",
    "Sure. Here you are.": "当然，给您。",
    "Do you have any luggage to check?": "您有需要托运的行李吗？",
    "Yes, just this suitcase.": "有，就这个行李箱。",
    "Hello, I have a reservation.": "你好，我有预订。",
    "May I have your passport, please?": "请给我您的护照。",
    "Sure. Is breakfast included?": "好的。包含早餐吗？",
    "Yes, from 7 to 10 a.m.": "包含，早上 7 点到 10 点。",
    "What do you recommend?": "你推荐什么？",
    "The grilled fish is popular.": "烤鱼很受欢迎。",
    "Great. I'll have that.": "好的，我要这个。",
    "Could we have the bill, please?": "请给我们账单好吗？",
    "Can I try this on?": "我可以试穿这个吗？",
    "Sure. The fitting room is over there.": "当然，试衣间在那边。",
    "Do you have a larger size?": "有大一号的吗？",
    "Let me check for you.": "我帮您查一下。",
    "Two tickets, please.": "请给我两张票。",
    "For adults or children?": "成人票还是儿童票？",
    "Two adults.": "两张成人票。",
    "That will be 40 dollars.": "一共 40 美元。",
    "Which line should I take to the museum?": "去博物馆我应该坐哪条线？",
    "Take Line 2 and transfer at Central.": "坐 2 号线，在 Central 换乘。",
    "How many stops is it?": "有几站？",
    "It is five stops from here.": "从这里五站。",
    "Excuse me, where is gate B12?": "打扰一下，B12 登机口在哪里？",
    "Go straight and turn left after security.": "直走，过安检后左转。",
    "How long does it take to get there?": "到那里需要多久？",
    "About ten minutes.": "大约十分钟。",
    "My flight is delayed. Is there a new boarding time?": "我的航班延误了，有新的登机时间吗？",
    "Boarding is now at 6:30 p.m.": "现在改为晚上 6 点 30 分登机。",
    "Do I need to change gates?": "我需要换登机口吗？",
    "No, please stay at gate B12.": "不需要，请留在 B12 登机口。",
    "The air conditioner is not working.": "空调不能用。",
    "I am sorry. We will send someone up.": "很抱歉，我们会派人上去。",
    "Could you please check it soon?": "可以尽快检查一下吗？",
    "Of course, within ten minutes.": "当然，十分钟内到。",
    "I would like to check out.": "我想退房。",
    "Sure. Did you use the minibar?": "好的。您使用迷你吧了吗？",
    "No, I did not.": "没有。",
    "Can I leave my luggage here until 3 p.m.?": "我可以把行李寄存到下午 3 点吗？",
    "A table for two, please.": "两位，谢谢。",
    "Do you have a reservation?": "您有预订吗？",
    "No, we do not.": "没有。",
    "No problem. Please follow me.": "没问题，请跟我来。",
    "I am allergic to peanuts.": "我对花生过敏。",
    "Thank you for telling us.": "谢谢您告诉我们。",
    "Does this dish have peanuts?": "这道菜有花生吗？",
    "No, but I will double-check.": "没有，但我会再确认一下。",
    "Can I get a tax refund form?": "可以给我退税单吗？",
    "Yes. May I see your passport?": "可以。请出示您的护照。",
    "Please keep the receipt.": "请保留小票。",
    "Can I return this if it does not fit?": "如果不合适我可以退吗？",
    "Yes, within 30 days with the receipt.": "可以，30 天内凭小票退货。",
    "Can I exchange it for another size?": "我可以换另一个尺码吗？",
    "Yes, if it is unused.": "可以，前提是未使用过。",
    "What time do you close today?": "你们今天几点关门？",
    "We close at 6 p.m.": "我们下午 6 点关门。",
    "What time is the last entry?": "最晚几点入场？",
    "The last entry is at 5 p.m.": "最晚下午 5 点入场。",
    "Would you like an audio guide?": "您需要语音导览吗？",
    "Yes, is it included?": "需要，包含在票里吗？",
    "It is five dollars extra.": "需要额外 5 美元。",
    "Where can I buy a ticket?": "我在哪里买票？",
    "Use the machine on your left.": "请使用左边的机器。",
    "Can I pay by card?": "可以刷卡吗？",
    "Yes, card and cash are both accepted.": "可以，刷卡和现金都接受。",
    "Do I need to transfer to get downtown?": "去市中心我需要换乘吗？",
    "Yes, transfer to Line 3 at Central.": "需要，在 Central 换乘 3 号线。",
    "Which platform should I use?": "我应该去哪个站台？",
    "Platform 2.": "2 号站台。"
  };
  return translations[text] || "中文释义待补充。";
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
  if (entry.type === "sentence") return sentenceLines(entry).join(" ");
  return entry.example || entry.english;
}

function sentenceLines(entry) {
  return [entry.english, entry.example]
    .filter(Boolean)
    .filter((text, index, list) => list.findIndex((item) => item.toLowerCase() === text.toLowerCase()) === index);
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

function toggleDialogLanguage() {
  state.dialogEnglishOnly = !state.dialogEnglishOnly;
  localStorage.setItem("jiega:dialogEnglishOnly", String(state.dialogEnglishOnly));
  toast(state.dialogEnglishOnly ? "已切换为只显示英文" : "已切换为中英文显示");
  render();
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
  if (entry.type === "dialog") {
    return `
      <article class="entry-card dialog-entry">
        <button class="entry-main dialog-summary" data-go="word/${entry.id}">
          <strong>${entry.title}</strong>
          <span>${entry.chinese}</span>
          ${icon("arrow")}
        </button>
      </article>
    `;
  }
  const main = entry.type === "dialog" ? entry.title : entry.english;
  const sub = entry.type === "dialog" ? entry.chinese : `${entry.phonetic ? `${entry.phonetic} · ` : ""}${entry.chinese}`;
  const content = entry.type === "sentence"
    ? SentenceBlock(entry, "preview")
    : `<strong>${main}</strong><span>${sub}</span>${entry.example ? `<small>${entry.example}<br>${entry.exampleCn}</small>` : ""}`;
  return `
    <article class="entry-card">
      <button class="entry-main" data-go="word/${entry.id}">
        ${content}
      </button>
      <div class="actions">
        <button class="repeat-action" data-repeat="${entry.id}">${icon("volume")}跟读</button>
        <button title="收藏" class="${isFavorite(entry.id) ? "saved" : ""}" data-fav="${entry.id}">${icon("heart")}</button>
      </div>
    </article>
  `;
}

function WordDetail() {
  const entry = getEntry(state.route.a) || allItems()[0];
  const isDialog = entry.type === "dialog";
  const isSentence = entry.type === "sentence";
  return shell(`
    ${TopBack(entry.sceneName)}
    <section class="detail-card ${isSentence ? "sentence-detail" : ""} ${isDialog ? "dialog-detail" : ""}">
      <div class="detail-head">
        <p class="eyebrow">${labelType(entry.type)}</p>
        ${isDialog ? `<button class="language-toggle" data-dialog-lang>${state.dialogEnglishOnly ? "显示中英文" : "只显示英文"}</button>` : ""}
      </div>
      ${isSentence ? SentenceBlock(entry, "detail") : `
        <h2>${isDialog ? entry.title : entry.english}</h2>
        <p class="meaning">${entry.chinese}</p>
        ${entry.phonetic ? `<p class="phonetic">${entry.phonetic} · ${entry.pos}</p>` : ""}
        ${isDialog ? DialogLines(entry) : `<div class="example"><b>${entry.example}</b><span>${entry.exampleCn}</span></div>`}
      `}
      ${isDialog ? "" : `
        <div class="button-stack">
          <button class="primary" data-repeat="${entry.id}">${icon("volume")}跟读</button>
          <button class="${isFavorite(entry.id) ? "saved" : ""}" data-fav="${entry.id}">${icon("heart")}${isFavorite(entry.id) ? "已收藏" : "加入收藏"}</button>
          <button data-done="${entry.id}">${icon("check")}我已跟读</button>
        </div>
      `}
    </section>
  `);
}

function SentenceBlock(entry, mode = "preview") {
  const chineseLines = [entry.chinese, entry.exampleCn].filter(Boolean);
  const pairs = sentenceLines(entry).map((english, index) => ({
    english,
    chinese: chineseLines[index] || chineseLines[0] || ""
  }));
  return `
    <div class="sentence-block ${mode === "detail" ? "large" : ""}">
      ${pairs.map((line) => `
        <div class="sentence-pair">
          <p>${line.english}</p>
          ${line.chinese ? `<span>${line.chinese}</span>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function DialogLines(entry) {
  return `
    <div class="dialog-lines ${state.dialogEnglishOnly ? "english-only" : ""}">
      ${entry.lines.map(([role, text, chinese]) => `
        <p>
          <b>${role}</b>
          <span class="dialog-en">${text}</span>
          ${state.dialogEnglishOnly ? "" : `<span class="dialog-cn">${chinese}</span>`}
        </p>
      `).join("")}
    </div>
  `;
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
  document.querySelectorAll("[data-dialog-lang]").forEach((el) => el.addEventListener("click", toggleDialogLanguage));
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
    scene.dialogs = ensureTwentyDialogs(scene);
    scene.sentences = ensureOneHundredSentences(scene);
  });
}

function ensureTwentyDialogs(scene) {
  const dialogs = [...scene.dialogs];
  const seen = new Set(dialogs.map((entry) => entry.id));
  dialogTopics(scene.id).forEach((topic) => {
    if (dialogs.length >= 20) return;
    const id = `${scene.id}-${topic.id}`;
    if (seen.has(id)) return;
    seen.add(id);
    dialogs.push(dialog(id, topic.title, [
      ["You", topic.ask, topic.askCn],
      ["Staff", topic.answer, topic.answerCn],
      ["You", topic.follow, topic.followCn],
      ["Staff", topic.close, topic.closeCn]
    ], topic.summary));
  });
  return dialogs;
}

function dialogTopics(sceneId) {
  const common = {
    airport: [
      ["checkin-counter", "寻找值机柜台", "到达机场后不知道在哪里办理值机。", "Excuse me, where can I check in for Flight 218?", "打扰一下，218 航班在哪里值机？", "Please use counter C, near entrance 3.", "请去 C 柜台，在 3 号入口附近。", "Do I need to check in before security?", "我需要先值机再过安检吗？", "Yes, check in first and then go to security.", "是的，先值机，然后去安检。"],
      ["baggage-weight", "确认行李重量", "托运行李前确认是否超重。", "Is my suitcase over the weight limit?", "我的行李箱超重了吗？", "It is two kilos over the limit.", "超重两公斤。", "Can I pay for the extra weight here?", "我可以在这里支付超重费用吗？", "Yes, you can pay by card at this counter.", "可以，您可以在这个柜台刷卡支付。"],
      ["security-line", "寻找安检队伍", "不确定应该排哪条安检队。", "Which security line should I use?", "我应该走哪条安检队伍？", "Use the line on the right for international flights.", "国际航班请走右边那条队伍。", "Do I need to take out my laptop?", "我需要拿出笔记本电脑吗？", "Yes, put it in a separate tray.", "需要，请把它单独放进托盘。"],
      ["liquid-rule", "询问液体规定", "随身包里有液体，需要确认能否带上飞机。", "Can I bring this bottle through security?", "这瓶东西可以带过安检吗？", "Only bottles under 100 milliliters are allowed.", "只允许 100 毫升以下的瓶装液体。", "Can I put it in my checked luggage instead?", "那我可以把它放进托运行李吗？", "Yes, that would be fine.", "可以，那样没问题。"],
      ["gate-change", "登机口变更", "发现屏幕上登机口变了，需要确认。", "Has the gate for Flight 218 changed?", "218 航班的登机口变了吗？", "Yes, it has changed to gate D6.", "是的，已经改到 D6 登机口。", "How far is gate D6 from here?", "D6 登机口离这里多远？", "It is about a twelve-minute walk.", "步行大约十二分钟。"],
      ["boarding-time", "确认登机时间", "想知道什么时候开始登机。", "What time does boarding start?", "什么时候开始登机？", "Boarding starts at 5:45 p.m.", "下午 5 点 45 分开始登机。", "Is there enough time to buy coffee?", "还有时间买咖啡吗？", "Yes, but please be back before 5:40.", "有，但请在 5 点 40 分前回来。"],
      ["seat-change", "更换座位", "想把座位换到靠过道或靠窗。", "Could I change to an aisle seat?", "我可以换到靠过道的座位吗？", "Let me check the seat map for you.", "我帮您查看一下座位图。", "A window seat would also be okay.", "靠窗座位也可以。", "There is one aisle seat available in row 18.", "18 排有一个靠过道座位。"],
      ["lost-passport", "找不到护照", "过安检前发现护照不见了。", "I cannot find my passport. What should I do?", "我找不到护照了，该怎么办？", "Please stay calm and check your bags first.", "请先别着急，先检查一下您的包。", "Is there a lost and found desk nearby?", "附近有失物招领处吗？", "Yes, it is beside the information desk.", "有，就在问讯处旁边。"],
      ["connecting-flight", "赶转机航班", "转机时间很紧，需要确认路线。", "I have a tight connection. Where should I go?", "我转机时间很紧，应该往哪里走？", "Follow the signs for transfer passengers.", "请跟着转机旅客的标志走。", "Do I need to go through security again?", "我需要重新过安检吗？", "Yes, but there is a priority lane ahead.", "需要，但前面有快速通道。"],
      ["baggage-claim", "寻找行李提取处", "下飞机后不知道在哪里取行李。", "Where is baggage claim for this flight?", "这个航班的行李在哪里取？", "Your bags will be on carousel 5.", "您的行李会在 5 号转盘。", "How long does it usually take?", "通常需要等多久？", "Usually about fifteen minutes.", "通常大约十五分钟。"],
      ["missing-luggage", "行李未到", "行李转盘停了但行李没出现。", "My luggage did not arrive.", "我的行李没有到。", "I am sorry. Please fill out this report.", "很抱歉，请填写这份报告。", "Can it be delivered to my hotel?", "可以送到我的酒店吗？", "Yes, please write your hotel address here.", "可以，请在这里写下您的酒店地址。"],
      ["customs-form", "填写海关表", "不确定海关申报表怎么填。", "Could you help me with this customs form?", "可以帮我看一下这张海关表吗？", "Sure. You need to write your local address here.", "当然，这里需要填写您当地的地址。", "Do I need to declare snacks?", "零食需要申报吗？", "Packaged snacks usually do not need to be declared.", "包装零食通常不需要申报。"],
      ["airport-wifi", "连接机场 Wi-Fi", "需要连接机场无线网络。", "How can I connect to the airport Wi-Fi?", "我怎么连接机场 Wi-Fi？", "Choose Airport Free Wi-Fi and enter your phone number.", "选择机场免费 Wi-Fi，然后输入手机号。", "Can I use it without a local number?", "没有当地手机号可以用吗？", "Yes, ask the information desk for a code.", "可以，向问讯处要一个验证码。"],
      ["currency-exchange", "机场换汇", "到达后想换一点现金。", "Where can I exchange money?", "我在哪里可以换钱？", "There is an exchange counter near arrivals.", "到达大厅附近有换汇柜台。", "Is there an ATM nearby?", "附近有 ATM 吗？", "Yes, it is next to the exchange counter.", "有，就在换汇柜台旁边。"],
      ["tax-free-pickup", "免税品提货", "想知道免税品在哪里提取。", "Where can I pick up my duty-free order?", "我在哪里取免税订单？", "Pick it up near gate A8 after security.", "过安检后在 A8 登机口附近领取。", "Do I need to show my passport?", "需要出示护照吗？", "Yes, passport and boarding pass are required.", "需要护照和登机牌。"],
      ["special-assistance", "寻求特殊协助", "同行者需要轮椅或额外协助。", "Could we get wheelchair assistance?", "我们可以申请轮椅协助吗？", "Of course. I will arrange it now.", "当然，我现在帮您安排。", "Where should we wait?", "我们应该在哪里等？", "Please wait beside the check-in counter.", "请在值机柜台旁边等候。"],
      ["arrival-pickup", "寻找接机区", "抵达后找不到接机地点。", "Where is the pickup area?", "接机区在哪里？", "Go out through door 6 and turn right.", "从 6 号门出去后右转。", "Can cars wait there for long?", "车可以在那里等很久吗？", "No, it is only for quick pickup.", "不可以，那里只能临时接人。"]
    ],
    hotel: [
      ["early-checkin", "提前入住", "提前到酒店，询问是否能先入住。", "Can I check in early?", "我可以提前入住吗？", "Let me see if your room is ready.", "我看一下您的房间是否准备好了。", "If not, can I leave my luggage here?", "如果还没好，我可以寄存行李吗？", "Yes, we can store it for you.", "可以，我们可以为您寄存。"],
      ["late-checkout", "延迟退房", "需要晚一点离开酒店。", "Could I have a late checkout?", "我可以延迟退房吗？", "We can extend it to 1 p.m. for free.", "我们可以免费延到下午 1 点。", "How much is it until 3 p.m.?", "延到下午 3 点多少钱？", "It is thirty dollars extra.", "需要额外 30 美元。"],
      ["wifi-password", "询问 Wi-Fi 密码", "入住后需要连接无线网络。", "Could I get the Wi-Fi password?", "可以告诉我 Wi-Fi 密码吗？", "The password is on your key card holder.", "密码在您的房卡套上。", "Is the Wi-Fi available in the room?", "房间里可以用 Wi-Fi 吗？", "Yes, it works throughout the hotel.", "可以，酒店全区域都能使用。"],
      ["room-noise", "房间太吵", "房间靠近电梯或街道，影响休息。", "My room is very noisy.", "我的房间很吵。", "I am sorry to hear that.", "很抱歉给您带来不便。", "Could I move to a quieter room?", "我可以换到安静一点的房间吗？", "Yes, we have a room on a higher floor.", "可以，我们有一间高楼层房间。"],
      ["air-conditioner", "空调故障", "房间空调不能正常工作。", "The air conditioner is not working.", "空调不能用。", "We will send maintenance right away.", "我们马上安排维修人员过去。", "Could you come within twenty minutes?", "可以二十分钟内过来吗？", "Yes, someone will be there soon.", "可以，工作人员很快到。"],
      ["extra-towels", "索要毛巾", "需要更多浴巾和洗漱用品。", "Could we have two extra towels?", "可以给我们两条额外毛巾吗？", "Of course. We will send them up.", "当然，我们会送上去。", "Could you also bring more shampoo?", "也可以多拿一点洗发水吗？", "Yes, I will add that to the request.", "可以，我会一起备注。"],
      ["breakfast-time", "确认早餐", "想确认早餐是否包含和供应时间。", "Is breakfast included in my room?", "我的房间包含早餐吗？", "Yes, breakfast is included.", "是的，包含早餐。", "What time does breakfast start?", "早餐几点开始？", "It starts at 7 a.m. in the restaurant.", "早上 7 点在餐厅开始。"],
      ["airport-shuttle", "预约班车", "需要预约去机场的酒店班车。", "Do you have a shuttle to the airport?", "你们有去机场的班车吗？", "Yes, it runs every hour.", "有，每小时一班。", "Can I book two seats for tomorrow morning?", "我可以预约明早两个座位吗？", "Sure. What time would you like to leave?", "当然。您想几点出发？"],
      ["taxi-help", "请前台叫车", "准备出门，需要酒店帮忙叫车。", "Could you call a taxi for me?", "可以帮我叫一辆出租车吗？", "Certainly. Where are you going?", "当然。您要去哪里？", "I am going to the train station.", "我要去火车站。", "The taxi will arrive in about five minutes.", "出租车大约五分钟后到。"],
      ["room-cleaning", "安排打扫", "房间暂时没有打扫，需要安排客房服务。", "Could you clean my room this afternoon?", "今天下午可以打扫我的房间吗？", "Yes, what time works for you?", "可以，您什么时间方便？", "Anytime after 2 p.m. is fine.", "下午 2 点以后都可以。", "I will inform housekeeping.", "我会通知客房服务。"],
      ["safe-box", "保险箱打不开", "房间保险箱无法打开。", "The safe in my room will not open.", "我房间的保险箱打不开。", "We can send security to help.", "我们可以安排安保人员协助。", "Do I need to be in the room?", "我需要在房间里等吗？", "Yes, please be there with your ID.", "需要，请带身份证件在房间等候。"],
      ["deposit-question", "确认押金", "入住时不清楚押金规则。", "How much is the deposit?", "押金是多少？", "It is one hundred dollars per stay.", "每次入住押金 100 美元。", "Will it be refunded after checkout?", "退房后会退还吗？", "Yes, if there are no extra charges.", "会的，如无额外消费会退还。"],
      ["lost-keycard", "房卡丢失", "找不到房卡，需要补办。", "I lost my key card.", "我的房卡丢了。", "No problem. May I see your ID?", "没关系。可以看一下您的证件吗？", "Is there a fee for a new card?", "补办房卡需要收费吗？", "No, we can replace it for free.", "不需要，我们可以免费补办。"],
      ["laundry-service", "询问洗衣", "想使用酒店洗衣服务。", "Do you offer laundry service?", "你们提供洗衣服务吗？", "Yes, please fill out this laundry form.", "提供，请填写这张洗衣单。", "Can I get it back tomorrow?", "明天可以取回吗？", "Yes, if you send it before 10 a.m.", "可以，如果上午 10 点前送洗。"],
      ["power-adapter", "借转换插头", "忘带转换插头，需要向酒店借用。", "Do you have a power adapter I can borrow?", "有转换插头可以借吗？", "Yes, we have one at the front desk.", "有，前台有一个。", "Should I return it when I check out?", "退房时归还可以吗？", "Yes, please return it at checkout.", "可以，请退房时归还。"],
      ["billing-issue", "账单疑问", "退房时发现账单金额不对。", "I have a question about this charge.", "我对这笔费用有疑问。", "Let me check the details for you.", "我帮您查看明细。", "I did not order room service.", "我没有点客房送餐。", "I will remove it if it was added by mistake.", "如果是误加的，我会帮您取消。"],
      ["receipt-request", "索要发票收据", "退房后需要收据报销。", "Could I have a receipt, please?", "可以给我一张收据吗？", "Sure. Would you like it printed or emailed?", "当然。您想要纸质版还是邮件版？", "Please email it to me.", "请发到我的邮箱。", "No problem. Please write your email here.", "没问题，请在这里写下邮箱。"]
    ],
    restaurant: [
      ["waitlist", "排队等位", "餐厅客满，需要询问等待时间。", "How long is the wait for two people?", "两个人需要等多久？", "It is about twenty minutes.", "大约二十分钟。", "Can you put my name on the list?", "可以把我的名字加入等位名单吗？", "Sure. We will text you when ready.", "当然。准备好后我们会发短信给您。"],
      ["reservation-name", "确认订位", "到店后报预订姓名。", "I have a reservation under Chen.", "我用 Chen 这个名字订了位。", "Let me check. Yes, table for two.", "我查一下。是的，两人桌。", "Can we sit by the window?", "我们可以坐窗边吗？", "I will see what is available.", "我看看是否有空位。"],
      ["menu-question", "询问菜单", "看不懂菜单，需要推荐。", "Could you explain this dish?", "可以解释一下这道菜吗？", "It is grilled chicken with lemon sauce.", "这是柠檬酱烤鸡。", "Is it spicy?", "它辣吗？", "No, it is mild.", "不辣，口味清淡。"],
      ["signature-dish", "询问招牌菜", "想点餐厅最受欢迎的菜。", "What is your signature dish?", "你们的招牌菜是什么？", "Our seafood pasta is very popular.", "我们的海鲜意面很受欢迎。", "Is it enough for one person?", "一人份够吗？", "Yes, it is a full main course.", "够的，这是一份完整主菜。"],
      ["allergy-check", "确认过敏原", "点餐前确认是否含过敏食材。", "I am allergic to peanuts.", "我对花生过敏。", "Thank you for telling me.", "谢谢您告诉我。", "Can you make sure this has no peanuts?", "可以确认这道菜没有花生吗？", "Yes, I will inform the kitchen.", "可以，我会通知厨房。"],
      ["vegetarian-option", "素食选择", "同行者需要素食餐。", "Do you have vegetarian options?", "你们有素食选择吗？", "Yes, we have salad, pasta, and soup.", "有，我们有沙拉、意面和汤。", "Is the soup made with meat stock?", "汤是用肉汤做的吗？", "No, it is vegetable stock.", "不是，是蔬菜汤底。"],
      ["less-spicy", "要求少辣", "想把菜做得不那么辣。", "Could you make it less spicy?", "可以做得少辣一点吗？", "Yes, we can make it mild.", "可以，我们可以做微辣。", "Please write that for the kitchen.", "请帮我备注给厨房。", "Of course, I will add a note.", "当然，我会加备注。"],
      ["order-drinks", "点饮料", "先点饮料再点餐。", "Could we start with two iced teas?", "我们可以先要两杯冰茶吗？", "Sure. Sweetened or unsweetened?", "当然。要甜的还是无糖的？", "One sweetened and one unsweetened, please.", "一杯甜的，一杯无糖的。", "I will bring them right away.", "我马上给您送来。"],
      ["food-delay", "催菜", "点餐后等待太久，需要询问。", "We have been waiting for a while.", "我们已经等了一段时间了。", "I am sorry. I will check with the kitchen.", "抱歉，我去厨房确认一下。", "Could you let us know how much longer?", "可以告诉我们还要多久吗？", "It should be ready in five minutes.", "应该五分钟内就好。"],
      ["wrong-order", "上错菜", "服务员送来的菜不是自己点的。", "I think this is not what we ordered.", "我觉得这不是我们点的。", "I am sorry. What did you order?", "很抱歉。您点的是什么？", "We ordered the grilled fish.", "我们点的是烤鱼。", "I will replace it right away.", "我马上为您更换。"],
      ["extra-plate", "索要餐具", "需要额外盘子或叉子。", "Could we have an extra plate?", "可以给我们一个额外盘子吗？", "Of course.", "当然可以。", "And one more fork, please.", "还请再给一把叉子。", "Sure, I will bring both.", "好的，我两个都拿来。"],
      ["takeaway-box", "打包剩菜", "吃不完需要打包。", "Could I get this to go?", "这个可以帮我打包吗？", "Sure. I will bring a takeout box.", "当然。我给您拿打包盒。", "Could you pack it for me?", "可以帮我打包好吗？", "Yes, I can take care of it.", "可以，我来处理。"],
      ["split-bill", "分开付款", "多人用餐后需要分账。", "Could we split the bill?", "我们可以分开买单吗？", "Yes, how would you like to split it?", "可以，您想怎么分？", "Half on each card, please.", "请两张卡各付一半。", "No problem.", "没问题。"],
      ["service-charge", "服务费疑问", "看到账单上有服务费。", "Is the service charge included?", "服务费包含了吗？", "Yes, it is already included.", "是的，已经包含了。", "Do I need to leave an extra tip?", "我还需要额外给小费吗？", "That is optional.", "那是自愿的。"],
      ["pay-cash", "现金付款", "想确认是否可以用现金。", "Can I pay in cash?", "我可以用现金付款吗？", "Yes, cash is accepted.", "可以，我们接受现金。", "Do you need exact change?", "需要正好的零钱吗？", "No, we can give you change.", "不需要，我们可以找零。"],
      ["birthday-dessert", "生日甜点", "想为同行者准备一个小惊喜。", "Do you have a birthday dessert?", "你们有生日甜点吗？", "Yes, we can bring a small cake.", "有，我们可以送一个小蛋糕。", "Could you bring it after dinner?", "可以晚餐后送上来吗？", "Of course. I will arrange it.", "当然，我来安排。"],
      ["quiet-table", "安静座位", "想换到安静一点的位置。", "Could we move to a quieter table?", "我们可以换到安静一点的桌子吗？", "Let me check what is available.", "我看一下有没有空位。", "A corner table would be great.", "角落的位置最好。", "We have one near the back.", "后面有一张。"]
    ],
    shopping: [
      ["ask-price", "询问价格", "看到商品但没有找到价格标签。", "Excuse me, how much is this?", "打扰一下，这个多少钱？", "It is forty-nine dollars.", "49 美元。", "Is there any discount today?", "今天有折扣吗？", "Yes, it is ten percent off.", "有，九折。"],
      ["find-size", "寻找尺码", "想找合适的尺码。", "Do you have this in medium?", "这个有中码吗？", "Let me check the stock for you.", "我帮您查一下库存。", "Could I also try a large?", "我也可以试一下大码吗？", "Sure, I will bring both sizes.", "当然，我两个尺码都拿来。"],
      ["try-on", "试穿商品", "想知道试衣间在哪里。", "Can I try this on?", "我可以试穿这个吗？", "Yes, the fitting room is over there.", "可以，试衣间在那边。", "How many items can I take in?", "我可以带几件进去？", "Up to six items at a time.", "一次最多六件。"],
      ["color-option", "询问颜色", "想找同款不同颜色。", "Do you have this in black?", "这个有黑色的吗？", "We have black, navy, and gray.", "我们有黑色、藏青色和灰色。", "Could you show me the navy one?", "可以给我看藏青色的吗？", "Sure, I will get it for you.", "当然，我给您拿。"],
      ["stock-check", "查询库存", "店里没有陈列想要的款式。", "Is this item in stock?", "这件有库存吗？", "It is sold out in this store.", "这家店已经售罄了。", "Can you check another store?", "可以帮我查另一家店吗？", "Yes, one nearby has it.", "可以，附近一家店有货。"],
      ["tax-refund", "办理退税", "结账时需要退税单。", "Can I get a tax refund form?", "可以给我退税单吗？", "Yes, may I see your passport?", "可以，请出示您的护照。", "Do I need to keep the receipt?", "我需要保留小票吗？", "Yes, keep both the receipt and the form.", "需要，小票和退税单都要保留。"],
      ["payment-card", "刷卡付款", "确认是否可以刷卡。", "Do you accept credit cards?", "你们接受信用卡吗？", "Yes, Visa and Mastercard are accepted.", "接受，Visa 和 Mastercard 都可以。", "Can I use contactless payment?", "可以用感应支付吗？", "Yes, tap your card here.", "可以，请在这里刷一下。"],
      ["gift-wrap", "礼品包装", "买礼物需要包装。", "Could you gift-wrap this?", "可以帮我包装成礼物吗？", "Sure. It may take five minutes.", "当然，可能需要五分钟。", "Can you remove the price tag?", "可以把价格标签取掉吗？", "Yes, I will remove it.", "可以，我会取掉。"],
      ["return-policy", "退货规则", "购买前确认退货期限。", "What is your return policy?", "你们的退货政策是什么？", "You can return it within 30 days.", "30 天内可以退货。", "Does it need to be unused?", "必须未使用过吗？", "Yes, and please bring the receipt.", "是的，并请带上小票。"],
      ["exchange-size", "换尺码", "买完后想换另一个尺码。", "Can I exchange this for a smaller size?", "我可以把这个换成小一号吗？", "Yes, do you have the receipt?", "可以，您有小票吗？", "Yes, here it is.", "有，在这里。", "Great. I will check the size for you.", "好的，我帮您查尺码。"],
      ["damaged-item", "商品有瑕疵", "发现商品破损或有污渍。", "This item seems damaged.", "这件商品好像有瑕疵。", "I am sorry. Let me take a look.", "很抱歉，我看一下。", "Do you have another one?", "你们还有另一件吗？", "Yes, I will bring a new one.", "有，我给您拿一件新的。"],
      ["cashier-location", "寻找收银台", "准备结账但找不到收银台。", "Where is the cashier?", "收银台在哪里？", "It is at the back of the store.", "在店铺后面。", "Can I pay there for all items?", "所有商品都在那里付款吗？", "Yes, please take everything there.", "是的，请把所有商品拿过去。"],
      ["membership", "会员折扣", "店员询问是否有会员，想了解优惠。", "Is there a member discount?", "会员有折扣吗？", "Yes, members get five percent off.", "有，会员享 95 折。", "Can I join today?", "我今天可以加入吗？", "Yes, it only takes a minute.", "可以，只需要一分钟。"],
      ["shipping-home", "邮寄到家", "买大件商品想寄回住处。", "Can you ship this to my hotel?", "可以把这个寄到我的酒店吗？", "Yes, local delivery is available.", "可以，提供本地配送。", "How long will delivery take?", "配送需要多久？", "Usually one to two days.", "通常一到两天。"],
      ["compare-products", "比较商品", "两款商品之间拿不定主意。", "What is the difference between these two?", "这两个有什么区别？", "This one is lighter and waterproof.", "这一款更轻，而且防水。", "Which one do you recommend for travel?", "旅行的话你推荐哪一个？", "I would recommend the lighter one.", "我会推荐更轻的那款。"],
      ["try-electronics", "试用电子产品", "想先试用再购买。", "Can I try this before buying it?", "购买前可以试用吗？", "Yes, the demo unit is over here.", "可以，演示机在这边。", "Does it come with a charger?", "它带充电器吗？", "Yes, charger and cable are included.", "带，包含充电器和线。"],
      ["receipt-copy", "补开发票小票", "结账后需要电子小票。", "Could I get a digital receipt?", "可以给我电子小票吗？", "Sure. Please enter your email.", "当然，请输入您的邮箱。", "Can I also have a printed copy?", "也可以给我一张纸质的吗？", "Yes, I will print one now.", "可以，我现在打印。"]
    ],
    tickets: [
      ["same-day-ticket", "购买当日票", "到景点现场购买当天门票。", "Are tickets available for today?", "今天还有票吗？", "Yes, we still have afternoon tickets.", "有，我们还有下午票。", "What time can we enter?", "我们几点可以入场？", "The next entry time is 2 p.m.", "下一场入场时间是下午 2 点。"],
      ["advance-booking", "提前预约", "热门景点需要确认是否必须预约。", "Do I need to book in advance?", "我需要提前预约吗？", "Yes, weekends usually sell out.", "需要，周末通常会售罄。", "Can I book for tomorrow morning?", "我可以预约明天上午吗？", "Yes, there are still slots available.", "可以，还有可预约时段。"],
      ["opening-hours", "开放时间", "入园前确认开放和闭馆时间。", "What are your opening hours?", "你们的开放时间是什么？", "We are open from 9 a.m. to 6 p.m.", "我们上午 9 点到下午 6 点开放。", "What time is the last entry?", "最晚几点入场？", "Last entry is at 5 p.m.", "最晚下午 5 点入场。"],
      ["ticket-type", "选择票种", "不知道该买成人票、儿童票还是套票。", "Which ticket should I buy?", "我应该买哪种票？", "For two adults, choose the standard adult ticket.", "两位成人请选择标准成人票。", "Is there a family ticket?", "有家庭票吗？", "Yes, it covers two adults and two children.", "有，包含两位成人和两名儿童。"],
      ["student-discount", "学生优惠", "想确认学生证是否能优惠。", "Is there a student discount?", "有学生优惠吗？", "Yes, with a valid student ID.", "有，需要有效学生证。", "Can I use a photo of my ID?", "学生证照片可以吗？", "We need to see the physical card.", "我们需要看实体证件。"],
      ["audio-guide", "语音导览", "购票时想租语音导览。", "Is an audio guide available?", "有语音导览吗？", "Yes, it is available in several languages.", "有，支持多种语言。", "Is English included?", "包含英语吗？", "Yes, English is included.", "是的，包含英语。"],
      ["guided-tour", "报名讲解团", "希望参加人工导览。", "Do you have a guided tour today?", "今天有人工导览吗？", "Yes, the next tour starts at 3 p.m.", "有，下一场下午 3 点开始。", "How long does the tour take?", "导览需要多久？", "It takes about one hour.", "大约一小时。"],
      ["entrance-location", "寻找入口", "买票后找不到入口。", "Where is the entrance?", "入口在哪里？", "Go straight and turn left at the fountain.", "直走，在喷泉处左转。", "Do I need to scan the ticket there?", "我需要在那里扫码吗？", "Yes, scan the QR code at the gate.", "是的，在闸口扫描二维码。"],
      ["exit-location", "寻找出口", "参观结束后找不到出口。", "Where is the exit?", "出口在哪里？", "The exit is through the gift shop.", "出口要经过礼品店。", "Can I return to the museum after exiting?", "出去后还能再回来吗？", "No, re-entry is not allowed.", "不可以，不能再次入场。"],
      ["sold-out", "门票售罄", "现场票卖完了，需要询问其他选择。", "Are all tickets sold out?", "所有票都卖完了吗？", "Today's tickets are sold out.", "今天的票已经售罄。", "Is there a waiting list?", "有候补名单吗？", "No, but you can check online later.", "没有，但您可以稍后在线查看。"],
      ["reschedule", "改签门票", "行程变化，需要更改预约时间。", "Can I change my ticket time?", "我可以更改门票时间吗？", "Yes, if there are available slots.", "可以，如果还有可用时段。", "Could you change it to tomorrow?", "可以改到明天吗？", "Yes, tomorrow at 10 a.m. is available.", "可以，明天上午 10 点有空位。"],
      ["refund-ticket", "退票咨询", "无法参观，需要询问退款规则。", "Can I get a refund for this ticket?", "这张票可以退款吗？", "Refunds are allowed up to 24 hours before entry.", "入场前 24 小时可以退款。", "What if I booked it today?", "如果我是今天订的呢？", "Same-day tickets are non-refundable.", "当天票不可退款。"],
      ["bag-policy", "包袋规定", "入口处不确定大包能否带入。", "Can I bring this backpack inside?", "我可以带这个背包进去吗？", "Large bags must be stored in the locker.", "大包必须寄存在储物柜。", "Where are the lockers?", "储物柜在哪里？", "They are beside the ticket desk.", "在售票处旁边。"],
      ["photo-policy", "拍照规定", "想确认展馆内是否可以拍照。", "Can I take photos inside?", "里面可以拍照吗？", "Photos are allowed without flash.", "可以拍照，但不能开闪光灯。", "Can I record video?", "可以录像吗？", "Video recording is not allowed.", "不允许录像。"],
      ["accessibility", "无障碍入口", "同行者需要无障碍通道。", "Is there an accessible entrance?", "有无障碍入口吗？", "Yes, it is on the right side of the building.", "有，在建筑右侧。", "Is there an elevator inside?", "里面有电梯吗？", "Yes, all floors are accessible by elevator.", "有，所有楼层都可以坐电梯到达。"],
      ["map-request", "索要地图", "需要景区地图规划路线。", "Could I have a map?", "可以给我一张地图吗？", "Sure. Here is an English map.", "当然。这是英文地图。", "Which route do you recommend?", "你推荐哪条路线？", "Start with the main hall and then go upstairs.", "先从主展厅开始，然后上楼。"],
      ["closing-warning", "快闭馆提醒", "临近闭馆，想知道还能参观多久。", "How much time do we have before closing?", "闭馆前我们还有多少时间？", "You have about forty minutes.", "大约还有四十分钟。", "Can we still visit the main hall?", "我们还能参观主展厅吗？", "Yes, but please go there first.", "可以，但请先去那里。"]
    ],
    transport: [
      ["buy-ticket", "购买车票", "第一次坐当地交通，不知道怎么买票。", "Where can I buy a ticket?", "我在哪里买票？", "You can buy one from the machine.", "您可以在机器上购买。", "Can I pay by card?", "可以刷卡吗？", "Yes, card payment is accepted.", "可以，支持刷卡。"],
      ["choose-line", "选择线路", "不确定去目的地该坐哪条线。", "Which line should I take to downtown?", "去市中心我应该坐哪条线？", "Take Line 2 toward Central.", "乘坐开往 Central 的 2 号线。", "How many stops is it?", "有几站？", "It is five stops from here.", "从这里五站。"],
      ["transfer-station", "确认换乘", "目的地需要换乘。", "Do I need to transfer?", "我需要换乘吗？", "Yes, transfer at Central Station.", "需要，在 Central 站换乘。", "Which line do I transfer to?", "我要换哪条线？", "Transfer to Line 3.", "换乘 3 号线。"],
      ["platform", "寻找站台", "买完票后不知道去哪个站台。", "Which platform should I use?", "我应该去哪个站台？", "Use platform 2.", "请去 2 号站台。", "Is it upstairs or downstairs?", "是在楼上还是楼下？", "It is downstairs on the left.", "在楼下左侧。"],
      ["last-train", "末班车时间", "晚上出行，需要确认末班车。", "What time is the last train?", "末班车几点？", "The last train leaves at 11:45 p.m.", "末班车晚上 11 点 45 分发车。", "Is that for this direction?", "是这个方向的吗？", "Yes, for trains toward downtown.", "是的，是开往市中心方向。"],
      ["bus-stop", "寻找公交站", "出站后找不到公交站。", "Where is the bus stop for Route 8?", "8 路公交站在哪里？", "It is across the street.", "在街对面。", "Does it go to the museum?", "它去博物馆吗？", "Yes, get off at Museum Square.", "去，在 Museum Square 下车。"],
      ["ask-driver", "提醒下车", "担心坐过站，想请司机提醒。", "Could you tell me when to get off?", "可以告诉我什么时候下车吗？", "Sure. Where are you going?", "当然。您要去哪里？", "I am going to the museum.", "我要去博物馆。", "I will let you know before the stop.", "到站前我会提醒您。"],
      ["taxi-destination", "打车去目的地", "上出租车后说明目的地。", "Could you take me to this address?", "可以带我去这个地址吗？", "Sure. It is about twenty minutes away.", "当然，大约二十分钟。", "Can you use the fastest route?", "可以走最快路线吗？", "Yes, I will check the traffic.", "可以，我会查看路况。"],
      ["ride-share-pickup", "网约车上车点", "叫了车但找不到上车点。", "Where is the ride-share pickup area?", "网约车上车点在哪里？", "Go to level B and follow the green signs.", "去 B 层，跟着绿色标志走。", "Is it far from here?", "离这里远吗？", "It is about a five-minute walk.", "步行大约五分钟。"],
      ["train-delay", "列车延误", "站内广播显示列车晚点。", "Is this train delayed?", "这趟车晚点了吗？", "Yes, it is delayed by ten minutes.", "是的，晚点十分钟。", "Will I miss my connection?", "我会错过换乘吗？", "You should still have enough time.", "您应该还有足够时间。"],
      ["wrong-direction", "坐错方向", "发现可能坐反方向了。", "Am I going in the wrong direction?", "我是不是坐错方向了？", "Yes, you need the opposite platform.", "是的，您需要去对面站台。", "Can I use the same ticket?", "我可以用同一张票吗？", "Yes, as long as you stay inside the station.", "可以，只要您不出站。"],
      ["ticket-machine", "机器购票", "购票机器看不懂，需要帮助。", "Could you help me use this ticket machine?", "可以帮我用这台售票机吗？", "Sure. First choose your destination.", "当然。先选择目的地。", "I need two one-way tickets.", "我需要两张单程票。", "Then select two tickets here.", "然后在这里选择两张票。"],
      ["card-topup", "交通卡充值", "交通卡余额不足。", "Where can I top up this card?", "我在哪里可以给这张卡充值？", "Use the machine next to the gate.", "请使用闸机旁边的机器。", "Can I add ten dollars?", "可以充值 10 美元吗？", "Yes, choose ten dollars on the screen.", "可以，在屏幕上选择 10 美元。"],
      ["fare-question", "票价咨询", "不确定到目的地需要多少钱。", "How much is the fare to Central?", "去 Central 票价是多少？", "It is three dollars.", "3 美元。", "Is it cheaper with a day pass?", "买日票会更便宜吗？", "Yes, if you take more than three rides.", "会，如果您乘坐超过三次。"],
      ["luggage-space", "携带行李", "带大行李乘车，想确认是否方便。", "Can I take this suitcase on the bus?", "我可以带这个行李箱上公交吗？", "Yes, but please keep it out of the aisle.", "可以，但请不要放在过道。", "Is there luggage space on the train?", "火车上有行李区吗？", "Yes, near the doors.", "有，在车门附近。"],
      ["accessible-ride", "无障碍乘车", "需要电梯或无障碍通道。", "Is there an elevator to the platform?", "有去站台的电梯吗？", "Yes, it is near exit A.", "有，在 A 出口附近。", "Is this station wheelchair accessible?", "这个车站适合轮椅通行吗？", "Yes, all platforms are accessible.", "是的，所有站台都可以无障碍通行。"],
      ["night-bus", "夜间交通", "错过地铁后询问夜间公交。", "Is there a night bus from here?", "这里有夜班公交吗？", "Yes, Route N5 runs all night.", "有，N5 路通宵运行。", "How often does it come?", "多久一班？", "Every thirty minutes.", "每三十分钟一班。"]
    ]
  };
  return common[sceneId].map(([id, title, summary, ask, askCn, answer, answerCn, follow, followCn, close, closeCn]) => ({
    id, title, summary, ask, askCn, answer, answerCn, follow, followCn, close, closeCn
  }));
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
