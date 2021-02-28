const app = Vue.createApp({
    data() {
        return {

            peoples: [{
                    fullname: 'Maria Smantha',
                    job: 'Android Developer',
                    describe: 'I am an android developer working at google Inc at california,USA',
                    like: false,
                    big: false,
                    img: './images/cat1.jpeg',
                    pic: true

                },
                {
                    fullname: 'Simona Disa',
                    job: 'Graphics Designer',
                    describe: 'I am an Graphics Designer working at google Inc at california,USA',
                    like: false,
                    big: false,
                    img: './images/cat2.jpg',
                    pic: true

                },
                {
                    fullname: 'John Smith',
                    job: 'Java Architect',
                    describe: 'I am an Java Architect working at google Inc at california,USA',
                    like: false,
                    big: false,
                    img: './images/cat3.jpg',
                    pic: true

                }
            ],
            search: '',
            searching: false



        }
    },
    methods: {
        toggleLike(index) {

            this.peoples[index].like = !this.peoples[index].like
        },
        toggleBigImage(index) {
            this.peoples[index].big = !this.peoples[index].big
        },
        toggleSearch() {
            this.searching = !this.searching
            for (let i = 0; i < this.peoples.length; i++) {
                this.peoples[i].pic = true
            }
        },
        filteredList(search) {
            this.search = search
            for (let i = 0; i < this.peoples.length; i++) {
                if ((this.peoples[i].job.toLowerCase().includes(this.search.toLowerCase())) == false) {
                    this.peoples[i].pic = false
                } else {
                    this.peoples[i].pic = true
                }

            }


        },
    },
    computed: {
        countLike() {
            return this.peoples.filter(t => t.like).length
        },
        searchNotFound() {
            return this.peoples.filter(peoples => !peoples.pic).length

        },

    }
})