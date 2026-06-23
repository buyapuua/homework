// 首页交互：精选卡片、分类入口、数字滚动  作者：金宇航
(function () {
  // 精选：取前 4 项
  function renderFeatured() {
    var grid = document.getElementById("featured-grid");
    if (!grid) return;
    grid.innerHTML = FEIYI_DATA.slice(0, 4).map(function (it) {
      return (
        '<a class="card" href="detail.html?id=' + it.id + '">' +
          '<img class="cover" src="' + it.cover + '" alt="' + it.name + '">' +
          '<div class="card-body">' +
            '<span class="card-tag">' + it.category + "</span>" +
            "<h3>" + it.name + "</h3>" +
            "<p>" + it.summary + "</p>" +
            '<div class="meta"><span>📍 ' + it.region + "</span><span>" + it.level + "</span></div>" +
          "</div></a>"
      );
    }).join("");
  }

  // 分类入口
  function renderCategories() {
    var grid = document.getElementById("category-grid");
    if (!grid) return;
    var colors = ["#9b2226", "#bb3e03", "#2a9d8f", "#3a0ca3", "#457b9d"];
    var cats = CATEGORY_LIST.filter(function (c) { return c !== "全部"; });
    grid.innerHTML = cats.map(function (cat, i) {
      var count = FEIYI_DATA.filter(function (it) { return it.category === cat; }).length;
      return (
        '<a class="category-card" href="list.html?cat=' + encodeURIComponent(cat) + '" ' +
        'style="background:' + colors[i % colors.length] + '">' +
        cat + '<span class="count">' + count + " 个项目</span></a>"
      );
    }).join("");
  }

  // 数字滚动动画
  function animateStats() {
    document.querySelectorAll(".stat .num").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-target"), 10);
      var cur = 0;
      var step = Math.max(1, Math.round(target / 30));
      var timer = setInterval(function () {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur;
      }, 40);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFeatured();
    renderCategories();
    animateStats();
  });
})();
