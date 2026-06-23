// 名录列表页：搜索 + 分类筛选 + URL 参数联动  作者：张建波
(function () {
  var state = { keyword: "", category: "全部" };

  function getQueryParam(key) {
    var params = new URLSearchParams(location.search);
    return params.get(key);
  }

  function renderFilters() {
    var box = document.getElementById("cat-filters");
    box.innerHTML = CATEGORY_LIST.map(function (cat) {
      var active = cat === state.category ? " active" : "";
      return '<button class="filter-btn' + active + '" data-cat="' + cat + '">' + cat + "</button>";
    }).join("");
    box.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.category = btn.getAttribute("data-cat");
        renderFilters();
        renderList();
      });
    });
  }

  function matches(item) {
    var byCat = state.category === "全部" || item.category === state.category;
    var kw = state.keyword.trim().toLowerCase();
    var byKw = kw === "" ||
      item.name.toLowerCase().indexOf(kw) > -1 ||
      item.region.toLowerCase().indexOf(kw) > -1 ||
      item.summary.toLowerCase().indexOf(kw) > -1 ||
      item.category.toLowerCase().indexOf(kw) > -1;
    return byCat && byKw;
  }

  function renderList() {
    var grid = document.getElementById("list-grid");
    var tip = document.getElementById("empty-tip");
    var count = document.getElementById("result-count");
    var data = FEIYI_DATA.filter(matches);

    count.textContent = "共找到 " + data.length + " 个项目";
    tip.style.display = data.length === 0 ? "block" : "none";

    grid.innerHTML = data.map(function (it) {
      return (
        '<a class="card" href="detail.html?id=' + it.id + '">' +
          '<img class="cover" src="' + it.cover + '" alt="' + it.name + '">' +
          '<div class="card-body">' +
            '<span class="card-tag">' + it.category + "</span>" +
            "<h3>" + it.name + "</h3>" +
            "<p>" + it.summary + "</p>" +
            '<div class="meta"><span>📍 ' + it.region + "</span><span>" + it.level + " · " + it.year + "</span></div>" +
          "</div></a>"
      );
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // 支持从首页分类入口跳转携带 ?cat=
    var catParam = getQueryParam("cat");
    if (catParam && CATEGORY_LIST.indexOf(catParam) > -1) state.category = catParam;

    var input = document.getElementById("search-input");
    input.addEventListener("input", function () {
      state.keyword = input.value;
      renderList();
    });

    renderFilters();
    renderList();
  });
})();
