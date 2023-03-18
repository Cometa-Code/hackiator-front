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
    <section id="bg-hack-select-level">
        <section id="bg-select-level">
            <figure id="logo-select-level">
                <img src="@/assets/logo.png" alt="">
            </figure>

            <section id="title-select-level">
                <p>Escolha seu nível:</p>
            </section>

            <section id="actions-form">
                <button @click="this.$router.push('/velas-baixas')" id="button-select-level">
                    INICIANTE (Velas Baixas)
                </button>
                <button @click="this.$router.push('/velas-altas')" id="button-select-level">
                    AVANÇADO (Velas Altas)
                </button>
            </section>
        </section>
    </section>
</template>

<style scoped>
#bg-hack-select-level {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/hack.gif');
    background-repeat: no-repeat;
    background-size: cover;
}

#bg-select-level {
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

#logo-select-level img {
    width: 250px;
    max-width: 100%;
}

#title-select-level {
    font-size: 30px;
    font-weight: bold;
    color: white;
}

#actions-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

#button-select-level {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    background: #DB083D;
    border: none;
    font-weight: bold;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 20px;
}

#button-select-level:hover {
    background: #b40530;
    color: #0F0F0F;
    transition: 0.3s;
}
</style>