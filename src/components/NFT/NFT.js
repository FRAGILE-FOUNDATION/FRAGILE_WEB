import { Button } from "antd";
import './NFT.css';

const NFT = ({src, payload}) =>{

    
    const quantity = '1/5';

    return (
        <div className="NFT">
            <img className="nft_show" src={src}/>
            {payload.footer ? <div className="NFT-footer">
                <a className="collect"><span>Collect for</span> {payload.price}</a>
                <div className="quantity">{quantity}</div>
            </div>:''}
        </div>);
}

export default NFT;