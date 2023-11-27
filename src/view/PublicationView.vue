<template>
    <div class="container">

        <div class="row">
            <!--  -->
            <div class="col-md-12" v-for="item in data_db" style="border: 1px solid #ccc; padding: 5px; margin-bottom: 10px;">
                <div class="video-container">
                    <div v-if="item.video" class="embed-responsive embed-responsive-16by9">
                        <iframe style="border: 3px solid #ccc; border-radius: 4px;" :src="item.video" :title="item.title"
                            width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen></iframe>

                    </div>
                    <div v-else>
                        Publicação não possui vídeo
                    </div>
                </div>
                <h3>{{ item.title }}</h3>
                <br>

                <div class="info-user">
                    <div class="avatar">
                        <img class="img-avatar" src="../assets/avatar.png" alt="" srcset="">
                    </div>
                    <div class="info">
                        <span class="username">{{ item.user.username }}</span>
                        <span>{{ item.sector.name }} - {{ item.sector.time.name }}</span>
                        <span>{{ formattedDate(item.createdAt) }}</span>
                    </div>
                </div>
                <div class="description">
                    {{ item.description }}
                </div>
                <hr>
            </div>
            <!--  -->
        </div>
    </div>
</template>

<style scoped>
.info-user {
    display: flex;
    height: 100px;
    align-items: center;
}

.avatar{
    border: 1px solid #ccc;
    border-radius: 50%;
}
.img-avatar {
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f8f8f8;
    align-items: center;
    justify-content: center;
}

.info {
    display: flex;
    flex-direction: column;
    margin-left: 13px;

}

.description {
    background-color: #f8f8f8;
    border-radius: 1px solid #e7e7e7;
    padding: 10px;
    margin-bottom: 20px;
}
.username{
    font-weight: bold;
}
</style>

<script setup>
import { ref } from 'vue';
import { http } from "../http/axios"
import { formattedDate } from "../utils/data"
const data_db = ref(null);
http.get("/publications").then(data => {
    data_db.value = data.data;

})


</script>