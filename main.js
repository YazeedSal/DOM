const header = document.getElementById('header')
const title = document.getElementById('title')
const user = {
    firstName : 'Yazeed',
    lastName : 'Salameh',
    dob  : '1/1/2001'

}

header.innerHTML = `

<h1>Welcome Mr.  ${user.firstName} ${user.lastName}</h1>
<h2>Your Birth Date is ${user.dob}</h2>


`

const renderUser = function(firstName,lastName){
header.innerHTML =`
<h1>Welcome Mr. ${firstName} ${lastName}</h1>
`
}