 const users= [
    {userName:"grocerycart@gmail.com",pswd:"Spice@5s",userType:"Client"}
 ]

 const products=[
    {prodId:1001,url:"./images/dryfruits-almonds.webp",category:"Dry Fruits",title:"Almonds",desc:"Grade-'A' Almonds",price:"500",mrp:"550"},
    {prodId:1002,url:"./images/dryfruits-grapes.webp",category:"Dry Fruits",title:"Grapes",desc:"Grade-'A' Grapes",price:"450",mrp:"550"},
    {prodId:1003,url:"./images/dryfruits-pista.webp",category:"Dry Fruits",title:"Pista",desc:"Grade-'A' Pista",price:"400",mrp:"550"},
    {prodId:1004,url:"./images/dryfruits-pigs.webp",category:"Dry Fruits",title:"Pigs",desc:"Grade-'A' Pigs",price:"550",mrp:"550"},
    {prodId:1005,url:"./images/dryfruits-walnuts.webp",category:"Dry Fruits",title:"Walnuts",desc:"Grade-'A' Walnuts",price:"440",mrp:"550"},
    {prodId:1006,url:"./images/dryfruits-grapes.webp",category:"Dry Fruits",title:"Grapes",desc:"Grade-'B' Grapes",price:"300",mrp:"550"},
    {prodId:1007,url:"./images/spice-star anise.webp",category:"Spice",title:"Star Anise",desc:"Grade-'A' Star Anise",price:"750",mrp:"550"},
    {prodId:1008,url:"./images/spice-cardamom.webp",category:"Spices",title:"Cardamom",desc:"Grade-'A' Cardamom",price:"800",mrp:"550"},
    {prodId:1009,url:"./images/spice-nutmeg.webp",category:"Spices",title:"Nutmeg",desc:"Grade-'A' Nutmeg",price:"800",mrp:"550"},
    {prodId:1010,url:"./images/spice-clove.webp",category:"Spices",title:"Clove",desc:"Grade-'A' Clove",price:"800",mrp:"550"},
    {prodId:1011,url:"./images/spice-cinnamon.webp",category:"Spices",title:"Cinnamon",desc:"Grade-'A' Cinnamon",price:"800",mrp:"550"},
    {prodId:1012,url:"./images/spice-black cardamom.webp",category:"Spices",title:"Black Cardamom",desc:"Grade-'A' Black Cardamom",price:"800",mrp:"550"},
    {prodId:1013,url:"./images/spice-dried ginger.webp",category:"Spices",title:"Dried Ginger",desc:"Grade-'A' Dried Ginger",price:"800",mrp:"550"},
    {prodId:1014,url:"./images/spice-cubeb pepper.webp",category:"Spices",title:"Cubeb Pepper",desc:"Grade-'A' Cubeb Pepper",price:"800",mrp:"550"},
    {prodId:1015,url:"./images/spice-coriander.webp",category:"Spices",title:"Coriander",desc:"Grade-'A' Coriander",price:"800",mrp:"550"},
    {prodId:1016,url:"./images/spice-black sesame.webp",category:"Spices",title:"Black Sesame",desc:"Grade-'A' Black Sesame",price:"800",mrp:"550"},
    {prodId:1017,url:"./images/spice-red chilly.webp",category:"Spices",title:"Red Chilly",desc:"Grade-'A' Red Chilly",price:"800",mrp:"550"},
    {prodId:1018,url:"./images/spice-fenugreek seed.webp",category:"Spices",title:"Fenugreek Seed",desc:"Grade-'A' Fenugreek Seed",price:"800",mrp:"550"},
    {prodId:1019,url:"./images/spice-dried rosemary.webp",category:"Spices",title:"Dried Rosemary",desc:"Grade-'A' Dried Rosemary",price:"800",mrp:"550"},
    {prodId:1020,url:"./images/spice-white mustard.webp",category:"Spices",title:"White Mustard",desc:"Grade-'A' White Mustard",price:"800",mrp:"550"},
    {prodId:1021,url:"./images/spice-saffron.webp",category:"Spices",title:"Saffron",desc:"Grade-'A' Saffron",price:"800",mrp:"550"}
 ]









 function totalAmount() {
   let cartItems = JSON.parse(sessionStorage.getItem("CART_ID"));
   console.log(cartItems);

   if (cartItems !== null && cartItems.length > 0) {
       var tot_amnt = 0;
       var discount = 0;

       for (var i = 0; i < cartItems.length; i++) {
           console.log(cartItems[i]);
           
           var product = products.find(Prod => Prod.prodId == cartItems[i]);
           
           if (product) {
           tot_amnt += product.mrp;
           discount += product.price;
           }
       }

       var tot_discount = ((tot_amnt - discount) / 10);
       console.log("Total Amount:", tot_amnt);
       console.log("Discount:", discount);
       console.log("Total Discount:", tot_discount);
   } else {
       console.log("Cart is empty");
   }

   


   document.getElementById("price_sec").innerHTML='<div>'+
                       '<h4>Price  Details</h4>'+
                       '<div class="row">'+
                           '<div class="col">'+
                               '<p>Total Product Price</p>'+
                           '</div>'+
                           '<div class="col">'+
                               '<p>+ ₹451</p>'+
                           '</div>'+
                       '</div>'+
                       '<div class="row">'+
                           '<div class="col">'+
                               '<p>Total Discounts</p>'+
                           '</div>'+
                           '<div class="col">'+
                               '<p>- ₹19</p>'+
                           '</div>'+
                       '</div>'+
                       '<div class="row tot_order">'+
                           '<div class="col">'+
                               '<p><b>Order Total</b></p>'+
                           '</div>'+
                           '<div class="col">'+
                               '<p><b>₹432</b></p>'+
                           '</div>'+
                       '</div>'+
                       '<div class="discount ds-flx">'+
                           '<img src="././images/discount.png" alt="">'+
                           '<p><b> Yay! Your total discount is ₹19</b></p>'+
                       '</div>'+
                       '<div class="btn_info">'+
                           '<p>Clicking on ‘Continue’ will not deduct any money</p>'+
                       '</div>'+
                       '<div class="continue_btn">'+
                           '<button type="submit">Continue</button>'+
                       '</div>'+
                   '</div>';
}
