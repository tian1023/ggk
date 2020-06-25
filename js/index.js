var ggkDom = document.querySelector(".ggk");
var jpDom = document.querySelector(".jp");
var c1 = document.querySelector("#canvas");
var ctx = c1.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, 600, 200)
ctx.fillStyle = "#999";
ctx.fill();
ctx.closePath();

var isDraw = false;
c1.onmousedown = function(e) {
	isDraw = true;
}
c1.onmousemove = function(e) {
	if(isDraw) {
		var x = e.pageX - ggkDom.offsetLeft;
		var y = e.pageY - ggkDom.offsetTop;
		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		ctx.arc(x, y, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "#fff";
		ctx.fill()
		ctx.closePath();
	}
}
c1.onmouseup = function(e) {
	isDraw = false;
}

var arr = [{
	content: "一等奖：粽子大礼包",
	p: 0.1
}, {
	content: "二等奖：咸鸭蛋一个",
	p: 0.2
}, {
	content: "三等奖：0.5元红包",
	p: 0.3
}]
var randomNum = Math.random();
console.log(randomNum)
if(randomNum < arr[0].p) {
	jpDom.innerHTML = arr[0].content;
} else if(randomNum < arr[1].p + arr[0].p) {
	jpDom.innerHTML = arr[1].content;
} else if(randomNum < arr[2].p + arr[1].p + arr[0].p) {
	jpDom.innerHTML = arr[2].content
}