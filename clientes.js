

let clientes = JSON.parse(sessionStorage.getItem("clientes")) ? JSON.parse(sessionStorage.getItem("clientes)")) : [];




function carregarCliente(listaDeClientes) {
    let tbodyElement = document.querySelector("#tabela");
    tbodyElement.innerHTML = '';
    listaDeClientes.map((cliente) => {
        tbodyElement.innerHTML += `
        </tr>
                    <tr class="*:leading-[40px]">
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.data}</td>
                        <td class="w-[100px] flex justify-center gap-4">
                            <box-icon name="pencil"></box-icon>
                            <box-icon name="trash"></box-icon>
                        </td>
                        
                    </tr>`
    })
}

carregarCliente(clientes);

function cadastrarCliente(form){
    event.preventDefault();

   // Vão pegar os valores dos inputs do formlario e tranformar em um objeto
    let formData = new FormData(form);
    let cliente = Object.fromEntries(formData.entries());
    console.log(cliente);

// inserir o novo cliente no final do array clientes
    clientes.push(cliente)
    sessionStorage.getItem("clientes", JSON.stringify(clientes));
    mostrarOverlay();
    carregarCliente(clientes);

}
