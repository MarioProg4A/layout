document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === 'mario' && password === 'd1234') {
            
            document.body.innerHTML = `
                <div class="halo-theme">
                    <h1>¡bienvenido a una pagina con informacion sobre halo!</h1>
                    <p>aprende un poco mas de Halo</p>

                    <div class="section">
                        <h2>Historia de Halo</h2>
                        <p>Halo es una saga de videojuegos que se desarrolla en un universo de ciencia ficción creado por Bungie y ahora propiedad de 343 Industries.
                        La historia sigue las aventuras de Master Chief, un super soldado de la humanidad, y su compañera de IA, Cortana, mientras luchan contra
                        diversas amenazas como el Covenant, una alianza de razas alienígenas hostiles, y los Flood, una peligrosa forma de vida parasitaria.</p>
                        <img src="https://wpassets.halowaypoint.com/wp-content/2024/01/Operation_SpiritOfFire.jpg"width=10 alt="Halo Background" style="width:100%; height:auto;" />
                    </div>

                    <div class="section">
                        <h2>El Spartan Master Chief</h2>
                        <p>Master Chief, también conocido como John-117, es el protagonista principal de la serie Halo. Es un super soldado mejorado genéticamente
                        que forma parte del programa SPARTAN-II. Conocido por su valentía, habilidades en combate y lealtad, Master Chief ha sido fundamental en
                        la defensa de la humanidad contra sus enemigos.</p>
                      <CENTER>  <img src="https://i.pinimg.com/736x/9b/7b/7e/9b7b7eca50cc049ecf51a74ee77d3bac.jpg" alt="Master Chief" style="width:25%; height:auto;" /> </CENTER>
                    </div>

                    <div class="section">
                        <h2>El Covenant</h2>
                        <p>El Covenant es una alianza de razas alienígenas que consideran a los humanos una amenaza y buscan su destrucción. Los miembros del Covenant 
                        siguen una religión centrada en los antiguos anillos conocidos como los Halo. Sus fuerzas militares están bien equipadas y son un enemigo formidable.</p>
                       <CENTER> 
                       <img src="https://wallpapercave.com/wp/wp10272992.jpg" style="width:50%; height:auto;" /> </CENTER> 
                    </div>

                    <div class="section">
                        <h2>El Flood</h2>
                        <p>El Flood es una forma de vida parasitaria y una amenaza para todas las razas en el universo. Se reproduce y se expande rápidamente, y puede
                        controlar los cuerpos de sus víctimas. Combatir al Flood es una tarea peligrosa y crítica para la supervivencia de todas las especies.</p>
                       <CENTER> <img src="https://i.pinimg.com/736x/23/6c/40/236c40dc6b72c4372a587ca0fde4f368.jpg" style="width:50%; height:auto;" /> </CENTER>
                    </div>

                    <button onclick="location.reload()">Volver</button>
                </div>
            `;

           
            document.body.style.backgroundImage = `url('https://wpassets.halowaypoint.com/wp-content/2024/04/BanishedHonorKeyArt.jpg')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        } else {
            
            errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos';
        }
    });
});

