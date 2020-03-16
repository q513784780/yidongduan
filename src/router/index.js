import Vue from 'vue'
import Router from 'vue-router'

let Chengren=()=>import("@/views/er/chengren.vue")
let Hot=()=>import("@/views/er/hot.vue")
let My=()=>import("@/views/er/my.vue")
let Zhiye=()=>import("@/views/er/zhiye.vue")




let Gailun=()=>import("@/views/gailun/gailun.vue")


let Myclass=()=>import("@/views/myclass.vue")
let Classfen=()=>import("@/views/classfen.vue")
let Am=()=>import("@/views/am.vue")




// 视频下边的内容

let Mulu=()=>import("@/views/mulu.vue")
let Jieshao=()=>import("@/views/jieshao.vue")



Vue.use(Router)

export default new Router({
    routes: [
          // 视频下边的内容
        { name:"mulu",path: '/mulu', component: Mulu },
        { name:"jieshao",path: '/jieshao', component: Jieshao },

        { name:"myclass",path: '/myclass', component: Myclass },
        { 
            name:"classfen",
            path: '/classfen',
            component: Classfen,
            children:[
                { name:"chengren",path: 'chengren', component: Chengren },
                { name:"hot",
                path: 'hot',
                 component: Hot ,
                },

                
                { name:"my",path: 'my', component: My },
                { name:"zhiye",path: 'zhiye', component: Zhiye },
              
            ]
        },
        { name:"am",path: '/am', component: Am},
        { name:"gailun",path: '/gailun', component: Gailun },
        // {path:"/*",redirect:"/mulu"},
        {path:"/*",redirect:"/myclass"},


           
             
        













       
    ]
}
)
