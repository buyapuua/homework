// 传承人专栏页：渲染传承人卡片，关联对应非遗项目  作者：宋俊豪
(function () {
  function render() {
    var box = document.getElementById("masters-list");
    box.innerHTML = MASTERS_DATA.map(function (m) {
      return (
        '<article class="master-card">' +
          '<img class="m-avatar" src="' + m.avatar + '" alt="' + m.name + '">' +
          '<div class="m-body">' +
            "<h2>" + m.name + "</h2>" +
            '<div class="m-title">' + m.title + "</div>" +
            '<div class="m-region">📍 ' + m.region + "</div>" +
            '<p class="m-story">' + m.story + "</p>" +
            '<a class="btn m-link" href="detail.html?id=' + m.feiyiId + '">查看相关非遗 →</a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", render);
})();
