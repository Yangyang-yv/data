const data = {
  worry: [
    { label: "偶尔担心", value: 49, color: "#d83a34" },
    { label: "经常担心", value: 6, color: "#f0b429" },
    { label: "每天担心", value: 1, color: "#0f8b8d" },
    { label: "从未担心", value: 44, color: "#cfd6dc" }
  ],
  work: [
    { label: "8 小时以下", value: 51 },
    { label: "8 小时", value: 52 },
    { label: "8~12 小时", value: 64 },
    { label: "12 小时以上", value: 70 }
  ],
  causes: [
    {
      title: "长期熬夜",
      description: "生物钟被持续打乱，交感神经长期兴奋，增加心血管系统负担。"
    },
    {
      title: "吸烟",
      description: "烟草会损伤血管内皮，增加动脉粥样硬化和心律异常风险。"
    },
    {
      title: "高热量饮食",
      description: "肥胖与高血脂更容易出现，进而抬高心梗和心源性猝死风险。"
    },
    {
      title: "久坐不动",
      description: "血流变慢、身体代谢变差，长期缺乏活动会持续增加危险因素。"
    }
  ],
  typicalSigns: ["胸闷", "胸痛", "心慌", "呼吸不畅", "头晕", "大汗", "不明原因恶心", "呕吐"],
  atypicalSigns: ["腹痛", "牙痛", "左肩部痛"],
  douyinTopics: [
    { label: "#猝死", value: 44.3, text: "44.3 亿" },
    { label: "#心源性猝死", value: 6.2, text: "6.2 亿" },
    { label: "#猝死前的征兆", value: 2.9, text: "2.9 亿" },
    { label: "#熬夜猝死", value: 1.2, text: "1.2 亿" },
    { label: "#什么是心源性猝死", value: 0.96866, text: "9686.6 万" },
    { label: "#运动猝死", value: 0.92064, text: "9206.4 万" }
  ],
  xhsTopics: [
    { label: "#猝死#", value: 6147.6, text: "6147.6 万" },
    { label: "#心源性猝死#", value: 5468.6, text: "5468.6 万" },
    { label: "#张雪峰猝死#", value: 1630.6, text: "1630.6 万" },
    { label: "#猝死前兆#", value: 678.6, text: "678.6 万" },
    { label: "#跑步猝死#", value: 350.1, text: "350.1 万" },
    { label: "#猝死预防#", value: 343.2, text: "343.2 万" }
  ],
  doubanGroups: [
    { label: "豆瓣π组", value: 141, text: "141 帖" },
    { label: "上班这件事", value: 65, text: "65 帖" },
    { label: "影视综艺双一流", value: 44, text: "44 帖" },
    { label: "鹅们栖息地", value: 38, text: "38 帖" },
    { label: "电竞烟花厂", value: 31, text: "31 帖" },
    { label: "喜欢跑步的人", value: 21, text: "21 帖" }
  ],
  douyinContent: [
    {
      title: "猝死：生命“最后的 0.03 秒”",
      author: "医次元狂想",
      type: "医疗健康",
      metric: "点赞 147.2 万"
    },
    {
      title: "猝死！记住这几点，能救命！",
      author: "医路向前巍子",
      type: "医疗健康",
      metric: "点赞 130.5 万"
    },
    {
      title: "什么是心源性猝死？",
      author: "央视新闻",
      type: "医疗健康",
      metric: "点赞 123.6 万"
    },
    {
      title: "心脏骤停的黄金 4 分钟，学会真的能救命",
      author: "刘加勇医生",
      type: "医疗健康",
      metric: "点赞 80.0 万"
    }
  ],
  xhsContent: [
    {
      title: "女性突发心梗，用日常心肺复苏急救能救吗？",
      author: "孟医生说育儿",
      type: "腰部达人",
      metric: "互动 82.9 万"
    },
    {
      title: "所有人要知道的心肺复苏急救！",
      author: "Angel 的博士妈妈杨琴",
      type: "头部达人",
      metric: "互动 61.3 万"
    },
    {
      title: "猝死前的征兆及自救",
      author: "吴叶十三",
      type: "头部达人",
      metric: "互动 31.3 万"
    },
    {
      title: "心源性猝死，心脏骤停的黄金 4 分钟！",
      author: "刘加勇 - 金子生活",
      type: "头部达人",
      metric: "互动 18.0 万"
    }
  ],
  doubanContent: [
    {
      title: "吐槽分享｜武汉又有公司加班出现猝死的了",
      author: "上班这件事",
      type: "职场讨论",
      metric: "回复 575"
    },
    {
      title: "太可怕了！！！！熬夜真的会猝死吗？！！",
      author: "豆瓣π组",
      type: "健康焦虑",
      metric: "回复 428"
    },
    {
      title: "水楼｜大家担心过自己会猝死吗",
      author: "一天六杯奶茶",
      type: "自我代入",
      metric: "回复 187"
    },
    {
      title: "朋友弟弟突然猝死，才22岁？",
      author: "生活组",
      type: "年轻案例",
      metric: "回复 132"
    }
  ],
  doubanBuckets: [
    { label: "0", value: 119, text: "119 帖" },
    { label: "1-9", value: 431, text: "431 帖" },
    { label: "10-49", value: 444, text: "444 帖" },
    { label: "50-99", value: 125, text: "125 帖" },
    { label: "100+", value: 105, text: "105 帖" }
  ],
  platformResearch: [
    {
      name: "抖音",
      stat: "44.3 亿",
      intro: "研究价值主要在“传播力”本身。它最能解释猝死话题是如何被推成全民可见事件的。",
      points: [
        "词条榜中 #猝死 曝光量最高，远高于其他相关词条。",
        "热点内容里医疗健康类占主导，急救教学和新闻事件最容易被大规模扩散。",
        "短视频形式让“黄金 4 分钟”“前兆提醒”更适合被转发和二次传播。 "
      ]
    },
    {
      name: "小红书",
      stat: "6147.6 万",
      intro: "研究价值主要在“方法性”。相比事件本身，这个平台更在意如何识别、预防和自救。",
      points: [
        "#猝死前兆#、#猝死预防#、#预防猝死# 等词条都进入高浏览序列。",
        "热点内容中既有医生，也有腰部达人和普通用户，经验性表达更丰富。",
        "表格分析指出，小红书内容更重实用，很多帖子直接提供可执行建议。 "
      ]
    },
    {
      name: "豆瓣",
      stat: "42437",
      intro: "研究价值主要在“讨论链条”。它最能呈现公众为什么会把猝死理解成一种长期焦虑。",
      points: [
        "1224 条帖子累计 42437 条回复，意味着话题不是被看一眼就过去，而是会被反复讨论。",
        "高回复帖子往往牵连加班、名人、家庭遭遇、公司责任等社会议题，而不只停留在医学层面。",
        "105 条帖子回复过百，说明豆瓣更容易形成持续发酵的情绪节点。 "
      ]
    }
  ],
  words: [
    ["猝死", 58],
    ["健康", 33],
    ["张雪峰", 25],
    ["年轻", 21],
    ["心梗", 18],
    ["心源性", 16],
    ["熬夜", 15],
    ["加班", 14],
    ["上班", 13],
    ["心脏", 12],
    ["医生", 11],
    ["科普", 10],
    ["职场", 10],
    ["预防", 9],
    ["程序员", 8],
    ["公司", 8],
    ["跑步", 6],
    ["工作", 5]
  ]
};

function formatNumber(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((node) => {
    const target = Number(node.dataset.count);
    const start = performance.now();
    const duration = 1100;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = formatNumber(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else node.textContent = formatNumber(target);
    }

    requestAnimationFrame(tick);
  });
}

function renderWorry() {
  const donut = document.getElementById("worryDonut");
  const legend = document.getElementById("worryLegend");
  if (!donut || !legend) return;

  donut.innerHTML =
    '<div class="donut" role="img" aria-label="56% 的受访者曾担心猝死"></div>';
  legend.innerHTML = data.worry
    .map(
      (item) => `
        <div class="legend-item">
          <span><i style="background:${item.color}"></i>${item.label}</span>
          <strong>${item.value}%</strong>
        </div>
      `
    )
    .join("");
}

function renderBars() {
  const max = Math.max(...data.work.map((item) => item.value));
  const container = document.getElementById("workBars");
  if (!container) return;

  container.innerHTML = data.work
    .map(
      (item) => `
        <div class="bar-row">
          <strong>${item.label}</strong>
          <div class="bar-track">
            <div class="bar-fill" style="--value:${(item.value / max) * 100}%"></div>
          </div>
          <span>${item.value}%</span>
        </div>
      `
    )
    .join("");
}

function renderRescueChart() {
  const values = Array.from({ length: 10 }, (_, index) => Math.max(90 - index * 10, 0));
  const container = document.getElementById("rescueChart");
  if (!container) return;

  container.innerHTML = values
    .map(
      (value, index) => `
        <div class="rescue-bar" title="第 ${index + 1} 分钟：约 ${value}%">
          <i style="--height:${value}%"></i>
          <span>${index + 1}分</span>
        </div>
      `
    )
    .join("");
}

function renderCauses() {
  const container = document.getElementById("causeCards");
  if (!container) return;

  container.innerHTML = data.causes
    .map(
      (item) => `
        <article class="cause-card">
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderSigns(id, list) {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = list
    .map((item) => `<span class="sign-item">${item}</span>`)
    .join("");
}

function renderRanks(id, list) {
  const max = Math.max(...list.map((item) => item.value));
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = list
    .map(
      (item) => `
        <div class="rank-item">
          <strong>${item.label}</strong>
          <div class="rank-track">
            <div class="rank-fill" style="--value:${(item.value / max) * 100}%"></div>
          </div>
          <span>${item.text}</span>
        </div>
      `
    )
    .join("");
}

function renderStories(id, list) {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = list
    .map(
      (item) => `
        <article class="story-item">
          <p class="story-title">${item.title}</p>
          <div class="story-meta">
            <span>${item.author}</span>
            <span>${item.type}</span>
            <span>${item.metric}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDoubanBuckets() {
  const max = Math.max(...data.doubanBuckets.map((item) => item.value));
  const container = document.getElementById("doubanBuckets");
  if (!container) return;

  container.innerHTML = data.doubanBuckets
    .map(
      (item) => `
        <div class="bucket-row">
          <strong>${item.label}</strong>
          <div class="bucket-track">
            <div class="bucket-fill" style="--value:${(item.value / max) * 100}%"></div>
          </div>
          <span>${item.text}</span>
        </div>
      `
    )
    .join("");
}

function renderPlatformResearch() {
  const container = document.getElementById("platformResearch");
  if (!container) return;

  container.innerHTML = data.platformResearch
    .map(
      (item) => `
        <article class="research-card">
          <h3>${item.name}</h3>
          <div class="research-stat">${item.stat}</div>
          <p>${item.intro}</p>
          <div class="research-points">
            ${item.points.map((point) => `<span>${point}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderWordCloud() {
  const values = data.words.map((word) => word[1]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const container = document.getElementById("wordCloud");
  if (!container) return;

  container.innerHTML = data.words
    .map(([word, value]) => {
      const size = 15 + ((value - min) / (max - min)) * 30;
      return `<span class="word" style="--size:${size}px">${word}</span>`;
    })
    .join("");
}

animateCounters();
renderWorry();
renderBars();
renderRescueChart();
renderCauses();
renderSigns("typicalSigns", data.typicalSigns);
renderSigns("atypicalSigns", data.atypicalSigns);
renderPlatformResearch();
renderDoubanBuckets();
renderRanks("douyinTopics", data.douyinTopics);
renderRanks("xhsTopics", data.xhsTopics);
renderRanks("doubanGroups", data.doubanGroups);
renderStories("douyinContent", data.douyinContent);
renderStories("xhsContent", data.xhsContent);
renderStories("doubanContent", data.doubanContent);
renderWordCloud();
