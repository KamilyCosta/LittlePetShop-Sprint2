/////////////////////////////////GRÁFICO 3D
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGrafico3d); //coloca o nome da função aqui

function desenharGrafico3d() { //madamos o nome pq funções não podem ter o mesmo nome

    let data = google.visualization.arrayToDataTable(obterDados());  //obter dados é uma função que criamos mais a baixo

    let options = {
        is3D: true, //grafico 3d
        colors: ['#f64b2d','#fcab88','#fccb88', '#022372','#647ca4',] 
    };

    let chart = new google.visualization.PieChart(document.getElementById('grafico-rosca'));

    chart.draw(data, options);
}

//criando funcção para simular obtenção de dados
function obterDados() { //as informações da função estão dentro da variavel LET

    let dados = [
        ['Pets', 'Número de clientes pets'],
        ['Cachorro', Math.random() * 3],
        ['Gato', Math.random() * 3],
        ['Porquinho da Índia', Math.random() * 3],
        ['Coelho', Math.random() * 3],
        ['Mini Porco', Math.random() * 3],
    ]
    return dados;
}

/////////////////////////////////////GRÁFICO DE LINHA
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoLinha);

function desenharGraficoLinha() {
    let data = google.visualization.arrayToDataTable(obterDados2());

    let options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['#f64b2d', '#fccb88','#022372'] 
    };

    let chart = new google.visualization.LineChart(document.getElementById('grafico-linha'));

    chart.draw(data, options);
}

//criando função para simular a obtenção dos dados
function obterDados2() {
    let dados2 = [
        ['Meses', 'Ruim', 'Bom', 'Ótimo'],
        ['Janeiro', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['Fevereiro', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['Março', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['Abril', Math.random() * 100, Math.random() * 100, Math.random() * 100],
        ['Maio', Math.random() * 100, Math.random() * 100, Math.random() * 100],
    ]

    return dados2;
}

//////////////////////////////GRÁFICO COLUNA
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(graficoColuna);

function graficoColuna() {
    let data = google.visualization.arrayToDataTable(obterDados3());

    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    let options = {
        legend: { position: "none" },
    };
    let chart = new google.visualization.ColumnChart(document.getElementById("grafico-coluna"));
    chart.draw(view, options);
}

//function para obter dados do grafico de colunas
function obterDados3() {
    let dados3 = [
        ["Agendamento", "Densidade", { role: "style" }],
        ['Segunda', Math.random() * 3, '#f64b2d'],
        ['Terça', Math.random() * 3, '#f66b2d'],
        ['Quarta', Math.random() * 3, '#fcab88'],
        ['Quinta', Math.random() * 3, '#fccb88'],
        ['Sexta', Math.random() * 3, '#022372'],
        ['Sábado', Math.random() * 3, '#647ca4'],

    ]
    return dados3;
}

////////////////////////////////////////////////////////////////////////////////////GRÁFICO DE ÁREA
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(graficoArea);

function graficoArea() {
    var data = google.visualization.arrayToDataTable(obterDados4());

    var options = {
        legend: { position: 'bottom' },
        hAxis: { title: 'Meses', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        colors: ['#022372', '#f64b2d'] 
    };

    var chart = new google.visualization.AreaChart(document.getElementById('grafico-area'));
    chart.draw(data, options);
}

function obterDados4() {
    let dados4 = [
        ['Meses', 'Lucros', 'Gastos'],
        ['Janeiro', Math.random() * 100, Math.random() * 100],
        ['Fevereiro', Math.random() * 100, Math.random() * 100],
        ['Março', Math.random() * 100, Math.random() * 100],
        ['Abril', Math.random() * 100, Math.random() * 100],
        ['Maio', Math.random() * 100, Math.random() * 100],
    ]
    return dados4;
}
