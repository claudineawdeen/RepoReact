export default function PrintName5(){
  
    const isLoggedIn=true;
    return( <div>
       {isLoggedIn? <p>Welcome Back!</p> :  <p>Failed!</p> }</div>
    )
}