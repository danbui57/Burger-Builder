import React from "react";
import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button"

class OrderSummary extends React.Component {
    //This could be a functional component, doesn't have to be a class
    componentDidMount () {
        console.log("[order summary] DidUpdate")
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>{igKey}:</span> {this.props.ingredients[igKey]}
                    </li>
                )
            })
        return (
            
                <Aux>
                    <h3>Your Order</h3>
                    <p>a delicious burger with the following ingredients:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to Checkout?</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.purchaseContinued}>CONTINUE</Button>
                </Aux>
            );
            
    }
};

export default OrderSummary;