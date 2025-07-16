class RangoNumerico extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM
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

}
}
