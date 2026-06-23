// 互动页：收藏夹展示 + 留言板增删，数据存于 localStorage  作者：林劲泉
(function () {
  // ===== 收藏夹 =====
  function renderFavs() {
    var box = document.getElementById("fav-list");
    var empty = document.getElementById("fav-empty");
    var ids = FavStore.all();

    if (ids.length === 0) {
      box.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    box.innerHTML = ids.map(function (id) {
      var it = getFeiyiById(id);
      if (!it) return "";
      return (
        '<div class="fav-item" data-id="' + it.id + '">' +
          '<img src="' + it.cover + '" alt="' + it.name + '">' +
          '<a class="fi-info" href="detail.html?id=' + it.id + '">' +
            "<h3>" + it.name + "</h3><p>" + it.category + " · " + it.region + "</p>" +
          "</a>" +
          '<button class="fi-remove" title="取消收藏">✕</button>' +
        "</div>"
      );
    }).join("");

    box.querySelectorAll(".fi-remove").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.parentNode.getAttribute("data-id");
        FavStore.remove(id);
        renderFavs();
      });
    });
  }

  // ===== 留言板 =====
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function formatTime(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderMsgs() {
    var box = document.getElementById("msg-list");
    var empty = document.getElementById("msg-empty");
    var list = MsgStore.all();

    if (list.length === 0) {
      box.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    box.innerHTML = list.map(function (m, i) {
      return (
        '<div class="msg-card">' +
          '<div class="mc-head"><span class="mc-name">' + escapeHtml(m.name) + "</span>" +
          '<span class="mc-time">' + m.time + "</span></div>" +
          '<div class="mc-content">' + escapeHtml(m.content) + "</div>" +
          '<button class="mc-remove" data-i="' + i + '">删除</button>' +
        "</div>"
      );
    }).join("");

    box.querySelectorAll(".mc-remove").forEach(function (btn) {
      btn.addEventListener("click", function () {
        MsgStore.remove(parseInt(btn.getAttribute("data-i"), 10));
        renderMsgs();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFavs();
    renderMsgs();

    var form = document.getElementById("msg-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("msg-name").value.trim();
      var content = document.getElementById("msg-content").value.trim();
      if (!name || !content) return;
      MsgStore.add(name, content, formatTime(new Date()));
      form.reset();
      renderMsgs();
    });
  });
})();
