<template>
    <div class="welcome-back">
      <div class="photo">
    <img class="photo2" src="/media/logos/spa-bien-etre-fleurs-serviettes-composition-lumineuse-table-marron-fleurs-tropicales-produits-naturels-dayspa-noix-coco.jpg" />
  </div>
      <a @click="handleClick" class="arrow-link">
    <div class="arrow-left-32-px">
      <div class="ellipse"></div>
      <svg
        class="arrow-left"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5L5 12M5 12L12 19M5 12H19"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </a>
  <a class="arrow-link" @click="handleRightArrowClick">
      <div class="arrow-right-32-px">
        <div class="ellipse"></div>
        <svg
          class="arrow-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19L19 12M19 12L12 5M19 12L5 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </a>
      <div class="frame">
        <div class="headline">
          <div class="headline2">Bienvenue Chez Zina 😊</div>
        </div>
        <div class="frame2">
          <div class="frame2">
            <form class="form">
    <div class="input-field">
      <input type="email" class="input-field3" placeholder="Email" name="email" v-model="email"    autocomplete="username" />
    </div>
    <div class="input-field">
      <input
      type="password"
      name="password"
      v-model="password"
      class="input-field2"
      placeholder="Mot de passe"
      autocomplete="new-password"
    />
  <button class="toggle-password" @click="togglePasswordVisibility">

    <svg
      class="eye-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1C5.589 1 2 4.589 2 9C2 13.411 5.589 17 10 17C14.411 17 18 13.411 18 9C18 4.589 14.411 1 10 1ZM10 15C7.239 15 5 12.761 5 10C5 7.239 7.239 5 10 5C12.761 5 15 7.239 15 10C15 12.761 12.761 15 10 15ZM10 7C8.346 7 7 8.346 7 10C7 11.654 8.346 13 10 13C11.654 13 13 11.654 13 10C13 8.346 11.654 7 10 7Z"
        fill="#9B9B9B"
      />
    </svg>
  </button>
</div>

<div class="frame4">
  <button class="text-button"           
  @click="onSubmitRegister($event)"
>
  <div class="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>

    Se Connecter
  </div>
</button>
      </div>
</form>
   
           
          </div>
          <div class="frame4">
            <div class="left-aligned-link-button">
    <a class="link" @click="handleClick">Forgot password?</a>
  </div>
            <div class="description-link">
              <div class="description">
                <div class="description2">Don’t have an account?</div>
              </div>
              <div class="left-aligned-link-button">
                <a  class="link"  @click="handleRightArrowClick">Sign up</a>
              </div>
            </div>
          </div>
        </div>
        <div class="frame2">
          <button class="icon-text-button-stroke">
            <div class="logo">
              <svg
                class="logo2"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4998 9.81799V14.4653H18.958C18.6744 15.9598 17.8234 17.2253 16.5471 18.0762L20.4416 21.0981C22.7107 19.0036 24.0198 15.9272 24.0198 12.2727C24.0198 11.4218 23.9434 10.6035 23.8016 9.81812L12.4998 9.81799Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.77468 14.2839L4.89631 14.9563L1.78717 17.3781C3.76171 21.2944 7.80868 23.9999 12.4996 23.9999C15.7395 23.9999 18.4558 22.9308 20.4413 21.0981L16.5468 18.0763C15.4777 18.7963 14.114 19.2327 12.4996 19.2327C9.37957 19.2327 6.72874 17.1273 5.77958 14.2909L5.77468 14.2839Z"
                  fill="#34A853"
                />
                <path
                  d="M1.78718 6.62231C0.969042 8.23679 0.5 10.0586 0.5 12.0004C0.5 13.9422 0.969042 15.7641 1.78718 17.3785C1.78718 17.3894 5.77997 14.2804 5.77997 14.2804C5.53998 13.5604 5.39812 12.7968 5.39812 12.0003C5.39812 11.2038 5.53998 10.4402 5.77997 9.72025L1.78718 6.62231Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.4998 4.77818C14.2671 4.77818 15.838 5.38907 17.0925 6.56727L20.5289 3.13095C18.4452 1.18917 15.7398 0 12.4998 0C7.80893 0 3.76171 2.69454 1.78717 6.62183L5.77984 9.72001C6.72888 6.88362 9.37982 4.77818 12.4998 4.77818Z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div class="log-in-with-google">Log in with Google</div>
          </button>
        </div>
      </div>
      <div class="headline-description">
        <div class="headline3">
          <div class="headline4">Votre guide vers le bien-être<br />Zina</div>
        </div>
        <div class="description3">
          <div class="text2">
            <div class="description4">
              Parcourez une collection soigneusement sélectionnée de centres de beauté et spas pour trouver celui qui correspond à vos besoins<br />Ensemble.
            </div>
          </div>
        </div>
      </div>
      <div class="description5">
        <div class="text2">
          <div class="description4">L'ensemble de vos besoins centralisé en un seul lieu avec nous</div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import axios from 'axios';
  import { API_URL } from '@/core/config/config.js';
  import { defineComponent, ref, onMounted, nextTick } from "vue";
  import Swal from "sweetalert2";
  import { useAuthStore } from "@/stores/auth";

  export default {
    name: "Signin",
    components: {},
    props: {},
    data() {
      // quickfix to have components available to pass as props
      return {};
    },
    
    methods:{
      handleClick () {
        this.$router.push('/home')
      },
      handleRightArrowClick () {
        this.$router.push('/Signup')
      },
      togglePasswordVisibility() {
      const passwordInput = this.$el.querySelector('.input-field2'); // Utilisez this.$el pour cibler dans la portée du composant
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    },
    onSubmitRegister(event) {
      event.preventDefault();
      const email = this.email;
  const password = this.password;
  const data = {
    email,
    password
    
  };
  console.log(data);
  axios
    .post(`${API_URL}/api/clients/loginAll`, data)
    .then((response) => {
      Swal.fire({
        title: 'Success',
        text: 'Connecté avec succès',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      localStorage.setItem('id_token', response.data.token);

      if (response.data.type === 'client')
      {
        this.$router.push('/');
      }
      else if (response.data.type === 'admin')
      {
        this.$router.push('/home/service')
      }
      else if (response.data.type === 'fournisseur')
      {
        this.$router.push('/fournoisseur')
      }
      

    })
    
    .catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'Une erreur est survenue lors de la création de votre compte',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
    },
    }
  };
  </script>
  <style scoped>
  .welcome-back,
  .welcome-back * {
    box-sizing: border-box;
  }
  .welcome-back {
    background: #ffffff;
    width: 100%;
    height: 786px;
    position: relative;
    overflow: hidden;
  }
  .photo {
  width: 100%; /* Utilisation de pourcentage pour s'adapter à la largeur de l'écran */
  max-width: 600px; /* Limiter la largeur maximale pour les grands écrans */
  height: auto; /* Hauteur automatique pour conserver le ratio */
  position: relative;
  right: 0;
  left: 50%; /* Décalage à 50% pour centrer le contenu */
  transform: translateX(-50%); /* Centrage horizontal */
  top: 0%; /* Centrage vertical */
  transform: translateY(-50%);
  }
  .photo2 {
    width: 140%; /* Utilisation de pourcentage pour s'adapter à la largeur du conteneur */
  height: auto; /* Hauteur automatique pour conserver le ratio */
  position: absolute;
  left: 0;
  top: 0;
  }
  .arrow-link {
  text-decoration: none;
  cursor: pointer;
}

.arrow-left-32-px {
  width: 32px;
  height: 32px;
  position: absolute;
  left: 52%; /* Utilize percentage for responsiveness */
  top: 82%; /* Center vertically */
  transform: translateY(-50%);
  
}
.arrow-right-32-px {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 55%;
    top: 80%;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
  }


.ellipse {
  border-radius: 50%;
  border-style: solid;
  border-color: #fbfbfb;
  border-width: 2px;
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
}
.arrow-left,
.arrow-right {
  position: absolute;
  left: 4px;
  top: 4px;
  overflow: visible;
}
.frame {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Ajustez l'espacement vertical pour les écrans plus petits */
  align-items: flex-start; /* Centrez horizontalement pour les écrans plus petits */
  justify-content: flex-start;
  position: absolute;
  left: 5%; /* Utilisez un pourcentage pour la position horizontale */
  top: 5%; /* Utilisez un pourcentage pour la position verticale */
  width: 90%; /* Utilisez un pourcentage pour la largeur */
  padding: 32px; /* Ajoutez un espace intérieur pour les écrans plus petits */
}

.headline {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%; /* Ajustez la largeur pour occuper tout l'espace */
  position: relative;
  left: 10%; /* Utilisez un pourcentage pour la position horizontale */
  top: 5%; /* Utilisez un pourcentage pour la position verticale */
  width: 100%; /* Utilisez un pourcentage pour la largeur */
  padding: 32px; 
}

.headline2 {
  color: #000000cc;
  text-align: center;
  font: var(--headline, 500 40px "Figtree", sans-serif); /* Ajustez la taille de la police */
  position: relative;
}

/* Styles responsifs */
@media (max-width: 1024px) {
  .frame {
    gap: 16px; /* Ajustez l'espacement vertical pour les écrans encore plus petits */
    padding: 16px; /* Ajustez l'espace intérieur pour les écrans encore plus petits */
  }

  .headline2 {
    font-size: 32px; /* Ajustez la taille de la police pour les écrans plus petits */
  }
}
  .frame2 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.input-field {
  border-radius: 10px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-width: 1px;
  padding: 14px 10%; /* Ajustez le padding en pourcentage */
  max-width: 80%; /* Ajustez la largeur maximale en pourcentage */
  left: 10%; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  width: 450px;
  margin-bottom: 30px;

}
@media (max-width: 1024px) {
  .input-field {
    padding: 10px; /* Ajustez le padding pour les écrans plus petits */
    max-width: 50%; /* Ajustez la largeur maximale pour les écrans plus petits */
    left: 0; /* Réinitialisez la position */
  }
}

.input-field2 {
  flex: 1; /* Allow the input to take remaining horizontal space */
  color: rgb(0, 0, 0);
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  border: none; /* Remove the border from the input */
  outline: none; /* Remove the default outline */
  padding: 0; /* Remove padding to prevent extra spacing */
  position: relative;
}
.input-field3 {
  flex: 1; /* Allow the input to take remaining horizontal space */
  color: rgb(0, 0, 0);
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  border: none; /* Remove the border from the input */
  outline: none; /* Remove the default outline */
  padding: 0; /* Remove padding to prevent extra spacing */
  position: relative;
}
.toggle-password {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%; /* Centrer verticalement */
  right: 10px; /* Positionner à droite */
  transform: translateY(-50%);
}

.eye-icon {
  width: 20px;
  height: 20px;
  fill: #9b9b9b;
}
  
  .left-aligned-link-button {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.link {
  color: #000000;
  text-align: left;
  font: var(--link, 500 13px "Figtree", sans-serif);
  text-decoration: underline;
  position: relative;
}

/* Styles responsifs */
@media (max-width: 1024px) {
  .left-aligned-link-button {
    justify-content: flex-start; /* Ajustez l'alignement pour les écrans plus petits */
  }}
  .frame4 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
  }
  .text-button {
  background: #000000;
  border-style: solid;
    border-color: #b4aaaa;
  border-radius: 10px;
  padding: 10px 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%; /* Utilisez la largeur totale disponible */
  max-width: 370px; /* Limitez la largeur maximale pour les grands écrans */
  height: 60px;
  position: relative;
}

.button {
  color: #ffffff;
  text-align: left;
  font: var(--body, 500 17px "Figtree", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.signin-icon {
  width: 20px;
  height: 20px;
  fill: #ffffff;
}
  .description-link {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 400px;
    position: relative;
  }
  .description {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .description2 {
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    font: var(--small-descrirtiontext, 500 13px "Figtree", sans-serif);
    position: relative;
  }

  
  .text {
    color: #ffffff;
    text-align: left;
    font: var(--body, 500 17px "Figtree", sans-serif);
    position: relative;
  }
  .icon-text-button-stroke {
    background: #ffffff;
    border-style: solid;
    border-color: #000000;
  border-radius: 10px;
  padding: 10px 90px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%; /* Remplir la largeur du conteneur parent */
  max-width: 400px; /* Limiter la largeur maximale */
  position: relative;
  }
  .logo {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
  }
  .logo2 {
    position: absolute;
    left: 4px;
    top: 4px;
    overflow: visible;
  }
  .log-in-with-google {
    color: #000000;
    text-align: left;
    font: var(--body, 500 17px "Figtree", sans-serif);
    position: relative;
  }
  .headline-description {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 51%; /* Utilize percentage for responsiveness */
  top: 10%; /* Utilize percentage for responsiveness */
  max-width: 90%; /* Limit the maximum width for larger screens */
}

.headline4 {
  color: #ffffff;
  text-align: left;
  font: var(--headline, 500 4em "Figtree", sans-serif); /* Adjust font size using em units */
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top: 10%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
}

.description3{
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%; /* Full width for responsiveness */
  left: 0%; /* Utilize percentage for responsiveness */
  top:0%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
  
}
.description5 {
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top:85%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
  
}

.description4 {
  color: #ffffff;
  text-align: left;
  font: var(--description, 400 1.5em "Figtree", sans-serif); /* Adjust font size using em units */
  width: 100%; /* Full width for responsiveness */
  left: 51%; /* Utilize percentage for responsiveness */
  top: 60%; /* Utilize percentage for responsiveness */
  max-width: 90%; 
}

  </style>
  