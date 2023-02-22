import { Shop, Item } from "../src/gilded_rose.js";
describe("Test unitaire", function () {
  it("Should improve quality by 2 when 10 days left", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 24),
    ]);
    const days = 1;
    for (let i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(26);
    }
  });

  it("Should improve quality by 3 when 5 days left", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 24),
    ]);
    const days = 1;
    for (let i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(27);
    }
  });

  it("Sulfura Should keep his quality", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 11, 33),
    ]);
    const days = 6;
    for (let i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(33);
    }
  });

  it("Items lose two times more quality when they are out of limit expect sulfura", function () {
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
    }
    expect(items[0].quality).toEqual(6);
  });

  it("Conjured should loose quality 2 times faster than normal item", function () {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 6, 10),
      new Item("Conjured Dark Blade", 6, 10),
    ]);

    const days = 2;
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(8);
    expect(items[1].quality).toEqual(6);
  });

  it("Backstage quality should be equal to 0 after the concert", function(){
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 15)
    ])
    const days = 2
    let items;
    for (let i = 0; i < days; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(0)
  })

  it("A item quality is never negative", function(){
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 1, 0)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(0)
  })

  it("A item quality is never more than 50", function(){
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 50)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(50)
  })

  it("Aged Brie and backstage should increase to 1", function(){
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 18, 30)
    ])

    const days = 2
    let items; 
    for (let i = 0; i < days ; i++){
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(32) 
    expect(items[1].quality).toEqual(32) 
  })
});
