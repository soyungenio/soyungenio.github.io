$( document ).ready(function() {
	$('.Number').mask("+9 (999) 999-99-99");

    $('form').submit(function(e) {
		e.preventDefault()

		var data = $(this).serialize()
		console.log(data);
		$.ajax({
			url: '/send_mail.php',
			data: data,
			type: 'POST',
			success: function(data) {
				alert("Ваш заявка принята! Ожидайте звонка")
			},
			error: function(err) {
				alert("Извините, но ваша заявка не отправилась, попробуйте снова.")
			}
		})

	})
});