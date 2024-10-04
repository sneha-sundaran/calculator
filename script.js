const displayContent=(content)=>{

    output.value+=content
}
const showoutput=()=>{

try{
  output.value=eval(output.value)
}
catch{
  output.value=null
output.placeholder="invalid syntax"

}
}
clearAll=()=>{
  output.value=null;

}
remove=()=>{
  output.value=output.value.slice(0,-1)


}
