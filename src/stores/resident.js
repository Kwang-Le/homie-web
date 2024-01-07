import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useResidentStore = defineStore('resident', {
    state: async () => ({ residents: null}),
    getters: {
      getCount: (state) => state.residents.length,
    },
    actions: {
      setResidentsData(data) {
        this.residents = data
      },
    },
  })