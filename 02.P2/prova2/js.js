$(document).ready(function (id)
{
	//Retorna o número de dias da estadia.
	function getDias()
	{
		let date_in = new Date($('#date_in').val()).getTime();
		let date_out = new Date($('#date_out').val()).getTime();

		return (Math.round((date_out - date_in)/(1000 * 60 * 60 * 24)));
	}

	//Adquire os valores dos quartos, e exibe em um alerta.
	function getValue()
	{
		let quartos = [0, 139, 220, 340];
		let dias = getDias();


		if(dias > 0)
		{
			let total = 0;

			for(i of $('.quarto'))
			{
				let subtotal = 0;
				subtotal += quartos[$(i).children('.tipo_quarto').val()];
				if($(i).children('.crianca').is(':checked'))
					subtotal += 30;

				total += subtotal * dias;
			}

			alert("Valor total: \n  R$" + total + ",00");
		}
		else
		{
			alert("Selecione um período de estadia válido!");
		}
	}

	//Adiciona os formulários de reserva na tela.
	function showRooms(n_quartos)
	{
		$('#quartos').empty();

		if(n_quartos > 0)
		{
	        for (let i = 0; i < n_quartos; i++)
	            $('#quartos').append(`<div class="quarto">
	            							<p>Quarto ` + (i+1) + `:</p>
											<select class="tipo_quarto">
												<option value="0">Escolha o tipo de quarto</option>
												<option value="1">Single</option>
												<option value="2">Double</option>
												<option value="3">Triplo</option>
											</select>
											<br>
											<input type="checkbox" name="crianca" class="crianca"> Criança de menos de 5 anos<br>
										</div><br>`);

	        $('#quartos').append('<input type="button" id="confirm" value="Confirmar Reserva">');

	        $('#confirm').click(function(e)
	        {
	        	getValue();
	        });
	    }
	}

	//Evento de mudança do select de número de quartos.
	$('#n_quartos').change(function(e)
    {
        showRooms($('#n_quartos').val());
    });
});
