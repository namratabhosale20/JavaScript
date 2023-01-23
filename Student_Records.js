var entry = document.getElementById("entry");
        entry.addEventListener('click', displayDetails);
        var row = 1;
        function displayDetails() {
            var name = document.getElementById("name").value
            var age = document.getElementById("age").value
            var mail = document.getElementById("mail").value
            var phone = document.getElementById("phone").value
            var gen=document.getElementById("gen").value;

            if (!name || !age || !mail || !phone) {
                alert("Please Enter Details!!")
                return;
            }

            var display = document.getElementById("display");
            var newrow = display.insertRow(row);
            var cell1 = newrow.insertCell(0);
            var cell2 = newrow.insertCell(1);
            var cell3 = newrow.insertCell(2);
            var cell4 = newrow.insertCell(3);
            

            cell1.innerHTML = name;
            cell2.innerHTML = age;
            cell3.innerHTML = mail;
            cell4.innerHTML = phone;
            row++;
        }
