import React, { Component } from "react";

const NFTContext = React.createContext();

class NFTProvider extends Component {
    state = {
        isMenuOpen: false,
    };


openMenu = () => {this.setState({isMenuOpen:true})};
closeMenu = () => {this.setState({isMenuOpen:false})};


render (){
    return (
        <NFTContext.Provider
        value={{
            ...this.state,
            openMenu: this.openMenu,
            closeMenu: this.closeMenu,
        }}>
            {this.props.children}
        </NFTContext.Provider>
        );
}

}

const NFTConsumer = NFTContext.Consumer;

export {NFTContext, NFTConsumer}

export default NFTProvider;