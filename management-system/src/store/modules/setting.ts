import { defineStore } from "pinia";
const useSettingStore = defineStore("Setting", {
    state: () => {
      return {
       fold:false,
       refresh:false

      };
    },
    actions: {
    
    },
    getters: {},
  });
  export default useSettingStore;