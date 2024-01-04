<template>
  <!--begin::Menu-->
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
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a class="menu-link text-danger px-5"> Desactiver le Compte </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
   
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a @click="deleteAdmin"  class="menu-link text-danger px-5"> Supprimer le compte </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "dropdown-3",
  components: {},
  setup(){
    const route = useRoute();
    const adminId = Number(route.params.id);
    
    return {
      
    };
  }
});
</script>
