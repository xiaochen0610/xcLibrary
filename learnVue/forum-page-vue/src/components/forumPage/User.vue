<script setup>

</script>

<template>
    <div className="user">
        <Link className="user-img" exact='ture' to='/userCard'>
        <img src={sface} alt="头像" />
        </Link>
        <div className="user0">
            <div className="user1">
                <Link to='/userCard' exact='ture'>
                <span className="nick">
                    {nick}
                </span>
                </Link>
                <span className="identity">
                    楼主
                </span>
            </div>
            <div className="user2">
                <span>1楼</span>
                <span> {dateline} </span>
                <span> {num_view}浏览 </span>
            </div>
        </div>
        <div className="button">
            <input type="submit" value="关注" />
        </div>
    </div>
</template>

<style scoped>
.user {
    display: flex;
    flex: auto;
    order: 0;
    margin-left: 15px;
}

.user>.user-img>img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 10px;
}

.user0 {
    justify-content: left;

}

.user1 {
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.nick {
    color: #000;
    font-weight: bolder;
}



.user2 {
    position: relative;
    top: 5px;
    color: #afafaf;
    font-size: 14px;
    z-index: -1;
}

.user span {
    padding: 2px;
}

.identity {
    position: relative;
    top: -2px;
    font-size: 1px;
    color: #79c2fb;
    border: solid;
    border-radius: 5px;
    z-index: -1;
}

.button {
    margin-left: auto;
}

.button>input {
    margin-right: 15px;
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
