import { LitElement, html, css } from 'lit';
import reset from '../../styles/reset';
import "./community-links";
import "./logo";
import './icon';

export const tagName = 'o-header';

class Header extends LitElement {
  static properties = {
    siteTitle: {
      type: String,
      attribute: true,
    },
  };

  static styles = [
    reset,
    css`
      .header-menu-btn[type='button'] {
        display: none;
        padding: 0.25em 0.5em;
        appearance: none;
        border: 0;
        background: none;
        color: white;
        cursor: pointer;
      }

      .header-menu-btn[type='button']:hover {
        background-color: #666;
      }

      @media (max-width: 640px) {
        .header-menu-btn[type='button'] {
          display: block;
        }
      }
    `,
  ];

  render() {
    return html`
      <header style="background: #333; margin-bottom: 2rem; color: #eee">
        <div
          style="
            display: flex;
            padding: 1rem;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            justify-items: space-between;
            align-items: center;
          "
        >
          <span style="flex: 1">
            <o-logo .siteTitle=${this.siteTitle}></o-logo>
          </span>

          <o-community-links></o-community-links>

          <!-- onClick={onToggleMenu}
          aria-expanded={menuOpened ? "true" : "false"} -->
          <button
            type="button"
            class="header-menu-btn"
            aria-label="Toggle menu"
            title="Toggle menu"
            aria-controls="site-nav"
          >
            <o-icon name="bars" width="16"></o-icon>
          </button>
        </div>
      </header>
    `;
  }
}

customElements.define(tagName, Header);
