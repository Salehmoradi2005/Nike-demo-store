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
    
    new Product({
      Tag : 'Nike P-6000 Premium',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/58d11f08-017c-4d26-9fce-23844d304fcd/W+NIKE+P-6000+PRM.png" ,
      Price : 120,
      Description: "A mash-up of past Pegasus sneakers, the P-6000 takes early 2000s running to modern heights. Featuring airy mesh and sporty lines, it's the perfect mix of head-turning looks and breathable comfort. Plus, its foam cushioning adds a lifted, track-inspired stance and unbelievable cushioning.",
      Category: 'Women',
      Rating: 3.8,
      Key: 15
    }),
    
    new Product({
      Tag : 'Air Jordan 1 Low OG',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/58f5a602-34fa-42bc-be53-5c33d4fe4153/WMNS+AIR+JORDAN+1+RETRO+LOW+OG.png" ,
      Price : 140,
      Description: "Step into greatness with the Air Jordan 1 Low OG. Updated color and texture gives the all-time favorite fresh identity while staying true to the original design.",
      Category: 'Women',
      Rating: 3.2,
      Key: 16
    }),

        
    new Product({
      Tag : 'Nike Court Legacy Next Nature',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f1f272c7-7c79-4fab-9d11-cdf96b67e0cf/WMNS+NIKE+COURT+LEGACY+NN.png" ,
      Price : 70,
      Description: "Honoring a history rooted in tennis culture, the Nike Court Legacy Next Nature brings you a time-tested staple in a design that's made from at least 20% recycled materials by weight. Its synthetic leather and retro design let you blend sport and fashion. Do good by looking good.",
      Category: 'Women',
      Rating: 4,
      Key: 17
    }),

    new Product({
      Tag : 'Nike Pegasus 41 PQ',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d5b355cf-7876-44fd-b1f6-b05b8b60276f/W+AIR+ZOOM+PEGASUS+41+PQ.png" ,
      Price : 140,
      Description: "Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability",
      Category: 'Women',
      Rating: 4.1,
      Key: 18
    }),

    new Product({
      Tag : 'Nike Free Metcon 6',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d9ca5e94-0b9e-42a9-95bd-271c5e45f92b/W+NIKE+FREE+METCON+6.png" ,
      Price : 120,
      Description: "The Free Metcon 6 opens your world of workout possibilities. We added even more forefoot flexibility to our most adaptable trainer and reinforced the heel with extra foam. That means more freedom for dynamic movements during plyos and cardio classes, plus the stable base you need for weights.",
      Category: 'Women',
      Rating: 3.9,
      Key: 19
    }),

    new Product({
      Tag : 'Nike Air Max Portal',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7aa19635-bead-4e21-852c-4269d51be7bc/W+NIKE+AIR+MAX+PORTAL.png" ,
      Price : 110,
      Description: "Transport your style with a new Air Max. The Portal is the perfect blend of chunky and sleek, combining the platform sole of 2000s with the minimalist upper of contemporary designs. We added an oval-shaped midsole with cloud-like cushioning for an elevated look you can wear every day. It's so comfortable it's out of this world.",
      Category: 'Women',
      Rating:4.6,
      Key: 20
    }),

    new Product({
      Tag : 'Nike Air Max 1',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/24d390b5-d2d2-443f-b545-59535c5b0cd6/W+NIKE+AIR+MAX+1.png" ,
      Price : 140,
      Description: "Meet the leader of the pack. Walking on clouds above the noise, the Air Max 1 blends timeless design with cushioned comfort. Sporting a fast-paced look, wavy mudguard and Nike Air, this classic icon hit the scene in ‘87 and continues to be the soul of the franchise today.",
      Category: 'Women',
      Rating: 3.8,
      Key: 21
    }),

    new Product({
      Tag : 'Nike Killshot 2',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a413c05f-b79d-45b4-870c-8499ee4866b1/W+KILLSHOT+2.png" ,
      Price : 90,
      Description: "This classic has courtside attitude with a modern touch. Inspired by our original tennis shoe, the Killshot 2 brings a fresh update with classic colors and a variety of premium textured leathers. To prove you're on top, the vibrant rubber sole adds the cherry on bottom.",
      Category: 'Women',
      Rating: 4.3,
      Key: 22
    }),

    new Product({
      Tag : 'Nike Air Max 270',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/307b2ede-dcf2-418d-a7d5-a3da12046d56/W+AIR+MAX+270.png" ,
      Price : 90,
      Description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      Category: 'Women',
      Rating: 3.6,
      Key: 23
    }),

    new Product({
      Tag : 'Nike Dunk Low',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5d017fbc-6f7e-40b9-810e-eedd6bcc3e90/W+NIKE+DUNK+LOW+NEXT+NATURE.png" ,
      Price : 120,
      Description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with a crisp upper and refreshing color combos. Channeling vintage style back onto the streets, its padded, low-cut collar lets you take your game anywhere—in comfort.",
      Category: 'Women',
      Rating: 4.4,
      Key: 24
    }),

    new Product({
      Tag : 'Nike Dunk Low',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3ff2b05a-1070-41ea-ac43-d199c6cc875b/W+DUNK+LOW+NEXT+NATURE.png" ,
      Price : 102,
      Description: "Created for the hardwood but taken to the streets, this '80s basketball icon returns with classic details and throwback hoops flair. Synthetic leather overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
      Category: 'Women',
      Rating: 4.1,
      Key: 25
    }),

    new Product({
      Tag : 'Nike Air Max SC',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b59e6dfa-da33-4481-9dbc-d7cf60451c61/WMNS+NIKE+AIR+MAX+SC.png" ,
      Price : 67.97,
      Description: "With its easy going lines, heritage track look and of course, visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit. The rich mixture of materials adds depth while making it a durable and lightweight shoe for everyday wear.",
      Category: 'Women',
      Rating: 4.2,
      Key: 26
    }),
    
    new Product({
      Tag : 'Nike Dunk Low',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/W+NIKE+DUNK+LOW.png" ,
      Price : 115,
      Description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere—in comfort.",
      Category: 'Women',
      Rating: 3.5,
      Key: 27
    }),

    new Product({
      Tag : 'Nike Court Legacy Lift',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f5c33cc0-c240-4cd4-8437-1a58b2d3d6a1/WMNS+NIKE+COURT+LEGACY+LIFT.png" ,
      Price : 120,
      Description: "Elevate your style with the Nike Court Legacy Lift. Its platform midsole delivers a bold statement on top of the classic, easy-to-wear design. And don't worry, we've kept the fit you love.",
      Category: 'Women',
      Rating: 4.2,
      Key: 28
    }),

    new Product({
      Tag : 'Nike Air Force 1 07',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8d752b32-17e8-40bc-ac1a-7a8849957a12/W+AIR+FORCE+1+%2707.png" ,
      Price : 115,
      Description: "You'll score major points in this legendary classic. Crossing hardwood comfort with off-court flair, this hoops original pairs crisp leather with playful paisley-print accents for nothing-but-net style. Plus, hidden Nike Air units and durable ‘80s construction add the comfort you’ve come to expect from the AF1.",
      Category: 'Women',
      Rating: 4.6,
      Key: 29
    }),

    new Product({
      Tag : 'Air Jordan 1 Mid',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b9e219ac-36be-4252-a00d-304de20d599b/WMNS+AIR+JORDAN+1+MID.png" ,
      Price : 93.97,
      Description: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
      Category: 'Women',
      Rating: 3.7,
      Key: 30
    }),

    new Product({
      Tag : 'Nike Air Force 1 07',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/WMNS+AIR+FORCE+1+%2707.png" ,
      Price : 115,
      Description: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. A subtle platform gives you just the right amount of height.",
      Category: 'Women',
      Rating: 3.5,
      Key: 31
    }),

    new Product({
      Tag : 'Nike Waffle Debut',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/20fd3517-9957-41c2-8398-47434e21a607/WMNS+NIKE+WAFFLE+DEBUT.png" ,
      Price : 61.97,
      Description: "Retro gets modernized with these sleek sneaks inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colors, and the updated wedge midsole gives you an extra lift. Style, comfort, iconic Waffle outsole—this is a perfect new addition to your daily rotation.",
      Category: 'Women',
      Rating: 3.9,
      Key: 32
    }),

    new Product({
      Tag : 'Nike Air Max Excee',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ce9b194f-44df-4aea-bbeb-1c9620b253ee/WMNS+NIKE+AIR+MAX+EXCEE.png" ,
      Price : 76.97,
      Description: "Inspired by the Nike Air Max 90, the Nike Air Max Excee celebrates a classic through a new lens. Elongated design lines and distorted proportions on the upper elevate an icon into a modern space.",
      Category: 'Women',
      Rating: 4.1,
      Key: 33
    }),

    new Product({
      Tag : 'Nike Go FlyEase',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3251a6d3-13bd-4fc1-8874-272b554f44a1/NIKE+GO+FLYEASE.png" ,
      Price : 93.97,
      Description: "Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze. With a heel that pivots open for a totally hands-free entry, they're great for people with limited mobility—or anyone who wants a quicker way to get going.",
      Category: 'Women',
      Rating: 4.5,
      Key: 34
    }),

    new Product({
      Tag : 'Nike Air Force 1 Shadow',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5de54772-b44b-4170-8ae6-214a0b131afc/W+AF1+SHADOW.png" ,
      Price : 114.97,
      Description: "Everything you love about the AF1—but doubled! The Nike Air Force 1 Shadow puts a playful twist on a hoops icon to highlight the best of AF1 DNA. Layered overlays in brightly colored leather bring added depth while double the branding and an exaggerated midsole help give these sneakers a bold look.",
      Category: 'Women',
      Rating: 4.8,
      Key: 35
    }),

    new Product({
      Tag : 'Nike Air Max Correlate',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9bd1131b-70ca-40c0-8548-208c4d2d0ae8/WMNS+NIKE+AIR+MAX+CORRELATE.png" ,
      Price : 100,
      Description: "The Nike Air Max Correlate sets you up in throwback style with a multi-textured upper and Max Air unit. Its soft foam midsole and breathable upper offer all-day comfort wherever your day takes you.",
      Category: 'Women',
      Rating: 4.1,
      Key: 36
    }),

    new Product({
      Tag : 'Nike TC 7900',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ae596ac-fc6c-4797-a192-575d6ae5aac0/W+NIKE+TC+7900.png" ,
      Price : 92.97,
      Description: "We've taken the look of early 2000s running and made it tough enough for everyday wear. By pairing durable materials with soft cushioning, the TC 7900 is ready for your journey.",
      Category: 'Women',
      Rating: 4.6,
      Key: 37
    }),

    new Product({
      Tag : 'Nike Air Max 90',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fb902d98-985a-4968-8427-1cea006d12ee/WMNS+AIR+MAX+90.png" ,
      Price : 130,
      Description: "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents. Fresh details give a modern look while Max Air cushioning adds comfort to your journey.",
      Category: 'Women',
      Rating: 4.2,
      Key: 38
    }),

    new Product({
      Tag : 'Nike Air VaporMax Plus',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/86d4729c-4ec4-42be-bd3a-90a40db4aaad/W+AIR+VAPORMAX+PLUS.png" ,
      Price : 210,
      Description: "The Nike Air VaporMax Plus looks to the past and propels you into the future. Made with at least 20% recycled material by weight, it keeps the future in mind while including design elements from the '98 Air Max Plus. Revolutionary VaporMax Air technology provides comfort and a modern look, while the floating cage, heel logo and iconic whale tail midfoot shank add heritage style. A sleek all-black upper and black rubber pods on the outsole show off your dark side.",
      Category: 'Women',
      Rating: 4.7,
      Key: 39
    }),

    new Product({
      Tag : 'Air Jordan 4 Retro "Oxidized Green"',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c0604e24-0b81-43f7-9288-73b8274dda45/AIR+JORDAN+4+RETRO.png" ,
      Price : 215,
      Description: "Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in '89.",
      Category: 'Women',
      Rating: 4.9,
      Key: 40
    }),

    new Product({
      Tag : 'Giannis Freak 6',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/bf6c3247-2586-42d6-a610-b4346b4a02ff/GIANNIS+FREAK+6NRG.png" ,
      Price : 150,
      Description: "Giannis needs a shoe to dominate the modern positionless game. That’s why we upgraded the traction pattern on the Giannis Freak 6. The herringbone outsole helps him stop on a dime to make all those game-changing plays. And when he’s filling up the stat sheet, the Air Zoom cushioning helps keep him fresh for four quarters. This special edition pays tribute to Giannis' dad.",
      Category: 'Women',
      Rating: 4.3,
      Key: 41
    }),

    new Product({
      Tag : 'Nike Downshifter 12',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4560b4ff-fc85-4fe0-91fa-d2de62b10b5c/W+NIKE+DOWNSHIFTER+12.png" ,
      Price : 63.97,
      Description: "Take those first steps on you running journey in the Nike Downshifter 12. It's got a supportive fit and a stable ride, with a lightweight feel that easily transitions from your workout to hanging out. This one continues our sustainability journey with a design made from at least 20% recycled content by weight. Your trek begins. Lace up and hit the road.",
      Category: 'Women',
      Rating: 4.1,
      Key: 42
    }),

    new Product({
      Tag : 'Air Jordan 6 Retro "Pearl"',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4c0c1fae-5312-4589-81f4-6ceb86254154/WMNS+AIR+JORDAN+6+RETRO.png" ,
      Price : 200,
      Description: "Minted to the premium Jordan standard, the Air Jordan 6 Retro delivers. Originally released the year MJ won his first championship ring, this sneaker recreates the magic with elegance, using original materials and featuring the translucent outsole that made this design an icon.",
      Category: 'Women',
      Rating: 3.9,
      Key: 43
    }),

    new Product({
      Tag : "Nike Air Force 1 '07 EasyOn",
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/57558712-5ebe-4abb-9984-879f9e896b4c/W+AIR+FORCE+1+%2707+FLYEASE.png" ,
      Price : 115,
      Description: "Quicker than 1, 2, 3—the original hoops shoe lets you get going. This version of the AF1 features Nike EasyOn technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip on and off. Add that to its clean, crisp leather and you've got ultimate wearability. Yeah, it's everything you love and then some.",
      Category: 'Women',
      Rating: 4.3,
      Key: 44
    }),

    new Product({
      Tag : 'Sabrina 2 "Mirrored"',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9d83f347-7342-4284-ac39-b511b9984f53/SABRINA+2.png" ,
      Price : 130,
      Description: "Sabrina Ionescu’s success is no secret. Her game is based on living in the gym, getting in rep after rep to perfect her craft. The Sabrina 2 sets you up to do more, so you're ready to go when it's game-time. Our newest Cushlon foam helps keep you fresh, Air Zoom cushioning adds the pop, and sticky traction helps you create that next-level distance. Sabrina’s handed you the tools. Time to go to work",
      Category: 'Women',
      Rating: 4.5,
      Key: 45
    }),

    new Product({
      Tag : 'Luka 3 "Speedway"',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fd71a36-68fc-4d19-9fa4-2ed034d4e747/JORDAN+LUKA+3.png" ,
      Price : 130,
      Description: "Does it get any more classic than black and white? The lightweight, responsive foam and court-ready tech in the Luka 3 mean those two colors are all your opponents will see as you blow past them to sink a quick bucket. No need for a victory lap—these shoes signal your win all on their own.",
      Category: 'Women',
      Rating: 4.7,
      Key: 46
    }),

    new Product({
      Tag : 'Air Jordan 4RM',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/845421e0-7678-455c-9af5-58794a3ce518/WMNS+AIR+JORDAN+4+RM.png" ,
      Price : 150,
      Description: "The remix you didn't know you needed. Made for life on the go, these sneakers reimagine the AJ4 with comfort and durability in mind. Max Air cushions your every step. Plus, elements of the upper are blended into a strong, flexible cage that wraps the shoe to add a ruggedness to your everyday commute.",
      Category: 'Women',
      Rating: 4.4,
      Key: 47
    }),
    new Product({
      Tag : 'Nike SB Dunk Low Pro Electric',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7c2ce677-6497-4d1d-89ef-0a311946f8d4/NIKE+SB+DUNK+LOW+PRO.png" ,
      Price : 125,
      Description: "Before it was adopted by skateboarders for its durability and responsive board feel, the Dunk originally made its mark on the hardwood as a basketball shoe. The silhouette was reengineered to meet the needs of skateboarding, including durable construction and a padded, low-cut collar that lets you take your session anywhere—in comfort",
      Category: 'Women',
      Rating: 3.9,
      Key: 48
    }),

    new Product({
      Tag : 'Nike Tanjun',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f08ec59d-b0a2-470c-bb15-34400f6af0dd/WMNS+NIKE+TANJUN.png" ,
      Price : 52.97,
      Description: "Forget the hype. The Nike Tanjun brings you simplicity at its best. Made with at least 20% recycled content and 100% recycled polyester laces, no detail is overlooked on this one. Lightweight. Airy. Comfortable. These are just words. This shoe is all you need.",
      Category: 'Women',
      Rating: 4.5,
      Key: 49
    }),

    new Product({
      Tag : 'Nike Pegasus Plus',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9c7ff379-a69f-4dc5-a979-a6de2816d2a2/W+PEGASUS+PLUS.png" ,
      Price : 180,
      Description: "Take responsive cushioning to the next level with the Pegasus Plus. It energizes your ride with full-length, superlight ZoomX foam to give you a high level of energy return for everyday runs. And a stretchy Flyknit upper conforms to your foot for a seamless fit.",
      Category: 'Women',
      Rating: 4.7,
      Key: 50
    }),

    new Product({
      Tag : 'Nike Air Force 1 `07 Next Nature SE',
      Img : "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/11f0c7eb-7562-4980-959a-938e476c1443/W+AIR+FORCE+1+%2707+NN+SE.png" ,
      Price : 102.97,
      Description: "Comfortable, durable and timeless—the AF1 is a fan favorite for a reason. Classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go. Take your style up another notch with chrome accents on the laces.",
      Category: 'Women',
      Rating: 4.2,
      Key: 51
    }),
  ]
};
