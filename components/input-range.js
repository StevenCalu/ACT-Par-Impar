class RangoNumerico extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        input, button {
          margin: 5px;
          padding: 5px;
        }
      </style>
      <div>
        <label>Inicio: <input type="number" id="inicio"></label><br>
        <label>Fin: <input type="number" id="fin"></label><br>
        <button id="enviar">Ver resultado</button>
      </div>
    `;
    this.shadowRoot.getElementById('enviar').addEventListener('click', () => this.enviarRango());

}

  enviarRango() {
    
    const inputInicio = this.shadowRoot.getElementById('inicio');
    const inputFin = this.shadowRoot.getElementById('fin');
    
    const valorInicio = inputInicio.value;
    const valorFin = inputFin.value;

    const inicio = Number.parseInt(valorInicio);
    const fin = Number.parseInt(valorFin);

  }

}
