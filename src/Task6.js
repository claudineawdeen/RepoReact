import JsonCSSFile from './Style.json'
export default function PrintName5(){

   const style1=JsonCSSFile.style1;
   const style2=JsonCSSFile.style2;

    return(
        <p>Code <span style={style1}>Circle</span><span style={style2}> Academy</span></p>
    )
}