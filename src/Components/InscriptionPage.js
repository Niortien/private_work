import React from 'react';
import Layout from './Layout';
import LabTabs from './LabTabs'
import im12 from '../Images/acceuil3.jpg'


const InscriptionPage = () => {
    return (
       <Layout>
       <div className='InscriptionPage'>
        <LabTabs  /> 
        <div className="message Prestataire">
            <h1 className='messagePre' >Bienvenue future <br />  prestataire</h1>
        </div>
       
       </div>
       </Layout>
    
    );
}

export default InscriptionPage;
