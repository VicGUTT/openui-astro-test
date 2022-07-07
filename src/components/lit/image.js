import { LitElement, html } from 'lit';

export const tagName = 'o-image';

class Image extends LitElement {
  static properties = {
    src: {
      type: String,
      attribute: true,
    },
    alt: {
      type: String,
      attribute: true,
    },
    style: {
      type: String,
      attribute: true,
    },
  };

  render() {
    // alt={alt}
    // srcSet={imageData + " 2x"}

    return html`
      <img
        src=${this.src}
        alt=${this.alt}
        style="
          display: inline-block;
          vertical-align: middle;
          margin: 0;
          ${this.style}
        "
      />
    `;
  }
}

customElements.define(tagName, Image);
