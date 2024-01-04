<template>
    <div class="search">
    <div class="header">
        <div class="logo-container">
          <img class="logo" :src="isMobile ? '/media/logos/zina-removebg-preview.png' : '/media/logos/zina-removebg-preview.png'" />
        </div>
        <div class="button3">
          <button class="bg" v-show="!hasIdToken">
      <router-link to="/signin" class="bg">GET STARTED</router-link>
          </button>
        </div>
        <div class="menu-container" v-if="!isMobile">
          <div class="menu">
            <router-link to="/home" class="menu-item accueil">Accueil</router-link>
            <a class="menu-item coiffure" @click="searchByCategory('Coiffure')">Coiffure</a>
            <a class="menu-item visage" @click="searchByCategory('Visage')">Visage</a>
            <a class="menu-item corps" @click="searchByCategory('Corps')">Corps</a>
            <a class="menu-item homme" @click="searchByCategory('Homme')">Homme</a>
      <a class="menu-item spa" @click="searchByCategory('Spa')">Spa</a>
      
  </div>    
  <div class="app-navbar-item ms-1 ms-md-20" id="kt_header_user_menu_toggle" v-show="hasIdToken">
      <!--begin::Menu wrapper-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-50px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        @click="isDropdownOpen = !isDropdownOpen"
  
  
      >
        <img :src="admin.image" alt="user" />
      </div>
      <div v-if="isDropdownOpen" class="dropdown-content" >
        <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          
          <img alt="Logo" :src="admin.image" /> 
        </div>
        <!--end::Avatar-->
  
        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bold d-flex align-items-center fs-5" >
            {{admin.nom}} {{ admin.prenom }}
            <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
              >{{admin.role}}</span
            >
          </div>
          <a href="#" class="fw-semobold text-muted text-hover-primary fs-7"
            >{{ admin.email }}</a
          >
        </div>
        <!--end::Username-->
      </div>
    </div>
    <div class="separator my-0"></div>
    <div class="menu-item ">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
  <radialGradient id="A7gfmRnQJ4TuM2hgrd0Tra_kDoeg22e5jUY_gr1" cx="11.177" cy="8.393" r="40.312" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0370c8"></stop><stop offset=".484" stop-color="#036fc5"></stop><stop offset=".775" stop-color="#036abd"></stop><stop offset="1" stop-color="#0362b0"></stop></radialGradient><path fill="url(#A7gfmRnQJ4TuM2hgrd0Tra_kDoeg22e5jUY_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><radialGradient id="A7gfmRnQJ4TuM2hgrd0Trb_kDoeg22e5jUY_gr2" cx="24" cy="44.108" r="16.14" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><path fill="url(#A7gfmRnQJ4TuM2hgrd0Trb_kDoeg22e5jUY_gr2)" d="M24,44c5.795,0,10.998-2.48,14.651-6.418C36.177,31.943,30.552,28,24,28	s-12.177,3.943-14.651,9.582C13.002,41.52,18.205,44,24,44z"></path><radialGradient id="A7gfmRnQJ4TuM2hgrd0Trc_kDoeg22e5jUY_gr3" cx="24" cy="20" r="9.5" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="1" stop-opacity="0"></stop></radialGradient><circle cx="24" cy="20" r="9.5" fill="url(#A7gfmRnQJ4TuM2hgrd0Trc_kDoeg22e5jUY_gr3)"></circle><linearGradient id="A7gfmRnQJ4TuM2hgrd0Trd_kDoeg22e5jUY_gr4" x1="18.573" x2="29.735" y1="13.573" y2="24.735" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#75daff"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><circle cx="24" cy="19" r="8" fill="url(#A7gfmRnQJ4TuM2hgrd0Trd_kDoeg22e5jUY_gr4)"></circle><linearGradient id="A7gfmRnQJ4TuM2hgrd0Tre_kDoeg22e5jUY_gr5" x1="17.007" x2="30.888" y1="31.21" y2="45.091" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#75daff"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><path fill="url(#A7gfmRnQJ4TuM2hgrd0Tre_kDoeg22e5jUY_gr5)" d="M24,44c5.015,0,9.587-1.859,13.098-4.909C35.107,33.784,30.002,30,24,30	s-11.107,3.784-13.098,9.091C14.413,42.141,18.985,44,24,44z"></path>
  </svg>
      <router-link to="/crafted/account/overview" class="custom-centered">
      My Profile
      </router-link>
    </div>
    <div class="separator my-0"></div>
    <div class="menu-item ">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
  <linearGradient id="TLxN4xXGVHxg8pzyp~Oega_uVA8I3rgWfOs_gr1" x1="10.183" x2="36.857" y1="4.879" y2="41.792" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#TLxN4xXGVHxg8pzyp~Oega_uVA8I3rgWfOs_gr1)" d="M37,4H11C9.895,4,9,4.895,9,6v36c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V6	C39,4.895,38.105,4,37,4z"></path><path d="M39,16.859l-2.586-2.586C35.154,13.013,33,13.906,33,15.688V19H21c-1.105,0-2,0.895-2,2v6	c0,1.105,0.895,2,2,2h12v3.312c0,1.782,2.154,2.674,3.414,1.414L39,31.141V16.859z" opacity=".05"></path><path d="M39,17.859l-2.603-2.603C35.512,14.371,34,14.998,34,16.249V20H21.5c-0.828,0-1.5,0.672-1.5,1.5v5	c0,0.828,0.672,1.5,1.5,1.5H34v3.751c0,1.251,1.512,1.877,2.397,0.993L39,30.141V17.859z" opacity=".07"></path><path fill="#50e6ff" d="M35,16.81V21H22c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h13v4.19c0,0.72,0.87,1.08,1.379,0.571	l6.701-6.701c0.586-0.586,0.586-1.536,0-2.121l-6.701-6.701C35.87,15.729,35,16.09,35,16.81z"></path>
  </svg>
      <router-link to="/signin" @click="signOut()" class="custom-centered"> Sign Out </router-link>
  
    </div>
  
  
  </div>
      <!--end::Menu wrapper-->
    </div>
          </div>
        </div>
  
  
    <div class="search-container">
      <video class="videosearch" autoplay loop muted>
        <source src="/media/logos/istockphoto-1150776341-640_adpp_is.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          
       <div class="search-result" >
        <div class="d-flex flex-column flex-xl-row">
        <!--begin::Sidebar-->
        <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
          <!--begin::Card-->
          <div class="card mb-5 mb-xl-8">
            <!--begin::Card body-->
            <div class="card-body pt-15">
              <!--begin::Summary-->
              <div class="d-flex flex-center flex-column mb-5"    v-if="fournisseur" >
                
                <!--begin::Avatar-->
                <div class="symbol symbol-100px symbol-circle mb-7">
                  <img
                    :src="fournisseur.image"
                    alt="image"
                  />
                </div>
                <!--end::Avatar-->
    
                <!--begin::Name-->
                <a
                  class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                >
                  Nom : {{ fournisseur.nom}}  
    
                </a>
                <a
                  class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                >
                Prenom :{{ fournisseur.prenom}}
    
                </a>
                <a
                  class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                >
                Email :{{ fournisseur.email}} 
    
                </a>
                <a
                  class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                >
                Langue :{{ fournisseur.langue}}
    
                </a>
                <a
                  class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
                >
                Numero :{{ fournisseur.numerotel}}
    
                </a>
              
              </div>
              <!--end::Summary-->
    
              <!--begin::Details toggle-->
           
        
              <!--end::Details content-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
    
          <!--begin::Connected Accounts-->
          
          <!--end::Connected Accounts-->
        </div>
        <!--end::Sidebar-->
    
        <!--begin::Content-->
        <div class="flex-lg-row-fluid ms-lg-20">
          <!--begin:::Tabs-->
          <ul
            class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semobold mb-8"
          >
            <!--begin:::Tab item-->
           
            <li class="nav-item">
              <a
                class="nav-link text-active-primary pb-4"
                data-bs-toggle="tab"
                href="#updatefournisseur"
                @click="startEdit"
                >Modifier</a
              >
            </li>
            <li class="nav-item">
            <a
              class="nav-link text-active-primary pb-4 active"
              data-bs-toggle="tab"
              href="#kt_customer_view_overview_tab"
              >Reservation</a
            >
          </li>
        
          </ul>
       
            <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              id="updatefournisseur"
              role="tabpanel"
            >
            <div v-if="editMode" >
        <!-- Champs d'entrée pour éditer les attributs de l'admin -->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Nom</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.nom"
          />
          <label class="form-label fs-6 fw-bold text-dark">Prenom</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.prenom"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="prenom" />
            </div>
          </div>
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Email</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.email"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Langue</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.langue"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="localisation" />
            </div>
          </div>
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Numéro</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.numerotel"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="country" />
            </div>
          </div>
        </div>
        
       
        <!-- ... autres champs d'entrée ... -->
        
        <button class="btn btn-primary" @click="saveChangesUp">Update {{ fournisseur.nom }} </button>
         
      </div>
        
           
          </div>
          <div
              class="tab-pane fade"
              id="kt_customer_view_overview_tab"
              role="tabpanel"
            >
            <div  >
          <!-- Champs d'entrée pour éditer les attributs de l'admin -->
       
          <div class="card-body pt-0">
      <Datatable
        :data="customersArray"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
      <template v-slot:image="{ row: customer }">
        
        <a href="#/apps/customers/customer-details" class="text-gray-600 text-hover-primary mb-1">
          <img :src="customer.image" width="40">
        </a>
      </template>
      <template v-slot:service="{ row: customer }">
        
          <a     
           class="text-gray-600 text-hover-primary mb-1">
            {{ customer.service }}
          </a>
        </template>
        
       
        <template v-slot:date="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.date }}
          </a>
        </template>
        <template v-slot:etat="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.etat }}
          </a>
        </template>
        <template v-slot:action="{ row: customer }">
            
            <button  class="btn btn-success" >✅ Accepter</button>

          </template>
       
      </Datatable>
    </div>
          <!-- ... autres champs d'entrée ... -->
          
          <!-- <button class="btn btn-primary" @click="saveChanges">Update {{ fournisseur.nom }} </button> -->
           
        </div>
        
           
          </div>
          </div>
        </div>
      </div>
  
    
    
  
  
    <!-- Add more static search result cards as needed -->
  
  </div>
        </div>
        <div class="footer">
    <div class="copy-right-bg"></div>
    <div class="footer-bg"></div>
    <div class="privacy">PRIVACY</div>
    <div class="terms">TERMS</div>
    <div class="copyright-by-zina-design-all-right-reserved">
      © Copyright by ZinaDesign – All right reserved.
    </div>
    <div class="posuere-urna-nec-tincidunt-praesent-egestas-maecenas-pharetra-convallis-posuere-ipsum-nunc">
      Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis
      posuere ipsum nunc.
    </div>
    <div class="line-4"></div>
    <div class="social-media">
      <a class="instagram">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 128 128" id="instagram"><defs><clipPath id="b"><circle cx="64" cy="64" r="64" fill="none"></circle></clipPath><clipPath id="c"><path fill="none" d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"></path></clipPath><clipPath id="e"><circle cx="82" cy="209" r="5" fill="none"></circle></clipPath><clipPath id="g"><path fill="none" d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"></path></clipPath><clipPath id="h"><path fill="none" d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"></path></clipPath><clipPath id="i"><circle cx="82" cy="-117" r="5" fill="none"></circle></clipPath><radialGradient id="a" cx="27.5" cy="121.5" r="137.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd676"></stop><stop offset=".25" stop-color="#f2a454"></stop><stop offset=".38" stop-color="#f05c3c"></stop><stop offset=".7" stop-color="#c22f86"></stop><stop offset=".96" stop-color="#6666ad"></stop><stop offset=".99" stop-color="#5c6cb2"></stop></radialGradient><radialGradient id="d" cx="27.5" cy="-41.5" r="148.5" xlink:href="#a"></radialGradient><radialGradient id="f" cx="13.87" cy="303.38" r="185.63" xlink:href="#a"></radialGradient><radialGradient id="j" cx="13.87" cy="-22.62" r="185.63" xlink:href="#a"></radialGradient></defs><g clip-path="url(#b)"><circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)"></circle></g><g clip-path="url(#c)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#e)"><circle cx="13.87" cy="303.38" r="185.63" fill="url(#f)"></circle></g><g clip-path="url(#g)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#h)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#i)"><circle cx="13.87" cy="-22.62" r="185.63" fill="url(#j)"></circle></g><circle cx="82" cy="46" r="5" fill="#fff"></circle><path fill="#fff" d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"></path><rect width="64" height="64" x="32" y="32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="8" rx="12" ry="12"></rect></svg>
      </a>
      <a class="facebook">
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
      </a>
    </div>
    <div class="line-3"></div>
    <img class="logo2" src="/media/logos/zina-removebg-preview.png"/>
    <div class="menu">
      <div class="contact">contact</div>
      <div class="blog1">blog</div>
      <div class="team">team</div>
      <div class="services">services</div>
      <div class="about">about</div>
      <div class="home1">home</div>
    </div>
  </div>
  
  
  </div>
  </template>
  
  <script lang="ts">
  import { RouterLink } from 'vue-router';
  
  import "leaflet/dist/leaflet.css"
  import { LMap, LTileLayer,LMarker  } from "@vue-leaflet/vue-leaflet"
  import axios from 'axios';
  
  import arcades from "@/core/config/arcades.json"
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, computed, onMounted, ref } from "vue";
  import Dropdown3 from "@/components/dropdown/DropdownAdmin.vue";
  import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
  import { useRoute } from "vue-router";
  import {deleteClient,approuverClient,getClientById ,type Client } from "@/core/data/customers";
  import {addreservation,updateClient }from "@/core/data/customers";
  import Swal from "sweetalert2";
  import arraySort from "array-sort";
  import Datatable from "@/components/kt-datatable/KTDataTable.vue";
  import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
  import { hideModal } from "@/core/helpers/dom";
  
  import KTSearch from "@/layouts/main-layout/search/Search.vue";
  import KTNotificationMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
  import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
  import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
  import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
  import { useThemeStore } from "@/stores/theme";
  import { getReservationbyClient,type Reservation } from "@/core/data/customers";

  import { useAuthStore } from "@/stores/auth";
  import VueModal from 'vue-js-modal'; // Importez le composant modal
  //import userouter
  import { useRouter } from "vue-router"; // Importez le routeur de Vue Router
  interface Reservations{
    service_id:number;
    client_id:number;
    date:string;
  
  }
  let zoom = ref(10);
  let center = ref([38, 139.69]);
  
  const value1 = ref<[Date, Date]>([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10),
  ])
  const value2 = ref('')
  
  const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
  ]
  export default { 
  name: 'Search',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Datatable,
        ExportCustomerModal,
        Dropdown3,
        NewCardModal,
  
  },
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
      const newTargetModalRef = ref<null | HTMLElement>(null);
      const loading = ref<boolean>(false);
    const targetData = ref<Reservations>({
        client_id: 0,
        service_id: 0,
        date: "",
      
      });
      const tableHeader = ref([
   
   {
     columnName: "Nom de Service",
     columnLabel: "service",
     sortEnabled: true,
     columnWidth: 100,
   },
 
   {
     columnName: "Date de reservation",
     columnLabel: "date",
     sortEnabled: true,
     columnWidth: 100,
   },
   {
     columnName: "Etat de reservation",
     columnLabel: "etat",
     sortEnabled: true,
     columnWidth: 100,
   },
   {
     columnName: "Action",
     columnLabel: "action",
     sortEnabled: true,
     columnWidth: 100,
   },

  

 ]);
        const route = useRoute();
        const adminId = Number(route.params.id);
        const fournisseur = ref<Client>({} as Client);
      const clients = ref<Client[]>([]);

  
    const storeauth = useAuthStore();
    const admin = ref(storeauth.user)
    const store = useThemeStore();
  
    const router = useRouter();
    const editMode = ref(false);
      const startEdit = () => {
        editMode.value = true;
      };
      const selectedIds = ref<Array<number>>([]);

const customers = ref<Reservation[]>([]);

const initCustomers = ref<Array<Reservation>>([]);
const customersArray = ref<Array<Reservation>>([]);
    
        const cancelEdit = () => {
          // Annuler l'édition et restaurer les valeurs originales
          editMode.value = false;
          // Recharger les données originales depuis le serveur si nécessaire
        };
        const saveChanges=()=>{
          // Enregistrer les modifications apportées à l'administrateur
          editMode.value = false;
          // Envoyer les modifications au serveur ...
          // ... et recharger les données depuis le serveur si nécessaire
          targetData.value.client_id =admin.value.id;
          targetData.value.service_id =fournisseur.value.id;
          const dateObject = new Date(targetData.value.date);
  
  
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObject.getDate().toString().padStart(2, '0');
  
  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');
  const seconds = dateObject.getSeconds().toString().padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  console.log(formattedDate);
  
          const formData=new FormData();
          formData.append("client_id",targetData.value.client_id.toString());
          formData.append("service_id",targetData.value.service_id.toString());
          formData.append("date",formattedDate);
  
          //rendre date jour-mois-annee
          addreservation(formData).then (response=>{
            Swal.fire({
              title: "Success",
              text: "Reservation ajoutée avec succès",
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          }).catch(error=>{
            Swal.fire({
              title: "Error",
              text: "Erreur lors de l'ajout de la reservation",
              icon: "error",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          })
        }
    onMounted(async () => {
    const responsed = await storeauth.getAdminData();
           admin.value = responsed;
           const id=(admin.value.id)
    const response =await getClientById(id);
    fournisseur.value = response;
  console.log(fournisseur.value);
  const responser =await getReservationbyClient(id);
       customers.value = responser;
       customersArray.value = Array.from(customers.value);
        /*customersArray.value = Array.from(customers.value);*/
        
       
      
      //  const adminResponse = await axios.get(`http://127.0.0.1:8000/api/admin/getClientByCenter/${id}`);
      //  customers.value = adminResponse.data;
      //   customersArray.value = Array.from(customers.value);
       console.log(customers.value)
    // const adminResponse = await getClientById(adminId);
    // console.log(adminResponse);
    // fournisseur.value = adminResponse;
    /*const clientsResponse = await getClientsByAdmin(adminId);
    clients.value = clientsResponse;*/
  });
  const saveChangesUp = () => {    
  
  updateClient(fournisseur.value,adminId).then((response) => {
Swal.fire({
text: "Le profil de '" + fournisseur.value?.nom + "' a été mis à jour avec succès.",
    icon: "success",
    confirmButtonText: "Ok",
    buttonsStyling: false,
    heightAuto: false,
    customClass: {
      confirmButton: "btn btn-light-primary",
    },
}); 
}).catch((error) => {
Swal.fire({
    text: "Une erreur s'est produite. Veuillez réessayer.",
    icon: "error",
    confirmButtonText: "Ok",
    buttonsStyling: false,
    heightAuto: false,
    customClass: {
      confirmButton: "btn btn-light-primary",
    },
});
});      
// editMode.value = false;
};
      const reserveService = (id) => {
        router.push({ name: "service-details", params: { id } });
      };
    const signOut = () => {
      storeauth.logout();
      router.push({ name: "signin" });
    };
    const themeMode = computed(() => {
      return store.mode;
    });
    onMounted(async () => {
      try {
        const response = await storeauth.getAdminData();
         admin.value = response;
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    });
  
    return {
      themeMode,
      getAssetPath,
      admin,
      signOut,
      reserveService,
      tableHeader,
      targetData,
          fournisseur,
          editMode,
          startEdit,
          saveChanges,
          saveChangesUp,
          customersArray,

    };
  
  },
  data() {
    return {
        mydata: [],
      date: '2019-02-12',
      isMobile: false,
      videoPlaying: true,
      searchOption: 'etablisement', // Option de recherche actuellement sélectionnée
      countries: [
      {
        name: 'Tunisie',
        cities: ['Tunis', 'Sfax', 'Sousse', 'Nabeul','Monastir']
      },
      {
        name: 'France',
        cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse']
      },
      // Ajoutez d'autres pays et villes ici
      {name:'Algerie',
      cities:['Alger','Oran','Constantine','Annaba']},
      {name:'Maroc',
      cities:['Casablanca','Rabat','Fes','Tanger']},
      {name:'Egypte',
      cities:['Le Caire','Alexandrie','Gizeh','Port-Saïd']},
      {name:'Libye',
      cities:['Tripoli','Benghazi','Misrata','Tarhounah']},
      {name:'Mauritanie',
      cities:['Nouakchott','Nouadhibou','Kiffa','Zouerate']},
      {name:'Soudan',
      cities:['Khartoum','Omdurman','Port-Soudan','Kassala']},
      {name:'Tchad',
      cities:['N\'Djamena','Moundou','Sarh','Abeche']},
      {name:'Italie',
      cities:['Rome','Milan','Naples','Turin']},
      {name:'Espagne',
      cities:['Madrid','Barcelone','Valence','Séville']},
      {name:'Portugal',
      cities:['Lisbonne','Porto','Coimbra','Braga']},
      {name:'Allemagne',
      cities:['Berlin','Hambourg','Munich','Cologne']},
      {name:'Belgique',
      cities:['Bruxelles','Anvers','Gand','Charleroi']},
      {name:'Pays-Bas',
      cities:['Amsterdam','Rotterdam','La Haye','Utrecht']},
      {name:'Royaume-Uni',
      cities:['Londres','Birmingham','Glasgow','Liverpool']},
    ],
    selectedCountry: null,
    selectedCity: '',
    showDropdown: false,
      selectedDate: "",
      showCalendar: false,
      showTimeSlots: false,
      selectedLocation: '',
      dateFormat: 'yyyy-MM-dd',
      zoom: 5,
      center: [35.6737925, 10.8564466],
      clickedLocation: null,
      isMapModalOpen: false,
      isCoiffureDropdownVisible: false, // Définissez la propriété ici
      isVisageDropdownVisible: false, // Nouvelle propriété pour la dropdown "Visage"
      coiffures: [
        { name: 'Coupe femme', image: '/media/logos/zina-removebg-preview.png' },
        { name: 'Coupe homme', image: '/media/logos/zina-removebg-preview.png' },
        { name: 'Brushing', image: '/media/logos/zina-removebg-preview.png' },
        // Ajoutez d'autres types de coiffures avec leurs images
      ],
      searchQuery: '',
      searchResults: [],
      Services: [],
      Centrescat:[],
      loading: false,
      showPopup: false,
      isDropdownOpen: false,
  
    };
  },
   created() {
    this.fetchData();
  
  },
  computed: {
    hasIdToken() {
      const idToken = localStorage.getItem("id_token");
      return !!idToken;
    },
    
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
    
    this.getService();
    
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    async getService() {
      try {
        const response = await axios.get(`/clients/getAdminByService/${this.$route.params.id}`);
        this.mydata = response.data;
        console.log(this.mydata);
      } catch (error) {
        console.error(error);
      }
    },
    checkWindowSize() {
      this.isMobile = window.innerWidth <= 768; // Vous pouvez ajuster la valeur pour définir la largeur de l'appareil mobile
    },
    toggleVideo() {
      const video = document.querySelector('.video-bg');
      if (this.videoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.videoPlaying = !this.videoPlaying;
    },
    toggleSearchOption(option) {
      this.searchOption = option;
        },
        selectedCountryCities(country) {
    const selectedCountryObj = this.countries.find(country => country.name === this.selectedCountry);
    if (selectedCountryObj) {
      return selectedCountryObj.cities;
     
    } else {
      return [];
    }
  },
  
  toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectToday() {
      this.selectedDate = new Date().toISOString().substring(0, 10);
      this.showDropdown = false;
    },
    selectTomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.selectedDate = tomorrow.toISOString().substring(0, 10);
      this.showDropdown = false;
    },
    selectAnytime() {
      this.selectedDate = "À tout moment";
      this.showDropdown = false;
    },
    toggleCalendar() { // Renommée de showCalendar() en toggleCalendar()
      this.showCalendar = !this.showCalendar;
    },
    async getUserLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationName = await this.getLocationName(latitude, longitude);
            this.selectedLocation = locationName;
          },
          (error) => {
            console.error('Erreur de géolocalisation :', error);
          }
        );
      } else {
        console.error('La géolocalisation n\'est pas prise en charge par ce navigateur.');
      }
    },
    async getLocationName(latitude, longitude) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.display_name) {
        return data.display_name.split(',')[0];
        console.log(data.display_name.split(',')[0]);
      } else {
        console.error('Impossible d\'obtenir le nom du lieu.');
        return '';
      }
    },
    openMapModal() {
    this.isMapModalOpen = true;
  },
  closeMapModal() {
    this.isMapModalOpen = false;
  },
    async handleMapClick(event) {
      const clickedLatLng = event.latlng;
      this.clickedLocation = [clickedLatLng.lat, clickedLatLng.lng];
  
      const latitude = clickedLatLng.lat;
      const longitude = clickedLatLng.lng;
      const locationName = await this.getLocationName(latitude, longitude);
      this.clickedLocation = { latitude, longitude, locationName };
      this.selectedLocation = locationName;
  
    },
    async getLocationName(latitude, longitude) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.display_name) {
        const parts = data.display_name.split(', ');
        const formattedLocationName = parts[0] + ', ' + parts.find(part => part.startsWith('Gouvernorat')) + ', ' + parts[parts.length - 1];
        return formattedLocationName;
        this.closeMapModal();
            } else {
        console.error('Impossible d\'obtenir le nom du lieu.');
        return '';
      }
    },
    toggleCoiffureDropdown() {
      this.isCoiffureDropdownVisible = !this.isCoiffureDropdownVisible;
    },
    hideCoiffureDropdown() {
      this.isCoiffureDropdownVisible = false;
    },
    showVisageDropdown() {
    this.isVisageDropdownVisible = true;
  },
  hideVisageDropdown() {
    this.isVisageDropdownVisible = false;
  },
  async searchByCategory(category) {
      // Redirigez l'utilisateur vers la page de recherche avec la catégorie comme paramètre d'URL
      this.$router.push({ name: 'search', query: { category: category } });
    },
    async fetchData() {
      this.loading = true; 
    // Retrieve the search query from the route parameter
  const query = this.$route.params.query;
  const { nom, selectedCity } = this.$route.query;
  const categorie = this.$route.query.category;
  
  if (query) {
    this.searchQuery = query;
    // Perform the search here (optional)
    this.performSearch();
  } else {
    // Retrieve search results from query parameters
    const results = this.$route.query.results;
    if (results) {
      this.searchResults = JSON.parse(results);
    }
  }
  if (nom) {
    this.searchQuery = nom;
  }
  if (selectedCity) {
    this.selectedCity = selectedCity;
  }
  if (categorie) {
      try {
        console.log(categorie);
  
  // Récupérer la liste des centres
  const centreResponse = await axios.get('/clients/CentrebyCateg', {
    params: { categorie }
  });
  const centres = centreResponse.data[0];
  this.Centrescat = centres;
  
  // Récupérer et associer les services pour chaque centre
  for (const centre of centres) {
    const admin_id = centre.id;
    console.log(admin_id);
  
    const serviceResponse = await axios.get('/clients/ServicebyIdCateg', {
      params: { categorie, admin_id }
    });
    const services = serviceResponse.data[0];
  
    centre.services = services; // Ajouter la liste des services au centre
  }
        
      } catch (error) {
        console.error(error);
      }finally {
        this.loading = false; // Mettez à jour l'état de chargement une fois les données récupérées
      }
    }
  },
  toggleDetails(service) {
    service.showDetails = !service.showDetails;
  },
  async searchByEtablissement() {
    this.Centrescat=[];
  const dataform = {
    nom: this.searchQuery,
    localisation: `${this.selectedCity}`,
  };
  
  try {
    const response = await axios.get('/clients/getallservice', {
      params: dataform
    });
  
    // Handle the response, e.g., update the search results
    this.searchResults = response.data; 
    console.log(response.data);
  
    this.$router.push({
      name: 'search',
      query: { results: JSON.stringify(this.searchResults),
        nom: this.searchQuery,
        localisation: `${this.selectedCity}`},
      
    });
    // Assuming you have a data property for search results
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
  },
  
  
  },
  };
  </script>
  
  <style scoped lang="scss">
  .search,
  .search * {
  box-sizing: border-box;
  }
  .loading{
  color: red;
  }
  .search {
  max-width: 1648px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/media/logos/quartz-rose-marbré-75X50.jpg") center/cover no-repeat;
  }
  .search-container {
  /* Add your container styles */
  /* For centering the content vertically and horizontally */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
  
  .videosearch {
  /* Set width and height for the video */
  width: 300%; /* Adjust as needed */
  height: 100%; /* Maintain aspect ratio */
  
  /* Add responsive styles */
  @media (max-width: 768px) {
    width: 100%; /* Adjust as needed for mobile */
    height: auto; /* Maintain aspect ratio */
  }
  }
  
  
  /* Styles spécifiques pour mobile */
  @media (min-width: 1020px) {
  .search {
    padding: 10px;
  }
  .menu-container {
    display: none;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    max-width: 200px;
    height: auto;
  }
  .button {
    display: none;
  }
  
  }
  
  .header * {
  box-sizing: border-box;
  }
  
  .header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(74, 66, 66, 0.8);
  padding: 10px 0px;
  z-index: 1;
  }
  
  /* Styles spécifiques pour mobile */
  .button3 {
  display: flex;
  align-items: center;
  }
  
  .bg {
  background: #1c1919;
  border-radius: 100px;
  border-style: solid;
  border-color: #121515;
  border-width: 1px;
  width: 150px;
  height: 35px;
  color: #d5b1b1;
  font: 400 14px "Kanit", sans-serif;
  justify-content: center;
  align-items: center;
  }
  
  .menu-container {
  flex: 1;
  display: flex;
  justify-content: center;
  }
  
  .menu {
  max-width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 0;
  }
  
  .menu-item {
  color: #5891df;
  text-align: center;
  font: 400 20px "Raleway", sans-serif;
  text-decoration: none;
  transition: color 0.3s;
  margin-left: 40px; /* Ajoutez l'espace souhaité entre les éléments du menu */
  
  }
  
  .menu-item:hover {
  color: #ffffff;
  }
  
  .logo-container {
  display: flex;
  align-items: center;
  }
  
  .logo {
  max-width: 200px;
  height: auto;
  }
  
  .search-card {
  /* Vos styles pour la carte de recherche */
  background-color: rgba(255, 255, 255, 0.112);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 10%;
  }
  
  
  .search-options {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  }
  .option {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: auto;
  transition: background-color 0.3s;
  }
  .search-form {
  /* Vos styles pour le formulaire de recherche */
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin-top: 10px;
  width: 100%;
  margin-left: 10px;
  gap: 30px;
  }
  
  
  .option.active {
  background-color: #ff89bb; /* Couleur de mise en évidence de l'option active */
  color: #fff;
  }
  
  /* Montrez le formulaire de recherche lorsque l'option est active */
  
  
  .location-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  }
  
  .center-input {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
  }
  
  .select-container {
  display: flex;
  align-items: center;
  margin-top:30px;
  }
  
  .select-container label {
  margin-right: 10px;
  }
  
  select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  }
  .card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Fond de carte transparent */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  }
  
  .icon {
  font-size: 18px;
  color: #333;
  margin-right: 8px;
  }
  
  .center-input, .select-input {
  border: none;
  outline: none;
  flex: 1;
  }
  
  
  .input-container:hover {
  border-color: #dd637a; /* Couleur de la ligne de séparation au survol */
  }
  
  .select-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
  
  .search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #dd637a;
  border-radius: 100px;
  box-shadow: 0px 1px 2px 0px rgba(31, 41, 55, 0.08);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  margin-left: auto; ///////////////Ajoutez cette ligne pour déplacer le bouton à droite */
  
  }
  
  .search-icon {
  width: 20px;
  height: 21px;
  fill: none;
  stroke: #f4dada;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s;
  }
  
  .search-button:hover {
  background-color: #f4dada;
  transform: scale(1.05);
  box-shadow: 0px 4px 8px rgba(31, 41, 55, 0.1);
  }
  
  .search-button:hover .search-icon {
  stroke: #dd637a;
  }
  .bg2 {
  background: rgba(255, 192, 203, 0.308); /* Fond rose avec opacité */
  /* ... (autres styles existants) ... */
  }
  
  
  /* Média query pour les petits écrans */
  @media (max-width: 768px) {
  .frame-2 {
    padding: 5px; /* Ajustements pour les écrans plus petits */
  }
  }
  .footer {
  background-color: #ffbadf7e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  }
  
  .copy-right-bg {
  height: 20px;
  background-color: #ffbadf;
  }
  
  .footer-bg {
  height: 40px;
  background-color: #ffa3c3bb;
  margin-top: 20px;
  }
  
  .privacy, .terms {
  margin-top: 20px;
  font-weight: bold;
  }
  
  .privacy {
  color: #e364a5;
  }
  
  .terms {
  color: #d33b77;
  }
  
  .copyright-by-zina-design-all-right-reserved {
  margin-top: 20px;
  font-size: 12px;
  color: #a33f6f;
  }
  
  .posuere-urna-nec-tincidunt-praesent-egestas-maecenas-pharetra-convallis-posuere-ipsum-nunc {
  margin-top: 20px;
  font-size: 14px;
  color: #8e2b59;
  }
  
  .line-4, .line-3 {
  width: 100%;
  height: 2px;
  background-color: #ffbadf;
  margin: 20px 0;
  }
  
  .social-media {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  }
  
  .instagram, .linkedin, .twitter, .facebook {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  }
  
  .instagram:hover, .linkedin:hover, .twitter:hover, .facebook:hover {
  background-color: #f1f1f1;
  }
  
  .logo2 {
  max-width: 200px;
  height: auto;
  background-color: #5c335281;
  }
  
  .menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  }
  
  .menu div {
  font-size: 14px;
  color: #8e2b59;
  cursor: pointer;
  }
  
  @media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }
  
  .social-media {
    margin-top: 10px;
  }
  
  .logo2 {
    margin-top: 10px;
  }
  }
  .inputcal-container {
  display: flex;
  align-items: center;
  background-color: #f0e1e1;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  
  
  .date-dropdown {
  top: calc(100% + 10px);
  left: 0;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(51, 38, 110, 0.1);
  z-index: 2;
  min-width: 220px;
  }
  
  .date-dropdown.show {
  display: block;
  animation: fadeInDown 0.3s ease-in-out;
  }
  
  .options {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  }
  
  .optioncal {
  background-color: #b6d6ecd0;
  color: rgba(0, 0, 0, 0.815);
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  }
  
  /* Ajoutez une animation innovante au survol */
  .optioncal:hover {
  background-color: #2980b9;
  transform: scale(1.05);
  }
  
  .calendar {
  padding: 10px;
  display: none;
  }
  
  .calendar.show {
  display: block;
  }
  
  .time-slots {
  padding: 10px;
  display: none;
  }
  
  .time-slots.show {
  display: block;
  }
  
  @keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  }
  .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
  }
  .block:last-child {
  border-right: none;
  }
  .block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
  }
  .icon3 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  }
  .card {
  width: 400px;
  height: 400px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  }
  .map-card {
  width: 100%;
  height: 100%;
  }
  
  .map-dialog {
    position: absolute;
    top: 60%;
    left: 83%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  
  .coiffure-modal {
  position: relative;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  
  }
  
  .coiffure-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  }
  
  .coiffure-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  }
  
  .coiffure-item:hover {
  background-color: #f5f5f5;
  }
  
  .coiffure-image {
  width: 50px; /* Ajustez la taille de l'image selon vos préférences */
  height: 50px;
  margin-left: auto; /* Déplacez l'image à droite du texte */
  }
  .coiffure-dropdown-container {
  top: 100%;
  left: 0;
  /* Ajoutez d'autres styles selon vos besoins */
  }
  .search-result {
  background-color: rgba(255, 255, 255, 0.934);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 10%;
  }
  
  /* Styling for each search result card */
  .search-cardr {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px; /* Adjust card width as needed */
  }
  
  .card-image img {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  }
  
  .card-content {
  padding: 20px;
  }
  
  .card-title {
  font-size: 18px;
  margin: 0;
  color: #333333;
  }
  
  .card-description {
  margin: 10px 0;
  color: #777777;
  }
  
  .card-price {
  font-size: 16px;
  margin: 10px 0;
  color: #000;
  }
  
  .card-status {
  font-size: 14px;
  margin: 0;
  }
  
  .open {
  color: green;
  }
  
  .closed {
  color: red;
  }
  
  .service-detail{
  color: #2980b9;
  }
  .service-list {
  list-style: none;
  padding: 0;
  color: #333;
  }
  
  .service-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
  }
  
  .service-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
  
  .service-name {
  font-size: 18px;
  }
  
  .details-toggle {
  font-size: 16px;
  transition: transform 0.3s;
  }
  
  .details-toggle.open {
  transform: rotate(180deg);
  }
  
  .service-details {
  background-color: #f9f9f9;
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  }
  
  .service-description {
  font-size: 14px;
  }
  
  .service-price {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  }
  
  .service-buttons {
  margin-top: 10px;
  }
  
  button {
  background-color: #009688;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  }
  
  button:hover {
  background-color: #007d72;
  }
  
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
  opacity: 0;
  }
  .dropdown-content {
  position: absolute;
  top: 100%;
  left: auto;
  right: 5%;
  background-color: #ffffff;
  border: 2px solid #0a0a0a;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: -1;
  width: 100%;
  max-width: 240px;
  align-items: center; /* Center horizontally */
  justify-content: center; 
  }
  </style>