import '../Styles/card.css';
import comparepic from '../assets/compare.209x256.png';
import heartOutline from '../assets/heartoutline2.png';
import heartFilled from '../assets/heartFilled.png';
import { useEffect,useState,useContext } from 'react';
import { ApparelContext } from '../Context/ApparelContext';

function Card(props){
    const {loadChange, setLoadChange} = useContext(ApparelContext);

    //0 for unfiled anmd 1 for filled
    const [heartState, setHeartState] = useState(0);

    useEffect(() => {
        const storedApparels = JSON.parse(localStorage.getItem("Wishlist")) || [];
        const isFavorited = storedApparels.some(apparel => apparel.title === props.title);
        setHeartState(isFavorited ? 1 : 0);
        console.log(heartState);
    }, [props.title,loadChange]);


const handleAddWishList = () => {
        const shoe = {
            title: props.name,
            thumbnail: props.thumbnail,
            price: props.price,
            brand: props.brand,
            stockXPrice: props.stockXPrice,
            stockXLink: props.stockXLink,
            flightClubPrice: props.flightClubPrice,
            flightClubLink: props.flightClubLink,
            goatPrice: props.goatPrice,
            goatLink: props.goatLink,
            description: props.description
        };
        setLoadChange(loadChange+1);

        const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
        let shoeInWishlist = false;

        for(let i = 0; i<existingWishlist.length; i++){
            if(JSON.stringify(existingWishlist[i]) === JSON.stringify(shoe)){
                existingWishlist.splice(i, 1);
                alert("shoe removed from wishlist");
                shoeInWishlist = true;
                
            }

        }

        if(!shoeInWishlist){
            existingWishlist.push(shoe);
            setHeartState(1);
            
        }



        
        localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));


    };

    const handelAddComparList = () => {
        const shoe = {
            title: props.name,
            thumbnail: props.thumbnail,
            price: props.price,
            brand: props.brand,
            stockXPrice: props.stockXPrice,
            stockXLink: props.stockXLink,
            flightClubPrice: props.flightClubPrice,
            flightClubLink: props.flightClubLink,
            goatPrice: props.goatPrice,
            goatLink: props.goatLink,
            description: props.description
        };

        const existingShoes = JSON.parse(localStorage.getItem("Compare List")) || [];

        let shoeInCompare = false;

        for(let i = 0; i<existingShoes.length; i++){
            if(JSON.stringify(existingShoes[i]) === JSON.stringify(shoe)){
                shoeInCompare = true;
            }
        }

        if(shoeInCompare){
            alert("Shoe already in compare list");
        }

        else {
            existingShoes.push(shoe);
        }




       
       
        
        localStorage.setItem("Compare List", JSON.stringify(existingShoes));
    }


    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="170" height= "150"></img>
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>


            <button className='compare' onClick={handelAddComparList}>
                <img src={comparepic} className='image' alt="Add to Comparelist" />

            </button>
            <button className='wish' onClick={handleAddWishList}>
            <img src={heartState ===  1? heartFilled: heartOutline} className='image' alt="Add to Comparelist" />


            </button>
            


        </div>

    );

}

export default Card;