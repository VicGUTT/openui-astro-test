import { LitElement, html, css } from 'lit';
import reset from '../../styles/reset';

export const tagName = 'o-community-links';

class CommunityLinks extends LitElement {
  static properties = {
    class: {
      type: String,
      attribute: true,
    },
  };

  static styles = [
    reset,
    css`
      .community-links {
        display: block;
      }

      .community-links.mobile {
        display: none;
        justify-content: space-around;
        margin-bottom: 0.5rem;
      }

      @media (max-width: 640px) {
        .community-links {
          display: none;
        }

        .community-links.mobile {
          display: flex;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="community-links ${this.class}">
        <a
          href="https://github.com/openui/open-ui"
          target="_blank"
          rel="noreferrer noopener"
          style="color: inherit;"
        >
          <!-- <FontAwesomeIcon style={{ marginRight: "0.2em" }} icon={faGithub} /> -->
          GitHub
        </a>

        <a
          href="https://discord.gg/DEWjhSw"
          target="_blank"
          rel="noreferrer noopener"
          style="color: inherit;"
        >
          Discord
        </a>
      </div>
    `;
  }
}

customElements.define(tagName, CommunityLinks);

