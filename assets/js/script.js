let alert_encabezado = '';
let alert_btnAceptarTx = 'Aceptar';
let alert_btnCancelarTx = 'Cancelar';
let alert_btnAceptarClass = 'btn btn-sm btn-primary btn_text_capitalize';
let alert_btnCancelarClass = 'btn btn-sm btn-default btn_text_capitalize';
let alert_columnClass = 'col-md-6 col-md-offset-3';
let confirm_encabezado = '';
let confirm_btnAceptarTx = 'Aceptar';
let confirm_btnCancelarTx = 'Cancelar';
let confirm_btnAceptarClass = 'btn btn-sm btn-primary btn_text_capitalize';
let confirm_btnCancelarClass = 'btn btn-sm btn-default btn_text_capitalize';

$(document).ready(function() {

    $('#enviar-form').click(function() {

        let nameClass = '.requeridoEnviar'

        let Nombre = $('#Nombre').val()
        let Email = $('#Email').val()
        let Mensaje = $('#Mensaje').val()

        if (!validaDatosEnviados(nameClass)) return false

        $('#labelNombre').text(Nombre)
        $('#labelCorreo').text(Correo)
        $('#labelMensaje').text(Mensaje)

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
                    contError = contError + 1

                }
            }

            if ($(this).is("input[type=email]")) {
                if ($(this).val().length === 0) {
                    let label = $('label[for="' + $(this).attr('id') + '"]');
                    textoLabel = textoLabel + label.text().replace(':', '') + '<br>';
                    contError = contError + 1;
                }
            }

            if ($(this).is("textarea")) {
                if ($(this).val().length === 0) {
                    let label = $('label[for="' + $(this).attr('id') + '"]');
                    console.log(label)
                    textoLabel = textoLabel + label.text().replace(':', '') + '<br>';
                    contError = contError + 1;
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