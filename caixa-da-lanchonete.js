class CaixaDaLanchonete{
    constructor() {
      this.cardapio = [
        { codigo: "cafe", descricao: "Café", valor: 3.00 },
        { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.50 },
        { codigo: "suco", descricao: "Suco Natural", valor: 6.20 },
        { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.50 },
        { codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
        { codigo: "salgado", descricao: "Salgado", valor: 7.25 },
        { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
        { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.50 },
      ];
    }
  
    calcularValorDaCompra(formaPagamento, pedido) {
      let total = 0;
  
      if (pedido.length === 0) {
        return "Não há itens no carrinho de compra!";
      }
  
      for (const item of pedido) {
        const menuItem = this.cardapio.find(menuItem => menuItem.codigo === item.codigo);
  
        if (!menuItem) {
          return "Item inválido!";
        }
  
        if (item.quantidade <= 0) {
          return "Quantidade inválida!";
        }
  
        if (item.extra && !pedido.some(i => i.codigo === menuItem.codigo && !i.extra)) {
          return "Item extra não pode ser pedido sem o principal";
        }
  
        total += menuItem.valor * item.quantidade;
      }
  
      if (formaPagamento === "dinheiro") {
        total *= 0.95;
      } else if (formaPagamento === "credito") {
        total *= 1.03; 
      } else if (formaPagamento === "debito") {
        return "Não tem desconto no debito!";
      } else {
        return "Forma de pagamento inválida!";
      }
  
      return `Total a pagar: R$ ${total.toFixed(2)}`; 
    }
  }export { CaixaDaLanchonete };
  
  const pedidoExemplo = [
    { codigo: "cafe", quantidade: 2 },
    { codigo: "salgado", quantidade: 3 }
  ];
  const pedidoExemplo1 = [
    { codigo: "cafe", quantidade: 0 },
    { codigo: "salgado", quantidade: 3 }
  ];
  const pedidoExemplo2 = [
    { codigo: "chantily", quantidade: 1 },
    { codigo: "queijo", quantidade: 1 }
  ];
  
  const formaPagamentoExemplo = "credito";
  
  const caixa = new CaixaDaLanchonete();
  const totalPedido = caixa.calcularValorDaCompra(formaPagamentoExemplo, pedidoExemplo2);
  console.log(totalPedido);
  
  
