app.component('people-list',{
    props:{
        peoples: {
            type: Array,
            require: true
        },
        notfound:{},
        countlike:{}
,    },
    
    emits: ["toggle-bigimg","toggle-like","countLike"]
    ,
    
    template: 
    /*html*/
    `
    <div v-if="notfound==peoples.length">
      <h1 class="text-base">No Photo!</h1>
    </div>
    <ul class="flex space-x-4 justify-center mt-10 ">
    <li v-for="(people,index) in peoples">
      <div v-show="people.pic">{{people.fullname}}
    
      <people-view :people="people" @toggle-bigimg="this.$emit('toggle-bigimg',index)">  </people-view>
     
        
        <div>
          <p class="mt-4">{{people.job}}</p> <small class="mt-4">{{people.describe}}</small>
        </div>
        <span class="flex justify-center ">
          <img v-show="!people.like" v-on:click="toggleLike(index);" src="./images/hearth.png" alt=""
            class="mt-6 transform hover:scale-110 duration-150 cursor-pointer">
          <i v-show="people.like" v-on:click="toggleLike(index);"
            class="im im-heart text-red-500 mt-3 transform hover:scale-110 cursor-pointer duration-150">
            <br />I like!
          </i>
        </span>
      </div>
    </li>





  </ul>
  <h2 class="mt-10">Total People You like</h2>
      <h2 class="mt-6 ">{{countlike}}</h2>`,
    methods: {
      toggleLike(index) {
        this.$emit('toggle-like',index)
    },
        // toggleLike(index){
        //     this.$emit('toggle-like',index)
        // },
       
    //     searchNotFound() {
    //       console.log("asdsd")
         
    //     return this.peoples.filter(peoples => !peoples.pic).length
    // }, 
    },
    // computed: {
    //   countLike() {
    //     this.$emit('count-like')
    //   },}
})