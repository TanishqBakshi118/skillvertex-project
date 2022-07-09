var bill=0;
var buy_list_names= new Array();
buy_list_names=[];
var buy_list_prices= new Array();
buy_list_prices=[];


var controller ={ name: "xbox controller", price:4999 }

var headset={ name:"razer headset",price:3499 }

var display={ name:"gaming monitor", price:29504 }

var streaming={ name:"streaming device", price:9499 }

var rgbfan={ name:"cooler master fan",price:1999 }

//For controller
document.querySelector(".controller-add").onclick=function(){
buy_list_names.push(controller.name);
buy_list_prices.push(controller.price);
window.alert("Added "+controller.name);
}

document.querySelector(".controller-rem").onclick=function(){
var position_name=buy_list_names.indexOf("xbox controller");
buy_list_names.splice(position_name,1);

var position_price=buy_list_prices.indexOf(4999);
buy_list_prices.splice(position_price,1);

window.alert("Removed "+controller.name);
}


//For headset
document.querySelector(".headset-add").onclick=function(){
    buy_list_names.push(headset.name);
    buy_list_prices.push(headset.price);
    window.alert("Added "+headset.name);
    }
    
document.querySelector(".headset-rem").onclick=function(){
    var position_name=buy_list_names.indexOf("razer headset");
    buy_list_names.splice(position_name,1);
    
    var position_price=buy_list_prices.indexOf(3499);
    buy_list_prices.splice(position_price,1);
    
    window.alert("Removed "+headset.name);
    }


//For display
document.querySelector(".display-add").onclick=function(){
    buy_list_names.push(display.name);
    buy_list_prices.push(display.price);
    window.alert("Added "+display.name);
    }
    
document.querySelector(".display-rem").onclick=function(){
    var position_name=buy_list_names.indexOf("gaming monitor");
    buy_list_names.splice(position_name,1);
    
    var position_price=buy_list_prices.indexOf(29504);
    buy_list_prices.splice(position_price,1);
    
    window.alert("Removed "+display.name);
    }


//For streaming device
document.querySelector(".streaming-add").onclick=function(){
    buy_list_names.push(streaming.name);
    buy_list_prices.push(streaming.price);
    window.alert("Added "+streaming.name);
    }
    
document.querySelector(".streaming-rem").onclick=function(){
    var position_name=buy_list_names.indexOf("streaming device");
    buy_list_names.splice(position_name,1);
    
    var position_price=buy_list_prices.indexOf(9499);
    buy_list_prices.splice(position_price,1);
    
    window.alert("Removed "+streaming.name);
    }


//For RGB Fan
document.querySelector(".rgb-add").onclick=function(){
    buy_list_names.push(rgbfan.name);
    buy_list_prices.push(rgbfan.price);
    window.alert("Added "+rgbfan.name);
    }
    
document.querySelector(".rgb-rem").onclick=function(){
    var position_name=buy_list_names.indexOf("cooler master fan");
    buy_list_names.splice(position_name,1);
    
    var position_price=buy_list_prices.indexOf(1999);
    buy_list_prices.splice(position_price,1);
    
    window.alert("Removed "+rgbfan.name);
    }

    function returnlist(){
        let text="";
        for(let i=0;i < buy_list_names.length;i++)
        {text+=buy_list_names[i] + "<br>";}
    
    document.getElementById("items").innerHTML=text;
    }

    function returnprice(){
        let sum=0;
        for(let i=0;i<buy_list_prices.length;i++)
        {sum+=buy_list_prices[i]}

    document.getElementById("amount").innerHTML=sum;
    }

    function saythanks(){
        alert("Thank you for your purchase !!");
        document.write("Refresh to continue");
    }