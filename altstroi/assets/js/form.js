$( document ).ready(function() {
    $('form').submit(function(e) {
		e.preventDefault()

		var data = $(this).serialize()
		console.log(data);
		$.ajax({
			url: '/send_mail.php',
			data: data,
			type: 'POST',
			success: function(data) {
				alert("Ваш запрос заявка принята! Ожидайте звонка")
			},
			error: function(err) {
				console.log(err)
			}
		})

	})
});