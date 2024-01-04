import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  id:number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string;
  numerotel: string;
  created_at: string;
  updated_at: string;
  country: string;
  token: string;
  image: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(token: string) {
    // isAuthenticated.value = true;
    // user.value = authUser;
    // errors.value = {};
    JwtService.saveToken(token);
    console.log(token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("superadmin/login", credentials)
      .then(({ data }) => {
        setAuth(data.token);
      })
    // .then(({ data }) => {
    //     setAuth(data);
    //   })
    //   .catch(({ response }) => {
    //     setError(response.data.errors);
    //   });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }
   function getAdminData() {
    ApiService.setHeader(JwtService.getToken() as string);
    return ApiService.get("user").then(({ data }) => {
      return data;
    });
  }
  
  // function verifyAuth() {
  //   const token = localStorage.getItem('id_token');
  //   if (token) {
  //     try{
  //       const response = getAdminData(token);
  //       const adminData =response.data;
  //       setAuth(adminData);
  //     }catch(error){
  //       setError(error)
  //       purgeAuth();
  //     }
  //   } else {
  //     purgeAuth();
  //   }
  // }
  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    getAdminData,  };
});
