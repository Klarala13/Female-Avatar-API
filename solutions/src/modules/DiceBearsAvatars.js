const uuid = require("uuid/v4");

class DiceBearAvatars {
  constructor(options = {}) {
    this.apiUrl = "https://avatars.dicebear.com/v2/:sprites/:seed.svg";
    this.options = {
      sprites: "identicon",
      seed: uuid()
    };
  }

  getAvatar(callback) {
    return this.buildUrl();
  }

  getRandomAvatar() {
    this.setOptions({ seed: uuid() });
    return this.getAvatar();
  }

  buildUrl() {
    return this.apiUrl
      .replace(":sprites", this.options.sprites)
      .replace(":seed", this.options.seed);
  }

  setOptions(options = {}) {
    Object.assign(this.options, options);
  }
}

export default DiceBearAvatars;
