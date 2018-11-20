const uuid = require("uuid/v4");

class DiceBearAvatars {
  constructor(options = {}) {
    this.proxy = "https://cors-anywhere.dominik-hanke.de/";
    this.apiUrl = "https://avatars.dicebear.com/v2/:sprites/:seed.svg";
    this.options = {
      sprites: "identicon",
      seed: uuid()
    };
  }

  getAvatar(callback) {
    const apiUrl = this.buildUrl();

    $.get(apiUrl).done(response => {
      const body = new XMLSerializer().serializeToString(
        response.documentElement
      );

      callback(body);
    });
  }

  getRandomAvatar(callback) {
    this.setOptions({ seed: uuid() });
    this.getAvatar(callback);
  }

  buildUrl() {
    return (
      this.proxy +
      this.apiUrl
        .replace(":sprites", this.options.sprites)
        .replace(":seed", this.options.seed)
    );
  }

  setOptions(options = {}) {
    Object.assign(this.options, options);
  }
}

export default DiceBearAvatars;
