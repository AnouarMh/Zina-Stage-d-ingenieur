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
          <div class="d-flex flex-center flex-column mb-5"    v-if="admin" >
            
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img
                :src="admin.image"
                alt="image"
              />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ admin.nom}}

            </a>
            <!--end::Name-->
            {{ admin.email}}

            <!--begin::Position-->
            <div class="fs-5 fw-semobold text-muted mb-6"></div>
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
             
              <!--end::Stats-->

              <!--begin::Stats-->
              
              <!--end::Stats-->

              <!--begin::Stats-->
              <!--end::Stats-->
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
          <div id="kt_customer_view_details" class="collapse show"     v-if="admin">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <div class="badge badge-light-info d-inline">{{ admin.country }}</div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Account ID</div>
              <div class="text-gray-600">ID-{{ admin.id }}</div>
             
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >{{ admin.email }}</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Address</div>
              <div class="text-gray-600">
                {{ admin.localisation }} <br />{{ admin.country }}  
                          </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Number</div>
              <div class="text-gray-600">{{ admin.numerotel }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Horaire</div>
              <div class="text-gray-600">{{ admin.horaire }}</div>
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
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Liste des Clients</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#updateadmin"
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
        Admin
      </div>
    </div>
    <div class="menu-item px-5">
      <a @click="SuppAdmin" class="menu-link text-danger px-5"> Desactiver le Compte </a>
    </div>
          </div>          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->
      
      <!--begin:::Tab content-->
        <div class="tab-content" id="myTabContent">
          
    
          <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
        <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg
              :src="getAssetPath('media/icons/duotune/general/gen021.svg')"
            />
          </span>
          <input
            type="text"
            @input=""
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Chercher un  Client"
          />
        </div>
      </div>
      <div class="card-toolbar">
        <div
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
         
          
        </div>
        <!-- <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div> -->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">

      <Datatable
        @on-sort="sort"
        :data="clients"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
      <template v-slot:image="{ row: client }">
        
        <a href="" class="text-gray-600 text-hover-primary mb-1">
          <img :src="client.image" width="40">
        </a>
      </template>
      <template v-slot:nom="{ row: client }">
            {{ client.nom }}
        </template>
        <template v-slot:prenom="{ row: client }">
            {{ client.prenom }}
        </template>
        <template v-slot:email="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.email }}
          </a>
        </template>
        <template v-slot:numerotel="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.numerotel }}
          </a>
        </template>
        <template v-slot:country="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.country }}
          </a>
        </template>
        <template v-slot:langue="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.langue }}
          </a>
        </template>
        <template v-slot:actions="{ row: customer }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <span class="svg-icon svg-icon-5 m-0">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr072.svg')"
              />
            </span>
          </a>
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <div class="menu-item px-3">
              <!-- <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                >Delete</a
              > -->
            </div>
          </div>
        </template>
      </Datatable>
    </div>
  </div>

     </div>
        
        <div
          class="tab-pane fade"
          id="updateadmin"
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
          v-model="admin.nom"
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
        <label class="form-label fs-6 fw-bold text-dark">Email</label>
        <!--end::Label-->

        <!--begin::Input-->
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="admin.email"
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
        <label class="form-label fs-6 fw-bold text-dark">Adress</label>
        <!--end::Label-->

        <!--begin::Input-->
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="admin.localisation"
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
        <label class="form-label fs-6 fw-bold text-dark">Pays</label>
        <!--end::Label-->

        <!--begin::Input-->
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="admin.country"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="country" />
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
          v-model="admin.numerotel"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="numerotel" />
          </div>
        </div>
      </div>
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-dark">Horaire</label>
        <!--end::Label-->

        <!--begin::Input-->
        <input
          class="form-control form-control-lg form-control-solid"
          type="text"
          v-model="admin.horaire"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="horaire" />
          </div>
        </div>
      </div>
      <!-- ... autres champs d'entrée ... -->
      
      <button class="btn btn-primary" @click="saveChanges">Update {{ admin.nom }} </button>
       
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
import {deleteAdmin,getAdminbyId ,type  ICustomer } from "@/core/data/customers";
import {updateAdmin,getClientsByAdmin ,type Client}from "@/core/data/customers";
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
const admin = ref<ICustomer>({} as ICustomer);
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

        const response =await getAdminbyId(adminId);
        admin.value = response;

        const adminResponse = await getAdminbyId(adminId);
        admin.value = adminResponse;
        const clientsResponse = await getClientsByAdmin(adminId);
        clients.value = clientsResponse;
      })
   
      const saveChanges = () => {    

  updateAdmin(admin.value,adminId).then((response) => {
    Swal.fire({
      text: "Le profil de '" + admin.value?.nom + "' a été mis à jour avec succès.",
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
      
      deleteAdmin(adminIdToDelete)
      .then((response) => {
    Swal.fire({
      text: "Le profil de '" + admin.value?.nom + "' a supprimée avec succès.",
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
        admin,
        editMode,
      startEdit,
      saveChanges,
      cancelEdit,
      clients,
      sort,
      SuppAdmin
    };
  },
});
</script>
