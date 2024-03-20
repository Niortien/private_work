import React from 'react';
import Layout from '../Components/Layout';

import { Link } from 'react-router-dom';
import img1 from '../Images/logo.png'

import Services from './Services'

const Home = () => {
    return (
        <div>

<Layout>
    <div className='container'>
       
        <div className="part one"> 
        <div className="part-one-left">
            <img src={img1} alt="" />
        </div>
        <div className="part-one-right">
            <h1 className='welcome'>Bienvenue  sur EVENT PLANNER,</h1>
            <h1 className='welcome2'>Pour faciliter l'organisation de vos  évènements</h1>
            <h3>Avez-vous déjà passé des heures à stresser tout en cherchant des prestataires de service pour vos événements ?
             <br/> ou pour promotions et la visibilité de vos différents évènements? <br/> Dans cette optique de vous débarrasser   de ce poids nous mettons à votre disposition notre application qui en plus de supprimer les inquiétudes, les surprises ou les rebondissements de dernière minute, vous offres des prestataires internes qualifié que vous pouvez choisir en fonction du profil et votre budget.</h3>

        </div>
        </div>

 <div className="part-two">
            <div className="part-two-left">

                <div className="rowe">
                <div className="row-image">
                <img src={img1} alt="" />
                </div>
                <div className="row-writting">
                    <h1>Inscription ou connexion </h1>
                    <p>Connectez-vous à l'application via vote nom , adress e-mail et  <br />votre numero de telephone</p>
                </div>
                </div>

                <div className="rowe">
                <div className="row-image">
                <img src={img1} alt="" />
                </div>
                <div className="row-writting">
                    <h1>Choisissez et reservez un service </h1>
                    <p>Connectez-vous puis choisissez les services et les prestataires <br /> selon vos besoins et votre budget</p>
                </div>
                </div>

                <div className="rowe">
                <div className="row-image">
                <img src={img1} alt="" />
                </div>
                <div className="row-writting">
                    <h1>suivez-vos reservations choisis  </h1>
                    <p>suivez la progression de vos services choisis <br />en etant directement en contact avec le prestataire</p>
                </div>
                </div>
                <div className="rowe">
                <div className="row-image">
                <img src={img1} alt="" />
                </div>
                <div className="row-writting">
                    <h1>Plubliez vos nombreux services </h1>
                    <p>Quelques soient vos nombreuw services , sur Event Planner   <br />impossible de ne pas vous remarquez</p>
                </div>
                </div>
               
            </div>
            <div className="part-two-right">
            <img src={img1} alt="" />
            </div>

</div>



        <div className="part three"></div>
        
    </div>
</Layout>


        </div>

    );
}

export default Home;
