import { defineStore } from "pinia"

const useStore = defineStore("storeID", {
  state: () => {
    return {
      field: "value"
    }
  },
  // 数据持久化
  persist: {
    storage: sessionStorage, // 将 pinia 数据存在 sessionstorage
    path: ['field']
  }
})

export { useStore }