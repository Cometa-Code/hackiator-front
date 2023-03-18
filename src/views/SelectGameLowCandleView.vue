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

            <section id="select-game">
                <!-- BetPix365 -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/esportesdasorte')" class="action-game">
                        BetPix365
                    </button>
                </article>

                <!-- VemBetar -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/vembetar.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/esportesdasorte')" class="action-game">
                        VemBetar
                    </button>
                </article>

                <!-- SimplesBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/simplesbet.webp" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b2xbet')" class="action-game">
                        SimplesBet
                    </button>
                </article>

                <!-- Bit Casino -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/bitcasino.io.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/owin')" class="action-game">
                        Bit Casino
                    </button>
                </article>

                <!-- Neon54 -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/neon54.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/realsbet')" class="action-game">
                        Neon54
                    </button>
                </article>

                <!-- HeadsBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/headsbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/esportesdasorte')" class="action-game">
                        HeadsBet
                    </button>
                </article>

                <!-- Playpix -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/playpix.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b2xbet')" class="action-game">
                        PlayPix
                    </button>
                </article>

                <!-- EsportivaBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/esportiva.bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/owin')" class="action-game">
                        EsportivaBet
                    </button>
                </article>

                <!-- EstrelaBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/estrela.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/betpix')" class="action-game">
                        EstrelaBet
                    </button>
                </article>

                <!-- Freeway.bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/freeway.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Freeway.bet
                    </button>
                </article>

                <!-- Bet Jogos -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/betjogos.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b1')" class="action-game">
                        Bet Jogos
                    </button>
                </article>

                <!-- Sportaza -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/sportaza.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/realsbet')" class="action-game">
                        Sportaza
                    </button>
                </article>

                <!-- Bet7k -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/bet7k.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Bet7k
                    </button>
                </article>

                <!-- Rabona -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/rabona.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/realsbet')" class="action-game">
                        Rabona
                    </button>
                </article>

                <!-- Lance 365 -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/lance365.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Lance 365
                    </button>
                </article>

                <!-- 20 Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/20bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b1')" class="action-game">
                        20 Bet
                    </button>
                </article>

                <!-- BraxBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/braxbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/realsbet')" class="action-game">
                        BraxBet
                    </button>
                </article>

                <!-- Valsports -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/valsports.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/estrela')" class="action-game">
                        Valsports
                    </button>
                </article>

                <!-- B2xBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/b2.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b2xbet')" class="action-game">
                        B2xBet
                    </button>
                </article>

                <!-- Esportes da Sorte -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/esporte.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/esportesdasorte')" class="action-game">
                        Esportes da Sorte
                    </button>
                </article>

                <!-- UpSport -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/up.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/upsport')" class="action-game">
                        UpSport
                    </button>
                </article>

                <!-- Vai de Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/vaidebet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/vaidebet')" class="action-game">
                        Vai de Bet
                    </button>
                </article>

                <!-- Aposta Ganha -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/apostaganha.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/apostaganha')" class="action-game">
                        Aposta Ganha
                    </button>
                </article>

                <!-- Bet Nacional -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/betnacional.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/betnacional')" class="action-game">
                        Bet Nacional
                    </button>
                </article>

                <!-- MrJack Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/mrjackbet.svg" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mrjackbet')" class="action-game">
                        MrJack Bet
                    </button>
                </article>

                <!-- PagBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/pagbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/pagbet')" class="action-game">
                        PagBet
                    </button>
                </article>

                <!-- 1Win -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/1win.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/owin')" class="action-game">
                        1Win
                    </button>
                </article>

                <!-- RealsBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/reals.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/realsbet')" class="action-game">
                        RealsBet
                    </button>
                </article>

                <!-- B1 -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/b1.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/b1')" class="action-game">
                        B1
                    </button>
                </article>

                <!-- Pix Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/pixbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Pix Bet
                    </button>
                </article>

                <!-- Mesk -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/mesk.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Mesk
                    </button>
                </article>

                <!-- SportsBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/sportsbet.io.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/owin')" class="action-game">
                        SportsBet
                    </button>
                </article>

                <!-- Blaze -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/blaze.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/blaze')" class="action-game">
                        Blaze
                    </button>
                </article>

                <!-- Br4Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/br4bet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        Br4Bet
                    </button>
                </article>

                <!-- F12.Bet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/f12.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/mesk')" class="action-game">
                        F12.Bet
                    </button>
                </article>

                <!-- Betano -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/betano.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/betano')" class="action-game">
                        Betano
                    </button>
                </article>

                <!-- NetBet -->
                <article class="game">
                    <figure class="img-game">
                        <img src="@/assets/logos/netbet.png" alt="">
                    </figure>

                    <button @click="this.$router.push('velas-baixas/betano')" class="action-game">
                        NetBet
                    </button>
                </article>
            </section>
        </section>
    </section>
</template>

<style scoped>
#bg-hack-games {
    width: 100%;
    height: auto;
    background-image: url('../assets/hack.gif');
    background-repeat: no-repeat;
    background-size: cover;
}

#bg-games {
    width: 100%;
    height: auto;
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

@media screen and (max-width:850px) {
    #bg-hack-games {
        height: 100%;
    }

    #bg-games {
        height: 100%;
    }
}
</style>