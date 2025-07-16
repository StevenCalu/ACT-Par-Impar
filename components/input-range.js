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


    if (isNaN(inicio)) {
      alert("El numero de inicio no es valido.");
      return; 
    }
    
    if (isNaN(fin)) {
      alert("El numero de fin no es valido.");
      return; 
    }
    
    if (inicio > fin) {
      alert("El numero de inicio debe ser menor o igual al numero final.");
      return; 
    }

    const evento = new CustomEvent('rango-seleccionado', {
      detail: { inicio, fin },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evento); 
  }

}
customElements.define('input-range', RangoNumerico);
