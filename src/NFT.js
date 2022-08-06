import { Button } from "antd";

const NFT = ({src, price}) =>{
    return (
        <div className="NFT">
            <img className="nft_show" src={src}/>
            <div className="NFT-footer">
                <div className='price'>Price</div>
                <div className="price-amount">{price} ETH</div>
                <Button className="buy-button">BUY</Button>
            </div>
        </div>);
}

export default NFT;