import { fixMultiSpanTag } from '../lib/html_tidy'

const testStr = `<i> bbb <b> <br /> ccc </b> <br> eee </i> <br  /> fff`;
//                   ^i             ^i&b          ^b               ^none

//  <b> <br   > ddd </i> </b>`;


console.log(testStr)
console.log(fixMultiSpanTag(testStr));

