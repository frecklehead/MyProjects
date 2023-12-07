setInterval(()=>{
   d= new Date();
    h= d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hourRotation=h*30+(m/2);
    minuteRotation= m*6;
    secondRotation= s*6;
    hour.style.transform=`rotate(${hourRotation}deg)`; 
minute.style.transform=`rotate(${minuteRotation}deg)`;
    second.style.transform=`rotate(${secondRotation}deg)`;

    


},1000)

