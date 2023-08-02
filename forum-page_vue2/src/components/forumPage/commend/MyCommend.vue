<template>
    <div class="commend-content0">
        <div class="commend-title">
            <div>你的专属推荐</div>
        </div>
        <div class="commend-content-title">
            <div class="commend-img">荐</div>
            <div class="t5">
                {subject}
            </div>
        </div>
        <div class="commend-content">
            <div class="commend-content-left">
                <div class="str">
                    {str}
                </div>
                <div class="commend-content-view">
                    {num_view}浏览
                </div>
            </div>
            <img src='../../../../public/image/penguin.gif' alt="" />
        </div>
    </div>
</template>

<script>
// import MyShare from "./share/MyShare.vue"

export default {
    name: 'MyCommend',
    // components: {
    //     MyShare
    // }
}
</script>

<style>
.t5 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.commend {
    flex: auto;
    order: 20;
}

.commend-title {
    font-size: 18px;
    border-top: 5px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
}

.commend-title>div {
    margin: 15px 20px 15px 20px;
}

.commend-content0 {
    padding: 15px 18px;
    border-bottom: 1px solid #f5f5f5;
}

.commend-content-title {
    display: flex;
    height: 25px;
    font-size: 18px;
    font-weight: bolder;

}

.commend-content-title>.commend-img {
    height: 18px;
    width: 18px;
    flex-shrink: 0;
    margin: 3px;
    background: linear-gradient(to right, #ffa500, #fff200);
    border-radius: 3px;
    font-size: 13px;
    text-align: center;
    line-height: 18px;
    color: white;
}

.commend-content-title-content {
    height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: bolder;
}

.commend-content {
    height: 80px;
    display: flex;
    color: #afafaf;
}

.str {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 45px;
    width: 100%;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 12px;
}

.commend-content>img {
    padding-right: auto;
    width: 300px;
    height: 70px;
    padding: 10px;
}

.commend-content-view {
    padding-top: 7px;
}
</style>
