export default function Footer() {
  return (
    <footer>
      <div id="footer_content">
        <div id="footer_contacts">
          <h1>Li<span className="colorido">sync.</span></h1>
          <p>
            Pense, crie, termine. De pessoas <br /> <span className="colorido">criativas </span>
            para pessoas <span className="colorido">criativas</span>
          </p>
          <div id="footer_social_media">
            <a
              href="https://www.instagram.com/notvito/"
              class="footer-link"
              id="instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://github.com/VictorDumer"
              class="footer-link"
              id="github"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" class="footer-link" id="whatsapp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div id="footer_subscribe">
          <h3>Gostou?</h3>

          <p>
            Digite seu e-mail para entrar em contato com o criador do projeto.
          </p>
          <form
            action="https://github.com/VictorDumer"
            method="get"
            className="formulario"
          >
            <div id="input_group">
              <input type="email" id="email" />
              <button>
                <i class="fa-regular fa-envelope"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="footer_copyright">
        <p>© 2026 all rights reserved by <a href="https://github.com/VictorDumer">Victor Dumer =]</a></p>
      </div>
    </footer>
  );
}
