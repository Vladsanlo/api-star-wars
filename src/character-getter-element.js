import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart h1 - The h1
 */
export class CharacterGetterElement extends LitElement {

  constructor() {
    super()
  }

  getCharacterPage(page){
    
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}`)

      .then(response => response.json())
      .then(jsonData => this.dispatchEvent(new CustomEvent('new-character-event', { detail: jsonData })))


  }

    
  }


window.customElements.define('character-getter-element', CharacterGetterElement)
