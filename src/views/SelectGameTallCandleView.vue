<script>
export default {
    data() {
        return {
            loader: true,
            formLogin: {
                email: '',
                cpf: ''
            },
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
    <section id="bg-hack-games">
        <section id="bg-games">
            <figure id="logo-games">
                <img src="@/assets/logo.png" alt="">
            </figure>

            <!-- <section id="warning">
                <figure id="icon-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                </figure>
            
                <ul>
                    <li>NÍVEL AVANÇADO, FAÇA UMA BOA GESTÃO!</li>
                    <li>O CONTADOR MÍNIMO DAS VELAS ALTAS É DE 5X, PODE DAR MAIS OU MENOS. DEIXAMOS ISSO PARA CADA JOGADOR ESCOLHER.</li>
                    <li>RED = G8</li>
                </ul>
            </section> -->

            <section id="warning">
                <figure id="icon-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                </figure>
            
                <p>Nível avançado, faça uma boa gestão!</p>
            </section>

            <section id="warning">
                <figure id="icon-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                </figure>
            
                <p>O contador mínimos das velas altas é de 5X, podendo dar mais ou menos. Deixamos isso para cada jogador escolher!</p>
            </section>

            <section id="warning">
                <figure id="icon-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                </figure>
            
                <p>RED = G8</p>
            </section>

            <section id="select-game">
                <!-- BetPix365 -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        BetPix365
                    </button>
                </article>

                <!-- HeadsBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/headsbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        HeadsBet
                    </button>
                </article>

                <!-- Playpix -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/playpix.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        PlayPix
                    </button>
                </article>

                <!-- EsportivaBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/esportiva.bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/owin')" class="action-game">
                        EsportivaBet
                    </button>
                </article>

                <!-- EstrelaBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/estrela.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        EstrelaBet
                    </button>
                </article>

                <!-- Valsports -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/valsports.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        Valsports
                    </button>
                </article>

                <!-- B2xBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/b2.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        B2xBet
                    </button>
                </article>

                <!-- Esportes da Sorte -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/esporte.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        Esportes da Sorte
                    </button>
                </article>

                <!-- UpSport -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/up.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        UpSport
                    </button>
                </article>

                <!-- Vai de Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/vaidebet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/estrelabet')" class="action-game">
                        Vai de Bet
                    </button>
                </article>

                <!-- Aposta Ganha -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/apostaganha.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        Aposta Ganha
                    </button>
                </article>

                <!-- Bet Nacional -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/betnacional.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        Bet Nacional
                    </button>
                </article>

                <!-- MrJack Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/mrjackbet.svg" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        MrJack Bet
                    </button>
                </article>

                <!-- PagBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/pagbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-altas/b2xbet')" class="action-game">
                        PagBet
                    </button>
                </article>
            </section>
        </section>
    </section>
</template>

<style scoped>
#bg-hack-games {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/hack.gif');
    background-repeat: no-repeat;
    background-size: cover;
}

#bg-games {
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

#logo-game img {
    width: 250px;
    max-width: 100%;
}

#select-game {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.game {
    height: auto;
    margin: 10px 20px 30px 20px;
}

.img-game {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-game img {
    width: 80px;
}

.action-game {
    min-width: 130px;
    width: auto;
    max-width: 98%;
    height: 40px;
    border-radius: 10px;
    background: #DB083D;
    border: none;
    font-weight: bold;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    letter-spacing: 0.5px;
}

.action-game:hover {
    background: #b40530;
    transition: 0.3s;
}

#warning {
    width: 500px;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    text-align: left;
    margin: 5px 0px;
    background: #f19f33;
    color: #0F0F0F;
    font-weight: 500;
    padding: 12px 15px;
    border-radius: 30px;
}

#icon-warning {
    width: 20px;
}

#warning p {
    width: 480px;
    max-width: 80%;
    padding-left: 20px;
}

/* #warning {
    width: 600px;
    max-width: 98%;
    text-align: left;
    background: rgb(255, 201, 86);
    padding: 10px 20px;
    border-radius: 20px;
    color: #0F0F0F;
    border: 2px solid rgb(250, 184, 43);
}

#warning li {
    margin: 10px 5px;
}

#icon-warning {
    width: 30px;
    margin: 0 auto;
} */

@media screen and (max-width:850px) {
    #bg-hack-games {
        height: 100%;
    }

    #bg-games {
        height: 100%;
    }
}
</style>