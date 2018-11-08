import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    function showModal(){
        let modal =  <InfoModal infoToggle={()=> props.infoToggle()}/>
        if(props.modalShow){
            return modal;
        }else{
            return null;
        }
    }
    return (
        <header>
            <TopNav newGameButton={() => props.newGameButton()} infoToggle={()=> props.infoToggle()}/>
            <div>
                {showModal()}
            </div>
            <h1>HOT or COLD</h1>
        </header>
    );
};
