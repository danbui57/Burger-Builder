import React from "react";
import Button from "../../../components/UI/Button/Button"
import Classes from "./ContactData.module.css"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"

class ContactData extends React.Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        //  alert("You continue!")
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Daniel Buitrago",
                address: {
                    street: "Delevan st",
                    zipCode: "30325",
                    country: "USA"
                },
                email: "danbui57@test.com",
            },
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render () {
        let form = (
            <form>
                    <input className={Classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={Classes.Input} type="email" name="email" placeholder="Your Mail" />
                    <input className={Classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={Classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={Classes.ContactData }>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;