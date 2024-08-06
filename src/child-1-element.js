import { LitElement, css, html } from 'lit'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart h1 - The h1
 */
export class Child1Element extends LitElement {

  constructor() {
    super()
  }

  connectedCallback() {
    setInterval(() => {
      this.dispatchEvent(new CustomEvent('my-event-1'))
    }, 3000)
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

      h1 {
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
      h1:hover {
        border-color: #646cff;
      }
      h1:focus,
      h1:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        h1 {
          background-color: #f9f9f9;
        }
      }

      img{
        with: 50vw;
      }

      .character-table{
        display:grid;
        grid-template-columns: auto auto auto;
        pading:10px;
      }

      .character-item{
        font-size: 30px;
        text-align:center;
      }
  

      `
  }
}

window.customElements.define('child-1-element', Child1Element)
