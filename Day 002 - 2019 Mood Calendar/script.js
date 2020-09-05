teste = document.getElementById("teste")
teste_btt = document.getElementById("testeBtt")

function sla() {
    function getDayNumbers(month) {
        month_days = []
        monthCount++

        console.log(month)
        if(months[monthCount-1] === month) {
            for(let i=1; i<=days_in_months[monthCount-1]; i++) {
                month_days.push(i)
            }
            return month_days
        }
    }

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const week_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    const days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let monthCount = 0
    let month_days = []

    const newInnerHTML = `
        <div id="calendar">
            <div class="monthsGroup">
                ${months.map(month => `<div class="month"><h3>${month}</h3>
                    <div class="week_days_container">
                        ${week_days.map(week_day => `<div class="week_day">${week_day}</div>`).join(" ")}
                    </div>
                    <div class="month_days_conteiner">
                        ${getDayNumbers(month).map(month_day => `<div class="month_day">
                            <span class="circle">${month_day}</span>
                        </div>`).join("")}
                    </div>
                </div>`).join("")}
            </div>
        </div>
    `

    teste.innerHTML = newInnerHTML
}


sla()