class Product{

    constructor(name, price,year){
        this.name=name;
        this.price=price;
        this.year=year;
    }

}

class Ui{

    addProduct(product){
       const productList=  document.getElementById("product-list");
       const element = document.createElement('div');
       element.innerHTML=`
         <div class="card text-center mb-4">

            <div class="card-body">
            
            <strong>Product name : </strong> ${product.name}
            <strong>Product price: </strong> ${product.price}
            <strong>Product year :</strong>${product.year}
            <a href="#" class="btn btn-danger" name ="delete">Delete </a>
            </div>
        </div>`;
              
        productList.appendChild(element);
       }



       resetForm(){
            document.getElementById("product-form").reset()


       }
            
         
       deleteProduct(element){
           if(element.name==='delete'){
               element.parentElement.parentElement.parentElement.remove();
               this.showMessage("Product Deletes SuccessFully",'info');



           }
        }
        
            showMessage(message,cssClass){
                const div =document.createElement("div" );
                div.className=`alert alert-${cssClass}`;
                div.appendChild(document.createTextNode(message));
                //showing in DOM
                const container = document.querySelector('.container');
                const App = document.querySelector("#App");
                container.insertBefore(div,App);
                setTimeout(function(){
                    document.querySelector('.alert').remove();


                },2000);

        
            }


   
         
         
  
  
  
       
       
       





}

///event DOM

document.getElementById("product-form")
            .addEventListener('submit',
              function(e){

                 const name = document.getElementById("name").value;
                 const price = document.getElementById("price").value;
                 const year = document.getElementById("year").value;
                 
                 const product = new Product(name,price,year);
                 const ui = new Ui;
                 if(name==="" || price==="" || year===""){
                   return ui.showMessage('Complete Fields Please','danger')
                }
                
                    ui.addProduct(product);
                    ui.resetForm();
                    ui.showMessage('Product Added SuccesFull','success')
                    e.preventDefault();               
                 
                    
                })



               


document.getElementById("product-list").addEventListener('click',function(e) {
    const ui = new Ui();
    ui.deleteProduct(e.target); 
    
})





















