/*

Параметры:
1. Текущий пользователь.
2. Место. Страниуа, активная в данный момент (статитсика, игра, описание режима,...).





Методы:
1. Проверить авторизован ли пользователь.
2. Проверить текущее место.
3. 

*/

export const MTrainer = {
    mode: "test",

    exercises : {
        multiplication: [2, 3, 4, 5, 6, 7, 8, 9],
        multiplication_2:  [ [2, 4], [3, 6], [4, 8], [5, 10], [6, 12], [7, 14], [8, 16], [9, 18] ],
        multiplication_3:  [ [2, 6], [3, 9], [4, 12], [5, 15], [6, 18], [7, 21], [8, 24], [9, 27] ],
        multiplication_4:  [ [2, 8], [3, 12], [4, 16], [5, 20], [6, 24], [7, 28], [8, 32], [9, 36] ],
        multiplication_5:  [ [2, 10], [3, 15], [4, 20], [5, 25], [6, 30], [7, 35], [8, 40], [9, 45] ],
        multiplication_6:  [ [2, 12], [3, 18], [4, 24], [5, 30], [6, 36], [7, 42], [8, 48], [9, 54] ],
        multiplication_7:  [ [2, 14], [3, 21], [4, 28], [5, 35], [6, 42], [7, 49], [8, 56], [9, 63] ],
        multiplication_8:  [ [2, 16], [3, 24], [4, 32], [5, 40], [6, 48], [7, 56], [8, 64], [9, 72] ],
        multiplication_9:  [ [2, 18], [3, 27], [4, 36], [5, 45], [6, 54], [7, 63], [8, 72], [9, 81] ],
    
        division: [2, 3, 4, 5, 6, 7, 8, 9],
        division_2:  [ [4, 2], [6, 3], [8, 4], [10, 5], [12, 6], [14, 7], [16, 8], [18, 9] ],
        division_3:  [ [6, 2], [9, 3], [12, 4], [15, 5], [18, 6], [21, 7], [24, 8], [27, 9] ],
        division_4:  [ [8, 2], [12, 3], [16, 4], [20, 5], [24, 6], [28, 7], [32, 8], [36, 9] ],
        division_5:  [ [10, 2], [15, 3], [20, 4], [25, 5], [30, 6], [35, 7], [40, 8], [45, 9] ],
        division_6:  [ [12, 2], [18, 3], [24, 4], [30, 5], [36, 6], [42, 7], [48, 8], [54, 9] ],
        division_7:  [ [14, 2], [21, 3], [28, 4], [35, 5], [42, 6], [49, 7], [56, 8], [63, 9] ],
        division_8:  [ [16, 2], [24, 3], [32, 4], [40, 5], [48, 6], [56, 7], [64, 8], [72, 9] ],
        division_9:  [ [18, 2], [27, 3], [36, 4], [45, 5], [54, 6], [63, 7], [72, 8], [81, 9] ],
    
        composition: [6, 7, 8, 9, 10],
        composition_6:  [ [1, 5], [2, 4], [3, 3], [4, 2], [5, 1] ],
        composition_7:  [ [1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1] ],
        composition_8:  [ [1, 7], [2, 6], [3, 5], [4, 4], [5, 3], [6, 2], [7, 1] ],
        composition_9:  [ [1, 8], [2, 7], [3, 6], [4, 5], [5, 4], [6, 3], [7, 2], [8, 1] ],
        composition_10:  [ [1, 9], [2, 8], [3, 7], [4, 6], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1] ],
    },

    operators : {
        multiplication: "&#183",
        division: ":",
        composition: "и",
    },



};



/****************************************** OLD *************************************************/

/*


const app = {
    //
    show(currentStage = DB.currentStage){

        

        let app = document.getElementById('app');
        let mainMenu = document.getElementById('mainMenu');



        if(user.current){

            mainMenu.classList.remove('main__menu-hidden');

            mainMenu.innerHTML = this.HTMLmainMenu();
            

            switch (currentStage) {
                case "startExercise":
                    app.innerHTML = this.HTMLchooseOperation();
                    DB.currentStage = currentStage;
                    break;
    
                case "chooseOperand":
                    app.innerHTML = this.HTMLchooseOperand();
                    break;
    
                case "getAnswer":
                    app.innerHTML = this.HTMLgetAnswer();
                    break;

                case "userStatistic":
                    app.innerHTML = this.HTMLuserStatistic();
                    DB.currentStage = currentStage;
                    break;

                case "userSettings":
                    app.innerHTML = this.HTMLuserSettings();
                    DB.currentStage = currentStage;
                    break;                
            
                default:
                    break;
            };
        } else {
            //
            user.show_user_list();
        }

        if(this.temp.messages.length > 0){
            this.showMessages();
        }

        let input = document.getElementById('answer');
        if(input){
            input.focus();
        }
    },

    memory: {
        //
        timeStart: null,
        timeStop: null,
        timeLength: null,
        countAnsweres: 0,
        countRightAnsweres: 0,
        countWrongAnsweres: 0,

        rightAnsweres: [],
        wrongAnsweres: [],
        allAnsweres: [],

        operation: null,
        operand: null,
        operator: null,
    },

    temp: {
        currentStage: "chooseOperation",
        currentValue: null,
        currentResult: null,
        stage1: [],
        stage2: [],
        messages: [],
    },

    chooseOperation( inputOperation ){
        this.memory.operation = inputOperation;
        this.memory.operator = operators[inputOperation];
        this.show("chooseOperand");
    },

    chooseOperand( inputOperand ){

        this.memory.operand = inputOperand;
        this.memory.timeStart = new Date();

        const exerciseArray = exercises[`${this.memory.operation}_${this.memory.operand}`];

        for(let elem of exerciseArray){
            this.temp.stage1.push(elem);
        }

        while (this.temp.stage2.length < exerciseArray.length) {

            let randomIndex = Math.floor( Math.random()*exerciseArray.length);

            if(this.temp.stage2.indexOf(exerciseArray[randomIndex])>=0){
                continue;
            }
            this.temp.stage2.push(exerciseArray[randomIndex]);

        }

        this.temp.currentValue = this.temp.stage1[0][0];
        this.temp.currentResult = this.temp.stage1[0][1];
        this.temp.saved = "false";

        this.show("getAnswer");
    },

    getAnswer(inputAnswer){

        let answeres = this.memory.allAnsweres;
        let timeStart;
        let timeStop = new Date();

        if(answeres.length > 0){
            timeStart = answeres[answeres.length - 1].timeStop;
        } else {
            timeStart = this.memory.timeStart;
        }

        answeres.push( {
            timeStart: timeStart,
            timeStop: timeStop,
            timeLength: timeStop - timeStart,
            input: inputAnswer, 
            expression: this.getExpression(),
            current: this.temp.currentResult,
        } );
        this.memory.countAnsweres++;

        if( this.checkAnswer(inputAnswer) ){
            this.memory.rightAnsweres.push( {input: inputAnswer, current: this.temp.currentResult,} );
            this.memory.countRightAnsweres++;

            this.showMessages( 'right', 'Молодец! Ответ верный!' );

            this.next();
        } else {
            this.memory.wrongAnsweres.push( {input: inputAnswer, current: this.temp.currentResult,} );
            this.memory.countWrongAnsweres++;

            this.showMessages( 'wrong', 'Попробуй еще разок...' );

        }

        this.show("getAnswer");

        if(answeres.length > 0){
            console.log(this.HTMLinfo());

            document.getElementById('app-wrapper__info').innerHTML = this.HTMLinfo();
        }

        

    },

    getExpression(){
        if(this.memory.operation == 'composition'){
            return `${this.memory.operand} состоит из ${ this.temp.currentValue } ${ this.memory.operator }`;
        } else {
            return `${this.temp.currentValue} ${this.memory.operator} ${this.memory.operand} =`;
        };
    },

    checkAnswer( inputAnswer ){
        return inputAnswer == this.temp.currentResult;
    },

    next(){
        let stage1 = this.temp.stage1;
        let stage2 = this.temp.stage2;

        if(stage1.length > 1){
            stage1.shift();
            this.temp.currentValue = stage1[0][0];
            this.temp.currentResult = stage1[0][1];
        } else if(stage2.length > 1){
            stage2.shift();
            this.temp.currentValue = stage2[0][0];
            this.temp.currentResult = stage2[0][1];
        } else {
            console.log('Всё!!!');
        }
    },

    showMessages(msgType, msgText){
        //
        if( document.getElementsByClassName('msg').length > 0 ){
            document.getElementById('msgBox').innerHTML = '';
        };
        let msg = document.createElement('div');
        let msgDate = new Date();
        let msgID = `${msgDate.getMinutes()}${msgDate.getSeconds()}${msgDate.getMilliseconds()}`;
        msg.id = msgID;
        msg.classList = `msg msg-${msgType} msg-created`
        msg.innerHTML = `
        <div class="msg__logo"><img src="icons/${msgType}.png" width="35" alt="info"></div>
        <div class="msg__body">
            <div class="msg__body-text">
                ${msgText}
            </div>
        </div>
        `;

        document.getElementById('msgBox').appendChild(msg);

        setTimeout(() => {
            msg.classList.add('msg-visible');
        }, 100);

        setTimeout(() => {
            this.hideMessages(msgID);
        }, 2000);

    },

    hideMessages(msgID){
        let msg = document.getElementById(msgID);

        if(msg){
            msg.classList.add('msg-hidden');
            setTimeout(() => { 
                if(msg){  
                    document.getElementById('msgBox').innerHTML = '';
                };
            }, 300);
        }

        
    },


    save(){

        if(this.temp.saved === "false"){
            this.memory.timeStop = new Date();
            this.memory.timeLength = this.memory.timeStop - this.memory.timeStart;

            user.current.archive.count++;
            user.current.archive[`${user.current.archive.count}`] = this.memory;
            this.temp.saved = "true";
        }
        
    },

    HTMLchooseOperation(){
            return `
                <div class="app-wrapper">
                    <div class="app__menu" id="first">
                        <div class="btn menu-item" id="multiplication" onclick="app.chooseOperation(this.id);">Умножение</div>
                        <div class="btn menu-item" id="division" onclick="app.chooseOperation(this.id);">Деление</div>
                        <div class="btn menu-item" id="composition" onclick="app.chooseOperation(this.id);">Состав числа</div>
                    </div>
                </div>
                `;
    },

    HTMLchooseOperand(){
        //
        let inner = `<div class="app-wrapper">
        <div class="menu" id="second">`;

        for(item of exercises[this.memory.operation]){
            inner += `
                <div class="btn menu-item" id="${item}" onclick="app.chooseOperand(this.id);">${item}</div>
            `;
        };

        inner += `
                </div>
            </div>
        `;

        return inner;
    },


    HTMLgetAnswer(){
        let inner = `<div class="app-wrapper" id="app-wrapper">`;

        if(this.memory.operation == 'composition'){
            inner += `
                <div class="app-wrapper__header">
                    Упражнение "СОСТАВ ЧИСЛА ${this.memory.operand}"
                </div>
                <div class="app-wrapper__content">
                    <div class="element"> ${ this.memory.operand } </div> 
                    <div class="element"> состоит из </div> 
                    <div class="element" id="firstOperand"> ${ this.temp.currentValue } </div> 
                    <div class="element" id="operator">${ this.memory.operator }</div>
                    <input class="input-waiting" id="" type="text" autofocus onchange=" app.getAnswer(this.value); " maxlength="2">
                </div>
            `;
        } else {
            let operationRUS;
            if(this.memory.operation == 'multiplication'){
                operationRUS = 'УМНОЖЕНИЕ';
            } else if(this.memory.operation == 'division'){
                operationRUS = 'ДЕЛЕНИЕ';
            }
            inner += `
                <div class="app-wrapper__header">
                Упражнение "${operationRUS} НА ${this.memory.operand}"
                </div>
                <div class="app-wrapper__content">
                    <div class="element" id="firstOperand">${this.temp.currentValue}</div>
                    <div class="element" id="operator"> ${this.memory.operator} </div>
                    <div class="element" id="secondOperand">${this.memory.operand}</div>
                    <div class="element">=</div>
                    <input class="input-waiting" id="answer" type="text" autofocus onchange="app.getAnswer(this.value)" maxlength="2">
                </div>
            `;
        };  
        
        inner += `<div class="app-wrapper__info" id="app-wrapper__info"></div>`

        inner += `</div>`;

        return inner;
    },

    HTMLmsg(msgType = '', msgText = ''){
        
        return ``;
    },


    HTMLuserStatistic(){
        return `This is page USER statistic`;
    },

    HTMLuserSettings(){
        return `This is page USER settings`;
    },

    HTMLmainMenu(){
        return `
            <div class="btn menu__item" id="startExercise" onclick="app.show(this.id);">Упражнение</div>
            <div class="btn menu__item" id="userStatistic" onclick="app.show(this.id);">Статистика</div>
            <div class="btn menu__item" id="userSettings" onclick="app.show(this.id);">Настройки</div>
        `;
    },

    HTMLinfo(){
        let info = `
        <div class="info__stat">
            <table class="table-stat" id="table-stat" cellspacing="0" cellpadding="5">
                <caption>Статистика упражнения</caption>
                <tr><td class="table-stat__first-col">Количество решенных примеров</td><td class="table-stat__second-col">${this.memory.rightAnsweres.length}</td></tr>
                <tr><td class="table-stat__first-col">Количество ошибок</td><td class="table-stat__second-col">${this.memory.wrongAnsweres.length}</td></tr>
                <tr><td class="table-stat__first-col">Всего введено ответов</td><td class="table-stat__second-col">${this.memory.allAnsweres.length}</td></tr>
                <tr><td class="table-stat__first-col">Время с начала упражнения</td><td class="table-stat__second-col" id="app-timer"></td></tr>
            </table>
        </div>
        <div class="info__log">
            <table class="table-log" id="table-log" cellspacing="0" cellpadding="5">
                <caption>Ввденные ответы:</caption>
                <tr>
                <th>Пример</th>
                <th>Ответ</th>
                <th>Время</th>
                </tr>
        `;

        for (const item of this.memory.allAnsweres) {
            info += `
            <tr><td>${item.expression}</td><td class="td-${item.input == item.current}">${item.input}</td><td>${Math.floor(item.timeLength/1000)} сек</td></tr>
            `;
        };

        info += `
        </table>
        </div>
        `;

        setInterval( ()=>{
            let now = new Date();
            let count_seconds = Math.floor((now - this.memory.timeStart)/1000);
            let count_minutes = 0;
            if( count_seconds > 60 ){
                count_minutes = Math.floor(count_seconds/60);
                count_seconds -= count_minutes*60;
            }

            document.getElementById('app-timer').innerHTML = `${count_minutes} мин ${count_seconds} сек`;
        }, 1000 )

        return info;
    },
}


if(DB.current){
    user.current = JSON.parse(DB.current);
}

window.addEventListener('unload', ()=>{
    if(user.current){
        app.save();
        DB.current = JSON.stringify(user.current);
    }
});

*/