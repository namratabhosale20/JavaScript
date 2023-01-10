
            function genrate()
            {
               
            var char ="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+|{}[]";
            var passwordlen=12;
            var password=" ";
                for(var i=0;i<=passwordlen;i++)
            {
                var randomnum=Math.floor(Math.random()* char.length)
                password += char.substring(randomnum,randomnum +1);
            }
            document.getElementById("password").value=password;
            }
       