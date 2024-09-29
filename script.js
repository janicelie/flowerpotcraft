const productContainer = document.getElementById("product-links-container");

$(document).ready(function () {
  showProject(productData);
  firstDisplay();
});

var productData = [
  {
    brand: "Casebang",
    item: "Pokémon Magnetic Case",
    link: "https://noxl.ink/riue0o",
    disc_code: "NIAFC579",
    disc_percent: "15",
  },
  {
    brand: "Doughnut",
    item: "Pompompurin Series Bag",
    link: "https://bit.ly/46bk8Gb",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Cidoo",
    item: "Pink Nebula",
    link: "https://cidootech.com/products/cidoo-nebula/",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "GeekShare",
    item: "Magic Bunny Deskmat",
    link: "https://geekshare.com/products/magic-bunny-mouse-pad/",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Akko",
    item: "Cinnamoroll ACR TOP75B Keyboard",
    link: "https://en.akkogear.com/product/cinnamoroll-acr-top75b-mechanical-keyboard/",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Leobog",
    item: "Hi75 Keyboard",
    link: "https://leobogtech.com/products/leobog-hi75",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Aula Gear",
    item: "Aula F75 Keyboard",
    link: "https://www.amazon.com/dp/B0D3F69XSP/ref=tsm_1_fb_lk",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Blingblingyarn",
    item: "Glowing Yarn",
    link: "http://www.blingblingyarn.com/flowerpotcraft",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "10",
  },
  {
    brand: "TokyoCatch",
    item: "Redeem Free 5 Plays",
    link: "https://bit.ly/flowerpotcraft",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Cerakey",
    item: "Ceramic Keycaps",
    link: "https://www.cerakey.com/products/full-set-v2",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Kiiboom",
    item: "Phantom68 Keyboard",
    link: "https://www.kiiboom.com/products/kiiboom-phantom-68?variant=43936439271668",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Energize Lab",
    item: "Eilik",
    link: "https://store.energizelab.com/?ref=flowerpotcraft",
    disc_code: "FLOWER02",
    disc_percent: "$$$",
  },
  {
    brand: "Casebang",
    item: "Magnetic Phone Case",
    link: "https://casebang.com/",
    disc_code: "FLOWERPOTCRAFT15",
    disc_percent: "15",
  },
  {
    brand: "Chongker",
    item: "Realistic Cat Backpack",
    link: "https://chongker.com/products/ragdoll-backpacknew-arrive?ref=flowerpotcraft",
    disc_code: "FLOWERPOT",
    disc_percent: "10",
  },
  {
    brand: "Martube",
    item: "Pochacco Speaker",
    link: "https://martubegift.com/?utm_source=instagram&utm_medium=social&utm_campaign=kol_flowerpotcraft&utm_id=148",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "10",
  },
  {
    brand: "Feker",
    item: "Galaxy80 Keyboard",
    link: "https://fekertech.com/products/epomaker-feker-galaxy80",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "10",
  },
  {
    brand: "Doughnut",
    item: "Kuromi Series Bag",
    link: "https://bit.ly/3D9J2bo",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Cidoo",
    item: "ABM066 Keyboard",
    link: "https://cidootech.com/products/cidoo-abm066",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Cololight",
    item: "Pro Hexagon Heart Kit",
    link: "https://cololight-2.kckb.st/flowerpot",
    disc_code: "COLOLIGHT-FLOWERPOT",
    disc_percent: "10",
  },
  {
    brand: "Uneede",
    item: "Capybara Night Lamp",
    link: "https://uneede.cc/products/uneede-capybara-night-light?ref=flowerpotcraft",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "10",
  },
  {
    brand: "Kiiboom",
    item: "Meow Meow Squad Keycaps",
    link: "https://www.kiiboom.com/products/kiiboom-maorbeng-meow-meow-squad-keycaps?_pos=1&_sid=a7db0f8d8&_ss=r",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Funlab",
    item: "Cat Paw Controller",
    link: "https://bit.ly/3uYwFP7",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "20",
  },
  {
    brand: "Akko",
    item: "Mochi & Dango 3068B Plus Keyboard",
    link: "https://en.akkogear.com/product/mochidango-3068b-plus-mechanical-keyboard/",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Kikagoods",
    item: "Blind Boxes",
    link: "https://www.kikagoods.com/",
    disc_code: "FLOWERPOTCRAFT10",
    disc_percent: "10",
  },
  {
    brand: "Niimbot",
    item: "B1 Label Maker",
    link: "https://niimbots.com/discount/Flowerpot?ref=fmdpy289",
    disc_code: "FLOWERPOT",
    disc_percent: "15",
  },
  {
    brand: "Akko",
    item: "Cat Theme Mouse",
    link: "https://en.akkogear.com/product/akko-cat-theme-mouse/",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Divoom",
    item: "DitooMic",
    link: "http://divoom.com/FLOWERPOTCRAFT",
    disc_code: "FLOWERPOTCRAFT",
    disc_percent: "10",
  },
  {
    brand: "GeekShare+",
    item: "Hei cat deskmat set",
    link: "https://invi.tt/FZIX",
    disc_code: "",
    disc_percent: "",
  },
  {
    brand: "Hi Crochet",
    item: "DIY Crochet Kit",
    link: "https://invi.tt/FZIX",
    disc_code: "FP",
    disc_percent: "10",
  },
  {
    brand: "Niimbot",
    item: "B21 Label Maker",
    link: "https://niimbots.com/products/niimbot-b21-label-maker-machine-with-tape?ref=fmdpy289",
    disc_code: "FLOWERPOT",
    disc_percent: "15",
  },
];

function showProject(productData) {
  productData.forEach((product) => {
    const { brand, item, link, disc_code, disc_percent } = product;
    const productEl = document.createElement("div");
    // productEl.classList.add("product");
    if (disc_code != "") {
      productEl.innerHTML = `
          <div class="product-container">
              <a class="product-link" href="${link}" target="_blank">${brand} ʚɞ ${item}</a>
              <p>⤷ use code [ <b>${disc_code}</b> ] for ˗ˏˋ${disc_percent}% offˎˊ˗</p>
          </div>
      `;
    } else if (disc_code == "") {
      productEl.innerHTML = `
          <div class="product-container">
              <a class="product-link" href="${link}" target="_blank">${brand} ʚɞ ${item}</a>
              <p class="empty"></p>
          </div>
      `;
    }
    productContainer.appendChild(productEl);
  });
}
