{
    let imgs=document.querySelectorAll(".imgbox li");
    let pages=document.querySelectorAll(".pagebox li");
    let bannert=document.querySelector(".bannert");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    // console.log(imgs);
    // console.log(pages);
    pages.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动播放
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
    }
        //手指移入时停下来，即清除轮播
    bannert.onmouseenter=function () {
        clearInterval(t);
    }
    //手指离开时继续   再次开启轮播效果
    bannert.onmouseleave=function () {
        t=setInterval(move,3000);
    }
    //点击事件
    next.onclick=function () {
        move();
    };
    prev.onclick=function () {
        n-=2;
        move();
    }
}
//文字轮播
{
   let mid_wenzi=document.querySelectorAll(".mid_wenzi");
   let inner=document.querySelector(".mid_wenzi_inner");
   // let a=mid_wenzi.length;
   let n=0;

    let t=setInterval(move,4000);
    function move() {
        n++;
        if(n===mid_wenzi.length){
            n=0;
        }
        if(n<0){
            n=mid_wenzi.length-1;
        }
        for(let i=0;i<mid_wenzi.length;i++){
           mid_wenzi[i].classList.remove("active");
           inner.style.marginTop=-85*n+"px";
        }
        mid_wenzi[n].classList.add("active");
        inner.style.marginTop=-85*n+"px"; 
         inner.style.transition="all .5s";   
    } 
    inner.addEventListener("transitionend",function(){
        flag=true;
       
        if(n===3){
            inner.style.transition="none";
            inner.style.marginTop="-85px"; 
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginTop="-170px";
            n=2;
        }
   })


}
// 侧导航
{
    let labels=document.querySelectorAll(".banner_nav li");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}
//leftbar效果
{
    let topbar=document.querySelector(".topbar");
    let leftbar=document.querySelector(".leftbar");
     let hezi=document.querySelector(".topbar_hezi");
    let shangpin=document.querySelector(".topbar_left");
    let nav=document.querySelector(".banner_nav2")
    window.onscroll=function () {
        let st= document.documentElement.scrollTop;
        if(st>700){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>2600 && st<8900){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
        if(st>700){
            nav.style.display="none";
        }else{
            topbar.style.display="none";
        }

    }
    shangpin.onmouseenter=function(){
        nav.style.display="block";
    }
     hezi.onmouseleave=function(){
        nav.style.display="none";
    }
}
//楼层跳转
{
let tips = document.querySelectorAll(".tips");
    let containers = document.querySelectorAll(".container");
    let flag=true;
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            flag=false;
            let ot = containers[index].offsetTop-50;//模块距顶部的距离减去50
            // console.log(ot);
            // document.documentElement.scrollTop=ot;
            let now = document.documentElement.scrollTop;//获取当前滚动高度 随时变化
            let speed = (ot - now) / 8;//一共走8次，不管点第几个模块，她都是走8次，每次的速度不同
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 25);
            for(let i=0;i<tips.length;i++){
                tips[i].classList.remove("active");
            }
            tips[index].classList.add("active");
        };
        //addEventListener 给一个事件添加很多个事件处理程序
        window.addEventListener("scroll", function () {
            let st = document.documentElement.scrollTop;
            if(flag){
                for (let i = 0; i < containers.length; i++) {
                    if (st > containers[i].offsetTop -150) {
                        for (let i = 0; i < tips.length; i++) {
                            tips[i].classList.remove("active");
                        }
                        tips[i].classList.add("active");
                    }
                }
            }
        })

    })
}
//单击搜索框出现
{
    let search=document.querySelector(".search_keyword");
    let kuang=document.querySelector(".topbar_onclick");
    search.onclick=function(){
        kuang.style.display="block";
    }
}
//点击回到顶部
 {let totop=document.querySelector(".return");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=40;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },20)
    }
}
{let totop=document.querySelector(".return2");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=40;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },20)
    }
}
//大聚惠效果
{
    const prev=document.querySelector(".nr_prev");
    const next=document.querySelector(".nr_next");
    const inner=document.querySelector(".dajuhui_inner");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
        n++;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-1000*n+"px";
        }
   }
   prev.onclick=function(){
    if(flag){
        flag=false;
        n--;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-1000*n+"px";
    }
   }
   inner.addEventListener("transitionend",function(){
        flag=true;
       
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-1000px"; 
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-3000px";
            n=3;
        }
   })

}

//排行榜
{   
  
    let prev=document.querySelector(".hh_prev");
    let next=document.querySelector(".hh_next");
    let inner=document.querySelector(".hao_inner");
    let contents=document.querySelectorAll(".paihang_xiaoguo");
    let pagers=document.querySelectorAll(".pagers")
   
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
        n++;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
        }
   }
   prev.onclick=function(){
    if(flag){
        flag=false;
        n--;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
    }
   }
   inner.addEventListener("transitionend",function(){
        flag=true;
       
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-390px"; 
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1170px";
            n=3;
        }
   })

    let obj=pagers[0];
    pagers.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.classList.remove("active");
            this.classList.add("active");
            // obj=ele;
            obj=this;
            inner.style.marginLeft=-390*index+"px";
            n=index;
        }
    })
    
    
}

//必清清单
{
    const prev=document.querySelector(".nr_prev11");
    const next=document.querySelector(".nr_next11");
    const inner=document.querySelector(".biqiang_right_inner");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
        n++;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
        }
   }
   prev.onclick=function(){
    if(flag){
        flag=false;
        n--;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
    }
   }
   inner.addEventListener("transitionend",function(){
        flag=true;
       
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-390px"; 
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1170px";
            n=3;
        }
   })

}


//小视频  
{
    const prev=document.querySelector(".nr_prev21");
    const next=document.querySelector(".nr_next21");
    const inner=document.querySelector(".tupian_xiaoguo");
    
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
        n++;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
        }
   }
   prev.onclick=function(){
    if(flag){
        flag=false;
        n--;
        inner.style.transition="all .5s";
        inner.style.marginLeft=-390*n+"px";
    }
   }
   inner.addEventListener("transitionend",function(){
        flag=true;
       
        if(n===3){
            inner.style.transition="none";
            inner.style.marginLeft="-390px"; 
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-780px";
            n=2;
        }
   })
   
}
{
    const imgbox=document.querySelectorAll(".tupian_right_imgbox");
   const item=document.querySelectorAll(".tupian_right_xiaoitem");
   item.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(var i=0;i<item.length;i++){
                item[i].classList.remove("active");
                imgbox[i].classList.remove("active");
            }
            //this ele pagers[index]
            ele.classList.add("active");
            imgbox[index].classList.add("active");
            }
    })
}

//头部nav效果
{
    let nav=document.querySelectorAll(".nav_dh");
    let box=document.querySelectorAll(".nav_daohang_xiaoguo");  
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){   
            box[index].style.display="block";
        }
        ele.onmouseleave=function(){
            box[index].style.display="none";
        }
    })
}

//头部点击  购物车
{
    let nav=document.querySelector(".topbar_right_w3");
    let box=document.querySelector(".topbar_con"); 
    let btn=document.querySelector(".topbar_gouwuche"); 
    nav.onmouseenter=function(){
        box.style.display="block";
    }
    btn.onmouseleave=function(){
         box.style.display="none"; 
    }
}
//右侧导航
{
    let nav=document.querySelectorAll(".rightbar_icon_item");
    let box=document.querySelectorAll(".rightbar_content");  
    // let box2=document.querySelectorAll(".rightbar_content5");  
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){   
            box[index].style.display="block";
            // box[index].style.height="30px";
            // box2[index].style.height="160px";

        }
        ele.onmouseleave=function(){
            box[index].style.display="none";
            // box[index].style.height="0px";
            //  box2[index].style.height="0px";

        }
    })
}