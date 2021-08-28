export const newMixin = {
    data() {
        return {
            say: 'hello'
        }
    },
    methods: {
        hello() {
            console.log(this.say);
        }
    },
    created() {
        // mixin yaşam döngüleri componentin kendi yaşam döngülerinden önce çağrılır
        console.log("mixins");
    }
}