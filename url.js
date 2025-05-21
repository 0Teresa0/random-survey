/*
 * 將要隨機派發的網址放入下方（不需排序）
 *
 * 並請注意：
 * 1. 網址請用引號（或稱「撇號」，單引號或雙引號皆可）包起來
 * 2. 包起來的網址之間用逗號分隔
 */


 const links = [
      "https://www.surveycake.com/s/eGpgq",
      "https://www.surveycake.com/s/NV8qG",
      "https://www.surveycake.com/s/PZlXy",
      "https://www.surveycake.com/s/qG1dd",
      "https://www.surveycake.com/s/WGYKA",
      "https://www.surveycake.com/s/0ZWPL"
    ];
    const selected = links[Math.floor(Math.random() * links.length)];
    setTimeout(() => {
      window.location.href = selected;
    }, 2000); // 2秒後跳轉
  </script>
</head>
<body>
  <h1>請稍候，系統正在為您分配問卷...</h1>
  <p>即將自動導向問卷頁面，請不要關閉視窗。</p>
</body>
</html>
