import { assets } from "@/assets/assets"

export const PRODUCT_CATEGORIES = [
     "cookies & biscuits",
     "snacks",
     "cake",
     "burger",
     "pizza",
     "bread & loaves",
     "pastries",
     "savory items",
     "donuts"
] as const

export type ProductCategoryNames =
     typeof PRODUCT_CATEGORIES[number]

type ProductImage = {
     id: number
     name: string
     image: string
}

type ProductCategory = {
     id: number
     name: ProductCategoryNames
     image: string
     items: ProductImage[]
}

export const products: ProductCategory[] = [
     {
          id: 1,
          name: "bread & loaves",
          image: assets.bread01,
          items: [
               {
                    id: 1,
                    name: "White Bread",
                    image: assets.bread02
               },
               {
                    id: 2,
                    name: "Brown Bread",
                    image: assets.bread03
               },
               {
                    id: 3,
                    name: "Baguette",
                    image: assets.bread04
               },
               {
                    id: 4,
                    name: "White Bread",
                    image: assets.bread05
               },
               {
                    id: 5,
                    name: "White Bread",
                    image: assets.bread06
               }, {
                    id: 6,
                    name: "White Bread",
                    image: assets.bread07
               }, {
                    id: 7,
                    name: "White Bread",
                    image: assets.bread08
               }, {
                    id: 8,
                    name: "White Bread",
                    image: assets.bread09
               }, {
                    id: 9,
                    name: "White Bread",
                    image: assets.bread10
               },
               {
                    id: 10,
                    name: "White Bread",
                    image: assets.bread11
               }, 
               {
                    id: 11,
                    name: "White Bread",
                    image: assets.bread12
               },
                {
                    id: 12,
                    name: "White Bread",
                    image: assets.bread13
               },
          ]
     },

     {
          id: 2,
          name: "cake",
          image: assets.cake001,
          items: [
               {
                    id: 1,
                    name: "Chocolate Cake",
                    image: assets.cake01
               },
               {
                    id: 2,
                    name: "Vanilla Cake",
                    image: assets.cake02
               },
               {
                    id: 3,
                    name: "Red Velvet Cake",
                    image: assets.cake04
               },
               {
                    id: 4,
                    name: "Red Velvet Cake",
                    image: assets.cake05
               },
               {
                    id: 5,
                    name: "Red Velvet Cake",
                    image: assets.cake07
               },
               {
                    id: 6,
                    name: "Red Velvet Cake",
                    image: assets.cake08
               },
               {
                    id: 7,
                    name: "Red Velvet Cake",
                    image: assets.cake09
               },
               {
                    id: 8,
                    name: "Red Velvet Cake",
                    image: assets.cake05
               }
          ]
     },

     {
          id: 3,
          name: "cookies & biscuits",
          image: assets.cookies01,
          items: [
               {
                    id: 1,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies02
               },
               {
                    id: 2,
                    name: "Butter Cookies",
                    image: assets.cookies01
               },
               {
                    id: 3,
                    name: "Oatmeal Cookies",
                    image: assets.cookies02
               },
               {
                    id: 4,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies03
               },
               {
                    id: 5,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies04
               },
               {
                    id: 6,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies05
               },
               {
                    id: 7,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies06
               },
               {
                    id: 8,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies07
               },
               {
                    id: 9,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies08
               },
               {
                    id: 10,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies09
               },
               {
                    id: 11,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies10
               },
               {
                    id: 12,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies11
               },
               {
                    id: 13,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies12
               },
               {
                    id: 14,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies13
               },
               {
                    id: 15,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies14
               },
               {
                    id: 16,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies15
               },
               {
                    id: 17,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies16
               },
               {

                    id: 18,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies17
               },
               {
                    id: 19,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies18
               },
               {
                    id: 20,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies19
               },
               {
                    id: 21,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies20
               },
               {
                    id: 22,
                    name: "Chocolate Chip Cookies",
                    image: assets.cookies21
               },
          ]
     },

     {
          id: 4,
          name: "pastries",
          image: assets.patries10,
          items: [
               {
                    id: 1,
                    name: "Croissant",
                    image: assets.patries01
               },
               {
                    id: 2,
                    name: "Danish Pastry",
                    image: assets.patries02
               },
               {
                    id: 3,
                    name: "Éclair",
                    image: assets.patries03
               },
               {
                    id: 4,
                    name: "Éclair",
                    image: assets.patries04
               },
               {
                    id: 5,
                    name: "Éclair",
                    image: assets.patries05
               },
               {
                    id: 6,
                    name: "Éclair",
                    image: assets.patries06
               },
               {
                    id: 7,
                    name: "Éclair",
                    image: assets.patries07
               },
               {
                    id: 8,
                    name: "Éclair",
                    image: assets.patries08
               },
               {
                    id: 9,
                    name: "Éclair",
                    image: assets.patries09
               },
          ]
     },

     {
          id: 5,
          name: "savory items",
          image: assets.savory01,
          items: [
               {
                    id: 1,
                    name: "Meat Pie",
                    image: assets.savory02
               },
               {
                    id: 2,
                    name: "Sausage Roll",
                    image: assets.savory03
               },
               {
                    id: 3,
                    name: "Samosa",
                    image: assets.savory04
               },
               {
                    id: 4,
                    name: "Samosa",
                    image: assets.savory05
               },
               {
                    id: 5,
                    name: "Samosa",
                    image: assets.savory06
               },
               {
                    id: 6,
                    name: "Samosa",
                    image: assets.savory07
               },
               {
                    id: 7,
                    name: "Samosa",
                    image: assets.savory08
               },
               {
                    id: 8,
                    name: "Samosa",
                    image: assets.savory09
               },
          ]
     },

     {
          id: 6,
          name: "donuts",
          image: assets.donut01,
          items: [
               {
                    id: 1,
                    name: "Glazed Donut",
                    image: assets.donut02
               },
               {
                    id: 2,
                    name: "Chocolate Donut",
                    image: assets.donut03
               }, {
                    id: 3,
                    name: "Glazed Donut",
                    image: assets.donut04
               },
               {
                    id: 4,
                    name: "Glazed Donut",
                    image: assets.donut05
               },
               {
                    id: 5,
                    name: "Glazed Donut",
                    image: assets.donut06
               },
               {
                    id: 6,
                    name: "Glazed Donut",
                    image: assets.donut07
               },
               {
                    id: 7,
                    name: "Glazed Donut",
                    image: assets.donut08
               },
               {
                    id: 8,
                    name: "Glazed Donut",
                    image: assets.donut09
               },
          ]
     }
]