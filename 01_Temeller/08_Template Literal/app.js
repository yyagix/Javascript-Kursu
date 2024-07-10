const isim = "Yağız Efe Ünal";
const departman = "Bilişim";
const maas = 4000;



// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;
                                    

// const a = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;


/* const html = "<ul> "+ 
            "<li>" + isim + "</li>" +
            "<li>" + departman + "</li>" +
            "<li>" + maas + "</li>" +
            "</ul>";
*/

function a() {
    return "Merhaba";
}

const html = `
            <ul>
                <li>${isim}</li>
                <li>${departman}</li>
                <li>${maas}</li>
                <li>${10 / 4}</li>
                <li>${a()}</li>
                
            `;

document.body.innerHTML = html;