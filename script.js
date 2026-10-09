// Arquivo ficcional de RPG. Senha de demonstração: espiral.
// É uma barreira narrativa, não segurança real: os documentos estão no código-fonte.

const ACCESS_KEY = "liberdade, ainda que tardia";

const documents = {
  "patient-07": {
    category: "S.O.E. · PRONTUÁRIO Nº 07",
    ref: "HOSPITAL COLÔNIA DE BARBACENA / CÓPIA REPROGRÁFICA",
    title: "Beatriz Dorta",
    body: `<p><b>Filiação:</b> ignorada<br><b>Nascimento:</b> ignorado (idade aparente: 24 anos)<br><b>Procedência:</b> trem de Belo Horizonte, desembarque em lote, plataforma 2<br><b>Internação:</b> 19/01/1972<br><b>Pavilhão/leito:</b> feminino, leito 31</p>
    <p><b>Motivo:</b> encaminhada pela autoridade policial. Sem documentos. Sem família que reclame. Nome atribuído no ato da internação pela enfermagem.<br><b>Diagnóstico:</b> psicose não especificada<br><b>Sensibilidade:</b> ALTA<br><b>Tratamento:</b> eletroconvulsoterapia, 14 aplicações (nov/1972 a fev/1973)<br><b>Destino:</b> Ala Isolada, a partir de 02/1974<br><b>Óbito:</b> 18/09/1974 — parada cardiorrespiratória<br><b>Sepultamento:</b> cova nº 4.112</p>
    <hr>
    <p><b>EVOLUÇÃO</b></p>
    <p><b>12/1972:</b> Recusa-se a dormir de costas para a porta. Diz que “alguém está contando”.</p>
    <p><b>03/1973:</b> Antecipa o ruído em cerca de dois minutos. Os demais só o percebem depois.</p>
    <p><b>09/1973:</b> Pede que escrevam seu nome no pulso. Negado: “não é norma do serviço”.</p>`
  },

  "patient-22": {
    category: "S.O.E. · PRONTUÁRIO Nº 22",
    ref: "HOSPITAL COLÔNIA DE BARBACENA / CÓPIA REPROGRÁFICA",
    title: "Jhonata Eloy",
    body: `<p><b>Filiação:</b> pai Eloy (paradeiro ignorado); mãe ignorada<br><b>Idade aparente:</b> 20 anos<br><b>Procedência:</b> Zona da Mata mineira, por determinação judicial<br><b>Internação:</b> 04/07/1966<br><b>Pavilhão/leito:</b> masculino, leito 8</p>
    <p><b>Motivo:</b> crises convulsivas<br><b>Diagnóstico:</b> epilepsia com perturbação psíquica<br><b>Sensibilidade:</b> ALTA<br><b>Tratamento:</b> eletroconvulsoterapia, 6 aplicações; sedação contínua<br><b>Destino:</b> Ala Isolada, a partir de 1967<br><b>Óbito:</b> 18/09/1967 — causa não especificada<br><b>Sepultamento:</b> cova nº 1.209</p>
    <hr>
    <p><b>EVOLUÇÃO</b></p>
    <p><b>08/1966:</b> Durante as crises, bate na madeira da cama uma sequência de toques curtos e longos. O enfermeiro anota: <code>-. .- --- / .-.. . .. .- / .- .-.. - ---</code>. Classificado como estereotipia motora.</p>
    <p><b>01/1967:</b> Para de bater quando o ruído se aproxima. Diz: “quem escuta não deve responder”.</p>`
  },

  "patient-13": {
    category: "S.O.E. · PRONTUÁRIO Nº 13",
    ref: "HOSPITAL COLÔNIA DE BARBACENA / CÓPIA REPROGRÁFICA",
    title: "Mag Mattia",
    body: `<p><b>Filiação:</b> pai não consta; mãe C. Mattia<br><b>Idade aparente:</b> 19 anos<br><b>Procedência:</b> entregue pela família, interior de Minas<br><b>Internação:</b> 03/02/1969<br><b>Pavilhão/leito:</b> feminino, leito 12</p>
    <p><b>Motivo:</b> “indisciplina”. Desenha nas paredes. Família solicita afastamento.<br><b>Diagnóstico:</b> desvio de conduta; psicose a esclarecer, esquizofrenia<br><b>Sensibilidade:</b> MÉDIA (a reavaliar)<br><b>Tratamento:</b> eletroconvulsoterapia, 9 aplicações (1969)<br><b>Destino:</b> Ala Isolada, a partir de 1971<br><b>Óbito:</b> 18/09/1971 — causa não especificada<br><b>Sepultamento:</b> cova nº 2.870</p>
    <hr>
    <p><b>EVOLUÇÃO</b></p>
    <p><b>04/1969:</b> Desenha uma mesma porta pintada de preto com espirais. Afirma que “tem gente morando lá dentro e não o deixam sair”.</p>
    <p><b>07/1969:</b> Pede lápis. Concedido. Desenha a planta do pavilhão sem nunca ter saído dele.</p>
    <p><b>11/1970:</b> Recusa-se a passar pelo corredor leste.</p>
    <p><b>ADENDO A LÁPIS:</b> A espiral foi encontrada no verso do espelho da enfermaria. A paciente não teve acesso àquela sala.</p>`
  },

  "patient-29": {
    category: "S.O.E. · PRONTUÁRIO Nº 29",
    ref: "HOSPITAL COLÔNIA DE BARBACENA / CÓPIA REPROGRÁFICA",
    title: "Tomas Krajnovic",
    body: `<p><b>Filiação:</b> ignorada<br><b>Idade aparente:</b> 18 anos<br><b>Procedência:</b> Porto de Santos, desembarque de imigrantes<br><b>Internação:</b> 05/12/1958<br><b>Pavilhão/leito:</b> masculino, leito 40</p>
    <p><b>Motivo:</b> estrangeiro sem documentos nem intérprete. Não compreende o idioma local.<br><b>Diagnóstico:</b> demência a esclarecer. Idioma de origem não identificado<br><b>Sensibilidade:</b> ALTA<br><b>Tratamento:</b> eletroconvulsoterapia, 11 aplicações<br><b>Destino:</b> Ala Isolada, a partir de 1960<br><b>Óbito:</b> 18/09/1960 — causa não especificada<br><b>Sepultamento:</b> cova nº 731</p>
    <hr>
    <p><b>EVOLUÇÃO</b></p>
    <p><b>05/1958:</b> Não responde ao nome. Toda noite aponta para o relógio do quarto. Relógio retirado após ter sido quebrado pelo paciente.</p>
    <p><b>09/1958:</b> Ecolalia com o som do relógio.</p>
    <p><b>10/1959:</b> Escreveu na parede: <code>Видео сам га синоћ.</code></p>
    <p><b>ADENDO:</b> Na cópia seguinte, uma espiral aparece desenhada ao redor da frase.</p>`
  },

  "email-01": {
    category: "CORRESPONDÊNCIA INTERNA · ENFERMAGEM",
    ref: "22 NOV 1972 · 21:16 · CÓPIA DATILOGRAFADA",
    title: "A respeito das espirais no corredor leste",
    body: `<p><b>De:</b> Enf.ª L. Figueiredo<br><b>Para:</b> Enf.ª-chefe / Administração<br><b>Assunto:</b> desenhos e instruções recebidas</p>
    <p>Senhora Caetano,</p>
    <p>As espirais tornaram a aparecer no corredor leste, atrás do armário de roupa limpa e dentro da sala de banho. Mandei as internas esfregarem tudo com cal e sabão. Duas horas depois estavam lá outra vez.</p>
    <p>A Mattia, nº 13, não larga a mania de rabiscar a mesma porcaria. A Dorta, nº 07, fica acordada contando os passos do plantão e depois reclama que a gente “errou a ordem”. Insolentes e trabalhosas, as duas.</p>
    <p>O que me preocupa é a ordem recebida para não remover os desenhos antes da vistoria de sexta-feira. O Dr. mandou marcar cada espiral com giz, seguindo o sentido dos ponteiros do relógio. Disse que não se deve interromper a linha nem deixar que se feche antes da hora.</p>
    <p>Também exigiu que as portas ficassem abertas, contra a norma do serviço. Quando perguntei por quê, respondeu: “O tempo precisa reconhecer o caminho”. Só isso. Sinceramente? Ele deve estar ficando maluco também.</p>
    <p>Peço instruções por escrito. Não desejo ser responsabilizada se houver outro incidente.</p>
    <p>L. Figueiredo</p>`
  },

  "email-02": {
    category: "CORRESPONDÊNCIA INTERNA · ENFERMAGEM",
    ref: "03 FEV 1973 · 06:40 · PAPEL CARBONO",
    title: "Os toques na ala masculina",
    body: `<p><b>De:</b> Enf.ª N. Peixoto<br><b>Para:</b> Enf.ª-chefe<br><b>Assunto:</b> comportamento do leito 8</p>
    <p>O Eloy passou a noite batendo na cama. Curto, curto, comprido; depois começa de novo. Um inferno. Os outros internos já estão imitando o desgraçado.</p>
    <p>Mandei que segurassem suas mãos, mas ele bate com o calcanhar. Quando o corredor fica silencioso, para. Quando se ouve o carrinho de metal vindo da rouparia, começa outra vez, como se estivesse avisando alguém.</p>
    <p>O estrangeiro do leito 40 também aponta para o relógio quebrado. Esses homens parecem combinar coisas sem trocar uma palavra. O nº 29 não entende uma frase que lhe dizemos, mas ontem apontou para a porta antes mesmo de o médico chegar.</p>
    <p>Não acho que exista mistério algum. É gente que dá trabalho e inventa maneiras novas de perturbar o plantão. Mesmo assim, retirem o carrinho do corredor depois das seis. O som das rodas faz os dois começarem.</p>
    <p><b>Adendo:</b> o carrinho foi recolhido. Os toques foram ouvidos dentro do armário vazio.</p>`
  },

  "email-03": {
    category: "CORRESPONDÊNCIA INTERNA · CIRCULAÇÃO RESTRITA",
    ref: "04 FEV 1973 · 00:13 · ORIGEM NÃO CONFIRMADA",
    title: "CUIDADOS NO TURNO DA NOITE",
    body: `<p><b>De:</b> assinatura ausente<br><b>Para:</b> enfermagem noturna; manutenção; direção<br><b>Assunto:</b> instruções para a vigília</p>
    <p>As orientações abaixo devem ser cumpridas sem discussão.</p>
    <p>1. Copiar todas as espirais encontradas nas paredes sem inverter o sentido do traço.<br>
    2. Não apagar nenhuma espiral.<br>
    3.???????????????????????<br>
    4. Se ouvirem o próprio nome vindo de uma porta fechada, não respondam nem abram.<br>
    5. À meia-noite, a contagem será feita uma única vez. Se o total mudar, não recomecem.</p>
    <p>A Mattia desenhou a porta antes do horário de sempre, às 17h59. O Eloy identificou o ritmo da vigília sem jamais ter sido informado. A Dorta começou a contar dois minutos antes do sinal. Krajnovic escreveu e apagou uma frase na parede antes de qualquer funcionário conseguir traduzi-la.</p>
    <p>Não registrem esses fatos como coincidências. A espiral não é decoração. Cada curva corresponde a uma porta, e cada porta exige uma testemunha.</p>
    <p><b>Nota em tinta vermelha:</b> quem redigiu este memorando não constava na escala de funcionários do ano.</p>`
  }
};

const loginScreen = document.getElementById("login-screen");
const archiveScreen = document.getElementById("archive-screen");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("login-message");
const modal = document.getElementById("document-modal");

function tryLogin() {
  const enteredPassword = passwordInput.value.trim().toLocaleLowerCase("pt-BR");
  const correctPassword = ACCESS_KEY.toLocaleLowerCase("pt-BR");

  if (enteredPassword === correctPassword) {
    loginScreen.classList.add("hidden");
    archiveScreen.classList.remove("hidden");
    loginMessage.textContent = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    loginMessage.textContent = "CHAVE RECUSADA. A TENTATIVA FOI REGISTRADA.";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

document.getElementById("submit-password").addEventListener("click", tryLogin);

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    tryLogin();
  }
});

function openDocument(id) {
  const documentData = documents[id];

  if (!documentData) {
    return;
  }

  document.getElementById("modal-category").textContent = documentData.category;
  document.getElementById("modal-ref").textContent = documentData.ref;
  document.getElementById("modal-title").textContent = documentData.title;
  document.getElementById("modal-body").innerHTML = documentData.body;

  modal.classList.remove("hidden");
  document.getElementById("close-modal").focus();
}

document.querySelectorAll("[data-doc]").forEach((button) => {
  button.addEventListener("click", () => {
    openDocument(button.dataset.doc);
  });
});

function closeModal() {
  modal.classList.add("hidden");
}

document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.getElementById("logout").addEventListener("click", () => {
  archiveScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});