<script>
export default {
    data() {
        return {
            loader: true,
            formLogin: {
                email: '',
                cpf: ''
            }
        }
    },
    methods: {
        formatSlugWithStopping: function formatSlugWithStopping() {
            clearTimeout(formatSlugWithStopping.timeout);
            
            formatSlugWithStopping.timeout = setTimeout(() => {
                this.formLogin.cpf = this.formLogin.cpf.replace(/\D/g, '');
            }, 1);
        },
    }
}
</script>

<template>
    <section id="bg-hack-login">
        <section id="bg-login">
            <figure id="logo-login">
                <img src="@/assets/logo.png" alt="">
            </figure>

            <section id="form-login">
                <article class="input-form-login">
                    <label for="email" class="label-input">E-mail:</label>
                    <input type="text" name="email" id="email" class="input-text" v-model="formLogin.email" max="256">
                </article>

                <article class="input-form-login">
                    <label for="cpf" class="label-input">CPF:</label>
                    <input type="text" name="cpf" id="cpf" class="input-text" v-model="formLogin.cpf" v-on:keyup="formatSlugWithStopping($event)" max="256">
                </article>
            </section>

            <section id="actions-form">
                <button id="button-login">
                    Entrar
                </button>

                <a href="" target="_blank" id="buy-access">Não possui acesso? Clique aqui!</a>
            </section>
        </section>
    </section>
</template>

<style scoped>
#bg-hack-login {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/hack.gif');
    background-repeat: no-repeat;
    background-size: cover;
}

#bg-login {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    background: rgba(15, 15, 15, 0.986);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#logo-login img {
    width: 250px;
    max-width: 100%;
}

.input-form-login {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.input-form-login input {
    width: 300px;
    max-width: 98%;
}

.label-input {
    font-size: 16px;
    padding-bottom: 5px;
    color: #DB083D;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-top: 20px;
}

.input-text {
    background: #0F0F0F;
    border: 1px solid #DB083D;
    border-radius: 10px;
    padding: 10px 10px;
    color: rgb(87, 87, 87);
    font-weight: bold;
}

#actions-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

#button-login {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    background: #DB083D;
    border: none;
    font-weight: bold;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

#button-login:hover {
    background: #b40530;
    color: #0F0F0F;
    transition: 0.3s;
}

#buy-access {
    margin-top: 15px;
    text-decoration: none;
    color: rgb(116, 116, 116);
    font-size: 15px;
}
</style>