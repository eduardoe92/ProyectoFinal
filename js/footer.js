const footerHTML = `
    <div class="footer_container">
        <div class="footer_left">
            <div class="footer_component_logo">
                <img src="./img/LogoEidos.png" alt="Logo Eidos">
            </div>
        </div>
        <div class="footer_center">
            <div class="footer_component_text">
                <p>Código Latam</p>
                <p>Copyright ©2023</p>
            </div>
        </div>
        <div class="footer_right">
            <div class="footer_component_list">
                <ul>
                    <li><a href="#contenido">Ir al principio</a></li>
                </ul>
            </div>
        </div>
    </div>
`;

document.querySelector('footer').innerHTML = footerHTML;
