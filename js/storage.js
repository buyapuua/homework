// 本地存储模块：收藏夹 + 留言板，基于 localStorage  作者：林劲泉
// 提供 FavStore（收藏）与 MsgStore（留言）两个全局对象
(function () {
  var FAV_KEY = "yunling_favorites";
  var MSG_KEY = "yunling_messages";

  function read(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  // ===== 收藏夹 =====
  window.FavStore = {
    all: function () { return read(FAV_KEY); },
    has: function (id) { return read(FAV_KEY).indexOf(id) > -1; },
    toggle: function (id) {
      var list = read(FAV_KEY);
      var i = list.indexOf(id);
      if (i > -1) { list.splice(i, 1); write(FAV_KEY, list); return false; }
      list.push(id); write(FAV_KEY, list); return true;
    },
    remove: function (id) {
      var list = read(FAV_KEY).filter(function (x) { return x !== id; });
      write(FAV_KEY, list);
    }
  };

  // ===== 留言板 =====
  window.MsgStore = {
    all: function () { return read(MSG_KEY); },
    add: function (name, content, time) {
      var list = read(MSG_KEY);
      list.unshift({ name: name, content: content, time: time });
      write(MSG_KEY, list);
      return list;
    },
    remove: function (index) {
      var list = read(MSG_KEY);
      list.splice(index, 1);
      write(MSG_KEY, list);
      return list;
    }
  };
})();
