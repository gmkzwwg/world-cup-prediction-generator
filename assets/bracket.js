const STORAGE_KEY = "wc2026-bilingual-bracket-v5";

const TEXT = {
  zh: {
    title: "2026 世界杯晋级预测器",
    subtitle: "左右分区显示淘汰赛路径；点击获胜方，自动推进到下一轮。",
    note: "这是静态预测表，不抓取实时比分。预测会自动保存在当前浏览器，也可以导出为 JSON 文件。",
    saveImage: "保存为图片",
    export: "导出预测",
    import: "导入预测",
    clear: "清空预测",
    footer: "单文件静态页面，可直接作为 GitHub Pages 的 index.html 发布。",
    langButton: "English",
    upperHalf: "上半区",
    lowerHalf: "下半区",
    r32: "32 强",
    r16: "16 强",
    qf: "1/4 决赛",
    sf: "半决赛",
    final: "决赛",
    third: "三四名",
    champion: "冠军",
    wait: "等待上一轮预测",
    championLabel: "你的预测冠军",
    championEmpty: "先完成决赛预测",
    clearConfirm: "确定清空所有晋级预测？",
    importError: "导入失败：文件格式不正确。",
    exportName: "world-cup-2026-prediction.json",
    imageName: "world-cup-2026-bracket.png",
    imagePreparing: "正在生成图片……",
    imageDone: "图片已保存。",
    imageError: "图片生成失败。请刷新页面后重试，或检查浏览器是否阻止了外部图片。",
    refsTitle: "赛程参考页面",
    refsNote: ""
  },
  en: {
    title: "2026 World Cup Prediction Bracket",
    subtitle: "Left and right halves show the knockout path; click a winner to advance it automatically.",
    note: "This is a static prediction sheet. It does not fetch live scores. Picks are saved in this browser and can be exported as JSON.",
    saveImage: "Save image",
    export: "Export",
    import: "Import",
    clear: "Clear picks",
    footer: "Single-file static page. It can be published directly as index.html on GitHub Pages.",
    langButton: "中文",
    upperHalf: "Upper Half",
    lowerHalf: "Lower Half",
    r32: "Round of 32",
    r16: "Round of 16",
    qf: "Quarterfinals",
    sf: "Semifinals",
    final: "Final",
    third: "Third place",
    champion: "Champion",
    wait: "Waiting for previous pick",
    championLabel: "Your predicted champion",
    championEmpty: "Pick the final winner first",
    clearConfirm: "Clear all predictions?",
    importError: "Import failed: invalid file format.",
    exportName: "world-cup-2026-prediction.json",
    imageName: "world-cup-2026-bracket.png",
    imagePreparing: "Generating image…",
    imageDone: "Image saved.",
    imageError: "Image export failed. Refresh and retry, or check whether external images are blocked.",
    refsTitle: "Schedule reference pages",
    refsNote: ""
  }
};

const REF_LINKS = [
  { zhTitle: "历届世界杯总览", enTitle: "All-time World Cup overview", zhDesc: "举办地、冠军、亚军、季军和决赛比分。", enDesc: "Hosts, champions, runners-up, third place, and final scores.", href: "references/all-world-cups.html" },
  { zhTitle: "2026 赛程参考", enTitle: "2026 schedule reference", zhDesc: "48 队赛制、32 强首轮、三四名和决赛结构。", enDesc: "48-team format, Round of 32, third-place match, and final.", href: "references/2026.html" },
  { zhTitle: "2022 世界杯", enTitle: "2022 World Cup", zhDesc: "小组出线关系、16 强至决赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2022.html" },
  { zhTitle: "2018 世界杯", enTitle: "2018 World Cup", zhDesc: "小组出线关系、16 强至决赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2018.html" },
  { zhTitle: "2014 世界杯", enTitle: "2014 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2014.html" },
  { zhTitle: "2010 世界杯", enTitle: "2010 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2010.html" },
  { zhTitle: "2006 世界杯", enTitle: "2006 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2006.html" },
  { zhTitle: "2002 世界杯", enTitle: "2002 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/2002.html" },
  { zhTitle: "1998 世界杯", enTitle: "1998 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/1998.html" },
  { zhTitle: "1994 世界杯", enTitle: "1994 World Cup", zhDesc: "24 队赛制，小组第三名参与晋级。", enDesc: "24-team format with best third-placed teams.", href: "references/1994.html" },
  { zhTitle: "1990 世界杯", enTitle: "1990 World Cup", zhDesc: "24 队赛制，小组第三名参与晋级。", enDesc: "24-team format with best third-placed teams.", href: "references/1990.html" },
  { zhTitle: "1986 世界杯", enTitle: "1986 World Cup", zhDesc: "24 队赛制，小组第三名参与晋级。", enDesc: "24-team format with best third-placed teams.", href: "references/1986.html" },
  { zhTitle: "1982 世界杯", enTitle: "1982 World Cup", zhDesc: "第一阶段与第二阶段小组赛结构。", enDesc: "First and second group-stage format.", href: "references/1982.html" },
  { zhTitle: "1978 世界杯", enTitle: "1978 World Cup", zhDesc: "两阶段小组赛与决赛结构。", enDesc: "Two group stages and final-stage structure.", href: "references/1978.html" },
  { zhTitle: "1974 世界杯", enTitle: "1974 World Cup", zhDesc: "两阶段小组赛与决赛结构。", enDesc: "Two group stages and final-stage structure.", href: "references/1974.html" },
  { zhTitle: "1970 世界杯", enTitle: "1970 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/1970.html" },
  { zhTitle: "1966 世界杯", enTitle: "1966 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/1966.html" },
  { zhTitle: "1962 世界杯", enTitle: "1962 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/1962.html" },
  { zhTitle: "1958 世界杯", enTitle: "1958 World Cup", zhDesc: "小组出线关系与淘汰赛结果。", enDesc: "Group qualification and knockout results.", href: "references/1958.html" },
  { zhTitle: "1954 世界杯", enTitle: "1954 World Cup", zhDesc: "小组赛、附加赛与淘汰赛结果。", enDesc: "Group stage, play-offs, and knockout results.", href: "references/1954.html" },
  { zhTitle: "1950 世界杯", enTitle: "1950 World Cup", zhDesc: "小组赛与最终循环赛。", enDesc: "Group stage and final round-robin.", href: "references/1950.html" },
  { zhTitle: "1938 世界杯", enTitle: "1938 World Cup", zhDesc: "直接淘汰赛制，没有小组赛。", enDesc: "Straight knockout format; no group stage.", href: "references/1938.html" },
  { zhTitle: "1934 世界杯", enTitle: "1934 World Cup", zhDesc: "直接淘汰赛制，没有小组赛。", enDesc: "Straight knockout format; no group stage.", href: "references/1934.html" },
  { zhTitle: "1930 世界杯", enTitle: "1930 World Cup", zhDesc: "小组赛、半决赛和决赛。", enDesc: "Groups, semifinals, and final.", href: "references/1930.html" }
];

const TEAMS = {
  RSA: { flag: "za", zh: "南非", en: "South Africa" },
  CAN: { flag: "ca", zh: "加拿大", en: "Canada" },
  GER: { flag: "de", zh: "德国", en: "Germany" },
  PAR: { flag: "py", zh: "巴拉圭", en: "Paraguay" },
  NED: { flag: "nl", zh: "荷兰", en: "Netherlands" },
  MAR: { flag: "ma", zh: "摩洛哥", en: "Morocco" },
  BRA: { flag: "br", zh: "巴西", en: "Brazil" },
  JPN: { flag: "jp", zh: "日本", en: "Japan" },
  FRA: { flag: "fr", zh: "法国", en: "France" },
  SWE: { flag: "se", zh: "瑞典", en: "Sweden" },
  CIV: { flag: "ci", zh: "科特迪瓦", en: "Ivory Coast" },
  NOR: { flag: "no", zh: "挪威", en: "Norway" },
  MEX: { flag: "mx", zh: "墨西哥", en: "Mexico" },
  ECU: { flag: "ec", zh: "厄瓜多尔", en: "Ecuador" },
  ENG: { flag: "gb-eng", zh: "英格兰", en: "England" },
  COD: { flag: "cd", zh: "刚果民主共和国", en: "DR Congo" },
  USA: { flag: "us", zh: "美国", en: "United States" },
  BIH: { flag: "ba", zh: "波黑", en: "Bosnia and Herzegovina" },
  BEL: { flag: "be", zh: "比利时", en: "Belgium" },
  SEN: { flag: "sn", zh: "塞内加尔", en: "Senegal" },
  POR: { flag: "pt", zh: "葡萄牙", en: "Portugal" },
  CRO: { flag: "hr", zh: "克罗地亚", en: "Croatia" },
  ESP: { flag: "es", zh: "西班牙", en: "Spain" },
  AUT: { flag: "at", zh: "奥地利", en: "Austria" },
  SUI: { flag: "ch", zh: "瑞士", en: "Switzerland" },
  ALG: { flag: "dz", zh: "阿尔及利亚", en: "Algeria" },
  ARG: { flag: "ar", zh: "阿根廷", en: "Argentina" },
  CPV: { flag: "cv", zh: "佛得角", en: "Cape Verde" },
  COL: { flag: "co", zh: "哥伦比亚", en: "Colombia" },
  GHA: { flag: "gh", zh: "加纳", en: "Ghana" },
  AUS: { flag: "au", zh: "澳大利亚", en: "Australia" },
  EGY: { flag: "eg", zh: "埃及", en: "Egypt" }
};

const MATCHES = {
  73: { teams: ["RSA", "CAN"], date: "Jun 28", city: "Los Angeles" },
  74: { teams: ["GER", "PAR"], date: "Jun 29", city: "Boston" },
  75: { teams: ["NED", "MAR"], date: "Jun 29", city: "Monterrey" },
  76: { teams: ["BRA", "JPN"], date: "Jun 29", city: "Houston" },
  77: { teams: ["FRA", "SWE"], date: "Jun 30", city: "New York/New Jersey" },
  78: { teams: ["CIV", "NOR"], date: "Jun 30", city: "Dallas" },
  79: { teams: ["MEX", "ECU"], date: "Jun 30", city: "Mexico City" },
  80: { teams: ["ENG", "COD"], date: "Jul 1", city: "Atlanta" },
  81: { teams: ["USA", "BIH"], date: "Jul 1", city: "San Francisco Bay Area" },
  82: { teams: ["BEL", "SEN"], date: "Jul 1", city: "Seattle" },
  83: { teams: ["POR", "CRO"], date: "Jul 2", city: "Toronto" },
  84: { teams: ["ESP", "AUT"], date: "Jul 2", city: "Los Angeles" },
  85: { teams: ["SUI", "ALG"], date: "Jul 2", city: "Vancouver" },
  86: { teams: ["ARG", "CPV"], date: "Jul 3", city: "Miami" },
  87: { teams: ["COL", "GHA"], date: "Jul 3", city: "Kansas City" },
  88: { teams: ["AUS", "EGY"], date: "Jul 3", city: "Dallas" },
  89: { sources: [73, 75] },
  90: { sources: [74, 77] },
  91: { sources: [76, 78] },
  92: { sources: [79, 80] },
  93: { sources: [83, 84] },
  94: { sources: [81, 82] },
  95: { sources: [86, 88] },
  96: { sources: [85, 87] },
  97: { sources: [89, 90] },
  98: { sources: [93, 94] },
  99: { sources: [91, 92] },
  100: { sources: [95, 96] },
  101: { sources: [97, 98] },
  102: { sources: [99, 100] },
  103: { loserSources: [101, 102], date: "Jul 18", city: "Miami" },
  104: { sources: [101, 102], date: "Jul 19", city: "New York/New Jersey" }
};

const LAYOUT = [
  { side: "left", title: "upperHalf", round: "r32", depth: 1, col: 1, ids: [73,75,74,77,83,84,81,82], starts: [2,4,6,8,10,12,14,16], span: 2 },
  { side: "left", title: "r16", depth: 2, col: 2, ids: [89,90,93,94], starts: [3,7,11,15], span: 2 },
  { side: "left", title: "qf", depth: 3, col: 3, ids: [97,98], starts: [5,13], span: 2 },
  { side: "left", title: "sf", depth: 4, col: 4, ids: [101], starts: [9], span: 2 },
  { side: "center", title: "final", depth: 5, col: 5, ids: [104], starts: [7], span: 3 },
  { side: "center", title: "third", depth: 5, col: 5, ids: [103], starts: [12], span: 3 },
  { side: "right", title: "sf", depth: 4, col: 6, ids: [102], starts: [9], span: 2 },
  { side: "right", title: "qf", depth: 3, col: 7, ids: [99,100], starts: [5,13], span: 2 },
  { side: "right", title: "r16", depth: 2, col: 8, ids: [91,92,95,96], starts: [3,7,11,15], span: 2 },
  { side: "right", title: "lowerHalf", round: "r32", depth: 1, col: 9, ids: [76,78,79,80,86,88,85,87], starts: [2,4,6,8,10,12,14,16], span: 2 }
];

const CONNECTIONS = [
  [73,89], [75,89], [74,90], [77,90], [83,93], [84,93], [81,94], [82,94],
  [89,97], [90,97], [93,98], [94,98], [97,101], [98,101], [101,104], [101,103],
  [76,91], [78,91], [79,92], [80,92], [86,95], [88,95], [85,96], [87,96],
  [91,99], [92,99], [95,100], [96,100], [99,102], [100,102], [102,104], [102,103]
];

const state = { lang: "zh", picks: {} };

function t(key) { return TEXT[state.lang][key] || key; }
function flagUrl(code) { const team = TEAMS[code]; return team ? `https://flagcdn.com/24x18/${team.flag}.png` : ""; }
function teamName(code) { const team = TEAMS[code]; return team ? team[state.lang] : ""; }
function teamHTML(code) {
  const name = teamName(code);
  if (!name) return "";
  return `<img class="flag-img" crossorigin="anonymous" src="${flagUrl(code)}" alt=""><span class="team-label">${escapeHTML(name)}</span>`;
}
function getLoser(matchId) {
  const teams = getTeams(matchId).filter(Boolean);
  const winner = state.picks[matchId];
  if (!winner || teams.length < 2) return "";
  return teams.find(code => code !== winner) || "";
}
function getTeams(matchId) {
  const match = MATCHES[matchId];
  if (match.teams) return match.teams;
  if (match.sources) return match.sources.map(sourceId => state.picks[sourceId] || "");
  if (match.loserSources) return match.loserSources.map(sourceId => getLoser(sourceId) || "");
  return ["", ""];
}
function getDependents(matchId) {
  const result = [];
  for (const [id, match] of Object.entries(MATCHES)) {
    const numericId = Number(id);
    if (match.sources && match.sources.includes(Number(matchId))) {
      result.push(numericId);
      result.push(...getDependents(numericId));
    }
    if (match.loserSources && match.loserSources.includes(Number(matchId))) {
      result.push(numericId);
      result.push(...getDependents(numericId));
    }
  }
  return [...new Set(result)];
}
function pickWinner(matchId, teamCode) {
  if (!teamCode) return;
  if (state.picks[matchId] === teamCode) delete state.picks[matchId];
  else state.picks[matchId] = teamCode;
  for (const dependentId of getDependents(matchId)) delete state.picks[dependentId];
  save();
  render();
}
function render() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  renderText();
  renderBracket();
  renderReferences();
  requestAnimationFrame(drawLines);
}
function renderText() {
  document.querySelectorAll("[data-i18n]").forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.getElementById("langBtn").textContent = t("langButton");
}
function renderReferences() {
  const root = document.getElementById("refs");
  root.innerHTML = "";
  REF_LINKS.forEach(item => {
    const a = document.createElement("a");
    a.className = "ref-link";
    a.href = item.href;
    a.innerHTML = `<strong>${escapeHTML(state.lang === "zh" ? item.zhTitle : item.enTitle)}</strong><span>${escapeHTML(state.lang === "zh" ? item.zhDesc : item.enDesc)}</span>`;
    root.appendChild(a);
  });
}
function renderBracket() {
  const root = document.getElementById("bracket");
  root.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("lines-svg");
  svg.setAttribute("aria-hidden", "true");
  root.appendChild(svg);
  const titleSlots = new Set();
  for (const column of LAYOUT) {
    const titleKey = column.side === "center" ? "center-finals" : `${column.col}-${column.title}`;

    if (column.side === "center" && column.title === "third") {
      // The center column uses one stacked label: Final / Third place.
    } else if (!titleSlots.has(titleKey)) {
      const title = document.createElement("h2");
      title.className = column.side === "center" ? "round-title center-round-title" : "round-title";
      title.style.gridColumn = String(column.col);
      title.style.gridRow = "1";

      if (column.side === "center") {
        title.innerHTML = `<span>${escapeHTML(t("final"))}</span><span>${escapeHTML(t("third"))}</span>`;
      } else {
        title.textContent = column.round === "r32" ? `${t(column.title)} · ${t("r32")}` : t(column.title);
      }

      root.appendChild(title);
      titleSlots.add(titleKey);
    }
    column.ids.forEach((matchId, i) => {
      const card = renderMatch(matchId, column.side, column.depth);
      card.style.gridColumn = String(column.col);
      card.style.gridRow = `${column.starts[i]} / span ${column.span}`;
      if (matchId === 104) card.classList.add("final-card");
      if (matchId === 103) card.classList.add("third-card");
      root.appendChild(card);
    });
  }
  const champion = renderChampion();
  champion.style.gridColumn = "5";
  champion.style.gridRow = "16 / span 3";
  root.appendChild(champion);
}
function renderMatch(matchId, side, depth) {
  const match = MATCHES[matchId];
  const card = document.createElement("article");
  card.className = `match ${side} depth-${depth}`;
  card.dataset.matchId = String(matchId);
  card.dataset.side = side;
  const head = document.createElement("div");
  head.className = "match-head";
  const id = document.createElement("span");
  id.className = "match-id";
  id.textContent = `M${matchId}`;
  const meta = document.createElement("span");
  meta.className = "match-meta";
  meta.textContent = match.date ? `${match.date} · ${match.city}` : "";
  head.append(id, meta);
  card.appendChild(head);
  getTeams(matchId).forEach(code => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "team";
    btn.disabled = !code;
    if (code && state.picks[matchId] === code) btn.classList.add("selected");
    const name = document.createElement("span");
    name.className = code ? "team-name" : "placeholder";
    name.innerHTML = code ? teamHTML(code) : escapeHTML(t("wait"));
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "✓";
    btn.append(name, badge);
    if (code) btn.addEventListener("click", () => pickWinner(matchId, code));
    card.appendChild(btn);
  });
  return card;
}
function renderChampion() {
  const champion = document.createElement("article");
  champion.className = "champion-card";
  const winner = state.picks[104];
  champion.innerHTML = winner
    ? `<div><span class="champion-label">${escapeHTML(t("championLabel"))}</span><span class="champion-name">${teamHTML(winner)}</span></div>`
    : `<span class="placeholder">${escapeHTML(t("championEmpty"))}</span>`;
  return champion;
}
function drawLines() {
  const board = document.getElementById("bracket");
  const svg = board.querySelector(".lines-svg");
  if (!svg || getComputedStyle(svg).display === "none") return;
  const boardBox = board.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${boardBox.width} ${boardBox.height}`);
  svg.setAttribute("width", String(boardBox.width));
  svg.setAttribute("height", String(boardBox.height));
  svg.innerHTML = "";
  for (const [fromId, toId] of CONNECTIONS) {
    const from = board.querySelector(`[data-match-id="${fromId}"]`);
    const to = board.querySelector(`[data-match-id="${toId}"]`);
    if (!from || !to) continue;
    const fromBox = from.getBoundingClientRect();
    const toBox = to.getBoundingClientRect();
    const fromCenter = { x: fromBox.left - boardBox.left + fromBox.width / 2, y: fromBox.top - boardBox.top + fromBox.height / 2 };
    const toCenter = { x: toBox.left - boardBox.left + toBox.width / 2, y: toBox.top - boardBox.top + toBox.height / 2 };
    const sourceIsLeft = fromCenter.x < toCenter.x;
    const x1 = sourceIsLeft ? fromBox.right - boardBox.left : fromBox.left - boardBox.left;
    const y1 = fromCenter.y;
    const x2 = sourceIsLeft ? toBox.left - boardBox.left : toBox.right - boardBox.left;
    const y2 = toCenter.y;
    const mid = x1 + (x2 - x1) / 2;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${x1} ${y1} H ${mid} V ${y2} H ${x2}`);
    if (toId === 104 || toId === 103 || fromId === 101 || fromId === 102) path.classList.add("strong");
    svg.appendChild(path);
  }
}
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    if (saved.lang === "zh" || saved.lang === "en") state.lang = saved.lang;
    if (saved.picks && typeof saved.picks === "object") state.picks = saved.picks;
  } catch (error) { console.warn("Cannot load saved bracket:", error); }
}
function exportPrediction() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = t("exportName");
  a.click();
  URL.revokeObjectURL(url);
}
function importPrediction(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported.picks || typeof imported.picks !== "object") throw new Error("Invalid prediction file.");
      state.picks = imported.picks;
      if (imported.lang === "zh" || imported.lang === "en") state.lang = imported.lang;
      save();
      render();
    } catch (error) { alert(t("importError")); }
  };
  reader.readAsText(file);
}
function waitForImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  return Promise.all(images.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
  }));
}
async function saveImage() {
  const target = document.getElementById("captureArea");
  showToast(t("imagePreparing"));
  try {
    drawLines();
    await waitForImages(target);
    if (typeof html2canvas !== "function") throw new Error("html2canvas is not loaded.");
    const canvas = await html2canvas(target, {
      backgroundColor: "#06090d",
      useCORS: true,
      allowTaint: false,
      scale: Math.min(2, window.devicePixelRatio || 1.5),
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.scrollWidth
    });
    const link = document.createElement("a");
    link.download = t("imageName");
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast(t("imageDone"));
  } catch (error) {
    console.error(error);
    showToast(t("imageError"), 4200);
  }
}
function showToast(message, duration = 2200) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { toast.classList.remove("show"); }, duration);
}
function escapeHTML(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(drawLines, 120);
});
document.getElementById("langBtn").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  save();
  render();
});
document.getElementById("imageBtn").addEventListener("click", saveImage);
document.getElementById("exportBtn").addEventListener("click", exportPrediction);
document.getElementById("importFile").addEventListener("change", event => {
  const file = event.target.files[0];
  if (file) importPrediction(file);
  event.target.value = "";
});
document.getElementById("clearBtn").addEventListener("click", () => {
  if (confirm(t("clearConfirm"))) {
    state.picks = {};
    save();
    render();
  }
});
load();
render();