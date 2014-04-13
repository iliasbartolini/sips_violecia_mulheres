module.exports = {

  prompts: false,

  templateData: {
    title: "SIPS data violência contra as mulheres",

    site: {
      theme: "default",
      url: "http://iliasbartolini.github.io/sips_violecia_mulheres/",
    },

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};