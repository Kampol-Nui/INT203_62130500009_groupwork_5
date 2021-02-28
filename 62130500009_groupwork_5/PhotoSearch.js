app.component('people-search', {
  props: {
    peoples: {
      type: Array,
      require: true
    },

    searching: {
      type: Boolean,

    },
    search: {
      type: String
    }
  },
  data: function () {
    return {

      mutableSearch: this.search
    }
  },
  template:
    /*html*/
    `
  <div>

    <div v-show="!searching">
      <h1 class="text-xl ">DISCORVERED </h1>
      <i class="im im-magnifier cursor-pointer transform hover:scale-110 duration-150 mt-2"
        v-on:click="toggleSearch()"></i>
    </div>
    <div v-show="searching">
      <h1 class="text-xl " >DISCORVER </h1>
      <input v-model="mutableSearch" placeholder=" Please enter text for searching photos"
        @keyup.enter="filteredList(mutableSearch)" class="w-72 border border-blue-500 " />
      <button v-on:click="toggleSearch()" class="bg-green-500 text-white  py-1 px-2 rounded ml-2">
        Cancel
      </button>
    </div>
  </div>
        `,
  methods: {
    toggleSearch() {
      this.$emit('toggle-search')
    },
    filteredList(mutableSearch) {
      this.$emit('filter-list', mutableSearch)
    }

  }
})