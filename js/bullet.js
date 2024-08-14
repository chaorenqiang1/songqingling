// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["环境优美，值得一游", "了解伟人，受益匪浅", "故居保存完好，点赞", "感受历史，传承精神", "文化底蕴深厚，推荐", "适合带孩子学习历史", "了解宋庆龄，敬佩不已","意义非凡的一次旅行","体验民国风情，有趣","非常适合爱国主义教育","感受历史建筑的韵味"," 古宅新颜，魅力依旧"," 值得多次游览","感受名人生活，启迪人心","感受宋庆龄魅力"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);