import Swal from "sweetalert2";

export const ContactForm = () => {
    const messageHndlr = () => {
        Swal.fire({
            title: "Mensaje enviado",
            text: "A la brevedad se contactara un operador",
            icon: "success",
            confirmButtonText: "Aceptar"
        })
    }

    return (
        <div className="contact__form">
            <h2>Dejanos un mensaje</h2>
            <p>Podes contactarnos de forma telef&oacute;nica o a traves de nuestra p&aacute; en Facebook.</p>
            <form>
                <div>
                    <label htmlFor="">Nombre y apellido
                        <input type="text" />
                    </label>
                    <label htmlFor="">Teléfono
                        <input type="text" />
                    </label>
                </div>
                <label htmlFor="">Email
                    <input type="text" />
                </label>
                <label htmlFor="">Localidad
                    <input type="text" />
                </label>
                <label htmlFor="">Mensaje
                    <textarea name="" id="" rows="5"></textarea>
                </label>
                <button type="button" onClick={messageHndlr}>Enviar mensaje</button>
            </form>
        </div>
    )
}