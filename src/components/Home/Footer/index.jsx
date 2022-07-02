import React from 'react'
import './styles.css'

const Footer = () => (
    <footer class="footer">
    <div class="footer-addr">
      <h1 class="footer-logo">Acerca de nosotros</h1>
          
      <h2>Dirección</h2>
      
      <address>
      Campus “La María”, km 7 vía Quevedo-El Empalme Quevedo - Los Ríos - Ecuador
        </address>
    </div>
    
    <ul class="footer-nav">
      <li class="nav-item">
        <h2 class="nav-title">Contacto</h2>
  
        <ul class="nav-ul">
          <li>
            <a href="#">lin.salinas2014@uteq.edu.ec</a>
          </li>
  
          <li>
            <a href="#">celso.turriago2017@uteq.edu.ec</a>
          </li>
              
          <li>
            <a href="#">dennisse.zambrano2017@uteq.edu.ec</a>
          </li>
        </ul>
      </li>
      
      <li class="nav-item nav-item-extra">
        <h2 class="nav-title">Tecnologías</h2>
        
        <ul class="nav-ul nav-ul-extra">          
          <li>
            <a href="#">Diseño de software</a>
          </li>          
          <li>
            <a href="#">Inteligencia artificial</a>
          </li>
          
          <li>
            <a href="#">IoT</a>
          </li>
        </ul>
      </li>
      
      <li class="nav-item">
        <h2 class="nav-title">Legal</h2>
        
        <ul class="nav-ul">
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          
          <li>
            <a href="#">Términos de uso</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <div class="legal">
      <p>&copy; 2022. Todos los derechos reservados.</p>
      
      <div class="legal-links">
        <span>Hecho con <span class="heart">♥</span> para el ingeniero Gleiston</span>
      </div>
    </div>
  </footer>
)
export default Footer