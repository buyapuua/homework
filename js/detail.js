// 详情页：根据 URL id 渲染内容、相关推荐、收藏按钮  作者：文祺武
(function () {
  function getId() {
    return new URLSearchParams(location.search).get("id");
  }

  function renderNotFound() {
    document.getElementById("detail-wrap").innerHTML =
      '<div class="not-found"><h1>未找到该项目</h1>' +
      '<p>请返回名录重新选择。</p>' +
      '<p style="margin-top:20px;"><a class="btn" href="list.html">返回非遗名录</a></p></div>';
  }

  function renderDetail(item) {
    var related = FEIYI_DATA.filter(function (it) {
      return it.id !== item.id && it.category === item.category;
    }).slice(0, 3);
    if (related.length === 0) {
      related = FEIYI_DATA.filter(function (it) { return it.id !== item.id; }).slice(0, 3);
    }

    var relatedHtml = related.map(function (it) {
      return (
        '<a class="card" href="detail.html?id=' + it.id + '">' +
          '<img class="cover" src="' + it.cover + '" alt="' + it.name + '">' +
          '<div class="card-body"><span class="card-tag">' + it.category + "</span>" +
          "<h3>" + it.name + "</h3><p>" + it.summary + "</p></div></a>"
      );
    }).join("");

    var faved = FavStore.has(item.id);

    document.getElementById("detail-wrap").innerHTML =
      '<nav class="breadcrumb"><a href="index.html">首页</a> / <a href="list.html">非遗名录</a> / ' + item.name + "</nav>" +
      '<section class="detail-hero">' +
        '<img src="' + item.cover + '" alt="' + item.name + '">' +
        '<div class="detail-info">' +
          '<span class="tag">' + item.category + "</span>" +
          "<h1>" + item.name + "</h1>" +
          "<p>" + item.summary + "</p>" +
          '<ul class="detail-meta">' +
            "<li><span>所属地区</span>" + item.region + "</li>" +
            "<li><span>遗产类别</span>" + item.category + "</li>" +
            "<li><span>保护级别</span>" + item.level + "</li>" +
            "<li><span>入选年份</span>" + item.year + " 年</li>" +
            "<li><span>代表性传承人</span>" + item.master + "</li>" +
          "</ul>" +
          '<div class="detail-actions">' +
            '<button class="fav-btn' + (faved ? " active" : "") + '" id="fav-btn">' +
            (faved ? "★ 已收藏" : "☆ 收藏") + "</button>" +
            '<a class="btn" href="map.html">在地图上查看</a>' +
          "</div>" +
        "</div>" +
      "</section>" +
      '<section class="detail-body"><h2>项目简介</h2><p>' + item.detail + "</p></section>" +
      '<section class="related"><h2>相关推荐</h2><div class="grid">' + relatedHtml + "</div></section>";

    var btn = document.getElementById("fav-btn");
    btn.addEventListener("click", function () {
      var nowFaved = FavStore.toggle(item.id);
      btn.classList.toggle("active", nowFaved);
      btn.textContent = nowFaved ? "★ 已收藏" : "☆ 收藏";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var item = getFeiyiById(getId());
    if (item) {
      renderDetail(item);
      document.title = item.name + " · 云岭非遗";
    } else {
      renderNotFound();
    }
  });
})();
