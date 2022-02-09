
<script>
import App from "../App.vue"
import axios from 'axios';
export default {
    
    data() {
        return {
            title: "",
            description: "",
            datatype:JSON.parse(localStorage.getItem('type')),
            id_type:null,
            url: 'http://localhost:3001/api/items/getdata'
        }

    },
    methods: {


        change(event) {
            this.title = event.target.value
            console.log(this.datatype)
        },
        change1(event) {
            this.id_type = event.target.value
            console.log(this.id_type)
        },
        change2(event) {
            this.description = event.target.value
            console.log(this.description)
        },
        add() {
            var option = {
                id_type: this.id_type,
                title: this.title,
                description: this.description
            }
            console.log(option)
            axios.post('http://localhost:3001/api/items/lecture', option).then((response) => {
                console.log(response)
            }).catch((error) => {
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
        <h1>type of The Lecture</h1>
        <select @input="change1">
            
            <option  value="">select type of lecture</option>
            
            <option v-for="elem in this.datatype" :key="elem" :value="elem.id_type"  >{{ elem.label }}</option>
            
        </select>

        <h1>description</h1>
        <input @input="change2" />

        <button v-on:click="add()">Submit</button>
    </div>
</template>