// // const a="afasfaf"
// // let b=a.split("")
// // console.log(b)
// //regex is sequence of character that forms search pattern
// //serch for data in text - text search or text replace operation
// //   /pattern/modifier    /Ankit/i   i is modifier(modifies the search to be case sensitive)
// // often used with search() or replace()

// //using string method
// // let text="afasf1ab2an3f4alfmaAnkitafja;"
// // console.log(text.search("Ankit"))//14

// // //using regex
// // console.log(text.search(/Ankit/i))//14
// // console.log(text.search(/ankit/i))//14
// // console.log(text.search(/Ankit/))//14
// // console.log(text.search(/ankit/))//-1
// // console.log(text.search(/nit/))//-1

// // //replace method
// // console.log(text.replace("Ankit","_____"))
// // console.log(text.replace(/Ankit/,"_____"))

// //  i-ignore case sensitive  
// //g-global 
// //m-multiline  match

// // let found=text.match(/fa/g)
// // console.log(found)

// //[] are used to find a range of character [abc]-any char in bracket [0-9]-any char in range [x|y]-any of alternatives
// // console.log(text.match(/[efb]/g))
// // console.log(text.search(/[efb]/g))

// // console.log(text.match(/[0-9]/g))
// // let text2="124232afaf321231"
// // let text3="124453252aerw3"
// // console.log(text2.search(/[0-9]/g))
// // let avail=/[^A-Z]/i
// // avail.test(text2)

// //[^0-9] not in 0-9
// // let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// // let avail1=/[^0-9]/g
// // console.log(avail1.test(text3))
// // let passregx=/[a-z A-Z 0-9 \!\@\#]/
// // let text1="232"
// // let text2="23sfgsd2"
// // let text3="aafAafa"
// // let regex=/[^a-z]/gi
// // let contact="9234234212"
// // let contactregx=/[8-9][0-9]{9}/
// // let password="Ankit@"
// //email must contain @ .
// //password must contain 1Uppercase 1 lowercase 1 special char 1no size>=8 size<=15
// //*-0 or more occurence ,$-in$ word in at end of string, \w-word char (a-z A-Z 0-9 _),+-1 or more occurence
// //?- lookahead negative lookahead lookbehind negative lookbehind
// // console.log(!regex.test(text1))//username check
// // console.log(!regex.test(text2))//username check
// // console.log(!regex.test(text3))// no character other than alphabet same as username validation
// // console.log(!regex.test(text4))//username check
// // console.log(contactregx.test(contact))
// // console.log(emailregx.test(email1))//email check
// // console.log(emailregx.test(email2))//email check
// // let emailregx=/(\.\w{2,3})+$/
// // console.log(emailregx.test(email1))
// // console.log(emailregx.test(email2))
// // let str="af"
// // let test=/^[a-zA-Z0-9]$/.test(str)
// // console.log(test)

// // let str="@edwd"
// // let test=/[^a-zA-Z0-9]/.test(str)
// // console.log(test)


// // let str="1"
// // let test=/^\d?$/.test(str)
// // // console.log(test)
// // let email1="@.com"
// // let email2="ankit123@gmail.com"
// // let emailregx=/^\w+@([\w])+\.([a-z]){2-3}$/
// // console.log(emailregx.test(email1))
// // console.log(emailregx.test(email2))

// // let str="aA9@f"
// // let reg=/[a-z][A-Z][0-9][\W][\S]/
// // console.log(reg.test(str))

// // let str1="a@gmail.com"
// // let str="ankit.48_kumar_@gmail.com.co"
// // let reg=/^[a-zA-Z0-9\.\_]+@[a-z]+(\.[a-z]{2,3}){1,2}$/
// // console.log(reg.test(str))

// // let pass="abcdefghij"
// // console.log(pass.length)


// // let pass1="Ank1it!"
// // let pass2="AAa@9"
// // let passValidator=(pass)=>{
// //  if(!/[a-z]/.test(pass)){return false}
// //  else if(!/[A-Z]/.test(pass)){return false}
// //  else if(!/[0-9]/.test(pass)){return false}
// //  else if(!/[^\w]/.test(pass)){return false}
// //  else if(/[\s]/.test(pass)){return false}
// //  else if(pass.length>15||pass.length<8){return false}
// //  else{return true}
// // }
// // let validPass=passValidator(pass2)
// // console.log(validPass)
// //lookahead
// // console.log(/Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician')

let pass1="Ankit@123"
let pass2="nkit@1asdfasasas"

// function check(pass){
//  if(!/[a-z]/.test(pass)){return false}
// else if(!/[A-Z]/.test(pass)){return false}
// else if(!/[0-9]/.test(pass)){return false}
// else if(!/[^\w]/.test(pass)){return false}
// else if(/[\s]/.test(pass)){return false}
// else if(pass.length<8 || pass.length>15){return false}
// else{return true}}
// let a=check(pass1)
// let b=check(pass2)

// console.log(a)
// console.log(b)
let reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#()+-_\$%\^&\*])(?=.{8,15})/
console.log(reg.test(pass1))
console.log(reg.test(pass2))















