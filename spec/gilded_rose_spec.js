import { Shop, Item } from "../src/gilded_rose.js";
describe("Test unitaire", function () {
  it("Should improve quality by 2 when 10 days left", function () {
    console.log("------------------ Should improve quality by 2 when 10 days left --------------------------")
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 24),
    ]);
    const days = 3;
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(30);
  });

  it("Should improve quality by 3 when 5 days left", function () {
    console.log("---------------------- Should improve quality by 3 when 5 days left -----------------------------")
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 24),
    ]);
    const days = 3;
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(33);
  });

  it("Sulfura Should keep his quality", function () {
    console.log("---------------------- Sulfura Should keep his quality -----------------------------")
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 11, 33),
    ]);
    const days = 6;
    for (let i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      console.log(` ${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
      expect(items[0].quality).toEqual(33);
    }
  });

  it("Items lose two times more quality when they are out of limit expect sulfura", function () {
    console.log("-------------- Items lose two times more quality when they are out of limit expect sulfura-------------------")
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 0, 10),
      new Item("Aged Brie", 0, 10),
      new Item("Elixir of the Mongoose", 0, 10),
      new Item("Sulfuras, Hand of Ragnaros", 0, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);

    const days = 2;
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(6);
  });

  it("Conjured should loose quality 2 times faster than normal item", function () {
    console.log("---------------- Conjured should loose quality 2 times faster than normal item ------------------------")
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 6, 10),
      new Item("Conjured Dark Blade", 6, 10),
    ]);

    const days = 2;
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
      console.log(`${items[1].name} - ${items[1].sellIn} - ${items[1].quality}`)
    }
    expect(items[0].quality).toEqual(8);
    expect(items[1].quality).toEqual(6);
  });

  it("Backstage quality should be equal to 0 after the concert", function(){
    console.log("------------------- Backstage quality should be equal to 0 after the concert -----------------------")
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 15)
    ])
    const days = 2
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(0)
  })

  it("A item quality is never negative", function(){
    console.log("---------------------- A item quality is never negative -------------------------------")
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 1, 0)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
      console.log(` ${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(0)
  })

  it("A item quality is never more than 50", function(){
    console.log("---------------------- A item quality is never more than 50 -----------------------------")
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 50)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
    }
    expect(items[0].quality).toEqual(50)
  })

  it("Aged Brie and backstage should increase to 1", function(){
    console.log("----------------- Aged Brie and backstage should increase to 1 ---------------------------")
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 18, 30)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
      console.log(`${items[0].name} - ${items[0].sellIn} - ${items[0].quality}`)
      console.log(`${items[1].name} - ${items[1].sellIn} - ${items[1].quality}`)
    }
    expect(items[0].quality).toEqual(32) 
    expect(items[1].quality).toEqual(32) 
  })
});
