class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        ul { list-style: none; padding-left: 0; }
        li { margin: 3px 0; }
      </style>
      <div>
        <h3>Resultado:</h3>
        <ul id="lista"></ul>
      </div>
    `;
    document.addEventListener('rango-seleccionado', (e) => this.mostrarLista(e.detail));

  }
    mostrarLista({ inicio, fin }) {
    const lista = this.shadowRoot.getElementById('lista');
    lista.innerHTML = ''; 
    
    for (let i = inicio; i <= fin; i++) {
      let item = document.createElement('li');
      
      if (i % 2 === 0) {
        item.textContent = i + ' - Par';
      } else {
        item.textContent = i + ' - Impar';
      }

    lista.appendChild(item);
  }
  }

}
customElements.define('par-impar-lista', ParImparLista);


