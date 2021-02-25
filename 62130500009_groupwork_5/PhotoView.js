app.component('people-view',{
    props:{
        people: {
            type:Object,
            require: true
        }
       
    },
    template: 
    /*html*/
    `
    <span class="flex bg-black h-48 w-96 " v-show="people.big">

    <img :src="people.img" alt=""
      class="h-36 w-36   mt-6 ml-28 transform hover:scale-110 duration-150 opacity-90 hover:opacity-100 .shadow-md border-2 border-white">
    <button v-on:click="toggleBigImage(index); " class=" ml-16 mt-3 h-2">
      <img src="./images/cross.png" alt="">
    </button>
  </span>
  <span class="flex justify-center ">
  <img :src="people.img" alt="" v-on:click="toggleBigImage(index); "
  class="h-24 w-24  rounded-full mt-6 transform hover:scale-110 duration-150 opacity-90 hover:opacity-100 .shadow-md ">
</span>
        `,
        methods: {
          // toggleBigImage(index){
          //     this.$emit('toggle-bigimage',index)
          // },
          toggleBigImage(index) {
            console.log(this.people)
            this.people.big = !this.people.big
        },
        
    }
})