export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
    console.log(items.length);
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].sellIn == 0 && this.items[i].quality > 0
        ? this.items[i].quality--
        : null;

      switch (true) {
        case this.items[i].name == "+5 Dexterity Vest":
          this.items[i].sellIn > 0 ? this.items[i].sellIn-- : null;
          this.items[i].quality > 0 && this.items[i].quality < 50
            ? this.items[i].quality--
            : null;
          break;

        case this.items[i].name == "Aged Brie":
          this.items[i].sellIn > 0 ? this.items[i].sellIn-- : null;
          this.items[i].quality < 50 ? this.items[i].quality++ : null;
          this.items[i].sellIn == 0 ? (this.items[i].quality = 0) : null;

          break;
        case this.items[i].name == "Elixir of the Mongoose":
          this.items[i].sellIn > 0 ? this.items[i].sellIn-- : null;
          this.items[i].quality > 0 && this.items[i].quality < 50
            ? this.items[i].quality--
            : null;
          break;

        case this.items[i].name == "Sulfuras, Hand of Ragnaros":
          break;

        case this.items[i].name == "Backstage passes to a TAFKAL80ETC concert":
          this.items[i].sellIn > 0 ? this.items[i].sellIn-- : null;
          this.items[i].sellIn >= 11 && this.items[i].quality < 50
            ? (this.items[i].quality += 1)
            : null;
          this.items[i].sellIn < 11 && this.items[i].quality < 48
            ? (this.items[i].quality += 2)
            : null;
          this.items[i].sellIn < 6 && this.items[i].quality < 48
            ? (this.items[i].quality += 1)
            : null;
          this.items[i].sellIn == 0 ? (this.items[i].quality = 0) : null;
          break;

        case this.items[i].name.split(" ")[0] == "Conjured":
          this.items[i].sellIn > 0 ? this.items[i].sellIn-- : null;
          this.items[i].quality > 0 ? (this.items[i].quality -= 2) : null;
          break;

        default:
          console.log("Article unvailable");
      }
    }
    return this.items;
  }
}
