<script>
   export default {
    data() {
        return {
            name: "Long"
        }
    },
    methods: {
        onChangeName: function() {
            console.log('say hello')
        }
    },
    mounted() {
        console.log(this)
    }
}
</script>
