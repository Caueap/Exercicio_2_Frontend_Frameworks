<template>
    <div id="deposit-withdraw-maindiv">
        <div id="content-div">
            <div class="input-button-div">
                <input id="deposit-input" type="text" v-model="depositAmount">
                <button id="deposit-btn" @click="deposit">Depositar</button>

            </div>
            <div class="input-button-div">
                <input id="withdraw-input" type="text" v-model="withdrawAmount">
                <button id="withdraw-btn" @click="withdraw">Sacar</button>

            </div>

            <p id="account-balance-parag">
                Saldo:
                <span :style="{ color: finalAmount > 0 ? 'green' : finalAmount < 0 ? 'red' : 'white' }">{{ finalAmount }}
                </span>
            </p>

            <Button id="go-back-btn" @click="goBack">Voltar</Button>


        </div>

    </div>
</template>

<script>
export default {
    name: 'DepositWithdraw',
    
    data() {
        return {
            depositAmount: 0,
            withdrawAmount: 0,
            finalAmount: 0,   
        }
    },
    methods: {
        deposit() {
            this.finalAmount = parseFloat(this.finalAmount) + parseFloat(this.depositAmount)
        },
        withdraw() {
            this.finalAmount = parseFloat(this.finalAmount) - parseFloat(this.withdrawAmount)
        },
        goBack() {
            this.$router.push('/')
        }
    },
    
  created() {
    this.finalAmount = this.$route.query.data
  }

   
}

</script>

<style scoped>
#deposit-withdraw-maindiv {
    background-color: #432818;
    width: 400px;
    height: 600px;
    margin: 0 auto;
}

#content-div {
    margin-left: 75px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}



#deposit-input {
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 3px;
}

#withdraw-input {
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 3px;
}

#deposit-btn {
    height: 33px;
    border: none;
    border-radius: 3px;
    width: fit-content;
    background-color: #99582a;
    color: #fff;
}

#withdraw-btn {
    height: 33px;
    border: none;
    border-radius: 3px;
    width: 69.05px;
    background-color: #99582a;
    color: #fff;
}

.input-button-div {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
}

#account-balance-parag {
    color: #fff;
}

#go-back-btn {
    height: 33px;
    border: none;
    border-radius: 3px;
    width: 69.05px;
    background-color: #99582a;
    color: #fff;
}

</style>