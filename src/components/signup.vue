
<script>
import App from "../App.vue"
import axios from 'axios';
export default {

    data() {
        return {


            // datatype: JSON.parse(localStorage.getItem('type')),
            user: {},

        }

    },
    methods: {


        change(event) {
            this[event.target.name] = event.target.value
            console.log(this[event.target.name])
        },
        
        add() {
            var option = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                phone: this.phone,
                dob: this.dob,
                id_category:3,
                image_user:this.image_user
            }
            console.log(option)
            axios.post('http://localhost:3001/api/items/user', option)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem('user', JSON.stringify(option))
                    location.reload();

                }).catch((error) => {
                    console.log(error)
                })
        }

    }
}


</script>


<template>
    <div>
        <h1>First Name</h1>
        <input name="firstName" @input="change" />
        <h1>Last Name</h1>
        <input name="lastName" @input="change" />
        <h1>Email</h1>
        <input name="email" @input="change" />
        <h1>Password</h1>
        <input name="password" @input="change" />
        <h1>Confirm Password</h1>
        <input name="confirmPassword" @input="change" />
        <h1>phone</h1>
        <input name="phone" @input="change" />
        <h1>date of birth</h1>
        <input type="date" name="dob" @input="change" />
        <h1>image </h1>
        <input type="text" name="image_user" @input="change" />
        <button v-on:click="add();">Submit</button>
    </div>
</template>