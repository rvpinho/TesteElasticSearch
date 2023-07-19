# -*- coding: utf-8 -*-

import random
import json

def formatar_produto(produto):
    # Separa o nome e o preço do produto
    nome, preco = produto.strip().split(" - ")
    
    # Remove possíveis espaços em branco do nome do produto
    nome = nome.strip()
    
    # Remove a vírgula do preço e converte para float
    preco = float(preco.replace(",", "."))
    
    return ("{\"nome\":\""+ nome+"\",\"supermercado\": \"APAS\",\"preco\":\""+ str(preco)+"\"},\n")
    

products=[]
with open("lista//list8.txt", 'r', encoding='utf-8') as myfile:
    for line in myfile:
        products.append(line)
    myfile.close()  


# String no formato "nome de produto - 1,99"

contador=0
# Salva o produto formatado em um arquivo JSON
with open("lista//produto8.txt", "w",encoding='utf-8') as arquivo:
    while(len(products)>contador):
        produto_formatado = formatar_produto(products[contador])
        contador=contador+1
        arquivo.write(str(produto_formatado))