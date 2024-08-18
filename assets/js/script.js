$(document).ready(function() {

    $('#enviar-form').click(function() {

        let nameClass = '.requeridoEnviar'

        let Nombre = $('#Nombre').val()
        let Email = $('#Email').val()
        let Mensaje = $('#Mensaje').val()

        if (!validaDatosEnviados(nameClass)) return false

    })

    function validaDatosEnviados(nameClass) {

        $(nameClass).each(function() {

            if ($(this).is("input[type=text]")) {
                if ($(this).val().length === 0) {
                    let label = $(this).data('name')
                    console.log(label)
                }
            }

        })
    }
})