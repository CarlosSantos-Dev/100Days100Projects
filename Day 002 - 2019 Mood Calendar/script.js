let content = document.getElementById("content")

function createCalendar() {
    function getDayNumbers(month) {
        month_days = []
        monthCount++

        if(months[monthCount-1] === month) {

            for(let i=0; i<week_days.length; i++) {

                if(week_days[next_week_day-1] === week_days[i]) {

                    for(let c=1; c<=i; c++) {
                        month_days.push("")
                    }

                }

            }

            for(let i=1; i<=days_in_months[monthCount-1]; i++) {
                month_days.push(i)

                if(next_week_day > 5) helper_week_day = week_days[0]
                else helper_week_day = week_days[next_week_day+1]

                next_week_day = week_days.indexOf(helper_week_day)
            }

            return month_days
        }
    }

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const week_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    const days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let monthCount = 0
    let month_days = []
    let helper_week_day = week_days[2]
    let next_week_day = week_days.indexOf(helper_week_day) + 1

    const newInnerHTML = `
        <div id="moodGroup">
            <h2>Calendário de Ânimo 2019</h2>
            <h4 id="instruct">~ pinte cada dia dependendo de qual era / é seu ânimo ~</h4>
            <div id="moodSelection">
                <p>Selecione seu ânimo:</p>
                <div class="moodContainer">
                    ${moods.map(mood => `
                    <button class="mood" id="mood${moods.indexOf(mood)+1}">${mood}</button>
                    `).join("")}
                </div>
                <p>depois clique nos círculos abaixo.</p>
            </div>
        </div>
        <div id="calendar">
            <div class="monthsGroup">
                ${months.map(month => `<div class="month"><h3>${month}</h3>
                    <div class="week_days_container">
                        ${week_days.map(week_day => `<div class="week_day">${week_day}</div>`).join(" ")}
                    </div>
                    <div class="month_days_conteiner">
                        ${getDayNumbers(month).map(month_day => `
                            ${ month_day !== ""
                                ? `<div class="month_day">
                                        <span class="circle" id="${month}${month_day}" onclick="colorDay('${month}', ${month_day})">${month_day}</span>
                                    </div>`
                                : `<div class="month_day"></div>`
                            }
                        `).join("")}
                    </div>
                </div>`).join("")}
            </div>
        </div>
    `

    content.innerHTML = newInnerHTML

    let mood_btt1 = document.getElementById("mood1")
    let mood_btt2 = document.getElementById("mood2")
    let mood_btt3 = document.getElementById("mood3")
    let mood_btt4 = document.getElementById("mood4")
    let mood_btt5 = document.getElementById("mood5")
    
    mood_btt1.addEventListener("click", () => {
        activeMood = mood_btt1.textContent
        mood_btt1.className = "mood active"
        mood_btt2.className = "mood"
        mood_btt3.className = "mood"
        mood_btt4.className = "mood"
        mood_btt5.className = "mood"
    })

    mood_btt2.addEventListener("click", () => {
        activeMood = mood_btt2.textContent
        mood_btt1.className = "mood"
        mood_btt2.className = "mood active"
        mood_btt3.className = "mood"
        mood_btt4.className = "mood"
        mood_btt5.className = "mood"
    })
    
    mood_btt3.addEventListener("click", () => {
        activeMood = mood_btt3.textContent
        mood_btt1.className = "mood"
        mood_btt2.className = "mood"
        mood_btt3.className = "mood active"
        mood_btt4.className = "mood"
        mood_btt5.className = "mood"
    })
    
    mood_btt4.addEventListener("click", () => {
        activeMood = mood_btt4.textContent
        mood_btt1.className = "mood"
        mood_btt2.className = "mood"
        mood_btt3.className = "mood"
        mood_btt4.className = "mood active"
        mood_btt5.className = "mood"
    })
    
    mood_btt5.addEventListener("click", () => {
        activeMood = mood_btt5.textContent
        mood_btt1.className = "mood"
        mood_btt2.className = "mood"
        mood_btt3.className = "mood"
        mood_btt4.className = "mood"
        mood_btt5.className = "mood active"
    })
}

function colorDay(month, month_day) {
    let num = document.getElementById(`${month}${month_day}`)
    
    num.style.backgroundColor = getComputedStyle(num).getPropertyValue(`--mood-color-${moods.indexOf(activeMood) + 1}`)
}

const moods = ["Excelente", "Bom", "Mais ou menos", "Ruim", "Péssimo"]
let activeMood = ""

createCalendar()