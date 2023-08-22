// - ให้สร้างตัวแปรชื่อ height(m) และ weight(kg) เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI (BMI = M / H^2)
// - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h3>


// #1 React : JSX



const bmiCalculator =
    <div className="bmi">
        <div className='bmiInput'>
            <input type='text' placeholder="Weight"></input><br />
            <input type='text' placeholder="Height in CM"></input>
            <br></br>
            <input
                type="submit"
                value="Calculate BMI"
                onClick={()=>alert("wow")}
                >

            </input>

        </div>
        <div className="bmiOutput">
            <h3>Your BMI is : {'Use the console to invoke the Function brother'} </h3>
        </div>
    </div>


// #2 ReactDOM : createRoot

const rootDom = document.querySelector("#root")

// #3 ReactDOM : TakeOver for Render Task

const root = ReactDOM.createRoot(rootDom)
root.render(bmiCalculator)





const calBMI = (w, h) => {
    const newBMI = <h3>Your BMI is {Math.round(w / ((h / 100) ** 2))} </h3>
    const bmiOutput = document.querySelector('.bmiOutput')
    const rootBmi = ReactDOM.createRoot(bmiOutput)

    rootBmi.render(newBMI)
    return 
}
