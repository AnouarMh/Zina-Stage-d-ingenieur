<template>
    <div class="welcome-back">
      <div class="photo">
  <img class="photo2" src="/media/logos/spa-bien-etre-fleurs-serviettes-composition-lumineuse-table-marron-fleurs-tropicales-produits-naturels-dayspa-noix-coco.jpg" />
  <a class="close-icon" href="/home">
    <svg
      class="close-icon-svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6L6 19M6 6L19 19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</div>
      <div class="arrow-link">
    <a href="/home" class="arrow-left-32-px">
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
    </a>
  </div>
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
          <div class="headline2">Crée Votre Compte Zina 😊</div>
        </div>
        <div class="frame2">
          <div class="frame2">
            
            <form 
            class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      
            >
              <div class="input-field">
      <input type="text" class="input-field3" placeholder="User Name" v-model="nom" name="nom"    autocomplete="nom" />
    </div>
   
    <div class="input-field">
      <input type="email" class="input-field3" placeholder="Email"  name="email"  v-model="email"
    autocomplete="username" />
    </div>
    <div class="input-field">
      <input
      type="password"
      name="password"
      class="input-field2"
      placeholder="Mot de passe"
      v-model="password"
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
<div class="input-field">
      <input
      type="password"
      class="input-field4"
      placeholder="Cofirmer Votre Mot de passe"
      autocomplete="conf-password"
    />
  <button class="toggle-password" @click="toggleConfPasswordVisibility">

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
<div class="input-field">
    <select name="role" id="role" class="input-field4" v-model="role">
      <option value="">Selectionner votre Role</option>
        <option value="centre">Centre</option>
        <option value="client">Client</option>
        <option value="fournisseur">Fournisseur</option>

    </select>
</div>
<div class="frame4">
  <button class="text-button"           
  @click="onSubmitRegister($event)"
>
  <div class="button">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="100" viewBox="0 0 512 512">
<g data-name="<Group>"><g data-name="<Group>"><path fill="#fedb41" d="M304.96,267.06a117.817,117.817,0,1,1-89.91,114.4A116.842,116.842,0,0,1,304.96,267.06ZM393,401V365H348V320H312v45H267v36h45v45h36V401Z" data-name="<Group>"></path><polygon fill="#00efd1" points="393 365 393 401 348 401 348 446 312 446 312 401 267 401 267 365 312 365 312 320 348 320 348 365 393 365" data-name="<Group>"></polygon><path fill="#00acea" d="M201.97,184.29a105.669,105.669,0,0,1,102.99,82.77,117.817,117.817,0,0,0-87.64,137.48H59.52V289.76A105.649,105.649,0,0,1,165.35,184.29h36.62Z" data-name="<Group>"></path><path fill="#00acea" d="M255.29,84.64v.04a71.773,71.773,0,0,1-71.74,71.77h-.06A71.79,71.79,0,0,1,111.68,84.7v-.1a71.773,71.773,0,0,1,71.74-71.77h.11a71.758,71.758,0,0,1,71.76,71.74Z" data-name="<Group>"></path></g><g data-name="<Group>"><path fill="#083863" d="M59.52,415H209.387c14.778,55,65.4,94.4,123.373,94.4,70.425,0,127.72-57.406,127.72-127.825S403.185,253.8,332.76,253.8a128.156,128.156,0,0,0-20.568,1.639A115.929,115.929,0,0,0,201.97,174h-36.8C101.493,174,50,226.042,50,289.76V404.54C50,410.063,54,415,59.52,415Zm380.96-33.54a107.715,107.715,0,1,1-215.43,0,106.553,106.553,0,0,1,23.429-67.077,108.174,108.174,0,0,1,58.832-37.6l.026-.007A107.757,107.757,0,0,1,440.48,381.46ZM70,289.777C70,237.089,112.5,194,165.183,194h36.771A95.914,95.914,0,0,1,292.7,260.107a128.561,128.561,0,0,0-59.862,41.774,127.036,127.036,0,0,0-27.789,79.791c0,4.373.228,8.328.671,13.328H70Z" data-name="<Compound Path>"></path><path fill="#083863" d="M183.53,3h-.115A81.442,81.442,0,0,0,102,84.6v.105A81.213,81.213,0,0,0,183.472,166h.083A81.228,81.228,0,0,0,265,84.68v-.113A81.456,81.456,0,0,0,183.53,3Zm71.76,81.57-10-.115A61.646,61.646,0,0,1,183.55,146h-.06c-.008,0-.011.225-.018.225a61.726,61.726,0,1,1-.047-123.451L183.42,12.8l.11,10.014a61.838,61.838,0,0,1,61.76,61.749Z" data-name="<Compound Path>"></path><path fill="#083863" d="M302,320v35H267a10,10,0,0,0-10,10v36a10,10,0,0,0,10,10h35v35a10,10,0,0,0,10,10h36a10,10,0,0,0,10-10V411h35a10,10,0,0,0,10-10V365a10,10,0,0,0-10-10H358V320a10,10,0,0,0-10-10H312A10,10,0,0,0,302,320Zm20,45V330h16v35a10,10,0,0,0,10,10h35v16H348a10,10,0,0,0-10,10v35H322V401a10,10,0,0,0-10-10H277V375h35A10,10,0,0,0,322,365Z" data-name="<Compound Path>"></path></g></g>
</svg>
    Create Account
  </div>
</button>
      </div>
</form>
          </div>
          <div class="frame4">
            
            <div class="description-link">
              <div class="description">
                <div class="description2">You have an account?</div>
              </div>
              <div class="left-aligned-link-button">
                <a  class="link"  @click="handleClick">Sign In</a>
              </div>
            </div>
          </div>
        </div>
        <div class="frame4">
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

  export default {
    name: "Signup",
    components: {},
    props: {},
    data() {
      // quickfix to have components available to pass as props
      return {};
    },
    methods:{
      handleClick () {
        this.$router.push('/signin')
      },
      handleRightArrowClick () {
        this.$router.push('/signup')
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
  event.preventDefault(); // Empêche le comportement par défaut du formulaire

  const nom = this.nom;
  const email = this.email;
  const password = this.password;
  const role = this.role;
  const data = {
    nom,
    email,
    password,
    role
  };
  console.log(data);
  axios
    .post(`${API_URL}/api/clients/addUser`, data)
    .then((response) => {
      Swal.fire({
        title: 'Success',
        text: 'Votre compte a été créé avec succès Tu peux Connecté',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.$router.push('/signin');
      console.log(response);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'Une erreur est survenue lors de la création de votre compte',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.log(error);
    });
},

    toggleConfPasswordVisibility(){
      const passwordInput = this.$el.querySelector('.input-field4'); 
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
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
  gap: 30px; /* Ajustez l'espacement vertical pour les écrans plus petits */
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
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%; /* Ajustez la largeur pour occuper tout l'espace */
  position: relative;
  left: 0%; /* Utilisez un pourcentage pour la position horizontale */
  top: 0%; /* Utilisez un pourcentage pour la position verticale */
  width: 100%; /* Utilisez un pourcentage pour la largeur */
  padding: 10px; 
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
  gap: 15px;
  align-items: center;
  justify-content: center;
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
.input-field4 {
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
    gap: 10px;
    align-items: center;
    justify-content: center;
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
  left: 40px;
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
    text-align: center;
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
.close-icon {
  position: absolute;
  top: 10px;
  left: 730px;
  width: 100%;
  max-width: 300px;
  height: 90px;
  cursor: pointer;
  z-index: 1; /* Mettre l'icône au-dessus de l'image */
}

.close-icon-svg {
  fill: #000000;
}

  </style>
  