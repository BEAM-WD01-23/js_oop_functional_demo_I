//Recap
//i function and parameters
        function myFunction(value){
            return value.toUpperCase();
        }
        const valueResult = myFunction('my value');
        console.log(valueResult);
        //
//ii hoisting
        // const myCalculation = calculateThis(4,5,6);
        // console.log(myCalculation);

        // function calculateThis(a, b, c){
        //     return a*b-c
        // }
        //
        //
        //arrow-function, hoisting in arrow-function
        // const myCalculation = calculateThis(4,5,6);
        // console.log(myCalculation);

        //const myCalculation = calculateThis(4,5,6);
        //console.log(myCalculation);

        const calculateThis = (a, b, c) => {
            return a*b-c
        }
        //
        function one(greetings){
            return greetings
        }
        let functionOne = one('Good Morning! this is function one!');
         
        function two(){
           // console.log(functionOne);
            //console.log('this is function two');
        }
        let functionTwo = two();
       // console.log(functionTwo);
       //
       //example for the assignment
       function convertAge(human_age){
        return human_age / 7
       }
       let dogAge = convertAge(55);
       //console.log("it would be " + dogAge + " in dog's age.");
//recursion
//

//
//scope
       //declare your variables inside your function 
       //pure coding ....
    



//OOP Vs FP
       //
        // class Cube{
        //     constructor(width, height, length){
        //         this.width = width;
        //         this.height = height;
        //         this.length = length
        //     }
        //     calculateVolume(){
        //         console.log("The volume of my cube is " + (this.width * this.height * this.length) + " ㎤");
        //     }
        // }
        // //instantiate
        // let my_cube = new Cube(5,5,5);
        //console.log(my_cube.calculateVolume());
        //

//
//
//convert the above function to FP

        function Cube(width, height, length){
                let myCalculation = width*height*length
                return myCalculation
        }
        let my_cube = Cube(5,5,5);
        //console.log(my_cube);
        //with condition to render result 
        // function Cube(width, height, length){
        //     if(0>1){
        //         let myCalculation = width*height*length
        //         return myCalculation
        //     }else{
        //         console.log('sorry I can not calculate it!')
        //     }
        // }
        // let my_cube = Cube(5,5,5);
        //console.log(my_cube);
        //
//getter and setter in object-literal
        const employee = {
            name: 'Marko',//property

            get showName(){
                return this.name;
            },
            set newNames(value){
                this.name = value;
            }
        }
        // console.log(employee);
        //console.log(employee.showName);
        //
        employee.newNames = 'Silvia';
        console.log(employee);
       



