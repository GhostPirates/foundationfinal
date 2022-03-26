$('#form').submit(function (e) {
    e.preventDefault();
    const form = $(this);
    const url = form.attr('action');
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function (response) {
            $("#response").html(response);
            $('#form').submit(function (e) {
                e.preventDefault();
                const form = $(this);
                const url = form.attr('action');
                $.ajax({
                    type: "POST",
                    url: url,
                    data: form.serialize(),
                    success: function (response) {
                        $("#response").html(response);
                        window.scrollTo(0, 0);
                    }
                });
            });
        }
    });
});


