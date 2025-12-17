//-------------------------------table-------------------
/**
 * @type {PartialElf[]}
 */
const arrTable =[
    {
        what :"Logisztika",
        who1:"Kovács Máté",
        muszak1:"Délelöttös",
        who2:"Kovács József",
        muszak2:"Délutános"
    },
    {
        what :"Könyvelés",
        who1:"Szabó Anna",
        muszak1:"Éjszakai"
    },
    {
        what :"Játékfeklesztés",
        who1:"Varga Péter",
        muszak1:"Délutános",
        who2:"Nagy Eszter",
        muszak2:"Éjszakai"
    }
]
createFrame("jssection","jstbody",["Osztály","Manó","Műszak"],arrTable)
//------------------------------form-------------------------
/**
 * @type {FormObj[]}
 */
const arrForm =[
    {//input
        idFor:"osztaly",
        labelTxt:"Osztaly",
        tipus:"input"
    },
    {//input
        idFor:"mano1",
        labelTxt:"Manó 1",
        tipus:"input"
    },
    {//select
        idFor:"muszak1",
        labelTxt:"Manó 1 műszak",
        tipus:"select"
    },
    {//checkbox
        idFor:"masodikmano",
        labelTxt:"Két manót veszek fel",
        tipus:"checkbox"
    },
    {//input
        idFor:"mano2",
        labelTxt:"Manó 2",
        tipus:"input"
    },
    {//select
        idFor:"muszak2",
        labelTxt:"Manó 2 műszak",
        tipus:"select"
    }
]
const jsForm = createForm("jsform",arrForm)
const htmlForm = document.getElementById('htmlform')
//------------------------------Event------------------------
jsForm.addEventListener("submit",function(e){
    e.preventDefault()
    /**@type {HTMLFormElement} */
    const target = e.target
    
    /**@type {HTMLInputElement} */
    const osztalyInput = target.querySelector('#osztaly')
    
    /**@type {HTMLInputElement} */
    const mano1Input = target.querySelector('#mano1')
    /**@type {HTMLSelectElement} */
    const muszak1Select = target.querySelector('#muszak1')

    /**@type {HTMLInputElement} */
    const masikmanoCheckBox = target.querySelector('#masodikmano')

    
})