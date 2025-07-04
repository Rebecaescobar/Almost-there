let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  //1.Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
  console.log("Antes da remoção:", inventarioAlpha,);
  console.table(inventarioAlpha);

  let itemRemovidoAlpha = inventarioAlpha.pop();

  console.log ("Depois da remoção do último item do array:", inventarioAlpha);
  console.log(inventarioAlpha)

  //2.Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
  console.log("Antes da remoção:", inventarioBeta,);
  console.table(inventarioBeta);

  let itemRemovidoBeta = inventarioBeta.pop();
  
  console.log ("Depois da remoção da último item do Array", inventarioBeta);
  console.table(inventarioBeta);


//3.Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final
console.log("Antes de adicionar:", inventarioAlpha);
console.table(inventarioAlpha);

let adicionarArtefatosAlpha = inventarioAlpha.push("manuscrito");

console.log("Depois de adicionar artefatos", inventarioAlpha);
console.table(inventarioAlpha)

//4.Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta
console.log("Antes de adicionar os artefatos especiais:", inventarioAlpha );
console.table(inventarioAlpha);

let adicionaArtefatos = inventarioAlpha.push(["Os Manuscritos do Mar Morto","Terra",,13901]);
adicionaArtefatos = inventarioAlpha.push(["A máscara de Tatancânea", "Terra",24004 ]);
adicionaArtefatos = inventarioAlpha.push(["O mecanismo de anticítera", "Terra", 30012]);

console.log("Depois de adicionar os artefatos especiais", inventarioAlpha);
console.table(inventarioAlpha);

//5.Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine
console.log("Antes de subir o item para o topo da lista:", inventarioAlpha);
console.table(inventarioAlpha);

let sobeItemNaLista = inventarioAlpha.shift(["Cristal Rubion", "Plutão", 4500]);
sobeItemNaLista = inventarioAlpha.unshift(["Estrelas", "Galáxia", 2900]);

console.log("Depois de subir o item para o topo da lista", inventarioAlpha);
console.table(inventarioAlpha);

//6.Um item da Beta deve ser promovido para o início da lista para estudo prioritário
console.log("Antes de promover o item", inventarioBeta);
console.table(inventarioBeta);

let promoveItem = inventarioBeta.shift(["Lâmina Solar", "Mercúrio", 6700]);
promoveItem = inventarioBeta.unshift(["Planetas","Anel de Saturno", 4500]);

console.log("Depois de promover o item no topo da lista", inventarioBeta);
console.table(inventarioBeta);

//7.Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído
console.log("Antes de excluir um artefato", inventarioAlpha);
console.table(inventarioAlpha);

let excluirArtefato = inventarioAlpha.unshift(["Sol","Lua", 1300]);
excluirArtefato = inventarioAlpha.shift("Sol", "Lua", 1300);

console.log("Depois de excluir o artfato", inventarioAlpha);
console.table(inventarioAlpha);

//8.O primeiro item da Beta pertence a um museu e deve ser removido
console.log("Antes de remover o item", inventarioBeta);
console.table(inventarioBeta);

let removerItem = inventarioBeta.shift(["Lâmina Solar", "Mercúrio", 6700]);

console.log("Depois de remover item", inventarioBeta);
console.table(inventarioBeta);

// 11 Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.
let planetas = ['Plutão','Júpiter','Saturno','Marte','Andrômeda','Venus','Lua','Sol'];
console.log(`planetas com string: ${planetas.join('!')}`); 



