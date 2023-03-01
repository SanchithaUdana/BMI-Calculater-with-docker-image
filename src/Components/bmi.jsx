import React, { Component } from 'react';

class Bmi extends Component {
    state = { 
        bmi : 0,
        result : "Enter Values First",

     } 
     
     values = {
        mass : 0,
        height : 0,
     }

     styles = {
        fontSize : 40,
     }

     stylesH = {
        fontSize : 45,
        FontFace : "calibri",
        
     }

     pictDe = {
        width : 490,
        height : 290,
     }

     resultStyle ={
        fontSize : 25,
     }

     // main 
    render() { 
        return (

            <div>
                
                <center>

                <hr width='30%' />
                <a href="https://en.wikipedia.org/wiki/Body_mass_index" target="_blank">
                <img src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/306/306129/bmi-for-men-and-women.png?w=1155&h=735" width={this.pictDe.width} height={this.pictDe.height} alt="Body Mass Index" />
                </a>

                <hr width='30%' />

                {/* header title  */}
                <font style={this.stylesH}><center> BMI CALCULATER <hr width='30%' /></center></font>

                <hr width='17%' color='red'/>

                {/* bmi value  */}
                <span id='bmi' style={this.styles} className={this.resultColor()}>{this.state.bmi.toFixed(2)} 
                <font> </font> kg m <sup>-2</sup> </span>
                <hr width='17%' color='red' />

                

                {/* bmi result  */}
                <span id='result' style={this.resultStyle} className={this.resultColor()}>{this.state.result}</span>
                <br />
                <br />

                <form action="">
                {/* input field */}
               
                <input type="text" id='Mass' className='form-contro' placeholder='Enter Mass (kg)' />
                
                &nbsp; &nbsp;

            
                <input type="text" id='Height' className='form-contro' placeholder='Enter Height (cm)'/>
                    &nbsp; &nbsp;
                <input type="reset" value="Reset inputs" className='btn btn-light' />

                </form>

                <br />

                
                {/* data submit */}
                <button type='submit' id='submit' onClick={this.bmiCal} className='button' >Click to Calculate</button> 
                    <br /> <br />
                
                    &nbsp;
                
                {/* reset button */}
                <button id='reset' type='reset' className='btn btn-danger' onClick={this.resetB}>
                    Reset BMI Value</button>

                <br />
                <br />
                <p>@ 2023.02.28 React Trainig - FlexyCode </p>
                <hr width='30%' />
                    
                    
                </center>

            </div>

        );
    }

    

    // bmi value calculater
    bmiCal = () =>{
        const {bmi} = this.state;
        
        let mass = document.getElementById("Mass").value;
        let height = document.getElementById("Height").value;

        if (isNaN(mass) || isNaN(height)){
            console.log("please eneter a value");
        }
        
        if  (mass === null || height === null || mass === " " || height === " "){
            
            this.setState({bmi : this.state.bmi = 0});
            this.resetB();

        }else{
            let heightcal = (height/100);
            this.state.bmi = ((mass)/(heightcal * heightcal));
            this.setState({bmi: this.state.bmi});
            this.setState({bmi: this.state.bmi});
            this.bmiResult();

        }
        
        
    }

    // result calculater
    bmiResult = () =>{
        const {bmi} = this.state;
        
        if (bmi > 0 && bmi < 18.5){
            this.state.result = "Underweight";
        }else if (bmi > 18.5 && bmi < 24.9){
            this.state.result = "Healty Weight";
        }else if (bmi > 25 && bmi < 29.9){
            this.state.result = "Overweight";
        }else if (bmi >= 30){
            this.state.result = "Obesity";
        }else{
            this.state.result = "Wrong Values ! try again.."
        }

        this.setState({result: this.state.result});
    }

    // relevant color picker
    resultColor = ()=> {
        const {bmi} = this.state;
        let classes = "text-";
        
        if (bmi > 0 && bmi < 18.5){
            classes += "warning";
            return classes;
        }else if (bmi > 18.5 && bmi < 24.9){
            classes += "success";
            return classes;
        }else if (bmi > 25 && bmi < 29.9){
            classes += "muted";
            return classes;
        }else if (bmi >= 30){
            classes += "danger";
            return classes;
        }
    }

    // reset button
    resetB = () => {
        this.setState({bmi: this.state.bmi = 0});
        this.setState({result : this.state.result = "Enter Values First" })
    }

}
 
export default Bmi;