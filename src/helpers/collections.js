export const networkCollections = {
  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
  ],

  "0x1": [
    {
      image:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
      name: "Bored Ape Yacht Club",
      addrs: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    },
    {
      image:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
      name: "Crypto Punks",
      addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    },
    {
      image:
        "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s0",
      name: "Bored Ape Kennel Club",
      addrs: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
      name: "Doodles",
      addrs: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s0",
      name: "0N1 Force",
      addrs: "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D",
    },
    {
      image:
        "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0",
      name: "Mutant Ape Yacht Club",
      addrs: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
    },
    {
      image:
        "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s0",
      name: "CyberKongz",
      addrs: "0x57a204AA1042f6E66DD7730813f4024114d74f37",
    },
    {
      image:
        "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
      name: "Cool Cats NFT",
      addrs: "0x1A92f7381B9F03921564a437210bB9396471050C",
    },
  ],
  "0x4": [
    {
      image: "",
      name: "Paladium",
      addrs: "0x099cd1559076B24505C653b7dA155d0cC17bB8c9",
    },
    {
      image: "",
      name: "Rhodium",
      addrs: "0x44177241427655984ab86ae605b5b9ec2106addc",
    },
    {
      image: "",
      name: "Iridium",
      addrs: "0xadcc0d343c818151adf1502a535faed7ae1cdd49",
    },
    {
      image: "",
      name: "test",
      addrs: "0xdf176bca4ada8c11069b773319a0d963b49d3854",
    },
  ],

};

export const getCollectionsByChain = (chain) => networkCollections[chain];
