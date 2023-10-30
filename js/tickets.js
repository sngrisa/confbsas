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
            return priceBoletaBase.innerHTML = ` $ ${(200 - (200 * 80 / 100)) * quanty}`
            break;
        case 'Trainee':
            return priceBoletaBase.innerHTML = ` $ ${(200 - (200 * 50 / 100)) * quanty}`
            break;
        case 'Junior':
            return priceBoletaBase.innerHTML = ` $ ${(200 - (200 * 15 / 100)) * quanty}`
            break;
    }
}

let cleanForm = () => {
    return document.getElementById("myform").reset();
}

let getResume = () => {
    return document.write('myform').values;
}