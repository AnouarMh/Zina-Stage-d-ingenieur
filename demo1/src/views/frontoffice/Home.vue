<template>
  <div class="home">
    <div class="hero-section">
      <div class="video-container">
        <video autoplay loop muted playsinline class="video-bg">
          <source src="/media/logos/Beige White Elegant Minimalist SPA Care Video.mp4" type="video/mp4">
        </video>
        <div class="play-button" @click="toggleVideo">
  <i class="fas fa-play" v-if="!videoPlaying"></i>
  <i class="fas fa-pause" v-else></i>
</div>
      </div>
      <div class="header">
        <div class="logo-container">
          <img class="logo" :src="isMobile ? '/media/logos/zina-removebg-preview.png' : '/media/logos/zina-removebg-preview.png'" />
        </div>
        <div class="button">
          <button class="bg" v-show="!hasIdToken" >
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
      <router-link to="/profileClient" class="custom-centered">
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

    </div>
    <div class="section-3">
    <div class="image-container">
    <img class="ellipse-2" src="/media/logos/beaute_domicile.jpg" />
  </div>
  <div class="content-container">
    <div class="blending-creativity-and-functionality-in-every-design">
      Plateforme de réservation en Ligne
    </div>
    <div class="button-1">
      <a class="hire-us-now"  href="/#/Service">Voir plus 😊

      </a>
    </div>
  </div>
</div>
<div class="search-bar">
  <div class="search-options">
    <div class="option" :class="{ active: searchOption === 'etablisement' }" @click="toggleSearchOption('etablisement')">Rechercher par établissement</div>
    <div class="option" :class="{ active: searchOption === 'service' }" @click="toggleSearchOption('service')">Rechercher par prestation</div>
  </div>
  <div class="search-form">
    <form>
      <div class="search-by-establishment" v-if="searchOption === 'etablisement'">
  <!-- Option de recherche par établissement -->
  <div class="location-input">
    <div class="card-container">
      <div class="input-container">
        <i class="fas fa-store icon"></i>
        <input type="text" placeholder="Nom du centre" class="center-input" v-model="nometablisement" />
      </div>
      <div class="input-container">
        <i class="fas fa-globe icon"></i>
        <select id="countrySelect" v-model="selectedCountry" class="select-input">
          <option  disabled>Sélectionnez un pays</option>
          <option v-for="country in countries" :value="country.name">{{ country.name }}</option>
        </select>
      </div>
      <div class="input-container" v-if="selectedCountry">
        <i class="fas fa-map-marker-alt icon"></i>
        <select id="citySelect" v-model="selectedCity"  class="select-input">
          <option value="" disabled>Sélectionnez une ville</option>
          <option v-for="city in selectedCountryCities(selectedCountry)" :value="city">{{ city }}</option>
        </select>
      </div>
      <div class="search-button" @click="searchByEtablissement">
  <svg
    class="search-icon"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0418 16.5416L12.9168 13.4166M3.9585 9.66665C3.9585 6.79016 6.29035 4.45831 9.16683 4.45831C12.0433 4.45831 14.3752 6.79016 14.3752 9.66665C14.3752 12.5431 12.0433 14.875 9.16683 14.875C6.29035 14.875 3.9585 12.5431 3.9585 9.66665Z"
      stroke="#F4DADA"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
    </div>
  </div>
</div>


<div class="search-by-service" v-if="searchOption === 'service'">
  <div class="card-container">

  <!-- Option de recherche par prestation -->
  <div class="input-container">
    <i class="fas fa-cut icon"></i>
    <input type="text" placeholder="Nom de la prestation" class="input" />
  </div>
  <div class="input-container">
      <i class="fas fa-map-marker-alt icon"></i>
      <input
        type="text"
        placeholder="Localisation"
        class="input"
        v-model="selectedLocation"
      />
      <i class="fas fa-crosshairs icon" @click="getUserLocation"></i>
      <i class="fas fa-map icon" @click="openMapModal"></i>
    </div>
    <div v-if="isMapModalOpen" class="map-dialog">
      <i class="fas fa-times-circle close-icon" @click="closeMapModal"></i>
      <div class="card">
        <l-map
          ref="map"
          v-model:zoom="zoom"
          v-model:center="center"
          :useGlobalLeaflet="false"
          @click="handleMapClick"
          class="map-card"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker :lat-lng="clickedLocation" v-if="clickedLocation"></l-marker>
        </l-map>
      </div>
    </div>

  <div class="inputcal-container">
    <i class="fas fa-calendar-alt icon"></i>
    <input
      type="texte"
      placeholder="Date de rendez-vous"
      class="input"
      readonly
      @click="toggleDropdown"
      v-model="selectedDate"
      :format="dateFormat"

    />
    <div class="date-dropdown" v-if="showDropdown">
      <div class="options">
        <div class="option optioncal" @click="selectToday">Aujourd'hui</div>
        <div class="option optioncal" @click="selectTomorrow">Demain</div>
        <div class="option optioncal" @click="selectAnytime">À tout moment</div>
        <div class="option optioncal" @click="toggleCalendar">Choisir une date</div>
      </div>
     
  
      <div  v-if="showCalendar">
        <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
        v-model="selectedDate"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
  </div>
                  </div>
      <div  v-if="showTimeSlots">
        <el-date-picker
        v-model="selectedDate"
        type="hours"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />   </div>
    </div>
  </div>
  <div class="search-button">
  <svg
    class="search-icon"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0418 16.5416L12.9168 13.4166M3.9585 9.66665C3.9585 6.79016 6.29035 4.45831 9.16683 4.45831C12.0433 4.45831 14.3752 6.79016 14.3752 9.66665C14.3752 12.5431 12.0433 14.875 9.16683 14.875C6.29035 14.875 3.9585 12.5431 3.9585 9.66665Z"
      stroke="#F4DADA"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
  </div>
</div>
     </form>
  </div>
</div>
<div class="bg2">
  <div class="section-8">
    <div class="line-separator"></div>
    <div class="_3">
  <template v-for="(item, index) in myData">
    <template v-if="index === 2">
      <img class="rectangle-15" :src="item.image" @click="reserveService(item.id)"/>
      <div class="posuere-urna-nec-tincidunt-praesent-egestas-maecenas">
{{ item.nom }}    </div>
    </template>
  </template>
</div>
    <div class="_2" >
      <template v-for="(item, index) in myData">
    <template v-if="index === 1">
      <img class="rectangle-15" :src="item.image" @click="reserveService(item.id)" />
      <div class="posuere-urna-nec-tincidunt-praesent-egestas-maecenas">
{{ item.nom }}    </div>
    </template>
  </template>
    </div>
    <div class="_1">
      
      <template v-for="(item, index) in myData">
    <template v-if="index === 0">
      <img class="rectangle-15" :src="item.image" @click="reserveService(item.id)" />
      <div class="posuere-urna-nec-tincidunt-praesent-egestas-maecenas">
{{ item.nom }}    </div>
      <div class="button3">
      </div>
    </template>
  </template>
    </div>

    <div class="the-latest-article">The latest article</div>
    <div class="blog">BLOG</div>
  
  </div>
  <div class="section-9">
  <div class="frame-2">
    <div class="newsletter">Latest News</div> <!-- Modifier le texte de la newsletter -->
<div class="enter-your-email">
      <input type="email" placeholder="Enter your email" class="email-input"> <!-- Nouvelle entrée pour l'adresse e-mail -->
    </div>
    <div class="button4">
      <div class="bg3"></div>
      
      <button class="subscribe-button">Subscribe</button> <!-- Utilisation d'un bouton HTML -->
    </div>
    <div class="line-2"></div>
    
  </div>
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

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer,LMarker  } from "@vue-leaflet/vue-leaflet"

import arcades from "@/core/config/arcades.json"

import { ref } from 'vue'
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, computed } from "vue";
import KTSearch from "@/layouts/main-layout/search/Search.vue";
import KTNotificationMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
import { useThemeStore } from "@/stores/theme";
import { useAuthStore } from "@/stores/auth";
import {  onMounted } from 'vue';
import { useRouter } from "vue-router"; // Importez le routeur de Vue Router

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
 
  name: 'Home',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    RouterLink,


  },
  
  
  setup() {
    const storeauth = useAuthStore();
    const admin = ref(storeauth.user)
    const store = useThemeStore();
    const router = useRouter();
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
    selectedCountry: '',
    selectedCity: '',
    nometablisement: '', // Use the correct property name

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
      isDropdownOpen: false,

    };
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
        const response = await axios.get('/clients/get3LastService');
        this.myData = response.data;
        console.log(this.myData);
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
  async searchByEtablissement() {
  const dataform = {
    nom: this.nometablisement,
    localisation: `${this.selectedCity}`,
  };
  
  try {
    const response = await axios.get('/clients/searchbyetab', {
      params: dataform
    });
  
    // Handle the response, e.g., update the search results
    this.searchResults = response.data; 
    console.log(response.data);
  
    this.$router.push({
      name: 'search',
      query: { results: JSON.stringify(this.searchResults),
        nom: this.nometablisement,
        localisation: `${this.selectedCity}`},
      
    });
    // Assuming you have a data property for search results
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
},
async searchByCategory(category) {
      // Redirigez l'utilisateur vers la page de recherche avec la catégorie comme paramètre d'URL
      this.$router.push({ name: 'search', query: { category: category } });
    },


  },
};
</script>

<style scoped lang="scss">
.home,
.home * {
  box-sizing: border-box;
}

.home {
  max-width: 1648px;
  width: 100%;
  position: flex;
  overflow: hidden;
  margin: 0 auto;
  padding: 20px;
  background: url("/media/logos/quartz-rose-marbré-75X50.jpg") center/cover no-repeat;
}

/* Styles spécifiques pour mobile */
@media (min-width: 1020px) {
  .home {
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
  right: 0; /* Ajoutez cette ligne */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(74, 66, 66, 0.8);
  padding: 10px 0px;
  z-index: 1;
}

/* Styles spécifiques pour mobile */
.button {
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

.hero-section {
  display: flex; /* Utilisez "display: flex;" au lieu de "position: flex;" */
  max-width: 100%;
  height: auto;
  overflow: hidden;
  
}
.video-container {
  position: relative; /* Ajoutez cette ligne */
  top: 0px;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  z-index: 0;
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #fff;
  font-size: 40px;
  z-index: 2;
  transition: opacity 0.3s;
  opacity: 0.6;
}

.play-button:hover {
  opacity: 1;
}
.video-bg {
  max-width: 100%;
  max-height: auto;
  object-fit: cover;
}
.section-3 {
  display: flex;
  max-width: 1200px;
  height: auto;
  border-radius: 20px; /* Coins arrondis */
  align-items: center;
  margin-top: -20px; /* Ajustez cette valeur selon vos besoins */
  margin-left: auto; /* Centrer horizontalement */
  margin-right: auto; /* Centrer horizontalement */
  background: linear-gradient(135deg, #ecb6cd, #74d4f1); /* Utilisez vos couleurs préférées ici */
  color: #fff;
  position: relative; /* Ajoutez cette ligne pour positionner les pseudo-éléments */
  background-color: inherit; /* Héritez du fond sombre de la classe .home */
}

/* Créez les cercles d'arrière-plan */
.section-3::before,
.section-3::after {
  content: "";
  position: absolute;
  width: 400px; /* Ajustez la taille du cercle */
  height: 400px; /* Ajustez la taille du cercle */
  background: rgba(114, 14, 117, 0.1); /* Couleur du cercle */
  border-radius: 50%;
}


/* Positionnez les cercles */
.section-3::before {
  top: -100px;
  left: -100px;
}

.section-3::after {
  bottom: -100px;
  right: -100px;
}
.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ellipse-2 {
  width: 100%; /* Ajustez la largeur en pourcentage */
 /* Laissez la hauteur en auto pour maintenir les proportions */
  max-width: 250px; /* Ajoutez une limite maximale de largeur */
  height: 250px; /* Ajoutez une limite maximale de largeur */
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.7;
}

.content-container {
  flex: 0.9;
  padding: 5% 10%; /* Utilisez des pourcentages pour le rembourrage horizontal */
  max-width: 50%; /* Utilisez des pourcentages pour la taille maximale */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
}

.blending-creativity-and-functionality-in-every-design {
  color: #fcfcfc;
  font: 400 30px "Kanit", sans-serif;
  margin-bottom: 20px; /* Ajoutez un espace sous le texte */
}

.button-1 {
  text-align: left; /* Alignez le bouton à gauche */
}

.hire-us-now {
  background-color: #ffffff;
  color: #ff89bb;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font: 400 16px "Kanit", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display:flexbox;
}

.hire-us-now:hover {
  background-color: #ff89bb;
  color: #ffffff;
}
.search-bar {
  background: url("/media/logos/25437753_7094159.jpg") center/cover no-repeat;
  padding: 200px 20px;
  border-radius: 20px;
  margin-top: 0px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centrer verticalement */
  position: relative;
  transition: transform 0.5s;
}


.search-options {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;

}

.option {
  cursor: pointer;
  padding: 10px 30px;
  background-color: #ddd;
  border-radius: 30px;
  margin-right: 0px;
  margin-left: 200px;
  margin-top: auto;
  font-weight: bold;
  transition: background-color 0.3s;
}
.search-form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 200px; /* Ajustez cette valeur selon vos besoins */
  transition: opacity 0.5s;
}


.option.active {
  background-color: #ff89bb; /* Couleur de mise en évidence de l'option active */
  color: #fff;
}

/* Montrez le formulaire de recherche lorsque l'option est active */


.location-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
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
.section-8 {
  width: 100%; /* Utilisation de la largeur en pourcentage */
  max-width: 1199px; /* Définir une largeur maximale */
  height: 564px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.line-separator {
  border-style: solid;
  border-color: #212828;
  border-width: 1px 0 0 0;
  width: 1140px;
  height: 0px;
  position: absolute;
  left: calc(50% - 569.5px);
  top: 625px;
}
._3 {
  width: 363px;
  height: 406px;
  position: absolute;
  left: 777px;
  top: 119px;
}
.rectangle-15 {
  width: 100%;
  max-width: 363px;
  height: 268px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre légère */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition pour effet de survol */
}
.rectangle-15 img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajuster l'image pour remplir le rectangle */
  transition: transform 0.3s ease; /* Transition pour effet de survol */
}
.rectangle-15:hover {
  transform: translateX(-50%) scale(1.05); /* Agrandir légèrement au survol */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Augmenter l'ombre au survol */
}

.rectangle-15:hover img {
  transform: scale(1.1); /* Agrandir l'image au survol */
}


.posuere-urna-nec-tincidunt-praesent-egestas-maecenas {
  color: #080808; /* Texte en blanc pour contraster avec le fond rose */
  text-align: left;
  font: 400 16px "Nunito", sans-serif;
  position: absolute;
  left: calc(50% - 163.5px);
  top: 303px;
  width: 326px;
}
.button3 {
  width: 187px;
  height: 24px;
  position: absolute;
  left: 18px;
  top: 382px;
}
.learn-more {
  color: #ffffff;
  text-align: left;
  font: 400 16px "Kanit", sans-serif;
  position: absolute;
  left: 0px;
  top: 0px;
}
.angle-right {
  position: absolute;
  left: 50%; /* Centrer horizontalement */
  top: 5px;
  transform: translateX(-50%); /* Centrer horizontalement */
  overflow: visible;
}
._2 {
  width: 363px;
  height: 406px;
  position: absolute;
  left: 389px;
  top: 119px;
}
.angle-right2 {
  position: absolute;
  left: 173px;
  top: 5px;
  overflow: visible;
}
._1 {
  width: 363px;
  height: 406px;
  position: absolute;
  left: 0px;
  top: 119px;
}
.angle-right3 {
  position: absolute;
  left: 173px;
  top: 5px;
  overflow: visible;
}
.the-latest-article {
  color: #ffffff;
  text-align: center;
  font: 400 40px "Kanit", sans-serif;
  position: absolute;
  left: calc(50% - 219.5px);
  top: 24px;
  width: 440px;
}
.blog {
  color: #6d7d7d;
  text-align: center;
  font: 400 16px "Kanit", sans-serif;
  position: absolute;
  left: calc(50% - 29.5px);
  top: 0px;
}

.section-9 {
  width: 100%;
  max-width: 1140px;
  height: auto;
  position: relative;
  margin: 0 auto;
  padding: 40px 20px; /* Ajustements des marges intérieures */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #1b1c1d79; /* Couleur de fond */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre légère */
}

.frame-2 {
  width: 100%;
  max-width: 765px;
  height: auto;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bg3 {
  background: transparent;
  border: none;
  width: 100%;
  max-width: 229px;
  height: 39px;
  position: relative;
  cursor: pointer;
  overflow: hidden; /* Cacher le contenu débordant */
  transition: background-color 0.3s ease; /* Transition au survol */
}

.subscribe-button {
  background: #f37fd6; /* Nouvelle couleur de fond */
  border: none;
  color: #ffffff;
  font: 400 22px "Kanit", sans-serif;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
}

.subscribe-button:hover {
  background-color: #2274c2; /* Nouvelle couleur au survol */
}

.email-input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #6d7d7d;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
}

.enter-your-email {
  color: #333333;
  text-align: center;
  font: 400 16px "Nunito", sans-serif;
  margin-top: 20px;
}

.newsletter {
  color: #f8f8f8;
  text-align: center;
  font: 400 40px "Kanit", sans-serif;
  margin-top: 10px;
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
.app-navbar-item.ms-1.ms-md-20 {
  font-size: 18px; /* Increase font size */
  margin-top: 12px; /* Adjust the margin from the top */
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
.custom-centered  {
  color: #000000;
  padding: 30px; 
  font-size: 14px; /* Increase font size */
  margin-top: 15px;  /* Ajoutez d'autres styles personnalisés ici */
}
@media (max-width: 767px) {
  .dropdown-content {
    top: auto; /* Reset top position */
    bottom: 80px; /* Adjust the distance from the bottom as needed */
    right: 20px; /* Adjust the distance from the right as needed */
    width: auto; /* Allow content to determine width */
    min-width: 160px; /* Set a minimum width */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  /* Center the menu-item content */
  .menu-item {
    text-align: center;
    padding: 8px 16px; /* Adjust padding as needed */
  }
}
</style>


