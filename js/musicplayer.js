(function() {
  // 1. 创建播放器容器
  var container = document.createElement('div');
  container.id = 'global-aplayer';
  document.body.appendChild(container);

  // 2. 引入 APlayer 的 CSS
  var cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css';
  document.head.appendChild(cssLink);

  // 3. 引入 APlayer 的 JS 库
  var scriptLib = document.createElement('script');
  scriptLib.src = 'https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js';
  scriptLib.onload = function() {

    if (typeof window.globalPlayer === 'undefined') {
      window.globalPlayer = new APlayer({
        container: document.getElementById('global-aplayer'),
        fixed: true,
        autoplay: false,
        theme: '#e2e2e2',
        loop: 'all',
        volume: 0.7,
        mutex: true,
        listFolded: true,
        listMaxHeight: 300,
        lrcType: 3,
        preload: 'auto',
        audio: 
        [
            {
                name: "精卫",
                artist: "王悦辰",
                url: "/musics/music/精卫-王悦辰.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/精卫-王悦辰.lrc"
            },
            {
                name: "抚心曲",
                artist: "蔡青年",
                url: "/musics/music/抚心曲-蔡青年.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/抚心曲-蔡青年.lrc"
            },
            {
                name: "那时雨",
                artist: "徐良",
                url: "/musics/music/那时雨-徐良.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/那时雨-徐良.lrc"
            },
            {
                name: "天使的翅膀",
                artist: "安琥",
                url: "/musics/music/天使的翅膀-安琥.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/天使的翅膀-安琥.lrc"
            },
            {
                name: "我本将心向明月",
                artist: "周笙声",
                url: "/musics/music/我本将心向明月-周笙声.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/我本将心向明月-周笙声.lrc"
            },
            {
                name: "天问",
                artist: "刘宇宁",
                url: "/musics/music/天问-刘宇宁.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/天问-刘宇宁.lrc"
            },
            {
                name: "Alive",
                artist: "Blue",
                url: "/musics/music/Alive-Blue.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/Alive-Blue.lrc"
            },
            {
                name: "Una Mattina (Solid Starr Mashup Remix)",
                artist: "ночная вилка",
                url: "/musics/music/ночная вилка - Una Mattina (Solid Starr Mashup Remix).mp3",
                cover: "/musics/cover/cover.png",
                lrc: ""
            },
            {
                name: "恋人",
                artist: "李荣浩",
                url: "/musics/music/恋人-李荣浩.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/恋人-李荣浩.lrc"
            },
            {
                name: "两难",
                artist: "曹一阳",
                url: "/musics/music/两难-曹一阳.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/两难-曹一阳.lrc"
            },
            {
                name: "遗失的心跳",
                artist: "萧亚轩",
                url: "/musics/music/遗失的心跳-萧亚轩.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/遗失的心跳-萧亚轩.lrc"
            },
            {
                name: "漫夜星",
                artist: "赵徽柔",
                url: "/musics/music/漫夜星-赵徽柔.mp3",
                cover: "/musics/cover/cover.png",
                lrc: ""
            },
            {
                name: "人鱼的眼泪",
                artist: "EXO",
                url: "/musics/music/BabyDontCry-EXO.mp3",
                cover: "/musics/cover/cover.png",
                lrc: "/musics/lrc/BabyDontCry-EXO.lrc"
            },
        ]
      });
    }
  };
  document.head.appendChild(scriptLib);
})();  