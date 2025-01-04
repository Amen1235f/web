const Statistics=({good,neural,bad})=>{
    total=good + neural + bad
average=(good-bad)/total
perc=(good/total)*100
if(total==0){
    return <div>no Feedback given</div>
}
return(
    <div>
         <p>good :{good}</p>
         <p>neural : {neural}</p>
         <p>bad : {bad}</p>
         
    <p>all : {total} </p>
       <p>average : {average} </p>
       <p>positive pourcentage : {perc} </p>
       </div>
)
}
export default Statistics