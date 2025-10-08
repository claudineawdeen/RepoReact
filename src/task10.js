import PrintName10 from './Task10part2';

export default function PrintName8(){

    const  students =[
        {id:1,name:"studen1"},
        {id:2,name:"studen2"},
        {id:3,name:"studen3"},
        {id:4,name:"studen4"},

    ]
    return (
        <PrintName10 items={students}/>
    );

}