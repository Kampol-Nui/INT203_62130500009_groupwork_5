app.component('people-list',{
    props:{
        peoples: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `<ul class="flex space-x-4 justify-center mt-10 ">
    <li v-for="(people,index) in peoples">
      <div v-show="people.pic">{{people.fullname}}
    
      <people-view :people="people" @toggle-bigimage="this.$emit('toggle-bigimage',index)">  </people-view>
     
        
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





  </ul>`,
    methods: {
        
        toggleLike(index){
            this.$emit('toggle-like',index)
        }
    }
})