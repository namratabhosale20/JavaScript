var name, email;
        document.getElementById("name").addEventListener("keyup", function () {
            name = document.getElementById("name").value;////or name=this.value;(not use this also)
            document.getElementById("name2").innerHTML = name;//innerhtml.this.value{directly use this}

        })

        document.getElementById("email").addEventListener("keyup", function () {
            email = document.getElementById("email").value
            document.getElementById("email2").innerHTML = email;
        })
        var samosa_price = 10, kachori_price = 12, vadapav_price = 60, maggi_price = 50;
        var samosa_q = 0,kachori_q=0,vadapav_q=0,maggi_q=0;
        var billstatement="";
        var samosapriceshow="",kachoripriceshow="",vadapavpriceshow="",maggipriceshow="";

        document.getElementById("samosa").addEventListener("keyup", function () {
            if (this.value == "" || this.value == 0) {
                // document.getElementById("billstatement").innerHTML = ""
                samosapriceshow="";
                showbill()
            }
            else {


                samosa_q = this.value
                // document.getElementById("billstatement").innerHTML = "<tr><td>Samosa</td><td>Rs." + samosa_price + "</td><td>" + samosa_q + "</td><td>" + samosa_price + "x" + samosa_q + "= " + samosa_price * samosa_q + "</td></tr>"
                samosapriceshow="<tr><td>Samosa</td><td>Rs." + samosa_price + "</td><td>" + samosa_q + "</td><td>" + samosa_price + "x" + samosa_q + "= " + samosa_price * samosa_q + "</td></tr>"
                showbill();
            }
        });

        document.getElementById("kachori").addEventListener("keyup",function(){
            if(this.value==""||this.value==0){
                // document.getElementById("billstatement").innerHTML="";
                kachoripriceshow="";
                showbill();
            }
            else{
                kachori_q=this.value;
                // document.getElementById("billstatement").innerHTML="<tr><td>Kachori</td><td>Rs."+kachori_price+"</td><td>"+kachori_q+"</td><td>"+kachori_price+"x"+kachori_q+"="+kachori_price*kachori_q+"</td></tr>"
                 kachoripriceshow="<tr><td>Kachori</td><td>Rs."+kachori_price+"</td><td>"+kachori_q+"</td><td>"+kachori_price+"x"+kachori_q+"="+kachori_price*kachori_q+"</td></tr>"
                showbill();
            }
        })

        document.getElementById("vadapav").addEventListener("keyup",function(){
            if(this.value==""||this.value==0){
                // document.getElementById("billstatement").innerHTML="";
                vadapavpriceshow="";
                showbill();
            }
            else{
                vadapav_q=this.value;
                // document.getElementById("billstatement").innerHTML="<tr><td>Kachori</td><td>Rs."+kachori_price+"</td><td>"+kachori_q+"</td><td>"+kachori_price+"x"+kachori_q+"="+kachori_price*kachori_q+"</td></tr>"
                 vadapavpriceshow="<tr><td>Vadapav</td><td>Rs."+vadapav_price+"</td><td>"+vadapav_q+"</td><td>"+vadapav_price+"x"+vadapav_q+"="+vadapav_price*vadapav_q+"</td></tr>"
                showbill();
            }
        })
        document.getElementById("maggi").addEventListener("keyup",function(){
            if(this.value==""||this.value==0){
                // document.getElementById("billstatement").innerHTML="";
                  maggipriceshow="";
                showbill();
            }
            else{
                maggi_q=this.value;
                // document.getElementById("billstatement").innerHTML="<tr><td>Kachori</td><td>Rs."+kachori_price+"</td><td>"+kachori_q+"</td><td>"+kachori_price+"x"+kachori_q+"="+kachori_price*kachori_q+"</td></tr>"
                 maggipriceshow="<tr><td>Maggi</td><td>Rs."+maggi_price+"</td><td>"+maggi_q+"</td><td>"+maggi_price+"x"+maggi_q+"="+maggi_price*maggi_q+"</td></tr>"
                showbill();
            }
        })

        function showbill(){
            document.getElementById("billstatement").innerHTML=samosapriceshow+kachoripriceshow+vadapavpriceshow+maggipriceshow;   
            document.getElementById("amount").innerHTML=samosa_price*samosa_q+kachori_price*kachori_q+vadapav_price*vadapav_q+maggi_price*maggi_q;  
          }
