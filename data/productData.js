const products = [
  {
    name: 'custom Sari',
    releases: ['Signature releases'],
    collectionName: ['Signature collection'],
    inStock: 4,
    price: 100000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'blue', shed: 'blue' },
      { color: 'orange', shed: 'orange' },
      { color: 'pink', shed: 'pink' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044406/samples/bemi/bemiivoryofficial_292023983_170288648808547_7435301905412541769_n_banz0h.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044401/samples/bemi/bemiivoryofficial_291771594_435759215124021_2312687207574804024_n_rh60jv.jpg',
    ],
    discount: 10,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'ball gown',
    releases: ['Signature collection'],
    collectionName: ['Signature collection'],
    inStock: 2,
    price: 220000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'blue', shed: 'blue' },
      { color: 'orange', shed: 'orange' },
      { color: 'pink', shed: 'pink' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044397/samples/bemi/bemiivoryofficial_281171689_167130659095045_3448989177874010467_n_dqpui8.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044397/samples/bemi/bemiivoryofficial_280990528_387815953285486_4835810605421655380_n_jbqhbx.jpg',
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'Bella collection',
    releases: ['Signature collection'],
    collectionName: ['Signature collection'],
    inStock: 4,
    price: 10000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'white', shed: '#fff' },
      { color: 'red', shed: 'red' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044406/samples/bemi/bemiivoryofficial_292023983_170288648808547_7435301905412541769_n_banz0h.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044401/samples/bemi/bemiivoryofficial_291771594_435759215124021_2312687207574804024_n_rh60jv.jpg',
    ],
    variant: [
      {
        color: 'white',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044396/samples/bemi/bemiivoryofficial_279386347_1422392801534065_2087001234401003107_n_egst0k.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044395/samples/bemi/bemiivoryofficial_279519565_4992760490844179_7978517014945104486_n_jc9wvd.jpg',
        ],
      },
      {
        color: 'red',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044394/samples/bemi/bemiivoryofficial_279385143_678493190043153_6958956191247166741_n_okbvyl.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044391/samples/bemi/bemiivoryofficial_279619883_429451348990170_3938277446614200410_n_c6xlan.jpg',
        ],
      },
    ],
    discount: 5,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'blue dinner ball dress',
    releases: ['Signature collection'],
    collectionName: ['Signature collection'],
    inStock: 1,
    price: 200000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'blue', shed: 'blue' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044391/samples/bemi/bemiivoryofficial_277431833_324469399748863_5335687744176980892_n_lesyna.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044391/samples/bemi/bemiivoryofficial_277430443_1433624647158318_7876728422253955787_n_lrdcam.jpg',
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'butterfly shaped strapless tulle dress',
    releases: ['Signature collection'],
    collectionName: ['Signature collection'],
    inStock: 3,
    price: 100000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'blue', shed: 'blue' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044394/samples/bemi/bemiivoryofficial_274537789_275702258039524_3722764967848057216_n_fo2f3v.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044390/samples/bemi/bemiivoryofficial_274510051_4879643058739553_702339836963795618_n_hdcufr.jpg',
    ],
    discount: 10,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'red panelled bustier tulle dress',
    releases: ['Signature collection'],
    collectionName: ['Signature collection'],
    inStock: 4,
    price: 70000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'red', shed: 'red' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664095023/samples/bemi/bemiivoryofficial_274514632_1155438655223516_1863868109773743711_n_cwhzmq.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664095023/samples/bemi/bemiivoryofficial_274609113_3052228635091604_4651850531655472850_n_ttgcrw.jpg',
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'The Rebirth Collection',
    releases: ['The Rebirth Collection'],
    collectionName: ['The Rebirth Collection'],
    inStock: 4,
    price: 10000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'gold', shed: 'gold' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664095418/samples/bemi/bemiivoryofficial_269686742_273598161318750_2271441211109867650_n_lbemza.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664095351/samples/bemi/bemiivoryofficial_269518741_994443667774794_8433348626433279989_n_wj2sx6.jpg',
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'red tulle ultra-ruffled mini dress',
    releases: ['The Rebirth Collection'],
    collectionName: ['The Rebirth Collection'],
    inStock: 4,
    price: 10000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'red', shed: 'red' },
      { color: 'black', shed: 'black' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044387/samples/bemi/bemiivoryofficial_249077886_4611782052217956_4463642781140444146_n_otkuzt.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044386/samples/bemi/bemiivoryofficial_248355172_1268633326882817_398886015589137002_n_pzyonm.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044385/samples/bemi/bemiivoryofficial_242036092_575959523742133_5167266073709378827_n_ulnw0l.jpg',
    ],
    variant: [
      {
        color: 'black',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044386/samples/bemi/bemiivoryofficial_245126342_392290382568163_3863803774889581105_n_oirxhq.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044385/samples/bemi/bemiivoryofficial_245350147_3005645256356057_6188038521589395895_n_1_ngfz7t.jpg',
        ],
      },
      {
        color: 'red',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044386/samples/bemi/bemiivoryofficial_248355172_1268633326882817_398886015589137002_n_pzyonm.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044387/samples/bemi/bemiivoryofficial_249077886_4611782052217956_4463642781140444146_n_otkuzt.jpg',
        ],
      },
    ],
    discount: 10,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'A purple tulle tiered mini dress',
    releases: ['The Rebirth Creleasesllection'],
    collectionName: ['The Rebirth Collection'],
    inStock: 4,
    price: 40000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'blue', shed: 'blue' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044383/samples/bemi/bemiivoryofficial_245350408_1231939277306304_6635818755526107538_n_jxdatb.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044383/samples/bemi/bemiivoryofficial_245257281_413311110447381_5786062276541672690_n_paux39.jpg',
    ],
    discount: 10,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'The ‘Tulip’ Dress',
    releases: ['The Rebirth Collection'],
    collectionName: ['The Rebirth Collection'],
    inStock: 4,
    price: 70000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'blue', shed: 'blue' },
      { color: 'orange', shed: 'orange' },
      { color: 'pink', shed: 'pink' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044382/samples/bemi/bemiivoryofficial_244500968_853073485573830_5325850381208801051_n_fetwdd.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044382/samples/bemi/bemiivoryofficial_244500968_853073485573830_5325850381208801051_n_fetwdd.jpg',
    ],
    discount: 10,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'white tulle tiered dress with ruffle detailing',
    releases: ['The Rebirth Collection'],
    collectionName: ['The Rebirth Collection'],
    inStock: 4,
    price: 140000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [{ color: 'white', shed: 'white' }],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044384/samples/bemi/bemiivoryofficial_243525255_285749513378134_4326142647227510093_n_hqun8c.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664044379/samples/bemi/bemiivoryofficial_243804249_564720601309228_5872951422401728914_n_ysy5ys.jpg',
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
  {
    name: 'red ultra-ruffled tulle dress',
    releases: ['The Rebirth Collection', 'Signature collection'],
    collectionName: ['The Rebirth Collection', 'Signature collection'],
    inStock: 9,
    price: 190000,
    size: ['5', '6', '7', '8', '9', '10'],
    color: [
      { color: 'black', shed: 'black' },
      { color: 'purple', shed: 'purple' },
    ],
    images: [
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106420/samples/bemi/bemiivoryofficial_240760728_205714648267508_6235612040162045332_n_r8cud1.jpg',
      'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106419/samples/bemi/bemiivoryofficial_240727147_440283617199592_5051732788804435734_n_hen4do.jpg',
    ],
    variant: [
      {
        color: 'red',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106420/samples/bemi/bemiivoryofficial_240760728_205714648267508_6235612040162045332_n_r8cud1.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106419/samples/bemi/bemiivoryofficial_240727147_440283617199592_5051732788804435734_n_hen4do.jpg',
        ],
      },
      {
        color: 'purple',
        images: [
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106419/samples/bemi/bemiivoryofficial_240820159_532566694691449_4646760050612387700_n_hu4xec.jpg',
          'https://res.cloudinary.com/ddfvyg0ah/image/upload/v1664106419/samples/bemi/bemiivoryofficial_240547833_250210376961646_1147019434207782775_n_yhuwt8.jpg',
        ],
      },
    ],
    discount: 0,
    description:
      'The fabric is made by superfine Merino wool, which is soft, delicate. It has good moisture absorption, breathability and warmth retention. It is rich in elasticity and comfortable to wear.',
    materials:
      'Fabric: 100% Sheep Wool; Ribs: 79.7% Sheep Wool 18.3% Nylon 2.0% Spandex',
    careAdvice:
      'This product uses special materials and sewing techniques, please be extra careful. Because it contains animal fibers, it has good thermal performance. Because of the fiber characteristics, it is common to have slight hair loss. When wearing, please try to match the same color. If there is any hair on it, please clean it up by yourself. Special process parts such as beading, printing, embroidery, and distressing are manually processed, and there are slight differences in each item. Do not rub hard or iron to avoid deformation.',
  },
];

export default products;
