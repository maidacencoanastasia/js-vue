let app = new Vue({
    el: `#app`,
    data: {
        a: 0,
        b: 0,
        operator: '+'
    },
    computed: {
        calculate() {
            return eval(this.a + this.operator + this.b);
        }
    }
});