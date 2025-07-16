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

  }

}


