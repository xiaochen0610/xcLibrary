<template>
    <div class="page">
        <span>{subject}</span>
        <div class="message">
            <span>
                {message}
            </span>
        </div>
        <MyShare />
    </div>
</template>

<script>
import MyShare from "./share/MyShare.vue"

export default {
    name: 'MyPage',
    components: {
        MyShare
    }
}
</script>

<style>
.page {
    flex: auto;
    order: 10;
    margin: 20px 20px 0;
}

.page>span {
    font-weight: 700;
    font-size: 20px;
}

.message {
    margin-top: 10px;
}
</style>
