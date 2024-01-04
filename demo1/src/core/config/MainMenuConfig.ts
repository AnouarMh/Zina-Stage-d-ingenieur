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

const MainMenuConfig: Array<MenuItem> = [
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
    heading: "admins",
    route: "/admins",
    pages: [
      {
        sectionTitle: "Admins",
        route: "/customers",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin006.svg"),
        fontIcon: "bi-printer",
        sub: [
          {
            heading: "Liste des admins",
            route: "/admin/List",
          },
         
        ],
      },
      
    ],
  },
 
  {
    heading: "Users",
    route: "/apps",
    pages: [
      {
        sectionTitle: "Clients",
        route: "/customers",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin006.svg"),
        fontIcon: "bi-printer",
        sub: [
          {
            heading: "Liste des clients",
            route: "/apps/customers/customers-listing",
          },

        ],
      },
      
      {
        sectionTitle: "Fournisseurs",
        route: "/customers",
        svgIcon: getAssetPath("media/icons/duotune/finance/fin006.svg"),
        fontIcon: "bi-printer",
        sub: [
         
          {
            heading: "Liste des fournisseurs",
            route: "/apps/customers/customers-listingFr",
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

export default MainMenuConfig;
