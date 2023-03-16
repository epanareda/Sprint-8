<template>
    <div class="login-msg-container">
        <div class="back-background"></div>
        <div class="text-msg-container">
            <div class="msg-img-container">
                <img :src="signinMsgMeaning === 'error' ? 
                    'https://cdn-icons-png.flaticon.com/512/5950/5950864.png' :
                    'https://cdn-icons-png.flaticon.com/512/148/148767.png'
                ">
            </div>
            <p>
                {{signinMsg}}
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SigninMessage",
    computed: {
        ...mapGetters(["signinMsg", "signinMsgMeaning"]),
    }
}
</script>

<style scoped>
    .back-background {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(00, 0, 0, 0.5);
        z-index: -1;
    }

    .login-msg-container {
        z-index: 3;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .text-msg-container {
        position: absolute;
        top: 30%;
        left: calc(50% - 300px);
        width: 600px;
        padding: 1rem 2rem;
        border-radius: 5px;
        background-color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .text-msg-container > p {
        color: white;
        margin: 0;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .msg-img-container {
        width: 30px;
    }

    .msg-img-container > img{
        width: 100%;
    }
</style>