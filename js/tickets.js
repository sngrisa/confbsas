let totalPrice = 200;

let getNumbers = () => {
    let precioTicket = document.getElementById('precioTicket');
    return precioTicket.innerHTML = '<small>$200</small>';
}

let getDiscount = () => {
    let priceBoletaBase = document.getElementById('priceBoleta');
    let category = document.getElementById('category').value;
    let quanty = document.getElementsByName('quanty')[0].value;
    switch (category) {
        case 'Estudiante':
            totalPrice = (200 - ((200 * 80) / 100)) * quanty;
            return priceBoletaBase.innerHTML = ` $ ${totalPrice}`
            break;
        case 'Trainee':
            totalPrice = (200 - ((200 * 50) / 100)) * quanty;
            return priceBoletaBase.innerHTML = ` $ ${totalPrice}`
            break;
        case 'Junior':
            totalPrice = (200 - ((200 * 15) / 100)) * quanty;
            return priceBoletaBase.innerHTML = ` $ ${totalPrice}`
            break;
    }
}

let cleanForm = () => {
    let priceBoletaBase = document.getElementById('priceBoleta');
    priceBoletaBase.innerHTML = ` $ 0`
    return document.getElementById("myform").reset();
}

let getResume = () => {
    return alert(`Tenes que pagar ${totalPrice}. Muchas Gracias !!!!!`)
}