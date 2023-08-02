<template>
    <div class="share">
        <div class="goodSface">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="goodNumber">
            <div></div>
            <span> {goodNumber} 人已赞</span>
            <div></div>
        </div>
        <div class="shareButton">
            <input type="submit" value="分享" />
            <input type="submit" value="点赞" />
        </div>
        <GameMessage />
    </div>
</template>

<script>

import GameMessage from "./GameMessage.vue"

export default {
    name: 'MyShare',
    components: {
        GameMessage
    }
}
</script>

<style>
.share {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.goodSface {
    overflow: hidden;
    white-space: nowrap;
    /* text-overflow: ellipsis; */
}

.goodSface>div {
    display: inline-block;
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: plum;
}

.goodNumber {
    margin-top: 5px;
}

.goodNumber>div {
    display: inline-block;
    background-color: #afafaf;
    width: 50px;
    /* line-height: 50px; */
    height: .5px;
    vertical-align: middle;
}

.goodNumber>span {
    color: #afafaf;
    font-size: 10px;
}

.shareButton {
    margin-block: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.shareButton>input {
    margin-inline: 10px;
    font-size: 15px;
    color: #949494;
    height: 40px;
    width: 90px;
    border-radius: 20px;
    border: white;
    background-color: #f5f5f5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
