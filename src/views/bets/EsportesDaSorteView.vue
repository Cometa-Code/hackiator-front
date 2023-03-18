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
    created() {
        setTimeout(() => {
            this.loader = false;
        }, 5000);
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
    <section id="bg-hack-bet">
        <section id="bg-bet">
            <figure id="logo-bet">
                <img src="@/assets/logo.png" alt="">
            </figure>

            <section id="hacked-loader" v-if="loader">
                <section class="border-loader"></section>

                <figure id="figure-hacked-loader">
                    <img src="@/assets/hacked.gif" alt="">
                </figure>

                <p>Hackeando...</p>
            </section>
            

            <section id="hacked-result" v-if="!loader">
                <section class="border-result"></section>

                <article id="result">
                    <p id="result-text">Entrar após:</p>
                    <p id="result-number">1.58</p>
                </article>
            </section>

            <section id="exit-into" v-if="!loader">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </figure>

                <p id="result-text">Sair em: <span style="color: white;">2.0x</span></p>
            </section>

            <footer id="footer-results">
                <section id="results">
                    <article id="green-border" class="result">
                        <p id="green">GREEN</p>
                        <p class="result-number">10</p>
                    </article>
                    <article class="result">
                        <p id="red">RED</p>
                        <p class="result-number">2</p>
                    </article>
                </section>
                <section id="last-result">
                    <p><span>Última jogada:</span> 1.4 ( às 18:02 )</p>
                </section>
            </footer>
        </section>
    </section>
</template>

<style scoped>
#bg-hack-bet {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/hack.gif');
    background-repeat: no-repeat;
    background-size: cover;
}

#bg-bet {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    background: rgba(15, 15, 15, 0.986);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

#logo-bet img {
    width: 250px;
    max-width: 100%;
}

#hacked-result {
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Rubik Glitch';
    font-size: 30px;
    color: #DB083D;
    letter-spacing: 1px;
    border-radius: 100%;
    margin-top: 100px;
    animation-name: border-loader;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
}

#result #result-number {
    color: white;
    font-family: 'Oswald';
    font-weight: 500;
    font-size: 60px;
}

#result #result-text {
    color: white;
    font-weight: 500;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    color: #e2184a;
}

#exit-into {
    font-size: 18px;
    font-weight: bold;
    color: #e2184a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 200px;
}

#exit-into figure {
    width: 25px;
    margin-right: 10px;
}

.border-result {
    width: 250px;
    height: 250px;
    border: 3px solid #DB083D;
    border-radius: 100%;
    position: absolute;
}

#hacked-loader {
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Rubik Glitch';
    font-size: 30px;
    color: #DB083D;
    letter-spacing: 1px;
    border-radius: 100%;
    margin-top: 100px;
    animation-name: border-loader;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
}

#hacked-loader p {
    margin-top: 10px;
    animation-name: hacked;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes hacked {
    0% {
        font-size: 13px
    }
    50% {
        font-size: 18px
    }
    100% {
        font-size: 13px
    }
}

.border-loader {
    width: 250px;
    height: 250px;
    border-left: 3px solid red;
    border: 3px solid transparent;
    border-left: 3px solid #DB083D;
    border-radius: 100%;
    position: absolute;
    animation-name: rotateBorder;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotateBorder {
    to {
        transform: rotate(360deg);
    }
}

#figure-hacked-loader img {
    width: 110px;
}

#title-bet {
    font-size: 30px;
    font-weight: bold;
    color: white;
}

#actions-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

#button-bet {
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

#button-bet:hover {
    background: #b40530;
    color: #0F0F0F;
    transition: 0.3s;
}

#footer-results {
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 130px;
    background: #161616;
    display: flex;
    flex-direction: column;
}

#results {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.result {
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#green-border { 
    border-right: 1px solid rgb(32, 32, 32);
}

#green {
    font-size: 20px;
    font-weight: bold;
    color: rgb(59, 228, 101);
}

#red {
    font-size: 20px;
    font-weight: bold;
    color: rgb(243, 70, 70);
}

.result-number {
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-top: 5px;
}

#last-result {
    width: 100%;
    height: 60px;
    padding-top: 5px;
    color: #fff;
    font-weight: bold;
    border-top: 1px solid rgb(32, 32, 32);
    display: flex;
    justify-content: center;
    align-items: center;
}

#last-result p span {
    color: #DB083D;
}

@media screen and (max-width:800px) {
    #logo-bet img {
        width: 150px;
        max-width: 100%;
    }
    
    #hacked-loader {
        margin-top: 10px;
    }

    #hacked-result {
        margin-top: 0px;
    }
}
</style>