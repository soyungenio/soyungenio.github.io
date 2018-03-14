$(document).ready(function () {

	//$("#formo-tel").mask("+7 (999) 999-99-99");
	$(".posNum").mask("+7 (999) 999-99-99");
    
    $(".fancyform").submit(function(e){
        $(this).addClass("hilite");
    	var name = $(".hilite .posName").val();
		var tel = $(".hilite .posNum").val();

		if(name==null || name=="" || tel==null || tel==""){
			$(".hilite .posName").prop('required',true);
			$(".hilite .posNum").prop('required',true);
            
		}else{
			$(".hilite .posName").val('');
			$(".hilite .posNum").val('');

			var html = '<h1>Заявка на звонок с формы</h1><p class="name">Имя: {0}</p><p>Номер: {1}</p>';

            var a = String.format(html, name, tel);
			var xmlhttp = new XMLHttpRequest();
            var link = window.location.href+"feedback.php?text={0}&head=Заявка с сайта TatooBox";
			xmlhttp.open("POST", String.format(link, a), true);
			xmlhttp.send();
            alert("Заявка принята, ожидайте звонка!");
		}
    $(this).removeClass("hilite");
	});

    $(".form1").submit(function(e){
        $(this).addClass("hilite");
    	var name = $(".hilite .posName").val();
		var tel = $(".hilite .posEmail").val();

		if(name==null || name=="" || tel==null || tel==""){
			$(".hilite .posName").prop('required',true);
			$(".hilite .posEmail").prop('required',true);
            
		}else{
			$(".hilite .posName").val('');
			$(".hilite .posEmail").val('');

			var html = '<h1>Заявка на проекты с формы</h1><p class="name">Имя: {0}</p><p>Номер: {1}</p>';

            var a = String.format(html, name, tel);
			var xmlhttp = new XMLHttpRequest();
            var link = window.location.href+"feedback.php?text={0}&head=Заявка с сайта Заявка с сайта TatooBox";
			xmlhttp.open("POST", String.format(link, a), true);
			xmlhttp.send();
		}
    $(this).removeClass("hilite");
	});
});