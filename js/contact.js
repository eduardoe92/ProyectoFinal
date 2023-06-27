const importContactComponent = () => {
    const container = document.querySelector("#contactContainer");

    container.innerHTML = `
        <div id="titulo_contact" class="titulo_contact">
            <div class="titulo_contact_container">
                <div class="titulo_contact_component_text">
                    <h1>
                        ¡Contacto!
                    </h1>
                </div>
            </div>
        </div>


    <section class="contact">
        <div class="contact_container">
            <div class="contact_component">
                <div class="contact_component_text">
                    <p>Gracias por querer ponerte en contacto conmigo. <br>
                        Estoy disponible para hablar contigo y responder cualquier pregunta o inquietud que puedas tener.<br>
                        Para comunicarte conmigo, puedes completar el siguiente formulario, te comento que también
                        puedes contactarme a través de mis redes sociales.<br>
                        Por favor, ten en cuenta que mi tiempo puede ser limitado, pero haré todo lo posible por
                        responder a tu mensaje lo antes posible.<br>
                        ¡Espero tener noticias tuyas pronto!<br><br>
                        Saludos cordiales.<br><br>
                        Eduardo Chacon.<br>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div class="contact_inputs">
        <form class="form-contact_inputs_container">
            <div class="form-contact__container__inputs">
                <div class="form-contact__container__inputs__wrapper">
                    <label for="Nombre">Nombre</label>
                    <input type="text" id="Nombre" name="Nombre" placeholder="Nombre">
                </div>
                <div class="form-contact__container__inputs__wrapper">
                    <label for="Apellido">Apellido</label>
                    <input type="text" id="Apellido" name="Apellido" placeholder="Apellido">
                </div>
                <div class="form-contact__container__inputs__wrapper">
                    <label for="Telefono">Telefono</label>
                    <input type="number" id="Telefono" name="Telefono" placeholder="Telefono">
                </div>
                <div class="form-contact__container__inputs__wrapper">
                    <label for="País">País</label>
                    <input type="text" id="País" name="País" placeholder="País">
                </div>
                <div class="form-contact__container__inputs__wrapper">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email">
                </div>
                <div class="form-contact__container__inputs__wrapper">
                    <label for="Mensaje">Mensaje</label>
                    <textarea id="Mensaje" name="Mensaje" placeholder="Escribe tu mensaje aquí"></textarea>
                </div>
            </div>
            <button type="submit" class="button">Enviar</button>
        </form>
    </div>
    `;
};
// ...

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header').innerHTML = headerHTML;

    // Obtener el elemento de enlace de contacto
    const contactLink = document.querySelector('.header_component_nav a[href="#titulo_contact"]');

    // Agregar un controlador de eventos al hacer clic en el enlace de contacto
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de navegación

        const contactContainer = document.getElementById('titulo_contact');

        // Desplazarse al contenedor de contacto utilizando scrollIntoView
        contactContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
