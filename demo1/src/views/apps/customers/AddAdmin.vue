<template>
  <KTModalCard
    title="Salut Super Admin!"
    description="Ici tu peux ajouter un admin au centre"
    :image="getIllustrationsPath('1.png')"
    button-text="Ajouter un Admin de center"
    modal-id="kt_modal_add_customer"
  ></KTModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import AddCustomerModal from "@/components/modals/forms/AddCenter.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "getting-started",
  components: {
    KTModalCard,
    AddCustomerModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
