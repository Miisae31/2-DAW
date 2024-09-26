console.log(typeof "Borja"); // Este literal é de tipo string
console.log(typeof 2.4252); // Este literal é de tipo number
console.log(typeof (5 + 12)); // Esta operación produce un number
console.log(typeof (5 * 12)); // Esta operación produce un number
console.log(typeof ("5" + 12)); // Esta operación produce un string
console.log(typeof ("5" * 12)); // Esta operación produce un number
console.log(typeof ("B" * 12)); // Esta operación produce un number (NaN)
console.log(0 / 0); // Esta operación produce un number (NaN)
console.log(5 / 0); // Esta operación produce un number (infinity)
console.log(-5 / 0); // Esta operación produce un number (-infinity)
console.log(typeof true); // Este literal é de tipo boolean
console.log(typeof [5, 6, 7, 8]); // Os array son sempre de tipo object 
console.log(typeof { nome: 'Paco' }); // Este literal é de tipo object
console.log(typeof (new Date())); // Esta operación crea un object
console.log(typeof (function () { })); // Esta declaracion de tipo function (que é un tipo especial de obxecto)
console.log(typeof cousa); // É de tipo undefined (porque non hay declaración de ninguna variable 'cousa')
console.log(typeof null); // Este literal é de tipo object
console.log(typeof (10 + true)); // Esta operación produce un number (11)
console.log(typeof ('10' + true)); // Esta operación produce una string ('10true')
console.log(new String(new Date())); // Convirte un obxecto a súa representación en String
console.log(typeof (parseInt("256"))); // Convirte un string nun number
console.log(parseInt('12.5'));
console.log(parseFloat('12.5'));