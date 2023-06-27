const headerHTML = `
    <div id="header_container" class="header_container">
        <div class="logo_container">
            <img src="img/LogoEidos.png" alt="Logo Eidos">
        </div>
        <div class="nav_container">
            <nav class="header_component_nav">
                <ul>
                    <li>
                        <a href="#contenido"> Inicio </a>
                    </li>
                    <li>
                        <a href="#titulo_contact"> Contacto </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header').innerHTML = headerHTML;
});
