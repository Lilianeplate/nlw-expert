const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento no final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de hoisting em JavaScript?",
      respostas: [
        "Elevar objetos",
        "Elevar funções",
        "Elevação de declarações"
      ],
      correta: 2
    },
    {
      pergunta: "Como verificar se uma variável é do tipo string em JavaScript?",
      respostas: [
        "typeof myVar === 'string'",
        "myVar instanceof String",
        "myVar.type === 'string'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Operador condicional",
        "Operador lógico",
        "Operador aritmético"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do comando 'break' em JavaScript?",
      respostas: [
        "Encerrar um loop",
        "Pular para a próxima iteração de um loop",
        "Criar uma quebra de linha no código"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string para um número em JavaScript?",
      respostas: [
        "toNumber()",
        "parseNumber()",
        "parseInt()"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o evento 'DOMContentLoaded' em JavaScript?",
      respostas: [
        "Evento disparado quando a página é fechada",
        "Evento disparado quando o DOM está totalmente carregado",
        "Evento disparado quando um botão é clicado"
      ],
      correta: 1
    },
  ];
  
  //querySelector:acessa o conteudo de tags baseado no id, class, nome da tag, etc. serve também para mudar um conteúdo.
  
  //criou uma const que recebe o valor do conteudo da tag com id #quiz
  const quiz = document.querySelector('#quiz')
  //criou uma const que recebe o valor do conteudo da tag 'template'
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    //cria um constante que clona o conteudo da tag 'template'
    const quizItem = template.content.cloneNode(true)
  
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta),
      dt.querySelector('input').onchange= (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        
      }
  
  
      quizItem.querySelector('dl').appendChild(dt) 
    }
  //remove o conteudo da tag 'dt' que esta dentro da tag 'dl'
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }