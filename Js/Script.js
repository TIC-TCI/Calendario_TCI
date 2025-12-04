// Variável para armazenar os feriados
let holidays = {};
let selectedCity = 'macapa'; // Cidade padrão

// API de feriados brasileiros
const API_URL = 'https://brasilapi.com.br/api/feriados/v1/2025';

// Feriados estaduais e municipais por cidade
const localHolidays = {
    macapa: {
        estaduais: {
            3: [
                { date: "19/03", name: "São José (Padroeiro do Amapá)", type: "Estadual" }
            ],
            9: [
                { date: "13/09", name: "Criação do Território Federal do Amapá", type: "Estadual" }
            ],
            11: [
                { date: "20/11", name: "Dia da Consciência Negra", type: "Estadual" }
            ]
        },
        municipais: {
            2: [
                { date: "04/02", name: "Aniversário de Macapá", type: "Municipal" }
            ],
            7: [
                { date: "25/07", name: "São Tiago (Padroeiro de Macapá)", type: "Municipal" }
            ]
        }
    },
    goiania: {
        estaduais: {
            7: [
                { date: "26/07", name: "Fundação do Estado de Goiás", type: "Estadual" }
            ]
        },
        municipais: {
            10: [
                { date: "24/10", name: "Aniversário de Goiânia", type: "Municipal" }
            ]
        }
    }
};

// Função para buscar feriados da API
async function fetchHolidays() {
    try {
        showLoading();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Erro ao buscar feriados');
        }

        const data = await response.json();

        // Organiza feriados por mês
        holidays = organizeHolidaysByMonth(data);

        // Adiciona feriados locais da cidade selecionada
        addLocalHolidays();

        hideLoading();

        // Mostra os feriados do mês atual
        const currentMonth = new Date().getMonth() + 1;
        document.getElementById('monthSelect').value = currentMonth;
        showHolidays();

    } catch (error) {
        console.error('Erro ao carregar feriados:', error);
        showError();
        loadFallbackHolidays();
    }
}

// Organiza feriados da API por mês
function organizeHolidaysByMonth(data) {
    const organized = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: []
    };

    data.forEach(holiday => {
        // A API retorna no formato YYYY-MM-DD
        const [year, month, day] = holiday.date.split('-');
        const monthNum = parseInt(month);

        organized[monthNum].push({
            date: `${day}/${month}`,
            name: holiday.name,
            type: holiday.type === 'national' ? 'Nacional' : 'Facultativo'
        });
    });

    return organized;
}

// Adiciona feriados estaduais e municipais da cidade selecionada
function addLocalHolidays() {
    const cityHolidays = localHolidays[selectedCity];

    if (!cityHolidays) return;

    // Adiciona feriados estaduais
    Object.keys(cityHolidays.estaduais).forEach(month => {
        if (!holidays[month]) {
            holidays[month] = [];
        }
        holidays[month] = [...holidays[month], ...cityHolidays.estaduais[month]];
    });

    // Adiciona feriados municipais
    Object.keys(cityHolidays.municipais).forEach(month => {
        if (!holidays[month]) {
            holidays[month] = [];
        }
        holidays[month] = [...holidays[month], ...cityHolidays.municipais[month]];
    });

    // Ordena todos os meses por data
    Object.keys(holidays).forEach(month => {
        holidays[month].sort((a, b) => {
            const dayA = parseInt(a.date.split('/')[0]);
            const dayB = parseInt(b.date.split('/')[0]);
            return dayA - dayB;
        });
    });
}

// Troca a cidade e recarrega os feriados
function changeCity() {
    selectedCity = document.getElementById('citySelect').value;
    fetchHolidays();
}

// Mostra mensagem de carregamento
function showLoading() {
    const container = document.getElementById('holidaysContainer');
    container.innerHTML = `
        <div class="no-holidays">
            <div style="font-size: 2.5em; margin-bottom: 15px;">⏳</div>
            <div>Carregando feriados...</div>
        </div>
    `;
}

// Remove mensagem de carregamento
function hideLoading() {
    // A função showHolidays() irá substituir o conteúdo
}

// Mostra mensagem de erro
function showError() {
    const container = document.getElementById('holidaysContainer');
    container.innerHTML = `
        <div class="no-holidays">
            <div style="font-size: 2.5em; margin-bottom: 15px;">⚠️</div>
            <div>Erro ao carregar feriados da API</div>
            <div style="font-size: 0.9em; margin-top: 10px;">Usando dados locais</div>
        </div>
    `;

    setTimeout(() => {
        const currentMonth = new Date().getMonth() + 1;
        document.getElementById('monthSelect').value = currentMonth;
        showHolidays();
    }, 2000);
}

// Carrega dados locais em caso de erro
function loadFallbackHolidays() {
    holidays = {
        1: [
            { date: "01/01", name: "Confraternização Universal", type: "Nacional" }
        ],
        2: [
            { date: "04/02", name: "Aniversário de Macapá", type: "Municipal" },
            { date: "03/03", name: "Carnaval", type: "Nacional" },
            { date: "04/03", name: "Carnaval", type: "Nacional" }
        ],
        3: [
            { date: "19/03", name: "São José (Padroeiro do Amapá)", type: "Estadual" },
            { date: "29/03", name: "Sexta-feira Santa", type: "Nacional" }
        ],
        4: [
            { date: "21/04", name: "Tiradentes", type: "Nacional" }
        ],
        5: [
            { date: "01/05", name: "Dia do Trabalho", type: "Nacional" },
            { date: "15/05", name: "Dia de Cabralzinho", type: "Estadual" },
            { date: "29/05", name: "Corpus Christi", type: "Facultativo" }
        ],
        6: [],
        7: [
            { date: "25/07", name: "São Tiago", type: "Municipal" },
            { date: "26/07", name: "Fundação de Goiás", type: "Estadual" }
        ],
        8: [],
        9: [
            { date: "07/09", name: "Independência do Brasil", type: "Nacional" },
            { date: "13/09", name: "Criação do Território Federal do Amapá", type: "Estadual" }
        ],
        10: [
            { date: "12/10", name: "Nossa Senhora Aparecida", type: "Nacional" },
            { date: "15/10", name: "Dia do Professor", type: "Facultativo" },
            { date: "24/10", name: "Aniversário de Goiânia", type: "Municipal" },
            { date: "28/10", name: "Dia do Servidor Público", type: "Estadual" }
        ],
        11: [
            { date: "02/11", name: "Finados", type: "Nacional" },
            { date: "15/11", name: "Proclamação da República", type: "Nacional" },
            { date: "20/11", name: "Consciência Negra", type: "Estadual" },
            { date: "30/11", name: "Dia do Evangélico", type: "Estadual" }
        ],
        12: [
            { date: "25/12", name: "Natal", type: "Nacional" }
        ]
    };
}

// Mostra os feriados do mês selecionado
function showHolidays() {
    const month = document.getElementById('monthSelect').value;
    const container = document.getElementById('holidaysContainer');

    if (!month) {
        container.innerHTML = '';
        return;
    }

    const monthHolidays = holidays[month] || [];

    if (monthHolidays.length === 0) {
        container.innerHTML = `
            <div class="no-holidays">
                <div style="font-size: 2.5em; margin-bottom: 15px;">📅</div>
                <div>Não há feriados registrados para este mês</div>
            </div>
        `;
        return;
    }

    container.innerHTML = monthHolidays.map(holiday => `
        <div class="holiday-card" data-type="${holiday.type}">
            <div class="holiday-date">
                <span class="calendar-icon"></span>
                ${holiday.date}
            </div>
            <div class="holiday-name">${holiday.name}</div>
            <div class="holiday-type">${holiday.type}</div>
        </div>
    `).join('');
}

// Carrega os feriados quando a página é carregada
window.onload = function() {
    fetchHolidays();
};