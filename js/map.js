// 地图分布页：点击州市联动显示该地非遗项目  作者：陈宇博
(function () {
  function regionName(id) {
    var r = REGION_LIST.find(function (x) { return x.id === id; });
    return r ? r.name : "全部地区";
  }

  function renderItems(regionId) {
    var title = document.getElementById("region-title");
    var count = document.getElementById("region-count");
    var box = document.getElementById("region-items");

    var data = regionId
      ? FEIYI_DATA.filter(function (it) { return it.regionId === regionId; })
      : FEIYI_DATA;

    title.textContent = regionId ? regionName(regionId) : "全部地区";
    count.textContent = "该地区收录 " + data.length + " 个非遗项目";

    if (data.length === 0) {
      box.innerHTML = '<p style="color:#888;">该地区暂未收录项目。</p>';
      return;
    }

    box.innerHTML = data.map(function (it) {
      return (
        '<a class="region-item" href="detail.html?id=' + it.id + '">' +
          '<img src="' + it.cover + '" alt="' + it.name + '">' +
          '<div class="ri-info">' +
            '<span class="ri-tag">' + it.category + "</span>" +
            "<h3>" + it.name + "</h3>" +
            "<p>" + it.summary.slice(0, 30) + "…</p>" +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var regions = document.querySelectorAll(".region");
    regions.forEach(function (g) {
      g.addEventListener("click", function () {
        var rid = g.getAttribute("data-region");
        var isActive = g.classList.contains("active");
        regions.forEach(function (x) { x.classList.remove("active"); });
        if (isActive) {
          renderItems(null); // 再次点击取消选中，显示全部
        } else {
          g.classList.add("active");
          renderItems(rid);
        }
      });
    });

    renderItems(null);
  });
})();
