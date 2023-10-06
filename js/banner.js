function firstImage() 
{
    const banner1 = document.getElementById('banner1');
    const banner2 = document.getElementById('banner2');

    if(banner1.style.display = "block"){
        banner1.style.display = "none";
        banner2.style.display = "block";
        banner1.attributeStyleMap.set('display','none');
    }else{
        banner1.style.display = "block";
        banner2.style.display = "none";
    }
};