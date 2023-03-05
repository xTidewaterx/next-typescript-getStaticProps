//A union type describes a value that can be one of several types. 

const value:  string | number = "union type value, one of several types";

//we generate function to map through, okay generated below okay, hmm
//we slice and generate certain amount and now getsstaticprops, we have staticprops
//then opathgs and each iteration now param and isd array strucutre paths 
//next dev mode, we have map and we have create query param, there is id on that id is mapped valkue all of these links map value are made here

import { GetStaticProps } from 'next';
import Link from 'next/link';

function PresidentList( { presidents } : any){

    console.log(presidents)
    return( 
        <div className='list__container p-5'>
            <h1>Liste over Amerikanske presidenter 1817-1881</h1>
            <div className='list__childContainer pt-5 align-self-lg-center'>
            {
                presidents.map( 
                   (president : any ) =>
                <div className='list__presidentContainer' key={president.id}>

                    <Link style={{color: "black"}} href={ `presidents/${president.id}` } >
                        <li className=' pb-2 list__presidentName'>{president.name}</li>
                    </Link>
                 </div>
                 
                 )
            }
        </div></div>
    )
}

export default PresidentList
 
 
export const getStaticProps: GetStaticProps = async (context) => {

        const response2 = await fetch('https://api.sampleapis.com/presidents/presidents')
    
        const data = await response2.json();
        
        return {
            props:{
                presidents: data.slice(4,19),//take only 3 names from the list
            },
            
        }
}


//kartverket:: https://www.kartverket.no/globalassets/geodataarbeid/geovekst/priskalkulator/data/produkter.json