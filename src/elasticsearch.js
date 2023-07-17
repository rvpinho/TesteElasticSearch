const elasticsearch = require('@elastic/elasticsearch');

let client = null;

exports.getClient = async(req, res) =>{
    client = new elasticsearch.Client({   
        node: 'http://localhost:9200',
    });

    return res.status(200).send({
        message: "Conectado",
    });
} 

exports.insert = async(req, res) =>{

    const products = [
        {
          nome: 'Coca Cola lata zero 350ml',
          supermercado: 'dale',
          preco: 5
        },
        {
          nome: 'Pepsi lata zero 350ml',
          supermercado: 'dale',
          preco: 4
        },
        {
          nome: 'Água mineral 500ml',
          supermercado: 'dale',
          preco: 1.5
        },
        {
          nome: 'Biscoito recheado',
          supermercado: 'dale',
          preco: 2.5
        },
        {
          nome: 'Leite integral 1L',
          supermercado: 'dale',
          preco: 3.2
        },
        {
          nome: 'Sabonete líquido',
          supermercado: 'dale',
          preco: 6.9
        },
        {
          nome: 'Detergente 500ml',
          supermercado: 'dale',
          preco: 2.3
        },
        {
          nome: 'Arroz branco 1kg',
          supermercado: 'dale',
          preco: 4.5
        },
        {
          nome: 'Feijão carioca 1kg',
          supermercado: 'dale',
          preco: 3.8
        },
        {
          nome: 'Macarrão espaguete',
          supermercado: 'dale',
          preco: 2.1
        }
      ];
      
      for (const product of products) {
        await client.index({
          index: 'produto',
          type: 'type_produto',
          body: product,
        });
      }
      
    // const result = await client.index({
    //     index: 'produto',
    //     type: 'type_produto',
    //     body: {
    //         nome: 'Coca Cola lata zero 350ml',
    //         supermercado: 'dale',
    //         preco: 5
    //     },
        
    // })

    return res.status(200).send({
        message: result,
    });
}  
    

exports.findAll = async(req, res) =>{


    const result = await client.search({
        index: 'produto',
        body: {
            query: {
                match : {
                    nome : {
                        query : "Pepsi 350ml",
                        fuzziness: 1,

                        operator: "and"
                    }
                }
            } 
        } 
    })

    return res.status(200).send({
        message: result.body.hits.hits,
    });
}  
    