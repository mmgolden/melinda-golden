// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Current year
var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Contact form
$('#contact-form').validator();


// When the form is submitted
$('#contact-form').on('submit', function (e) {

    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data)
            { 
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
});