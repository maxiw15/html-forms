
//Открыть виджет
const widget = document.querySelector(".chat-widget")
widget.addEventListener("click",() => {
widget.classList.add("chat-widget_active")
})
//Отправка текста
document.getElementById("chat-widget__input").addEventListener("keyup", () => {

    //Текущее время
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes}`;


    if (event.key==="Enter") {
        const input = document.getElementById("chat-widget__input");
        const messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `

                        Сообщение от клиента
                        <div class="message message_client">
                            <div class="message__time">'${formattedTime}'</div>
                            <div class="message__text">${input.value}!</div>
                        </div>
`;       input.value = ""
        //Ответ робота
        const answers = ["Добрый", "день,", "мы", "ещё", "не", "проснулись.", "Позвоните", "через", "10", "лет"]
        let i = getRandomInt(0, answers.length-1);
        let answer = answers[i]
        messages.innerHTML += `
                        Сообщение от робота
                        <div class="message">
                             <div class="message__time">'${formattedTime}'</div>
                              <div class="message__text">
                                ${answer}
                              </div>
                        </div>
`;}
}
)




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}