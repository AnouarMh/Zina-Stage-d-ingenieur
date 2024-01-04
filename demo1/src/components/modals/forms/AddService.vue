<template>
    <div
      class="modal fade"
      id="kt_modal_add_customer"
      ref="addCustomerModalRef"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header" id="kt_modal_add_customer_header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Ajouter Service</h2>
            <!--end::Modal title-->
  
            <!--begin::Close-->
            <div
              id="kt_modal_add_customer_close"
              data-bs-dismiss="modal"
              class="btn btn-icon btn-sm btn-active-icon-primary"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg
                  :src="getAssetPath('media/icons/duotune/arrows/arr061.svg')"
                />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->
          <!--begin::Form-->
          <el-form
            @submit.prevent="submit()"
            :model="formData"
            :rules="rules"
            ref="formRef"
          >
            <!--begin::Modal body-->
            <div class="modal-body py-10 px-lg-17">
              <!--begin::Scroll-->
              <div
                class="scroll-y me-n7 pe-7"
                id="kt_modal_add_customer_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
                data-kt-scroll-offset="300px"
              >
              
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->


                  <label class="required fs-6 fw-semobold mb-2">Nom de Service</label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="nom">
                    <el-input
                      v-model="formData.nom"
                      type="text"
                      placeholder=""
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
  
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->


                  <label class="required fs-6 fw-semobold mb-2">Description</label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="description">
                    <el-input
                      v-model="formData.description"
                      type="text"
                      placeholder=""
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->


                  <label class="required fs-6 fw-semobold mb-2">Tarif</label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="tarif">
                    <el-input
                      v-model="formData.tarif"
                      type="text"
                      placeholder=""
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>

                <!--begin::Input group-->
               <div class="fv-row mb-7">
                  <!--begin::Label-->


                  <label class="required fs-6 fw-semobold mb-2">Durée</label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="duree">
                    <el-input
                      v-model="formData.duree"
                      type="text"
                      placeholder=""
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                
                <!--begin::Billing toggle-->
                
                <!--end::Billing toggle-->
  
                <!--begin::Billing form-->
                <div
                  id="kt_modal_add_customer_billing_info"
                  class="collapse show"
                >
                  <!--begin::Input group-->
              
                  <!--end::Input group-->
               
                  <!--begin::Input group-->
                 
                  <!--end::Input group-->
  
                  <!--begin::Input group-->
                  
                  <!--end::Input group-->
  
                  <!--begin::Input group-->
                  
                  <!--end::Input group-->
  
                  <!--begin::Input group-->
               
                  <!--end::Input group-->
  
                  <!--begin::Input group-->
                
                  <!--end::Input group-->
                </div>
                <!--end::Billing form-->
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Modal body-->
  
            <!--begin::Modal footer-->
            <div class="modal-footer flex-center">
              <!--begin::Button-->
              <button
                type="reset"
                id="kt_modal_add_customer_cancel"
                class="btn btn-light me-3"
              >
                Discard
              </button>
              <!--end::Button-->
  
              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
                
              >
                <span v-if="!loading" class="indicator-label">
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg
                      :src="
                        getAssetPath('media/icons/duotune/arrows/arr064.svg')
                      "
                    />
                  </span>
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Button-->
            </div>
            <!--end::Modal footer-->
          </el-form>
          <!--end::Form-->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { useAuthStore } from "@/stores/auth";
  import { defineComponent,onMounted, ref } from "vue";

  import { hideModal } from "@/core/helpers/dom";
  import Swal from "sweetalert2";
  import axios from "axios";
  
  export default defineComponent({
    data() {
      return {
       
        timePickerOptions: {
          format: 'hh:mm', // Utilisez 'HH:mm' pour afficher l'heure au format 24 heures
          selectableRange: '00:00:00 - 23:59:59' // Plage d'heures sélectionnables
        }
  
      };
    },
    name: "add-customer-modal",
    components: {},
    setup() {
      const formData = ref({
        
        nom: "name",
        description: "desc",
        tarif: "",
        duree: "",
        admin_id: 0,
     
      });
      const store = useAuthStore();
     const admin = ref(store.user)
     
      const formRef = ref<null | HTMLFormElement>(null);
      const addCustomerModalRef = ref<null | HTMLElement>(null);
      const loading = ref<boolean>(false);
        const imageFile = ref<File | null>(null);
        
          onMounted(async () => {
      try {
        const response = await store.getAdminData();
         admin.value = response
         formData.value.admin_id=admin.value.id
          console.log("my id is "+formData.value.admin_id)
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    });
      
      
  
      const rules = ref({
        nom: [
          {
            required: true,
            message: "name is required",
            trigger: "change",
          },
        ],
        description: [
          {
            required: true,
            message: "description is required",
            trigger: "change",
          },
        ],
        tarif: [
          {
            required: true,
            message: "tarif is required",
            trigger: "change",
          },
        ],
        duree: [
          {
            required: true,
            message: "duree is required",
            trigger: "change",
          },
        ],
      
      });
      const submit = async ()=>{
        try {
          
      //     console.log("adminDataToUpdate", adminDataToUpdate);
         
     
          const response = await axios.post(
        `http://localhost:8000/api/admin/addService`,
        formData.value,
      // Utilisez formData pour envoyer les données
      // formData,
          );
          //afficher un message de succès
          Swal.fire({
            text: "Service ajouté avec succès.",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            // Fermez le modal
          
            hideModal(addCustomerModalRef.value);
          });
      }catch (error) {
          console.error("Erreur lors de l'ajout de Service':", error);
          console.log(formData)
          // Affichez un message d'erreur (vous pouvez personnaliser le message selon vos besoins)
          Swal.fire({
            text: "Erreur lors de l'ajout de Service",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      };
      const onImageSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0];
   
    // Vérifiez que le fichier sélectionné est une image
    if (file ) {
      const reader = new FileReader();
      reader.onload = () => {
        // Mettez à jour la variable locale avec le contenu de l'image
      // formData.value.image = reader.result as string;
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
        formData,
        rules,
        submit,
        formRef,
        loading,
        addCustomerModalRef,
        getAssetPath,
        onImageSelected
      };
    },
  });
  </script>
  