import { getAssetPath } from "@/core/helpers/assets";

export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  svgIcon?: string;
  fontIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfigFr: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: getAssetPath("media/icons/duotune/art/art002.svg"),
        fontIcon: "bi-app-indicator",
      },
      {
        sectionTitle: "Account",
        route: "/account",
        svgIcon: getAssetPath("media/icons/duotune/communication/com006.svg"),
        fontIcon: "bi-person",
        sub: [
          {
            heading: "Profile",
            route: "/crafted/account/overview",
          },
          {
            heading: "Settings",
            route: "/crafted/account/settings",
          },
        ],
      },
      
      // {
      //   heading: "layoutBuilder",
      //   route: "/builder",
      //   svgIcon: getAssetPath("media/icons/duotune/general/gen019.svg"),
      //   fontIcon: "bi-layers",
      // },
    ],
  },
  
 
  {
    heading: "Users",
    route: "/apps",
    pages: [
      {
        sectionTitle: "Produits",
        route: "/customers",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin006.svg"),
        fontIcon: "bi-printer",
        sub: [
          {
            heading: "Liste des Produits",
            route: "/hoome/produit",
          },

        ],
      },
      
      {
        sectionTitle: "Commandes",
        route: "/customers",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin006.svg"),
        fontIcon: "bi-printer",
        sub: [
         
          {
            heading: "Liste des commandes",
            route: "/hoome/commandes",
          },
         
        ],
      },
   


    ],
   
  },
  {
    heading: "Events",
    route: "/apps",
    pages: [
     
      {
        heading: "calendarApp",
        route: "/apps/calendar",
        svgIcon: getAssetPath("media/icons/duotune/general/gen014.svg"),
        fontIcon: "bi-calendar3-event",
      },

    ],
    
    
  },
  
];

export default MainMenuConfigFr;
