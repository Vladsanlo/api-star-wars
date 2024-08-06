import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart h1 - The h1
 */
export class CharacterCardElement extends LitElement {

  constructor() {
    super()
  }

  static get properties() {
    return {
      /*
    El nombre del personaje
    */
      name: { type: String },

      /*
      la imagen del personaje
      */
      image: { type: String },

      /*
      la especie del personaje
      */
      species: { type: String },

      /*
      El status del personaje
      */
      status: { type: String },
    }
  }


  
  render() {
    return html`
  <div class="character">
    <h1>${this.name}</h1>
    <img src="${this.image}">
    <h3>${this.species}</h3>
    <h3>${this.status}</h3>
  </div>

`

  }




  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }

      .character{
        background-color:#323232;
        width:30vw;
      } 

    `
  }
}

window.customElements.define('character-card-element', CharacterCardElement)
