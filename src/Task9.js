import PrintName9 from './Task9part2.';

export default function PrintName8(){

    const  students =[
        {id:1,name:"studen1"},
        {id:2,name:"studen2"},
        {id:3,name:"studen3"},
        {id:4,name:"studen4"},

    ]
    return (
        <div><PrintName9 items={students}/></div>
    );

}