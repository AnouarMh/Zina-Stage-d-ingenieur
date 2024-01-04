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
              placeholder="Chercher un Service"
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
              Ajouter un Service
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
       
        <div class="card-body pt-0">
  <div class="row">
    <div class="col-md-4" v-for="(customer, index) in customersArray" :key="index">
      <div class="card mb-4">
        <img :src="customer.image" alt="Product Image" class="card-img-top" style="max-width: 200px; max-height: 200;" @click="navigateToAdminDetails(customer.id)">
        <div class="card-body">
          <h5 class="card-title" @click="navigateToAdminDetails(customer.id)" >{{ customer.nom }}</h5>
          <p class="card-text" @click="navigateToAdminDetails(customer.id)" >{{ customer.description }}</p>
          <p class="card-text" @click="navigateToAdminDetails(customer.id)" >{{ customer.tarif }} DT</p>
        </div>
      </div>
    </div>
  </div>
<div>

  </div>
      </div>
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
  import AddCustomerModal from "@/components/modals/forms/AddService.vue";
  import { getAllServices, type ICustomer } from "@/core/data/customers";
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
          columnName: "Nom de service",
          columnLabel: "nom",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Description",
          columnLabel: "description",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Tarif",
          columnLabel: "tarif",
          sortEnabled: true,
          columnWidth: 50,
        },
        {
          columnName: "Durée",
          columnLabel: "duree",
          sortEnabled: true,
          columnWidth: 50,
        },
       
       
       
      ]);
      const router = useRouter();
      const navigateToAdminDetails = (customerId: number) => {
        router.push({ name: "service-details", params: { id: customerId } });
      };
      const selectedIds = ref<Array<number>>([]);
  
        const customers = ref<ICustomer[]>([]);
        const initCustomers = ref<Array<ICustomer>>([]);
        const customersArray = ref<Array<ICustomer>>([]);
  
        onMounted(async () => {
          const response =await getAllServices();
         customers.value = response;
          /*customersArray.value = Array.from(customers.value);*/
          
         
        const responsed = await store.getAdminData();
         admin.value = responsed;
         const id=(admin.value.id)
         const adminResponse = await axios.get(`http://127.0.0.1:8000/api/admin/getServiceByCenter/${id}`);
         customers.value = adminResponse.data;
          customersArray.value = Array.from(customers.value);
         console.log(adminResponse)
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
        searchingFunc(customer.nom, search.value)
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
        navigateToAdminDetails
        
  
      };
    },
  });
  </script>
  