$('button.confirmation').click(function(){
	var confirm = $(this);
	prompt(confirm);
});

function prompt(confirm){
	swal({   
		title: "Confirm payment",   
		text: "Are you sure you want to purchase this pass?"/* + $('#spot').val()*/,   
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085D6",   
		cancelButtonColor: "#DD6B55",
		confirmButtonText: "Confirm",
		cancelButtonText: "Decline",
		closeOnConfirm: false,
		closeOnCancel: false,
		allowOutsideClick: false,
		allowEscapeKey: true
		/*showLoaderOnConfirm: true*/
	}, function(isConfirm){   
		if (isConfirm) {     
			/*swal({   
				html: '<div style="border:5px solid green;'
						+ 'font-weight:50px;margin:auto;border-radius:50%;width:100px;height:100px;margin-bottom:20px;color:green;font-family:Impact,Charcoal,sans-serif;font-size:65px;">$</div>'
						+ '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'
							+ '<input type="hidden" name="cmd" value="_xclick">'
							+ '<input type="hidden" name="business" value="kbbqfatass911@gmail.com">'
							+ '<input type="hidden" name="lc" value="US">'
							+ '<input type="hidden" name="item_name" value="UCSD Permit">'
							+ '<input type="hidden" name="button_subtype" value="services">'
							+ '<input type="hidden" name="no_note" value="0">'
							+ '<input type="hidden" name="currency_code" value="USD">'
							+ '<input type="hidden" name="tax_rate" value="0.000">'
							+ '<input type="hidden" name="shipping" value="0.00">'
							+ '<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">'
							+ '<table>'
							+ '<tr><td><input type="hidden" name="on0" value="UCSD Permits">UCSD Permits</td></tr><tr><td><select name="os0">'
								+ '<option value="1 Hour">1 Hour $1.75 USD</option>'
								+ '<option value="2 Hour">2 Hour $3.50 USD</option>'
								+ '<option value="4 Hour">4 Hour $7.00 USD</option>'
								+ '<option value="All Day">All Day $8.00 USD</option>'
							+ '</select> </td></tr>'
							+ '</table>'
							+ '<input type="hidden" name="currency_code" value="USD">'
							+ '<input type="hidden" name="option_select0" value="1 Hour">'
							+ '<input type="hidden" name="option_amount0" value="1.75">'
							+ '<input type="hidden" name="option_select1" value="2 Hour">'
							+ '<input type="hidden" name="option_amount1" value="3.50">'
							+ '<input type="hidden" name="option_select2" value="4 Hour">'
							+ '<input type="hidden" name="option_amount2" value="7.00">'
							+ '<input type="hidden" name="option_select3" value="All Day">'
							+ '<input type="hidden" name="option_amount3" value="8.00">'
							+ '<input type="hidden" name="option_index" value="0">'
							+ '<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'
							+ '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'
						+ '</form>',
					confirmButtonText: "Pay Here",
					showConfirmButton: true,
					showCancelButton: true,
					confirmButtonColor: "#3085D6",
					cancelButtonColor: "#DD6B55"
			});*/
			swal({title: 'Sweet!',html: 'Redirecting you to PayPal for completion.<br>Be aware of blocked pop-ups.', imageUrl: 'images/thumbs-up.jpg',animation: true });
			setTimeout(function () {
				window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=1%2e25&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
    		}, 3500);			
		} 	
		else {     
			swal("Declined!", "Transaction was not processed!", "error");   
		} 
	});
}
/*
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="kbbqfatass911@gmail.com">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="item_name" value="UCSD Permits">
<input type="hidden" name="button_subtype" value="services">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="tax_rate" value="0.000">
<input type="hidden" name="shipping" value="0.00">
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest">
<table>
<tr><td><input type="hidden" name="on0" value="UCSD Permits">UCSD Permits</td></tr><tr><td><select name="os0">
	<option value="1 Hour (V)">1 Hour (V) $1.25 USD</option>
	<option value="2 Hour (V)">2 Hour (V) $2.50 USD</option>
	<option value="4 Hour (V)">4 Hour (V) $4.00 USD</option>
	<option value="All Day (V)">All Day (V) $8.00 USD</option>
	<option value="1 Hour (VP)">1 Hour (VP) $2.00 USD</option>
	<option value="2 Hour (VP)">2 Hour (VP) $4.00 USD</option>
	<option value="4 Hour (VP)">4 Hour (VP) $7.00 USD</option>
	<option value="All Day (VP)">All Day (VP) $16.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="option_select0" value="1 Hour (V)">
<input type="hidden" name="option_amount0" value="1.25">
<input type="hidden" name="option_select1" value="2 Hour (V)">
<input type="hidden" name="option_amount1" value="2.50">
<input type="hidden" name="option_select2" value="4 Hour (V)">
<input type="hidden" name="option_amount2" value="4.00">
<input type="hidden" name="option_select3" value="All Day (V)">
<input type="hidden" name="option_amount3" value="8.00">
<input type="hidden" name="option_select4" value="1 Hour (VP)">
<input type="hidden" name="option_amount4" value="2.00">
<input type="hidden" name="option_select5" value="2 Hour (VP)">
<input type="hidden" name="option_amount5" value="4.00">
<input type="hidden" name="option_select6" value="4 Hour (VP)">
<input type="hidden" name="option_amount6" value="7.00">
<input type="hidden" name="option_select7" value="All Day (VP)">
<input type="hidden" name="option_amount7" value="16.00">
<input type="hidden" name="option_index" value="0">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
*/