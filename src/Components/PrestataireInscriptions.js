import React from 'react';
import { useState } from 'react';

const PrestataireInscriptions = () => {
    
const [Nom, setNom] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    
      
        const onSubmit = () => {
          alert(`Submitted ${Nom} ${email}`);
        };
    return (
        <div className='PrestataireInscriptions'>
        <form>
        
        <br/>
        
      <input value={Nom} onChange={(e) => setNom(e.target.value)} type='text' placeholder='Entrez votre Nom' />
      <br/>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Entrez votre email ' /> <br/>
      <input value={email} onChange={(e) => setPassword(e.target.value)} type='Password' placeholder='Entrez votre Mot de passe' />
      <br/>
      <select>
        <option value="Prestataire" key=""> Prestataire</option>
       
      </select>
      <br/>
      <button onClick={onSubmit}>S'inscrire</button>
    </form>
    
        </div>
    );
}

export default PrestataireInscriptions;
