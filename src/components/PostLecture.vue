
<script>
export default {
    data() {
        return {
            title: "",
            image: "",
            description: "",
        }

    },
    methods: {
        change(event) {
            this.title = event.target.value
            console.log(this.title)
        },
        change1(event) {
            this.image = event.target.value
            console.log(this.image)
        },
        change2(event) {
            this.description = event.target.value
            console.log(this.description)
        },
        add() {
            var option = {
                url: this.image,
                title: this.title,
                description: this.description

            }
            axios.post('api/items',option).then((result)=>{
                console.log(result)
            })
            console.log(option)
        }
    }

}
</script>


<template>
    <div>
        <h1>Title</h1>
        <input :value="title" @input="change" />
        <h1>image For The Lecture</h1>
        <input :value="image" @input="change1" />
        <h1>description</h1>
        <input :value="description" @input="change2" />

        <button v-on:click="add()">Submit</button>
    </div>
</template>