
            // User Data(UserName & Password) Validation by onkeypress event
            /*function validateUserData(){
                let userId=document.getElementById("email").value;
                let pswd=document.getElementById("pswd").value;
                for(let user of users){
                    if(userId==user.userName && userId==""){
                        document.getElementById("userCheck").innerHTML="";
                        if(pswd==user.pswd && pswd==""){
                        document.getElementById("pswdCheck").innerHTML="";
                        }else{
                            document.getElementById("pswdCheck").innerHTML="Incorrect Password";
                         } break;
                     }else{
                         document.getElementById("userCheck").innerHTML="Incorrect Username";
                    }
                }        
            }*/
            function currentPage(){
                
            }
            

            function validateLogin(){
                let userId=document.getElementById("email").value;
                let pswd=document.getElementById("pswd").value;
                for(let user of users){
                    if(userId==user.userName){
                         document.getElementById("userCheck").innerHTML="";
                        if(pswd==user.pswd){
                            document.getElementById("pswdCheck").innerHTML="";
                            sessionStorage.setItem("USER",userId);
                            window.location.href="./index.html";
                        }else{
                            document.getElementById("pswdCheck").innerHTML="Incorrect Password";
                            break;
                        } 
                    }else{
                        document.getElementById("userCheck").innerHTML="Incorrect Username";
                    }
                }
            }

            function checkSession(){
                let session = sessionStorage.getItem("USER");
                if(session == null){
                    window.location.href="./account.html";
                }
            }


            function removeUser(){
                sessionStorage.removeItem("USER")
                window.location.href="./account.html";
             }


            