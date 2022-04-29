const pedido1 = {tipo: 'Caramel Machiatto', cliente: 'Juan'};
const pedido2 = {tipo: 'Te helado', cliente: 'Pedro'};

function recepcionEntregaPedido(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Caramel Machiatto':
            setTimeout(() => {
                // llamar al cliente
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

recepcionEntregaPedido(pedido1, function (cliente) {
    console.log(`Pedido listo llamar a cliente: ${cliente}`);
});

recepcionEntregaPedido(pedido2, cliente => console.log(`Pedido listo llamar a cliente: ${cliente}`));









