import React from 'react';
 import img1 from  '../Images/img1.jpg'
 import img2 from  '../Images/img2.jpg'
 import img3 from  '../Images/img3.jpg'
 import img4 from  '../Images/img2.jpg'
 import img5 from  '../Images/img4.jpg'
 import img6 from  '../Images/Facebook.png'
 import img7 from  '../Images/github.png'
 import img8 from  '../Images/linkedin.png'
 import img9 from  '../Images/wave.png'
 import { useState } from 'react';
 import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer'>

            <div className='text-box'>
                <div className='left'>
            <h3>Assistance</h3>

               <div className='row'>
               <div className='box call-center'>

            <div className='image'> 
            <img src={img1} alt="" />
            </div>
            <div className='desciption'>Centre d'appel</div>
            </div>

            <div className='box faq'>

            <div className='image'> 
            <img src={img2} alt="" />
            </div>
            <div className='desciption'>FAQ</div>
            </div>
            <div className='box number'>

            <div className='image'> 
            <img src={img3} alt="" />
            </div>
            <div className='desciption'>0777052317</div>
            </div>
            <div className='box email'>

<div className='image'> 
<img src={img4} alt="" />
</div>
<div className='desciption'>Email</div>

</div>              

<div className='box call-center'>

<div className='image'> 
<img src={img5} alt="" />
</div>
<div className='desciption'>cocody,rivera</div>
</div>
               </div>

                </div>
                <div className='middle'>
                    <h3>Enregistreur</h3>
                <p> <Link to='/signUp' >Devenir un utilisateur</Link> <br/>
                   <Link to='/signUp' >Devenir un utilisateur</Link> </p>
                </div>
                <div className='right'>
                    <h3>Liens rapides </h3>
                    <p>Legal <br/>
                       Termes et conditions <br/>
                       Comment ça marche <br/>
                       Confiance ,sécurité et assurance   <br/>
                       Politique et confidentialité <br/>
                       A propos de nous  </p>
                </div>
            </div>

            <div className='social-box'>
                <div className='facebook'>
                    <img src={img6}alt="" />
                </div>
                <div className='linkedin'>
                <img src={img8} alt="" />
                </div>
                <div className='github'>
                <img src={img7} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
