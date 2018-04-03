/**
 * https://basarat.gitbooks.io/typescript/docs/rest-parameters.html
 */

function iTakeItAll(first: any, second: any, ...allOthers: any[]) {
    console.log(allOthers);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']

/**
 * Rest parameters can be used in any function be it function/()=>/class member.
 */

 /** 
  * Example by myself
  */
let a = (...someParameters: any[]) => {
    console.log(someParameters);
}
a();
a( 2 , 3 , "123" );

