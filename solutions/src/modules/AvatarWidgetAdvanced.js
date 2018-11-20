import DiceBearAvatars from "./DiceBearsAvatars";

class AvatarWidgetAdvanced {
  constructor(options = {}) {
    this.options = {
      container: "#dicebears-avatars",
      amount: 3
    };

    Object.assign(this.options, options);

    this.init();
  }

  init() {
    this.elements = {
      container: document.querySelector(this.options.container)
    };

    this.api = new DiceBearAvatars();

    this.renderIntitialTemplate();
    this.getElements();
    this.registerEvents();
    this.getRandomAvatars();
  }

  renderIntitialTemplate() {
    this.elements.container.innerHTML = `
      <div class="dicebears-avatar-widget">
        <div class="avatars">
          ${","
            .repeat(this.options.amount - 1)
            .split(",")
            .map(item => this.renderAvatarTemplate())
            .join("")}
        </div>
        <button class="btn btn-secondary btn-random">Randomize</button>
      </div>
    `;
  }

  renderAvatarTemplate() {
    return `
    <div class="avatar">
      <img class="img-fluid" src="/images/placeholder.png">
    </div>
    `;
  }

  getElements() {
    Object.assign(this.elements, {
      avatars: this.elements.container.querySelectorAll(".avatar img"),
      buttonRandom: this.elements.container.querySelector(".btn-random")
    });
  }

  registerEvents() {
    this.elements.buttonRandom.addEventListener("click", e => {
      this.getRandomAvatars();
    });
  }

  setAvatar(index, url) {
    this.elements.avatars[index].src = url;
  }

  getRandomAvatars() {
    this.elements.avatars.forEach((avatar, index) => {
      if (index % 3 === 0) {
        this.api.setOptions({ sprites: "male" });
      } else if (index % 3 === 1) {
        this.api.setOptions({ sprites: "female" });
      } else if (index % 3 === 2) {
        this.api.setOptions({ sprites: "identicon" });
      }

      this.setAvatar(index, this.api.getRandomAvatar());
    });
  }
}

export default AvatarWidgetAdvanced;
