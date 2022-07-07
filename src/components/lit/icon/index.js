import { LitElement } from 'lit';
import bars from "./_bars";

export const tagName = 'o-icon';

const icons = {
  bars,
};

class Icon extends LitElement {
  static properties = {
    name: {
      type: String,
      attribute: true,
    },
    width: {
      type: Number,
      attribute: true,
    },
  };

  render() {
    return icons[this.name]?.({ width: this.width });
  }
}

customElements.define(tagName, Icon);
