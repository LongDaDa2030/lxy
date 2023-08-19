new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("小廖 && 小龙")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第八个七夕节...")
    .pause(3000)
	.delete(null, {
        delay: 500
    })
	.type("往下滑吧，有意思的在下面↓↓↓")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 10
}).go();