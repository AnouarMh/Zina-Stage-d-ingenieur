import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "Home",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "Layout Builder",
          breadcrumbs: ["Layout"],
        },
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        meta: {
          breadcrumbs: ["Pages", "Profile"],
        },
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
            meta: {
              pageTitle: "Projects",
            },
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () =>
              import("@/views/crafted/pages/profile/Campaigns.vue"),
            meta: {
              pageTitle: "Campaigns",
            },
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
            meta: {
              pageTitle: "Documents",
            },
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () =>
              import("@/views/crafted/pages/profile/Connections.vue"),
            meta: {
              pageTitle: "Connections",
            },
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
            meta: {
              pageTitle: "Activity",
            },
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () => import("@/views/crafted/pages/wizards/Horizontal.vue"),
        meta: {
          pageTitle: "Horizontal",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () => import("@/views/crafted/pages/wizards/Vertical.vue"),
        meta: {
          pageTitle: "Vertical",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        meta: {
          breadcrumbs: ["Crafted", "Account"],
        },
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
            meta: {
              pageTitle: "Settings",
            },
          },
        ],
      },
      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () => import("@/views/apps/customers/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/Admin/addCenter",
        name: "addCenter",
        component: () => import("@/views/apps/customers/AddAdmin.vue"),
        meta: {
          pageTitle: "Add Center",
          breadcrumbs: ["Admin" ,"Add Center"],
        },
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/ListClient.vue"),
        meta: {
          pageTitle: "Customers Listing",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customers-listingFr",
        name: "apps-customers-listingfr",
        component: () => import("@/views/apps/customers/Listfournisseur.vue"),
        meta: {
          pageTitle: "Customers ListingFr",
          breadcrumbs: ["Apps", "Customersfr"],
        },
      },
      {
        path: "/Admin/List",
        name: "app-admin-list",
        component: () => import("@/views/apps/customers/Listadmin.vue"),
        meta: {
          pageTitle: "Listes des admins de centers",
          breadcrumbs: ["Admin", "Listes des admins de centers"],
        },
      },
      {
        path: "/fournisseur/list",
        name: "app-fournisseur-list",
        component: () => import("@/views/apps/customers/Listfournisseur.vue"),
        meta: {
          pageTitle: "Liste des fournisseurs",
          breadcrumbs: ["Admin", "Liste des fournisseurs"],
        },
      },
      {
        path: "/adminfournisseur/list",
        name: "adminfournisseur-list",
        component: () => import("@/views/apps/customers/admins/ListFournisseur.vue"),
        meta: {
          pageTitle: "Liste des fournisseurs",
          breadcrumbs: ["frnsr", "Liste des fournisseurs"],
        },
      },
      {
        path: "/adminclient/list",
        name: "adminclientr-list",
        component: () => import("@/views/apps/customers/ListClient.vue"),
        meta: {
          pageTitle: "Liste des clients",
          breadcrumbs: ["client", "Liste des clients"],
        },
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
        meta: {
          pageTitle: "Customers Details",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/client-details/:id",
        name: "clientsup-details",
        component: () => import("@/views/apps/customers/ClientDetailsSup.vue"),
        meta: {
          pageTitle: "Clients Details",
          breadcrumbs: ["Apps", "Clients"],
        },
      },
      {
        path: "/admin/admin-details/:id",
        name: "admin-details",
        component: () => import("@/views/apps/customers/AdminDetails.vue"),
        meta: {
          pageTitle: "Admin Details",
          breadcrumbs: ["Admin", "Details"],
        },
      },
      {
        path: "/admin/fournisseur-details/:id",
        name: "fournisseur-details",
        component: () => import("@/views/apps/customers/FournisseurDetails.vue"),
        meta: {
          pageTitle: "Fourinsseur Details",
          breadcrumbs: ["Fournisseur", "Details"],
        },
      },
      
      {
        path: "/apps/subscriptions/getting-started",
        name: "apps-subscriptions-getting-started",
        component: () =>
          import("@/views/apps/subscriptions/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/subscription-list",
        name: "apps-subscriptions-subscription-list",
        component: () =>
          import("@/views/apps/subscriptions/SubscriptionList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/add-subscription",
        name: "apps-subscriptions-add-subscription",
        component: () =>
          import("@/views/apps/subscriptions/AddSubscription.vue"),
        meta: {
          pageTitle: "Add Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/view-subscription",
        name: "apps-subscriptions-view-subscription",
        component: () =>
          import("@/views/apps/subscriptions/ViewSubscription.vue"),
        meta: {
          pageTitle: "View Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/calendar",
        name: "apps-calendar",
        component: () => import("@/views/apps/Calendar.vue"),
        meta: {
          pageTitle: "Calendar",
          breadcrumbs: ["Apps"],
        },
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Private Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Group Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/apps/chat/DrawerChat.vue"),
        meta: {
          pageTitle: "Drawer Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/crafted/modals/general/invite-friends",
        name: "modals-general-invite-friends",
        component: () =>
          import("@/views/crafted/modals/general/InviteFriends.vue"),
        meta: {
          pageTitle: "Invite Friends",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
        meta: {
          pageTitle: "View User",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () =>
          import("@/views/crafted/modals/general/UpgradePlan.vue"),
        meta: {
          pageTitle: "Upgrade Plan",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () =>
          import("@/views/crafted/modals/general/ShareAndEarn.vue"),
        meta: {
          pageTitle: "Share And Earn",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/forms/new-target",
        name: "modals-forms-new-target",
        component: () => import("@/views/crafted/modals/forms/NewTarget.vue"),
        meta: {
          pageTitle: "New Target",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-card",
        name: "modals-forms-new-card",
        component: () => import("@/views/crafted/modals/forms/NewCard.vue"),
        meta: {
          pageTitle: "New Card",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
        meta: {
          pageTitle: "New Address",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () =>
          import("@/views/crafted/modals/forms/CreateApiKey.vue"),
        meta: {
          pageTitle: "Create Api Key",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () =>
          import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
        meta: {
          pageTitle: "Two Factory Auth",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
        meta: {
          pageTitle: "Create App",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () =>
          import("@/views/crafted/modals/wizards/CreateAccount.vue"),
        meta: {
          pageTitle: "Create Account",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/crafted/widgets/Lists.vue"),
        meta: {
          pageTitle: "Lists",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/crafted/widgets/Statistics.vue"),
        meta: {
          pageTitle: "Statistics",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/crafted/widgets/Charts.vue"),
        meta: {
          pageTitle: "Charts",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/crafted/widgets/Mixed.vue"),
        meta: {
          pageTitle: "Mixed",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/crafted/widgets/Tables.vue"),
        meta: {
          pageTitle: "Tables",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
        meta: {
          pageTitle: "Feeds",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/views/AdminOffice/admin.vue"),
    children:[
      {
        path: "/home/service",
        name: "serivce",
        component: () =>
          import("@/views/apps/customers/admins/ListService.vue"),
        meta: {
          pageTitle: "Services",
        },
      },
      {
        path: "/home/service-details/:id",
        name: "service-details",
        component: () => import("@/views/apps/customers/ServiceDetails.vue"),
        meta: {
          pageTitle: "Service Details",
          breadcrumbs: ["Service", "Details"],
        },
      },
      {
        path: "/home/client-details/:id",
        name: "client-details",
        component: () => import("@/views/apps/customers/ClientDetails.vue"),
        meta: {
          pageTitle: "Client Details",
          breadcrumbs: ["Client", "Details"],
        },
      },
      {
        path: "/home/client",
        name: "clients",
        component: () =>
          import("@/views/apps/customers/admins/ListClient.vue"),
        meta: {
          pageTitle: "Clients",
        },
      },
      {
        path: "/home/produits",
        name: "prdts",
        component: () =>
          import("@/views/apps/customers/admins/ListProduit.vue"),
        meta: {
          pageTitle: "Produits",
        },
      },
      {
        path: "/home/commandes",
        name: "Commande",
        component: () =>
          import("@/views/apps/customers/admins/ListCommande.vue"),
        meta: {
          pageTitle: "Commandes",
        },
      },
      {
        path: "/home/reservations",
        name: "Reservations",
        component: () =>
          import("@/views/apps/customers/admins/ListReservation.vue"),
        meta: {
          pageTitle: "Reservations",
        },
      },
    ]
  },
  {
    path: "/fournoisseur",
    component: () => import("@/views/AdminOffice/fournisseur.vue"),
    children:[
      {
        path: "/hoome/produit",
        name: "produits",
        component: () =>
          import("@/views/apps/customers/admins/ListProduitFr.vue"),
        meta: {
          pageTitle: "Produits",
        },
      },
      {
        path: "/hoome/commandes",
        name: "Commandes",
        component: () =>
          import("@/views/apps/customers/admins/ListCommandeFr.vue"),
        meta: {
          pageTitle: "Commandes",
        },
      },
    
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
      {
        path: "/admin",
        name: "home",
        component: () => import("@/views/AdminOffice/admin.vue"),
        meta: {
          pageTitle: "Clients",
        },
        children: [
          {
            path: "/",
            name: "client",
            component: () => import("@/views/apps/customers/admins/ListClient.vue"),
            meta: {
              pageTitle: "Clients",
            },     
          
          },
         
        ]
      },
      {
        path: "/hoome",
        name: "hoome",
        component: () => import("@/views/AdminOffice/fournisseur.vue"),
        meta: {
          pageTitle: "",
        },
      },
      {
        path: "",
        name: "home",
        component: () => import("@/views/frontoffice/Home.vue"),
        meta: {
          pageTitle: "Home",
        },
      },
      {
        path: "/Search",
        name: "search",
        component: () => import("@/views/frontoffice/Search.vue"),
        props: (route) => ({
          searchResults: JSON.parse(route.params.searchResults || '[]')
        }),
        meta: {
          pageTitle: "Serach",
        },
      },
      {
        path: "/Service",
        name: "services",
        component: () => import("@/views/frontoffice/Servicefront.vue"),
        props: (route) => ({
          searchResults: JSON.parse(route.params.searchResults || '[]')
        }),
        meta: {
          pageTitle: "Services",
        },
      },
      {
        path: "/Service-details/:id",
        name: "service-details",
        component: () => import("@/views/frontoffice/ServiceDetails.vue"),
        meta: {
          pageTitle: "Service Details",
          breadcrumbs: ["Service", "Details"],
        },
      },
      {
        path: "/profileClient",
        name: "prof-details",
        component: () => import("@/views/frontoffice/ProfileClient.vue"),
        meta: {
          pageTitle: "Prof Details",
          breadcrumbs: ["Prof", "Details"],
        },
      },
      {
        path: "/Home",
        name: "home",
        component: () => import("@/views/frontoffice/Home.vue"),
        meta: {
          pageTitle: "Home",
        },
      },
      {
        path: "/Signin",
        name: "signin",
        component: () => import("@/views/frontoffice/signin.vue"),
        meta: {
          pageTitle: "signin",
        }, 
        beforeEnter: (to, from, next) => {
          const idToken = localStorage.getItem("id_token");
          if (idToken) {
            next("/");
          } else {
            // L'utilisateur n'est pas connecté, permettre l'accès à la page de connexion
            next();
          }
        },
      },
      {
        path: "/Signup",
        name: "signup",
        component: () => import("@/views/frontoffice/signup.vue"),
        meta: {
          pageTitle: "Crée un compte",
        },
        beforeEnter: (to, from, next) => {
          const idToken = localStorage.getItem("id_token");
          if (idToken) {
            next("/");
          } else {
            // L'utilisateur n'est pas connecté, permettre l'accès à la page de connexion
            next();
          }
        },
      },
      {
        path: "/Complete",
        name: "Complete",
        component: () => import("@/views/frontoffice/Completecompte.vue"),
        meta: {
          pageTitle: "Completer votre compte",
        },
      },
      
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  // authStore.verifyAuth();
authStore.getAdminData();
 
  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
