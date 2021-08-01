$(document).ready(function(){
    let options = {

        // placeholder: "تاریخ",
        twodigit: false,
        nextButtonIcon: "images\homePage\timeir_next.png",
        previousButtonIcon: "images\homePage\timeir_prev.png",
        markToday: true,
        // gotoToday: true,
        forceFarsiDigits: true,
    
    }
    
  
    
    
    kamaDatepicker('membership-date', options);
    $(".blur-name-family").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-name-family");
     }
     else{
         $(this).next().addClass("blurLabel-name-family");
     }
     
    })
    $(".blur-mobile").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-mobile");
     }
     else{
         $(this).next().addClass("blurLabel-mobile");
     }
     
    })
    $(".blur-email").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-email");
     }
     else{
         $(this).next().addClass("blurLabel-email");
     }
     
    })
    $(".blur-password").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-password");
     }
     else{
         $(this).next().addClass("blurLabel-password");
     }
     
    })
    $(".blur-membership-time").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-membership-time");
     }
     else{
         $(this).next().addClass("blurLabel-membership-time");
     }
     
    })
    $(".blur-membership-type").blur(function(){
        if(!$(this).val()){
        $(this).next().removeClass("blurLabel-membership-type");
     }
     else{
         $(this).next().addClass("blurLabel-membership-type");
     }
     
    })
    
    $("#membership-date").focus(function(){
          $(".floating-label-date").addClass("blurLabel-date")
    })
    $("#membership-date").blur(function(){
        // alert("x")
        if(!$(this).val()){
           $(".floating-label-date").removeClass("blurLabel-date");
         }
         else{
             $(".floating-label-date").addClass("blurLabel-date");
         }
    })
    $("#state").focus(function(){
        $(".floating-label-state").css("display","block")
    })
    $("#state").blur(function(){
        if($("#state-option").is(":selected")){
            $(".floating-label-state").css("display","none");
         }
         else{
             $(".floating-label-state").css("display","block");
         }
    })

   
    var height=$(".abilities").height();
    $(".abilities").change(function(){
        
          
           console.log(height)
        if($(this).val().length>3){
          $(".select2-selection").css("height",2*height);
          flag=1;
        }
        else if($(this).val().length<=3){
           
            $(".select2-selection").css("height",height/2)
            flag=0;
        }
    })

    $(".abilities").on("select2:open",function(){
  
      $(".floating-label-abilities").addClass("blurLabel-abilities")
    })
    $(".abilities").on("select2:close",function(){
        console.log($(this).val().length)
            if($(this).val().length>0){
                
                $(".floating-label-abilities").addClass("blurLabel-abilities")
            }
            else{
               
                $(".floating-label-abilities").removeClass("blurLabel-abilities")
            }
        
    })
       
    
    $(".nav-link").click(function()
  {
 $(".nav-link").removeClass("active");
 $(this).addClass("active");
  
})

    $('.buttonLoc').click(function(e){
        var reMobile=/^0{1}(?:[0-9] ?){6,14}[0-9]$/;
        var mobile=$("#mobile").val();
        // var userName=$("#userName").val();
        // var reName = /^([^0-9]*)$/;
        if(!$("#mobile").val()||!$("#password").val()){
            e.preventDefault();
            $(".vali").css("display","block")
            $(".valiWhole").text("لطفا فیلد های ستاره دار را پر کنید")
        }
        else if(reMobile.test(mobile)==false||mobile.length!=11){
            
            e.preventDefault();
            $(".vali").css("display","block")
            $(".valiWhole").text("شماره تلفن همراه صحیح نیست")
            $("html,body").animate({scrollTop:0})
          }
         else if($("#password").val().length<8){
            e.preventDefault();
            $(".vali").css("display","block")
            $(".valiWhole").text("رمز عبور حداقل باید 8 رقم باشد")
            $("html,body").animate({scrollTop:0})
         }
        
})
})