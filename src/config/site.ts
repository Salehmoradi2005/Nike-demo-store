export type SiteConfig = typeof siteConfig;

interface ProductInitializer {
  Tag: string;
  Img:string;
  Price:number;
  Description:string
  Category:string
  Key : number
  Rating: number
}
class Product {
  Tag: string;
  Img:string;
  Price:number;
  Description:string
  Category:string
  Key : number
  Rating: number

  constructor(init: ProductInitializer) {
    this.Tag = init.Tag;
    this.Img = init.Img
    this.Price = init.Price
    this.Description = init.Description
    this.Category = init.Category
    this.Key = init.Key
    this.Rating = init.Rating
  }
}
export const siteConfig = {
  name: "Nike store",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Men",
      href: "/men",
    },
    {
      label: "Women",
      href: "/women",
    },
    {
      label: "Sale",
      href: "/sale",
    },
    {
      label: "News",
      href: "/news",
    },
  ],
  navMenuItems: [
    {
      label: "Men",
      href: "/men",
    },
    {
      label: "Women",
      href: "/women",
    },
    {
      label: "Sale",
      href: "/sale",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Jordan",
      href: "/jordan",
    },
    {
      label: "Discounts",
      href: "/discounts",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  ProductNames : [
    {
      name: "Golf"
    },
    {
      name: "Nike Rro"
    },
    {
      name: "NIKE+"
    },
    {
      name: "Blazers"
    },
    {
      name: "Air Force"
    },
    {
      name: "Air Max"
    },
    {
      name: "Foamposite"
    },
    {
      name: "Dunk"
    },
    {
      name: "Nike CR7"
    },
    
  ],
  Products: [
    new Product({
      Tag : 'Nike Air Force 1 07',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fdb1da5d-df41-415c-840a-84d28f66a11e/AIR+FORCE+1+%2707+LV8.png' ,
      Price : 125,
      Description: "Comfortable, durable and timeless—it’s number 1 for a reason. The AF1's classic ‘80s construction pairs with neutral colors and layered textures for a utilitarian look.",
      Category: 'Men',
      Rating: 4.8,
      Key: 1
    }),

    new Product({
      Tag : 'Air Jordan 4 RM',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/71eb2577-1adf-4699-8de0-f38791083a97/AIR+JORDAN+4+RM.png' ,
      Price : 150,
      Description: "These sneakers reimagine the instantly recognizable AJ4 for life on the go. We centered comfort and durability while keeping the heritage look you love. Max Air in the heel cushions your every step, and elements of the upper—the wing, eyestay and heel—are blended into a strong, flexible cage that wraps the shoe to add a toughness to your everyday commute.",
      Category: 'Men',
      Rating: 4.1,
      Key: 2
    }),

    new Product({
      Tag : 'Air Jordan 3 Retro',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6de142b1-f672-48fd-8d39-9c23f09dad02/AIR+JORDAN+3+RETRO.png' ,
      Price : 200,
      Description: "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.",
      Category: 'Men',
      Rating: 3.9,
      Key: 3
    }),

    new Product({
      Tag : 'Nike Pegasus 41',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6a33b548-3671-4ab6-b77e-d1d408338c05/AIR+ZOOM+PEGASUS+41.png' ,
      Price : 140,
      Description: "Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.",
      Category: 'Men',
      Rating: 4.6,
      Key: 4
    }),

    new Product({
      Tag : 'Kobe 8 Protro',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f07b707f-5c0b-4dca-8229-f1436c923b03/KOBE+VIII+PROTRO.png' ,
      Price : 180,
      Description: "Designed to give you the most responsive feel, the Kobe 8 Protro continues that legacy by keeping an engineered mesh upper that molds to your foot and a traction pad that provides extra security. The 8 Protro evolves the original design with the addition of Nike React foam to provide greater responsiveness and durability.",
      Category: 'Men',
      Rating: 4.7,
      Key: 5
    }),

    new Product({
      Tag : 'Nike Air Max',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f3c36ef6-f3c7-415a-acd5-85aa20442404/AIR+MAX+DN+SE.png' ,
      Price : 170,
      Description: "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that’s comfortable enough to wear from day to night. And this newest seasonal color offers the first gradient treatment upper in this model. Go ahead—Feel the Unreal.",
      Category: 'Men',
      Rating: 4.3,
      Key: 6
    }),

    new Product({
      Tag : 'Nike Air Pegasus 2005',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a7e21b3c-94b9-45cb-8c1f-e17c6560f372/NIKE+AIR+PEGASUS+2005.png' ,
      Price : 150,
      Description: "A springy ride for every run. The familiar, just-for-you feel of the Peg returns to help you accomplish your goals—even if that just means looking great while you kick it. This edition has the same responsive cushioning and neutral support you love with a breezy look inspired by early-aughts runners. Plus, the easy-to-style neutrals add contrasting hits for a dramatic finish. A foam midsole comes equipped with a full-length Nike Air unit to help soften every step. Lace up and take your sneaker game to new places.",
      Category: 'Men',
      Rating: 3.8,
      Key: 7
    }),

    new Product({
      Tag : 'Nike Zoom Vomero 5',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/64487d67-e304-4afe-b20f-303bca3bc910/NIKE+ZOOM+VOMERO+5.png' ,
      Price : 160,
      Description: "Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth and classic early 2000s aesthetics. The richly layered design combines breathable and durable materials with the comfort of Air Zoom cushioning for one of the coolest sneakers of the season.",
      Category: 'Men',
      Rating: 4,
      Key: 8
    }),

    new Product({
      Tag : 'Nike Air Max 270',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/AIR+MAX+270.png' ,
      Price : 160,
      Description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      Category: 'Men',
      Rating: 4,
      Key: 9
    }),
    
    new Product({
      Tag : 'Nike Pegasus Plus',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7621d804-5e9b-4166-a074-1c1712006a1f/PEGASUS+PLUS.png' ,
      Price : 180,
      Description: "Take responsive cushioning to the next level with the Pegasus Plus. It energizes your ride with full-length, superlight ZoomX foam to give you a high level of energy return for everyday runs. And a stretchy Flyknit upper conforms to your foot for a seamless fit.",
      Category: 'Men',
      Rating: 4,
      Key: 10
    }),

    new Product({
      Tag : 'Nike Court Legacy',
      Img : 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ece27fc1-1c28-43b2-ae8e-fb39db26c71c/NIKE+COURT+LEGACY+NN.png' ,
      Price : 135,
      Description: "Honoring a history rooted in tennis culture, the Nike Court Legacy brings you a time-tested staple. Its pebbled upper, heritage stitching and retro Swoosh design let you blend sport and fashion. And, you get to do good by looking good.",
      Category: 'Men',
      Rating: 4,
      Key: 11
    }),

    new Product({
      Tag : 'Jordan Spizike Low',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d99a1c5d-3b21-4e45-97c4-7aa85562b158/JORDAN+SPIZIKE+LOW.png" ,
      Price : 160,
      Description: "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great looking pair of kicks with some history. What more can you ask for? Ya dig?",
      Category: 'Men',
      Rating: 4,
      Key: 12
    }),

    new Product({
      Tag : 'Sabrina 2 "Mirrored',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9d83f347-7342-4284-ac39-b511b9984f53/SABRINA+2.png" ,
      Price : 130,
      Description: "Sabrina Ionescu’s success is no secret. Her game is based on living in the gym, getting in rep after rep to perfect her craft. The Sabrina 2 sets you up to do more, so you're ready to go when it's game-time. Our newest Cushlon foam helps keep you fresh, Air Zoom cushioning adds the pop, and sticky traction helps you create that next-level distance. Sabrina’s handed you the tools. Time to go to work.",
      Category: 'Men',
      Rating: 4,
      Key: 13
    }),

    new Product({
      Tag : 'Nike Zoom Vomero 5',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/305a75c4-b498-4d8c-a52d-0781dac1c0af/NIKE+ZOOM+VOMERO+5.png" ,
      Price : 160,
      Description: "The Vomero 5 takes early 2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigors of your day, while Zoom Air cushioning delivers a smooth ride.",
      Category: 'Men',
      Rating: 4,
      Key: 14
    }),
  ]
};
