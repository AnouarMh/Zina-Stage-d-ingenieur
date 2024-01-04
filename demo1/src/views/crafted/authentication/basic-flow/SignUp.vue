<template>
  <!-- begin::Wrapper -->
  <div class="w-lg-500px p-10">
    <!-- begin::Form -->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!-- begin::Heading -->
      <div class="mb-10 text-center">
        <!-- begin::Title -->
        <h1 class="text-dark mb-3">Create an Account</h1>
        <!-- end::Title -->

        <!-- begin::Link -->
        <div class="text-gray-400 fw-semobold fs-4">
          Already have an account?
          <router-link to="/sign-in" class="link-primary fw-bold">
            Sign in here
          </router-link>
        </div>
        <!-- end::Link -->
      </div>
      <!-- end::Heading -->

      <!-- begin::Action -->
      <button type="button" class="btn btn-light-primary fw-bold w-100 mb-10" @click="signInWithGoogle">
        <img
          alt="Logo"
          :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
          class="h-20px me-3"
        />
        Sign in with Google
      </button>
      <!-- end::Action -->

      <!-- begin::Separator -->
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <span class="fw-semobold text-gray-400 fs-7 mx-2">OR</span>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      <!-- end::Separator -->

      <!-- begin::Input group -->
      <div class="row fv-row mb-7">
        <!-- begin::Col -->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-dark fs-6">Nom</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder="Nom"
            name="nom"
            v-model="nom"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="nom" />
            </div>
          </div>
        </div>
        <!-- end::Col -->

        <!-- begin::Col -->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-dark fs-6">Prénom</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder="Prénom"
            name="prenom"
            v-model="prenom"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="prenom" />
            </div>
          </div>
        </div>
        <!-- end::Col -->
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-dark fs-6">Email</label>
        <Field
          class="form-control form-control-lg form-control-solid"
          type="email"
          placeholder="Email"
          name="email"
          v-model="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!-- begin::Wrapper -->
        <div class="mb-1">
          <!-- begin::Label -->
          <label class="form-label fw-bold text-dark fs-6"> Mot de passe </label>
          <!-- end::Label -->

          <!-- begin::Input wrapper -->
          <div class="position-relative mb-3">
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              placeholder="Mot de passe"
              name="password"
              v-model="password"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!-- end::Input wrapper -->
          <!-- begin::Meter -->
          <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div>
          <!-- end::Meter -->
        </div>
        <!-- end::Wrapper -->
        <!-- begin::Hint -->
        <div class="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
        <!-- end::Hint -->
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="fv-row mb-5">
        <label class="form-label fw-bold text-dark fs-6">Numéro de Télephone</label>
        <Field
          class="form-control form-control-lg form-control-solid"
          type="number"
          placeholder="Numéro de Télephone"
          name="numero_telephone"
          v-model="numero_telephone"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="numero_telephone" />
          </div>
        </div>
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="fv-row mb-10">
        <label class="form-check form-check-custom form-check-solid">
          <Field class="form-check-input" type="checkbox" name="toc" value="1" v-model="toc" />
          <span class="form-check-label fw-semobold text-gray-700 fs-6">
            I Agree &
            <a href="#" class="ms-1 link-primary">Terms and conditions</a>.
          </span>
        </label>
      </div>
      <!-- end::Input group -->

      <!-- begin::Actions -->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary"
          :disabled="submitButtonDisabled"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      </div>
      <!-- end::Actions -->
    </VForm>
    <!-- end::Form -->
  </div>
  <!-- end::Wrapper -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import axios from 'axios';
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { API_URL } from '@/core/config/config.js';


export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();

    const nom = ref('');
    const prenom = ref('');
    const email = ref('');
    const password = ref('');
    const numero_telephone = ref('');
    const toc = ref(false);

    const submitButton = ref<HTMLButtonElement | null>(null);
    const submitButtonDisabled = ref(false);

    const registration = Yup.object().shape({
      nom: Yup.string().required().label("nom"),
      prenom: Yup.string().required().label("prenom"),
      email: Yup.string().min(4).required().email().label("email"),
      password: Yup.string().required().label("Password"),
      numero_telephone: Yup.string().required().label("numero_telephone"),
      toc: Yup.boolean().oneOf([true], "You must accept the terms and conditions").required(),
    });

    onMounted(() => {
      nextTick(() => {
        // PasswordMeterComponent.bootstrap();
      });
    });

    const signInWithGoogle = () => {
      window.location.href = `${API_URL}/api/admin/google/redirect`;
    };

    const onSubmitRegister = async () => {
      submitButtonDisabled.value = true;

      const adminData = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
        numero_telephone: numero_telephone.value,
      };

      try {
        const response = await axios.post(`${API_URL}/api/admins/store`, adminData);
        console.log(response.data);

        Swal.fire({
          text: "You have successfully registered!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(function () {
          router.push({ name: "dashboard" });
        });
      } catch (error) {
        console.error(error);

        Swal.fire({
          text: "An error occurred while registering. Please try again.",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }

      submitButtonDisabled.value = false;
    };

    return {
      registration,
      nom,
      prenom,
      email,
      password,
      numero_telephone,
      toc,
      submitButton,
      submitButtonDisabled,
      getAssetPath,
      signInWithGoogle,
      onSubmitRegister,
    };
  },
});
</script>
