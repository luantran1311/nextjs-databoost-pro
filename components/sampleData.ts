import { CategoryTree } from "@/types";
import { uuid } from "uuidv4";

 const seasons = [
  {
    id: uuid(),
    name: "Seasons",
    children: [
      {
        id: uuid(),
        name: "Summer",
        children: [
          {
            id: uuid(),
            name: "Hot",
            children: [
              {
                id: uuid(),
                name: "June",
                route: "/June"
              },
              {
                id: uuid(),
                name: "July",
                route: "/July"
              }
            ]
          },

          {
            id: uuid(),
            name: "August",
            route: "/August"
          }
        ]
      },
      {
        id: uuid(),
        name: "Fall",
        children: [
          {
            id: uuid(),
            name: "September",
            route: "/September"
          },
          {
            id: uuid(),
            name: "October",
            route: "/October"
          },
          {
            id: uuid(),
            name: "November",
            route: "/November"
          }
        ]
      },
      {
        id: uuid(),
        name: "Winter",
        children: [
          {
            id: uuid(),
            name: "December",
            route: "/December"
          },
          {
            id: uuid(),
            name: "January",
            route: "/January"
          },
          {
            id: uuid(),
            name: "February",
            route: "/February"
          }
        ]
      },
      {
        id: uuid(),
        name: "Spring",
        children: [
          {
            id: uuid(),
            name: "March",
            route: "/March"
          },
          {
            id: uuid(),
            name: "April",
            route: "/April"
          },
          {
            id: uuid(),
            name: "May",
            route: "/May"
          }
        ]
      }
    ]
  }
];

export const categoryTree: CategoryTree[] = [
  {
    id: 1,
    name: "Shop By Category",
    children: [
      {
        id: 2,
        name: "Mobile Phones",
        children: [
          {
            id: 3,
            name: "Apple",
            children: [],
          },
          {
            id: 4,
            name: "Samsung",
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: "Tablets",
        children: [
          {
            id: 6,
            name: "Apple",
            children: [],
          },
          {
            id: 7,
            name: "Samsung",
            children: [],
          },
        ],
      },
    ],
  },
];
