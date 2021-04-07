const App ={
    data(){
        return{
            counter: 0,
            title: 'Counter'
        }
    }
}
const  app = Vue.createApp(App)
app.mount('#app')

const App2 ={
    data(){
        return{
            placeholderString: 'Introduce the title of note',
            title: 'List of notes',
            inputValue: '',
            notes:['Note ','Note ']
        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue!== '')
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(i){
            this.notes.splice(i, 1)
        }
    }
}
Vue.createApp(App2).mount('#app2')
