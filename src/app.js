const App = {
    data() {
        return{
            a: 0,
            b: 0,
            operation:['+','-','*','/']
        }
    },
    methods: {
        suma(){
            result =this.a + this.b
            return parseInt(result);
        },
        imultire(){
            result =this.a * this.b
            return parseInt(result);
        },
        devide(){
            result =this.a / this.b
            return parseFloat(result);
        },
        scadere(){
            result =this.a - this.b
            return parseInt(result);
        }
    }
}
Vue.createApp(App).mount('#app')