import RestaurantCardComponent from "./RestaurantCard.js";


const BodyComponent =()=>{return (
    <div id="body" className="body">
    <div className="search-bar">Search
    </div>
    <div className="res-container">
        <RestaurantCardComponent resName="Meghana Foods" cuisine="South Indian" rating="4.5" deliveryTime="38 mins"/>
        <RestaurantCardComponent resName="Starbucks" cuisine="Coffee" rating="4.0" deliveryTime="25 mins"/>
        <RestaurantCardComponent resName="KFC" cuisine="Fast Food" rating="4.2" deliveryTime="40 mins"/>
        <RestaurantCardComponent resName="Burger King" cuisine="Fast Food" rating="4.1" deliveryTime="35 mins"/>
        <RestaurantCardComponent resName="Pizza Hut" cuisine="Italian" rating="4.3" deliveryTime="45 mins"/>
        <RestaurantCardComponent resName="Domino's" cuisine="Italian" rating="4.4" deliveryTime="50 mins"/>
    </div>
    </div>
    )}



export default BodyComponent;