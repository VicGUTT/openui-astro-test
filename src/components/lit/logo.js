import { LitElement, html } from 'lit';
import "./image";

export const tagName = 'o-logo';

class Logo extends LitElement {
  static properties = {
    siteTitle: {
      type: String,
      attribute: true,
    },
  };

  render() {
    return html`
      <a href="/" style="text-decoration: none; color: inherit;">
        <o-image
          src="/images/logo-green.png"
          style="height: 2.75em; width: 2.75em; margin-right: 0.25rem;"
          alt=${this.siteTitle}
        >
        </o-image>
        <strong style="vertical-align: middle;">${this.siteTitle}</strong>
      </a>
    `;
  }
}

customElements.define(tagName, Logo);
