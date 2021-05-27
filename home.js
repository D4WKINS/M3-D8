const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const products = document.getElementById("products")

window.onload = async () =>{
    const getData = async () =>{
        try{
        const response = await fetch(endpoint,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjIwMzY2MTMsImV4cCI6MTYyMzI0NjIxM30.UTCBinfwZqSkRA2yjhaVG7VYcl5qIqBRvWnTtErbg80"
        }})
            const data = await response.json()
            return await data
        
        }
        catch(err){
        return console.log("Houston we have problem!", err)
        }
        }
        getData().then(data => {
            data.forEach(product => {
                
                products.innerHTML +=  (`<a class="card product shadow w-100 col-12 col-md-4 col-lg-3 px-0" href="details.html?id=${product._id}">
                                                <img src="${product.imageUrl}"" class=" h-50 card-img-top" alt="...">
                                              
                                                <div class="card-body text-black-50 ">
                                                    <h5 class="card-title">${product.name}</h5>
                                                    <h4 class="lead">£${product.price} </h4>
                                                </div>

                                                <div class="card-footer w-100">
                                                    <small class="text-muted"> Created (${product.createdAt})</small>
                                                </div>
                                        </a>`
                                        )
              
                
            });
        } )
            
}


