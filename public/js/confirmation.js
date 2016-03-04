/*$('button.confirmation').click(function(){
	var confirm = $(this);
	prompt(confirm);
});
$("#uploadDocsForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 255  
        },
        cat_id: {
            required: {
                depends: function(element) {
                    return $("#category").val() == '';
                }
            }
        }
    },
    messages: {
        name: 'Please enter a <b>Document Name</b>.',
        cat_id: 'Please select a <b>Category</b>.'
    }
});
*/
/*function prompt(confirm){
	swal({  
		title: "Confirm payment",   
		text: "Are you sure you want to purchase this pass?",   
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
	}, function(isConfirm){   
		if (isConfirm) {
			swal({
				title: 'Sweet!',
				html: 'This will redirect you to PayPal for completion.<br>Be aware of blocked pop-ups.', 
				imageUrl: 'images/thumbs-up.jpg',
				animation: true,
				showCancelButton: true,
				cancelButtonColor: "#DD6B55"
				}, function (isConfirm) {
					if(isConfirm){
						if($(".cd-active").attr("data-value") === "2"){
							console.log("1");
							window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=1%2e30&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
						}
						else if($(".cd-dropdown span span").val() === "2"){
							console.log("2");
							window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=2%2e50&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
						}
						else if($("#cd-dropdown2 option:value").val() === "4"){
							console.log("4");
							window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=4%2e25&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
						}
						else if($(".cd-active.cd-dropdown ul li span").attr("data-value") === "8"){
							console.log("8");
							window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=8%2e25&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
						}
						else{
							console.log(this);
							window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20Permits&amount=10%2e25&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
						}
					}
    			});
		} 	
		else {     
			swal("Declined!", "Transaction was not processed!", "error");   
		} 
	});
}*/