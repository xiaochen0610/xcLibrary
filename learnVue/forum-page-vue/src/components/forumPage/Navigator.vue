<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div className="navigator">
        <div className="navigator-left">

            <img src="/image/back.png" alt='' />
            <div className="navigator-left-title">{{ title }}</div>
        </div>
        <div className="navigator-right">
            <span>进论坛</span>
            <img src='/image/more.png' alt='' />
        </div>
    </div>
</template>

<style scoped>
.navigator {
    display: flex;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    font-size: 17px;
    height: 50px;
    border-bottom: 1px solid #ebe7e7;
    background-color: white;
}

.navigator-left {
    display: flex;
    line-height: 50px;
}

.navigator-left-title {
    min-width: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.navigator-left>img {
    height: 24px;
    margin: 13px;
}

.navigator-right>img {
    height: 36px;
    margin: 7px;
}

button {
    border: #ebe7e7;
    background-color: #fff;
}

.navigator-right {
    display: flex;
    font-weight: 700;
    color: #7ba77f;
    margin-left: auto;
    line-height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
