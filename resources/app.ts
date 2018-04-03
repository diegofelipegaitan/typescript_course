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