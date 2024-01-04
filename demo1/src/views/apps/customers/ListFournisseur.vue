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
              placeholder="Chercher un  fournisseur"
            />
          </div>
          <!--end::Search-->
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
       
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
        <template v-slot:nom="{ row: customer }">
          
            <a     @click="navigateToAdminDetails(customer.id)"
             class="text-gray-600 text-hover-primary mb-1">
              {{ customer.nom }}
            </a>
          </template>
          
          <template v-slot:email="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.email }}
            </a>
          </template>
          <template v-slot:country="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.country }}
            </a>
          </template>
          <template v-slot:localisation="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.localisation }}
            </a>
          </template>
          <template v-slot:horaire="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.horaire }}
            </a>
          </template>
          <template v-slot:approuver="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.approuver === 0 ? 'Not Approved' : 'Approved' }}
              
            </a>
          </template>
       
        </Datatable>
      </div>
    </div>
  
    <ExportCustomerModal></ExportCustomerModal>
    <AddCustomerModal></AddCustomerModal>
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, ref, onMounted } from "vue";
  import Datatable from "@/components/kt-datatable/KTDataTable.vue";
  import type { Sort } from "@/components/kt-datatable//table-partials/models";
  import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
  import AddCustomerModal from "@/components/modals/forms/AddFournisseur.vue";
  import { getFournisseurs, type ICustomer } from "@/core/data/customers";
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
      const tableHeader = ref([
      {
          columnName: "Image",
          columnLabel: "image",
          sortEnabled: true,
          columnWidth: 50,
        },
        {
          columnName: "Nom de Fournisseur",
          columnLabel: "nom",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Email",
          columnLabel: "email",
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
          columnName: "Localisation",
          columnLabel: "localisation",
          sortEnabled: true,
          columnWidth: 100,
        },
        {
          columnName: "Horaire",
          columnLabel: "horaire",
          sortEnabled: true,
          columnWidth: 50,
        },
        {
          columnName: "Approuver",
          columnLabel: "approuver",
          sortEnabled: true,
          columnWidth: 50,
        },
      ]);
      const router = useRouter();
      const navigateToAdminDetails = (customerId: number) => {
        router.push({ name: "fournisseur-details", params: { id: customerId } });
      };
      const selectedIds = ref<Array<number>>([]);
  
        const customers = ref<ICustomer[]>([]);
        const initCustomers = ref<Array<ICustomer>>([]);
        const customersArray = ref<Array<ICustomer>>([]);
  
        onMounted(async () => {
          const response =await getFournisseurs();
          customers.value = response;
          customersArray.value = Array.from(customers.value);
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
  