
<script>
import axios from 'axios';
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
                image: this.image,
                title: this.title,
                description: this.description

            }
            console.log(option)
            axios.post('http://localhost:3001/api/items/lecture',option).then((response) => {
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
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