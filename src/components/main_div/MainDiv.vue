<template>
    <div>
        <div id="maindiv">
            <div id="content-div">
                <p id="bank-title-parag">Seu banco digital</p>
                <div id="input-button-div">
                    <input id="bank-input-area" type="text" placeholder="R$: 000,00" v-model="checkAmount">
                    <button id="bank-input-btn"  @click="handleClick" :class="{ 'splash-animation': isClicked }">Criar
                        conta</button>

                </div>
                <p id="bank-input-warn-parag">Você precisa depositar pelo menos <br> R$100,00 para criar sua conta</p>
                <p id="check-message">{{ checkMessage }}</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'MainDiv',

    data() {
        return {
            isClicked: false,
            checkAmount: 0,
            checkMessage: ''
            
        }
    },
    methods: {
         handleClick() {
            this.isClicked = !this.isClicked;
            if (this.checkAmount < 100) {
                this.checkMessage = 'O valor mínimo para criação de conta não foi satisfeito';
            } else {
                this.$router.push({path: '/deposit-withdraw', query: {data: this.checkAmount}})
            }
        }
    } 
}
</script>


<style scoped>
#maindiv {
    background-color: #432818;
    margin: 0 auto;
    width: 400px;
    height: 600px;
}

#content-div {
    margin-left: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#bank-title-parag {
    color: #99582a;
    font-size: 30px;
}

#input-button-div {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
}

#bank-input-area {
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 3px;

}

#bank-input-area:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

#bank-input-btn {
    height: 33px;
    border: none;
    border-radius: 3px;
    width: fit-content;
    background-color: #99582a;
    color: #fff;

}

#bank-input-warn-parag {
    color: #fff;
}

#check-message {
    color: #fff;
}

.splash-animation {
    animation: splash 0.2s ease;
}

@keyframes splash {
    0% {
        background-color: #99582a;
    }

    100% {
        background-color: #ff5733;
    }
}
</style>