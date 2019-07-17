n = 1
// pattern
// так  
// n = 1
// while( n <= 10 ){ 
//   if( ( n % 2 ) == 0){ document.write("#")
//   } else{
//     document.write("*")
//   }
//   n++
// }
// или так
// 1.*#*#*#*#*#
// while( n <= 10 ){
//   if( n == 2 ){
//     document.write("#")
//   } else if ( n == 4) {
//     document.write("#")
//   } else if ( n == 6) {
//     document.write("#")
//   } else if ( n == 8) {
//     document.write("#")
//   } else if ( n == 10) {
//     document.write("#")
//   } else {
//   document.write("*")
//   }
//   n++
// }

// 2.**#**#**#*
// так  
// n = 1
// while( n <= 10 ){ 
//   if( ( n % 3 ) == 0){ document.write("#")
//   } else{
//     document.write("*")
//   }
//   n++
// }
// или так
// while( n <= 10 ){
//   if( n == 3 ){
//     document.write("#")
//   } else if ( n == 6) {
//     document.write("#")
//   } else if ( n == 9) {
//     document.write("#")
//   } else {
//   document.write("*")
//   }
//   n++
// }

// 3.*#*#*#*#*#
//   #*#*#*#*#*
//   *#*#*#*#*#
// так 
while( n <= 30 ){ 
  if (( n % 20) == 0){ 
    document.write('<br>')
  } else if(( n % 10 ) == 0){ 
    document.write("# " + '<br>' +"#")
  } else if(( n % 2) == 0){ 
    document.write("#")
  } else{
    document.write("*")
    }
  
n++  
}
// while( n <= 31 ){
//   if( n == 2 ){
//     document.write("#")
//   } else if ( n == 4) {
//     document.write("#")
//   } else if ( n == 6) {
//     document.write("#")
//   } else if ( n == 8) {
//     document.write("#")
//   } else if ( n == 10) {
//     document.write("#")
//   } else if ( n == 11){
//     document.write('<br>' + "#")
//   } else if ( n == 13){
//     document.write("#")
//   } else if ( n == 15){
//     document.write("#")
//   } else if ( n == 17){
//     document.write("#")
//   } else if ( n == 19){
//     document.write("#")
//   } else if ( n == 21){
//     document.write('<br>')
//   } else if ( n == 23) {
//     document.write("#")
//   } else if ( n == 25) {
//     document.write("#")
//   } else if ( n == 27) {
//     document.write("#")
//   } else if ( n == 29) {
//     document.write("#")
//   } else if ( n == 31) {
//     document.write("#")
//   } else {
//     document.write("*")
//   }
//   n++
// }
