<template>
    <!--begin::Layout-->
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
                {{ fournisseur.nom}}
  
              </a>
              <!--end::Name-->
              {{ fournisseur.categorie}}
  
              <!--begin::Position-->
              <div class="fs-5 fw-semobold text-muted mb-6"></div>
              <!--end::Position-->
  
              <!--begin::Info-->
              <div class="d-flex flex-wrap flex-center">
              
              </div>
              <!--end::Info-->
            </div>
            <!--end::Summary-->
  
            <!--begin::Details toggle-->
            <div class="d-flex flex-stack fs-4 py-3">
              <div
                class="fw-bold rotate collapsible"
                data-bs-toggle="collapse"
                href="#kt_customer_view_details"
                role="button"
                aria-expanded="false"
                aria-controls="kt_customer_view_details"
              >
                Details
                <span class="ms-2 rotate-180">
                  <span class="svg-icon svg-icon-3">
                    <inline-svg
                      :src="
                        getAssetPath('media/icons/duotune/arrows/arr072.svg')
                      "
                    />
                  </span>
                </span>
              </div>
  
            </div>
            <!--end::Details toggle-->
  
            <div class="separator separator-dashed my-3"></div>
  
            <!--begin::Details content-->
            <div id="kt_customer_view_details" class="collapse show"     v-if="fournisseur">
              <div class="py-5 fs-6">
                <!--begin::Badge-->
                <!--begin::Badge-->
                <!--begin::Details item-->
               
                <!--begin::Details item-->
                <!--begin::Details item-->
                <div class="fw-bold mt-5">Nom</div>
                <div class="text-gray-600">
                  <a  class="text-gray-600 text-hover-primary"
                    >{{ fournisseur.nom }}</a
                  >
                </div>
                <!--begin::Details item-->
                <!--begin::Details item-->
                
                <!--begin::Details item-->
                <!--begin::Details item-->
                <div class="fw-bold mt-5">Description</div>
                <div class="text-gray-600">{{ fournisseur.description }}</div>
                <!--begin::Details item-->
                <!--begin::Details item-->
                <div class="fw-bold mt-5">Horaire</div>
                <div class="text-gray-600">{{ fournisseur.duree }}H</div>
                <div class="fw-bold mt-5">Tarif</div>
                <div class="text-gray-600">{{ fournisseur.tarif }}</div>
                <div class="fw-bold mt-5">Categorie</div>
                <div class="text-gray-600">{{ fournisseur.categorie }}</div>
                <!--begin::Details item-->
                <!--begin::Details item-->
               
                <!--begin::Details item-->
              </div>
            </div>
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
      <div class="flex-lg-row-fluid ms-lg-15">
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
         
          <!--end:::Tab item-->
         
          <!--begin:::Tab item-->
       
         
          <li class="nav-item ms-auto">
            <!--begin::Action menu-->
            <a
              href="#"
              class="btn btn-primary ps-7"
              data-kt-menu-trigger="click"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              Actions
              <span class="svg-icon svg-icon-2 me-0">
                <inline-svg
                  :src="getAssetPath('media/icons/duotune/arrows/arr072.svg')"
                />
              </span>
            </a>
            <div
      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semobold py-4 w-250px fs-6"
      data-kt-menu="true"
    >
    
  
      <!--begin::Menu separator-->
      <!--end::Menu separator-->
  
      <!--begin::Menu item-->
      <div class="menu-item px-5">
        <div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
          Service
        </div>
      </div>
      <div class="menu-item px-5">
        <a @click="SuppAdmin" class="menu-link text-danger px-5"> Supprimer le Service </a>
      </div>
    
            </div>          <!--end::Menu-->
          </li>
          <!--end:::Tab item-->
        </ul>
        <!--end:::Tabs-->
        
        <!--begin:::Tab content-->
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
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="nom" />
            </div>
          </div>
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Description</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.description"
          />
          <!--end::Input-->
          
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Horaire</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.duree"
          />
          <!--end::Input-->
          
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Tarif</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.tarif"
          />
          <!--end::Input-->
          
        </div>
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bold text-dark">Categorie</label>
          <!--end::Label-->
  
          <!--begin::Input-->
          <input
            class="form-control form-control-lg form-control-solid"
            type="text"
            v-model="fournisseur.categorie"
          />
          <!--end::Input-->
         
        </div>
        
        <!-- ... autres champs d'entrée ... -->
        
        <button class="btn btn-primary" @click="saveChanges">Update {{ fournisseur.nom }} </button>
         
      </div>
      
         
        </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, computed, onMounted, ref } from "vue";
  import Dropdown3 from "@/components/dropdown/DropdownAdmin.vue";
  import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
  import { useRoute } from "vue-router";
  import {deleteService,getServiceById ,type  Service } from "@/core/data/customers";
  import {updateService,getClientsByAdmin ,type Client}from "@/core/data/customers";
  import Swal from "sweetalert2";
  import arraySort from "array-sort";
  import type { Sort } from "@/components/kt-datatable//table-partials/models";
  import Datatable from "@/components/kt-datatable/KTDataTable.vue";
  import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
  
  export default defineComponent({
    name: "AdminDetails",
    components: {
      Datatable,
      ExportCustomerModal,
      
      Dropdown3,
      NewCardModal,
    },
    setup() {
      const tableHeader = ref([
      {
          columnName: "Image",
          columnLabel: "image",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Nom",
          columnLabel: "nom",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Prenom",
          columnLabel: "prenom",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Country",
          columnLabel: "country",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Numéro",
          columnLabel: "numerotel",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Langue",
          columnLabel: "langue",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Actions",
          columnLabel: "actions",
          sortEnabled: false,
          columnWidth: 135,
        },
      ]);
      const route = useRoute();
      const adminId = Number(route.params.id);
  const fournisseur = ref<Service>({} as Service);
    const clients = ref<Client[]>([]);
  
    const editMode = ref(false);
    const startEdit = () => {
      editMode.value = true;
    };
  
      const cancelEdit = () => {
        // Annuler l'édition et restaurer les valeurs originales
        editMode.value = false;
        // Recharger les données originales depuis le serveur si nécessaire
      };
   //get admin by id with axios
      
      onMounted(async () => {
  
          const response =await getServiceById(adminId);
          fournisseur.value = response;
  
          const adminResponse = await getServiceById(adminId);
          fournisseur.value = adminResponse;
          /*const clientsResponse = await getClientsByAdmin(adminId);
          clients.value = clientsResponse;*/
        })
       
        const saveChanges = () => {    

          updateService(fournisseur.value,adminId).then((response) => {
      Swal.fire({
        text: "Le Service de '" + fournisseur.value?.nom + "' a été mis à jour avec succès.",
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
      const sort = (sort: Sort) => {
        const reverse: boolean = sort.order === "asc";
    if (sort.label) {
      arraySort(clients.value, sort.label, { reverse });
    }
      };
      const adminIdToDelete = adminId;
  
      const SuppAdmin = () => { 
        
        deleteService(adminIdToDelete)
        .then((response) => {
      Swal.fire({
        text: "Le Service '" + fournisseur.value?.nom + "' a supprimée avec succès.",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
    }); 
    window.location.href = 'dashboard#/admin/List';
  
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
      };
     
  
      return {
        tableHeader,
        getAssetPath,
        fournisseur,
          editMode,
        startEdit,
        saveChanges,
        cancelEdit,
        clients,
        sort,
        SuppAdmin,
      };
    },
  });
  </script>
  