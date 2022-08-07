import { Modal, Alert } from "antd";

import './NFT.css';
import { useState } from "react";
import ShoppingCartOutlined from "@ant-design/icons";

const NFT = ({src, payload}) =>{
    const [visible, setVisibility] = useState(false);
    const quantity = '1/5';
    
    const handleBuyClick = () => {setVisibility(true);};

    return (
        <div className="NFT">
            <img className="nft_show" src={src}/>
            {payload.footer ? <div className="NFT-footer">
                <div className="quantity">{quantity}</div>
                <button className="buy-button" onClick={() => handleBuyClick()}> Contribute</button>
                <Modal visible={visible} onCancel={() => setVisibility(false)} onOk={() => setVisibility(false)}>
                    <img src={src}
                        style={{
                                width: "250px",
                                margin: "auto",
                                borderRadius: "10px",
                                marginBottom: "15px",
                        }}
                    />
                    <Alert message="This NFT is currently not for sale" type="warning" />
                </Modal>
            </div>:''}
        </div>);
}

export default NFT;

