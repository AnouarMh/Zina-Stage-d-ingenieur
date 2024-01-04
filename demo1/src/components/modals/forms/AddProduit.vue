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
            <h2 class="fw-bold">Ajouter produit</h2>
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
              <div class="row mb-6">
              <!--begin::Label-->
              
              <!--end::Label-->
  
              <!--begin::Col-->
              
              <!--end::Col-->
            </div>
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Nom de Produit</label>
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
                  <label class="fs-6 fw-semobold mb-2">
                    <span class="required">Description</span>
  
                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Email address must be active"
                    ></i>
                  </label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="email">
                    <el-input v-model="formData.email" placeholder="Zina@gmail.com" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">
                    <span class="required">Prix</span>
  
                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Email address must be active"
                    ></i>
                  </label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="email">
                    <el-input v-model="formData.email" placeholder="Zina@gmail.com" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--begin::Input group-->
               
                <!--end::Input group-->
               
                <!--begin::Billing toggle-->
               
                <!--end::Billing toggle-->
  
                <!--begin::Billing form-->
                <div
                  id="kt_modal_add_customer_billing_info"
                  class="collapse show"
                >
                  <!--begin::Input group-->
                 
               
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
  import { defineComponent, ref } from "vue";
  import { hideModal } from "@/core/helpers/dom";
  import Swal from "sweetalert2";
  import axios from "axios";
  
  export default defineComponent({
    data() {
      return {
        // formData: {
        //   nom: '',
        //   email: '',
        //   password: '',
        //   numerotel: '',
        //   country: '',
        //   image: '',
        //   localisation: '',
        //   horaire: ''
        // },
        timePickerOptions: {
          format: 'hh:mm', // Utilisez 'HH:mm' pour afficher l'heure au format 24 heures
          selectableRange: '00:00:00 - 23:59:59' // Plage d'heures sélectionnables
        }
  
      };
    },
    name: "add-customer-modal",
    components: {},
    setup() {
      const formRef = ref<null | HTMLFormElement>(null);
      const addCustomerModalRef = ref<null | HTMLElement>(null);
      const loading = ref<boolean>(false);
        const imageFile = ref<File | null>(null);
  
      const formData = ref({
        image:"aaa",
        nom: "Zina",
        email: "zina@gmail.com",
        password: "Mot de passe",
        numerotel: "@exp +216 22 222 222",
        country: "Tunisie",
        localisation: "Monastir",
        horaire: "12:00",
      });
  
      const rules = ref({
        nom: [
          {
            required: true,
            message: "name is required",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "email is required",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Password is required",
            trigger: "change",
          },
        ],
        numerotel: [
          {
            required: true,
            message: "Number is required",
            trigger: "change",
          },
        ],
        country: [
          {
            required: true,
            message: "Country is required",
            trigger: "change",
          },
        ],
        localisation: [
          {
            required: true,
            message: "Localisation is required",
            trigger: "change",
          },
        ],
      });
      const submit = async ()=>{
        try {
          
      //     console.log("adminDataToUpdate", adminDataToUpdate);
         
     
          const response = await axios.post(
        `http://localhost:8000/api/superadmin/create`,
        formData.value,
      // Utilisez formData pour envoyer les données
      // formData,
          );
          //afficher un message de succès
          Swal.fire({
            text: "Produit ajouté avec succès.",
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
          console.error("Erreur lors de l'ajout de Produit':", error);
          // Affichez un message d'erreur (vous pouvez personnaliser le message selon vos besoins)
          Swal.fire({
            text: "Erreur lors de l'ajout de Produit",
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
       formData.value.image = reader.result as string;
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
      // const submit = () => {
      //   if (!formRef.value) {
      //     return;
      //   }
  
      //   formRef.value.validate((valid: boolean) => {
      //     if (valid) {
      //       axios.post(`http://localhost:8000/api/admin/create`,formData.value
      // // Utilisez formData pour envoyer les données
      // // formData,
      //     ).then((response) => {
      //         console.log(response);
      //       });}} 
      //       // loading.value = true;
            
      //       // setTimeout(() => {
      //       //   loading.value = false;
               
  
                                              
      //       //   Swal.fire({
      //       //     text: "Form has been successfully submitted!",
      //       //     icon: "success",
      //       //     buttonsStyling: false,
      //       //     confirmButtonText: "Ok, got it!",
      //       //     heightAuto: false,
      //       //     customClass: {
      //       //       confirmButton: "btn btn-primary",
      //       //     },
      //       //   }).then(() => {
      //       //     hideModal(addCustomerModalRef.value);
      //       //   });
      //       // }, 2000);
      //   //   } else {
      //   //     Swal.fire({
      //   //       text: "Sorry, looks like there are some errors detected, please try again.",
      //   //       icon: "error",
      //   //       buttonsStyling: false,
      //   //       confirmButtonText: "Ok, got it!",
      //   //       heightAuto: false,
      //   //       customClass: {
      //   //         confirmButton: "btn btn-primary",
      //   //       },
      //   //     });
      //   //     return false;
      //   //   }
      //   // });
      // };
  
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
  