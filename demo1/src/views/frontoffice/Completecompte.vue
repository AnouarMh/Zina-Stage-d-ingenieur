<template>
    <div class="welcome-back">
      <div class="photo">
  <img class="photo2" src="/media/logos/martin-martz-5bWWxcpAjZ4-unsplash.jpg" />
  <a class="close-icon" href="/home">
    <svg
      class="close-icon-svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6L6 19M6 6L19 19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</div>

      <div class="frame">
        <div class="headline">
          <div class="headline2">Bienvenue Chez Nous {{ admin.nom}} 😊</div>
        </div>
        <div class="center-content">
    <div class="card detailuser" v-if="admin">
      <div class="photodeprofil">
        <img
          :src="admin.image"
          alt="image"
          class="cercle"
        />
      </div>
      <div class="badge badge-light-success d-inline">{{admin.nom}}</div>
      <div
        href="#"
        class="Nominfo"
      >
    Nom & Prénom :
      </div>
      <div
        href="#"
        class="NominfoDetail"
      >
        {{ admin.nom }}
        {{ admin.prenom }}
      </div>
      <div
        href="#"
        class="Nominfo"
      >
    Email :
      </div>
      <div
        href="#"
        class="NominfoDetail"
      >
        {{ admin.email }}
      </div>
      <div
        href="#"
        class="Nominfo"
      >
    Numéro de Telephone :
      </div>
      <div
        href="#"
        class="NominfoDetail"
      >
        {{ admin.numerotel }}
      </div>
      <div
        href="#"
        class="Nominfo"
      >
    Pays :
      </div>
      <div
        href="#"
        class="NominfoDetail"
      >
        {{ admin.country}}
      </div>
    </div>
  </div>
      
      </div>
      <div class="headline-description">
        <div class="card-body  p-12 ">
            <div class="row justify-content-center mb-1">
              <label class="form-label fw-light text-white -white">
              Photo de Profil</label
            >
            <div class="col-lg-8">
                <div
                class="image-input image-input-outline"
                data-kt-image-input="true"
                :style="{
                  backgroundImage: ` url(${admin.image
                    ? admin.image
                    : '/assets/media/logos/martin-martz-5bWWxcpAjZ4-unsplash.jpg'})`,
                }"
              >
                <!--begin::Preview existing avatar-->
                <div
                  class="image-input-wrapper w-125px h-125px"
                  :style="{
                    backgroundImage: ` url(${admin.image
                      ? admin.image
                      : '/assets/media/logos/blank.png'})`,
                  }"
                ></div>
                <!--end::Preview existing avatar-->

                <!--begin::Label-->
                <label
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>

                  <!--begin::Inputs-->
                  <input type="file" name="image" @change="onImageSelected"  />
                  <!-- <input type="hidden" name="avatar_remove" /> -->
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->

                <!--begin::Remove-->
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  @click="removeImage()"
                  title="Remove avatar"
                >
                  <i class="bi bi-x fs-2"></i>
                </span>
                <!--end::Remove-->
              </div>
              <div class="form-text">Allowed file types: png, jpg, jpeg.</div>

            </div>
            </div>
            <div class="row mb-4">
            <!--begin::Label-->
            <label class="form-label fw-light text-white -white"
              >Nom & Prenom</label
            >

            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                    type="text"
                    name="fname"
                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="First name"
                    v-model="admin.nom"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="fname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <Field
                    type="text"
                    name="lname"
                    class="form-control form-control-lg form-control-solid"
                    placeholder="Last name"
                    v-model="admin.prenom"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="lname" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-4">
            <!--begin::Label-->
            <label class="form-label fw-light text-white -white">
            <span class="required">Email</span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Email must be active"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="tel"
                name="email"
                class="form-control form-control-lg form-control-solid"
                placeholder="Email"
                v-model="admin.email"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-4">
            <!--begin::Label-->
            <label class="form-label fw-light text-white -white">
            <span class="required">N°Telephone</span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="tel"
                name="phone"
                class="form-control form-control-lg form-control-solid"
                placeholder="Phone number"
                v-model="admin.numerotel"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-4">
            <!--begin::Label-->
            <label class="form-label fw-light text-white -white">
              <span class="required">Pays</span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Country of origination"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="country"
                class="form-select form-select-solid form-select-lg fw-semobold"
                v-model="admin.country"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option ue="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="KR">South Korea</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Vietnam</option>
                <option value="VI">Virgin Islands</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="country" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="frame2">
          <button class="icon-text-button-stroke">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
<radialGradient id="4aLeIKTx_D92AOSozBo6ra_119135_gr1" cx="32.5" cy="31.5" r="30.516" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"></stop><stop offset=".193" stop-color="#bbf1ff"></stop><stop offset=".703" stop-color="#d7f8ff"></stop><stop offset="1" stop-color="#e1faff"></stop></radialGradient><path fill="url(#4aLeIKTx_D92AOSozBo6ra_119135_gr1)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24 C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23 c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="4aLeIKTx_D92AOSozBo6rb_119135_gr2" x1="32" x2="32" y1="64.025" y2="14.025" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#155cde"></stop><stop offset=".278" stop-color="#1f7fe5"></stop><stop offset=".569" stop-color="#279ceb"></stop><stop offset=".82" stop-color="#2cafef"></stop><stop offset="1" stop-color="#2eb5f0"></stop></linearGradient><path fill="url(#4aLeIKTx_D92AOSozBo6rb_119135_gr2)" d="M57,31c0,13.805-11.195,25-25,25S7,44.805,7,31S18.195,6,32,6S57,17.195,57,31z"></path><path fill="#fff" d="M25.878,18.878C25.312,19.444,25,20.197,25,20.998c0.01,0.85,0.313,1.556,0.88,2.123l7.888,7.87 l-7.876,7.891c-1.167,1.168-1.165,3.07,0.003,4.239c0.567,0.567,1.321,0.879,2.123,0.879c0.802,0,1.556-0.313,2.123-0.881 l9.995-10.011c0.583-0.584,0.875-1.352,0.875-2.119c0-0.769-0.293-1.538-0.878-2.122l-10.01-9.992 C28.95,17.707,27.047,17.708,25.878,18.878z"></path>
</svg>
            </div>
            <div class="log-in-with-google">Continuer</div>
          </button>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2";
import * as Yup from "yup";
import {  onMounted } from 'vue';
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
interface ProfileDetails {
  avatar: string;
  name: string;
  surname: string;
  numerotel: string;
  company: string;
  contactPhone: string;
  companySite: string;
  country: string;
  language: string;
  timezone: string;
  currency: string;
  communications: {
    email: boolean;
    phone: boolean;
  };
  allowMarketing: boolean;
}
  export default {
    name: "Signup",
    components: {
    ErrorMessage,
    Field,
    VForm,
  },
    props: {},
    
    setup() {
    const store = useAuthStore();
    const admin = ref(store.user);
    const submitButton1 = ref<HTMLElement | null>(null);
    const submitButton2 = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);
    const imageFile = ref<File | null>(null);

    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);

    const profileDetailsValidator = Yup.object().shape({
      // fname: Yup.string().required().label("First name"),
      // lname: Yup.string().required().label("Last name"),
      // company: Yup.string().required().label("Company"),
      // phone: Yup.string().required().label("Contact phone"),
      // website: Yup.string().label("Webside"),
      // country: Yup.string().required().label("Country"),
      // language: Yup.string().required().label("Language"),
      // timezone: Yup.string().required().label("Timezone"),
      // currency: Yup.string().required().label("Currency"),
    });

    const changeEmail = Yup.object().shape({
      emailaddress: Yup.string().required().email().label("Email"),
      confirmemailpassword: Yup.string().required().label("Password"),
    });

   
    const changePassword = Yup.object().shape({
      currentpassword: Yup.string().required().label("Current password"),
      newpassword: Yup.string().min(4).required().label("Password"),
      confirmpassword: Yup.string()
        .min(4)
        .required()
        .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
        .label("Password Confirmation"),
    });

    const profileDetails = ref<ProfileDetails>({
      avatar: getAssetPath("/media/avatars/blank.pngg"),
      name: "Max",
      surname: "Smith",
      company: "Keenthemes",
      contactPhone: "044 3276 454 935",
      companySite: "keenthemes.com",
      country: "MY",
      numerotel: "123456789",
      language: "msa",
      timezone: "Kuala Lumpur",
      currency: "USD",
      communications: {
        email: false,
        phone: false,
      },
      allowMarketing: false,
    });

    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton1.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges2 = () => {
      if (submitButton2.value) {
        // Activate indicator
        submitButton2.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton2.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges3 = () => {
      if (submitButton3.value) {
        // Activate indicator
        submitButton3.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton3.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges4 = () => {
      if (submitButton4.value) {
        // Activate indicator
        submitButton4.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton4.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const deactivateAccount = () => {
      if (submitButton5.value) {
        // Activate indicator
        submitButton5.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton5.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Email is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            emailFormDisplay.value = false;
          });
        }, 2000);
      }
    };
    const updateAdmin = async ()=>{
      try {
        const adminDataToUpdate={
          nom : admin.value.nom,
          prenom : admin.value.prenom,
          email: admin.value.email,
          password: admin.value.password,
          numero_telephone: admin.value.numerotel,
          country :admin.value.country,
          // image:admin.value.image,
        }
    //     console.log("adminDataToUpdate", adminDataToUpdate);
        const formData = new FormData();
        if (imageFile.value) {
      formData.append('image', imageFile.value);
    }
    formData.append("nom", adminDataToUpdate.nom);
    formData.append("prenom", adminDataToUpdate.prenom);
    formData.append("numerotel", adminDataToUpdate.numero_telephone);
    formData.append("country", adminDataToUpdate.country);    
   
        const response = await axios.post(
      `http://localhost:8000/api/superadmin/update/${admin.value.id}`,
      formData,
    // Utilisez formData pour envoyer les données
    // formData,
        );
        //afficher un message de succès
        Swal.fire({
          text: "Votre profil a été mis à jour avec succès.",
          icon: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-light-primary",
          },
        }).then(() => {
          // Fermez le modal
          emailFormDisplay.value = false;
          passwordFormDisplay.value = false;
        });
    }catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
        // Affichez un message d'erreur (vous pouvez personnaliser le message selon vos besoins)
        Swal.fire({
          text: "Une erreur s'est produite lors de la mise à jour du profil.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    };

    const updateEmail = () => {
      if (updateEmailButton.value) {
        // Activate indicator
        updateEmailButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updateEmailButton.value?.removeAttribute("data-kt-indicator");

          emailFormDisplay.value = false;
        }, 2000);
      }
    };

    const updatePassword = () => {
      if (updatePasswordButton.value) {
        // Activate indicator
        updatePasswordButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updatePasswordButton.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Password is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            passwordFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const removeImage = () => {
     //mettre une image par défaut
      admin.value.image = "http://localhost:8000/storage/images/admins/default.png";
      
    };

    onMounted(async () => {
      try {
        const response = await store.getAdminData();
         admin.value = response; // Msise à jour de la variable locale avec les données de l'administrateur
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    });
    const onImageSelected = (event: Event) => {
  const file = (event.target as HTMLInputElement).files![0];
 
  // Vérifiez que le fichier sélectionné est une image
  if (file ) {
    const reader = new FileReader();
    reader.onload = () => {
      // Mettez à jour la variable locale avec le contenu de l'image
     admin.value.image = reader.result as string;
    };
    reader.readAsDataURL(file);

    imageFile.value = file;
  } else {
    // Affichez un message d'erreur si le fichier sélectionné n'est pas une image
    Swal.fire({
      text: "Le fichier sélectionné n'est pas une image valide (png, jpg, jpeg).",
      icon: "error",
      confirmButtonText: "Ok",
    });
    // Réinitialisez le champ "image" en cas d'erreur
    (event.target as HTMLInputElement).value = '';
    imageFile.value = null;
  }
};

    

    return {
      submitButton1,
      submitButton2,
      submitButton3,
      submitButton4,
      submitButton5,
      saveChanges1,
      saveChanges2,
      saveChanges3,
      saveChanges4,
      deactivateAccount,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      removeImage,
      profileDetailsValidator,
      changeEmail,
      changePassword,
      updateEmailButton,
      updatePasswordButton,
      updateEmail,
      updatePassword,
      getAssetPath,
      admin,
      updateAdmin,
      imageFile,
      onImageSelected,

    };
  },
    methods:{
      handleClick () {
        this.$router.push('/signin')
      },
      handleRightArrowClick () {
        this.$router.push('/signup')
      },
      togglePasswordVisibility() {
      const passwordInput = this.$el.querySelector('.input-field2'); // Utilisez this.$el pour cibler dans la portée du composant
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    },
    toggleConfPasswordVisibility(){
      const passwordInput = this.$el.querySelector('.input-field4'); 
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    },
    }
  };
  </script>
  <style scoped>
  .welcome-back,
  .welcome-back * {
    box-sizing: border-box;
  }
  .welcome-back {
    background: #ffffff;
    width: 100%;
    height: 786px;
    position: relative;
    overflow: hidden;
  }
  .photo {
  width: 100%; /* Utilisation de pourcentage pour s'adapter à la largeur de l'écran */
  max-width: 600px; /* Limiter la largeur maximale pour les grands écrans */
  height: auto; /* Hauteur automatique pour conserver le ratio */
  position: relative;
  right: 0;
  left: 50%; /* Décalage à 50% pour centrer le contenu */
  transform: translateX(-50%); /* Centrage horizontal */
  top: 0%; /* Centrage vertical */
  transform: translateY(-50%);
  }
  .photo2 {
    width: 140%; /* Utilisation de pourcentage pour s'adapter à la largeur du conteneur */
  height: auto; /* Hauteur automatique pour conserver le ratio */
  position: absolute;
  left: 0;
  top: 0;
  }
  .arrow-link {
  text-decoration: none;
  cursor: pointer;
}

.arrow-left-32-px {
  width: 32px;
  height: 32px;
  position: absolute;
  left: 52%; /* Utilize percentage for responsiveness */
  top: 82%; /* Center vertically */
  transform: translateY(-50%);
  
}
.arrow-right-32-px {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 55%;
    top: 80%;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
  }


.ellipse {
  border-radius: 50%;
  border-style: solid;
  border-color: #fbfbfb;
  border-width: 2px;
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
}
.arrow-left,
.arrow-right {
  position: absolute;
  left: 4px;
  top: 4px;
  overflow: visible;
}
.frame {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Ajustez l'espacement vertical pour les écrans plus petits */
  align-items: flex-start; /* Centrez horizontalement pour les écrans plus petits */
  justify-content: flex-start;
  position: absolute;
  left: 5%; /* Utilisez un pourcentage pour la position horizontale */
  top: 5%; /* Utilisez un pourcentage pour la position verticale */
  width: 90%; /* Utilisez un pourcentage pour la largeur */
  padding: 32px; /* Ajoutez un espace intérieur pour les écrans plus petits */
}

.headline {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%; /* Ajustez la largeur pour occuper tout l'espace */
  position: relative;
  left: 0%; /* Utilisez un pourcentage pour la position horizontale */
  top: 0%; /* Utilisez un pourcentage pour la position verticale */
  width: 100%; /* Utilisez un pourcentage pour la largeur */
  padding: 10px; 
}

.headline2 {
  color: #000000cc;
  text-align: center;
  font: var(--headline, 500 40px "Figtree", sans-serif); /* Ajustez la taille de la police */
  position: relative;
}

/* Styles responsifs */
@media (max-width: 1024px) {
  .frame {
    gap: 16px; /* Ajustez l'espacement vertical pour les écrans encore plus petits */
    padding: 16px; /* Ajustez l'espace intérieur pour les écrans encore plus petits */
  }

  .headline2 {
    font-size: 32px; /* Ajustez la taille de la police pour les écrans plus petits */
  }
}
  .frame2 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.input-field {
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-width: 1px;
  padding: 14px 10%; /* Ajustez le padding en pourcentage */
  max-width: 80%; /* Ajustez la largeur maximale en pourcentage */
  left: 10%; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  width: 450px;
  margin-bottom: 30px;

}
@media (max-width: 1024px) {
  .input-field {
    padding: 10px; /* Ajustez le padding pour les écrans plus petits */
    max-width: 50%; /* Ajustez la largeur maximale pour les écrans plus petits */
    left: 0; /* Réinitialisez la position */
  }
}

.input-field2 {
  flex: 1; /* Allow the input to take remaining horizontal space */
  color: rgb(0, 0, 0);
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  border: none; /* Remove the border from the input */
  outline: none; /* Remove the default outline */
  padding: 0; /* Remove padding to prevent extra spacing */
  position: relative;
}
.input-field3 {
  flex: 1; /* Allow the input to take remaining horizontal space */
  color: rgb(0, 0, 0);
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  border: none; /* Remove the border from the input */
  outline: none; /* Remove the default outline */
  padding: 0; /* Remove padding to prevent extra spacing */
  position: relative;
}
.input-field4 {
  flex: 1; /* Allow the input to take remaining horizontal space */
  color: rgb(0, 0, 0);
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  border: none; /* Remove the border from the input */
  outline: none; /* Remove the default outline */
  padding: 0; /* Remove padding to prevent extra spacing */
  position: relative;
}
.toggle-password {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%; /* Centrer verticalement */
  right: 10px; /* Positionner à droite */
  transform: translateY(-50%);
}

.eye-icon {
  width: 20px;
  height: 20px;
  fill: #9b9b9b;
}
  
  .left-aligned-link-button {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.link {
  color: #000000;
  text-align: left;
  font: var(--link, 500 13px "Figtree", sans-serif);
  text-decoration: underline;
  position: relative;
}

/* Styles responsifs */
@media (max-width: 1024px) {
  .left-aligned-link-button {
    justify-content: flex-start; /* Ajustez l'alignement pour les écrans plus petits */
  }}
  .frame4 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .text-button {
  background: #000000;
  border-style: solid;
    border-color: #b4aaaa;
  border-radius: 10px;
  padding: 10px 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%; /* Utilisez la largeur totale disponible */
  max-width: 370px; /* Limitez la largeur maximale pour les grands écrans */
  height: 60px;
  position: relative;
}

.button {
  color: #ffffff;
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.signin-icon {
  width: 20px;
  height: 20px;
  fill: #ffffff;
}
  .description-link {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 400px;
    position: relative;
  }
  .description {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .description2 {
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    font: var(--small-descrirtiontext, 500 13px "Figtree", sans-serif);
    position: relative;
  }

  
  .text {
    color: #ffffff;
    text-align: left;
    font: var(--body, 500 17px "Figtree", sans-serif);
    position: relative;
  }
  .icon-text-button-stroke {
    background: #ffffff;
    border-style: solid;
    border-color: #000000;
  border-radius: 10px;
  padding: 10px 90px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%; /* Remplir la largeur du conteneur parent */
  max-width: 400px; /* Limiter la largeur maximale */
  position: relative;
  left: 40px;
  }
  .logo {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
  }
  .logo2 {
    position: absolute;
    left: 4px;
    top: 4px;
    overflow: visible;
  }
  .log-in-with-google {
    color: #000000;
    text-align: center;
    font: var(--body, 500 17px "Figtree", sans-serif);
    position: relative;
  }
  .headline-description {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 51%; /* Utilize percentage for responsiveness */
  top: 10%; /* Utilize percentage for responsiveness */
  max-width: 90%; /* Limit the maximum width for larger screens */
}

.headline4 {
  color: #ffffff;
  text-align: left;
  font: var(--headline, 500 4em "Figtree", sans-serif); /* Adjust font size using em units */
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top: 10%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
}

.description3{
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%; /* Full width for responsiveness */
  left: 0%; /* Utilize percentage for responsiveness */
  top:0%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
  
}
.description5 {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top:85%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
  
}

.description4 {
  color: #ffffff;
  text-align: left;
  font: var(--description, 400 1.5em "Figtree", sans-serif); /* Adjust font size using em units */
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top: 60%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
}
.close-icon {
  position: absolute;
  top: 10px;
  left: 730px;
  width: 100%;
  max-width: 300px;
  height: 90px;
  cursor: pointer;
  z-index: 1; /* Mettre l'icône au-dessus de l'image */
}

.close-icon-svg {
  fill: #000000;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; /* Ajustez la hauteur selon vos besoins */
  width: 50vh;
}

.card {
  background-color: #f4f4f4; /* Couleur de fond de la carte */
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgb(124, 27, 236);
  /* Ajoutez d'autres styles innovants ici */
  gap: 10px;
  top: 150px;
  left: 50px;
  width: 100%;
  max-width: 400px;

}

.photodeprofil {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto; /* Centre la photo de profil horizontalement */
}

.cercle {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.form-control {
  color: rgb(92, 130, 185); /* Change la couleur du texte en blanc */
  /* Autres styles de la classe form-control ici */
}
.Nominfo {
  font-size: 16px; /* Taille de la police */
  font-weight: bold; /* Gras */
  color: #437bce; /* Couleur du texte */
  text-decoration: none; /* Pas de soulignement */
  padding-bottom: 0px; /* Espacement entre le texte et la ligne */
  display: inline-block; /* Pour que la largeur soit basée sur le contenu */
  /* Ajoutez d'autres styles innovants ici */

}
.NominfoDetail{
    font-size: 18px; /* Taille de la police */
  font-weight: bold; /* Gras */
  color: #4c595f; /* Couleur du texte */
  text-decoration: none; /* Pas de soulignement */
  border-bottom: 2px solid #654980b9; /* Ligne en dessous du texte */
  padding-bottom: 0px; /* Espacement entre le texte et la ligne */
  display: inline-block; /* Pour que la largeur soit basée sur le contenu */
  /* Ajoutez d'autres styles innovants ici */ 
}
  </style>
  