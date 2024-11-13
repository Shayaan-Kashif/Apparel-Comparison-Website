import React, { useEffect, useState,useContext } from 'react';
import '../Styles/FirstApparel.css';
import { ApparelContext } from '../Context/ApparelContext';



const FirstApparel = () => {
    const {selectedApparel,setSelectedApparel} = useContext(ApparelContext);

    const handleClear = ()=>{
        setSelectedApparel([]);
    }

    const handleAddWishlist = ()=>{
        const shoe = {
            id: selectedApparel.id,
            thumbnail: selectedApparel.thumbnail,
            title: selectedApparel.name,
            price: selectedApparel.price,
            brand: selectedApparel.brand,
            stockXPrice: selectedApparel.stockXPrice,
            stockXLink: selectedApparel.stockXLink,
            flightClubPrice: selectedApparel.flightClubPrice,
            flightClubLink: selectedApparel.flightClubLink,
            goatPrice: selectedApparel.goatPrice,
            goatLink: selectedApparel.goatLink,
            description: selectedApparel.description
        };

        const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
        existingWishlist.push(shoe);
        localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));
    }


    return (
        <>
            <div className='firstApparel-view'>
                <h2>Apparel 1</h2>
                {selectedApparel.length != 0 ?(
                <>
                    <img src={selectedApparel.thumbnail} alt={selectedApparel.name} width="130" height= "110"></img>
                    <p><strong>Retail Price: </strong>${selectedApparel.price}</p>
                    <p><strong>stockX: </strong>{selectedApparel.stockXPrice}</p>
                    <p><strong>flightClub: </strong>{selectedApparel.flightClubPrice}</p>
                    <p><strong>goat: </strong>{selectedApparel.goatPrice}</p>
                    <p><strong>Description: </strong>{selectedApparel.description}</p>

                    <button onClick={handleClear}>Clear Selection</button>
                    <button onClick={handleAddWishlist}>Add to Wishlist</button>
                    
                </>
            ):<p>Select an Apparel</p>
                }
            </div>
            
        </>
    );
};

export default FirstApparel;