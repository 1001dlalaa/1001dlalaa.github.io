import{initializeApp}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import{getAnalytics}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import{getDatabase,ref,child,get}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";


let ledoni =JSON.parse(localStorage.codeEntre);
const app=initializeApp(
    {apiKey:ledoni[0],
        authDomain:ledoni[1],
        databaseURL:ledoni[2],
        projectId:ledoni[3],
        storageBucket:ledoni[4],
        messagingSenderId:ledoni[5],
        appId:ledoni[6],
        measurementId:ledoni[7]
    }),
       
    analytics=getAnalytics(app),database=getDatabase(app);
        
    let gebi=a=>document.getElementById(a);
    
    export{app,database,getDatabase,ref,child,get,gebi};
/* …or push an existing repository from the command line
git remote add origin2 https://github.com/virefie/virefie.github.io.git
git branch -M main
git push -u origin2 main

https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js,
https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js,
https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js,
AIzaSyAg_3ncEmrp0O29_3jM6LkzL1yOu5paIPI,
cnfrmpage.firebaseapp.com,
https://cnfrmpage-default-rtdb.europe-west1.firebasedatabase.app,
cnfrmpage,
cnfrmpage.appspot.com,
672008583246,
1:672008583246:web:04e62617ab39a150632b1f,
G-9BQZPWC9SG,
confirmationpages896@gmail.com,
confirmPAGE48.



https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js,https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js,https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js,AIzaSyAg_3ncEmrp0O29_3jM6LkzL1yOu5paIPI,cnfrmpage.firebaseapp.com,https://cnfrmpage-default-rtdb.europe-west1.firebasedatabase.app,cnfrmpage,cnfrmpage.appspot.com,672008583246,1:672008583246:web:04e62617ab39a150632b1f,G-9BQZPWC9SG,confirmationpages896@gmail.com,confirmPAGE48.

*/
