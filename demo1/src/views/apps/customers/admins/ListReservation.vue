<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg
              :src="getAssetPath('media/icons/duotune/general/gen021.svg')"
            />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Chercher un  Client"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
         
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr075.svg')"
              />
            </span>
            Ajouter un Client
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
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
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
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
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
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
        
          <a     @click="navigateToAdminDetails(customer.id)"
           class="text-gray-600 text-hover-primary mb-1">
            {{ customer.service }}
          </a>
        </template>
        
        <template v-slot:client="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.client }}
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
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import axios from 'axios';
import { useAuthStore } from "@/stores/auth";
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddClient.vue";
import { getReservations,type Reservation } from "@/core/data/customers";
import arraySort from "array-sort";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
  },
  setup() {
    const store = useAuthStore();
    const admin = ref(store.user)
    const tableHeader = ref([
   
      {
        columnName: "Nom de Service",
        columnLabel: "service",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "Nom de Client",
        columnLabel: "client",
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
    const router = useRouter();
    const navigateToAdminDetails = (customerId: number) => {
      router.push({ name: "fournisseur-details", params: { id: customerId } });
    };
    const selectedIds = ref<Array<number>>([]);

      const customers = ref<Reservation[]>([]);
      
      const initCustomers = ref<Array<Reservation>>([]);
      const customersArray = ref<Array<Reservation>>([]);
  
      onMounted(async () => {
        const responsed = await store.getAdminData();
       admin.value = responsed;
       const id=(admin.value.id)
        const response =await getReservations(id);
       customers.value = response;
       customersArray.value = Array.from(customers.value);
        /*customersArray.value = Array.from(customers.value);*/
        
       
      
      //  const adminResponse = await axios.get(`http://127.0.0.1:8000/api/admin/getClientByCenter/${id}`);
      //  customers.value = adminResponse.data;
      //   customersArray.value = Array.from(customers.value);
       console.log(customers.value)
    
/*
        for (const client of response) {
          const adminResponse = await axios.get(`http://localhost:8000/api/superadmin/getadmins/${client.admin_id}`);
          const admin = adminResponse.data.nom;
         console.log(admin)

  }*/
      })
     
      
    //   onMounted(() => {
    //   customersArray.value = Array.from(customers.value); // Convert Proxy to Array
    //   console.log(Array.from(customers.value));

    // });

    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteCustomer(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteCustomer = (id: number) => {
      // for (let i = 0; i < tableData.value.length; i++) {
      //   if (tableData.value[i].id === id) {
      //     tableData.value.splice(i, 1);
      //   }
      // }
    };

    const search = ref<string>("");
    const searchItems = () => {
      if (search.value !== "") {
    customersArray.value = initCustomers.value.filter((customer) =>
      searchingFunc(customer.service, search.value)
    );
  } else {
    customersArray.value = Array.from(customers.value);
  }
    };

    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
  if (sort.label) {
    arraySort(customersArray.value, sort.label, { reverse });
  }
    };

    return {
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      getAssetPath,
      customersArray,
      navigateToAdminDetails,
      admin,

      

    };
  },
});
</script>
