$(function(){
    $(".container").fullpage({
        // 添加每个section的背景颜色
        sectionsColor: ["#fadd67","#84a2d4","#ef674d","#ffeedd","#d04759","#84d9ed","#8ac060"],
        // 是否垂直居中
        verticalCentered: false,
        // 显示指示器
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 1000,
        //加载完成后的回调函数
        afterLoad: function(link,index){
            var section = $(".section");
            console.log(index);
            section.eq(index-1).addClass('now');
        },
        onLeave: function(index,nextIndex,direction){
            if(index==2&&nextIndex==3){
                // console.log("hello");
                $(".section").eq(index-1).addClass("leaved");
            }else if(index==3&&nextIndex==4){
                $(".section").eq(index-1).addClass("leaved");
            }else if(index==5&&nextIndex==6){
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06 .box").addClass("show");
            }else if(index==6&&nextIndex==7){
                $(".screen07 .star img").each(function(i,item){
                    $(this).delay(i*0.5*1000).fadeIn();
                })
            }
        },
        afterRender: function(){
            $(".moredown").on("click",function(){
                $.fn.fullpage.moveSectionDown();
            });

            $(".screen04 .cart").on("transitionend",function(){
                $(".screen04 .address").show(1000,function(){
                    $(".screen04 .address").children(".name").fadeIn(1000);
                    $(".screen04 .text").addClass("show");
                })

            })
        }
    });
})