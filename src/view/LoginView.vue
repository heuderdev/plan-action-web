<template>
    <div class="container">
        <div class="row">


            <!--  -->
            <div class="col-md-2"></div>
            <div class="col-md-8">
                
                <div class="panel panel-default">
                    <div class="panel-heading">Sistema de Login</div>
                    <div class="panel-body">
                        <form action="">
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="email" class="form-control">
                            </div>

                            <div class="form-group">
                                <label>Senha</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success">ENTRAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
            <!--  -->
{{ data_db }}
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import {http} from "../http/axios"
const data_db = ref(null);
    http.get("/publications").then(data=>{
        data_db.value = data;

    })


</script>