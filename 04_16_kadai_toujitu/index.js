
$(".button_hide").on('click',function(){
  $(".box1").css("background-color","blue");
})

$(".button_show").on('click',function(){
  $(".box1").css("background-color","red");
})

// 表示・非表示
$(".button_show2").on('click',function(){
  $(".box1").show(2000);
})

$(".button_hide2").on('click',function(){
  $(".box1").hide(2000);
})

// カウント
var countUpValue = 0;
$(".button_show3").on('click',function(){
  countUpValue++;
  $(".box1").html(countUpValue);
})

// 枠
$(".button_show4").on('click',function(){
  countUpValue++;
  $(".box1").css("border","solid "+ countUpValue+ "px");
})

// フェードイン
$(".button_show5").on('click',function(){
  $(".box1").fadeIn(4000);
})

// かきくけこ
$(".button_show6").on('click',function(){
  $(".box1").html("<p>かきくけこ</p>");
})

// 背景黒文字白
$(".button_show7").on('click',function(){
  $(".box1").css("background-color","black");
  $(".box1").css("color","white");
})

// あいうえお
$(".button_show8").on('click',function(){
  $(".box1").prepend("<p>あいうえお</p>");
})

// さしすせそ
$(".button_show9").on('click',function(){
  $(".box1").append("<p>さしすせそ</p>");
})

// 偶数行
$(".button_show10").on('click',function(){
  $("p:even").css("background-color","white");
})
