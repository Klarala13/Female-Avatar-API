import DiceBearAvatars from "./DiceBearsAvatars";

class AvatarWidget {
  constructor(options = {}) {
    this.options = {
      container: "#dicebears-avatars"
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
          <div class="avatar">
            <img class="img-fluid" src="/images/placeholder.png">
          </div>
          <div class="avatar">
            <img class="img-fluid" src="/images/placeholder.png">
          </div>
          <div class="avatar">
            <img class="img-fluid" src="/images/placeholder.png">
          </div>
        </div>
        <button class="btn btn-secondary btn-random">Randomize</button>
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
    const sprites = ["male", "female", "identicon"];

    sprites.forEach((sprite, index) => {
      this.api.setOptions({ sprites: sprite });
      this.setAvatar(index, this.api.getRandomAvatar());
    });
  }
}

export default AvatarWidget;
