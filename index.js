// code your solution here
//// Fill in the ... with the activity that's passed in as the first parameter. 
//// If nothing is passed in, default to "roller-skate".
function saturdayFun(activity= "roller-skate") {
    ///this below returns a string
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());

///Uncaught SyntaxError: Function statements require a function name
// JavaScript does not recognize it as a function expression; 
//it instead interprets it as a function declaration that's missing its name.

// one way to tell JS engine that it's a function expression is to use
// the groupoing operator () to wrap the entire thing

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork(/*arguement*/));

let wrapAdjective = function(style="*") {
    return function(adjective="special"){
        return `You are a ${style} ${adjective} ${style}`
    }
}
//console.log(wrapAdjective("hard worker!")());
console.log(wrapAdjective(style="awesome")("a dedicated programmer")()); //=> "You are %a dedicated programmer%!"


