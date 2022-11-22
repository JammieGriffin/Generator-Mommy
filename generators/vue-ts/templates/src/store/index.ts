import { defineStore } from "pinia";

const useStore = defineStore("storeID", {
  state: () => {
    return {
      field: "value",
    };
  },
  persist: {
    storage: sessionStorage,
    paths: ["field"],
  },
});

export default useStore;
