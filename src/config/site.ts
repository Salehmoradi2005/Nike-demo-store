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
  ]
};
