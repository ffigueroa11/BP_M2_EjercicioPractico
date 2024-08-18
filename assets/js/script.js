$(document).ready(function() {

    $('#enviar-form').click(function() {

        let nameClass = '.requeridoEnviar'

        let Nombre = $('#Nombre').val()
        let Email = $('#Email').val()
        let Mensaje = $('#Mensaje').val()

        if (!validaDatosEnviados(nameClass)) return false

    })

    function validaDatosEnviados(nameClass) {

        let textoLabel = ''
        let contError = 0
        let cantElem = $(nameClass).length

        $(nameClass).each(function() {

            if ($(this).is("input[type=text]")) {
                if ($(this).val().length === 0) {
                    let label = $(this).attr('name')
                    console.log(label)
                    textoLabel = textoLabel + label + '<br>'

                }
            }

        })

        if (contError > 0) {
            //variables de mensaje
            alert_encabezado = '<i class="fa fa-exclamation-triangle red"></i>&nbsp;&nbsp;Error';
            //mostrar mensaje de error 
            var desc_error = 'Ingrese o seleccione un valor en los siguientes campos:<br><br>' + textoLabel;

            $.alert({
                title: alert_encabezado,
                content: desc_error,
                confirmButton: alert_btnAceptarTx,
                confirmButtonClass: alert_btnAceptarClass,
                cancelButtonClass: alert_btnCancelarClass,
                closeIcon: true,
                keyboardEnabled: true,
                confirm: function() {}
            });

            return false
        }

    }
})