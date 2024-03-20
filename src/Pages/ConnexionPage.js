import React from 'react';
import { useState } from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

const ConnexionPage = () => {
const [Nom, setNom] = useState('');

const [password, setPassword] = useState('');
const onSubmit = () => {
    alert(`Submitted ${Nom} ${password}`);
  };
    
    return (
       
           <Layout>
             <div className='ConnectionPage'>
                
           <form>
        <h1>Se connecter</h1>
        <br/>
        
      <input value={Nom} onChange={(e) => setNom(e.target.value)} type='text' placeholder='Entrez votre Nom' />
      <br/>

      <input value={password} onChange={(e) => setPassword(e.target.value)} type='Password' placeholder='Entrez votre Mot de passe' />
      <br/>
      
      <br/>
      <button onClick={onSubmit}>S'inscrire</button>
      
    </form>
    <Link>mot de passe oublié ?</Link>
    </div>
           </Layout>
       
    );
}

export default ConnexionPage;
