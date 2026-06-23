// 云岭非遗 - 公共脚本：注入导航栏与页脚，保持各页面一致
// 作者：金宇航（组长）
(function () {
  var NAV = [
    { href: "index.html", text: "首页" },
    { href: "list.html", text: "非遗名录" },
    { href: "map.html", text: "云南分布" },
    { href: "masters.html", text: "传承人" },
    { href: "interact.html", text: "互动留言" }
  ];

  function currentPage() {
    var path = location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderHeader() {
    var cur = currentPage();
    var links = NAV.map(function (n) {
      var active = n.href === cur ? " class=\"active\"" : "";
      return '<li><a href="' + n.href + '"' + active + '>' + n.text + "</a></li>";
    }).join("");

    var html =
      '<header class="site-header"><div class="container nav">' +
        '<a href="index.html" class="logo"><span class="seal">遗</span>云岭非遗</a>' +
        '<button class="nav-toggle" aria-label="菜单">&#9776;</button>' +
        '<ul class="nav-links">' + links + "</ul>" +
      "</div></header>";

    var holder = document.getElementById("site-header");
    if (holder) {
      holder.outerHTML = html;
      var toggle = document.querySelector(".nav-toggle");
      var menu = document.querySelector(".nav-links");
      if (toggle && menu) {
        toggle.addEventListener("click", function () { menu.classList.toggle("open"); });
      }
    }
  }

  function renderFooter() {
    var html =
      '<footer class="site-footer"><div class="container">' +
        "<div><strong>云岭非遗</strong><br>云南非物质文化遗产数字展馆</div>" +
        "<div>制作小组：金宇航 · 张建波 · 文祺武<br>陈宇博 · 林劲泉 · 宋俊豪</div>" +
        '<div>数据来源：云南省非物质文化遗产保护中心公开名录<br>仅用于教学展示，遵守国家法律与学校规章<br><a href="https://github.com/JinJinJinyh/homework">项目仓库</a></div>' +
      "</div></footer>";
    var holder = document.getElementById("site-footer");
    if (holder) holder.outerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
  });
})();
