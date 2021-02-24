const app = Vue.createApp({
    data() {
        return {
           
            peoples: [{
                    fullname: 'Maria Smantha',
                    job: 'Android Developer',
                    describe: 'I am an android developer working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat1.jpeg',
                    pic:true
                    
                },
                {
                    fullname: 'Simona Disa',
                    job: 'Graphics Designer',
                    describe: 'I am an Graphics Designer working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat2.jpg',
                    pic:true
                    
                },
                {
                    fullname: 'John Smith',
                    job: 'Java Architect',
                    describe: 'I am an Java Architect working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat3.jpg',
                    pic:true
                   
                }
            ],search : ''
            ,searching : false
           
             
            
        }
    },
    methods: {
        toggleLike(index) {
            this.peoples[index].like = !this.peoples[index].like
        },
        // toggleLikeSearch(index) {
        //     this.peoplesSearch[index].like = !this.peoplesSearch[index].like
        // },
        // toggleBigImageSearch(index) {
        //     this.peoplesSearch[index].big = !this.peoplesSearch[index].big
        // },
        toggleSearch() {
            this.searching = !this.searching
            // this.peoplesSearch = ''
            // this.noPhoto = false
            for (let i = 0;i<this.peoples.length;i++) {
              
                // console.log((this.gallery[i].picture_name.toLowerCase().includes(this.search.textinput.toLowerCase())))
                // console.log(this.gallery[i].pic)
                
                        this.peoples[i].pic = true            
                        
                   
                }
        }
        ,
        // filteredList(search) {
        //     if(search){
        //       this.peoplesSearch =  this.peoples.filter(post => {
        //             return post.job.toLowerCase().includes(this.search.toLowerCase())

        //           })
        //           this.noPhoto = false
        //           if(this.peoplesSearch == ''){
                     
        //             this.noPhoto = true
        //           }
        //     }
        //   },
          filteredList(search){
            
            for (let i = 0;i<this.peoples.length;i++) {
                
                // console.log((this.gallery[i].picture_name.toLowerCase().includes(this.search.textinput.toLowerCase())))
                // console.log(this.gallery[i].pic)
               
                if((this.peoples[i].job.toLowerCase().includes(this.search.toLowerCase()))==false){
                 this.peoples[i].pic = false
                
                    }else{
                        this.peoples[i].pic = true  
                         
                        }
                        
                }
                
                
          },
          searchNotFound() {
            return this.peoples.filter(peoples => !peoples.pic).length
        }/*
          transformImage(index) {
            document.getElementsByTagName("img")[index].style.transform = "scale(1.25)"
            document.getElementsByTagName("img")[index].style.borderRadius = "0";
            document.getElementsByTagName("span")[index].style.backgroundColor = "black";
            
            document.getElementsByTagName("span")[index].style.height = "150px";
          },
          bigImage(index){
            var node = document.createElement("LI");
            var span = document.createElement("span");
            var image = document.createElement("img");
            var list = document.getElementsByTagName("li")[index];
          
  list.insertBefore(node, list.firstElementChild).appendChild(span).appendChild(image).setAttribute('src', this.peoples[index].img);
  
          }*/
          
      
        
    },
    computed: {
        countLike() {
            return this.peoples.filter(t => t.like).length
        },
        
    }
})
