const figureList = document.getElementById('figure-list');
const figureGrid = document.getElementById('figure-grid');

const figures = [
  {
    id: 'Super Broly',
    name: 'Super Broly Full Power SSJ',
    price: '$100',
    rarity: 'Rare',
    wishlist: true, // optional
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/08/2df50b86-570b-4b27-a76b-29af08bcbea7.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/329985?srsltid=AfmBOooUvLE5eHGeUJSp8ysZdth7Y-0lkJ3WGHECkO1rnORks6RCkL79'
  },
  {
    id: 'Shallot',
    name: 'Shallot',
    rarity: 'Rare',
    wishlist: true, // optional  
    price: '$130',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/06/677d22cf-fba0-4145-a84d-37e1f62967d7.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/320054'
  },
  {
    id: 'Giblet',
    name: 'Giblet',
    rarity: 'Rare', 
    price: '$155',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/06/2293f5c4-1b28-4d2d-866c-a1330bf835f1.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/320050'
  },
  {
    id: 'Super Saiyan God Vegeta',
    name: 'Super Saiyan God Vegeta',
    rarity: 'Ultra Rare',  
    wishlist: true, // optional  
    price: '$130',
    image: 'https://m.media-amazon.com/images/I/71FDUr4wJYL._AC_SX569_.jpg',
    link: 'https://www.amazon.com/Tamashii-Nations-Bandai-Figuarts-Saiyan/dp/B07L9M6793'
  },
  {
    id: 'Saiyan Saga Vegeta',
    name: 'Saiyan Saga Vegeta ',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$110',
    image: 'https://images.bigbadtoystore.com/images/p/full/2017/03/b82843d0-e4bc-456c-8fd5-d698406571b5.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/50434?srsltid=AfmBOopZDnRkEWNsBf3qFk2EiDbHscSfq7jkSfPCsVqAK1A6qKph1ioC'
  },
  {
    id: 'Orange Piccolo',
    name: 'Orange Piccolo',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$170',
    image: 'https://m.media-amazon.com/images/I/31QvpLuHnpL._SL500_.jpg',
    link: 'https://www.amazon.com/dp/B0C64HG9PX?tag=199us-20&linkCode=ogi&th=1&psc=1'
  },
  {
    id: 'Ape Vegeta',
    name: 'Ape Vegeta',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$300',
    image: 'https://tamashiiweb.com/images/item/item_0000015444_1i7BzdRN_01.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/116386?srsltid=AfmBOoo4mMipbRHpaRqSgxrUD8hKqx-Pxld4s2HgdfR_jjRu279Q4-vr'
  },
  {
    id: 'Gamma 1',
    name: 'Gamma 1',
    rarity: 'Rare',
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/06/a047b682-9998-45ae-8150-a5f92fd2f22b.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/209105?srsltid=AfmBOoq-IjnNhN_jr6UGGMkq1mXg25lb-tbPD7nxgfKfJh1Bc_vWTH24'
  },
  {
    id: 'Gamma 2',
    name: 'Gamma 2',
    rarity: 'Rare',
    price: '$115',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/06/c7668de4-654f-45a6-a273-d93f57e5297f.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/209113?srsltid=AfmBOopW0sm0kTwaq9UAENirRzniBkbAl7g19fFSHpQ8b5I72qrk-ejq'
  },
  {
    id: 'Beast Gohan',
    name: 'Beast Gohan',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$90',
    image: 'https://p-bandai.com/files/seller-products/FSP0002570001/yA2V27s8C1y83xwQuMlk.webp?w=1440&h=1440',
    link: 'https://p-bandai.com/us/item/F2767001001?_lc=en'
  },
  {
    id: 'Toyataro MUI',
    name: 'Toyotaro MUI',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$115',
    image: 'https://m.media-amazon.com/images/I/516VsF5x5OL._SL500_.jpg',
    link: 'https://www.shfiguarts.com/products/detail/10495/SHFiguarts-Son-Goku-Ultra-Instinct-Toyotarou-Edition-.html'
  },
  {
    id: 'Super Saiyan 4 Goku',
    name: 'Super Saiyan 4 Goku',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/05/0fc3096a-e65d-45b4-a275-cd1c49c8669e.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/163612?srsltid=AfmBOopPDNdcx5fHKSy1AnSBIHTLuU_-O90UaMJrtKAWo7b8v-GOXtv0'
  },
  {
    id: 'Super Saiyan 3 Vegeta Mini',
    name: 'Super Saiyan 3 Vegeta Mini',
    price: '$95',
    rarity: 'Rare',
    wishlist: true, // optional
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/02/941c12d8-b471-4c79-967e-3b1fb60450ff.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/302426?srsltid=AfmBOoqiBc1g-rSE_VCZ0Dfdsf5DNrvT3-yCaGlTwgjB98od2ejAmG_u'
  },
  {
    id: 'Demon King Piccolo',
    name: 'Demon King Piccolo',
    rarity: 'Rare',
    price: '$90',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/07/85761978-57db-4a68-b9b2-f399bc721815.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/93948?srsltid=AfmBOoreJOGsHzFrSDKGflMvk20UorsVUvlbzuHPI3Y3pDa1zk1CNU3v'
  },
  {
    id: 'Super Saiyan 4 Goku Daima Mini',
    name: 'Super Saiyan 4 Goku Daima Mini',
    rarity: 'Rare',
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/03/004d6a6e-dea6-4139-95be-986cc65aa420.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/307433?srsltid=AfmBOoojnn7UdnnT9Pd-LE9NRwJIBgI2a-iIlSgAqWXPx3O81e3Qoy2C'
  },
  {
    id: 'Daima Piccolo adult',
    name: 'Daima Piccolo Adult',
    rarity: 'Rare',
    price: '$75',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/03/0a8cf460-4d74-48d0-9ba5-187690788ecd.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/308263?srsltid=AfmBOoquyWCpczFSyzmFcQSn48FzPlPaoWuVJhTbpQcXETPRCd_YUY4Y'
  },
  {
    id: 'Super Saiyan Goku Namek',
    name: 'Super Saiyan Goku',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/08/c63fe0bf-d51a-4ceb-906c-6c825a4792db.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/243038'
  },
  {
    id: 'Namek Vegeta',
    name: 'Namek Vegeta',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/06/789425e9-2837-4c1e-964f-64003d5ebb9a.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/282315'
  },
  {
    id: 'Zarbon',
    name: 'Zarbon',
    rarity: 'Ultra Rare',
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/10/435f95ac-2509-402e-b12d-f2b450869a7b.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/295188'
  },
  {
    id: 'Mecha Frieza',
    name: 'Mecha Frieza',
    rarity: 'Rare',
    price: '$110',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/08/d6bb0334-c753-4d9e-84ef-1120bf0bdd79.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/249911'
  },
  {
    id: 'Full Power Freiza',
    name: 'Full Power Frieza',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/12/3405e375-68e9-4743-bcfb-27c01b58d60e.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/263250'
  },
  {
    id: 'First Form Freiza',
    name: 'First Form Freiza',
    rarity: 'Rare',
    price: '$80',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/08/47a3c213-5de8-4a02-8962-5f4da28b3391.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/141325?srsltid=AfmBOoruz7fXQaj8jCQOfrENYjLVjebzF9-hEcouHgmksSJ2JN2WEBMv'
  },
  {
    id: 'Majin Vegeta',
    name: 'majin Vegeta',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$130',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/02/9193ebd7-51b1-433c-87cd-139faafa4dba.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/277344?srsltid=AfmBOorLkVu9VRqItsklpWDc3ZODDfecM5Bn1xP-gZ3DcPSdgvH6cSUU'
  },
  {
    id: 'GT Pan',
    name: 'GT Pan',
    rarity: 'Common',
    price: '$70',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/05/9228b8d7-d63f-4606-b32e-ce8a15a3b3bf.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/263250'
  },
  {
    id: 'Super hero Pan',
    name: 'Super Hero Pan',
    rarity: 'Common',
    price: '$65',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/11/cdbfb393-e52f-4b86-b879-3287941bd8bb.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/225865?srsltid=AfmBOorHO7Tp6gBw9aQMqUNlHKZ0DZLomx-jSx5twcVGB0msr_O5b0dm'
  },
  {
    id: 'GT Trunks',
    name: 'GT Trunks',
    rarity: 'Rare',
    price: '$60',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/03/0909ed07-df6e-41c7-822a-a66160d0dde8.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/270864?srsltid=AfmBOooaXvFqyvG27ofSEiH4aTMl_7c7hw7WbDkO9mGGtO3O6ZbfulOW'
  },
  {
    id: 'Z Trunks',
    name: 'Z Trunks',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/11/a5d713ed-3797-4289-b017-dc5c3f293cab.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/226100?srsltid=AfmBOoqTc58ghd3L68NtQMa6Yfl3nruGH33mVbMdx3yYu7xATc02AXwc'
  },
  {
    id: 'Captain Ginyu',
    name: 'Captain Ginyu',
    rarity: 'Rare',
    price: '$80',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/01/d61d54c2-abda-4ff1-bc1d-5c56b926c794.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/113389?srsltid=AfmBOoquPaw3llyX5IWXaSf9E-lxQz0wpEQkVBgapPxKXzvxMCfNE1PY'
  },
  {
    id: 'Jeice',
    name: 'Jiece',
    rarity: 'Ultra Rare',
    price: '$300',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/07/25c80e97-5f99-4d9a-beb5-db6a63986f5d.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/129673?srsltid=AfmBOoqhSlxeobxspWwNWx32Yp-nq9Tx8RcEdheCN52gBKKt4W-eoNd4'
  },
  {
    id: 'Recoome',
    name: 'Recoome',
    rarity: 'Ultra Rare',
    price: '$260',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/09/25c0862e-f5cb-452b-a0bb-d0dad1d0b45c.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/134854?srsltid=AfmBOopXuODkhRX64eELS_vWO6B8H-4SMIah92SL5sme4bu7jiW4cSDC'
  },
  {
    id: 'Guldo and Burter',
    name: 'Guldo and Burter',
    rarity: 'Ultra Rare',
    price: '$300',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/12/296d6195-22b2-4765-a424-54d8fd10c620.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/145711?srsltid=AfmBOoqNuuvIP31sjCMoxluQkLXmvbdOSZ2gRQGW2j1I2XyhROjyoZx9'
  },
  {
    id: 'Full Power Cooler',
    name: 'Full Power Cooler',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$140',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/12/046e4d47-5666-499f-a074-d9970eef951f.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/154394?srsltid=AfmBOoq-bcwcNycKokxO8thYaHaCtyPKg1UWEx_fe45Y6c0j2jwUg27l'
  },
  {
    id: 'Metal Cooler',
    name: 'Metal Cooler',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/05/8bbd8450-d9a1-4696-8b1c-48018d5ad2b6.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/240398'
  },
  {
    id: 'Z Broly',
    name: 'Z Broly',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$150',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41vISc0Yf%2BL.jpg',
    link: 'https://www.shfiguarts.com/products/detail/978/Bandai-Tamashii-Nations-SH-Figuarts-Broly-Dragon-Ball-Z-Action-Figure.html'
  },
  {
    id: 'Full Power Jiren',
    name: 'Full Power Jiren',
    rarity: 'Rare',
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/04/5792a43c-2a01-485b-8b72-7ba047050d8d.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/123239?srsltid=AfmBOooHdF3Qpp-Bnav1irVarqpRAzPAtc6vAcfQsp5LCnk0NijbBF_Y'
  },
  {
    id: 'Jiren',
    name: 'Jiren',
    rarity: 'Rare',
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/04/d3411ec9-0c74-4abc-bb88-70718dd14855.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/97090?srsltid=AfmBOoqK_ttWGyFDU4w-eWT5XI0gpyUA-Sbs2qqHNTDjbmU2fB6C6nti'
  },
  {
    id: 'Blue Kaioken Goku',
    name: 'Blue Kaioken Goku',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$125',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/05/b9b1bc96-868c-4127-8176-daac09042d70.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/205110?srsltid=AfmBOorRX_2W1RXvLjwyHTPysxjdol4isYPLI6ifluNDldzLmLETdy8I'
  },
  {
    id: 'Tien and Chiaotzu',
    name: 'Tien and Chiaotzu',
    rarity: 'Rare',
    price: '$170',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/04/a6c9dd59-43ba-46a3-86d2-67a01cfb59b1.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/158140?srsltid=AfmBOooikbKt1ZZRh75ztcrpfrmzQUl1rrs_hnDFV-_rRpWC3yU5GfZR'
  },
  {
    id: 'Yamcha',
    name: 'Yamcha',
    rarity: 'Rare',
    price: '$160',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/12/a7a0bd5f-2ec4-47c1-b20c-f444f50f67ef.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/55666?srsltid=AfmBOoomB7OgUjJOL7DyXvmTTM23ggZWy7y_OEDOYiESRo-sbA9Hg8q1'
  },
  {
    id: 'Nappa',
    name: 'Nappa',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$150',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/09/3e6275e1-4f35-41bb-a274-b7305453538f.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/175714?srsltid=AfmBOootHu97PPPLe5yybF3v5dG7aBRq2JwuwAMoV4gQVna_vEshLQ7N'
  },
  {
    id: 'Perfect Cell',
    name: 'Perfect Cell',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$140',
    image: 'https://images.bigbadtoystore.com/images/p/full/2016/09/7c8d63da-a9ec-4a16-b2cf-41a1009114a5.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/40119?srsltid=AfmBOoqdHCitWZBQMdD1AmdQph_cTGtGd9uwIKtUXU7ZRq1AkJk4erEh'
  },
  {
    id: 'Evil Buu',
    name: 'Evil Buu',
    rarity: 'Rare',
    price: '$150',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/07/03edaa37-42b0-44a6-a23d-23a84814e3f0.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/81123?srsltid=AfmBOoqUaD88YHlXD8cv5UylxqqO6QAqKu8fBHy7lizDFKZ88C-sPc-8'
  },
  {
    id: 'Beerus',
    name: 'Beerus',
    rarity: 'Rare',
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2016/11/aabd4c5f-5902-469e-ba11-8575af6c506b.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/24509?srsltid=AfmBOorO53cb228HFLSmpq6jh3aagr1LU2GettlfqQNTSTkWrFQ_gynZ'
  },
  {
    id: 'Whis',
    name: 'Whis',
    rarity: 'Rare',
    price: '$110',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/09/5116d36d-4ade-4604-b0e1-51e088bc75d0.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/175712?srsltid=AfmBOoot-p0RR9o8kIwOMxMNxuH0yyfaf4oU2_yq5ZtNN-uBziNXIBOl'
  },
  {
    id: 'Golden Freiza',
    name: 'Golden Freiza',
    rarity: 'ultra Rare',
    price: '$100',
    image: 'https://images.bigbadtoystore.com/images/p/full/2016/12/8fbdf7ad-c76c-4a26-af9a-ca918030139d.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/18098?srsltid=AfmBOoon_kWNiqhyFo7CA4M8qvApCmUzabYpY59fMNn5jdqLjqazFKlp'
  },
  {
    id: 'Hit',
    name: 'Hit',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$80',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/01/beab4fee-10e6-42eb-9c4e-bb4f1a4ec4dd.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/147042?srsltid=AfmBOoqm3qdGtFIKMfvPjioM4u1iULQ_YjvWQaMyRJ3PUQtTb1YXDSA0'
  },
  {
    id: 'Goku Black Rose',
    name: 'Goku Black Rose',
    rarity: 'Common',
    price: '$50',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/04/16317b28-203d-4dba-925f-c7449476a3dc.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/275254?srsltid=AfmBOoq4p5zkGzxWRdmXjT8eHqq32lO6vtQdeAEUNN01XRxY4uKFyXbF'
  },
  {
    id: 'Fused Zamasu',
    name: 'Fused Zamasu',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$110',
    image: 'https://images.bigbadtoystore.com/images/p/full/2019/03/69c0ef70-bd52-4210-a792-dd617e57c0eb.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/90331?srsltid=AfmBOorVnyVTiQyxX1FpyRI6UljwHrAOI0LC9GbV-q-ZwwAFryt8xDZl'
  },
  {
    id: 'Raditz',
    name: 'Raditz',
    rarity: 'Rare',
    price: '$170',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/10/dea6eb6b-03f7-4ff2-b78c-ead13726fab4.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/137691?srsltid=AfmBOoro8Fz7p2bZJDcZCFCTZnCu3uGmtr3TKBwbJGSq_UqcH9sDf7md'
  },
  {
    id: 'krillin',
    name: 'Krillin',
    rarity: 'Common',
    price: '$50',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/02/ecde860c-8de1-45ea-83f9-a2c326b7799e.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/173100?srsltid=AfmBOorgV1AScZ61kfklOE4tzmT0LBK85R3Vh4fHqbt2AGB-n9YJ8Mtr'
  },
  {
    id: 'krillin Namek',
    name: 'Namek Krillin',
    rarity: 'Rare',
    price: '$80',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/04/0c8f007e-db40-4104-b190-2e865c4e5c72.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/201563?srsltid=AfmBOoowG_h8AH2Bd_z1P1AvtrtU9m1dwD6w3dFai-y-OOxTbkO25HkU'
  },
  {
    id: 'UI Sign Goku',
    name: 'UI Sign Goku',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/07/826bf6e7-6bf0-45e1-821d-3103384fafe7.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/130129?srsltid=AfmBOor0ezuL3G-jErV1uGyluFthlN1tmInfUDg6COgxsnZ20GyfMP_P'
  },
  {
    id: 'Base Super Broly',
    name: 'Base Super Broly',
    rarity: 'Rare',
    price: '$120',
    image: 'https://m.media-amazon.com/images/I/41iEl8pH7qL._SL500_.jpg',
    link: 'https://www.shfiguarts.com/products/detail/10340/SHFiguarts-Broly-Hero.html'
  },
  {
    id: 'Turles',
    name: 'Turles',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$150',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/07/58e3bbb9-8baa-4de1-ac71-fe283594d764.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/212270?srsltid=AfmBOop9vatz164FKihz3MYH80lhu-MbZ01mGdSK_hm5cbFRLL0_lJQu'
  },
  {
    id: 'Android 17 Uni Rep',
    name: 'Android 17 Uni Rep',
    rarity: 'Ultra Rare',
    price: '$85',
    image: 'https://m.media-amazon.com/images/I/41R3N39FzQL._SL500_.jpg',
    link: 'https://www.shfiguarts.com/products/detail/10110/SHFiguarts-Android-17-Universe-Survival-SAGA-.html'
  },
  {
    id: 'Android 18 Uni Rep',
    name: 'Android 18 Uni Rep',
    rarity: 'Rare',
    price: '$70',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/07/2feb4651-3e8a-492f-a311-419ee285877d.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/170921?srsltid=AfmBOoppzPsa9F3IC4sTknChrnsyiWwhnoMTHvUvbJ-d5BVLq3kjmSZ7'
  },
  {
    id: 'Gogeta Blue',
    name: 'Gogeta Blue',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$110',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/03/d32cbf38-b2cc-45a5-a1e8-45679b2f723a.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/84454?srsltid=AfmBOoo750-VPPdhwWuSf0BNkGf5qaT3F6xVntQiGHEoQZqsJPyhA4bz'
  },
  {
    id: 'Vegito Blue',
    name: 'Vegito Blue',
    rarity: 'Ultra Rare',
    wishlist: true, // optional
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/04/903ae81a-372b-4286-980c-e93949a389a6.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/123226?srsltid=AfmBOooGFPlqW9Io9Bol92YbwVrIOvTGjMYCm8R1oGEzHYsBeiT-4gCP'
  },
  {
    id: 'NYCC Gogeta',
    name: 'NYCC Gogeta',
    rarity: 'Rare',
    wishlist: true, // optional
    price: '$80',
    image: 'https://www.toyark.com/wp-content/uploads/2025/08/SH-F-Super-Saiyan-Gogeta.jpg',
    link: 'https://www.toyark.com/2025/08/29/dragon-ball-z-fusion-reborn-nycc-2025-exclusive-s-h-figuarts-super-saiyan-gogeta-572510'
  },
  {
    id: 'Gohan Cell Saga',
    name: 'Gohan Cell Saga',
    rarity: 'Common',
    price: '$65',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/11/8d83abe5-1d46-4ad1-811e-9fc882ddca9a.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/260260?srsltid=AfmBOoqax_-YOAT_qzjtqIOUNEm2wr3p7zXU-LJu6jE4Patw2I9QP87P4jw'
  },
  {
    id: 'God Goku',
    name: 'God Goku',
    rarity: 'Common',
    price: '$35',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/10/1906c7a1-4240-483f-a875-89d8f5d092da.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/258088'
  },
  {
    id: 'Games Begin Super Saiyan Goku',
    name: 'Games Begin Super Saiyan Goku',
    rarity: 'Common',
    price: '$38',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/04/a7f07b28-aa0b-47c7-a4b1-0287886c4184.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/313585?srsltid=AfmBOortDVY8ycdEYu6L7Eh_2f-fOEcLhD-kn4IUEX77izaOUw_Sosl9'
  },
  {
    id: 'Super Saiyan Kefla',
    name: 'Super Saiyan Kefla',
    rarity: 'Ultra Rare',
    price: '$85',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/08/058be0dc-03fc-4607-acf0-78590ceb6cbe.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/175044?srsltid=AfmBOoqe0RPDfyCjMfyK1OobztgqAcbB21nwEQR_m9KbI1aXN-p-_4wk'
  },
  {
    id: 'Super Hero Vegeta',
    name: 'Super Hero Vegeta',
    rarity: 'Common',
    price: '$35',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/12/f543a24d-b24d-418d-8e64-5d2287860f93.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/181034?srsltid=AfmBOopIvUDTNguw46ybYS--FYYWMVEMaPxW0-GHR603ozSv6xqAYKa7'
  },
  {
    id: 'Daima Adult Goku',
    name: 'Daima Adult Goku',
    rarity: 'Common',
    price: '$38',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/10/8f40d188-e744-4364-920d-ef719de29fe4.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/293160?srsltid=AfmBOopb2Vyux0PwUgDzuu_MZPOuZ2QqQvQm4fBF7KeDngIbXNvBIwIA'
  },
  {
    id: 'Daima Kid Goku',
    name: 'Daima Kid Goku',
    rarity: 'Common',
    price: '$38',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/07/273aa69e-962f-4ef7-b21d-2fe3c0266ea9.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/285163?srsltid=AfmBOooyVrJEuuWfzZOmk1DfYZa_GzyU-7UR4SmrqSmPT74ezJPoAGdd'
  },
  {
    id: 'Daima Adult Vegeta',
    name: 'Daima Adult Vegeta',
    rarity: 'Common',
    price: '$35',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/08/9094aa88-8ab6-4276-9dc3-720091850342.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/293161?srsltid=AfmBOooxal6gIYsYd-CULJGzwXt4ES4SlCc2dVRrDGQ99CxI5pnqSs3W'
  },
  {
    id: 'Daima Kid Vegeta',
    name: 'Daima Kid Vegeta',
    rarity: 'Common',
    price: '$38',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/07/93cd6788-9c6a-413c-9e0e-60ae2945d9ec.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/286265?srsltid=AfmBOoo-6rHwD8wBw9LWAbKYOfqVgdKYc1ZPorLdA6QdobdJxkp2xuDy'
  },
  {
    id: 'Newest MUI Goku',
    name: 'Newest MUI Goku',
    rarity: 'Rare',
    price: '$38',
    image: 'https://en.dragon-ball-official.com/dragonball/jp/news/2025/09/%E3%83%86%E3%82%A3%E3%82%B6%E3%83%BC%E7%94%BB%E5%83%8F.jpg?_=1757696340',
    link: 'https://en.dragon-ball-official.com/news/01_3680.html'
  },
  {
    id: 'Android 16',
    name: 'Android 16',
    rarity: 'Ultra Rare',
    price: '$160',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/08/315183d7-76a7-4d0a-81d0-33d616f427b0.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/215608?srsltid=AfmBOooVnqL-X5uFS_3ukJCxuD4c_TmzwTPI6KofZEOHX-xy40u0OYam'
  },
  {
    id: 'Cell Saga Trunks ',
    name: 'Battle Armor Trunks',
    rarity: 'Common',
    price: '$38',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/04/7d5468da-17f6-48bd-b9e3-c871cdaf4f59.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/237934?srsltid=AfmBOooueeoTVRT7LmUHlqGikZAIpuBx98Kj9aDhMQm7fQDsejTG5_fX'
  },
  {
    id: 'Super Saiyan Goku 3 Goku',
    name: 'Super Saiyan Goku 3 Goku',
    rarity: 'Common',
    price: '$65',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/04/4073e6f7-9b32-4506-9e2d-3349f8d41353.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/275256?srsltid=AfmBOooFdQA1B6dvP0OhwCTSncut-BeaVSivps6dssRI_4QzQxZhMv8C'
  },
  {
    id: 'Kaioken Goku',
    name: 'Kaioken Goku',
    rarity: 'Common',
    price: '$50',
    image: 'https://images.bigbadtoystore.com/images/p/full/2020/01/4cb8dea2-6c46-4a75-9736-5a6d3d6df1a1.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/113380?srsltid=AfmBOorH9M5XBFC2-_xJSAxaL4qGGQz0V4pEAozhi5Xky89JE-jdf5-I'
  },
  {
    id: 'Fourth Form Freiza',
    name: 'Fourth Form Freiza',
    rarity: 'Common',
    price: '$50',
    image: 'https://images.bigbadtoystore.com/images/p/full/2025/06/5209a30e-b341-4c9e-8bf1-8e2b142ba253.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/321392?srsltid=AfmBOoog5kNFJWHQj_WaHALoA3gaq3QDn70Cr47LM05OOuXE6yY9C5sv'
  },
  {
    id: 'Gotenks',
    name: 'Gotenks',
    rarity: 'Ultra Rare',
    price: '$120',
    image: 'https://images.bigbadtoystore.com/images/p/full/2019/07/043255d6-11e5-4400-8bee-7f7bcc6523d0.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/74947?srsltid=AfmBOooMMciUWo4oRZO0Ng0zx0NwvdnTgNxU2LPDn2YZqLqDAMgEOZ19'
  },
  {
    id: 'Great Saiyaman ',
    name: 'Great Saiyaman',
    rarity: 'Ultra Rare',
    price: '$180',
    image: 'https://images.bigbadtoystore.com/images/p/full/2018/09/2bb91113-0e10-4eed-acb2-29a45a0fcd05.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/80602?srsltid=AfmBOopJb_9bc2kc0frDvVDj9Ja_5r4iwXmVqMmIOM-wFDvzgFkTOVe8'
  },
  {
    id: 'Bardock',
    name: 'Bardock',
    rarity: 'Rare',
    price: '$90',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/06/c50230c9-b02d-4606-beda-ba26695ab524.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/237936?srsltid=AfmBOooCzs6zxe3mrOeuOeN7RN0sIbfaHedT7bEq8EYKivq-xoI0TyHq'
  },
  {
    id: 'Zarbon',
    name: 'Zarbon',
    rarity: 'Rare',
    price: '$115',
    image: 'https://images.bigbadtoystore.com/images/p/full/2021/10/eddb6ee6-7ad5-4251-9e84-21b4cf23c445.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/180925?srsltid=AfmBOor08nACQNo8JLfliOEjDX8gIe6O6hTnEwydzqN1JyL_ZGPh7Cdw'
  },
  {
    id: 'Imperfect Cell',
    name: 'Imperfect Cell',
    rarity: 'Common',
    price: '$75',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/03/1da562ad-ef1a-45a3-8ccd-3a8b8cca48d5.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/196759?srsltid=AfmBOorinoWjXrOEsX6c17M8QHux4qLPyHg5PDdfdv8xUWXJC978J7Dx'
  },
  {
    id: 'Second Form Freiza',
    name: 'Second Form Freiza',
    rarity: 'Rare',
    price: '$180',
    image: 'https://images.bigbadtoystore.com/images/p/full/2022/09/51dc1705-8576-4807-bdee-47023aae3507.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/217487?srsltid=AfmBOooGnLt2gKagbUibKVuU1l8T95PIE-pGn0dDAe0R7DW1VyJ3bOQt'
  },
  {
    id: 'Third Form Freiza',
    name: 'Third Form Freiza',
    rarity: 'Rare',
    price: '$130',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/01/63b36214-e8f0-4f09-8ad6-eb4406b699c7.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/221746?srsltid=AfmBOorP_R9fCz5RJS2FSnRGytZtVyG95y-YAux1XjUtI8LdNSK1EbFP'
  },
  {
    id: 'Android 20',
    name: 'Android 20',
    rarity: 'Rare',
    price: '$90',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/06/287951f6-af2b-4300-895e-48ea631f0658.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/240035?srsltid=AfmBOopx9qGyO8f5ni_0hzEPmLq5oIJrz9h_xlGPbM3ko_l1xo_DAWkf'
  },
  {
    id: 'Android 19',
    name: 'Android 19',
    rarity: 'Rare',
    price: '$95',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/03/4a1d73f8-dcde-4065-8354-84c869e78fbb.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/236730?srsltid=AfmBOoq3f_0FyI78Ec5FHV4Rp6q6SJwDr2xz0mzRLAv0xEHxjS_DN20q'
  },
  {
    id: 'King Cold',
    name: 'King Cold',
    rarity: 'Rare',
    price: '$190',
    image: 'https://images.bigbadtoystore.com/images/p/full/2024/02/f19e6a85-0cd6-45c2-adec-ffb394e52311.jpg',
    link: 'https://www.bigbadtoystore.com/product/variationdetails/268751?srsltid=AfmBOoo4qwNtbtCh854QjRM1nN04mjjfYwN0ZaORnxAl_-Ywn6e0NkTa'
  },
  {
    id: 'Mini Super Saiyan Goku',
    name: 'Mini Super Saiyan Goku',
    rarity: 'Rare',
    price: '$50',
    image: 'https://en.dragon-ball-official.com/dragonball/jp/news/2024/11/SHF%20SS%E5%AD%AB%E6%82%9F%E7%A9%BA%20%E3%83%9F%E3%83%8B%20DAIMA%2001.JPG',
    link: 'https://en.dragon-ball-official.com/news/01_3056.html'
  },
  {
    id: 'Proud Namekian Piccolo',
    name: 'Proud Namekian Piccolo',
    rarity: 'Rare',
    price: '$80',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/10/6a4e5972-3521-43d7-a1dc-c2c12752c964.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/79070?srsltid=AfmBOoqyF_jEE7Gqf01ETn8PEjbs7DbsPw2deOS01XKGaOJkrohNDZ4U'
  },
  {
    id: 'Super Saiyan Goku Event Exclusive',
    name: 'Super Saiyan Goku Event Exclusive',
    rarity: 'Ultra Rare',
    price: '$150',
    image: 'https://images.bigbadtoystore.com/images/p/full/2023/04/0f3df934-e726-41af-ba2d-919ecfc779f1.jpg',
    link: 'https://www.bigbadtoystore.com/Product/VariationDetails/240293?srsltid=AfmBOorJdgpxJ7nAQR-GPGqVsj8qm5z20nOmGG0bVr7_pud0kKrbD5Y1'
  },
];

function toggleOwned(id) {
  const current = JSON.parse(localStorage.getItem(id)) || false;
  localStorage.setItem(id, JSON.stringify(!current));
  applyFilters();
}

function applyFilters() {
  const filter = searchInput.value.toLowerCase();
  const sort = document.getElementById('priceSort')?.value || 'none';
  const rarity = document.getElementById('rarityFilter')?.value || 'all';
  const ownedOnly = document.getElementById('ownedOnlyToggle')?.checked;
  const wishlistOnly = document.getElementById('wishlistToggle')?.checked;

  let filtered = figures.filter(fig => {
    const nameMatch = fig.name.toLowerCase().includes(filter);
    const rarityMatch = rarity === 'all' || fig.rarity === rarity;
    const isOwned = JSON.parse(localStorage.getItem(fig.id)) || false;
    const ownedMatch = !ownedOnly || isOwned;
    const wishlistMatch = !wishlistOnly || fig.wishlist;

    return nameMatch && rarityMatch && ownedMatch && wishlistMatch;
  });

  if (sort === 'high') {
    filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
  } else if (sort === 'low') {
    filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
  }

  renderFigureGrid(filtered);
}

function renderFigureGrid(list) {
  figureGrid.innerHTML = '';
  list.forEach(fig => {
    const isOwned = JSON.parse(localStorage.getItem(fig.id)) || false;
    const card = document.createElement('div');
    card.className = 'figure-slot';

    if (isOwned) card.classList.add('owned');
    if (fig.wishlist) card.classList.add('wishlist');
    if (fig.rarity === 'Ultra Rare') card.classList.add('grail');

    card.innerHTML = `
      <div class="figure-wrapper" onclick="window.location.href='figure.html?id=${encodeURIComponent(fig.id)}'">
        <img src="${fig.image}" alt="${fig.name}" />
        <button class="checkmark-btn" onclick="event.stopPropagation(); toggleOwned('${fig.id}')">
          ${isOwned ? '✓' : '+'}
        </button>
      </div>
      <p>${fig.name}</p>
      <p class="rarity-tag">${fig.rarity || 'Unknown'}</p>
    `;
    figureGrid.appendChild(card);
  });
}

function filterFigures() {
  applyFilters();
}

// Initial render
applyFilters();

function toggleTheme() {
  const isLight = document.getElementById('themeSwitch').checked;
  document.body.classList.toggle('light-mode', isLight);
  document.body.classList.toggle('dark-mode', !isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Load saved theme on startup
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme + '-mode');
document.getElementById('themeSwitch').checked = savedTheme === 'light';

function applyTheme() {
  const theme = document.getElementById('binderTheme')?.value || 'default';
  document.body.classList.remove('capsule-theme', 'tournament-theme', 'saiyan-theme', 'silly-vegeta-theme', 'silly-goku-theme');
  if (theme !== 'default') {
    document.body.classList.add(`${theme}-theme`);
  }
  localStorage.setItem('binderTheme', theme);
}

// Load saved theme on startup
const savedBinderTheme = localStorage.getItem('binderTheme') || 'default';
if (savedBinderTheme !== 'default') {
  document.body.classList.add(`${savedBinderTheme}-theme`);
  document.getElementById('binderTheme').value = savedBinderTheme;
}