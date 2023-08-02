<template>
    <div class="gameMessage">
        <img src="../../../../../public/image/penguin.gif" alt="" />

        <div class="gameMessage-left">
            <div class="gameMessage-left1">
                {title}
            </div>
            <div class="gameMessage-left2">
                <div>
                    <span class="num">???</span>
                    <span>成员</span>
                </div>
                <div>
                    <span class="num">???</span>
                    <span>昨日更新</span>
                </div>
            </div>
        </div>
        <div class="gameMessage-right">
            <input type="submit" value="加入" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameMessage',

}
</script>

<style>
.gameMessage {
    display: flex;
    font-display: row;
    height: 100px;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid #f5f5f5;

}

.gameMessage>img {
    height: 70px;
    width: 70px;
    margin: 15px 0 15px;
}

.gameMessage-left {
    display: flex;
    flex-direction: column;
    margin: auto auto auto 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.gameMessage-left1 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    margin-right: auto;
}

.gameMessage-left2 {
    margin-right: auto;
    color: #afafaf;
    font-size: 13px;
    font-weight: 700;
}

.gameMessage-left2>div {
    display: inline;
    margin: 3px;
}

.gameMessage-left2>div>.num {
    color: #f1ac5e;
}

.gameMessage-right>input {
    margin: 30px 0 30px auto;
    color: #78a57a;
    font-size: 15px;
    font-weight: 700;
    background-color: #f0f7f0;
    width: 90px;
    height: 40px;
    border-radius: 20px;
    border: white;
}
</style>
