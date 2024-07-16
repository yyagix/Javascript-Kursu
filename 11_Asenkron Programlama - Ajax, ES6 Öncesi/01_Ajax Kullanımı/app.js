// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();


    xhr.onprogress = function(){
        console.log("Yükleniyor...");           // 3. İşlem
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);     // 4. İşlem

            document.getElementById("ajax").innerHTML = this.responseText;
        }
    }

    /*          Eski Yöntem
    xhr.onreadystatechange = function(){
        
        if(this.status == 200 && this.readyState == 4){
                // Response Hazır
            console.log(this.responseText);
        }

    }
    */

    xhr.open("GET","example.txt",true);

    xhr.send();

});