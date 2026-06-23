// 云岭非遗 - 全站共享数据
// 数据来源：云南省非物质文化遗产保护中心公开名录及公开科普资料整理（用于教学展示）
const FEIYI_DATA = [
  {
    id: "dongjing",
    name: "纳西族东巴画",
    category: "传统美术",
    region: "丽江市",
    regionId: "lijiang",
    level: "国家级",
    year: "2006",
    cover: "assets/img-dongba.svg",
    summary: "东巴画是纳西族东巴文化的重要组成部分，以象形文字和宗教题材为主，色彩浓烈、造型古朴。",
    detail: "东巴画起源于纳西族的东巴教，多绘于木板、竹笔纸和布卷之上，题材包括神灵、自然与生活场景。其线条粗犷、用色大胆，是研究纳西族历史、宗教与艺术的重要载体。2006年被列入第一批国家级非物质文化遗产名录。",
    master: "和训"
  },
  {
    id: "guozhuang",
    name: "彝族烟盒舞",
    category: "传统舞蹈",
    region: "红河州",
    regionId: "honghe",
    level: "国家级",
    year: "2006",
    cover: "assets/img-dance.svg",
    summary: "彝族烟盒舞以手指弹响烟盒为节拍，动作灵巧多变，是彝族群众喜闻乐见的集体舞蹈。",
    detail: "烟盒舞流行于红河、石屏一带，舞者双手各持一个竹制烟盒，以指弹盒面发出清脆声响作为节拍。舞蹈分为正弦和杂弦两大类，动作模仿劳动与自然，体现了彝族人民乐观向上的生活态度。",
    master: "施万恒"
  },
  {
    id: "zhajran",
    name: "白族扎染技艺",
    category: "传统技艺",
    region: "大理州",
    regionId: "dali",
    level: "国家级",
    year: "2006",
    cover: "assets/img-zharan.svg",
    summary: "白族扎染以板蓝根等植物为染料，通过扎花、浸染形成蓝白相间的图案，朴素典雅。",
    detail: "大理白族扎染以周城村最为著名，工艺包括画样、扎花、浸染、拆线、漂洗等步骤。染料取自天然植物板蓝根，图案多取材于花鸟鱼虫和几何纹样，呈现出蓝底白花、晕色自然的独特美感。",
    master: "段银开"
  },
  {
    id: "tongse",
    name: "傣族孔雀舞",
    category: "传统舞蹈",
    region: "西双版纳州",
    regionId: "xishuangbanna",
    level: "国家级",
    year: "2006",
    cover: "assets/img-peacock.svg",
    summary: "傣族孔雀舞模仿孔雀的优美姿态，动作柔美舒展，是傣族最具代表性的舞蹈艺术。",
    detail: "孔雀在傣族文化中是吉祥与美好的象征。孔雀舞通过手臂、手腕和身体的细腻动作，再现孔雀漫步、饮水、开屏等姿态。传统孔雀舞多由男性头戴面具、身披翅膀表演，现代则发展出更为自由的表现形式。",
    master: "约相"
  },
  {
    id: "ahxi",
    name: "阿细跳月",
    category: "传统舞蹈",
    region: "红河州",
    regionId: "honghe",
    level: "国家级",
    year: "2008",
    cover: "assets/img-tiaoyue.svg",
    summary: "阿细跳月是彝族支系阿细人的传统集体舞蹈，节奏欢快，以大三弦伴奏，气氛热烈。",
    detail: "阿细跳月又称'阿细跳乐'，流行于弥勒一带。男子弹奏大三弦、吹笛，女子击掌起舞，舞步以三步一跳为主，节奏明快奔放。它源于阿细人的火把节与劳动生活，是民族团结与欢庆的象征。",
    master: "毕光明"
  },
  {
    id: "muffin",
    name: "纳西族白沙细乐",
    category: "传统音乐",
    region: "丽江市",
    regionId: "lijiang",
    level: "国家级",
    year: "2011",
    cover: "assets/img-music.svg",
    summary: "白沙细乐是纳西族古老的器乐套曲，旋律典雅、结构完整，被誉为'活的音乐化石'。",
    detail: "白沙细乐相传源于元代，是集歌、舞、乐于一体的大型古典管弦乐套曲。乐曲庄重典雅，保留了大量古代音乐元素，对研究中国古代音乐史具有重要价值，被音乐学界誉为'活的音乐化石'。",
    master: "和凛毅"
  },
  {
    id: "guzhuang",
    name: "苗族服饰",
    category: "民俗",
    region: "文山州",
    regionId: "wenshan",
    level: "国家级",
    year: "2006",
    cover: "assets/img-miao.svg",
    summary: "苗族服饰以刺绣、银饰繁复著称，被誉为'穿在身上的史书'，记录着苗族的迁徙与信仰。",
    detail: "苗族服饰工艺包括刺绣、蜡染、织锦和银饰锻造。图案多取材于自然与神话传说，色彩绚丽、层次丰富。每一套盛装都凝聚着制作者的心血，承载着苗族的历史记忆与文化认同。",
    master: "熊金妹"
  },
  {
    id: "qiangdiao",
    name: "傈僳族民歌",
    category: "传统音乐",
    region: "怒江州",
    regionId: "nujiang",
    level: "国家级",
    year: "2006",
    cover: "assets/img-song.svg",
    summary: "傈僳族民歌种类繁多，多声部合唱尤为出色，被誉为'天籁之音'。",
    detail: "傈僳族民歌包括摆时、优叶、木刮等多种形式，内容涵盖劳动、爱情、历史与生活。其多声部无伴奏合唱和声自然、气势恢宏，体现了傈僳族人民与自然和谐相处的生活智慧。",
    master: "李学华"
  }
];

const REGION_LIST = [
  { id: "lijiang", name: "丽江市" },
  { id: "dali", name: "大理州" },
  { id: "honghe", name: "红河州" },
  { id: "xishuangbanna", name: "西双版纳州" },
  { id: "wenshan", name: "文山州" },
  { id: "nujiang", name: "怒江州" }
];

const CATEGORY_LIST = ["全部", "传统美术", "传统舞蹈", "传统技艺", "传统音乐", "民俗"];

function getFeiyiById(id) {
  return FEIYI_DATA.find(function (item) { return item.id === id; });
}
