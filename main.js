let createproducttoggle = document.getElementById('create-product')
let form_container = document.querySelector('.form-container')

createproducttoggle.addEventListener('click', ()=>{
    if(form_container.style.display == 'none'){
        form_container.style.display =  'flex'
    }else{
        form_container.style.display = 'none'
    }
})

let product_name = document.querySelector('.product_name')
let product_description = document.querySelector('.product_description')
let product_url = document.querySelector('.product_url')
let product_price = document.querySelector('.product_price')
let create_product_form = document.querySelector('.create-product-form')

let productsArray = []

create_product_form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let name = product_name.value.trim()
    let desc = product_description.value.trim()
    let image = product_url.value.trim()
    let price = product_price.value.trim()

    let status = name != '' && desc != '' && image != '' && price != ''

    let new_product = {
        product_name: name,
        description: desc,
        image: image,
        price: price
    }

    if(status){
        productsArray.push(new_product)

        console.log(productsArray);

        product_name.value = ''
        product_description.value = ''
        product_url.value = ''
        product_price.value = ''

        displayProducts()
    }
})


function displayProducts (){

    let my_products = document.querySelectorAll('.products .product')

    my_products.forEach(product =>{
        product.remove()
    })

    productsArray.forEach((product, index)=>{
        let one_product = document.createElement('div')
        one_product.className = 'product'

        let prod_name = document.createElement('h2')
        prod_name.textContent = product.product_name
        prod_name.className = 'product-name'

        let prod_desc = document.createElement('p')
        prod_desc.textContent = product.description
        prod_desc.className = 'product-desc'

        let prod_image = document.createElement('img')
        prod_image.setAttribute('src', product.image)
        prod_image.className = 'product-img'

        let prod_price = document.createElement('h2')
        prod_price.textContent = `Ksh ${product.price}`
        prod_price.className = 'product-name'

        let deletebtn = document.createElement('button')
        deletebtn.textContent = 'Delete'
        deletebtn.className = 'deletebtn'
        deletebtn.addEventListener('click', ()=>{
            productsArray.splice(index, 1)
            displayProducts()
        })


        let updatebtn = document.createElement('button')
        updatebtn.textContent = 'Update'
        updatebtn.className = 'updatebtn'
        updatebtn.addEventListener('click', ()=>{
            form_container.style.display =  'flex'

            product_name.value = product.product_name
            product_description.value = product.description
            product_url.value = product.image
            product_price.value = product.price

            productsArray.splice(index, 1)
            displayProducts()
        })

        let card_footer = document.createElement('div')
        card_footer.appendChild(deletebtn)
        card_footer.appendChild(updatebtn)

        one_product.appendChild(prod_image) 
        one_product.appendChild(prod_name) 
        one_product.appendChild(prod_desc) 
        one_product.appendChild(prod_price) 
        one_product.appendChild(card_footer) 

        let products = document.querySelector('.products')
        products.appendChild(one_product)
    })

}