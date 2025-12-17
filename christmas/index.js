//-------------------------------table-------------------
/**
 * @type {PartialElf[]}
 */
const arrTable = [
    {
        what: "Logisztika",
        who1: "Kovács Máté",
        muszak1: "Délelöttös",
        who2: "Kovács József",
        muszak2: "Délutános"
    },
    {
        what: "Könyvelés",
        who1: "Szabó Anna",
        muszak1: "Éjszakai"
    },
    {
        what: "Játékfeklesztés",
        who1: "Varga Péter",
        muszak1: "Délutános",
        who2: "Nagy Eszter",
        muszak2: "Éjszakai"
    }
]
createFrame("jssection", "jstbody", ["Osztály", "Manó", "Műszak"], arrTable)
//------------------------------form-------------------------
/**
 * @type {FormObj[]}
 */
const arrForm = [
    {//input
        idFor: "osztaly",
        labelTxt: "Osztaly",
        tipus: "input"
    },
    {//input
        idFor: "mano1",
        labelTxt: "Manó 1",
        tipus: "input"
    },
    {//select
        idFor: "muszak1",
        labelTxt: "Manó 1 műszak",
        tipus: "select"
    },
    {//checkbox
        idFor: "masodikmano",
        labelTxt: "Két manót veszek fel",
        tipus: "checkbox"
    },
    {//input
        idFor: "mano2",
        labelTxt: "Manó 2",
        tipus: "input"
    },
    {//select
        idFor: "muszak2",
        labelTxt: "Manó 2 műszak",
        tipus: "select"
    }
]
const jsForm = createForm("jsform", arrForm)
const htmlForm = document.getElementById('htmlform')
//------------------------------Event------------------------
jsForm.addEventListener("submit", function (e) {
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
    const masikmanoCheckBox = target.querySelector('#masodikmano')//vegen initCheckbox


    /**@type {HTMLInputElement} */
    const mano2Input = target.querySelector('#mano2')
    /**@type {HTMLSelectElement} */
    const muszak2Select = target.querySelector('#muszak2')
    changeCheckboxValue(masikmanoCheckBox)

    if (validateFields(osztalyInput, mano1Input, muszak1Select)) {
        /**@type {string} */
        const osztalyInputString = osztalyInput.value

        /**@type {string} */
        const mano1InputString = mano1Input.value
        /**@type {string} */
        const muszak1SelectString = muszak1Select.value

        /**@type {string} */
        const mano2InputString = mano2Input.value
        /**@type {string} */
        const muszak2SelectString = muszak2Select.value

        /**@type {PartialElf} */
        const obj = {}

        obj.what = osztalyInputString
        obj.who1 = mano1InputString
        obj.muszak1 = mapMuszak(muszak1SelectString)
        if (masikmanoCheckBox.checked) {
            mano2InputString == "" ? obj.who2 = undefined : obj.who2 = mano2InputString
            muszak2SelectString == "" ? obj.muszak2 = undefined : obj.muszak2 = mapMuszak(muszak2SelectString)
        }

        arrTable.push(obj)
        createTableBody(arrTable)
        target.reset()
    }
})
//htmlEvent -


const jsFormbelsoCheckBoxja = jsForm.querySelector("#masodikmano")
initCheckbox(jsFormbelsoCheckBoxja);